import { NextResponse } from "next/server";
import { rateLimitMemory, clientIp } from "@/lib/rate-limit-memory";
import { consumeCampusEnquiryToken } from "@/lib/campus-enquiry-tokens";

const DEFAULT_WEBHOOK =
  "https://n8n.srv1534167.hstgr.cloud/webhook/18cc6d3b-75c6-47e5-9c01-aa37cac21d34";

function allowedOrigins(request: Request): Set<string> {
  const hosts = new Set<string>();
  try {
    hosts.add(new URL(request.url).origin);
  } catch {
    /* ignore */
  }
  const publicUrl = process.env.NEXT_PUBLIC_APP_URL;
  if (publicUrl) {
    try {
      hosts.add(new URL(publicUrl).origin);
    } catch {
      /* ignore */
    }
  }
  if (process.env.VERCEL_URL) {
    hosts.add(`https://${process.env.VERCEL_URL}`);
  }
  if (process.env.NODE_ENV === "development") {
    hosts.add("http://localhost:3000");
    hosts.add("http://127.0.0.1:3000");
  }
  return hosts;
}

function isAllowedOrigin(request: Request): boolean {
  const origin = request.headers.get("origin");
  const hosts = allowedOrigins(request);
  if (process.env.NODE_ENV === "development" && !origin) {
    return true;
  }
  if (!origin) return false;
  return hosts.has(origin);
}

function isValidEmail(value: string): boolean {
  const trimmed = value.trim();
  if (!trimmed) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed);
}

export async function POST(request: Request) {
  if (!isAllowedOrigin(request)) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const ip = clientIp(request.headers);
  const rl = rateLimitMemory(`campus-enquiry-post:${ip}`, 15, 60 * 60 * 1000);
  if (!rl.ok) {
    return NextResponse.json(
      { error: "Too many requests" },
      {
        status: 429,
        headers: { "Retry-After": String(rl.retryAfterSec) },
      }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid body" }, { status: 400 });
  }

  const b = body as Record<string, unknown>;
  const formToken = typeof b.formToken === "string" ? b.formToken : undefined;
  if (!consumeCampusEnquiryToken(formToken)) {
    return NextResponse.json(
      { error: "Invalid or expired session. Please close and reopen the form." },
      { status: 401 }
    );
  }

  const name = typeof b.name === "string" ? b.name.trim() : "";
  const designation = typeof b.designation === "string" ? b.designation.trim() : "";
  const collegeName = typeof b.collegeName === "string" ? b.collegeName.trim() : "";
  const countryCode = typeof b.countryCode === "string" ? b.countryCode : "+91";
  const contactNumber = typeof b.contactNumber === "string" ? b.contactNumber.trim() : "";
  const email = typeof b.email === "string" ? b.email.trim() : "";
  const state = typeof b.state === "string" ? b.state : "";

  if (!name) {
    return NextResponse.json({ error: "Name is required" }, { status: 400 });
  }
  if (!designation) {
    return NextResponse.json({ error: "Designation is required" }, { status: 400 });
  }
  if (!collegeName) {
    return NextResponse.json({ error: "College name is required" }, { status: 400 });
  }
  if (!contactNumber) {
    return NextResponse.json({ error: "Contact number is required" }, { status: 400 });
  }
  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Valid email is required" }, { status: 400 });
  }
  if (!state) {
    return NextResponse.json({ error: "State is required" }, { status: 400 });
  }

  const webhookUrl =
    process.env.CAMPUS_ENQUIRY_WEBHOOK_URL?.trim() || DEFAULT_WEBHOOK;

  const payload = {
    type: "campus-enquiry",
    name,
    designation,
    collegeName,
    contact: {
      countryCode,
      number: contactNumber,
      full: `${countryCode}${contactNumber}`,
    },
    email,
    state,
    source: "CampusEnquiryModal",
    submittedAt: new Date().toISOString(),
  };

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: "Upstream service error" },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to submit enquiry" },
      { status: 502 }
    );
  }
}
