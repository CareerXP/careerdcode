import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Linkedin } from 'lucide-react';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "We have the best engineers on board from CareerDCode. The value they add to the students' career and the company's hiring needs is unparalleled. It's become a ritual for us to ping CareerDCode for new openings.",
    author: "Yogesh Lokhande",
    role: "PayGlobal Co-founder",
    image: "https://picsum.photos/seed/yogesh/100/100"
  },
  {
    id: 2,
    quote: "CareerDCode candidates are consistently among our top performers. Their technical foundation and problem-solving skills are exactly what we look for in our engineering teams.",
    author: "Anjali Sharma",
    role: "Tech Lead at HCL",
    image: "https://picsum.photos/seed/anjali/100/100"
  },
  {
    id: 3,
    quote: "The quality of talent we receive from CareerDCode is exceptional. Their training program clearly prepares them for real-world challenges in the tech industry.",
    author: "Rahul Mehta",
    role: "HR Director at Ola",
    image: "https://picsum.photos/seed/rahul/100/100"
  }
];

export default function TrustedBy() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <section className="relative py-24 bg-[#0A3D91] overflow-hidden text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,500 C200,400 400,600 600,500 C800,400 1000,600 1000,500" stroke="white" fill="transparent" strokeWidth="0.5" />
          <path d="M0,550 C200,450 400,650 600,550 C800,450 1000,650 1000,550" stroke="white" fill="transparent" strokeWidth="0.5" />
          {/* Add more paths for the wave effect */}
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold flex items-center justify-center gap-4 flex-wrap">
            <span className="bg-white text-[#0A3D91] px-4 py-1 rounded-lg">Trusted</span>
            by 500+ companies for top talent
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Testimonial Slider */}
          <div className="space-y-12">
            <h3 className="text-sm font-bold uppercase tracking-widest opacity-80">
              TECH AND HR LEADERS BANK ON CAREERDCODE
            </h3>

            <div 
              className="relative h-[300px]"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-2xl p-8 text-slate-800 shadow-2xl relative"
                >
                  {/* Decorative background cards */}
                  <div className="absolute -z-10 top-2 left-2 w-full h-full bg-white/20 rounded-2xl"></div>
                  <div className="absolute -z-20 top-4 left-4 w-full h-full bg-white/10 rounded-2xl"></div>

                  <p className="text-lg font-bold text-blue-900 mb-4">
                    {testimonials[currentIndex].quote.split('.')[0]}.
                  </p>
                  <p className="text-slate-500 text-sm leading-relaxed mb-8">
                    {testimonials[currentIndex].quote.split('.').slice(1).join('.')}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <img 
                        src={testimonials[currentIndex].image} 
                        alt={testimonials[currentIndex].author} 
                        className="w-12 h-12 rounded-full object-cover border-2 border-slate-100"
                        referrerPolicy="no-referrer"
                      />
                      <div>
                        <h4 className="font-bold text-slate-900">{testimonials[currentIndex].author}</h4>
                        <p className="text-xs text-slate-500 font-medium">{testimonials[currentIndex].role}</p>
                      </div>
                    </div>
                    <Linkedin className="text-blue-600" size={24} fill="currentColor" />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              {[
                { label: 'COMPANIES', value: '500+' },
                { label: 'OPENINGS', value: '8000+' },
                { label: 'PLACEMENTS', value: '2000+' },
              ].map((stat, idx) => (
                <div key={idx} className={`${idx !== 2 ? 'border-r border-white/20' : ''}`}>
                  <p className="text-4xl font-bold mb-2">{stat.value}</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest opacity-70">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Hexagon Logo Grid */}
          <div className="relative h-[500px] hidden lg:block">
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Hexagon Grid Layout */}
              <div className="grid grid-cols-3 gap-4 transform rotate-[-15deg]">
                {[
                  { name: 'HCL', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/HCL_Technologies_logo.svg/1200px-HCL_Technologies_logo.svg.png' },
                  { name: 'OLA', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Ola_Cabs_logo.svg/1200px-Ola_Cabs_logo.svg.png' },
                  { name: 'VISA', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1200px-Visa_Inc._logo.svg.png' },
                  { name: 'Tokopedia', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Tokopedia.svg/1200px-Tokopedia.svg.png' },
                  { name: 'Accenture', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Accenture.svg/1200px-Accenture.svg.png' },
                  { name: 'TCS', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Tata_Consultancy_Services_Logo.svg/1200px-Tata_Consultancy_Services_Logo.svg.png' },
                ].map((company, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="w-32 h-36 bg-white/10 backdrop-blur-md clip-path-hexagon flex items-center justify-center p-6 hover:bg-white/20 transition-all cursor-pointer group"
                  >
                    <img 
                      src={company.logo} 
                      alt={company.name} 
                      className="max-w-full max-h-full object-contain brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity" 
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .clip-path-hexagon {
          clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
        }
      `}</style>
    </section>
  );
}
