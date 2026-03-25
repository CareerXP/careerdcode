"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import Image from "next/image";

const steps = [
  {
    id: 1,
    label: "Learning",
    title: "Learn from the Best",
    description: "Our curriculum focuses on building high-demand skills taught by leading industry experts and experienced professionals.",
    image: "https://picsum.photos/seed/learn/800/600",
    stat: "4.7/5",
    statLabel: "Average Rating",
    statSub: "Top rated, holistic learning experience"
  },
  {
    id: 2,
    label: "Mentorship",
    title: "1-on-1 Mentorship",
    description: "Get personalized guidance from mentors who have been in your shoes and succeeded at top tech companies like Google, Amazon, and Microsoft.",
    image: "https://picsum.photos/seed/mentor/800/600",
    stat: "500+",
    statLabel: "Expert Mentors",
    statSub: "Personalized guidance for every student"
  },
  {
    id: 3,
    label: "Building",
    title: "Real-world Projects",
    description: "Apply your learning by building production-ready applications that stand out in your portfolio and demonstrate your technical prowess.",
    image: "https://picsum.photos/seed/build/800/600",
    stat: "10+",
    statLabel: "Portfolio Projects",
    statSub: "Build what matters to the industry"
  },
  {
    id: 4,
    label: "Interviews",
    title: "Interview Preparation",
    description: "Sharpen your skills with mock interviews conducted by industry professionals to boost your confidence and technical communication.",
    image: "https://picsum.photos/seed/mocks/800/600",
    stat: "95%",
    statLabel: "Interview Success Rate",
    statSub: "Cracking top tier tech interviews"
  },
  {
    id: 5,
    label: "Placement",
    title: "Land Your Dream Job",
    description: "Access our network of hiring partners and get the support you need to secure a high-paying role in your dream company.",
    image: "https://picsum.photos/seed/placed/800/600",
    stat: "₹45 LPA",
    statLabel: "Highest Package",
    statSub: "Transforming careers, one step at a time"
  },
  {
    id: 6,
    label: "Networking",
    title: "Join the Elite Network",
    description: "Become part of an elite community of professionals working at top tech companies worldwide. Network, collaborate, and grow together.",
    image: "https://picsum.photos/seed/alumni/800/600",
    stat: "10k+",
    statLabel: "Global Alumni",
    statSub: "A community that grows with you"
  }
];

export default function StepsToSuccess() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const stepIndex = Math.min(
        Math.floor(latest * steps.length),
        steps.length - 1
      );
      setActiveStep(stepIndex);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <section ref={containerRef} className="relative bg-white z-40">
      {/* Scrollable height - 100vh per step */}
      <div className="h-[600vh]">
        <div className="sticky top-20 min-h-[calc(100vh-5rem)] flex flex-col justify-center bg-white py-2 md:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            {/* Header */}
            <div className="flex items-center gap-3 md:gap-6 mb-4 md:mb-16">
              <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 font-display tracking-tight whitespace-nowrap">
                Your Steps To <span className="text-indigo-600">Success</span>
              </h2>
              <div className="flex-grow h-1 md:h-1.5 bg-slate-900 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:gap-16 items-center">
              {/* Content Area - Full Width */}
              <div className="w-full">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-center"
                  >
                    <div className="space-y-4 lg:space-y-10">
                      <div className="space-y-3 lg:space-y-6">
                        <div className="flex items-center gap-3">
                          <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-lg text-[10px] font-black uppercase tracking-widest font-display">
                            Step {steps[activeStep].id}: {steps[activeStep].label}
                          </span>
                        </div>
                        <h3 className="text-3xl sm:text-5xl lg:text-7xl font-black text-slate-900 font-display tracking-tight leading-[1.05]">
                          {steps[activeStep].title}
                        </h3>
                        <p className="text-slate-500 text-sm sm:text-xl lg:text-2xl font-medium leading-relaxed max-w-2xl">
                          {steps[activeStep].description}
                        </p>
                      </div>

                      <div className="relative aspect-video sm:aspect-[16/9] lg:aspect-[4/3] rounded-2xl sm:rounded-[40px] overflow-hidden shadow-2xl group">
                        <Image
                          src={steps[activeStep].image}
                          alt={steps[activeStep].title}
                          fill
                          className="object-cover transition-transform duration-1000 group-hover:scale-110"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                    </div>

                    <div className="flex flex-col h-full justify-center">
                      <div className="bg-indigo-600 rounded-3xl sm:rounded-[48px] p-6 sm:p-14 lg:p-20 flex flex-col justify-center relative overflow-hidden group shadow-2xl shadow-indigo-200">
                        {/* Decorative background elements */}
                        <div className="absolute -right-20 -top-20 w-80 h-80 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-colors duration-700" />
                        <div className="absolute -left-20 -bottom-20 w-60 h-60 bg-indigo-400/20 rounded-full blur-3xl" />
                        
                        <div className="relative z-10">
                          <span className="text-5xl sm:text-8xl lg:text-[10rem] font-black text-white font-display tracking-tighter mb-2 sm:mb-6 block leading-none">
                            {steps[activeStep].stat}
                          </span>
                          <h4 className="text-xl lg:text-4xl font-bold text-indigo-100 mb-2 sm:mb-4">
                            {steps[activeStep].statLabel}
                          </h4>
                          <p className="text-indigo-100/80 text-xs sm:text-lg lg:text-xl font-medium max-w-md leading-relaxed">
                            {steps[activeStep].statSub}
                          </p>
                        </div>

                        <div className="mt-6 sm:mt-16 relative z-10">
                          <button className="group/btn relative px-6 py-3 sm:px-10 sm:py-5 bg-white text-indigo-600 font-black text-sm sm:text-lg rounded-xl sm:rounded-2xl hover:bg-indigo-50 transition-all shadow-xl flex items-center gap-2 sm:gap-4 overflow-hidden">
                            <span className="relative z-10">Learn More</span>
                            <svg className="w-4 h-4 sm:w-6 sm:h-6 transition-transform group-hover/btn:translate-x-2 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
