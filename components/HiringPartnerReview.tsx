"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  BadgeCheck,
  Banknote,
  Building2,
  Quote,
  Star,
  Target,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";

/** Reviews longer than this get "Read more" + line clamp when collapsed. */
const REVIEW_EXPAND_THRESHOLD = 280;

function companyLogoUrl(company: string) {
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(company)}&background=EEF2FF&color=4338CA&size=128&bold=true`;
}

function partnerAvatarUrl(name: string) {
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=F1F5F9&color=334155&size=128`;
}

const placementHighlightStats = [
  {
    label: "Highest package",
    value: "18 LPA",
    Icon: Banknote,
    iconClass: "bg-rose-50 text-rose-600 ring-rose-100",
  },
  {
    label: "Partner companies",
    value: "1000+",
    Icon: Building2,
    iconClass: "bg-amber-50 text-amber-600 ring-amber-100",
  },
  {
    label: "Job assistance",
    value: "100%",
    Icon: BadgeCheck,
    iconClass: "bg-indigo-50 text-indigo-600 ring-indigo-100",
  },
  {
    label: "Average CTC",
    value: "8 LPA",
    Icon: TrendingUp,
    iconClass: "bg-emerald-50 text-emerald-700 ring-emerald-100",
  },
  {
    label: "Placement rate",
    value: "96%",
    Icon: Target,
    iconClass: "bg-violet-50 text-violet-600 ring-violet-100",
  },
] as const;

const reviews = [
  {
    company: "Academian",
    partnerName: "Akshay",
    role: "Talent Acquisition Executive",
    submittedAt: "28 Mar 2026 · 18:18",
    review:
      "CareerXP consistently delivered quality candidates for fresher roles like Trainee Software Engineers and Test Engineers. His understanding of requirements and quick turnaround made the hiring process smooth and efficient. Highly recommended.",
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
    review: `CareerXP played a key role in helping us close a highly niche position that demanded a rare combination of skills and knowledge, especially at a fresher level. Identifying candidates who meet such specific expectations is never easy, but his persistence and sharp understanding of the requirement made a significant difference.

What stood out the most was his unwavering confidence in the candidates he presented. He didn't just share profiles, he strongly believed in their potential and took the time to thoroughly evaluate how well they aligned with both the technical and functional aspects of the role. This gave us a lot of confidence during the evaluation process and helped us move forward with clarity.

His dedication throughout the process was evident in the way he stayed closely involved, ensured timely follow-ups, and maintained clear communication at every stage. He was proactive in addressing concerns, open to feedback, and consistently worked towards finding the right fit rather than just a quick closure.

Overall, CareerXP's commitment, ownership, and belief in his candidates made a meaningful impact on successfully closing this challenging role.`,
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

        {/* Placement highlights — same figures as course pages; type tuned for readability */}
        <div className="mt-20 rounded-[28px] border border-slate-200/90 bg-white p-4 shadow-[0_20px_50px_-24px_rgba(15,23,42,0.12)] ring-1 ring-slate-900/[0.04] sm:p-6">
          <p className="mb-4 px-1 text-center text-sm font-semibold text-slate-700 sm:mb-5">
            Placement &amp; career highlights
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
            {placementHighlightStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                className="flex gap-4 rounded-2xl border border-slate-100 bg-slate-50/60 p-4 transition-colors hover:border-indigo-200/60 hover:bg-white sm:p-5"
              >
                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ring-1 ${stat.iconClass}`}
                >
                  <stat.Icon className="h-5 w-5" strokeWidth={2.25} aria-hidden />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-display text-2xl font-bold leading-none tracking-tight text-slate-900 tabular-nums sm:text-[1.65rem]">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm font-medium leading-snug text-slate-600">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
