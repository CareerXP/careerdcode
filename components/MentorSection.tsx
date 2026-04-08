"use client";

import { motion } from "motion/react";
import { Linkedin } from "lucide-react";
import Image from "next/image";

type Mentor = {
  name: string;
  position: string;
  company: string;
  experience: string;
  previous?: string;
  linkedin: string;
  imageSrc?: string;
};

const mentors: Mentor[] = [
  {
    name: "Shubham Lal",
    position: "SDE-II",
    company: "Microsoft",
    experience: "7+ Years",
    previous: "",
    linkedin: "https://www.linkedin.com/in/shubhamlal/",
    imageSrc: "/assets/mentors/Shubham%20Lal.png",
  },
  {
    name: "Yamini Bandi",
    position: "SDE-II",
    company: "Amazon",
    experience: "5+ Years",
    previous: "",
    linkedin: "https://www.linkedin.com/in/yaminibandi/",
    imageSrc: "/assets/mentors/Yamini%20Bandi.png",
  },
  {
    name: "Ananth Kumar Vasansetti",
    position: "Senior Member of technical staff",
    company: "Salesforce",
    experience: "11+",
    previous: "Microsoft, ServiceNow, Kony INC",
    linkedin: "https://www.linkedin.com/in/ananth-kumar-vasamsetti-60bb7392/",
    imageSrc: "/assets/mentors/Ananth%20Kumar%20Vasansetti.png",
  },
  {
    name: "Rahul Mohan",
    position: "Senior Software Engg.",
    company: "Egnyte",
    experience: "7+",
    previous: "Virtusa",
    linkedin: "https://www.linkedin.com/in/rahul-mohan-4a6610a8/",
    imageSrc: "/assets/mentors/Rahul%20Mohan.png",
  },
  {
    name: "Divyansh Dubey",
    position: "Senior Strategiest Generative AI, Trust & Safety",
    company: "Google",
    experience: "7+",
    previous: "Tiger Analytics, Maybank",
    linkedin: "https://www.linkedin.com/in/divyansh-dubey/",
    imageSrc: "/assets/mentors/Divyansh%20Dubey.png",
  },
  {
    name: "Sourov Roy",
    position: "Senior Member of technical staff",
    company: "Salesforce",
    experience: "8.5+",
    previous: "Amazon, Problem setter in Hackerrank",
    linkedin: "https://www.linkedin.com/in/sourovroy-ai/",
    // Asset currently uses different spelling: Sourav Roy.png
    imageSrc: "/assets/mentors/Sourav%20Roy.png",
  },
  {
    name: "Shreyansh Sinha",
    position: "Software Engg. 2",
    company: "Microsoft",
    experience: "8+",
    previous: "Siemens, JP Morgan chase & co.",
    linkedin: "https://www.linkedin.com/in/shreyansh-sinha-2b47a2188/",
    imageSrc: "/assets/mentors/Shreyansh%20Sinha.png",
  },
  {
    name: "Vivek Kumar astikar",
    position: "Data & AI Engg.",
    company: "CloudAI Technologies",
    experience: "5+",
    previous: "",
    linkedin: "https://www.linkedin.com/in/avivek5692/",
    imageSrc: "/assets/mentors/Vivek%20Kumar%20astikar.png",
  },
  {
    name: "Shahar Banu",
    position: "Sr. Devops Specialist",
    company: "Equisoft",
    experience: "15+",
    previous: "Amazon web services, JP Morgan chase & co, IBM",
    linkedin: "https://www.linkedin.com/in/shaharbanu/",
    imageSrc: `https://ui-avatars.com/api/?name=${encodeURIComponent(
      "Shahar Banu"
    )}&background=0D8ABC&color=fff`,
  },
  {
    name: "Ajeya B Jois",
    position: "Senior ML Scientist 3",
    company: "Paypal",
    experience: "7.5+",
    previous: "Oracle, Qualcomm",
    linkedin: "https://www.linkedin.com/in/ajeyabjois/",
    imageSrc: "/assets/mentors/Ajeya%20B%20Jois.png",
  },
  {
    name: "Yash Mittal",
    position: "Senior Consultant",
    company: "Thoughworks",
    experience: "6+",
    previous: "",
    linkedin: "https://www.linkedin.com/in/yashmittal00",
    imageSrc: "/assets/mentors/Yash%20Mittal.png",
  },
  {
    name: "Raghav Nakra",
    position: "Software Engg.(L60)",
    company: "Microsoft",
    experience: "2+",
    previous: "",
    linkedin: "https://www.linkedin.com/in/raghav-nakra/",
    imageSrc: "/assets/mentors/Raghav%20Nakra.png",
  },
  {
    name: "MaheshwaraRao Botta",
    position: "Senior Software Engg.",
    company: "Terradata",
    experience: "5+",
    previous: "Amazon, Amdocs",
    linkedin: "https://www.linkedin.com/in/mahesh1133/",
    imageSrc: "/assets/mentors/MaheshwaraRao%20Botta.png",
  },
  {
    name: "Shivam Jindal",
    position: "Software Engg.",
    company: "Airbnb",
    experience: "10+",
    previous: "",
    linkedin: "https://www.linkedin.com/in/shivam-jindal/",
    imageSrc: `https://ui-avatars.com/api/?name=${encodeURIComponent(
      "Shivam Jindal"
    )}&background=0D8ABC&color=fff`,
  },
];

