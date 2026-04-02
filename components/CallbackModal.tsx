"use client";

import { motion, AnimatePresence } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { 
  X, 
  User, 
  Mail,
  Phone, 
  MapPin, 
  BookOpen, 
  GraduationCap, 
  ChevronDown 
} from "lucide-react";

function isValidEmail(value: string): boolean {
  const trimmed = value.trim();
  if (!trimmed) return false;
  // Practical email pattern (not exhaustive RFC)
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed);
}

interface CallbackModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'callback' | 'brochure';
  triggerPoint?: 'course-inquiry' | 'general';
}

export default function CallbackModal({
  isOpen,
  onClose,
  type,
  triggerPoint = "general",
}: CallbackModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [state, setState] = useState("");
  const [degree, setDegree] = useState("");
  const [graduationYear, setGraduationYear] = useState("");

  const [status, setStatus] = useState<
    | { kind: "idle" }
    | { kind: "loading" }
    | { kind: "success"; message: string }
    | { kind: "error"; message: string }
  >({ kind: "idle" });

  const closeTimerRef = useRef<number | null>(null);

  const resetForm = () => {
    setName("");
    setEmail("");
    setWhatsappNumber("");
    setState("");
    setDegree("");
    setGraduationYear("");
  };

  useEffect(() => {
    if (!isOpen) return;
    setStatus({ kind: "idle" });
    resetForm();
  }, [isOpen, type]);

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current);
    };
  }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status.kind === "loading") return;

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
      const res = await fetch("/api/callback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type,
          triggerPoint,
          name: name.trim(),
          email: emailTrimmed,
          whatsappNumber: whatsappNumber.trim(),
          state,
          degree,
          graduationYear,
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
        message:
          type === "callback"
            ? "Submitted! We'll call you shortly."
            : "",
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
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-2 font-display">
                {type === 'callback' ? 'Request a Callback' : 'Download Brochure'}
              </h2>
              <p className="text-slate-500 font-sans">
                {type === 'callback' 
                  ? 'Our team will get in touch with you asap.' 
                  : 'Enter your details to receive the course brochure.'}
              </p>
            </div>
            
            <form className="space-y-3" onSubmit={onSubmit}>
              {/* Name Field */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-slate-400" />
                </div>
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all font-sans text-slate-600 placeholder:text-slate-400"
                  placeholder="Enter name"
                  autoComplete="name"
                />
              </div>

              {/* Email Field */}
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
                  placeholder="Enter email"
                  autoComplete="email"
                  inputMode="email"
                />
              </div>

              {/* WhatsApp Number (+91 India, same pattern as enquiry modals) */}
              <div className="flex items-stretch rounded-xl bg-slate-50 ring-0 focus-within:ring-2 focus-within:ring-indigo-500 transition-all">
                <div className="pl-4 flex items-center pointer-events-none shrink-0">
                  <Phone className="h-5 w-5 text-slate-400" />
                </div>
                <span className="flex items-center px-3 text-sm font-semibold text-slate-500 border-r border-slate-200/90 select-none">
                  +91
                </span>
                <input
                  type="tel"
                  value={whatsappNumber}
                  onChange={(e) => setWhatsappNumber(e.target.value)}
                  className="flex-1 min-w-0 py-4 pr-4 bg-transparent border-none rounded-r-xl outline-none font-sans text-slate-600 placeholder:text-slate-400"
                  placeholder="WhatsApp number"
                  autoComplete="tel-national"
                  inputMode="numeric"
                />
              </div>

              {/* State Field */}
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
                  <option value="" disabled>Select State</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Uttar Pradesh">Uttar Pradesh</option>
                </select>
                <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                  <ChevronDown className="h-5 w-5 text-slate-400" />
                </div>
              </div>

              {/* Degree Field */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <BookOpen className="h-5 w-5 text-slate-400" />
                </div>
                <select
                  value={degree}
                  onChange={(e) => setDegree(e.target.value)}
                  className={`w-full pl-12 pr-10 py-4 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all font-sans appearance-none cursor-pointer ${
                    degree ? "text-slate-600" : "text-slate-400"
                  }`}
                >
                  <option value="" disabled>Select Degree</option>
                  <option value="BE">BE</option>
                  <option value="B.Tech">B.Tech</option>
                  <option value="ME">ME</option>
                  <option value="M.Tech">M.Tech</option>
                  <option value="BCA">BCA</option>
                  <option value="MCA">MCA</option>
                  <option value="B.Sc">B.Sc</option>
                  <option value="Diploma">Diploma</option>
                  <option value="BBA">BBA</option>
                  <option value="MBA">MBA</option>
                  <option value="Others">Others</option>
                </select>
                <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                  <ChevronDown className="h-5 w-5 text-slate-400" />
                </div>
              </div>

              {/* Graduation Year Field */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <GraduationCap className="h-5 w-5 text-slate-400" />
                </div>
                <select
                  value={graduationYear}
                  onChange={(e) => setGraduationYear(e.target.value)}
                  className={`w-full pl-12 pr-10 py-4 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all font-sans appearance-none cursor-pointer ${
                    graduationYear ? "text-slate-600" : "text-slate-400"
                  }`}
                >
                  <option value="" disabled>Select Graduation Year</option>
                  <option value="2015">2015</option>
                  <option value="2016">2016</option>
                  <option value="2017">2017</option>
                  <option value="2018">2018</option>
                  <option value="2019">2019</option>
                  <option value="2020">2020</option>
                  <option value="2021">2021</option>
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                </select>
                <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                  <ChevronDown className="h-5 w-5 text-slate-400" />
                </div>
              </div>

              {status.kind === "error" && (
                <p className="text-xs font-bold text-red-600 pt-2">{status.message}</p>
              )}
              {status.kind === "success" && type === "callback" && (
                <p className="text-xs font-bold text-green-700 pt-2">{status.message}</p>
              )}

              <button 
                type="submit"
                disabled={status.kind === "loading"}
                className="w-full py-4 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 mt-6 font-sans text-lg disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status.kind === "loading"
                  ? "Submitting..."
                  : type === "callback"
                    ? "Request Callback"
                    : "Download Now"}
              </button>
            </form>

            <AnimatePresence>
              {type === "brochure" && status.kind === "success" && (
                <motion.div
                  key="brochure-success"
                  role="status"
                  aria-live="polite"
                  initial={{ opacity: 0, y: 8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 4 }}
                  transition={{ type: "spring", damping: 26, stiffness: 320 }}
                  className="pointer-events-none absolute bottom-6 left-6 right-6 z-20 flex items-center justify-center gap-2 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3.5 text-center text-sm font-semibold text-emerald-900 shadow-lg"
                >
                  <span aria-hidden className="shrink-0 select-none text-base leading-none">
                    ✅
                  </span>
                  <span>You will receive brochure shortly.</span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
