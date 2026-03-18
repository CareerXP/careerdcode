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
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Meet Our Mentors
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Learn from industry experts who have worked at top tech companies.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          {mentors.map((mentor, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-50 p-8 rounded-3xl shadow-xl shadow-slate-200"
            >
              <div className="w-48 h-48 rounded-2xl overflow-hidden mx-auto mb-6 bg-slate-100">
                <Image
                  src={mentor.image}
                  alt={mentor.name}
                  width={200}
                  height={200}
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  {mentor.name}
                </h3>
                <p className="text-blue-600 font-semibold mb-4">
                  {mentor.role}
                </p>
                <p className="text-slate-600 italic leading-relaxed">
                  "{mentor.bio}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
