"use client";

import { motion } from "motion/react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Section */}
          <div className="max-w-3xl mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <span className="w-12 h-[1px] bg-indigo-600"></span>
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-600 font-mono">
                  Get In Touch
                </span>
              </div>
              <h1 className="text-5xl sm:text-7xl font-black text-slate-900 leading-[0.9] tracking-tight uppercase font-display">
                Let's Start a <br />
                <span className="text-indigo-600">Conversation.</span>
              </h1>
              <p className="text-slate-500 text-xl font-medium leading-relaxed">
                Have questions about our courses or career paths? Our team is here to help you navigate your tech journey.
              </p>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-12 gap-16 items-start">
            
            {/* Contact Information */}
            <div className="lg:col-span-12 max-w-3xl mx-auto space-y-12">
              <div className="grid gap-8">
                <div className="flex gap-6 p-8 bg-slate-50 rounded-[32px] border border-slate-100 group hover:border-indigo-100 transition-colors">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-indigo-600 shadow-sm group-hover:bg-indigo-600 group-hover:text-white transition-all">
                    <Mail size={24} />
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Email Us</p>
                    <p className="text-lg font-bold text-slate-900">hello@careerxp.com</p>
                    <p className="text-sm text-slate-500">We usually reply within 24 hours.</p>
                  </div>
                </div>

                <div className="flex gap-6 p-8 bg-slate-50 rounded-[32px] border border-slate-100 group hover:border-indigo-100 transition-colors">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-indigo-600 shadow-sm group-hover:bg-indigo-600 group-hover:text-white transition-all">
                    <Phone size={24} />
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Call Us</p>
                    <p className="text-lg font-bold text-slate-900">+91 98765 43210</p>
                    <p className="text-sm text-slate-500">Mon-Sat, 10am to 7pm IST</p>
                  </div>
                </div>

                <div className="flex gap-6 p-8 bg-slate-50 rounded-[32px] border border-slate-100 group hover:border-indigo-100 transition-colors">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-indigo-600 shadow-sm group-hover:bg-indigo-600 group-hover:text-white transition-all">
                    <MapPin size={24} />
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Visit Us</p>
                    <p className="text-lg font-bold text-slate-900">Tech Hub, Sector 62</p>
                    <p className="text-sm text-slate-500">Noida, Uttar Pradesh 201301</p>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-indigo-600 rounded-[40px] text-white relative overflow-hidden group">
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-colors"></div>
                <div className="relative z-10 space-y-6">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Clock size={24} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">Office Hours</h3>
                    <p className="text-indigo-100 font-medium leading-relaxed">
                      Our support team is available Monday through Saturday to assist you with any queries.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form — temporarily disabled
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-7 bg-white rounded-[48px] border border-slate-100 p-8 sm:p-12 shadow-2xl shadow-indigo-100/50"
            >
              <div className="mb-10">
                <h2 className="text-3xl font-bold text-slate-900 font-display tracking-tight mb-2">Send a Message</h2>
                <p className="text-slate-500 font-medium">Fill out the form and we'll get back to you shortly.</p>
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
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:border-indigo-600 transition-colors font-medium"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Subject</label>
                  <select className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:border-indigo-600 transition-colors font-medium appearance-none">
                    <option>Course Inquiry</option>
                    <option>Placement Support</option>
                    <option>Technical Issue</option>
                    <option>Partnership</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Message</label>
                  <textarea 
                    placeholder="How can we help you?"
                    rows={6}
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:border-indigo-600 transition-colors font-medium resize-none"
                  ></textarea>
                </div>

                <button className="w-full py-5 bg-indigo-600 text-white font-black text-xs uppercase tracking-widest rounded-2xl hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 flex items-center justify-center gap-4 group">
                  Send Message
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </motion.div>
            */}

          </div>
        </div>
      </main>
    </div>
  );
}
