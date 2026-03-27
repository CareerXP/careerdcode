"use client";

import { motion, AnimatePresence } from "motion/react";
import { useEffect, useMemo, useState } from "react";
import { 
  X, 
  User, 
  Phone, 
  MapPin, 
  BookOpen, 
  GraduationCap, 
  Briefcase, 
  ChevronDown 
} from "lucide-react";

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
  const WEBHOOK_URL = useMemo(
    () =>
      "https://n8n.srv1534167.hstgr.cloud/webhook/33db196a-d3d5-42ce-9fcc-985cb59a7a17",
    []
  );

  const [name, setName] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
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

  useEffect(() => {
    if (!isOpen) return;
    setStatus({ kind: "idle" });
  }, [isOpen]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status.kind === "loading") return;

    setStatus({ kind: "loading" });

    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type,
          triggerPoint,
          name: name.trim(),
          whatsapp: {
            countryCode,
            number: whatsappNumber.trim(),
            full: `${countryCode}${whatsappNumber.trim()}`,
          },
          state,
          degree,
          graduationYear,
          source: "CallbackModal",
          submittedAt: new Date().toISOString(),
        }),
      });

      if (!res.ok) {
        throw new Error(`Webhook request failed (${res.status})`);
      }

      setStatus({
        kind: "success",
        message:
          type === "callback"
            ? "Submitted! We'll call you shortly."
            : "Submitted! You'll receive the brochure soon.",
      });
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
            className="relative w-full max-w-md bg-white rounded-3xl p-8 shadow-2xl overflow-hidden"
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
                />
              </div>

              {/* WhatsApp Number Field */}
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
                    value={whatsappNumber}
                    onChange={(e) => setWhatsappNumber(e.target.value)}
                    className="w-full px-4 py-4 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all font-sans text-slate-600 placeholder:text-slate-400"
                    placeholder="Enter whatsapp number"
                  />
                </div>
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
                  <option value="B.Tech">B.Tech</option>
                  <option value="BCA">BCA</option>
                  <option value="MCA">MCA</option>
                  <option value="Other">Other</option>
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
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                  <option value="Earlier">Earlier</option>
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
                {status.kind === "loading"
                  ? "Submitting..."
                  : type === "callback"
                    ? "Request Callback"
                    : "Download Now"}
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
