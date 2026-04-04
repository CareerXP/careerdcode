"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import { useModal } from '@/components/ClientLayout';
import { ArrowUpRight, Clock, Code2, Layers, Zap } from 'lucide-react';
import { coursesData } from '@/data/courses';

const COURSE_FEE_OVERRIDES: Record<string, string> = {
  // Pricing shown on course cards (CourseSection)
  'mern-genai': '₹49,999', // Full-Stack
  'dsa-mastery': '₹29,999', // DSA
  'testing-automation': '₹24,999', // Testing
};

const DEVICON_BASE =
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons';

/** Human-readable technology names for course cards */
const TECH_DISPLAY_NAME: Record<string, string> = {
  java: 'Java',
  python: 'Python',
  javascript: 'JavaScript',
  typescript: 'TypeScript',
  react: 'React',
  nodejs: 'Node.js',
  mongodb: 'MongoDB',
  express: 'Express.js',
  nextjs: 'Next.js',
  mysql: 'MySQL',
  selenium: 'Selenium',
  spring: 'Spring',
  html5: 'HTML5',
  css3: 'CSS3',
  pandas: 'Pandas',
  numpy: 'NumPy',
  tensorflow: 'TensorFlow',
  pytorch: 'PyTorch',
  excel: 'Microsoft Excel',
  tableau: 'Tableau',
  powerbi: 'Power BI',
};

const TECH_ICON_PATH: Record<string, string> = {
  java: 'java/java-original.svg',
  mysql: 'mysql/mysql-original.svg',
  spring: 'spring/spring-original.svg',
  python: 'python/python-original.svg',
  html5: 'html5/html5-original.svg',
  css3: 'css3/css3-original.svg',
  react: 'react/react-original.svg',
  nodejs: 'nodejs/nodejs-original.svg',
  javascript: 'javascript/javascript-original.svg',
  mongodb: 'mongodb/mongodb-original.svg',
  typescript: 'typescript/typescript-original.svg',
  nextjs: 'nextjs/nextjs-original.svg',
  express: 'express/express-original.svg',
  pandas: 'pandas/pandas-original.svg',
  numpy: 'numpy/numpy-original.svg',
  tensorflow: 'tensorflow/tensorflow-original.svg',
  pytorch: 'pytorch/pytorch-original.svg',
  excel: 'microsoft-excel/microsoft-excel-original.svg',
  tableau: 'tableau/tableau-original.svg',
  powerbi: 'powerbi/powerbi-original.svg',
  selenium: 'selenium/selenium-original.svg',
};

function techIconOriginalSrc(tech: string): string | null {
  const rel = TECH_ICON_PATH[tech];
  return rel ? `${DEVICON_BASE}/${rel}` : null;
}

function techIconPlainSrc(tech: string): string | null {
  const rel = TECH_ICON_PATH[tech];
  if (!rel) return null;
  const folder = rel.split('/')[0];
  return `${DEVICON_BASE}/${folder}/${folder}-plain.svg`;
}

function techLabel(tech: string): string {
  return TECH_DISPLAY_NAME[tech] ?? tech.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}

