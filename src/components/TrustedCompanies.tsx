import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  avatar: string;
  companyLogo: string;
  previousCompanyLogo?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "We hired rockstar developers from CareerDCode! We had a great experience while hiring software developers from CareerDCode. The candidates are enjoying high ownership in Converj - having sound fundamentals and first principal thinking.",
    author: "Yogesh Lokhande",
    role: "Co-founder",
    avatar: "https://picsum.photos/seed/yogesh/100/100",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png",
    previousCompanyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/HCL_Technologies_logo.svg/2560px-HCL_Technologies_logo.svg.png"
  },
  {
    id: 2,
    quote: "The talent we found at CareerDCode is exceptional. Their students don't just know how to code; they know how to solve problems. It's been a game-changer for our engineering team.",
    author: "Sneha Reddy",
    role: "HR Director",
    avatar: "https://picsum.photos/seed/sneha/100/100",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Ola_Cabs_logo.svg/1200px-Ola_Cabs_logo.svg.png"
  }
];

const companyLogos = [
  'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/HCL_Technologies_logo.svg/2560px-HCL_Technologies_logo.svg.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Ola_Cabs_logo.svg/1200px-Ola_Cabs_logo.svg.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Tokopedia.svg/1200px-Tokopedia.svg.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Optum_logo.svg/2560px-Optum_logo.svg.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2560px-Microsoft_logo.svg.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Tata_Consultancy_Services_Logo.svg/2560px-Tata_Consultancy_Services_Logo.svg.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Accenture.svg/2560px-Accenture.svg.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/2560px-IBM_logo.svg.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2560px-LinkedIn_Logo.svg.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/2560px-WhatsApp.svg.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Walmart_Home_Office.svg/2560px-Walmart_Home_Office.svg.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Pepsi_logo_2014.svg/2560px-Pepsi_logo_2014.svg.png'
];

export default function TrustedCompanies() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="partners" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="w-12 h-1 bg-blue-600 mx-auto mb-6"></div>
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4">
            Unlock Opportunities With <span className="text-blue-600">500+</span> Elite Hiring Partners
          </h2>
          <p className="text-slate-500 font-medium text-lg">
            Check out why our hiring partner trust us
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Logo Grid */}
          <div className="relative">
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-4">
              {companyLogos.map((logo, idx) => (
                <div 
                  key={idx} 
                  className="bg-white border border-slate-100 rounded-xl p-4 flex items-center justify-center h-16 shadow-sm hover:shadow-md transition-shadow"
                >
                  <img 
                    src={logo} 
                    alt="Partner Logo" 
                    className="max-w-full max-h-full object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>
            <div className="mt-8 text-center lg:text-left">
              <a href="#" className="text-blue-600 font-bold hover:underline">and many more...</a>
            </div>
          </div>

          {/* Right: Testimonial Carousel */}
          <div className="relative flex items-center justify-center">
            {/* Background Decoration */}
            <div className="absolute -z-10 w-[120%] h-[120%] opacity-10">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#3B82F6" d="M44.7,-76.4C58.1,-69.2,69.2,-58.1,76.4,-44.7C83.7,-31.3,87,-15.7,85.8,-0.7C84.6,14.3,78.8,28.6,70.1,41.1C61.4,53.6,49.8,64.3,36.5,71.2C23.2,78.1,8.1,81.2,-6.6,80.2C-21.3,79.2,-35.6,74.1,-48.1,65.6C-60.6,57.1,-71.3,45.2,-77.4,31.4C-83.5,17.6,-85,1.9,-82.5,-13.1C-80,-28.1,-73.5,-42.4,-63.1,-53.8C-52.7,-65.2,-38.4,-73.7,-24.1,-78.6C-9.8,-83.5,4.5,-84.8,19.1,-82.1C33.7,-79.4,44.7,-76.4,44.7,-76.4Z" transform="translate(100 100)" />
              </svg>
            </div>

            {/* Navigation Buttons */}
            <button 
              onClick={prevTestimonial}
              className="absolute left-0 lg:-left-6 z-20 w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center text-slate-600 hover:bg-slate-300 transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextTestimonial}
              className="absolute right-0 lg:-right-6 z-20 w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-white hover:bg-slate-900 transition-colors"
            >
              <ChevronRight size={24} />
            </button>

            {/* Testimonial Card */}
            <div className="relative w-full max-w-md">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="bg-[#050A18] rounded-[32px] p-8 lg:p-10 text-white shadow-2xl relative overflow-hidden"
                >
                  {/* Card Stack Effect */}
                  <div className="absolute right-0 top-0 bottom-0 w-2 bg-blue-600/20"></div>
                  <div className="absolute right-2 top-4 bottom-4 w-2 bg-blue-600/10"></div>

                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-blue-500/20 mb-6">
                      <img 
                        src={testimonials[currentIndex].avatar} 
                        alt={testimonials[currentIndex].author}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    <h4 className="text-xl font-bold mb-6 leading-tight">
                      {testimonials[currentIndex].quote.split('!')[0]}!
                    </h4>
                    
                    <p className="text-white/60 text-sm leading-relaxed mb-8">
                      {testimonials[currentIndex].quote.split('!')[1]}
                    </p>

                    <div className="w-full pt-8 border-t border-white/10 flex items-center justify-between gap-4">
                      <div className="text-left">
                        <p className="font-bold text-sm">{testimonials[currentIndex].author}</p>
                        <p className="text-white/50 text-[10px] uppercase tracking-widest">{testimonials[currentIndex].role}</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <img 
                          src={testimonials[currentIndex].companyLogo} 
                          alt="Company" 
                          className="h-6 object-contain brightness-0 invert"
                          referrerPolicy="no-referrer"
                        />
                        {testimonials[currentIndex].previousCompanyLogo && (
                          <img 
                            src={testimonials[currentIndex].previousCompanyLogo} 
                            alt="Previous Company" 
                            className="h-6 object-contain brightness-0 invert opacity-50"
                            referrerPolicy="no-referrer"
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Dots */}
              <div className="flex justify-center gap-2 mt-6">
                {testimonials.map((_, idx) => (
                  <div 
                    key={idx}
                    className={`w-2 h-2 rounded-full transition-all ${idx === currentIndex ? 'bg-blue-600 w-4' : 'bg-slate-300'}`}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
