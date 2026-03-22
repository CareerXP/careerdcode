"use client";

import { motion } from "motion/react";
import Image from "next/image";

const reviews = [
  {
    name: "John Doe",
    role: "Full Stack Developer",
    image: "https://picsum.photos/seed/john/100/100",
    review: "The course was incredibly well-structured and the mentors were always available to help.",
  },
  {
    name: "Jane Smith",
    role: "UX Designer",
    image: "https://picsum.photos/seed/jane/100/100",
    review: "I learned so much in such a short period of time. The projects were challenging and rewarding.",
  },
  {
    name: "Bob Johnson",
    role: "Data Scientist",
    image: "https://picsum.photos/seed/bob/100/100",
    review: "The career support was exceptional. They helped me land my dream job in tech.",
  },
];

export default function StudentReviews() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 font-display">
            Student Reviews
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            See what our students have to say about their experience with us.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 md:p-8 rounded-3xl shadow-xl shadow-slate-200"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-100">
                  <Image
                    src={review.image}
                    alt={review.name}
                    width={48}
                    height={48}
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 leading-tight">
                    {review.name}
                  </h3>
                  <p className="text-sm text-slate-500">
                    {review.role}
                  </p>
                </div>
              </div>
              <p className="text-slate-600 italic leading-relaxed">
                "{review.review}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
