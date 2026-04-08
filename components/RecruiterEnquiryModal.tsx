"use client";

import { motion, AnimatePresence } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { X, User, Mail, Phone, Building2, Briefcase } from "lucide-react";

function isValidEmail(value: string): boolean {
  const trimmed = value.trim();
  if (!trimmed) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed);
}

function normalizeIndianMobile(value: string): string {
  return value.replace(/\D/g, "").slice(0, 10);
}

interface RecruiterEnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RecruiterEnquiryModal({
  isOpen,
  onClose,
}: RecruiterEnquiryModalProps) {
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");

  const [status, setStatus] = useState<
    | { kind: "idle" }
    | { kind: "loading" }
    | { kind: "success"; message: string }
    | { kind: "error"; message: string }
  >({ kind: "idle" });

  const closeTimerRef = useRef<number | null>(null);

  const resetForm = () => {
    setName("");
    setDesignation("");
    setCompanyName("");
    setContactNumber("");
    setEmail("");
  };

  useEffect(() => {
    if (!isOpen) return;
    setStatus({ kind: "idle" });
    resetForm();
  }, [isOpen]);

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current);
    };
  }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status.kind === "loading") return;

    const nameTrimmed = name.trim();
    if (!nameTrimmed) {
      setStatus({ kind: "error", message: "Please enter your name." });
      return;
    }
    if (!designation.trim()) {
      setStatus({ kind: "error", message: "Please enter your designation." });
      return;
    }
    if (!companyName.trim()) {
      setStatus({ kind: "error", message: "Please enter your company name." });
      return;
    }
    const phoneNormalized = normalizeIndianMobile(contactNumber);
    if (!phoneNormalized) {
      setStatus({ kind: "error", message: "Please enter your contact number." });
      return;
    }
    if (phoneNormalized.length !== 10) {
      setStatus({
        kind: "error",
        message: "Please enter a valid 10-digit mobile number.",
      });
      return;
    }
    const emailTrimmed = email.trim();
    if (!isValidEmail(emailTrimmed)) {
      setStatus({
        kind: "error",
        message: "Please enter a valid email address.",
      });
      return;
    }

    setStatus({ kind: "loading" });

    try {
      const res = await fetch("/api/recruiter-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: nameTrimmed,
          designation: designation.trim(),
          companyName: companyName.trim(),
          contactNumber: phoneNormalized,
          email: emailTrimmed,
        }),
      });

      const data = (await res.json().catch(() => ({}))) as { error?: string };

      if (!res.ok) {
        throw new Error(
          data.error ||
            (res.status === 429
              ? "Too many attempts. Please try again later."
              : `Request failed (${res.status})`)
        );
      }

      setStatus({
        kind: "success",
        message: "Submitted! Our team will reach out shortly.",
      });
      resetForm();

      if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = window.setTimeout(() => {
        onClose();
      }, 1200);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setStatus({ kind: "error", message });
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-md max-h-[min(90vh,calc(100vh-2rem))] overflow-y-auto bg-white rounded-3xl p-8 shadow-2xl [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-2 font-display">
                Recruiter Enquiry
              </h2>
              <p className="text-slate-500 font-sans">
                Share your details and we&apos;ll get in touch with you asap.
              </p>
            </div>

            <form className="space-y-3" onSubmit={onSubmit}>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all font-sans text-slate-600 placeholder:text-slate-400"
                  placeholder="Name"
                  autoComplete="name"
                />
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Briefcase className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  type="text"
                  value={designation}
                  onChange={(e) => setDesignation(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all font-sans text-slate-600 placeholder:text-slate-400"
                  placeholder="Designation"
                  autoComplete="organization-title"
                />
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Building2 className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all font-sans text-slate-600 placeholder:text-slate-400"
                  placeholder="Company name"
                  autoComplete="organization"
                />
              </div>

              <div className="flex items-stretch rounded-xl bg-slate-50 ring-0 focus-within:ring-2 focus-within:ring-indigo-500 transition-all">
                <div className="pl-4 flex items-center pointer-events-none shrink-0">
                  <Phone className="h-5 w-5 text-slate-400" />
                </div>
                <span className="flex items-center px-3 text-sm font-semibold text-slate-500 border-r border-slate-200/90 select-none">
                  +91
                </span>
                <input
                  type="tel"
                  value={contactNumber}
                  onChange={(e) => {
                    setContactNumber(normalizeIndianMobile(e.target.value));
                    if (status.kind === "error") setStatus({ kind: "idle" });
                  }}
                  className="flex-1 min-w-0 py-4 pr-4 bg-transparent border-none rounded-r-xl outline-none font-sans text-slate-600 placeholder:text-slate-400"
                  placeholder="Mobile number"
                  autoComplete="tel-national"
                  inputMode="numeric"
                  maxLength={10}
                />
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status.kind === "error") setStatus({ kind: "idle" });
                  }}
                  className="w-full pl-12 pr-4 py-4 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all font-sans text-slate-600 placeholder:text-slate-400"
                  placeholder="Email"
                  autoComplete="email"
                  inputMode="email"
                />
              </div>

              {status.kind === "error" && (
                <p className="text-xs font-bold text-red-600 pt-2">{status.message}</p>
              )}
              {status.kind === "success" && (
                <p className="text-xs font-bold text-green-700 pt-2">{status.message}</p>
              )}

              <button
                type="submit"
                disabled={status.kind === "loading"}
                className="w-full py-4 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 mt-6 font-sans text-lg disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status.kind === "loading" ? "Submitting..." : "Submit enquiry"}
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
