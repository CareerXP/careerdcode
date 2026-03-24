"use client";

import { useState } from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { 
  Code, 
  BarChart3, 
  Cpu, 
  ChevronRight, 
  ChevronDown, 
  Clock,
  MonitorPlay,
  MapPin,
  Zap
} from 'lucide-react';
import { coursesData } from '@/data/courses';

export default function CourseSection() {
  const [activeCategory, setActiveCategory] = useState('Full Stack Development');
  const [activeType, setActiveType] = useState('Live Online Courses');

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
      powerbi: "powerbi/powerbi-original.svg"
    };
    return mapping[tech] ? `${baseUrl}${mapping[tech]}` : null;
  };

  return (
    <section id="courses" className="py-32 bg-white relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50/50 -skew-x-12 transform origin-top-right -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-24 flex flex-col lg:flex-row lg:items-end justify-between gap-12">
          <div className="max-w-3xl">
            <div className="mb-6">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-600 font-display">
                TECHNICAL PROGRAMS
              </span>
            </div>
            <h2 className="text-5xl lg:text-8xl font-bold text-slate-900 font-display tracking-tight leading-[0.9]">
              Tailored for <br />
              <span className="text-indigo-600">Modern Engineers.</span>
            </h2>
          </div>
          <p className="text-slate-500 text-xl max-w-md font-medium leading-relaxed border-l-2 border-indigo-600 pl-8">
            Industry-aligned curriculum designed to bridge the gap between academia and professional excellence.
          </p>
        </div>

        {/* Main Content Layout */}
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Sidebar - Control Panel Style */}
          <div className="lg:w-1/4">
            <div className="sticky top-32">
              <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-8 font-display">Learning Mode</h3>
              <div className="space-y-4">
                {/* Live Online Courses */}
                <button
                  onClick={() => setActiveType('Live Online Courses')}
                  className={`w-full group relative flex items-center justify-between p-6 rounded-2xl text-xs font-black uppercase tracking-widest transition-all duration-500 ${
                    activeType === 'Live Online Courses' 
                      ? 'bg-slate-900 text-white shadow-2xl shadow-slate-200 translate-x-2' 
                      : 'text-slate-400 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${activeType === 'Live Online Courses' ? 'bg-indigo-600' : 'bg-slate-100 group-hover:bg-slate-200'}`}>
                      <MonitorPlay size={20} />
                    </div>
                    Live Online
                  </div>
                  {activeType === 'Live Online Courses' && (
                    <motion.div layoutId="active-indicator" className="w-1.5 h-1.5 rounded-full bg-indigo-400 shadow-[0_0_10px_rgba(129,140,248,0.8)]"></motion.div>
                  )}
                </button>

                {/* Self Paced Courses */}
                <div className="relative group/tooltip">
                  <button
                    disabled
                    className="w-full flex items-center justify-between p-6 rounded-2xl text-xs font-black uppercase tracking-widest transition-all text-slate-300 bg-slate-50/50 cursor-not-allowed border border-dashed border-slate-200"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center">
                        <Zap size={20} />
                      </div>
                      Offline Learning
                    </div>
                    <span className="text-[8px] font-black uppercase tracking-tighter bg-slate-200 text-slate-500 px-2 py-1 rounded">
                      Coming Soon
                    </span>
                  </button>
                </div>
              </div>

              {/* Sidebar Decoration */}
              {/* <div className="mt-12 p-8 bg-indigo-50 rounded-3xl border border-indigo-100/50 hidden lg:block">
                <div className="w-12 h-1 bg-indigo-600 mb-6"></div>
                <p className="text-[10px] font-black text-indigo-900/60 uppercase tracking-widest leading-relaxed">
                  All programs include 1:1 mentorship from IIT Delhi alumni.
                </p>
              </div> */}
            </div>
          </div>

          {/* Main Display Area */}
          <div className="lg:w-3/4">
            {/* Top Tabs - Segmented Control Style */}
            <div className="inline-flex p-2 bg-slate-100 rounded-[24px] mb-12 w-full lg:w-auto overflow-x-auto no-scrollbar">
              {[
                { id: 'Full Stack Development', icon: <Code size={16} /> },
                { id: 'Data Analytics', icon: <BarChart3 size={16} /> },
                { id: 'Data Science & AI', icon: <Cpu size={16} /> }
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-3 px-8 py-4 rounded-[18px] text-[10px] font-black uppercase tracking-widest whitespace-nowrap transition-all duration-300 ${
                    activeCategory === cat.id
                      ? 'bg-white text-slate-900 shadow-xl shadow-slate-200/50'
                      : 'text-slate-400 hover:text-slate-600'
                  }`}
                >
                  <span className={activeCategory === cat.id ? 'text-indigo-600' : ''}>{cat.icon}</span>
                  {cat.id}
                </button>
              ))}
            </div>

            {/* Course Cards Grid */}
            <div className="grid md:grid-cols-2 gap-10">
              {coursesData.filter(c => c.category === activeCategory).map((course) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="group bg-white rounded-[32px] border border-slate-100 overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-indigo-100/50 transition-all duration-500 flex flex-col"
                >
                  {/* Course Illustration Area */}
                  <div className="relative h-64 bg-slate-50 p-8 overflow-hidden">
                    <div className="absolute inset-0 bg-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <img 
                      src={course.image} 
                      alt={course.title} 
                      className="w-full h-full object-cover rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-10 right-10">
                      <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-xl text-indigo-600 group-hover:rotate-12 transition-transform">
                        <Zap size={20} />
                      </div>
                    </div>
                  </div>

                  {/* Course Info */}
                  <div className="p-10 flex flex-col flex-grow">
                    <div className="mb-8">
                      <h4 className="text-2xl font-bold font-display text-slate-900 leading-tight mb-4 group-hover:text-indigo-600 transition-colors">
                        {course.title}
                      </h4>
                      <p className="text-sm text-slate-500 font-medium leading-relaxed line-clamp-2">
                        {course.description}
                      </p>
                    </div>

                    {/* Tech Stack Icons */}
                    <div className="flex flex-wrap gap-2 mb-10">
                      {course.techStack.slice(0, 4).map((tech) => {
                        const icon = getTechIcon(tech);
                        return (
                          <div key={tech} className="px-3 py-2 bg-slate-50 rounded-xl border border-slate-100 flex items-center gap-2 group/tech hover:border-indigo-200 transition-colors">
                            {icon && (
                              <img 
                                src={icon} 
                                alt={tech} 
                                className="w-4 h-4 object-contain grayscale group-hover/tech:grayscale-0 transition-all"
                                referrerPolicy="no-referrer"
                              />
                            )}
                            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest group-hover/tech:text-indigo-600">{tech}</span>
                          </div>
                        );
                      })}
                      {course.techStack.length > 4 && (
                        <div className="px-3 py-2 bg-indigo-50 rounded-xl border border-indigo-100 flex items-center">
                          <span className="text-[9px] font-black text-indigo-600 uppercase tracking-widest">
                            +{course.techStack.length - 4} More
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="mt-auto flex items-center justify-between pt-8 border-t border-slate-50">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                          <Clock size={14} />
                        </div>
                        <span className="text-[10px] font-black text-slate-900 uppercase tracking-widest font-display">
                          {course.duration}
                        </span>
                      </div>
                      <Link 
                        href={`/courses/${course.id}`}
                        className="group/link flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-indigo-600"
                      >
                        View Details 
                        <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center group-hover/link:bg-indigo-600 group-hover/link:text-white transition-all">
                          <ChevronRight size={16} />
                        </div>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

