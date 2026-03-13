import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronDown, 
  ChevronRight,
  CheckCircle2, 
  ArrowRight, 
  Download, 
  Clock, 
  PhoneCall,
  ChevronLeft
} from 'lucide-react';
import { getCourseById } from '../data/courses';
import CourseNavbar from '../components/CourseNavbar';
import TrustedCompanies from '../components/TrustedCompanies';
import PlacedStudents from '../components/PlacedStudents';
import CurriculumSection from '../components/CurriculumSection';
import CourseFAQ from '../components/CourseFAQ';
import { useEffect, useState } from 'react';

const rotatingWords = [
  'Knowledge',
  'Support',
  'Techniques',
  'Guidance',
  'Mentorship',
  'Success'
];

export default function CourseDetails() {
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();
  const course = courseId ? getCourseById(courseId) : null;
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2500);
    
    return () => clearInterval(interval);
  }, []);

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Course not found</h2>
        <Link to="/" className="text-blue-600 font-bold hover:underline">Go back home</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050A18]">
      <div className="sticky top-0 z-50">
        {/* Top Banner */}
        <div className="bg-blue-600 text-white text-center py-2.5 text-sm font-bold tracking-wide shadow-md">
          Next batch starting from 8 March 2026
        </div>
        <CourseNavbar />
      </div>
      
      {/* Hero Section */}
      <section className="bg-[#050A18] py-16 lg:py-24 text-white relative overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', 
            backgroundSize: '40px 40px' 
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-7xl font-black leading-[1.1]">
                  <span className="text-blue-500">{course.title.split('-')[0]} Full Stack</span> 
                  <br />
                  <span className="text-white">Development Course</span>
                </h1>
                
                <div className="flex items-center gap-4">
                  <div className="h-1 w-12 bg-blue-500"></div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-white">
                    — Learn {course.techStack.slice(0, 4).map(t => t.charAt(0).toUpperCase() + t.slice(1)).join(', ')}
                  </h2>
                </div>

                <div className="pt-4">
                  <div className="w-14 h-14 bg-blue-900/30 rounded-2xl flex items-center justify-center relative mb-8">
                    <div className="text-blue-500">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                    </div>
                    <div className="absolute -bottom-1 -right-1 bg-yellow-400 text-slate-900 rounded-full p-1 shadow-lg">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                    </div>
                  </div>
                  <p className="text-xl lg:text-2xl text-white/90 leading-relaxed max-w-xl font-medium">
                    Curriculum designed and taught by Alumni from IITs & Leading Tech Companies.
                  </p>
                </div>
                
                <div className="flex items-center gap-16 pt-8">
                  <button className="px-10 py-4 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-all flex items-center gap-2 shadow-xl shadow-blue-600/20">
                    Know More <ChevronDown size={20} />
                  </button>
                  
                  {/* Hand-drawn arrow decoration */}
                  <div className="hidden lg:block text-white/40 transform translate-y-4">
                    <svg width="120" height="80" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 10C40 10 60 50 110 60" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeDasharray="6 6" />
                      <path d="M95 45L110 60L95 75" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Content: Form Card */}
            <div className="lg:col-span-5">
              <div className="bg-[#0A1124] p-8 lg:p-12 rounded-[40px] border border-white/10 shadow-2xl relative">
                <div className="text-center mb-10">
                  <h3 className="text-3xl font-bold mb-3">
                    Start learning for <span className="text-blue-500">FREE</span>
                  </h3>
                  <p className="text-base text-white/50 font-medium">
                    Lectures & Assignments curated by Top Tech Professionals
                  </p>
                </div>

                <form className="space-y-6">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none text-white/30">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                    </div>
                    <input 
                      type="text" 
                      placeholder="Full Name"
                      className="w-full bg-[#0D162D] border border-white/10 rounded-2xl py-5 pl-14 pr-5 text-white focus:outline-none focus:border-blue-500 transition-colors text-lg"
                    />
                  </div>

                  <div className="flex gap-3">
                    <div className="relative w-28 shrink-0">
                      <select className="w-full bg-[#0D162D] border border-white/10 rounded-2xl py-5 px-5 text-white appearance-none focus:outline-none focus:border-blue-500 transition-colors text-lg">
                        <option>+91</option>
                      </select>
                      <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-white/30">
                        <ChevronDown size={18} />
                      </div>
                    </div>
                    <input 
                      type="tel" 
                      placeholder="Phone Number"
                      className="w-full bg-[#0D162D] border border-white/10 rounded-2xl py-5 px-6 text-white focus:outline-none focus:border-blue-500 transition-colors text-lg"
                    />
                  </div>

                  <button className="w-full py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-bold text-xl flex items-center justify-center gap-3 hover:opacity-90 transition-all shadow-xl shadow-blue-600/20 group">
                    Apply Now <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
                  </button>

                  <p className="text-xs text-center text-white/40 leading-relaxed font-medium">
                    By clicking 'Apply Now For Free', you agree to our <br />
                    <a href="#" className="text-blue-500 hover:underline">Terms & Conditions</a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* WhatsApp Floating Icon */}
        <a 
          href="https://wa.me/918595563221" 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
        >
          <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        </a>
      </section>

      {/* Floating Stats Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl py-8 px-6 lg:px-12 grid grid-cols-2 lg:grid-cols-4 gap-8 border border-slate-100">
          {[
            { label: 'Highest Salary', value: '41 Lakhs', icon: '💰', color: 'bg-red-50' },
            { label: 'Partner Companies', value: '500+', icon: '🤝', color: 'bg-orange-50' },
            { label: 'Job Assistance', value: '100%', icon: '✅', color: 'bg-green-50' },
            { label: 'Average Salary', value: '7.4 LPA', icon: '📈', color: 'bg-blue-50' }
          ].map((stat, idx) => (
            <div key={idx} className="flex items-center gap-4">
              <div className={`w-10 h-10 ${stat.color} rounded-full flex items-center justify-center text-lg`}>
                {stat.icon}
              </div>
              <div>
                <p className="text-xl lg:text-2xl font-black text-slate-900 leading-none mb-1">{stat.value}</p>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Learn From The Best Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 mb-20">
            <div className="max-w-2xl">
              <p className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">
                INSTRUCTOR & MENTORS INVESTED IN YOUR SUCCESS
              </p>
              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6">
                Learn From The Best
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Learn from the Top 1% of the tech industry— exceptional professionals from top MNCs who have not only taught thousands but transformed their careers.
              </p>
            </div>
            
            <div className="relative">
              <div className="flex items-center gap-4 h-32">
                <span className="text-4xl lg:text-6xl font-black text-blue-600 bg-blue-50 px-6 py-2 rounded-xl rotate-[-2deg]">Expert</span>
                <div className="h-0.5 w-24 bg-slate-900 hidden lg:block"></div>
                <div className="relative h-full flex flex-col justify-center overflow-hidden min-w-[200px]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={wordIndex}
                      initial={{ y: 40, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -40, opacity: 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="flex flex-col"
                    >
                      <span className="text-3xl lg:text-5xl font-black text-blue-600">
                        {rotatingWords[wordIndex]}
                      </span>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>

          {/* Mentors Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { name: 'Chetan Segare', role: 'SDE 2', company: 'Microsoft', image: 'https://picsum.photos/seed/mentor1/400/500' },
              { name: 'Somendra Tiwari', role: 'SDE 2', company: 'ServiceNow', image: 'https://picsum.photos/seed/mentor2/400/500' },
              { name: 'Gaurav Choudhary', role: 'Software Developer', company: 'CareerDCode', image: 'https://picsum.photos/seed/mentor3/400/500', highlight: true },
              { name: 'Navdeep Singh', role: 'Software Engineer', company: 'Microsoft', image: 'https://picsum.photos/seed/mentor4/400/500' },
              { name: 'Dhiraj Kumar', role: 'Senior Manager', company: 'IIT Alumni', image: 'https://picsum.photos/seed/mentor5/400/500' }
            ].map((mentor, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative"
              >
                <div className={`relative rounded-[24px] overflow-hidden aspect-[3/4] mb-4 ${mentor.highlight ? 'ring-4 ring-blue-500/20' : ''}`}>
                  <img 
                    src={mentor.image} 
                    alt={mentor.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  
                  {/* LinkedIn Icon */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-lg">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </div>

                  <div className="absolute bottom-6 left-0 right-0 text-center px-4">
                    <p className="text-white font-bold text-lg leading-tight">{mentor.name}</p>
                    <p className="text-white/70 text-xs font-medium uppercase tracking-wider mt-1">{mentor.role}</p>
                  </div>
                </div>
                
                {/* Company Logo Card */}
                <div className="bg-white py-3 px-4 rounded-xl shadow-sm border border-slate-100 flex items-center justify-center h-12">
                  <span className="text-slate-900 font-black text-sm tracking-tight italic">{mentor.company}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Partners Section */}
      <div id="partners" className="bg-white">
        <TrustedCompanies />
      </div>

      {/* Placed Students Section */}
      <PlacedStudents />

      {/* Technologies Section */}
      <section className="py-24 bg-[#050A18] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Technologies You'll Master</h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto"></div>
          </div>
          <div className="flex flex-wrap justify-center gap-12">
            {course.techStack.map((tech) => (
              <div key={tech} className="flex flex-col items-center gap-4 group">
                <div className="w-20 h-20 bg-white/5 rounded-2xl flex items-center justify-center p-4 border border-white/10 group-hover:border-blue-500 transition-all group-hover:bg-white/10">
                  <img 
                    src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech}/${tech}-original.svg`} 
                    alt={tech}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech}/${tech}-plain.svg`;
                    }}
                  />
                </div>
                <span className="text-sm font-bold uppercase tracking-widest text-white/60 group-hover:text-white transition-colors">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <CurriculumSection />

      {/* FAQ Section */}
      <div id="faq">
        <CourseFAQ />
      </div>

      {/* Footer Placeholder */}
      <footer className="bg-[#050A18] py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-white/40 text-sm">© 2026 CareerDCode. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
