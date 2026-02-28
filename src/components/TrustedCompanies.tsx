import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Linkedin } from 'lucide-react';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "We have the best engineers on board from CareerDCode. The value they add to the students's career and the company's talent needs is unparalleled. It's become a ritual for us to reach out to CareerDCode for new talent.",
    author: "Yogesh Lokhande",
    role: "PayGlobal Co-founder",
    avatar: "https://picsum.photos/seed/yogesh/100/100"
  },
  {
    id: 2,
    quote: "CareerDCode has consistently provided us with high-quality talent. Their students are well-prepared and possess the technical skills required for modern engineering roles.",
    author: "Sneha Reddy",
    role: "HR Director at TechCorp",
    avatar: "https://picsum.photos/seed/sneha/100/100"
  },
  {
    id: 3,
    quote: "The hiring process with CareerDCode is seamless. They understand our requirements perfectly and match us with candidates who fit our culture and technical needs.",
    author: "Amit Sharma",
    role: "Engineering Manager at Innovate",
    avatar: "https://picsum.photos/seed/amit/100/100"
  }
];

const companyLogos = [
  { name: 'HCL', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/HCL_Technologies_logo.svg/2560px-HCL_Technologies_logo.svg.png' },
  { name: 'OLA ELECTRIC', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Ola_Cabs_logo.svg/1200px-Ola_Cabs_logo.svg.png' },
  { name: 'VISA', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png' },
  { name: 'Tokopedia', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Tokopedia.svg/1200px-Tokopedia.svg.png' },
  { name: 'Optum', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Optum_logo.svg/2560px-Optum_logo.svg.png' },
  { name: 'Arcesium', logo: 'https://picsum.photos/seed/arcesium/120/40' },
  { name: 'Man Matters', logo: 'https://picsum.photos/seed/manmatters/120/40' },
  { name: 'Gainsight', logo: 'https://picsum.photos/seed/gainsight/120/40' }
];

export default function TrustedCompanies() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isHovered]);

  return (
    <section className="relative py-24 bg-[#0A2540] overflow-hidden text-white">
      {/* Background Waves */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 100C300 50 600 150 900 100C1200 50 1500 150 1800 100" stroke="white" strokeWidth="2" />
          <path d="M0 200C300 150 600 250 900 200C1200 150 1500 250 1800 200" stroke="white" strokeWidth="2" />
          <path d="M0 300C300 250 600 350 900 300C1200 250 1500 350 1800 300" stroke="white" strokeWidth="2" />
          <path d="M0 400C300 350 600 450 900 400C1200 350 1500 450 1800 400" stroke="white" strokeWidth="2" />
          <path d="M0 500C300 450 600 550 900 500C1200 450 1500 550 1800 500" stroke="white" strokeWidth="2" />
          <path d="M0 600C300 550 600 650 900 600C1200 550 1500 650 1800 600" stroke="white" strokeWidth="2" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold">
            <span className="bg-white text-[#0A2540] px-4 py-1 rounded-lg mr-3">Trusted</span>
            by 500+ companies for top talent
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Testimonials and Stats */}
          <div className="space-y-16">
            <div className="space-y-8">
              <h3 className="text-sm font-bold uppercase tracking-widest text-blue-300">
                TECH AND HR LEADERS BANK ON CAREERDCODE
              </h3>

              {/* Testimonial Card */}
              <div 
                className="relative h-[280px]"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ 
                      type: "spring",
                      stiffness: 260,
                      damping: 20
                    }}
                    className="absolute inset-0 bg-white rounded-2xl p-8 text-slate-800 shadow-2xl"
                  >
                    <div className="space-y-6">
                      <p className="text-lg font-bold text-blue-900">
                        We have the best engineers on board from CareerDCode.
                      </p>
                      <p className="text-slate-600 leading-relaxed">
                        {testimonials[currentIndex].quote}
                      </p>
                      <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <img 
                            src={testimonials[currentIndex].avatar} 
                            alt={testimonials[currentIndex].author} 
                            className="w-12 h-12 rounded-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                          <div>
                            <p className="font-bold text-slate-900">{testimonials[currentIndex].author}</p>
                            <p className="text-sm text-slate-500">{testimonials[currentIndex].role}</p>
                          </div>
                        </div>
                        <Linkedin className="text-blue-600" size={24} fill="currentColor" />
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
                {/* Stack Effect */}
                <div className="absolute -right-4 top-4 bottom-4 w-4 bg-white/20 rounded-r-2xl -z-10"></div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              {[
                { label: 'COMPANIES', value: '500+' },
                { label: 'PROJECTS', value: '1000+' },
                { label: 'STUDENTS', value: '35000+' }
              ].map((stat, idx) => (
                <div key={idx} className={`text-center ${idx !== 2 ? 'border-r border-white/20' : ''}`}>
                  <p className="text-4xl lg:text-5xl font-bold mb-2">{stat.value}</p>
                  <p className="text-xs font-bold uppercase tracking-widest text-blue-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Hexagonal Logo Grid */}
          <div className="relative h-[500px] flex items-center justify-center">
            <div className="grid grid-cols-3 gap-4">
              {companyLogos.map((company, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`w-32 h-36 bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center p-6 hover:bg-white/20 transition-all cursor-pointer shadow-lg
                    ${idx % 2 === 1 ? 'mt-12' : ''}
                  `}
                  style={{
                    clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'
                  }}
                >
                  <img 
                    src={company.logo} 
                    alt={company.name} 
                    className="max-w-full max-h-full object-contain brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
