"use client";

import { useRef, useState, useEffect } from "react";
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
    image: "https://picsum.photos/seed/evaluation/800/600"
  },
  {
    id: 2,
    label: "Targeted Training",
    title: "Learn exactly what companies ask in interviews.",
    intro:
      "Get trained by mentors who are already working in top product & service-based companies — teaching you what actually matters.",
    image: "https://picsum.photos/seed/training/800/600"
  },
  {
    id: 3,
    label: "Real Coding Practice",
    title: "Confidence comes from doing — not watching.",
    intro: "We make you practice on:",
    bullets: ["HackerRank", "LeetCode", "CodeChef", "Codeforces"],
    footnote: "So you're ready for real coding rounds.",
    image: "https://picsum.photos/seed/coding/800/600"
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
    image: "https://picsum.photos/seed/profile/800/600"
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
    image: "https://picsum.photos/seed/mock/800/600"
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
    image: "https://picsum.photos/seed/placed/800/600"
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

  const step = steps[activeStep];

  return (
    <section ref={containerRef} className="relative bg-white z-40">
      <div className="h-[600vh]">
        <div className="sticky top-20 bg-white py-3 sm:py-5 md:py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="flex items-center gap-2 sm:gap-4 md:gap-6 mb-3 sm:mb-5 md:mb-6 lg:mb-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 font-display tracking-tight whitespace-nowrap shrink-0">
                Your Steps To <span className="text-indigo-600">Success</span>
              </h2>
              <div className="flex-grow h-0.5 sm:h-1 md:h-1.5 bg-slate-900 rounded-full min-w-0" />
            </div>

            <div className="w-full min-h-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-10 xl:gap-14 items-stretch min-h-0 lg:h-[min(calc(100dvh-9rem),40rem)] lg:max-h-[min(calc(100dvh-9rem),40rem)]"
                >
                  {/* Left: copy (scrolls inside row on lg if tall) */}
                  <div className="min-w-0 flex flex-col justify-center gap-3 sm:gap-4 lg:min-h-0 lg:h-full lg:overflow-y-auto lg:pr-2 [scrollbar-width:thin]">
                    <div className="space-y-2 sm:space-y-3 lg:space-y-3">
                      <div className="flex items-center gap-3">
                        <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 bg-indigo-100 text-indigo-700 rounded-lg text-[9px] sm:text-[10px] font-black uppercase tracking-widest font-display">
                          Step {step.id}: {step.label}
                        </span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl font-black text-slate-900 font-display tracking-tight leading-[1.15]">
                        {step.title}
                      </h3>
                      <div className="text-slate-500 text-sm sm:text-base lg:text-[0.9375rem] xl:text-base font-medium leading-relaxed space-y-2 sm:space-y-2.5">
                        {step.intro && <p>{step.intro}</p>}
                        {step.bullets && step.bullets.length > 0 && (
                          <ul className="list-disc pl-5 space-y-1 text-slate-600 text-sm sm:text-base lg:text-[0.9375rem]">
                            {step.bullets.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        )}
                        {step.footnote && (
                          <p className="text-slate-700 flex gap-2 items-start text-sm sm:text-base lg:text-[0.9375rem]">
                            <span className="shrink-0" aria-hidden>
                              👉
                            </span>
                            <span>{step.footnote}</span>
                          </p>
                        )}
                        {step.highlights && (
                          <ul className="space-y-2 text-slate-700 text-sm sm:text-base lg:text-[0.9375rem]">
                            {step.highlights.map((line) => (
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
                  </div>

                  {/* Right: image fills column height on lg */}
                  <div className="relative w-full min-h-[200px] h-48 sm:h-56 md:h-64 lg:min-h-0 lg:h-full rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl group shrink-0">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
