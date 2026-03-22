"use client";

import { motion } from "motion/react";

interface ApplySectionProps {
  onCallbackClick: () => void;
}

export default function ApplySection({ onCallbackClick }: ApplySectionProps) {
  return (
    <section className="py-24 bg-blue-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-6 font-display">
            Ready to Start Your Career in Tech?
          </h2>
          <p className="text-lg mb-10 opacity-90 leading-relaxed">
            Join thousands of students and land your dream job at top tech companies. 
            Get mentored, build projects, and master high-demand skills.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-10 py-5 bg-white text-blue-600 font-bold rounded-2xl hover:bg-slate-50 transition-colors shadow-xl shadow-blue-900/20">
              Apply Now
            </button>
            <button 
              onClick={onCallbackClick}
              className="px-10 py-5 bg-blue-700 text-white font-bold rounded-2xl border border-blue-500 hover:bg-blue-800 transition-colors"
            >
              Request Callback
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
