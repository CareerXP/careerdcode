"use client";

import { motion } from "motion/react";

const stats = [
  { label: "Students Enrolled", value: "10,000+" },
  { label: "Courses Available", value: "50+" },
  { label: "Industry Partners", value: "100+" },
  { label: "Career Transitions", value: "5,000+" },
];

export default function ImpactStats() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-2xl bg-slate-50 border border-slate-100"
            >
              <h3 className="text-4xl font-bold text-blue-600 mb-2 font-display">
                {stat.value}
              </h3>
              <p className="text-slate-600 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
