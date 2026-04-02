/**
 * One-time tokens for recruiter enquiry (separate store from campus).
 * For multiple server instances, replace with Redis.
 */

import { randomBytes } from "crypto";

const TOKEN_TTL_MS = 10 * 60 * 1000;
const tokens = new Map<string, number>();

function sweep(now: number) {
  for (const [t, exp] of tokens) {
    if (exp <= now) tokens.delete(t);
  }
}

export function mintRecruiterEnquiryToken(): string {
  const now = Date.now();
  sweep(now);
  const token = randomBytes(32).toString("hex");
  tokens.set(token, now + TOKEN_TTL_MS);
  return token;
}

export function consumeRecruiterEnquiryToken(token: string | undefined): boolean {
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
