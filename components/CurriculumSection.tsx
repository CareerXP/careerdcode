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
  const moduleCount = curriculum.length;
  const subTopicCount = curriculum.reduce(
    (n, item) => n + (item.subTopics?.length ?? 0),
    0
  );

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
            <div className="w-full overflow-hidden rounded-[28px] border border-slate-200/90 bg-white shadow-[0_24px_64px_-28px_rgba(15,23,42,0.14)] ring-1 ring-slate-900/[0.04]">
              <div className="border-b border-slate-100 bg-gradient-to-r from-slate-50 via-white to-indigo-50/50 px-6 py-4 sm:px-8">
                <p className="text-[10px] font-black uppercase tracking-[0.22em] text-indigo-600 font-display">
                  Syllabus at a glance
                </p>
                <p className="mt-1 text-sm font-medium text-slate-500">
                  Numbers are computed from the syllabus data for this course.
                </p>
              </div>
              <div
                className={`grid ${subTopicCount > 0 ? 'sm:grid-cols-2' : ''} divide-y divide-slate-100 sm:divide-y-0 sm:divide-x sm:divide-slate-100`}
              >
                <div className="flex items-center gap-5 px-6 py-6 sm:px-8 sm:py-8">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 shadow-sm ring-1 ring-indigo-100/80">
                    <span className="font-display text-2xl font-bold tabular-nums">{moduleCount}</span>
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-400 font-display">
                      Modules
                    </p>
                    <p className="mt-1 font-display text-lg font-bold tracking-tight text-slate-900 sm:text-xl">
                      Major course units
                    </p>
                  </div>
                </div>
                {subTopicCount > 0 ? (
                  <div className="flex items-center gap-5 px-6 py-6 sm:px-8 sm:py-8">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700 shadow-sm ring-1 ring-emerald-100/80">
                      <span className="font-display text-2xl font-bold tabular-nums">{subTopicCount}</span>
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-400 font-display">
                        Sub-topics
                      </p>
                      <p className="mt-1 font-display text-lg font-bold tracking-tight text-slate-900 sm:text-xl">
                        Listed breakdown items
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center gap-5 px-6 py-6 sm:px-8 sm:py-8">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-slate-100 text-slate-500 shadow-sm ring-1 ring-slate-200/80">
                      <span className="font-display text-xl font-bold">—</span>
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-400 font-display">
                        Sub-topics
                      </p>
                      <p className="mt-1 text-sm font-medium leading-snug text-slate-500">
                        Expand each module below—sub-topic lists will appear when defined for this course.
                      </p>
                    </div>
                  </div>
                )}
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
