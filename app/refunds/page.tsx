"use client";

import { motion } from "motion/react";
import { CreditCard, Clock, CheckCircle2, AlertCircle, Briefcase, RefreshCcw, HelpCircle, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";

export default function RefundPolicyPage() {
  const sections = [
    {
      title: "1. Enrollment & Fees",
      icon: <CreditCard className="text-indigo-600" size={24} />,
      content: (
        <ul className="list-disc pl-5 space-y-2 text-slate-600">
          <li>Enrollment grants access to CareerXP’s training programs, mentorship, assessments, and placement support services.</li>
          <li>The fee covers access to these resources and program infrastructure.</li>
        </ul>
      ),
    },
    {
      title: "2. Refund Window",
      icon: <Clock className="text-indigo-600" size={24} />,
      content: (
        <ul className="list-disc pl-5 space-y-2 text-slate-600">
          <li>A refund request can be raised within 3 days of enrollment.</li>
          <li>Requests must be submitted via email to our support team.</li>
        </ul>
      ),
    },
    {
      title: "3. Refund Eligibility",
      icon: <CheckCircle2 className="text-indigo-600" size={24} />,
      content: (
        <p className="text-slate-600">
          Refunds may be considered within the refund window, provided the request is genuine and raised at an early stage of the program.
        </p>
      ),
    },
    {
      title: "4. After Refund Window",
      icon: <AlertCircle className="text-indigo-600" size={24} />,
      content: (
        <p className="text-slate-600">
          Once the initial refund window has passed, fees are non-refundable, as resources, mentorship, and program access are already allocated.
        </p>
      ),
    },
    {
      title: "5. Placement Assistance Disclaimer",
      icon: <Briefcase className="text-indigo-600" size={24} />,
      content: (
        <div className="space-y-4">
          <p className="text-slate-600">
            CareerXP provides placement assistance and opportunities, not guaranteed job placement. Final hiring outcomes depend on individual performance, preparation, and company requirements.
          </p>
          <p className="text-slate-600 font-bold">However, CareerXP provides structured placement assistance and continuous support:</p>
          <ul className="list-disc pl-5 space-y-2 text-slate-600">
            <li>We actively connect candidates with hiring companies and provide access to multiple placement opportunities.</li>
            <li>Our team works closely with candidates to continuously improve their profiles, including resume, project work, and interview readiness.</li>
            <li>We strive to ensure candidates are better aligned with industry expectations and hiring standards over time.</li>
            <li>Placement support continues until the candidate secures a job opportunity.</li>
          </ul>
        </div>
      ),
    },
    {
      title: "6. Refund Processing",
      icon: <RefreshCcw className="text-indigo-600" size={24} />,
      content: (
        <ul className="list-disc pl-5 space-y-2 text-slate-600">
          <li>Approved refunds will be processed within 7–10 working days.</li>
          <li>The amount will be credited via the original payment method.</li>
        </ul>
      ),
    },
    {
      title: "7. Exceptional Cases",
      icon: <HelpCircle className="text-indigo-600" size={24} />,
      content: (
        <p className="text-slate-600">
          In rare and genuine cases, refund requests may be reviewed at the discretion of CareerXP management.
        </p>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <span className="w-12 h-[1px] bg-indigo-600"></span>
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-600 font-mono">
                  Policies
                </span>
              </div>
              <h1 className="text-5xl sm:text-6xl font-black text-slate-900 leading-tight tracking-tight uppercase font-display">
                Refund <span className="text-indigo-600">Policy.</span>
              </h1>
              <div className="flex items-center gap-4 text-slate-400 font-mono text-xs uppercase tracking-widest">
                <span>Effective Date: 1st April 2026</span>
              </div>
              <p className="text-slate-500 text-lg font-medium leading-relaxed">
                At CareerXP Technologies Pvt. Ltd., we aim to provide a structured and outcome-driven learning experience. We encourage all applicants to review the program details carefully before enrolling.
              </p>
            </motion.div>
          </div>

          {/* Content Sections */}
          <div className="space-y-12">
            {sections.map((section, index) => (
              <motion.section
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 bg-slate-50 rounded-[32px] border border-slate-100 hover:border-indigo-100 transition-colors"
              >
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm shrink-0">
                    {section.icon}
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-slate-900 font-display tracking-tight">
                      {section.title}
                    </h2>
                    <div className="text-slate-600 leading-relaxed font-medium">
                      {section.content}
                    </div>
                  </div>
                </div>
              </motion.section>
            ))}

            {/* Contact Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 bg-indigo-600 rounded-[40px] text-white relative overflow-hidden group"
            >
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-colors"></div>
              <div className="relative z-10 space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold font-display tracking-tight">8. Contact</h2>
                  <p className="text-indigo-100 font-medium leading-relaxed max-w-xl">
                    For any refund-related queries regarding our programs, please reach out to us:
                  </p>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                    <Mail size={20} />
                  </div>
                  <span className="font-bold">support@careerxp.in</span>
                </div>
              </div>
            </motion.section>
          </div>
        </div>
      </main>
    </div>
  );
}