function getMentorImageSrc(mentor: Mentor) {
  if (mentor.imageSrc) return mentor.imageSrc;
  return `/assets/mentors/${encodeURIComponent(mentor.name)}.png`;
}

const CARD_WIDTH = "min-w-[320px] max-w-[320px] sm:min-w-[360px] sm:max-w-[360px]";

export default function MentorSection() {
  const duplicatedMentors = [...mentors, ...mentors, ...mentors];

  return (
    <section id="mentors" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 mb-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 font-display">
            Meet Our Mentors
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Learn from industry experts working at top tech companies.
          </p>
        </div>
      </div>

      <div className="relative flex overflow-hidden py-12 -my-12">
        <motion.div
          className="flex gap-8 whitespace-nowrap px-4"
          animate={{ x: [0, "-33.33%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: mentors.length * 10,
              ease: "linear",
            },
          }}
          whileHover={{ animationPlayState: "paused" }}
        >
          {duplicatedMentors.map((mentor, i) => (
            <article
              key={i}
              className={`inline-flex ${CARD_WIDTH} flex-col bg-white p-7 sm:p-8 rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-slate-100 shrink-0 whitespace-normal transition-transform duration-300 hover:scale-[1.02] hover:shadow-[0_24px_60px_rgba(0,0,0,0.08)] hover:border-slate-200/80`}
            >
              <div className="flex gap-4">
                <div className="h-16 w-16 shrink-0 rounded-full overflow-hidden bg-slate-100 relative shadow-inner ring-1 ring-slate-100">
                  {getMentorImageSrc(mentor).startsWith("http") ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={getMentorImageSrc(mentor)}
                      alt={mentor.name}
                      className="h-full w-full object-cover"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                  ) : (
                    <Image
                      src={getMentorImageSrc(mentor)}
                      alt={mentor.name}
                      fill
                      className="object-cover"
                    />
                  )}
                </div>

                <div className="min-w-0 flex-1 pt-0.5">
                  <h3 className="text-lg font-bold text-slate-900 leading-snug font-display mb-1.5">
                    {mentor.name}
                  </h3>
                  <p className="text-sm font-semibold text-slate-800 leading-snug mb-1">
                    {mentor.position}
                  </p>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-600">
                    {mentor.company}
                  </p>
                  <div className="mt-2 flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-[10px] font-black uppercase tracking-widest text-slate-600">
                      {mentor.experience} Exp
                    </span>
                  </div>
                  <p className="mt-1.5 text-xs font-medium text-slate-500 leading-snug line-clamp-2 min-h-[2.6rem]">
                    {mentor.previous && mentor.previous.trim().length > 0
                      ? `Previously: ${mentor.previous}`
                      : "Previously: —"}
                  </p>
                </div>
              </div>

              <a
                href={mentor.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex w-full items-center justify-center gap-2.5 rounded-2xl bg-[#0A66C2] px-5 py-3.5 text-sm font-bold text-white shadow-md shadow-[#0A66C2]/25 transition-all hover:bg-[#004182] hover:shadow-lg hover:shadow-[#0A66C2]/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A66C2]"
                aria-label={`${mentor.name} on LinkedIn`}
              >
                <Linkedin className="size-5 shrink-0" strokeWidth={2} />
                <span>View LinkedIn profile</span>
              </a>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
