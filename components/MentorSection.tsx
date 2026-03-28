"use client";

import { motion } from "motion/react";
import { Linkedin } from "lucide-react";
import Image from "next/image";

type Mentor = {
  name: string;
  position: string;
  company: string;
  experience: string;
  linkedin: string;
};

const mentors: Mentor[] = [
  {
    name: "Shubham Lal",
    position: "SDE-II",
    company: "Microsoft",
    experience: "7+ Years",
    linkedin: "https://www.linkedin.com/in/shubhamlal/",
  },
  {
    name: "Yamini Bandi",
    position: "SDE-II",
    company: "Amazon",
    experience: "5+ Years",
    linkedin: "https://www.linkedin.com/in/yaminibandi/",
  },
  {
    name: "Ananth Kumar Vasansetti",
    position: "Senior Member of Technical Staff",
    company: "Salesforce",
    experience: "11+ Years",
    linkedin: "https://www.linkedin.com/in/ananth-kumar-vasamsetti-60bb7392/",
  },
  {
    name: "Rahul Mohan",
    position: "Senior Software Engineer",
    company: "Egnyte",
    experience: "7+ Years",
    linkedin: "https://www.linkedin.com/in/rahul-mohan-4a6610a8/",
  },
  {
    name: "Divyansh Dubey",
    position: "Senior Strategist, Generative AI",
    company: "Google",
    experience: "7+ Years",
    linkedin: "https://www.linkedin.com/in/divyansh-dubey/",
  },
];

const getAvatar = (name: string) =>
  `https://ui-avatars.com/api/?name=${encodeURIComponent(
    name
  )}&background=0D8ABC&color=fff`;

const CARD_WIDTH = "min-w-[320px] max-w-[320px] sm:min-w-[360px] sm:max-w-[360px]";

export default function MentorSection() {
  const duplicatedMentors = [...mentors, ...mentors, ...mentors];

  return (
    <section id="mentors" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 mb-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 font-display">
            Meet Our Mentors
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Learn from industry experts working at top tech companies.
          </p>
        </div>
      </div>

      <div className="relative flex overflow-hidden py-12 -my-12">
        <motion.div
          className="flex gap-8 whitespace-nowrap px-4"
          animate={{ x: [0, "-33.33%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: mentors.length * 8,
              ease: "linear",
            },
          }}
          whileHover={{ animationPlayState: "paused" }}
        >
          {duplicatedMentors.map((mentor, i) => (
            <article
              key={i}
              className={`inline-flex ${CARD_WIDTH} min-h-[340px] sm:min-h-[360px] flex-col bg-white p-8 sm:p-9 rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-slate-100 shrink-0 whitespace-normal transition-transform duration-300 hover:scale-[1.02] hover:shadow-[0_24px_60px_rgba(0,0,0,0.08)] hover:border-slate-200/80`}
            >
              <div className="flex gap-5">
                <div className="h-16 w-16 shrink-0 rounded-2xl overflow-hidden bg-slate-100 relative shadow-inner ring-1 ring-slate-100">
                  <Image
                    src={getAvatar(mentor.name)}
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="min-w-0 flex-1 pt-0.5">
                  <h3 className="text-lg font-bold text-slate-900 leading-snug font-display mb-3">
                    {mentor.name}
                  </h3>
                  <p className="text-sm font-semibold text-slate-800 leading-snug mb-1">
                    {mentor.position}
                  </p>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-600">
                    {mentor.company}
                  </p>
                </div>
              </div>

              <div className="mt-8 flex-1 rounded-2xl bg-slate-50/90 border border-slate-100 px-5 py-4">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1.5">
                  Experience
                </p>
                <p className="text-xl font-bold text-slate-900 font-display tracking-tight">
                  {mentor.experience}
                </p>
              </div>

              <a
                href={mentor.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-full items-center justify-center gap-2.5 rounded-2xl bg-[#0A66C2] px-5 py-3.5 text-sm font-bold text-white shadow-md shadow-[#0A66C2]/25 transition-all hover:bg-[#004182] hover:shadow-lg hover:shadow-[#0A66C2]/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A66C2]"
                aria-label={`${mentor.name} on LinkedIn`}
              >
                <Linkedin className="size-5 shrink-0" strokeWidth={2} />
                <span>View LinkedIn profile</span>
              </a>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
