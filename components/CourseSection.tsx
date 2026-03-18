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
  const [isOfflineExpanded, setIsOfflineExpanded] = useState(true);
  const [selectedLocation, setSelectedLocation] = useState('Noida');

  const locations = ['Noida', 'Hyderabad', 'Pune', 'Bangalore', 'Chennai'];

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
      mongodb: "mongodb/mongodb-original.svg"
    };
    return mapping[tech] ? `${baseUrl}${mapping[tech]}` : null;
  };

  return (
    <section id="courses" className="py-20 bg-[#F0F7FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="mb-4">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-blue-600 font-display">
              TECHNICAL PROGRAMS
            </span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 font-display tracking-tight">
            Tailored for the <br />
            <span className="text-blue-600">Modern Engineer.</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl font-medium">
            Industry-aligned curriculum designed to bridge the gap between academia and professional excellence.
          </p>
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-2xl shadow-slate-200/50 p-8 lg:p-12 flex flex-col lg:flex-row gap-12">
          
          {/* Sidebar */}
          <div className="lg:w-1/4 space-y-8">
            <div>
              <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-6 font-display">Learning Mode</h3>
              <div className="space-y-3">
                {/* Live Online Courses */}
                <button
                  onClick={() => setActiveType('Live Online Courses')}
                  className={`w-full flex items-center justify-between p-4 rounded-xl text-sm font-bold font-display transition-all ${
                    activeType === 'Live Online Courses' 
                      ? 'bg-slate-900 text-white shadow-xl shadow-slate-200' 
                      : 'text-slate-500 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <MonitorPlay size={18} />
                    Live Online
                  </div>
                </button>

                {/* Self Paced Courses */}
                <div className="relative group/tooltip">
                  <button
                    disabled
                    className="w-full flex items-center justify-between p-4 rounded-xl text-sm font-bold font-display transition-all text-slate-300 bg-slate-50 cursor-not-allowed border border-dashed border-slate-200"
                  >
                    <div className="flex items-center gap-3">
                      <Zap size={18} />
                      Self Paced
                    </div>
                    <span className="text-[9px] font-black uppercase tracking-tighter bg-slate-200 text-slate-500 px-2 py-0.5 rounded">
                      Coming Soon
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Main Display Area */}
          <div className="lg:w-3/4">
            {/* Top Tabs */}
            <div className="flex flex-wrap gap-3 mb-10">
              {[
                { id: 'Full Stack Development', icon: <Code size={18} /> },
                { id: 'Data Analytics', icon: <BarChart3 size={18} /> },
                { id: 'Data Science & AI', icon: <Cpu size={18} /> }
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold font-display border-2 transition-all ${
                    activeCategory === cat.id
                      ? 'bg-blue-600 text-white border-blue-600 shadow-xl shadow-blue-100'
                      : 'bg-white text-slate-500 border-slate-100 hover:border-slate-900 hover:text-slate-900'
                  }`}
                >
                  {cat.icon}
                  {cat.id}
                </button>
              ))}
            </div>

            {/* Course Cards Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {coursesData[activeCategory]?.map((course) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all group"
                >
                  {/* Course Illustration Area */}
                  <div className={`relative h-56 ${course.color} flex items-center justify-center p-6`}>
                    <img 
                      src={course.image} 
                      alt={course.title} 
                      className="w-full h-full object-cover rounded-xl shadow-2xl"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Course Info */}
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-6 h-14">
                      <h4 className="text-xl font-bold font-display text-slate-900 leading-tight line-clamp-2">
                        {course.title}
                      </h4>
                    </div>

                    {/* Tech Stack Icons */}
                    <div className="flex flex-wrap gap-2 mb-8 h-10 overflow-hidden">
                      {course.techStack.slice(0, 3).map((tech) => (
                        <div key={tech} className="px-3 py-1.5 bg-slate-50 rounded-lg border border-slate-100 flex items-center gap-2">
                          <img 
                            src={getTechIcon(tech) || undefined} 
                            alt={tech} 
                            className="w-4 h-4 object-contain"
                            referrerPolicy="no-referrer"
                          />
                          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">{tech}</span>
                        </div>
                      ))}
                      {course.techStack.length > 3 && (
                        <div className="px-3 py-1.5 bg-blue-50 rounded-lg border border-blue-100 flex items-center">
                          <span className="text-[10px] font-black text-blue-600 uppercase tracking-wider">
                            +{course.techStack.length - 3} More
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="mt-auto flex items-center justify-between pt-6 border-t border-slate-50">
                      <div className="flex items-center gap-2 text-slate-400 font-bold text-[10px] uppercase tracking-widest">
                        <Clock size={14} />
                        {course.duration}
                      </div>
                      <Link 
                        href={`/courses/${course.id}`}
                        className="text-blue-600 font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all"
                      >
                        Details <ChevronRight size={16} />
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

