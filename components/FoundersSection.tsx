"use client";

import { motion } from "motion/react";
import Image from "next/image";

const founders = [
  {
    name: "David Smith",
    role: "Co-Founder & CEO",
    image: "https://picsum.photos/seed/david/400/400",
    bio: "Visionary leader with a passion for education and technology. 15+ years of experience in the tech industry.",
  },
  {
    name: "Jennifer Brown",
    role: "Co-Founder & CTO",
    image: "https://picsum.photos/seed/jennifer/400/400",
    bio: "Expert in building scalable systems and intuitive products. Helped launch several successful products.",
  },
];

export default function FoundersSection() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Meet Our Founders
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Learn from the visionary leaders who started it all.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {founders.map((founder, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200 flex flex-col md:flex-row gap-8 items-center"
            >
              <div className="w-48 h-48 rounded-2xl overflow-hidden flex-shrink-0 bg-slate-100">
                <Image
                  src={founder.image}
                  alt={founder.name}
                  width={200}
                  height={200}
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  {founder.name}
                </h3>
                <p className="text-blue-600 font-semibold mb-4">
                  {founder.role}
                </p>
                <p className="text-slate-600 italic leading-relaxed">
                  "{founder.bio}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
