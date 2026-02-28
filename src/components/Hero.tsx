import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-24 lg:pt-24 lg:pb-32">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-50 rounded-full border border-blue-100">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <img
                    key={i}
                    src={`https://picsum.photos/seed/user${i}/40/40`}
                    className="w-8 h-8 rounded-full border-2 border-white object-cover"
                    alt="User"
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div>
              <span className="text-sm font-semibold text-blue-700">35k+ Happy Students</span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
              The <span className="text-blue-600">Training</span> and Placement platform for your <span className="text-blue-500">career</span>
            </h1>

            {/* Subtext */}
            <p className="text-xl text-slate-600 max-w-xl leading-relaxed">
              Get job-ready with expert-led courses or participate in our free hiring drives.
            </p>

            {/* Partner Logos */}
            <div className="pt-8 flex flex-wrap items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all">
              <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">LinkedIn</span>
                <span className="text-xl font-black text-slate-800">TOP 2023</span>
              </div>
              <div className="h-8 w-px bg-slate-200"></div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Backed By</span>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-slate-200 rounded-full"></div>
                  <div className="w-8 h-8 bg-slate-200 rounded-full"></div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Cards */}
          <div className="space-y-6">
            {/* Courses Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 to-blue-500 p-8 text-white shadow-2xl shadow-blue-200"
            >
              <div className="relative z-10 max-w-[60%]">
                <h3 className="text-xs font-bold uppercase tracking-widest mb-4">Courses</h3>
                <p className="text-2xl font-bold mb-8 leading-tight">
                  Industry Ready Training to get you placed!
                </p>
                <button className="flex items-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-xl font-bold hover:bg-blue-50 transition-all">
                  View Courses <ArrowUpRight size={20} />
                </button>
              </div>
              {/* Instructor Image Placeholder */}
              <div className="absolute right-0 bottom-0 w-1/2 h-full flex items-end justify-end overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400" 
                  className="h-[90%] object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
                  alt="Instructor"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/40 to-transparent"></div>
              </div>
            </motion.div>

            {/* Jobs Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-600 to-purple-500 p-8 text-white shadow-2xl shadow-purple-200"
            >
              <div className="relative z-10 max-w-[60%]">
                <h3 className="text-xs font-bold uppercase tracking-widest mb-4">Jobs</h3>
                <p className="text-2xl font-bold mb-8 leading-tight">
                  If you're skilled, get hired directly with our FREE verified hiring drives!
                </p>
                <button className="flex items-center gap-2 px-6 py-3 bg-white text-purple-600 rounded-xl font-bold hover:bg-purple-50 transition-all">
                  View Hiring Drives <ArrowUpRight size={20} />
                </button>
              </div>
              {/* Professional Image Placeholder */}
              <div className="absolute right-0 bottom-0 w-1/2 h-full flex items-end justify-end overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" 
                  className="h-[90%] object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
                  alt="Professional"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/40 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
