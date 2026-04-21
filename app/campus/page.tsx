"use client";

import { motion } from "motion/react";
import { 
  ArrowRight, 
  BarChart3, 
  Brain, 
  Laptop, 
  Mic2, 
  Building2, 
  HeartHandshake, 
  CheckCircle2, 
  AlertCircle,
  Calendar,
  ChevronRight,
  Download
} from "lucide-react";
import Navbar from "@/components/Navbar";
import { useModal } from "@/components/ClientLayout";
import TrustedCompanies from "@/components/TrustedCompanies";

export default function RecruitersPage() {
  const { openCampusEnquiryModal } = useModal();

  const problemPoints = [
    "Limited practical exposure",
    "Lack of interview readiness",
    "Gap between academic learning and industry expectations",
    "Restricted placement opportunities"
  ];

  const approachCards = [
    {
      icon: <BarChart3 className="text-indigo-600" size={24} />,
      title: "Skill Assessment",
      description: "Evaluate aptitude, technical knowledge, and coding skills"
    },
    {
      icon: <Brain className="text-indigo-600" size={24} />,
      title: "Personalized Roadmap",
      description: "Training tailored to individual strengths and gaps"
    },
    {
      icon: <Laptop className="text-indigo-600" size={24} />,
      title: "Practical Learning",
      description: "70% hands-on training with real-world projects"
    },
    {
      icon: <Mic2 className="text-indigo-600" size={24} />,
      title: "Interview Preparation",
      description: "Mock interviews with real feedback"
    },
    {
      icon: <Building2 className="text-indigo-600" size={24} />,
      title: "Placement Opportunities",
      description: "Access to multiple hiring drives"
    },
    {
      icon: <HeartHandshake className="text-indigo-600" size={24} />,
      title: "Continuous Support",
      description: "Support continues until students are placed"
    }
  ];

  const collegeBenefits = [
    "Improved placement percentages",
    "Better student outcomes",
    "Additional hiring opportunities",
    "Support for average & below-average students",
    "Stronger placement reputation"
  ];

  const workSteps = [
    {
      step: "Step 1",
      title: "Assessment",
      description: "Evaluate students' current skill levels"
    },
    {
      step: "Step 2",
      title: "Training",
      description: "Structured, practical learning approach"
    },
    {
      step: "Step 3",
      title: "Placement",
      description: "Continuous interview opportunities"
    }
  ];

  const programs = [
    "Full Stack Development (MERN + GenAI)",
    "Advanced DSA (Interview Preparation)",
    "Software Testing & Automation"
  ];

  const whyChooseUs = [
    "Placement-first approach",
    "Unlimited placement opportunities",
    "Industry mentors",
    "Practical training model",
    "Continuous support until placement"
  ];

  const logos = [
    "GOOGLE", "AMAZON", "META", "MICROSOFT", "ADOBE", "NETFLIX", "UBER", "ZOMATO"
  ];

  const downloadCampusBrochure = () => {
    const url = "/assets/static/broucher_campus.pdf";
    void (async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error("fetch failed");
        const blob = await res.blob();
        const objectUrl = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = objectUrl;
        a.download = "broucher_campus.pdf";
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(objectUrl);
      } catch {
        window.open(url, "_blank", "noopener,noreferrer");
      }
    })();
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar ctaModal="campus-enquiry" />
      
      <main className="pt-32 pb-20">
        {/* Hero Section */}
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
                    College Partnerships
                  </span>
                </div>
                <h1 className="text-5xl sm:text-7xl font-black text-slate-900 leading-[0.9] tracking-tight uppercase font-display">
                  Turn Your Campus <br />
                  Into a <span className="text-indigo-600">Placement-Ready</span> Ecosystem.
                </h1>
                <p className="text-slate-500 text-xl font-medium leading-relaxed max-w-xl">
                  CareerXP partners with colleges to improve placement outcomes by preparing students for real hiring — through structured training, practical learning, and continuous placement opportunities.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <button 
                  type="button"
                  onClick={downloadCampusBrochure}
                  className="px-8 py-5 bg-indigo-600 text-white font-black text-xs uppercase tracking-widest rounded-2xl hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 flex items-center gap-4 group"
                >
                  Download Brochure
                  <Download size={18} className="group-hover:translate-y-0.5 transition-transform" />
                </button>
                <div className="flex items-center gap-3 text-slate-400 font-mono text-[10px] uppercase tracking-widest">
                  <CheckCircle2 size={14} className="text-indigo-600" />
                  Supporting students with real hiring opportunities
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative aspect-square rounded-[64px] border border-slate-200 bg-gradient-to-br from-white via-indigo-50/40 to-slate-50 overflow-hidden shadow-[0_30px_90px_-60px_rgba(79,70,229,0.45)]">
                <div className="absolute -top-16 -left-16 h-72 w-72 rounded-full bg-indigo-200/40 blur-3xl" />
                <div className="absolute -bottom-20 -right-16 h-72 w-72 rounded-full bg-violet-200/40 blur-3xl" />
                <div className="absolute inset-0 opacity-[0.35] bg-[radial-gradient(#4F46E5_1px,transparent_1px)] [background-size:26px_26px]" />

                <div className="relative h-full p-8 sm:p-10 flex flex-col">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center gap-2 rounded-2xl border border-indigo-200/60 bg-white/70 px-4 py-2 text-[10px] font-black uppercase tracking-[0.25em] text-indigo-700 backdrop-blur-sm">
                      <Calendar size={14} className="text-indigo-600" />
                      Placement roadmap
                    </div>
                    <div className="hidden sm:flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.25em] text-slate-400">
                      <span className="h-[1px] w-10 bg-slate-200" />
                      Campus to career
                    </div>
                  </div>

                  <div className="mt-8 grid grid-cols-2 gap-4">
                    <div className="rounded-3xl border border-slate-200/80 bg-white/70 p-5 backdrop-blur-sm">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-700 ring-1 ring-indigo-100">
                          <Building2 size={18} />
                        </div>
                        <div className="min-w-0">
                          <p className="text-2xl font-black text-slate-900 font-display leading-none">
                            1000+
                          </p>
                          <p className="mt-1 text-[10px] font-black uppercase tracking-[0.25em] text-slate-400">
                            Hiring partners
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-3xl border border-slate-200/80 bg-white/70 p-5 backdrop-blur-sm">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100">
                          <BarChart3 size={18} />
                        </div>
                        <div className="min-w-0">
                          <p className="text-2xl font-black text-slate-900 font-display leading-none">
                            96%
                          </p>
                          <p className="mt-1 text-[10px] font-black uppercase tracking-[0.25em] text-slate-400">
                            Placement rate
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 flex-1 rounded-[36px] border border-slate-200/80 bg-white/70 p-6 backdrop-blur-sm">
                    <p className="text-xs font-black uppercase tracking-[0.25em] text-slate-400">
                      What you get
                    </p>
                    <div className="mt-4 space-y-3">
                      {[
                        "Skill assessment + gap mapping",
                        "Mock interviews & hiring drives",
                        "Ongoing placement opportunities",
                      ].map((item) => (
                        <div key={item} className="flex items-center gap-3">
                          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-50 text-indigo-700 ring-1 ring-indigo-100">
                            <ChevronRight size={16} />
                          </span>
                          <span className="text-sm font-semibold text-slate-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 2: THE REAL PROBLEM */}
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
                  Why Many Students <br />Remain Unplaced.
                </h2>
                <p className="text-xl text-slate-400 font-medium leading-relaxed">
                  Even after completing their degrees, many students struggle to secure jobs due to a significant gap between academic learning and industry expectations.
                </p>
                <div className="space-y-4">
                  {problemPoints.map((point, idx) => (
                    <div key={idx} className="flex items-center gap-4 group">
                      <div className="w-2 h-2 bg-rose-500 rounded-full group-hover:scale-150 transition-transform"></div>
                      <span className="text-lg text-slate-300 font-medium">{point}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-8 border-t border-white/10">
                  <p className="text-rose-500 font-black text-xs uppercase tracking-widest flex items-center gap-3">
                    <span className="w-8 h-[1px] bg-rose-500"></span>
                    Result: Low placement rates and missed opportunities
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="p-12 bg-white/5 rounded-[48px] border border-white/10 backdrop-blur-sm">
                  <div className="space-y-8">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="h-4 bg-white/10 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${40 + i * 15}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: i * 0.2 }}
                          className="h-full bg-rose-500/50"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="mt-12 text-center">
                    <p className="text-6xl font-black font-display text-white mb-2">60%+</p>
                    <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Students lack job-ready skills</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 3: OUR APPROACH */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-24 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 text-slate-900 rounded-lg text-[14px] font-black uppercase tracking-[0.2em] font-display border border-slate-100">
                Our Approach
              </div>
              <h2 className="text-5xl font-bold text-slate-900 font-display tracking-tight">
                A Structured, Placement-First Approach.
              </h2>
              <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto">
                We don’t just train students — we prepare them for real hiring environments.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {approachCards.map((card, idx) => (
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

        {/* Section 4: VALUE FOR COLLEGES */}
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
                  What Your <br />Institution Gains.
                </h2>
                <div className="space-y-6">
                  {collegeBenefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-6 group">
                      <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-colors">
                        <CheckCircle2 size={20} className="text-indigo-200" />
                      </div>
                      <span className="text-xl font-bold text-white">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-12 bg-white rounded-[48px] shadow-2xl"
              >
                <div className="text-center space-y-6">
                  <div className="w-20 h-20 bg-indigo-50 text-indigo-600 rounded-3xl flex items-center justify-center mx-auto">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 font-display">Ready to Elevate?</h3>
                  <p className="text-slate-500 font-medium">Join 50+ institutions already partnering with CareerXP.</p>
                  <button 
                    onClick={() => openCampusEnquiryModal()}
                    className="w-full py-5 bg-indigo-600 text-white font-black text-xs uppercase tracking-widest rounded-2xl hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100"
                  >
                    Partner With Us
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 5: HOW WE WORK */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-24 space-y-6">
              <h2 className="text-5xl font-bold text-slate-900 font-display tracking-tight">
                Simple & Scalable Collaboration Model.
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-12 relative">
              {/* Connector Line */}
              <div className="absolute top-1/2 left-0 w-full h-[1px] bg-slate-100 -translate-y-1/2 hidden lg:block"></div>
              
              {workSteps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className="relative z-10 p-10 bg-white rounded-[40px] border border-slate-100 shadow-sm hover:shadow-xl transition-all text-center space-y-6"
                >
                  <div className="w-16 h-16 bg-indigo-600 text-white rounded-2xl flex items-center justify-center mx-auto font-black text-xs tracking-widest shadow-xl shadow-indigo-100">
                    {step.step}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 font-display">{step.title}</h3>
                  <p className="text-slate-500 font-medium">{step.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-20 text-center">
              <p className="inline-flex items-center gap-3 text-indigo-600 font-black text-xs uppercase tracking-widest bg-indigo-50 px-8 py-4 rounded-2xl">
                <ChevronRight size={16} />
                Flexible engagement models based on college requirements
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: CAREER TRACKS */}
        <section className="py-32 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <h2 className="text-5xl font-bold text-slate-900 font-display tracking-tight leading-tight">
                  Programs Offered.
                </h2>
                <div className="space-y-4">
                  {programs.map((program, idx) => (
                    <div key={idx} className="p-6 bg-white rounded-2xl border border-slate-100 flex items-center justify-between group hover:border-indigo-600 transition-colors">
                      <span className="text-xl font-bold text-slate-900">{program}</span>
                      <ArrowRight size={20} className="text-slate-300 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all" />
                    </div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-12"
              >
                <div className="space-y-6">
                  <h2 className="text-5xl font-bold text-slate-900 font-display tracking-tight leading-tight">
                    Why Colleges <br />Choose CareerXP.
                  </h2>
                  <div className="grid gap-4">
                    {whyChooseUs.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-4">
                        <div className="w-6 h-6 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center shrink-0">
                          <CheckCircle2 size={14} />
                        </div>
                        <span className="text-lg text-slate-600 font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 8: SOCIAL PROOF */}
        {/* <section className="py-32 bg-white border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-slate-900 font-display tracking-tight mb-16">
              Trusted by Recruiters Across Multiple Companies
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 opacity-30 grayscale">
              {logos.map((logo, idx) => (
                <div key={idx} className="text-2xl font-black text-slate-900 tracking-tighter">
                  {logo}
                </div>
              ))}
            </div>
          </div>
        </section> */}

<TrustedCompanies />

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
                    Let’s Work Together to <br />
                    Improve Your <span className="text-indigo-500">Placement</span> Outcomes.
                  </h2>
                  <p className="text-xl text-slate-400 font-medium max-w-2xl mx-auto">
                    A quick discussion can help us explore how CareerXP can support your students.
                  </p>
                </div>
                <button 
                  onClick={() => openCampusEnquiryModal()}
                  className="px-12 py-6 bg-indigo-600 text-white font-black text-xs uppercase tracking-widest rounded-2xl hover:bg-indigo-700 transition-all shadow-2xl shadow-indigo-500/20 flex items-center gap-4 mx-auto group"
                >
                  Book a Meeting
                  <Calendar size={18} className="group-hover:rotate-12 transition-transform" />
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
