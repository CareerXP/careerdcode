"use client";

import { motion } from "motion/react";
import Image from "next/image";

const transformations = [
  {
    name: "Alex Johnson",
    role: "Software Engineer at Google",
    before: "Data Entry Clerk",
    after: "Software Engineer",
    image: "https://picsum.photos/seed/alex/400/400",
    quote: "The mentorship and hands-on projects were exactly what I needed to make a career switch.",
  },
  {
    name: "Sarah Miller",
    role: "Product Designer at Meta",
    before: "Freelance Graphic Designer",
    after: "Product Designer",
    image: "https://picsum.photos/seed/sarah/400/400",
    quote: "I learned how to think like a designer and build products that solve real problems.",
  },
];

export default function StudentTransformations() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 font-display">
            Real Transformations
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            See how our students have transformed their careers and lives.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {transformations.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200 flex flex-col md:flex-row gap-8 items-center"
            >
              <div className="w-48 h-48 rounded-2xl overflow-hidden flex-shrink-0 bg-slate-100">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={200}
                  height={200}
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-full uppercase tracking-wider">
                    {item.before}
                  </span>
                  <span className="text-slate-400">→</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full uppercase tracking-wider">
                    {item.after}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  {item.name}
                </h3>
                <p className="text-blue-600 font-semibold mb-4">
                  {item.role}
                </p>
                <p className="text-slate-600 italic leading-relaxed">
                  "{item.quote}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
