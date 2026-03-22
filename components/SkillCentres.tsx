import { useState } from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { ChevronRight, MapPin } from 'lucide-react';
import { coursesData } from '@/data/courses';

interface Centre {
  id: string;
  name: string;
  location: string;
}

const centres: Centre[] = [
  { id: 'pune', name: 'Pune Skill Centre', location: 'Pune' },
  { id: 'noida', name: 'Noida Skill Centre', location: 'Noida' },
  { id: 'hyderabad', name: 'Hyderabad Skill Centre', location: 'Hyderabad' },
];

export default function SkillCentres() {
  const [activeCentre, setActiveCentre] = useState('pune');

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
      excel: "microsoft-excel/microsoft-excel-original.svg",
      powerbi: "powerbi/powerbi-original.svg"
    };
    
    // Some icons might not be in devicon, using placeholders if needed
    if (tech === 'excel') return "https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg";
    if (tech === 'powerbi') return "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg";
    
    return mapping[tech] ? `${baseUrl}${mapping[tech]}` : null;
  };

  // Use coursesData directly as it is already an array
  const allCourses = coursesData;

  return (
    <section id="centres" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Sidebar */}
          <div className="lg:w-1/4">
            <div className="mb-10">
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-900 relative inline-block">
                EXPLORE OUR CENTRES
                <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-indigo-600"></span>
              </h3>
            </div>
            <div className="space-y-4">
              {centres.map((centre) => (
                <button
                  key={centre.id}
                  onClick={() => setActiveCentre(centre.id)}
                  className={`w-full text-left px-6 py-4 rounded-xl text-sm font-bold transition-all ${
                    activeCentre === centre.id
                      ? 'bg-indigo-50 text-indigo-600 border-l-4 border-indigo-600 shadow-sm'
                      : 'text-slate-400 hover:text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {centre.name}
                </button>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            <div className="mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4 font-display">
                <span className="text-indigo-600">Offline</span> Skill Centres
              </h2>
              <p className="text-slate-600 text-lg">
                Learn face to face with top industry experts and attend hiring drives at our skill centres.
              </p>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-16">
              {/* Col 1: Tall Image */}
              <div className="md:col-span-1 h-[450px]">
                <img 
                  src="https://picsum.photos/seed/centre1/400/800" 
                  className="w-full h-full object-cover rounded-2xl shadow-md"
                  alt="Centre Interior"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              {/* Col 2: Stacked Images */}
              <div className="md:col-span-1 flex flex-col gap-4 h-[450px]">
                <img 
                  src="https://picsum.photos/seed/centre2/400/400" 
                  className="w-full h-1/2 object-cover rounded-2xl shadow-md"
                  alt="Student Interaction"
                  referrerPolicy="no-referrer"
                />
                <img 
                  src="https://picsum.photos/seed/centre3/400/400" 
                  className="w-full h-1/2 object-cover rounded-2xl shadow-md"
                  alt="Group Discussion"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Col 3: Tall Image */}
              <div className="md:col-span-1 h-[450px]">
                <img 
                  src="https://picsum.photos/seed/centre4/400/800" 
                  className="w-full h-full object-cover rounded-2xl shadow-md"
                  alt="Corridor"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Col 4: Top Image + Map Card */}
              <div className="md:col-span-1 flex flex-col gap-4 h-[450px]">
                <img 
                  src="https://picsum.photos/seed/centre5/400/400" 
                  className="w-full h-1/2 object-cover rounded-2xl shadow-md"
                  alt="Classroom"
                  referrerPolicy="no-referrer"
                />
                {/* Map Card */}
                <div className="w-full h-1/2 bg-gradient-to-br from-indigo-600 to-indigo-400 rounded-2xl p-6 relative overflow-hidden flex flex-col justify-center text-white shadow-lg">
                  <div className="relative z-10">
                    <h4 className="text-2xl font-bold mb-2">{centres.find(c => c.id === activeCentre)?.location}</h4>
                    <div className="flex items-center gap-2">
                      <MapPin size={20} className="text-white/80" />
                      <span className="text-sm font-medium text-white/90">View on Map</span>
                    </div>
                  </div>
                  {/* Abstract Map Graphic */}
                  <div className="absolute right-[-20%] bottom-[-20%] w-full h-full opacity-20 pointer-events-none">
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-white">
                      <path d="M44.7,-76.4C58.1,-69.2,69.2,-58.1,76.4,-44.7C83.7,-31.3,87.1,-15.7,85.6,-0.9C84,14,77.5,28,69.2,40.4C60.9,52.8,50.8,63.6,38.4,70.9C26,78.2,13,82,0.3,81.5C-12.4,81,-24.8,76.2,-36.4,68.6C-48,61,-58.8,50.6,-66.4,38.4C-74,26.2,-78.4,12.1,-78.8,-2.1C-79.2,-16.3,-75.6,-30.6,-67.7,-42.4C-59.8,-54.2,-47.6,-63.5,-34.7,-71C-21.8,-78.5,-8.3,-84.2,3.3,-89.9C14.9,-95.6,29.8,-91.3,44.7,-76.4Z" transform="translate(100 100)" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Courses Offered Section */}
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-8">Courses Offered</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {allCourses.map((course, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="bg-indigo-50/50 rounded-2xl p-6 border border-indigo-100 flex flex-col h-full"
                    >
                      <h4 className="text-sm font-bold text-slate-800 mb-6 leading-tight min-h-[40px]">
                        {course.title}
                      </h4>
                      
                      <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                        {course.techStack.map((t) => {
                          const icon = getTechIcon(t);
                          return (
                            <div key={t} className="w-7 h-7 p-1 bg-white rounded-md shadow-sm border border-slate-100">
                              {icon && (
                                <img 
                                  src={icon} 
                                  alt={t} 
                                  className="w-full h-full object-contain"
                                  referrerPolicy="no-referrer"
                                />
                              )}
                            </div>
                          );
                        })}
                        {course.title.includes('MERN') && (
                          <div className="w-7 h-7 bg-indigo-600 text-white rounded-md flex items-center justify-center text-[7px] font-bold">
                            DSA
                          </div>
                        )}
                      </div>

                      <Link 
                        href={`/courses/${course.id}`}
                        className="w-full py-2.5 bg-indigo-600 text-white rounded-lg text-xs font-bold flex items-center justify-center gap-2 hover:bg-indigo-700 transition-all"
                      >
                        View Program <ChevronRight size={14} />
                      </Link>
                    </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

