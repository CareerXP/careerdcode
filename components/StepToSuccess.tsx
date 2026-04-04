"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

type Step = {
  id: number;
  label: string;
  title: string;
  intro?: string;
  bullets?: string[];
  footnote?: string;
  highlights?: string[];
  image: string;
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
    image: "/Skill assessment image.png",
    cta: { label: "Choose your learning path", href: "/#courses" }
  },
  {
    id: 2,
    label: "Targeted Training",
    title: "Learn exactly what companies ask in interviews.",
    intro:
      "Get trained by mentors who are already working in top product & service-based companies — teaching you what actually matters.",
    image: "/Mentors.png",
    cta: { label: "Meet our mentors", href: "/#mentors" }
  },
  {
    id: 3,
    label: "Real Coding Practice",
    title: "Confidence comes from doing — not watching.",
    intro: "We make you practice on:",
    bullets: ["HackerRank", "LeetCode", "CodeChef", "Codeforces"],
    footnote: "So you're ready for real coding rounds.",
    image: "/coding.png"
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
    image: "/coding.png"
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
    image: "/Mock Interviews.png"
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
    image: "/Placement.png"
  }
];

export default function StepsToSuccess() {
  const [activeStep, setActiveStep] = useState(0);

  const step = steps[activeStep];

  return (
    <section id="steps" className="relative bg-white z-40 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="mb-8 md:mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-indigo-600"></span>
            <span className="text-[16px] font-black uppercase tracking-[0.4em] text-indigo-600 font-mono">
              The Roadmap
            </span>
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-slate-400 font-display tracking-tight uppercase">
            Your Steps To <span className="text-slate-900">Success</span>
          </h2>
        </div>

        {/* Clickable Step Navigation */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-8 md:mb-12">
          {steps.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => setActiveStep(idx)}
              className={`px-4 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest transition-all duration-300 border ${
                activeStep === idx
                  ? "bg-indigo-600 text-white border-indigo-600 shadow-lg shadow-indigo-200"
                  : "bg-white text-slate-400 border-slate-100 hover:border-indigo-200 hover:text-indigo-600"
              }`}
            >
              <span className="mr-2 opacity-50">0{s.id}</span>
              {s.label}
            </button>
          ))}
        </div>

        <div className="w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 items-center"
            >
              {/* Left: copy */}
              <div className="min-w-0 space-y-4 sm:space-y-6">
                <div className="space-y-3">
                  
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 font-display tracking-tight leading-[1.1]">
                    {step.title}
                  </h3>
                </div>

                <div className="text-slate-500 text-base sm:text-lg lg:text-xl font-medium leading-relaxed space-y-4">
                  {step.intro && <p>{step.intro}</p>}
                  {step.bullets && step.bullets.length > 0 && (
                    <ul className="list-disc pl-5 space-y-2 text-slate-600">
                      {step.bullets.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                  {step.footnote && (
                    <p className="text-slate-700 flex gap-2 items-start italic">
                      <span className="shrink-0" aria-hidden>
                        👉
                      </span>
                      <span>{step.footnote}</span>
                    </p>
                  )}
                  {step.highlights && (
                    <ul className="space-y-3 text-slate-700">
                      {step.highlights.map((line) => (
                        <li key={line} className="flex gap-2 items-start">
                          <span className="shrink-0 text-indigo-600" aria-hidden>
                            👉
                          </span>
                          <span>{line}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {step.cta && (
                  <div className="pt-4">
                    <Link
                      href={step.cta.href}
                      className="group/cta inline-flex items-center gap-3 px-8 py-4 bg-indigo-600 text-white font-black text-sm rounded-2xl hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200"
                    >
                      <span>{step.cta.label}</span>
                      <ArrowRight
                        size={18}
                        className="transition-transform group-hover/cta:translate-x-1"
                      />
                    </Link>
                  </div>
                )}
              </div>

              {/* Right: Image */}
              <div className="relative w-full aspect-video lg:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl group">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 600px"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
