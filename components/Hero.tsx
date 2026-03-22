"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center pt-20 overflow-hidden bg-slate-50">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-blue-700 uppercase bg-blue-100 rounded-full">
            Accelerate Your Career
          </span>
          <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-tight mb-6 font-display">
            Master High-Demand <span className="text-blue-600">Tech Skills</span>
          </h1>
          <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
            Join thousands of students learning from industry experts at top tech companies. 
            Get mentored, build projects, and land your dream job.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200">
              Explore Courses
            </button>
            <button className="px-8 py-4 bg-white text-slate-900 font-semibold rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors">
              View Curriculum
            </button>
          </div>
          
          <div className="mt-10 flex items-center gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-slate-200">
                  <Image
                    src={`https://picsum.photos/seed/user${i}/100/100`}
                    alt="User"
                    width={40}
                    height={40}
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>
            <p className="text-sm text-slate-500">
              <span className="font-bold text-slate-900">10,000+</span> students already joined
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-[500px] flex items-center justify-center"
        >
          {/* Main Illustration */}
          <div className="relative z-20 w-full max-w-md transform hover:scale-105 transition-transform duration-500">
            <div className="rounded-[40px] overflow-hidden shadow-2xl border-8 border-white bg-white">
              <Image
                src="https://picsum.photos/seed/student-3d/800/800"
                alt="Student Success"
                width={800}
                height={800}
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 animate-bounce-slow">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                🚀
              </div>
              <div>
                <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Success Rate</p>
                <p className="text-lg font-bold text-slate-900">98%</p>
              </div>
            </div>
          </div>

          {/* Secondary Illustration 1 */}
          <div className="absolute top-0 -left-4 z-10 w-48 h-48 transform -rotate-12 hover:rotate-0 transition-transform duration-500">
            <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white">
              <Image
                src="https://picsum.photos/seed/job-3d/400/400"
                alt="Job Opportunity"
                width={400}
                height={400}
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Secondary Illustration 2 */}
          <div className="absolute bottom-12 -right-4 z-10 w-56 h-56 transform rotate-12 hover:rotate-0 transition-transform duration-500">
            <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white">
              <Image
                src="https://picsum.photos/seed/career-3d/400/400"
                alt="Career Growth"
                width={400}
                height={400}
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-100/50 rounded-full blur-3xl -z-10"></div>
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        </motion.div>
      </div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    </section>
  );
}
