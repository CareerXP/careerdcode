import { X, User, Phone, MapPin, GraduationCap, BookOpen, Briefcase, ChevronDown, ArrowRight } from 'lucide-react';
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
              className="relative w-full max-w-lg bg-white rounded-[32px] shadow-2xl overflow-hidden my-8 border border-slate-100"
            >
              {/* Technical Grid Background */}
              <div className="absolute inset-0 -z-10 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:32px_32px]"></div>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-8 right-8 p-3 text-slate-400 hover:text-slate-900 hover:bg-slate-50 rounded-2xl transition-all z-10 border border-transparent hover:border-slate-100"
              >
                <X size={20} />
              </button>

              <div className="p-10 lg:p-14">
                {/* Badge & Logo */}
                <div className="flex flex-col gap-6 mb-12">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-600 rotate-45 flex items-center justify-center rounded-sm shadow-lg shadow-blue-100">
                        <div className="w-4 h-4 bg-white -rotate-45"></div>
                      </div>
                      <span className="text-2xl font-bold tracking-tighter text-slate-900 font-display">CareerDCode.</span>
                    </div>
                  </div>
                  <div>
                    <span className="bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-blue-100">
                      {isBrochure ? 'RESOURCES' : 'ADMISSIONS'}
                    </span>
                  </div>
                </div>

                {/* Header */}
                <div className="mb-12">
                  <h2 className="text-4xl font-bold text-slate-900 mb-4 font-display tracking-tight leading-tight">
                    {isBrochure ? 'Your Dream Career ' : 'Request a '}
                    <span className="text-blue-600">{isBrochure ? 'Awaits.' : 'Callback.'}</span>
                  </h2>
                  <p className="text-slate-500 font-medium leading-relaxed">
                    {isBrochure ? 'Fill your details to download the comprehensive course brochure.' : 'Our admissions team will get in touch with you within 24 hours.'}
                  </p>
                </div>

                {/* Form */}
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">FULL NAME</label>
                    <div className="relative group">
                      <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors">
                        <User size={18} />
                      </div>
                      <input
                        type="text"
                        placeholder="e.g. John Doe"
                        className="w-full pl-14 pr-6 py-4 bg-slate-50 border border-slate-100 focus:border-blue-600 focus:bg-white rounded-2xl text-sm font-bold outline-none transition-all placeholder:text-slate-300"
                      />
                    </div>
                  </div>

                  {/* WhatsApp Number */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">WHATSAPP NUMBER</label>
                    <div className="flex gap-3">
                      <div className="relative w-28 shrink-0">
                        <select className="w-full pl-5 pr-10 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-sm font-bold outline-none appearance-none cursor-pointer focus:border-blue-600 focus:bg-white transition-all">
                          <option>+91</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                          <ChevronDown size={16} />
                        </div>
                      </div>
                      <input
                        type="tel"
                        placeholder="98765 43210"
                        className="flex-1 px-6 py-4 bg-slate-50 border border-slate-100 focus:border-blue-600 focus:bg-white rounded-2xl text-sm font-bold outline-none transition-all placeholder:text-slate-300"
                      />
                    </div>
                  </div>

                  {/* Two Column Grid for Selects */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* State */}
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">STATE</label>
                      <div className="relative">
                        <select 
                          defaultValue=""
                          className="w-full pl-5 pr-10 py-4 bg-slate-50 border border-slate-100 focus:border-blue-600 focus:bg-white rounded-2xl text-sm font-bold outline-none appearance-none cursor-pointer transition-all text-slate-900"
                        >
                          <option value="" disabled>Select State</option>
                          <option>Maharashtra</option>
                          <option>Delhi</option>
                          <option>Karnataka</option>
                          <option>Telangana</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                          <ChevronDown size={18} />
                        </div>
                      </div>
                    </div>

                    {/* Degree */}
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">DEGREE</label>
                      <div className="relative">
                        <select 
                          defaultValue=""
                          className="w-full pl-5 pr-10 py-4 bg-slate-50 border border-slate-100 focus:border-blue-600 focus:bg-white rounded-2xl text-sm font-bold outline-none appearance-none cursor-pointer transition-all text-slate-900"
                        >
                          <option value="" disabled>Select Degree</option>
                          <option>B.E / B.Tech</option>
                          <option>M.E / M.Tech</option>
                          <option>BCA / MCA</option>
                          <option>Other</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                          <ChevronDown size={18} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button className="w-full py-5 mt-6 bg-slate-900 text-white rounded-2xl font-bold font-display text-xs uppercase tracking-[0.2em] shadow-2xl shadow-slate-200 hover:bg-blue-600 transition-all group">
                    <span className="flex items-center justify-center gap-3">
                      {isBrochure ? 'Download Brochure' : 'Request Callback'}
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>

                  <p className="text-[10px] text-center text-slate-400 leading-relaxed font-black uppercase tracking-widest pt-4">
                    Secure & Encrypted. We respect your privacy.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
