import { motion } from 'motion/react';
import { Linkedin, Quote } from 'lucide-react';

interface Founder {
  name: string;
  role: string;
  image: string;
  bio?: string;
}

const founders: Founder[] = [
  {
    name: 'Yashwardhan Burad',
    role: 'CEO & Co-founder',
    image: 'https://picsum.photos/seed/yash/400/500',
    bio: 'IIT Delhi grad driving scale, growth & marketing to make tech education truly career-changing.'
  },
  {
    name: 'Harsh Sharma',
    role: 'CTO & Co-founder',
    image: 'https://picsum.photos/seed/harsh/400/500',
    bio: 'Tech visionary focused on building robust, scalable architectures for the next generation of engineers.'
  },
  {
    name: 'Priyanshu Agarwal',
    role: 'COO & Co-founder',
    image: 'https://picsum.photos/seed/priyanshu/400/500',
    bio: 'Operations expert streamlining processes to deliver a seamless learning experience for thousands.'
  },
  {
    name: 'Vishu Bansal',
    role: 'CPO & Co-founder',
    image: 'https://picsum.photos/seed/vishu/400/500',
    bio: 'Product strategist dedicated to crafting intuitive and impactful educational journeys.'
  }
];

export default function FoundersSection() {
  return (
    <section className="relative py-32 bg-white overflow-hidden">
      {/* Technical Grid Background */}
      <div className="absolute inset-0 -z-10 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:32px_32px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="mb-20">
          <div className="mb-4">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 font-display">
              LEADERSHIP TEAM
            </span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 font-display tracking-tight">
            The Minds Behind <br />
            <span className="text-blue-600">CareerDCode.</span>
          </h2>
        </div>

        {/* Founders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-100 border border-slate-100 rounded-2xl overflow-hidden shadow-2xl shadow-slate-200/50">
          {founders.map((founder, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative bg-white aspect-[3/4] overflow-hidden flex flex-col"
            >
              {/* Founder Image */}
              <div className="relative flex-grow overflow-hidden">
                <img 
                  src={founder.image} 
                  alt={founder.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>

              {/* Founder Info */}
              <div className="p-8 bg-white border-t border-slate-50 relative z-10">
                <h3 className="text-xl font-bold text-slate-900 font-display tracking-tight leading-tight mb-1">
                  {founder.name}
                </h3>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest font-display">
                  {founder.role}
                </p>
              </div>

              {/* Bio on Hover - Covers Entire Card */}
              {founder.bio && (
                <div className="absolute inset-0 bg-slate-900/95 p-10 flex flex-col justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-20">
                  <Quote className="text-blue-500 mb-6 opacity-50" size={40} />
                  <p className="text-base font-medium text-slate-300 leading-relaxed italic mb-8">
                    {founder.bio}
                  </p>
                  <div className="pt-8 border-t border-white/10 flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-white font-bold font-display text-lg">{founder.name}</span>
                      <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest">{founder.role}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-[10px] font-black text-white uppercase tracking-widest font-display opacity-0 group-hover:opacity-100 transition-opacity delay-300">View Profile</span>
                      <a href="#" className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-blue-500 transition-colors">
                        <Linkedin size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
