"use client";

import { motion } from "motion/react";
import { Quote, Star } from "lucide-react";
import Image from "next/image";

const reviews = [
  {
    company: "Google",
    partnerName: "Sarah Miller",
    role: "Senior Engineering Manager",
    logo: "https://picsum.photos/seed/google-logo/100/100",
    review: "The graduates from this platform consistently demonstrate deep technical knowledge and a problem-solving mindset that is rare to find in junior developers.",
    rating: 5,
  },
  {
    company: "Meta",
    partnerName: "David Chen",
    role: "Product Design Lead",
    logo: "https://picsum.photos/seed/meta-logo/100/100",
    review: "We've hired several designers from here, and they've all hit the ground running. Their portfolio projects show a level of maturity that we usually see in mid-level designers.",
    rating: 5,
  },
  {
    company: "Amazon",
    partnerName: "Jessica Williams",
    role: "Talent Acquisition Director",
    logo: "https://picsum.photos/seed/amazon-logo/100/100",
    review: "The curriculum is perfectly aligned with industry needs. When we see a certification from this platform, we know the candidate has been through rigorous training.",
    rating: 5,
  },
];

export default function HiringPartnerReview() {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-blue-700 uppercase bg-blue-100 rounded-full"
          >
            Hiring Partner Feedback
          </motion.span>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 font-display">
            What Our <span className="text-blue-600">Hiring Partners</span> Say
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We work closely with industry leaders to ensure our curriculum stays relevant and our students are job-ready.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-[32px] shadow-xl shadow-slate-200/50 border border-slate-100 relative group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="absolute top-8 right-8 text-blue-100 group-hover:text-blue-200 transition-colors">
                <Quote size={48} />
              </div>

              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl overflow-hidden bg-slate-50 border border-slate-100 p-2">
                  <Image
                    src={review.logo}
                    alt={review.company}
                    width={64}
                    height={64}
                    className="object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{review.company}</h3>
                  <div className="flex gap-0.5 mt-1">
                    {[...Array(review.rating)].map((_, idx) => (
                      <Star key={idx} size={14} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-slate-600 leading-relaxed mb-8 italic">
                "{review.review}"
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-slate-50">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-100">
                  <Image
                    src={`https://picsum.photos/seed/${review.partnerName}/100/100`}
                    alt={review.partnerName}
                    width={48}
                    height={48}
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <p className="font-bold text-slate-900">{review.partnerName}</p>
                  <p className="text-xs text-slate-500 font-medium">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Summary */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Partner Companies", value: "500+" },
            { label: "Avg. Salary Hike", value: "120%" },
            { label: "Placement Rate", value: "94%" },
            { label: "Highest Package", value: "45 LPA" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <p className="text-3xl font-bold text-blue-600 mb-1 font-display">{stat.value}</p>
              <p className="text-xs font-black text-slate-400 uppercase tracking-widest">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
