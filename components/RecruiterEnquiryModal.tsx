"use client";

import { motion, AnimatePresence } from "motion/react";
import { useEffect, useMemo, useRef, useState } from "react";
import { X, User, Mail, Phone, Building2, Briefcase, ChevronDown } from "lucide-react";

function isValidEmail(value: string): boolean {
  const trimmed = value.trim();
  if (!trimmed) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed);
}

interface RecruiterEnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RecruiterEnquiryModal({
  isOpen,
  onClose,
}: RecruiterEnquiryModalProps) {
  const WEBHOOK_URL = useMemo(
    () =>
      "https://n8n.srv1534167.hstgr.cloud/webhook/33db196a-d3d5-42ce-9fcc-985cb59a7a17",
    []
  );

  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
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
    setCountryCode("+91");
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
    const phoneTrimmed = contactNumber.trim();
    if (!phoneTrimmed) {
      setStatus({ kind: "error", message: "Please enter your contact number." });
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
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "recruiter-enquiry",
          name: nameTrimmed,
          designation: designation.trim(),
          companyName: companyName.trim(),
          contact: {
            countryCode,
            number: phoneTrimmed,
            full: `${countryCode}${phoneTrimmed}`,
          },
          email: emailTrimmed,
          source: "RecruiterEnquiryModal",
          submittedAt: new Date().toISOString(),
        }),
      });

      if (!res.ok) {
        throw new Error(`Webhook request failed (${res.status})`);
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
            className="relative w-full max-w-md bg-white rounded-3xl p-8 shadow-2xl overflow-visible"
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

              <div className="flex gap-2">
                <div className="relative w-32">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Phone className="h-5 w-5 text-slate-400" />
                  </div>
                  <select
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    className="w-full pl-12 pr-8 py-4 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all font-sans text-slate-600 appearance-none cursor-pointer"
                  >
                    <option>+91</option>
                    <option>+1</option>
                    <option>+44</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <ChevronDown className="h-4 w-4 text-slate-400" />
                  </div>
                </div>
                <div className="relative flex-grow">
                  <input
                    type="tel"
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                    className="w-full px-4 py-4 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all font-sans text-slate-600 placeholder:text-slate-400"
                    placeholder="Contact number"
                    autoComplete="tel-national"
                  />
                </div>
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
