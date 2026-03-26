"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { ArrowUpRight, Download, Users, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-white">
      {/* Background Grid Accent */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#4f46e5 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Content: Massive Typography */}
          <div className="lg:col-span-7 space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <span className="w-12 h-[1px] bg-indigo-600"></span>
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-600 font-mono">
                  Next Gen Learning
                </span>
              </div>
              
              <h1 className="text-6xl sm:text-8xl lg:text-[110px] font-black text-slate-900 leading-[0.88] tracking-tight uppercase font-display">
                Tired of learning <br />
                <span className="text-indigo-600">but not getting placed.</span>
              </h1>
              
              <p className="text-slate-500 text-lg sm:text-xl font-medium leading-relaxed max-w-xl">
                Here’s how CareerXP turns your effort into offers — with a structured, placement-first approach.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap gap-6 items-center"
            >
              <button className="group px-10 py-5 bg-slate-900 text-white font-black text-xs uppercase tracking-widest rounded-2xl hover:bg-indigo-600 transition-all shadow-2xl shadow-slate-200 flex items-center gap-4">
                Book Free Call
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:rotate-45 transition-transform">
                  <ArrowUpRight size={18} />
                </div>
              </button>
              
              <button className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-slate-900 group">
                <div className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-slate-50 transition-colors">
                  <Download size={16} />
                </div>
                Download Brochure
              </button>
            </motion.div>

         
           
          </div>

          {/* Right Content: Immersive Image */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[4/5] rounded-[60px] overflow-hidden shadow-2xl shadow-indigo-100 group"
            >
              <Image
                src="https://picsum.photos/seed/engineering/1200/1500"
                alt="Engineering Excellence"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-1000"
                referrerPolicy="no-referrer"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-60"></div>
              
          
              <div className="absolute bottom-10 left-10 right-10 p-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-[32px]">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white">
                    <Users size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-white/60 uppercase tracking-widest">Mentorship</p>
                    <p className="text-sm font-bold text-white">Learn from IIT Delhi Alumni</p>
                  </div>
                </div>
              </div>
            </motion.div>

         
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-600/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-indigo-600/5 rounded-full blur-3xl -z-10"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
