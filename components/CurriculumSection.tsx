"use client";

import { motion } from "motion/react";

interface CurriculumSectionProps {
  curriculum: {
    module: string;
    topics: string[];
  }[];
}

export default function CurriculumSection({ curriculum }: CurriculumSectionProps) {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Course Curriculum
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A comprehensive curriculum designed to take you from beginner to expert.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {curriculum.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-8 mb-12 relative"
            >
              <div className="flex-shrink-0 w-full sm:w-24 text-left sm:text-right">
                <span className="text-sm font-bold text-indigo-600 uppercase tracking-widest">
                  Module {i + 1}
                </span>
              </div>
              <div className="flex-grow pb-12 border-l-2 border-indigo-200 pl-8 relative">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-indigo-500 rounded-full border-4 border-white"></div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                  {item.module}
                </h3>
                <ul className="text-slate-600 leading-relaxed text-sm sm:text-base list-disc pl-5 space-y-1">
                  {item.topics.map((topic) => (
                    <li key={topic}>{topic}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
