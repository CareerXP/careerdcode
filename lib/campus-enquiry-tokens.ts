/**
 * One-time form tokens (in-memory). Mitigates blind replay of a captured POST;
 * pair with rate limiting. For multiple server instances, replace with Redis.
 */

import { randomBytes } from "crypto";

const TOKEN_TTL_MS = 10 * 60 * 1000; // 10 minutes
const tokens = new Map<string, number>(); // token -> expiresAt

function sweep(now: number) {
  for (const [t, exp] of tokens) {
    if (exp <= now) tokens.delete(t);
  }
}

export function mintCampusEnquiryToken(): string {
  const now = Date.now();
  sweep(now);
  const token = randomBytes(32).toString("hex");
  tokens.set(token, now + TOKEN_TTL_MS);
  return token;
}

export function consumeCampusEnquiryToken(token: string | undefined): boolean {
  if (!token || typeof token !== "string" || token.length < 32) return false;
  const now = Date.now();
  sweep(now);
  const exp = tokens.get(token);
  if (!exp || exp < now) {
    tokens.delete(token);
    return false;
  }
  tokens.delete(token);
  return true;
}
