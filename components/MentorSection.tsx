"use client";

import { motion } from "motion/react";
import { Linkedin } from "lucide-react";
import Image from "next/image";

const mentors = [
  {
    name: "Shubham Lal",
    role: "SDE-II at Microsoft",
    experience: "7+ Years",
    linkedin: "https://www.linkedin.com/in/shubhamlal/",
  },
  {
    name: "Yamini Bandi",
    role: "SDE-II at Amazon",
    experience: "5+ Years",
    linkedin: "https://www.linkedin.com/in/yaminibandi/",
  },
  {
    name: "Ananth Kumar Vasansetti",
    role: "Senior Member of Technical Staff at Salesforce",
    experience: "11+ Years",
    linkedin: "https://www.linkedin.com/in/ananth-kumar-vasamsetti-60bb7392/",
  },
  {
    name: "Rahul Mohan",
    role: "Senior Software Engineer at Egnyte",
    experience: "7+ Years",
    linkedin: "https://www.linkedin.com/in/rahul-mohan-4a6610a8/",
  },
  {
    name: "Divyansh Dubey",
    role: "Senior Strategist Generative AI at Google",
    experience: "7+ Years",
    linkedin: "https://www.linkedin.com/in/divyansh-dubey/",
  },
];

const getAvatar = (name: string) =>
  `https://ui-avatars.com/api/?name=${encodeURIComponent(
    name
  )}&background=0D8ABC&color=fff`;

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
            <div
              key={i}
              className="inline-block w-[350px] bg-white p-8 rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100 shrink-0 whitespace-normal transition-transform hover:scale-[1.02] duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl overflow-hidden bg-slate-100 relative shadow-inner">
                  <Image
                    src={getAvatar(mentor.name)}
                    alt={mentor.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 leading-tight font-display">
                    {mentor.name}
                  </h3>
                  <p className="text-[10px] font-black text-indigo-600 uppercase tracking-widest">
                    {mentor.role}
                  </p>
                </div>
              </div>

              <p className="text-slate-500 leading-relaxed text-sm">
                Experience: {mentor.experience}
              </p>

              <a
                href={mentor.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center justify-center rounded-lg p-1 -ml-1 text-slate-400 hover:text-[#0A66C2] transition-colors"
                aria-label={`${mentor.name} LinkedIn`}
              >
                <Linkedin className="size-5 shrink-0" />
              </a>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}