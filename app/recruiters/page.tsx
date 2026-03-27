"use client";

import { motion } from "motion/react";
import { ArrowRight, Building2, Users, Zap, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";

export default function RecruitersPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column: Value Proposition */}
            <div className="space-y-12">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <span className="w-12 h-[1px] bg-indigo-600"></span>
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-600 font-mono">
                    Hiring Partners
                  </span>
                </div>
                <h1 className="text-5xl sm:text-7xl font-black text-slate-900 leading-[0.9] tracking-tight uppercase font-display">
                  Hire Top <br />
                  <span className="text-indigo-600">Tech Talent.</span>
                </h1>
                <p className="text-slate-500 text-xl font-medium leading-relaxed max-w-xl">
                  Connect with industry-ready developers and QA engineers trained by experts from top tech companies.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                <div className="space-y-4 p-6 bg-slate-50 rounded-3xl border border-slate-100">
                  <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white">
                    <Zap size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Zero Hiring Fee</h3>
                  <p className="text-sm text-slate-500 font-medium">No placement fees. Hire directly from our pool of vetted candidates.</p>
                </div>
                <div className="space-y-4 p-6 bg-slate-50 rounded-3xl border border-slate-100">
                  <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white">
                    <Users size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Vetted Talent</h3>
                  <p className="text-sm text-slate-500 font-medium">Every candidate goes through rigorous technical assessments and mock interviews.</p>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Trusted by Teams at</p>
                <div className="flex flex-wrap gap-8 opacity-40 grayscale">
                  {/* Mock Logos */}
                  <div className="text-2xl font-black text-slate-900">GOOGLE</div>
                  <div className="text-2xl font-black text-slate-900">AMAZON</div>
                  <div className="text-2xl font-black text-slate-900">META</div>
                </div>
              </div>
            </div>

            {/* Right Column: Lead Form */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-[48px] border border-slate-100 p-8 sm:p-12 shadow-2xl shadow-indigo-100/50"
            >
              <div className="mb-10">
                <h2 className="text-3xl font-bold text-slate-900 font-display tracking-tight mb-2">Partner with Us</h2>
                <p className="text-slate-500 font-medium">Fill out the form below and our partnership team will get in touch.</p>
              </div>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:border-indigo-600 transition-colors font-medium"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Work Email</label>
                    <input 
                      type="email" 
                      placeholder="john@company.com"
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:border-indigo-600 transition-colors font-medium"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Company Name</label>
                  <input 
                    type="text" 
                    placeholder="Tech Solutions Inc."
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:border-indigo-600 transition-colors font-medium"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Hiring Needs</label>
                  <select className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:border-indigo-600 transition-colors font-medium appearance-none">
                    <option>Full Stack Developers</option>
                    <option>Frontend Developers</option>
                    <option>Backend Developers</option>
                    <option>QA Automation Engineers</option>
                    <option>Data Scientists</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Message (Optional)</label>
                  <textarea 
                    placeholder="Tell us about your hiring requirements..."
                    rows={4}
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:border-indigo-600 transition-colors font-medium resize-none"
                  ></textarea>
                </div>

                <button className="w-full py-5 bg-indigo-600 text-white font-black text-xs uppercase tracking-widest rounded-2xl hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 flex items-center justify-center gap-4 group">
                  Submit Request
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>

                <p className="text-center text-[10px] text-slate-400 font-medium">
                  By submitting, you agree to our <span className="text-slate-900 underline">Privacy Policy</span>.
                </p>
              </form>
            </motion.div>

          </div>
        </div>
      </main>
    </div>
  );
}
