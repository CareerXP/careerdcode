import { useState } from 'react';
import { motion } from 'motion/react';
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

interface Course {
  id: string;
  title: string;
  duration: string;
  image: string;
  techStack: string[];
  color: string;
}

const courses: Record<string, Course[]> = {
  'Full Stack Development': [
    {
      id: 'java-fs',
      title: 'JAVA- Full Stack Development With Gen AI',
      duration: '8 MONTHS',
      image: 'https://picsum.photos/seed/java/400/250',
      techStack: ['java', 'mysql', 'spring', 'python'],
      color: 'bg-[#9370DB]' // Purple-ish
    },
    {
      id: 'mern-fs',
      title: 'MERN- Full Stack Development With Gen AI',
      duration: '8 MONTHS',
      image: 'https://picsum.photos/seed/mern/400/250',
      techStack: ['html5', 'css3', 'react', 'nodejs', 'javascript', 'mongodb'],
      color: 'bg-[#008B45]' // Green-ish
    }
  ]
};

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
    <section className="py-20 bg-[#F0F7FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="mb-4">
            <span className="text-sm font-bold uppercase tracking-widest text-slate-900 relative">
              COURSES
              <span className="absolute -bottom-1 left-0 w-10 h-0.5 bg-blue-600"></span>
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            <span className="text-blue-600">Offline</span>, Live Online and Self Paced courses tailored for you!
          </h2>
          <p className="text-slate-600 text-lg max-w-3xl">
            Courses and placement assistance with 60+ hiring drives each month to help you land your dream tech job!
          </p>
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-[32px] shadow-xl shadow-blue-100/50 p-8 lg:p-12 flex flex-col lg:flex-row gap-12">
          
          {/* Sidebar */}
          <div className="lg:w-1/4 space-y-8">
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-6">Choose Your Preferred Course:</h3>
              <div className="space-y-2">
                {/* Live Online Courses */}
                <button
                  onClick={() => setActiveType('Live Online Courses')}
                  className={`w-full flex items-center justify-between p-4 rounded-xl text-sm font-bold transition-all ${
                    activeType === 'Live Online Courses' 
                      ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600' 
                      : 'text-slate-500 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <MonitorPlay size={18} />
                    Live Online Courses
                  </div>
                </button>

                {/* Offline Courses Dropdown */}
                <div className="space-y-1">
                  <button
                    onClick={() => {
                      setActiveType('Offline Courses');
                      setIsOfflineExpanded(!isOfflineExpanded);
                    }}
                    className={`w-full flex items-center justify-between p-4 rounded-xl text-sm font-bold transition-all ${
                      activeType === 'Offline Courses' 
                        ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600' 
                        : 'text-slate-500 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <MapPin size={18} />
                      Offline Courses
                    </div>
                    <ChevronDown size={16} className={`transition-transform ${isOfflineExpanded ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {isOfflineExpanded && (
                    <div className="pl-11 space-y-1">
                      {locations.map((loc) => (
                        <button
                          key={loc}
                          onClick={() => {
                            setActiveType('Offline Courses');
                            setSelectedLocation(loc);
                          }}
                          className={`w-full text-left py-2 px-3 rounded-lg text-sm font-medium transition-all ${
                            activeType === 'Offline Courses' && selectedLocation === loc
                              ? 'text-blue-600 bg-blue-50/50'
                              : 'text-slate-500 hover:text-blue-600 hover:bg-slate-50'
                          }`}
                        >
                          {loc}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Self Paced Courses */}
                <button
                  onClick={() => setActiveType('Self Paced Courses')}
                  className={`w-full flex items-center justify-between p-4 rounded-xl text-sm font-bold transition-all ${
                    activeType === 'Self Paced Courses' 
                      ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600' 
                      : 'text-slate-500 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Zap size={18} />
                    Self Paced Courses
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Main Display Area */}
          <div className="lg:w-3/4">
            {/* Top Tabs */}
            <div className="flex flex-wrap gap-4 mb-6">
              {[
                { id: 'Full Stack Development', icon: <Code size={18} /> },
                { id: 'Data Analytics', icon: <BarChart3 size={18} /> },
                { id: 'Data Science & AI', icon: <Cpu size={18} /> }
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-bold border transition-all ${
                    activeCategory === cat.id
                      ? 'bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-200'
                      : 'bg-white text-slate-600 border-slate-200 hover:border-blue-600 hover:text-blue-600'
                  }`}
                >
                  {cat.icon}
                  {cat.id}
                </button>
              ))}
            </div>

            {/* Location Heading for Offline */}
            {activeType === 'Offline Courses' && (
              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-900">{selectedLocation} Skill Centre</h3>
              </div>
            )}

            {/* Course Cards Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {courses[activeCategory]?.map((course) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl transition-all group"
                >
                  {/* Course Illustration Area */}
                  <div className={`relative h-48 ${course.color} flex items-center justify-center p-6`}>
                    <img 
                      src={course.image} 
                      alt={course.title} 
                      className="w-full h-full object-cover rounded-xl shadow-lg"
                      referrerPolicy="no-referrer"
                    />
                    {/* Floating Tech Labels (Simplified representation of image) */}
                    <div className="absolute inset-0 p-4 pointer-events-none">
                      <span className="absolute top-4 right-4 bg-yellow-400 text-slate-900 text-[10px] font-black px-2 py-0.5 rounded">DSA</span>
                      <span className="absolute bottom-10 left-6 bg-slate-200/80 text-slate-600 text-[10px] font-black px-2 py-0.5 rounded">HTML</span>
                      <span className="absolute top-1/2 left-4 bg-slate-200/80 text-slate-600 text-[10px] font-black px-2 py-0.5 rounded">CSS</span>
                    </div>
                  </div>

                  {/* Course Info */}
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="text-lg font-bold text-blue-900 leading-tight max-w-[70%]">
                        {course.title}
                      </h4>
                      <div className="flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-[10px] font-bold">
                        <Clock size={12} />
                        {course.duration}
                      </div>
                    </div>

                    {/* Tech Stack Icons */}
                    <div className="flex flex-wrap gap-3 mb-8">
                      {course.techStack.map((tech) => (
                        <div key={tech} className="w-8 h-8 p-1 bg-slate-50 rounded-lg flex items-center justify-center border border-slate-100">
                          <img 
                            src={getTechIcon(tech) || ''} 
                            alt={tech} 
                            className="w-full h-full object-contain"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      ))}
                      {course.id === 'mern-fs' && (
                        <div className="w-8 h-8 bg-emerald-600 text-white rounded-lg flex items-center justify-center text-[8px] font-bold">
                          DSA
                        </div>
                      )}
                    </div>

                    {/* Button */}
                    <button className="w-full py-3 bg-blue-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition-all group-hover:shadow-lg group-hover:shadow-blue-200">
                      View Program <ChevronRight size={18} />
                    </button>
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
