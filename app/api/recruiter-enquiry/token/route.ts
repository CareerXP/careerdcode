import { NextResponse } from "next/server";
import { rateLimitMemory, clientIp } from "@/lib/rate-limit-memory";
import { mintRecruiterEnquiryToken } from "@/lib/recruiter-enquiry-tokens";

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

export async function GET(request: Request) {
  if (!isAllowedOrigin(request)) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const ip = clientIp(request.headers);
  const rl = rateLimitMemory(`recruiter-enquiry-token:${ip}`, 40, 60 * 60 * 1000);
  if (!rl.ok) {
    return NextResponse.json(
      { error: "Too many requests" },
      {
        status: 429,
        headers: { "Retry-After": String(rl.retryAfterSec) },
      }
    );
  }

  const token = mintRecruiterEnquiryToken();
  return NextResponse.json({ token });
}
