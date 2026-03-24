"use client";

import { motion } from "motion/react";
import Image from "next/image";

const mentors = [
  {
    name: "Dr. Emily Chen",
    role: "Senior Software Engineer at Google",
    image: "https://picsum.photos/seed/emily/400/400",
    bio: "Passionate about teaching and building scalable systems. 10+ years of experience in the tech industry.",
  },
  {
    name: "Michael Brown",
    role: "Product Designer at Meta",
    image: "https://picsum.photos/seed/michael/400/400",
    bio: "Expert in user-centered design and building intuitive products. Helped launch several successful products.",
  },
  {
    name: "Sarah Lee",
    role: "Data Scientist at Amazon",
    image: "https://picsum.photos/seed/sarahlee/400/400",
    bio: "Specializes in machine learning and data analysis. Loves to share her knowledge with others.",
  },
];

export default function MentorSection() {
  // Duplicate mentors to ensure a seamless loop
  const duplicatedMentors = [...mentors, ...mentors, ...mentors];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 mb-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 font-display">
            Meet Our Mentors
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Learn from industry experts who have worked at top tech companies.
          </p>
        </div>
      </div>

      <div className="relative flex overflow-hidden py-12 -my-12">
        <motion.div
          className="flex gap-8 whitespace-nowrap px-4"
          animate={{
            x: [0, "-33.33%"],
          }}
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
                    src={mentor.image}
                    alt={mentor.name}
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
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
                {mentor.bio}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
