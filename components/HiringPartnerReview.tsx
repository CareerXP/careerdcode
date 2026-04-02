"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Quote, Star } from "lucide-react";
import Image from "next/image";

/** Reviews longer than this get "Read more" + line clamp when collapsed. */
const REVIEW_EXPAND_THRESHOLD = 280;

function companyLogoUrl(company: string) {
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(company)}&background=EEF2FF&color=4338CA&size=128&bold=true`;
}

function partnerAvatarUrl(name: string) {
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=F1F5F9&color=334155&size=128`;
}

const reviews = [
  {
    company: "Academian",
    partnerName: "Akshay",
    role: "Talent Acquisition Executive",
    submittedAt: "28 Mar 2026 · 18:18",
    review:
      "Devanshu consistently delivered quality candidates for fresher roles like Trainee Software Engineers and Test Engineers. His understanding of requirements and quick turnaround made the hiring process smooth and efficient. Highly recommended.",
    rating: 5,
  },
  {
    company: "Xerago Ebiz services Pvt Ltd",
    partnerName: "Mahalakshmi H",
    role: "HR Manager",
    submittedAt: "28 Mar 2026 · 18:24",
    review:
      "Great experience working with you. You are quick, reliable and spot on with candidate quality. Communication was always clear and proactive. Really appreciate your support and professionalism.",
    rating: 5,
  },
  {
    company: "Bottomline",
    partnerName: "Mohammed Ansaf",
    role: "Lead Campus Recruiter",
    submittedAt: "28 Mar 2026 · 23:32",
    review: `Devanshu played a key role in helping us close a highly niche position that demanded a rare combination of skills and knowledge, especially at a fresher level. Identifying candidates who meet such specific expectations is never easy, but his persistence and sharp understanding of the requirement made a significant difference.

What stood out the most was his unwavering confidence in the candidates he presented. He didn't just share profiles, he strongly believed in their potential and took the time to thoroughly evaluate how well they aligned with both the technical and functional aspects of the role. This gave us a lot of confidence during the evaluation process and helped us move forward with clarity.

His dedication throughout the process was evident in the way he stayed closely involved, ensured timely follow-ups, and maintained clear communication at every stage. He was proactive in addressing concerns, open to feedback, and consistently worked towards finding the right fit rather than just a quick closure.

Overall, Devanshu's commitment, ownership, and belief in his candidates made a meaningful impact on successfully closing this challenging role.`,
    rating: 5,
  },
];

type ReviewItem = (typeof reviews)[number];

function PartnerReviewCard({ review, index }: { review: ReviewItem; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const needsExpand = review.review.length > REVIEW_EXPAND_THRESHOLD;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white p-6 md:p-8 rounded-[32px] shadow-xl shadow-slate-200/50 border border-slate-100 relative group hover:-translate-y-2 transition-transform duration-300 h-full flex flex-col"
    >
      <div className="absolute top-8 right-8 text-indigo-100 group-hover:text-indigo-200 transition-colors pointer-events-none">
        <Quote size={48} />
      </div>

      <div className="flex items-center gap-4 mb-8 shrink-0">
        <div className="w-16 h-16 rounded-2xl overflow-hidden bg-slate-50 border border-slate-100 p-2">
          <Image
            src={companyLogoUrl(review.company)}
            alt={review.company}
            width={64}
            height={64}
            className="object-contain"
            referrerPolicy="no-referrer"
          />
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-900">{review.company}</h3>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">
            {review.submittedAt}
          </p>
          <div className="flex gap-0.5 mt-1">
            {[...Array(review.rating)].map((_, idx) => (
              <Star key={idx} size={14} className="fill-yellow-400 text-yellow-400" />
            ))}
          </div>
        </div>
      </div>

      <div
        className={
          expanded
            ? "mb-4 flex-1 flex flex-col min-h-0"
            : "mb-4 flex-1 flex flex-col min-h-[10rem]"
        }
      >
        <p
          className={`text-slate-600 leading-relaxed italic whitespace-pre-line ${
            !expanded && needsExpand ? "line-clamp-6" : ""
          }`}
        >
          &ldquo;{review.review}&rdquo;
        </p>
        {needsExpand && (
          <button
            type="button"
            onClick={() => setExpanded((e) => !e)}
            className="mt-3 text-left text-sm font-bold text-indigo-600 hover:text-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 rounded-md self-start"
          >
            {expanded ? "Read less" : "Read more"}
          </button>
        )}
      </div>

      <div className="flex items-center gap-4 pt-6 border-t border-slate-50 mt-auto shrink-0">
        <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-100">
          <Image
            src={partnerAvatarUrl(review.partnerName)}
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
  );
}

export default function HiringPartnerReview() {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-indigo-700 uppercase bg-indigo-100 rounded-full"
          >
            Hiring Partner Feedback
          </motion.span>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 font-display">
            What Our <span className="text-indigo-600">Hiring Partners</span> Say
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We work closely with industry leaders to ensure our curriculum stays relevant and our students are job-ready.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {reviews.map((review, i) => (
            <PartnerReviewCard key={i} review={review} index={i} />
          ))}
        </div>

        {/* Stats Summary — aligned with course detail placement stats */}
        <div className="mt-20 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
          {[
            { label: "Highest Package", value: "18 LPA" },
            { label: "Partner Companies", value: "1000+" },
            { label: "Job Assistance", value: "100%" },
            { label: "Avg CTC", value: "8 LPA" },
            { label: "Placement Rate", value: "96%" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-4 rounded-2xl bg-white/50 border border-white/20"
            >
              <p className="text-3xl font-bold text-indigo-600 mb-1 font-display">{stat.value}</p>
              <p className="text-xs font-black text-slate-400 uppercase tracking-widest">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
