"use client";

import { motion } from "motion/react";

// All brand assets from public/assets/brands (1..85 with original extensions)
const brandLogos: string[] = [
  "/assets/brands/1.png",
  "/assets/brands/2.jpg",
  "/assets/brands/3.jpg",
  "/assets/brands/4.jpg",
  "/assets/brands/5.jpg",
  "/assets/brands/6.jpg",
  "/assets/brands/7.jpg",
  "/assets/brands/8.png",
  "/assets/brands/9.jpg",
  "/assets/brands/10.png",
  "/assets/brands/11.png",
  "/assets/brands/12.png",
  "/assets/brands/13.png",
  "/assets/brands/14.jpg",
  "/assets/brands/15.jpg",
  "/assets/brands/16.jpg",
  "/assets/brands/17.png",
  "/assets/brands/18.png",
  "/assets/brands/19.png",
  "/assets/brands/20.jpg",
  "/assets/brands/21.jpg",
  "/assets/brands/22.jpg",
  "/assets/brands/23.jpg",
  "/assets/brands/24.png",
  "/assets/brands/25.png",
  "/assets/brands/26.jpg",
  "/assets/brands/27.png",
  "/assets/brands/28.jpg",
  "/assets/brands/29.jpg",
  "/assets/brands/30.png",
  "/assets/brands/31.jpg",
  "/assets/brands/32.jpg",
  "/assets/brands/33.png",
  "/assets/brands/34.png",
  "/assets/brands/35.png",
  "/assets/brands/36.jpg",
  "/assets/brands/37.png",
  "/assets/brands/38.png",
  "/assets/brands/39.png",
  "/assets/brands/40.jpg",
  "/assets/brands/41.png",
  "/assets/brands/42.png",
  "/assets/brands/43.jpg",
  "/assets/brands/44.png",
  "/assets/brands/45.png",
  "/assets/brands/46.jpg",
  "/assets/brands/47.jpeg",
  "/assets/brands/48.jpg",
  "/assets/brands/49.jpg",
  "/assets/brands/50.jpg",
  "/assets/brands/51.png",
  "/assets/brands/52.jpg",
  "/assets/brands/53.jpg",
  "/assets/brands/54.jpg",
  "/assets/brands/55.jpg",
  "/assets/brands/56.jpg",
  "/assets/brands/57.png",
  "/assets/brands/58.jpg",
  "/assets/brands/59.jpg",
  "/assets/brands/60.png",
  "/assets/brands/61.png",
  "/assets/brands/62.jpg",
  "/assets/brands/63.png",
  "/assets/brands/64.png",
  "/assets/brands/65.jpg",
  "/assets/brands/66.png",
  "/assets/brands/67.png",
  "/assets/brands/68.jpg",
  "/assets/brands/69.jpg",
  "/assets/brands/70.jpg",
  "/assets/brands/71.png",
  "/assets/brands/72.jpg",
  "/assets/brands/73.jpg",
  "/assets/brands/74.jpg",
  "/assets/brands/75.jpg",
  "/assets/brands/76.png",
  "/assets/brands/77.jpeg",
  "/assets/brands/78.jpg",
  "/assets/brands/79.png",
  "/assets/brands/80.png",
  "/assets/brands/81.webp",
  "/assets/brands/82.png",
  "/assets/brands/83.png",
  "/assets/brands/84.png",
  "/assets/brands/85.png",
];

const row1Logos = brandLogos.filter((_, i) => i % 2 === 0);
const row2Logos = brandLogos.filter((_, i) => i % 2 === 1);

export default function TrustedCompanies() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-3 uppercase tracking-widest">
            Trusted By Top Companies
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm">
            Our learners work at fast-growing startups and global enterprises.
          </p>
        </div>

        <div className="space-y-6">
          <div className="relative overflow-hidden">
            <motion.div
              className="flex items-center gap-10 md:gap-16 lg:gap-20 whitespace-nowrap"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 24,
                ease: "linear",
              }}
            >
              {[...row1Logos, ...row1Logos].map((src, index) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={`rtl-${src}-${index}`}
                  src={src}
                  alt=""
                  className="h-8 md:h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              ))}
            </motion.div>
          </div>

          <div className="relative overflow-hidden">
            <motion.div
              className="flex items-center gap-10 md:gap-16 lg:gap-20 whitespace-nowrap"
              animate={{ x: ["-50%", "0%"] }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 24,
                ease: "linear",
              }}
            >
              {[...row2Logos, ...row2Logos].map((src, index) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={`ltr-${src}-${index}`}
                  src={src}
                  alt=""
                  className="h-8 md:h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
