import { NextResponse } from "next/server";
import { rateLimitMemory, clientIp } from "@/lib/rate-limit-memory";

const DEFAULT_WEBHOOK =
  "https://n8n.srv1534167.hstgr.cloud/webhook/33db196a-d3d5-42ce-9fcc-985cb59a7a17";

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
  const rl = rateLimitMemory(`callback-post:${ip}`, 20, 60 * 60 * 1000);
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

  const type = b.type === "callback" || b.type === "brochure" ? b.type : null;
  if (!type) {
    return NextResponse.json({ error: "Invalid type" }, { status: 400 });
  }

  const triggerPoint =
    b.triggerPoint === "course-inquiry" || b.triggerPoint === "general"
      ? b.triggerPoint
      : "general";

  const name = typeof b.name === "string" ? b.name.trim() : "";
  const email = typeof b.email === "string" ? b.email.trim() : "";
  const whatsappNumber =
    typeof b.whatsappNumber === "string" ? b.whatsappNumber.trim() : "";
  const state = typeof b.state === "string" ? b.state : "";
  const degree = typeof b.degree === "string" ? b.degree : "";
  const graduationYear =
    typeof b.graduationYear === "string" ? b.graduationYear : "";

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Valid email is required" }, { status: 400 });
  }

  const countryCode = "+91";
  const webhookUrl = process.env.CALLBACK_WEBHOOK_URL?.trim() || DEFAULT_WEBHOOK;

  const payload = {
    type,
    triggerPoint,
    name,
    email,
    whatsapp: {
      countryCode,
      number: whatsappNumber,
      full: `${countryCode}${whatsappNumber}`,
    },
    state,
    degree,
    graduationYear,
    source: "CallbackModal",
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
      { error: "Failed to submit" },
      { status: 502 }
    );
  }
}
