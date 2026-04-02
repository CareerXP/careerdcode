/**
 * Simple in-memory fixed-window rate limiter.
 * Suitable for single-instance deployments; use Redis/Upstash for serverless multi-region.
 */

type Bucket = { count: number; resetAt: number };

const buckets = new Map<string, Bucket>();

function prune(key: string, now: number) {
  const b = buckets.get(key);
  if (b && now > b.resetAt) buckets.delete(key);
}

export function rateLimitMemory(
  key: string,
  limit: number,
  windowMs: number
): { ok: true } | { ok: false; retryAfterSec: number } {
  const now = Date.now();
  prune(key, now);

  let b = buckets.get(key);
  if (!b || now > b.resetAt) {
    b = { count: 1, resetAt: now + windowMs };
    buckets.set(key, b);
    return { ok: true };
  }

  if (b.count >= limit) {
    return { ok: false, retryAfterSec: Math.ceil((b.resetAt - now) / 1000) };
  }

  b.count += 1;
  return { ok: true };
}

export function clientIp(headers: Headers): string {
  const forwarded = headers.get("x-forwarded-for");
  if (forwarded) {
    const first = forwarded.split(",")[0]?.trim();
    if (first) return first;
  }
  const real = headers.get("x-real-ip");
  if (real?.trim()) return real.trim();
  return "unknown";
}