export default function CourseSection() {
  const { openModal } = useModal();
  const [activeTab, setActiveTab] = useState('Live Course');

  return (
    <section id="courses" className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-24 items-end">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <span className="w-12 h-[1px] bg-indigo-600"></span>
              <span className="text-[16px] font-black uppercase tracking-[0.4em] text-indigo-600 font-mono">
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
            {/* <div className="flex items-center gap-8">
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
            </div> */}
          </div>
        </div>

        {/* Minimalist Tab Navigation */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16 border-b border-slate-100 pb-8">
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => setActiveTab('Live Course')}
              className={`px-8 py-4 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300 flex items-center gap-3 ${
                activeTab === 'Live Course'
                  ? 'bg-slate-900 text-white shadow-xl shadow-slate-200'
                  : 'text-slate-400 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Zap size={14} className={activeTab === 'Live Course' ? 'text-indigo-400' : 'text-slate-400'} />
              Live Course
            </button>
            <button
              disabled
              className="px-8 py-4 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-300 cursor-not-allowed flex items-center gap-3 bg-slate-50/50 border border-dashed border-slate-200 group relative"
            >
              <Clock size={14} className="text-slate-300" />
              Offline Learning
              <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 text-[8px] font-black uppercase tracking-tighter rounded-full ml-1">
                Coming Soon
              </span>
            </button>
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {coursesData
              .map((course, idx) => (
                <motion.div
                  key={course.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-slate-200/90 bg-white shadow-[0_20px_50px_-28px_rgba(15,23,42,0.18)] ring-1 ring-slate-900/[0.04] transition-all duration-500 hover:-translate-y-1 hover:border-indigo-200/70 hover:shadow-[0_28px_64px_-24px_rgba(79,70,229,0.2)]"
                >
                  <div
                    aria-hidden
                    className="h-1.5 bg-gradient-to-r from-indigo-500 via-violet-500 to-indigo-500"
                  />
                  <div className="relative flex flex-1 flex-col p-7 sm:p-8">
                    <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-indigo-600 text-white shadow-lg shadow-indigo-200/60 transition-transform duration-300 group-hover:scale-[1.03]">
                        <Zap size={26} strokeWidth={2.25} aria-hidden />
                      </div>
                      <div className="flex flex-col gap-3 sm:items-end sm:text-right">
                        <div className="flex items-center gap-2.5 text-slate-900 sm:justify-end">
                          <Clock
                            className="h-6 w-6 shrink-0 text-indigo-500"
                            strokeWidth={2}
                            aria-hidden
                          />
                          <span className="font-display text-xl font-bold tracking-tight sm:text-2xl">
                            {course.duration}
                          </span>
                        </div>
                        <div className="flex items-start gap-2.5 rounded-2xl border border-indigo-100 bg-indigo-50/80 px-4 py-3 sm:inline-flex sm:max-w-full sm:justify-end">
                          <Layers
                            className="mt-0.5 h-5 w-5 shrink-0 text-indigo-600"
                            strokeWidth={2.25}
                            aria-hidden
                          />
                          <span className="text-left font-display text-base font-bold leading-snug text-indigo-950 sm:text-lg">
                            {course.features[0]}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="mb-6 flex flex-1 flex-col">
                      <h3 className="mb-3 font-display text-2xl font-bold leading-tight tracking-tight text-slate-900 transition-colors group-hover:text-indigo-600 sm:text-[1.65rem]">
                        {course.title}
                      </h3>
                      <p className="mb-6 line-clamp-3 text-sm font-medium leading-relaxed text-slate-600 sm:text-base">
                        {course.description}
                      </p>
                      <div className="space-y-2">
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                          Key highlights
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {course.features.slice(1).map((highlight, i) => (
                            <span
                              key={i}
                              className="rounded-xl border border-slate-100 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mb-6 rounded-2xl border border-slate-100 bg-slate-50/80 p-4 ring-1 ring-slate-100/80">
                      <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
                        Technologies covered
                      </p>
                      <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                        {course.techStack.map((tech) => {
                          const src = techIconOriginalSrc(tech);
                          const plain = techIconPlainSrc(tech);
                          return (
                            <li
                              key={tech}
                              className="flex min-w-0 items-center gap-3 rounded-xl border border-white bg-white px-3 py-2.5 shadow-sm transition-colors group/tech hover:border-indigo-100"
                            >
                              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-50 ring-1 ring-slate-100">
                                {src ? (
                                  <img
                                    src={src}
                                    alt=""
                                    className="h-6 w-6 object-contain"
                                    referrerPolicy="no-referrer"
                                    onError={(e) => {
                                      const el = e.target as HTMLImageElement;
                                      if (plain && el.src !== plain) el.src = plain;
                                    }}
                                  />
                                ) : (
                                  <Code2
                                    className="h-5 w-5 text-slate-400"
                                    strokeWidth={2}
                                    aria-hidden
                                  />
                                )}
                              </div>
                              <span className="min-w-0 truncate text-sm font-semibold text-slate-800">
                                {techLabel(tech)}
                              </span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>

                    <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-6">
                      <div>
                        <span className="mb-1 block text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                          Investment
                        </span>
                        <span className="font-display text-xl font-bold text-slate-900 sm:text-2xl">
                          {COURSE_FEE_OVERRIDES[course.id] ?? course.price}
                        </span>
                      </div>
                      <Link
                        href={`/courses/${course.id}`}
                        className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 text-slate-900 transition-all duration-300 group-hover:border-indigo-600 group-hover:bg-indigo-600 group-hover:text-white"
                        aria-label={`View ${course.title}`}
                      >
                        <ArrowUpRight size={20} />
                      </Link>
                    </div>

                    <div className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-700 group-hover:opacity-[0.04]">
                      <img
                        src={course.image}
                        alt=""
                        className="h-full w-full object-cover grayscale"
                      />
                    </div>
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
          <button
            onClick={() => openModal('callback', 'course-inquiry')}
            className="px-10 py-5 bg-indigo-600 text-white font-black text-xs uppercase tracking-widest rounded-2xl hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 flex items-center gap-4 mx-auto group"
          >
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


