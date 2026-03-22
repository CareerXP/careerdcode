"use client";

import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronDown, 
  ChevronRight,
  CheckCircle2, 
  ArrowRight, 
  Download, 
  Clock, 
  PhoneCall,
  ChevronLeft,
  Quote,
  Linkedin
} from 'lucide-react';
import { Course } from '@/data/courses';
import CourseNavbar from '@/components/CourseNavbar';
import TrustedCompanies from '@/components/TrustedCompanies';
import PlacedStudents from '@/components/PlacedStudents';
import CurriculumSection from '@/components/CurriculumSection';
import CourseFAQ from '@/components/CourseFAQ';
import { useEffect, useState } from 'react';
import { useModal } from '@/components/ClientLayout';

const rotatingWords = [
  'Knowledge',
  'Support',
  'Techniques',
  'Guidance',
  'Mentorship',
  'Success'
];

interface CourseDetailsClientProps {
  course: Course;
}

export default function CourseDetailsClient({ course }: CourseDetailsClientProps) {
  const router = useRouter();
  const { openModal } = useModal();
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2500);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div className="sticky top-0 z-50">
        {/* Top Banner */}
        <div className="bg-slate-900 text-white text-center py-2 text-[10px] font-black uppercase tracking-[0.2em] shadow-md">
          Next batch starting from 8 March 2026
        </div>
        <CourseNavbar />
      </div>
      
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden border-b border-slate-100">
        {/* Technical Grid Background */}
        <div className="absolute inset-0 -z-10 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:32px_32px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="space-y-10">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-600 font-display mb-6 block">
                    PROFESSIONAL CERTIFICATION
                  </span>
                  <h1 className="text-4xl sm:text-5xl lg:text-8xl font-bold text-slate-900 font-display tracking-tight leading-[0.9] mb-8">
                    {course.title.split('-')[0]} <br />
                    <span className="text-indigo-600">Full Stack</span> <br />
                    Development.
                  </h1>
                </div>
                
                <div className="flex items-center gap-6">
                  <div className="h-px w-12 bg-slate-900"></div>
                  <h2 className="text-xl lg:text-2xl font-medium text-slate-600 italic font-serif">
                    Master {course.techStack.slice(0, 4).join(', ')} & more
                  </h2>
                </div>

                <div className="flex items-start gap-6 p-8 bg-slate-50 rounded-2xl border border-slate-100 max-w-xl">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm border border-slate-100 shrink-0">
                    <CheckCircle2 className="text-indigo-600" size={24} />
                  </div>
                  <p className="text-lg text-slate-600 leading-relaxed font-medium">
                    Curriculum designed and taught by Alumni from <span className="text-slate-900 font-bold">IITs & Leading Tech Companies</span>.
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-4 sm:gap-6 pt-10">
                  <button 
                    onClick={() => openModal('brochure')}
                    className="w-full sm:w-auto px-10 py-5 bg-slate-900 text-white rounded-2xl font-bold font-display text-xs uppercase tracking-widest hover:bg-indigo-600 transition-all flex items-center justify-center gap-3 shadow-2xl shadow-slate-200 group"
                  >
                    <Download size={18} className="group-hover:translate-y-1 transition-transform" />
                    Download Syllabus
                  </button>
                  <a 
                    href="#curriculum"
                    className="w-full sm:w-auto px-10 py-5 bg-white text-slate-900 border border-slate-200 rounded-2xl font-bold font-display text-xs uppercase tracking-widest hover:bg-slate-50 transition-all flex items-center justify-center gap-3 shadow-2xl shadow-slate-100 group"
                  >
                    Explore Curriculum
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Right Content: Form Card */}
            <div className="lg:col-span-5 w-full max-w-xl mx-auto lg:max-w-none">
              <div className="bg-white p-6 sm:p-10 lg:p-12 rounded-[32px] border border-slate-100 shadow-2xl shadow-slate-200/50 relative">
                <div className="absolute top-0 right-10 transform -translate-y-1/2">
                  <div className="bg-indigo-600 text-white px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-lg">
                    FREE DEMO
                  </div>
                </div>

                <div className="mb-10">
                  <h3 className="text-3xl font-bold text-slate-900 font-display tracking-tight mb-3">
                    Reserve Your <span className="text-indigo-600">Seat.</span>
                  </h3>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed">
                    Get access to exclusive lectures & assignments curated by industry veterans.
                  </p>
                </div>

                <form className="space-y-5">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="e.g. John Doe"
                      className="w-full bg-slate-50 border border-slate-100 rounded-xl py-4 px-5 text-slate-900 focus:outline-none focus:border-indigo-500 transition-colors font-medium"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Phone Number</label>
                    <div className="flex gap-3">
                      <div className="relative w-24 shrink-0">
                        <select className="w-full bg-slate-50 border border-slate-100 rounded-xl py-4 px-4 text-slate-900 appearance-none focus:outline-none focus:border-indigo-500 transition-colors font-medium">
                          <option>+91</option>
                        </select>
                        <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-slate-400">
                          <ChevronDown size={16} />
                        </div>
                      </div>
                      <input 
                        type="tel" 
                        placeholder="98765 43210"
                        className="w-full bg-slate-50 border border-slate-100 rounded-xl py-4 px-5 text-slate-900 focus:outline-none focus:border-indigo-500 transition-colors font-medium"
                      />
                    </div>
                  </div>

                  <button className="w-full py-5 bg-indigo-600 text-white rounded-xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 group mt-4">
                    Apply Now <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </button>

                  <p className="text-[10px] text-center text-slate-400 leading-relaxed font-medium pt-4">
                    By clicking 'Apply Now', you agree to our <br />
                    <a href="#" className="text-indigo-600 hover:underline font-bold">Terms & Conditions</a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Stats Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
        <div className="bg-white rounded-2xl shadow-2xl py-6 px-4 sm:py-10 sm:px-6 lg:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-100 border border-slate-100 overflow-hidden">
          {[
            { label: 'Highest Salary', value: '41 Lakhs', icon: '💰', color: 'bg-red-50' },
            { label: 'Partner Companies', value: '500+', icon: '🤝', color: 'bg-orange-50' },
            { label: 'Job Assistance', value: '100%', icon: '✅', color: 'bg-indigo-50' },
            { label: 'Average Salary', value: '7.4 LPA', icon: '📈', color: 'bg-indigo-50' }
          ].map((stat, idx) => (
            <div key={idx} className="bg-white flex items-center gap-5 p-4">
              <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center text-xl shadow-sm`}>
                {stat.icon}
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900 leading-none mb-1.5 font-display tracking-tight">{stat.value}</p>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Learn From The Best Section */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-16 mb-24">
            <div className="max-w-2xl">
              <div className="mb-4">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-600 font-display">
                  ELITE MENTORSHIP
                </span>
              </div>
              <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 font-display tracking-tight mb-8">
                Learn From <br />
                <span className="text-indigo-600">The Best.</span>
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed font-medium">
                Learn from the Top 1% of the tech industry— exceptional professionals from top MNCs who have not only taught thousands but transformed their careers.
              </p>
            </div>
            
            <div className="relative w-full lg:w-auto">
              <div className="flex items-center gap-4 sm:gap-6 h-24 sm:h-32">
                <span className="text-2xl sm:text-4xl lg:text-6xl font-bold text-indigo-600 bg-indigo-50 px-4 sm:px-8 py-2 sm:py-3 rounded-2xl rotate-[-2deg] font-display">Expert</span>
                <div className="h-px w-12 sm:w-24 bg-slate-200 hidden lg:block"></div>
                <div className="relative h-full flex flex-col justify-center overflow-hidden min-w-[150px] sm:min-w-[240px]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={wordIndex}
                      initial={{ y: 40, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -40, opacity: 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="flex flex-col"
                    >
                      <span className="text-xl sm:text-3xl lg:text-5xl font-bold text-indigo-600 font-display">
                        {rotatingWords[wordIndex]}
                      </span>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>

          {/* Mentors Grid - Redesigned like Founders */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-slate-100 border border-slate-100 rounded-2xl overflow-hidden shadow-2xl shadow-slate-200/50">
            {[
              { name: 'Chetan Segare', role: 'SDE 2', company: 'Microsoft', image: 'https://picsum.photos/seed/mentor1/400/500', bio: 'Expert in distributed systems and cloud architecture at scale.' },
              { name: 'Somendra Tiwari', role: 'SDE 2', company: 'ServiceNow', image: 'https://picsum.photos/seed/mentor2/400/500', bio: 'Passionate about full-stack development and enterprise solutions.' },
              { name: 'Gaurav Choudhary', role: 'Software Developer', company: 'CareerDCode', image: 'https://picsum.photos/seed/mentor3/400/500', bio: 'Dedicated to building impactful educational tools for developers.' },
              { name: 'Navdeep Singh', role: 'Software Engineer', company: 'Microsoft', image: 'https://picsum.photos/seed/mentor4/400/500', bio: 'Specialist in frontend performance and modern web standards.' },
              { name: 'Dhiraj Kumar', role: 'Senior Manager', company: 'IIT Alumni', image: 'https://picsum.photos/seed/mentor5/400/500', bio: 'Strategic leader with deep roots in technical excellence and mentorship.' }
            ].map((mentor, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative bg-white aspect-[3/4] overflow-hidden flex flex-col"
              >
                {/* Mentor Image */}
                <div className="relative flex-grow overflow-hidden">
                  <img 
                    src={mentor.image} 
                    alt={mentor.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>

                {/* Mentor Info */}
                <div className="p-6 bg-white border-t border-slate-50 relative z-10">
                  <h3 className="text-lg font-bold text-slate-900 font-display tracking-tight leading-tight mb-1">
                    {mentor.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest font-display">
                      {mentor.role} @ {mentor.company}
                    </p>
                  </div>
                </div>

                {/* Bio on Hover */}
                <div className="absolute inset-0 bg-slate-900/95 p-8 flex flex-col justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-20">
                  <Quote className="text-indigo-500 mb-4 opacity-50" size={32} />
                  <p className="text-sm font-medium text-slate-300 leading-relaxed italic mb-6">
                    {mentor.bio}
                  </p>
                  <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-white font-bold font-display text-base">{mentor.name}</span>
                      <span className="text-[9px] font-black text-indigo-500 uppercase tracking-widest">{mentor.company}</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white">
                      <Linkedin size={14} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Partners Section */}
      <div id="partners" className="bg-white border-t border-slate-50">
        <TrustedCompanies />
      </div>

      {/* Placed Students Section */}
      <PlacedStudents />

      {/* Technologies Section */}
      <section className="py-32 bg-white overflow-hidden border-t border-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20">
            <div className="mb-4">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-600 font-display">
                TECHNICAL STACK
              </span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 font-display tracking-tight">
              Technologies You'll <br />
              <span className="text-indigo-600">Master.</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-px bg-slate-100 border border-slate-100 rounded-2xl overflow-hidden shadow-2xl shadow-slate-200/50">
            {course.techStack.map((tech) => (
              <div key={tech} className="bg-white p-10 flex flex-col items-center justify-center gap-6 group hover:bg-slate-50 transition-colors">
                <div className="w-16 h-16 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                  <img 
                    src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech}/${tech}-original.svg`} 
                    alt={tech}
                    className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech}/${tech}-plain.svg`;
                    }}
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 group-hover:text-indigo-600 transition-colors font-display">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <CurriculumSection curriculum={course.curriculum} />

      {/* FAQ Section */}
      <div id="faq">
        <CourseFAQ faqs={course.faqs} />
      </div>
    </div>
  );
}
