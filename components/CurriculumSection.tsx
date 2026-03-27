"use client";

import { motion } from "motion/react";

interface CurriculumSectionProps {
  curriculum: {
    week: string;
    topic: string;
    description: string;
    subTopics?: string[];
    tools?: string[];
  }[];
}

export default function CurriculumSection({ curriculum }: CurriculumSectionProps) {
  return (
    <section id="curriculum" className="py-32 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-24 mb-24">
          <div className="lg:col-span-5">
            <div className="mb-4">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-600 font-display">
                DETAILED SYLLABUS
              </span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 font-display tracking-tight mb-8">
              A Curriculum <br />
              <span className="text-indigo-600">Built for Mastery.</span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed font-medium">
              We don't just teach tools; we teach the underlying principles that make you an architect of code. Each module is designed to build upon the last.
            </p>
          </div>
          <div className="lg:col-span-7 flex items-end">
            <div className="flex items-center gap-8 p-8 bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 w-full">
              <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 shrink-0">
                <span className="text-2xl font-bold font-display">{curriculum.length}</span>
              </div>
              <div>
                <p className="text-xl font-bold text-slate-900 font-display">Comprehensive Modules</p>
                <p className="text-sm text-slate-400 font-black uppercase tracking-widest font-mono">Covering 200+ Topics</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-5xl mx-auto space-y-12">
          {curriculum.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-[40px] border border-slate-100 p-8 sm:p-12 hover:border-indigo-100 hover:shadow-2xl hover:shadow-indigo-100/30 transition-all duration-500"
            >
              <div className="grid md:grid-cols-12 gap-12">
                <div className="md:col-span-4">
                  <div className="space-y-4">
                    <span className="inline-block px-4 py-1.5 bg-indigo-50 text-indigo-600 text-[10px] font-black uppercase tracking-widest rounded-full font-mono">
                      {item.week}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display tracking-tight leading-tight">
                      {item.topic}
                    </h3>
                    
                    {item.tools && (
                      <div className="pt-4">
                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-3">Tools & Focus</p>
                        <div className="flex flex-wrap gap-2">
                          {item.tools.map((tool, tIdx) => (
                            <span key={tIdx} className="px-3 py-1 bg-slate-50 border border-slate-100 rounded-lg text-[10px] font-bold text-slate-600 font-mono">
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="md:col-span-8">
                  <p className="text-slate-500 font-medium leading-relaxed mb-8 italic font-serif text-lg">
                    "{item.description}"
                  </p>
                  
                  {item.subTopics && (
                    <div className="grid sm:grid-cols-2 gap-4">
                      {item.subTopics.map((sub, idx) => (
                        <div key={idx} className="flex items-start gap-3 group/sub">
                          <div className="w-1.5 h-1.5 rounded-full bg-indigo-200 mt-2 group-hover/sub:bg-indigo-600 transition-colors"></div>
                          <span className="text-sm font-bold text-slate-700 group-hover/sub:text-indigo-600 transition-colors">
                            {sub}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
