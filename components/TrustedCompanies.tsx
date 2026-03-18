"use client";

import { motion } from "motion/react";

const companies = [
  "Google", "Microsoft", "Amazon", "Meta", "Netflix", "Apple", "Uber", "Airbnb"
];

export default function TrustedCompanies() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 uppercase tracking-widest">
            Trusted By Top Companies
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Our students are hired by the world's most innovative companies.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
          {companies.map((company, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-slate-300 hover:text-slate-900 transition-colors cursor-default"
            >
              {company}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
