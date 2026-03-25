"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import Image from "next/image";

const steps = [
  {
    id: 1,
    label: "Learn",
    title: "Learn from the Best",
    description: "Our curriculum focuses on building high-demand skills taught by leading industry experts and experienced professionals.",
    image: "https://picsum.photos/seed/learn/800/600",
    stat: "4.7/5",
    statLabel: "Average Rating",
    statSub: "Top rated, holistic learning experience"
  },
  {
    id: 2,
    label: "Get Mentored",
    title: "1-on-1 Mentorship",
    description: "Get personalized guidance from mentors who have been in your shoes and succeeded at top tech companies like Google, Amazon, and Microsoft.",
    image: "https://picsum.photos/seed/mentor/800/600",
    stat: "500+",
    statLabel: "Expert Mentors",
    statSub: "Personalized guidance for every student"
  },
  {
    id: 3,
    label: "Build",
    title: "Real-world Projects",
    description: "Apply your learning by building production-ready applications that stand out in your portfolio and demonstrate your technical prowess.",
    image: "https://picsum.photos/seed/build/800/600",
    stat: "10+",
    statLabel: "Portfolio Projects",
    statSub: "Build what matters to the industry"
  },
  {
    id: 4,
    label: "Give Mocks",
    title: "Interview Preparation",
    description: "Sharpen your skills with mock interviews conducted by industry professionals to boost your confidence and technical communication.",
    image: "https://picsum.photos/seed/mocks/800/600",
    stat: "95%",
    statLabel: "Interview Success Rate",
    statSub: "Cracking top tier tech interviews"
  },
  {
    id: 5,
    label: "Get Placed",
    title: "Land Your Dream Job",
    description: "Access our network of hiring partners and get the support you need to secure a high-paying role in your dream company.",
    image: "https://picsum.photos/seed/placed/800/600",
    stat: "₹45 LPA",
    statLabel: "Highest Package",
    statSub: "Transforming careers, one step at a time"
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
    <section ref={containerRef} className="relative bg-white  my-20 h-full">
      {/* Scrollable height - 100vh per step */}
      <div className="h-100vh">
        <div className="sticky top-20 h-[calc(100vh-5rem)] flex flex-col justify-center overflow-hidden pt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            {/* Header */}
            <div className="flex items-center gap-6 mb-16">
              <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 font-display tracking-tight">
                Your Steps To <span className="text-indigo-600">Success</span>
              </h2>
              <div className="flex-grow h-1.5 bg-slate-900 rounded-full"></div>
            </div>

            <div className="grid lg:grid-cols-12 gap-16 items-center">
              {/* Left Side: Step Indicators */}
              <div className="lg:col-span-4 space-y-4">
                {steps.map((step, index) => (
                  <div
                    key={step.id}
                    className="relative cursor-pointer group"
                    onClick={() => {
                      // Optional: Scroll to specific step
                      const targetScroll = (index / steps.length) * (containerRef.current?.scrollHeight || 0);
                      window.scrollTo({ top: (containerRef.current?.offsetTop || 0) + targetScroll, behavior: 'smooth' });
                    }}
                  >
                    <div
                      className={`relative z-10 p-6 rounded-2xl transition-all duration-500 flex items-center justify-between ${
                        activeStep === index
                          ? "bg-indigo-600 text-white shadow-2xl shadow-indigo-200 translate-x-4"
                          : "bg-slate-50 text-slate-400 hover:bg-slate-100"
                      }`}
                    >
                      <span className="text-xl font-bold font-display">{step.label}</span>
                      <span className={`text-6xl font-black opacity-20 font-display ${activeStep === index ? "opacity-40" : ""}`}>
                        {step.id}
                      </span>
                    </div>
                    {/* Connecting line for active state */}
                    {activeStep === index && (
                      <motion.div
                        layoutId="active-indicator"
                        className="absolute inset-0 bg-indigo-600/10 blur-2xl -z-10 rounded-2xl"
                      />
                    )}
                  </div>
                ))}
              </div>

              {/* Right Side: Content */}
              <div className="lg:col-span-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="grid md:grid-cols-2 gap-8"
                  >
                    <div className="space-y-8">
                      <div>
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-600 font-display mb-4 block">
                          {steps[activeStep].label}
                        </span>
                        <h3 className="text-4xl font-bold text-slate-900 font-display tracking-tight mb-6">
                          {steps[activeStep].title}
                        </h3>
                        <p className="text-slate-500 text-lg font-medium leading-relaxed">
                          {steps[activeStep].description}
                        </p>
                      </div>

                      <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden shadow-2xl">
                        <Image
                          src={steps[activeStep].image}
                          alt={steps[activeStep].title}
                          fill
                          className="object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <div className="flex-grow bg-indigo-50 rounded-[32px] p-10 flex flex-col justify-center">
                        <span className="text-7xl lg:text-8xl font-black text-indigo-600 font-display tracking-tighter mb-4">
                          {steps[activeStep].stat}
                        </span>
                        <h4 className="text-xl font-bold text-indigo-900 mb-2">
                          {steps[activeStep].statLabel}
                        </h4>
                        <p className="text-indigo-600/70 font-medium">
                          {steps[activeStep].statSub}
                        </p>
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
