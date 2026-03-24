"use client";

import { motion } from "motion/react";
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  ArrowRight, 
  Heart, 
  Zap, 
  Users, 
  Rocket,
  ChevronRight,
  Globe,
  Coffee,
  ShieldCheck
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Link from "next/link";

const openPositions = [
  {
    id: "sde-2-backend",
    title: "SDE 2 - Backend (Node.js)",
    department: "Engineering",
    location: "Noida / Remote",
    type: "Full-time",
    salary: "₹18L - ₹25L",
  },
  {
    id: "technical-mentor-fsd",
    title: "Technical Mentor - Full Stack",
    department: "Education",
    location: "Remote",
    type: "Full-time / Part-time",
    salary: "₹12L - ₹18L",
  },
  {
    id: "product-designer",
    title: "Senior Product Designer",
    department: "Design",
    location: "Noida",
    type: "Full-time",
    salary: "₹15L - ₹22L",
  },
  {
    id: "content-strategist",
    title: "Technical Content Strategist",
    department: "Marketing",
    location: "Remote",
    type: "Full-time",
    salary: "₹8L - ₹12L",
  },
  {
    id: "sales-associate",
    title: "Inside Sales Associate",
    department: "Sales",
    location: "Noida",
    type: "Full-time",
    salary: "₹6L - ₹10L + Incentives",
  },
];

const values = [
  {
    icon: <Zap className="text-amber-500" />,
    title: "Speed & Agility",
    description: "We move fast, iterate quickly, and aren't afraid to break things to build better ones."
  },
  {
    icon: <Users className="text-indigo-500" />,
    title: "Student First",
    description: "Every decision we make starts with one question: How does this help our students succeed?"
  },
  {
    icon: <ShieldCheck className="text-emerald-500" />,
    title: "Radical Transparency",
    description: "We believe in open communication, honest feedback, and shared goals across all levels."
  },
  {
    icon: <Rocket className="text-rose-500" />,
    title: "Growth Mindset",
    description: "We provide the environment and resources for you to grow as fast as the company does."
  }
];

const perks = [
  { icon: <Globe size={20} />, title: "Remote-First Culture" },
  { icon: <Coffee size={20} />, title: "Flexible Work Hours" },
  { icon: <Heart size={20} />, title: "Health & Wellness" },
  { icon: <Briefcase size={20} />, title: "Learning Stipend" },
];

export default function CareersPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative py-24 lg:py-32 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-slate-50/50 -skew-y-6 origin-top-left -z-10"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-600 font-display mb-6 block">
                JOIN THE MISSION
              </span>
              <h1 className="text-6xl lg:text-8xl font-bold text-slate-900 font-display tracking-tight leading-[0.9] mb-8">
                Build the Future of <br />
                <span className="text-indigo-600">Tech Education.</span>
              </h1>
              <p className="text-slate-500 text-xl max-w-2xl mx-auto font-medium leading-relaxed mb-12">
                We're on a mission to bridge the gap between academia and industry. 
                Come help us empower the next generation of engineers.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="#openings" 
                  className="px-10 py-5 bg-slate-900 text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-2xl shadow-slate-200 hover:bg-indigo-600 transition-all"
                >
                  View Openings
                </a>
                <Link 
                  href="/about" 
                  className="px-10 py-5 bg-white text-slate-900 border border-slate-200 rounded-2xl font-black text-xs uppercase tracking-widest hover:border-slate-900 transition-all"
                >
                  Our Story
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-600 font-display mb-4 block">
                OUR CULTURE
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 font-display tracking-tight">
                What We Stand For
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((val, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 rounded-[32px] bg-slate-50 border border-slate-100 hover:shadow-2xl hover:shadow-indigo-100/50 transition-all duration-500"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-xl mb-6 text-2xl">
                    {val.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 font-display">
                    {val.title}
                  </h3>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed">
                    {val.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-indigo-600/10 -skew-x-12 origin-top-right"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
              <div className="lg:w-1/2">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-400 font-display mb-6 block">
                  PERKS & BENEFITS
                </span>
                <h2 className="text-4xl lg:text-6xl font-bold font-display tracking-tight mb-8">
                  Life at CareerXP
                </h2>
                <p className="text-slate-400 text-lg font-medium leading-relaxed mb-12">
                  We care about your well-being and professional growth. 
                  Our benefits are designed to help you do your best work while living your best life.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  {perks.map((perk, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-indigo-600/20 flex items-center justify-center text-indigo-400">
                        {perk.icon}
                      </div>
                      <span className="text-sm font-bold uppercase tracking-widest text-slate-300">
                        {perk.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="relative aspect-video rounded-[32px] overflow-hidden shadow-2xl">
                  <img 
                    src="https://picsum.photos/seed/office/800/600" 
                    alt="Office Culture" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-indigo-600/10"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions Section */}
        <section id="openings" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-600 font-display mb-4 block">
                CURRENT OPENINGS
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 font-display tracking-tight">
                Find Your Role
              </h2>
            </div>

            <div className="space-y-6">
              {openPositions.map((job, i) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-white rounded-[32px] border border-slate-100 p-8 lg:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500"
                >
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-indigo-50 text-indigo-600 text-[10px] font-black uppercase tracking-widest rounded-lg">
                        {job.department}
                      </span>
                      <span className="text-slate-300">|</span>
                      <div className="flex items-center gap-1.5 text-slate-400">
                        <MapPin size={14} />
                        <span className="text-[10px] font-black uppercase tracking-widest">{job.location}</span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 font-display group-hover:text-indigo-600 transition-colors">
                      {job.title}
                    </h3>
                  </div>
                  
                  <div className="flex flex-col lg:items-end gap-4 w-full lg:w-auto">
                    <div className="flex items-center gap-6">
                      <div className="flex items-center gap-2 text-slate-400">
                        <Clock size={16} />
                        <span className="text-xs font-bold">{job.type}</span>
                      </div>
                      <div className="text-slate-900 font-bold text-sm">
                        {job.salary}
                      </div>
                    </div>
                    <button className="w-full lg:w-auto px-8 py-4 bg-slate-900 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-indigo-600 transition-all">
                      Apply Now <ArrowRight size={16} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-20 p-12 bg-slate-50 rounded-[40px] text-center border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 font-display mb-4">
                Don't see a role that fits?
              </h3>
              <p className="text-slate-500 font-medium mb-8">
                We're always looking for talented individuals. Send us your resume and we'll keep you in mind.
              </p>
              <a 
                href="mailto:careers@careerxp.in" 
                className="inline-flex items-center gap-3 text-indigo-600 font-black text-xs uppercase tracking-widest hover:gap-5 transition-all"
              >
                General Application <ChevronRight size={18} />
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
