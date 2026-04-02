"use client";

import { motion } from "motion/react";
import { 
  ArrowRight, 
  BarChart3, 
  Brain, 
  Laptop, 
  Building2, 
  CheckCircle2, 
  AlertCircle,
  Calendar,
  Users,
  Zap,
  Target,
  Globe,
  Coins,
  MessageSquare
} from "lucide-react";
import Navbar from "@/components/Navbar";
import { useModal } from "@/components/ClientLayout";

export default function RecruitersPage() {
  const { openRecruiterEnquiryModal } = useModal();

  const problems = [
    "High volume, low-quality applications",
    "Candidates not aligned with role requirements",
    "Time-consuming screening and coordination",
    "Limited access to scalable campus hiring"
  ];

  const advantages = [
    {
      icon: <BarChart3 className="text-indigo-600" size={24} />,
      title: "Pre-Screened & Evaluated",
      description: "Candidates are assessed on aptitude, technical skills, and interview readiness before being shared."
    },
    {
      icon: <Target className="text-indigo-600" size={24} />,
      title: "Role-Aligned Talent",
      description: "Candidates are trained based on real hiring patterns and job requirements."
    },
    {
      icon: <Globe className="text-indigo-600" size={24} />,
      title: "On-Campus Drives (Pan India)",
      description: "We facilitate on-campus hiring drives across partnered colleges pan India, enabling efficient bulk hiring."
    },
    {
      icon: <Zap className="text-indigo-600" size={24} />,
      title: "Faster Closures",
      description: "Reduce screening time and hire faster with curated candidate pools."
    },
    {
      icon: <Coins className="text-indigo-600" size={24} />,
      title: "Zero Hiring Cost",
      description: "No fees. No commissions. Completely free hiring support."
    }
  ];

  const hiringModels = [
    {
      icon: <Building2 className="text-indigo-600" size={24} />,
      title: "On-Campus Drives",
      description: "Bulk hiring through organized drives across partnered colleges pan India"
    },
    {
      icon: <Laptop className="text-indigo-600" size={24} />,
      title: "Virtual Hiring",
      description: "Conduct interviews remotely with pre-screened candidates"
    },
    {
      icon: <Users className="text-indigo-600" size={24} />,
      title: "Direct Hiring",
      description: "Get curated candidate profiles and shortlist as per your requirement"
    },
    {
      icon: <Brain className="text-indigo-600" size={24} />,
      title: "Custom Training",
      description: "We can design company-specific training programs to prepare candidates according to your tech stack, tools, and role expectations before hiring.",
      isUnique: true
    }
  ];

  const talentPool = [
    {
      title: "3rd Year Students",
      description: "Internship & early hiring",
      icon: "🎓"
    },
    {
      title: "Final Year Students",
      description: "Campus placements",
      icon: "🎓"
    },
    {
      title: "Recent Graduates",
      description: "Immediate joiners",
      icon: "🎓"
    }
  ];

  const whyCareerXP = [
    "Pre-trained and evaluated candidates",
    "Strong focus on interview readiness",
    "Access to multiple colleges across India",
    "Dedicated coordination support",
    "Scalable hiring through campus drives",
    "Custom training aligned to company needs"
  ];

  const trustStrip = [
    "Pre-screened candidates",
    "Pan-India campus access",
    "Faster hiring cycles",
    "Zero hiring cost"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar ctaModal="recruiter-enquiry" />
      
      <main className="pt-32 pb-20">
        {/* HERO SECTION */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <span className="w-12 h-[1px] bg-indigo-600"></span>
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-600 font-mono">
                    For Recruiters
                  </span>
                </div>
                <h1 className="text-5xl sm:text-7xl font-black text-slate-900 leading-[0.9] tracking-tight uppercase font-display">
                  Hire Job-Ready Freshers. <br />
                  <span className="text-indigo-600">Faster, Smarter</span> — At Zero Cost.
                </h1>
                <p className="text-slate-500 text-xl font-medium leading-relaxed max-w-xl">
                  Access pre-screened, interview-ready candidates and hire through on-campus drives across partnered colleges pan India or virtual processes — all supported by CareerXP.
                </p>
                <div className="p-4 bg-indigo-50 border-l-4 border-indigo-600 rounded-r-xl">
                  <p className="text-indigo-900 font-bold text-sm">
                    ⚡ We can also design company-specific training programs to align candidates with your exact tech stack, roles, and hiring requirements.
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                  <button 
                    onClick={() => openRecruiterEnquiryModal()}
                    className="px-8 py-5 bg-indigo-600 text-white font-black text-xs uppercase tracking-widest rounded-2xl hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 flex items-center gap-4 group"
                  >
                    Post Hiring Requirement
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button 
                    onClick={() => openRecruiterEnquiryModal()}
                    className="px-8 py-5 bg-white text-slate-900 border-2 border-slate-200 font-black text-xs uppercase tracking-widest rounded-2xl hover:border-indigo-600 transition-all flex items-center gap-4 group"
                  >
                    Schedule a Discussion
                  </button>
                </div>

                {/* Micro Trust Strip */}
                <div className="flex flex-wrap gap-x-8 gap-y-4 pt-4 border-t border-slate-100">
                  {trustStrip.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-slate-400 font-mono text-[10px] uppercase tracking-widest">
                      <CheckCircle2 size={14} className="text-indigo-600" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square bg-slate-50 rounded-[64px] border border-slate-100 overflow-hidden">
                <img 
                  src="/recruiter.png" 
                  alt="Hiring Solutions" 
                  className="w-full h-full object-cover opacity-80"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 2: THE REAL PROBLEM */}
        <section className="py-32 bg-slate-900 text-white overflow-hidden relative">
          <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:32px_32px]"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg text-[10px] font-black uppercase tracking-[0.2em] font-display border border-white/10">
                  <AlertCircle size={14} className="text-rose-500" /> The Real Problem
                </div>
                <h2 className="text-5xl font-bold font-display tracking-tight leading-tight">
                  Fresher Hiring Is <br />High Effort, Low Efficiency.
                </h2>
                <p className="text-xl text-slate-400 font-medium leading-relaxed">
                  Most companies struggle with finding the right talent at scale while managing the complexities of campus recruitment.
                </p>
                <div className="space-y-4">
                  {problems.map((point, idx) => (
                    <div key={idx} className="flex items-center gap-4 group">
                      <div className="w-2 h-2 bg-rose-500 rounded-full group-hover:scale-150 transition-transform"></div>
                      <span className="text-lg text-slate-300 font-medium">{point}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-8 border-t border-white/10">
                  <p className="text-rose-500 font-black text-xs uppercase tracking-widest flex items-center gap-3">
                    <span className="w-8 h-[1px] bg-rose-500"></span>
                    👉 Result: Delayed hiring and compromised quality
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="p-12 bg-white/5 rounded-[48px] border border-white/10 backdrop-blur-sm text-center">
                  <div className="space-y-8 mb-12">
                    <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                      <p className="text-slate-400 text-sm mb-2 uppercase tracking-widest font-black">Screening Time</p>
                      <p className="text-4xl font-bold text-rose-500">+40%</p>
                    </div>
                    <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                      <p className="text-slate-400 text-sm mb-2 uppercase tracking-widest font-black">Cost Per Hire</p>
                      <p className="text-4xl font-bold text-rose-500">Increasing</p>
                    </div>
                  </div>
                  <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Inefficiencies in traditional fresher hiring</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SECTION 3: OUR SOLUTION */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-24 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 text-slate-900 rounded-lg text-[10px] font-black uppercase tracking-[0.2em] font-display border border-slate-100">
                Our Solution
              </div>
              <h2 className="text-5xl font-bold text-slate-900 font-display tracking-tight">
                A Structured Hiring Engine for Freshers.
              </h2>
              <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto">
                CareerXP combines training, evaluation, and access to campus talent to deliver candidates who are ready for real hiring environments.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {advantages.map((card, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-10 bg-slate-50 rounded-[40px] border border-slate-100 hover:border-indigo-100 hover:bg-white hover:shadow-2xl hover:shadow-indigo-100/50 transition-all group"
                >
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-8 group-hover:scale-110 transition-transform">
                    {card.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 font-display">{card.title}</h3>
                  <p className="text-slate-500 font-medium leading-relaxed">{card.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: HIRING MODELS */}
        <section className="py-32 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-24 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white text-slate-900 rounded-lg text-[10px] font-black uppercase tracking-[0.2em] font-display border border-slate-100">
                Hiring Models
              </div>
              <h2 className="text-5xl font-bold text-slate-900 font-display tracking-tight">
                Flexible Hiring Models Based on Your Needs.
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {hiringModels.map((model, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`p-10 rounded-[40px] border transition-all group ${
                    model.isUnique 
                    ? "bg-indigo-600 text-white border-indigo-600 shadow-xl shadow-indigo-100" 
                    : "bg-white text-slate-900 border-slate-100 hover:border-indigo-100"
                  }`}
                >
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm mb-8 group-hover:scale-110 transition-transform ${
                    model.isUnique ? "bg-white/10" : "bg-slate-50"
                  }`}>
                    {model.isUnique 
                      ? <Brain className="text-white" size={24} /> 
                      : model.icon
                    }
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-2xl font-bold font-display">{model.title}</h3>
                    {model.isUnique && (
                      <span className="px-3 py-1 bg-white/20 rounded-full text-[10px] font-black uppercase tracking-widest">Unique Advantage</span>
                    )}
                  </div>
                  <p className={model.isUnique ? "text-indigo-100 font-medium leading-relaxed" : "text-slate-500 font-medium leading-relaxed"}>
                    {model.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: TALENT POOL */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 text-slate-900 rounded-lg text-[10px] font-black uppercase tracking-[0.2em] font-display border border-slate-100">
                  Talent Pool
                </div>
                <h2 className="text-5xl font-bold text-slate-900 font-display tracking-tight leading-tight">
                  Access a Ready-to-Hire <br />Talent Pipeline.
                </h2>
                <div className="space-y-6">
                  {talentPool.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-6 p-6 bg-slate-50 rounded-3xl border border-slate-100 group hover:border-indigo-100 transition-all">
                      <div className="text-4xl">{item.icon}</div>
                      <div>
                        <h4 className="text-xl font-bold text-slate-900">{item.title}</h4>
                        <p className="text-slate-500 font-medium">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="pt-8 border-t border-slate-100">
                  <p className="text-indigo-600 font-black text-xs uppercase tracking-widest flex items-center gap-3">
                    <span className="w-8 h-[1px] bg-indigo-600"></span>
                    👉 Suitable for: Entry-level roles, Internship hiring, Bulk hiring
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-[4/5] bg-slate-900 rounded-[64px] overflow-hidden relative group">
                  <img 
                    src="https://picsum.photos/seed/talent/800/1000" 
                    alt="Talent Pipeline" 
                    className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                  <div className="absolute bottom-12 left-12 right-12">
                    <p className="text-3xl font-bold text-white font-display mb-4">10,000+</p>
                    <p className="text-slate-300 font-medium">Interview-ready candidates across India</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SECTION 6: WHY CAREERXP */}
        <section className="py-32 bg-indigo-600 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-1/4"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <h2 className="text-5xl font-bold font-display tracking-tight leading-tight">
                  Built for Scalable <br />Fresher Hiring.
                </h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  {whyCareerXP.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4 group">
                      <div className="w-6 h-6 bg-white/10 rounded-lg flex items-center justify-center shrink-0 mt-1 group-hover:bg-white/20 transition-colors">
                        <CheckCircle2 size={14} className="text-indigo-200" />
                      </div>
                      <span className="text-lg font-bold text-white leading-tight">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-12 bg-white rounded-[48px] shadow-2xl text-center space-y-8"
              >
                <div className="w-20 h-20 bg-indigo-50 text-indigo-600 rounded-3xl flex items-center justify-center mx-auto">
                  <Zap size={40} />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 font-display">Simplify Your Hiring</h3>
                <p className="text-slate-500 font-medium">From campus to company — we simplify fresher hiring at scale.</p>
                <button 
                  onClick={() => openRecruiterEnquiryModal()}
                  className="w-full py-5 bg-indigo-600 text-white font-black text-xs uppercase tracking-widest rounded-2xl hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100"
                >
                  Get Started
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative p-16 sm:p-24 bg-slate-900 rounded-[64px] text-white text-center overflow-hidden"
            >
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:32px_32px]"></div>
              <div className="relative z-10 space-y-10">
                <div className="space-y-6">
                  <h2 className="text-5xl sm:text-7xl font-black font-display tracking-tight leading-[0.9] uppercase">
                    Start Hiring with <span className="text-indigo-500">CareerXP</span>
                  </h2>
                  <p className="text-xl text-slate-400 font-medium max-w-2xl mx-auto">
                    Share your requirement and get access to job-ready candidates aligned to your needs.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <button 
                    onClick={() => openRecruiterEnquiryModal()}
                    className="px-12 py-6 bg-indigo-600 text-white font-black text-xs uppercase tracking-widest rounded-2xl hover:bg-indigo-700 transition-all shadow-2xl shadow-indigo-500/20 flex items-center gap-4 group"
                  >
                    Post Hiring Requirement
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button 
                    onClick={() => openRecruiterEnquiryModal()}
                    className="px-12 py-6 bg-white/10 text-white border border-white/20 font-black text-xs uppercase tracking-widest rounded-2xl hover:bg-white/20 transition-all flex items-center gap-4 group"
                  >
                    Book a Call
                    <MessageSquare size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
