"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, Users, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-[#050505]">
      {/* HackerEarth-style Vibrant Gradient Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#4c1d95] to-[#be185d] opacity-90"></div>
        
        {/* Animated Glows */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px]"
        ></motion.div>
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 -right-20 w-[700px] h-[700px] bg-pink-600/20 rounded-full blur-[150px]"
        ></motion.div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8"
          >
            <div className="flex items-center justify-center gap-3">
              <span className="w-8 h-[1px] bg-white/30"></span>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/60 font-mono">
                Placement-First Learning
              </span>
              <span className="w-8 h-[1px] bg-white/30"></span>
            </div>
            
            <h1 className="text-5xl sm:text-7xl lg:text-[90px] font-black text-white leading-[1.1] tracking-tight font-display">
              Tired of learning <br />
              <span className="text-white/90">but not getting placed.</span>
            </h1>
            
            <p className="text-white/70 text-lg sm:text-2xl font-medium leading-relaxed max-w-3xl mx-auto">
              Here’s how CareerXP turns your effort into offers — with a structured, placement-first approach.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap gap-6 items-center justify-center"
          >
            <Link 
              href="#steps"
              className="group px-12 py-5 bg-white text-slate-900 font-black text-sm uppercase tracking-widest rounded-xl hover:bg-indigo-50 transition-all shadow-2xl shadow-white/10 flex items-center gap-4"
            >
              Job Seekers
              <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
            
            <Link 
              href="/campus"
              className="px-12 py-5 bg-transparent border-2 border-white/30 text-white font-black text-sm uppercase tracking-widest rounded-xl hover:bg-white/10 hover:border-white transition-all flex items-center gap-4 group"
            >
              For Campus
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

        
        </div>
      </div>

     
    </section>
  );
}
