"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import { 
  Code, 
  BarChart3, 
  Cpu, 
  ArrowUpRight,
  Clock,
  Zap,
  Globe
} from 'lucide-react';
import { coursesData } from '@/data/courses';

const categories = [
  { id: 'Computer Science', icon: <Code size={18} />, label: 'CS & Algorithms' },
  { id: 'Full Stack Development', icon: <BarChart3 size={18} />, label: 'Web & AI' },
  { id: 'Quality Assurance', icon: <Cpu size={18} />, label: 'Testing' }
];

export default function CourseSection() {
  const [activeCategory, setActiveCategory] = useState('Computer Science');

  const getTechIcon = (tech: string) => {
    const baseUrl = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/";
    const mapping: Record<string, string> = {
      java: "java/java-original.svg",
      mysql: "mysql/mysql-original.svg",
      spring: "spring/spring-original.svg",
      python: "python/python-original.svg",
      html5: "html5/html5-original.svg",
      css3: "css3/css3-original.svg",
      react: "react/react-original.svg",
      nodejs: "nodejs/nodejs-original.svg",
      javascript: "javascript/javascript-original.svg",
      mongodb: "mongodb/mongodb-original.svg",
      typescript: "typescript/typescript-original.svg",
      nextjs: "nextjs/nextjs-original.svg",
      express: "express/express-original.svg",
      pandas: "pandas/pandas-original.svg",
      numpy: "numpy/numpy-original.svg",
      tensorflow: "tensorflow/tensorflow-original.svg",
      pytorch: "pytorch/pytorch-original.svg",
      excel: "microsoft-excel/microsoft-excel-original.svg",
      tableau: "tableau/tableau-original.svg",
      powerbi: "powerbi/powerbi-original.svg",
      selenium: "selenium/selenium-original.svg"
    };
    return mapping[tech] ? `${baseUrl}${mapping[tech]}` : null;
  };

  return (
    <section id="courses" className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-24 items-end">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <span className="w-12 h-[1px] bg-indigo-600"></span>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-600 font-mono">
                Specialized Tracks
              </span>
            </div>
            <h2 className="text-6xl sm:text-7xl lg:text-9xl font-black text-slate-900 font-display tracking-tight leading-[0.85] uppercase">
              Choose <br />
              <span className="text-indigo-600">Your Path.</span>
            </h2>
          </div>
          <div className="space-y-8 lg:pb-4">
            <p className="text-slate-500 text-lg sm:text-xl font-medium leading-relaxed max-w-md">
              Industry-standard tracks designed to take you from zero to job-ready with a placement-first approach.
            </p>
            <div className="flex items-center gap-8">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-100 overflow-hidden relative">
                    <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="User" className="object-cover" />
                  </div>
                ))}
              </div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                Trusted by <span className="text-slate-900">12,000+</span> Alumni
              </p>
            </div>
          </div>
        </div>

        {/* Minimalist Filter */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16 border-b border-slate-100 pb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300 flex items-center gap-3 ${
                  activeCategory === cat.id
                    ? 'bg-slate-900 text-white shadow-xl shadow-slate-200'
                    : 'text-slate-400 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {cat.icon}
                {cat.label}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-slate-400">
            <Globe size={14} className="text-indigo-600" />
            <span>Placement-First Curriculum</span>
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {coursesData
              .filter(c => c.category === activeCategory)
              .map((course, idx) => (
                <motion.div
                  key={course.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group relative bg-white rounded-[40px] border border-slate-100 p-8 hover:border-indigo-100 hover:shadow-2xl hover:shadow-indigo-100/30 transition-all duration-500 flex flex-col h-full"
                >
                  {/* Top Section */}
                  <div className="flex justify-between items-start mb-8">
                    <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-500">
                      <Zap size={24} />
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-[10px] font-black text-indigo-600 uppercase tracking-widest mb-1 font-mono">
                        {course.duration}
                      </span>
                      <span className="px-2 py-0.5 bg-indigo-100 text-indigo-700 text-[8px] font-black uppercase tracking-tighter rounded">
                        {course.features[0]}
                      </span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="mb-8 flex-grow">
                    <h3 className="text-3xl font-bold text-slate-900 font-display tracking-tight leading-tight mb-4 group-hover:text-indigo-600 transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-slate-500 text-sm font-medium leading-relaxed line-clamp-3 mb-6">
                      {course.description}
                    </p>
                    
                    {/* Key Highlights from Image */}
                    <div className="space-y-2">
                      <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest font-mono">Key Highlights</p>
                      <div className="flex flex-wrap gap-1.5">
                        {course.features.slice(1).map((highlight, i) => (
                          <span key={i} className="text-[10px] font-bold text-slate-700 bg-slate-50 px-2 py-1 rounded-lg border border-slate-100">
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-10">
                    {course.techStack.slice(0, 4).map((tech) => {
                      const icon = getTechIcon(tech);
                      return (
                        <div key={tech} className="px-3 py-2 bg-slate-50 rounded-xl border border-slate-100 flex items-center gap-2 group/tech hover:border-indigo-200 transition-colors">
                          {icon && (
                            <img 
                              src={icon} 
                              alt={tech} 
                              className="w-3.5 h-3.5 object-contain grayscale group-hover/tech:grayscale-0 transition-all"
                              referrerPolicy="no-referrer"
                            />
                          )}
                          <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest group-hover/tech:text-indigo-600 font-mono">{tech}</span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Footer Action */}
                  <div className="pt-8 border-t border-slate-50 flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1 font-mono">Investment</span>
                      <span className="text-xl font-bold text-slate-900 font-display">{course.price}</span>
                    </div>
                    <Link 
                      href={`/courses/${course.id}`}
                      className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-900 group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600 transition-all duration-500"
                    >
                      <ArrowUpRight size={20} />
                    </Link>
                  </div>

                  {/* Hover Image Reveal (Subtle) */}
                  <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700 pointer-events-none">
                    <img src={course.image} alt="" className="w-full h-full object-cover grayscale" />
                  </div>
                </motion.div>
              ))}
          </AnimatePresence>
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 text-center">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.3em] mb-8">
            Not sure which path to choose?
          </p>
          <button className="px-10 py-5 bg-indigo-600 text-white font-black text-xs uppercase tracking-widest rounded-2xl hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 flex items-center gap-4 mx-auto group">
            Book Free Career Counseling
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
              <ArrowUpRight size={16} />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}


