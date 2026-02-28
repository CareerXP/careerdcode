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
  },
  {
    name: 'Priyanshu Agarwal',
    role: 'COO & Co-founder',
    image: 'https://picsum.photos/seed/priyanshu/400/500',
  },
  {
    name: 'Vishu Bansal',
    role: 'CPO & Co-founder',
    image: 'https://picsum.photos/seed/vishu/400/500',
  }
];

export default function FoundersSection() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 -z-10 opacity-30" 
           style={{ 
             backgroundImage: `linear-gradient(to right, #E0E7FF 1px, transparent 1px), linear-gradient(to bottom, #E0E7FF 1px, transparent 1px)`,
             backgroundSize: '40px 40px'
           }}>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
            <span className="text-blue-600">Meet</span> Our Founders
          </h2>
        </div>

        {/* Founders Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {founders.map((founder, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative h-[420px] rounded-2xl overflow-hidden shadow-xl bg-white border border-slate-100"
            >
              {/* Founder Image */}
              <img 
                src={founder.image} 
                alt={founder.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />

              {/* Special Layout for First Card (Yashwardhan) */}
              {idx === 0 ? (
                <div className="absolute inset-0 flex flex-col">
                  {/* Top Quote Section */}
                  <div className="absolute inset-0 bg-blue-600/90 p-8 flex flex-col justify-center text-white w-[65%] clip-path-founder">
                    <Quote className="mb-4 opacity-50" size={48} fill="currentColor" />
                    <p className="text-sm font-bold leading-relaxed mb-4">
                      {founder.bio}
                    </p>
                    <Quote className="self-end opacity-50 rotate-180" size={48} fill="currentColor" />
                  </div>
                  
                  {/* Bottom Info */}
                  <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-blue-900/80 to-transparent">
                    <div className="flex justify-between items-end">
                      <div>
                        <h3 className="text-white font-bold text-base leading-tight">{founder.name}</h3>
                        <p className="text-white/80 text-[10px] font-medium mt-1">{founder.role}</p>
                      </div>
                      <a href="#" className="text-white hover:scale-110 transition-transform">
                        <Linkedin size={18} fill="currentColor" />
                      </a>
                    </div>
                  </div>
                </div>
              ) : (
                /* Standard Layout for other cards */
                <div className="absolute inset-0 bg-gradient-to-t from-blue-700/90 via-transparent to-transparent flex flex-col justify-end p-6">
                  <div className="flex justify-between items-end">
                    <div>
                      <h3 className="text-white font-bold text-base leading-tight">{founder.name}</h3>
                      <p className="text-white/80 text-[10px] font-medium mt-1">{founder.role}</p>
                    </div>
                    <a href="#" className="text-white hover:scale-110 transition-transform">
                      <Linkedin size={18} fill="currentColor" />
                    </a>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .clip-path-founder {
          clip-path: polygon(0 0, 100% 0, 85% 100%, 0% 100%);
        }
      `}</style>
    </section>
  );
}
