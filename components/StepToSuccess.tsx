"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, AnimatePresence } from "motion/react";
import Image from "next/image";

type Step = {
  id: number;
  label: string;
  title: string;
  intro?: string;
  bullets?: string[];
  footnote?: string;
  highlights?: string[];
  image: string;
  stat: string;
  statLabel: string;
  statSub: string;
  cta?: { label: string; href: string };
};

const steps: Step[] = [
  {
    id: 1,
    label: "Evaluation",
    title: "We don’t guess your level — we measure it.",
    intro: "Take an industry-level mock assessment covering:",
    bullets: ["Aptitude", "Technical Concepts", "Coding Skills"],
    footnote:
      "Based on your performance, we create a personalised training roadmap focusing on your weak areas.",
    image: "https://picsum.photos/seed/evaluation/800/600",
    stat: "01",
    statLabel: "Measure first",
    statSub: "Your roadmap targets real gaps — not guesswork.",
    cta: { label: "Choose your learning path", href: "/#courses" }
  },
  {
    id: 2,
    label: "Targeted Training",
    title: "Learn exactly what companies ask in interviews.",
    intro:
      "Get trained by mentors who are already working in top product & service-based companies — teaching you what actually matters.",
    image: "https://picsum.photos/seed/training/800/600",
    stat: "100%",
    statLabel: "Interview-aligned",
    statSub: "Curriculum shaped by what hiring teams really evaluate.",
    cta: { label: "Meet our mentors", href: "/#mentors" }
  },
  {
    id: 3,
    label: "Real Coding Practice",
    title: "Confidence comes from doing — not watching.",
    intro: "We make you practice on:",
    bullets: ["HackerRank", "LeetCode", "CodeChef", "Codeforces"],
    footnote: "So you're ready for real coding rounds.",
    image: "https://picsum.photos/seed/coding/800/600",
    stat: "4+",
    statLabel: "Judge platforms",
    statSub: "Train where real screens and timed rounds happen."
  },
  {
    id: 4,
    label: "Profile Building",
    title: "We don’t just train — we position you to get shortlisted.",
    bullets: [
      "Resume Building",
      "LinkedIn Optimization",
      "GitHub Portfolio",
      "Real Projects",
      "Community access (Discord)"
    ],
    image: "https://picsum.photos/seed/profile/800/600",
    stat: "5+",
    statLabel: "Placement pillars",
    statSub: "Everything recruiters scan before they say yes."
  },
  {
    id: 5,
    label: "Mock Interviews",
    title: "Practice until you're unstoppable.",
    bullets: [
      "Unlimited mock interviews",
      "Real interview scenarios",
      "Feedback from industry experts"
    ],
    image: "https://picsum.photos/seed/mock/800/600",
    stat: "∞",
    statLabel: "Mocks that feel real",
    statSub: "Repeat, refine, and walk in calm on interview day."
  },
  {
    id: 6,
    label: "Get Placed",
    title: "This is where it all pays off.",
    intro:
      "Our dedicated team is adding new companies to our client base every single day.",
    highlights: [
      "Get access to real company interviews from Day 1",
      "Unlimited interview opportunities",
      "Continuous support until you get placed"
    ],
    image: "https://picsum.photos/seed/placed/800/600",
    stat: "Day 1",
    statLabel: "Interview access",
    statSub: "New partners onboarded continuously — support until you land the role."
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
                        <div className="text-slate-500 text-sm sm:text-xl lg:text-2xl font-medium leading-relaxed max-w-2xl space-y-4">
                          {steps[activeStep].intro && (
                            <p>{steps[activeStep].intro}</p>
                          )}
                          {steps[activeStep].bullets && steps[activeStep].bullets!.length > 0 && (
                            <ul className="list-disc pl-6 space-y-2 text-slate-600">
                              {steps[activeStep].bullets!.map((item) => (
                                <li key={item}>{item}</li>
                              ))}
                            </ul>
                          )}
                          {steps[activeStep].footnote && (
                            <p className="text-slate-700 flex gap-2 items-start">
                              <span className="shrink-0" aria-hidden>
                                👉
                              </span>
                              <span>{steps[activeStep].footnote}</span>
                            </p>
                          )}
                          {steps[activeStep].highlights && (
                            <ul className="space-y-3 text-slate-700">
                              {steps[activeStep].highlights!.map((line) => (
                                <li key={line} className="flex gap-2 items-start">
                                  <span className="shrink-0" aria-hidden>
                                    👉
                                  </span>
                                  <span>{line}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
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

                        {steps[activeStep].cta && (
                          <div className="mt-6 sm:mt-16 relative z-10">
                            <Link
                              href={steps[activeStep].cta!.href}
                              className="group/btn relative inline-flex px-6 py-3 sm:px-10 sm:py-5 bg-white text-indigo-600 font-black text-sm sm:text-lg rounded-xl sm:rounded-2xl hover:bg-indigo-50 transition-all shadow-xl items-center gap-2 sm:gap-4 overflow-hidden"
                            >
                              <span className="relative z-10">{steps[activeStep].cta!.label}</span>
                              <svg className="w-4 h-4 sm:w-6 sm:h-6 transition-transform group-hover/btn:translate-x-2 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                              </svg>
                            </Link>
                          </div>
                        )}
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
