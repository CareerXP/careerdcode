"use client";

import { motion } from "motion/react";
import Image from "next/image";

const students = [
  { name: "John Doe", company: "Google", role: "Software Engineer", image: "https://picsum.photos/seed/john/100/100" },
  { name: "Jane Smith", company: "Microsoft", role: "Product Designer", image: "https://picsum.photos/seed/jane/100/100" },
  { name: "Bob Johnson", company: "Amazon", role: "Data Scientist", image: "https://picsum.photos/seed/bob/100/100" },
];

export default function PlacedStudents() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Our Students at Top Companies
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            See where our graduates are working now.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {students.map((student, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-50 p-6 rounded-3xl text-center shadow-lg shadow-slate-100"
            >
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 bg-slate-200">
                <Image
                  src={student.image}
                  alt={student.name}
                  width={96}
                  height={96}
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">
                {student.name}
              </h3>
              <p className="text-blue-600 font-semibold text-sm mb-2">
                {student.role}
              </p>
              <div className="text-slate-400 font-bold text-xs uppercase tracking-widest">
                {student.company}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
