import { X, User, Phone, MapPin, GraduationCap, BookOpen, Briefcase, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface CallbackModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'callback' | 'brochure';
}

export default function CallbackModal({ isOpen, onClose, type }: CallbackModalProps) {
  const isBrochure = type === 'brochure';

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] overflow-y-auto no-scrollbar">
          <div className="flex min-h-full items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden my-8"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors z-10"
              >
                <X size={20} />
              </button>

              <div className="p-8 pt-10">
                {/* Logo */}
                <div className="flex items-center gap-2 mb-8">
                  <div className="w-6 h-6 bg-blue-600 rotate-45 flex items-center justify-center rounded-sm">
                    <div className="w-3 h-3 bg-white -rotate-45"></div>
                  </div>
                  <span className="text-xl font-bold tracking-tight text-slate-900">CareerDCode</span>
                </div>

                {/* Header */}
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">
                    {isBrochure ? 'Your Dream Career Awaits!' : 'Request a Callback'}
                  </h2>
                  <p className="text-slate-500 text-sm">
                    {isBrochure ? 'Fill your details to download Brochure' : 'Our team will get in touch with you asap.'}
                  </p>
                </div>

                {/* Form */}
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  {/* Name */}
                  <div className="relative group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors">
                      <User size={18} />
                    </div>
                    <input
                      type="text"
                      placeholder="Enter name"
                      className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-transparent focus:border-blue-600 focus:bg-white rounded-xl text-sm font-medium outline-none transition-all"
                    />
                  </div>

                  {/* WhatsApp Number */}
                  <div className="flex gap-2">
                    <div className="relative w-24">
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                        <Phone size={16} />
                      </div>
                      <select className="w-full pl-8 pr-2 py-3.5 bg-slate-50 border border-transparent rounded-xl text-sm font-medium outline-none appearance-none cursor-pointer">
                        <option>+91</option>
                      </select>
                      <div className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                        <ChevronDown size={14} />
                      </div>
                    </div>
                    <input
                      type="tel"
                      placeholder="Enter whatsapp number"
                      className="flex-1 px-4 py-3.5 bg-slate-50 border border-transparent focus:border-blue-600 focus:bg-white rounded-xl text-sm font-medium outline-none transition-all"
                    />
                  </div>

                  {/* State */}
                  <div className="relative group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors">
                      <MapPin size={18} />
                    </div>
                    <select className="w-full pl-12 pr-10 py-3.5 bg-slate-50 border border-transparent focus:border-blue-600 focus:bg-white rounded-xl text-sm font-medium outline-none appearance-none cursor-pointer transition-all text-slate-500">
                      <option value="" disabled selected>Select State</option>
                      <option>Maharashtra</option>
                      <option>Delhi</option>
                      <option>Karnataka</option>
                      <option>Telangana</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                      <ChevronDown size={18} />
                    </div>
                  </div>

                  {/* Degree */}
                  <div className="relative group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors">
                      <BookOpen size={18} />
                    </div>
                    <select className="w-full pl-12 pr-10 py-3.5 bg-slate-50 border border-transparent focus:border-blue-600 focus:bg-white rounded-xl text-sm font-medium outline-none appearance-none cursor-pointer transition-all text-slate-500">
                      <option value="" disabled selected>Select Degree</option>
                      <option>B.E / B.Tech</option>
                      <option>M.E / M.Tech</option>
                      <option>BCA / MCA</option>
                      <option>Other</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                      <ChevronDown size={18} />
                    </div>
                  </div>

                  {/* Graduation Year */}
                  <div className="relative group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors">
                      <GraduationCap size={18} />
                    </div>
                    <select className="w-full pl-12 pr-10 py-3.5 bg-slate-50 border border-transparent focus:border-blue-600 focus:bg-white rounded-xl text-sm font-medium outline-none appearance-none cursor-pointer transition-all text-slate-500">
                      <option value="" disabled selected>Select Graduation Year</option>
                      <option>2024</option>
                      <option>2025</option>
                      <option>2026</option>
                      <option>Already Graduated</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                      <ChevronDown size={18} />
                    </div>
                  </div>

                  {/* Job Status */}
                  <div className="relative group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors">
                      <Briefcase size={18} />
                    </div>
                    <select className="w-full pl-12 pr-10 py-3.5 bg-slate-50 border border-transparent focus:border-blue-600 focus:bg-white rounded-xl text-sm font-medium outline-none appearance-none cursor-pointer transition-all text-slate-500">
                      <option value="" disabled selected>Job Status</option>
                      <option>Student</option>
                      <option>Working Professional</option>
                      <option>Job Seeker</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                      <ChevronDown size={18} />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button className="w-full py-4 mt-4 bg-blue-600 text-white rounded-xl font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all">
                    {isBrochure ? 'Download Brochure' : 'Request Callback'}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
