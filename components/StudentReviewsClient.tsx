"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { StudentReview } from "@/services/contentfulService";

interface StudentReviewsClientProps {
  reviews: StudentReview[];
  animate?: boolean;
}

export default function StudentReviewsClient({
  reviews,
  animate = true,
}: StudentReviewsClientProps) {
  const visibleReviews = reviews.slice(0, 3);
  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <section id="reviews" className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4 mb-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 font-display">
            Student Reviews
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            See what our students have to say about their experience with us.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className={animate ? "relative flex overflow-hidden py-12 -my-12" : ""}>
          {animate ? (
            <motion.div
              className="flex gap-8 whitespace-nowrap px-4"
              animate={{
                x: [0, "-50%"],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: reviews.length * 8,
                  ease: "linear",
                },
              }}
              whileHover={{ animationPlayState: "paused" }}
            >
              {duplicatedReviews.map((review, i) => (
                <div
                  key={i}
                  className="inline-block w-[350px] bg-white p-8 rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100 shrink-0 whitespace-normal transition-transform hover:scale-[1.02] duration-300"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl overflow-hidden bg-slate-100 relative shadow-inner">
                      <Image
                        src={review.image}
                        alt={review.name}
                        fill
                        className="object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 leading-tight font-display">
                        {review.name}
                      </h3>
                      <p className="text-[10px] font-black text-indigo-600 uppercase tracking-widest">
                        {review.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-slate-500 italic leading-relaxed text-sm">
                    "{review.review}"
                  </p>
                </div>
              ))}
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {visibleReviews.map((review, i) => (
                <div
                  key={i}
                  className="bg-white p-8 rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100 transition-transform hover:scale-[1.02] duration-300"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl overflow-hidden bg-slate-100 relative shadow-inner">
                      <Image
                        src={review.image}
                        alt={review.name}
                        fill
                        className="object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 leading-tight font-display">
                        {review.name}
                      </h3>
                      <p className="text-[10px] font-black text-indigo-600 uppercase tracking-widest">
                        {review.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-slate-500 italic leading-relaxed text-sm">
                    "{review.review}"
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
