"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center pt-20 overflow-hidden bg-white">
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-indigo-700 uppercase bg-indigo-100 rounded-full">
            Accelerate Your Career
          </span>
          <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-tight mb-6 font-display">
          Tired of <span className="text-indigo-600">learning</span> but not getting placed
          </h1>
          <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
          Here’s how CareerXP turns your effort into offers — with a structured, placement-first approach.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-4 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200">
            Book Free Career Call
            </button>
            <button className="px-8 py-4 bg-amber-500 text-white font-semibold rounded-xl hover:bg-amber-600 transition-colors shadow-lg shadow-amber-200">
            Download Broucher
            </button>
          </div>
          
        </motion.div>
      </div>

      {/* Subtle Background Accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-indigo-50 rounded-full blur-[120px] -z-10 opacity-60"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-violet-100/30 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-100/30 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/2"></div>
    </section>
  );
}
