"use client";

import { motion } from "motion/react";

interface CurriculumSectionProps {
  curriculum: {
    week: string;
    topic: string;
    description: string;
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
              className="flex gap-8 mb-12 relative"
            >
              <div className="flex-shrink-0 w-24 text-right">
                <span className="text-sm font-bold text-blue-600 uppercase tracking-widest">
                  {item.week}
                </span>
              </div>
              <div className="flex-grow pb-12 border-l-2 border-blue-200 pl-8 relative">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full border-4 border-white"></div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  {item.topic}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
