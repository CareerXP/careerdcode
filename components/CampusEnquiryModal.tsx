"use client";

import { motion, AnimatePresence } from "motion/react";
import { useEffect, useRef, useState } from "react";
import {
  X,
  User,
  Mail,
  Phone,
  Briefcase,
  GraduationCap,
  MapPin,
  ChevronDown,
} from "lucide-react";

function isValidEmail(value: string): boolean {
  const trimmed = value.trim();
  if (!trimmed) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed);
}

function normalizeIndianMobile(value: string): string {
  return value.replace(/\D/g, "").slice(0, 10);
}

interface CampusEnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CampusEnquiryModal({
  isOpen,
  onClose,
}: CampusEnquiryModalProps) {
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [state, setState] = useState("");

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
    setCollegeName("");
    setContactNumber("");
    setEmail("");
    setState("");
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
    if (!collegeName.trim()) {
      setStatus({ kind: "error", message: "Please enter your college name." });
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
    if (!state) {
      setStatus({ kind: "error", message: "Please select your state." });
      return;
    }

    setStatus({ kind: "loading" });

    try {
      const res = await fetch("/api/campus-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: nameTrimmed,
          designation: designation.trim(),
          collegeName: collegeName.trim(),
          contactNumber: phoneNormalized,
          email: emailTrimmed,
          state,
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
                Campus Enquiry
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
                  <GraduationCap className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  type="text"
                  value={collegeName}
                  onChange={(e) => setCollegeName(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all font-sans text-slate-600 placeholder:text-slate-400"
                  placeholder="College name"
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

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <MapPin className="h-5 w-5 text-slate-400" />
                </div>
                <select
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className={`w-full pl-12 pr-10 py-4 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all font-sans appearance-none cursor-pointer ${
                    state ? "text-slate-600" : "text-slate-400"
                  }`}
                >
                  <option value="" disabled>
                    Select State
                  </option>
                  <option value="Andaman and Nicobar Islands">
                    Andaman and Nicobar Islands
                  </option>
                  <option value="Andhra Pradesh">Andhra Pradesh</option>
                  <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                  <option value="Assam">Assam</option>
                  <option value="Bihar">Bihar</option>
                  <option value="Chandigarh">Chandigarh</option>
                  <option value="Chhattisgarh">Chhattisgarh</option>
                  <option value="Dadra and Nagar Haveli and Daman and Diu">
                    Dadra and Nagar Haveli and Daman and Diu
                  </option>
                  <option value="Delhi">Delhi</option>
                  <option value="Goa">Goa</option>
                  <option value="Gujarat">Gujarat</option>
                  <option value="Haryana">Haryana</option>
                  <option value="Himachal Pradesh">Himachal Pradesh</option>
                  <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                  <option value="Jharkhand">Jharkhand</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Kerala">Kerala</option>
                  <option value="Ladakh">Ladakh</option>
                  <option value="Lakshadweep">Lakshadweep</option>
                  <option value="Madhya Pradesh">Madhya Pradesh</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Manipur">Manipur</option>
                  <option value="Meghalaya">Meghalaya</option>
                  <option value="Mizoram">Mizoram</option>
                  <option value="Nagaland">Nagaland</option>
                  <option value="Odisha">Odisha</option>
                  <option value="Puducherry">Puducherry</option>
                  <option value="Punjab">Punjab</option>
                  <option value="Rajasthan">Rajasthan</option>
                  <option value="Sikkim">Sikkim</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Telangana">Telangana</option>
                  <option value="Tripura">Tripura</option>
                  <option value="Uttar Pradesh">Uttar Pradesh</option>
                  <option value="Uttarakhand">Uttarakhand</option>
                  <option value="West Bengal">West Bengal</option>
                </select>
                <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                  <ChevronDown className="h-5 w-5 text-slate-400" />
                </div>
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
