"use client";

import { motion } from "motion/react";
import { 
  FileText, 
  Users, 
  ShieldAlert, 
  Briefcase, 
  UserCheck, 
  CreditCard, 
  RefreshCcw, 
  BookOpen, 
  Scale, 
  UserX, 
  RotateCcw, 
  Gavel, 
  Mail, 
  MapPin 
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function TermsPage() {
  const sections = [
    {
      title: "1. Program Enrollment",
      icon: <FileText className="text-indigo-600" size={24} />,
      content: (
        <ul className="list-disc pl-5 space-y-2 text-slate-600">
          <li>Enrollment in CareerXP programs grants access to training, mentorship, assessments, and placement assistance services.</li>
          <li>Candidates are expected to provide accurate and complete information during registration.</li>
        </ul>
      ),
    },
    {
      title: "2. Training & Participation",
      icon: <Users className="text-indigo-600" size={24} />,
      content: (
        <ul className="list-disc pl-5 space-y-2 text-slate-600">
          <li>Candidates are expected to attend sessions regularly and actively participate in training activities.</li>
          <li>Completion of assignments, projects, and mock interviews is essential for effective learning and placement readiness.</li>
        </ul>
      ),
    },
    {
      title: "3. Code of Conduct",
      icon: <ShieldAlert className="text-indigo-600" size={24} />,
      content: (
        <ul className="list-disc pl-5 space-y-2 text-slate-600">
          <li>Candidates must maintain professional behavior during sessions, interactions, and placement processes.</li>
          <li>Any misconduct, misuse of platform resources, or inappropriate behavior may result in suspension or termination of access without refund.</li>
        </ul>
      ),
    },
    {
      title: "4. Placement Assistance",
      icon: <Briefcase className="text-indigo-600" size={24} />,
      content: (
        <div className="space-y-4">
          <p className="text-slate-600">
            CareerXP provides placement assistance by connecting candidates with hiring companies and facilitating interview opportunities. Placement support continues until the candidate secures a job opportunity.
          </p>
          <div className="p-4 bg-indigo-50 rounded-2xl border border-indigo-100">
            <p className="text-indigo-900 font-bold mb-2">Important Disclaimer:</p>
            <ul className="list-disc pl-5 space-y-2 text-indigo-800 text-sm">
              <li>CareerXP provides placement assistance and opportunities, not guaranteed job placement.</li>
              <li>Final hiring decisions depend on individual performance, preparation, and company requirements.</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "5. Candidate Responsibilities",
      icon: <UserCheck className="text-indigo-600" size={24} />,
      content: (
        <ul className="list-disc pl-5 space-y-2 text-slate-600">
          <li>Candidates are responsible for maintaining updated resumes, completing assigned tasks, and preparing for interviews.</li>
          <li>Candidates must respond promptly to interview opportunities and maintain communication with the CareerXP team.</li>
        </ul>
      ),
    },
    {
      title: "6. Fees & Payments",
      icon: <CreditCard className="text-indigo-600" size={24} />,
      content: (
        <ul className="list-disc pl-5 space-y-2 text-slate-600">
          <li>Program fees must be paid as per the agreed schedule.</li>
          <li>Access to training and placement services is subject to successful payment.</li>
        </ul>
      ),
    },
    {
      title: "7. Refund Policy",
      icon: <RefreshCcw className="text-indigo-600" size={24} />,
      content: (
        <p className="text-slate-600">
          Refunds are governed by CareerXP’s <Link href="/refunds" className="text-indigo-600 underline font-bold">Refund Policy</Link>. By enrolling, candidates agree to the terms outlined in the Refund Policy.
        </p>
      ),
    },
    {
      title: "8. Intellectual Property",
      icon: <BookOpen className="text-indigo-600" size={24} />,
      content: (
        <ul className="list-disc pl-5 space-y-2 text-slate-600">
          <li>All course materials, content, and resources provided by CareerXP are for personal use only.</li>
          <li>Unauthorized sharing, reproduction, or distribution is strictly prohibited.</li>
        </ul>
      ),
    },
    {
      title: "9. Limitation of Liability",
      icon: <Scale className="text-indigo-600" size={24} />,
      content: (
        <p className="text-slate-600">
          CareerXP shall not be liable for any direct or indirect loss arising from hiring outcomes, employment decisions, or candidate performance.
        </p>
      ),
    },
    {
      title: "10. Termination of Access",
      icon: <UserX className="text-indigo-600" size={24} />,
      content: (
        <p className="text-slate-600">
          CareerXP reserves the right to suspend or terminate access in case of policy violations, misconduct, or non-compliance with program requirements.
        </p>
      ),
    },
    {
      title: "11. Changes to Terms",
      icon: <RotateCcw className="text-indigo-600" size={24} />,
      content: (
        <p className="text-slate-600">
          CareerXP reserves the right to update these Terms & Conditions at any time. Updated terms will be posted on the website.
        </p>
      ),
    },
    {
      title: "12. Governing Law",
      icon: <Gavel className="text-indigo-600" size={24} />,
      content: (
        <ul className="list-disc pl-5 space-y-2 text-slate-600">
          <li>These Terms shall be governed by and interpreted in accordance with the laws of India.</li>
          <li>Any disputes shall be subject to the jurisdiction of courts in Kolkata, India.</li>
        </ul>
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
                  Legal Agreement
                </span>
              </div>
              <h1 className="text-5xl sm:text-6xl font-black text-slate-900 leading-tight tracking-tight uppercase font-display">
                Terms & <span className="text-indigo-600">Conditions.</span>
              </h1>
              <div className="flex items-center gap-4 text-slate-400 font-mono text-xs uppercase tracking-widest">
                <span>Effective Date: 1st April 2026</span>
              </div>
              <p className="text-slate-500 text-lg font-medium leading-relaxed">
                Welcome to CareerXP Technologies Pvt. Ltd. (“CareerXP”, “we”, “our”, or “us”). By enrolling in our programs or using our services, you agree to the following Terms & Conditions.
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
                  <h2 className="text-3xl font-bold font-display tracking-tight">13. Contact Us</h2>
                  <p className="text-indigo-100 font-medium leading-relaxed max-w-xl">
                    For any queries regarding these Terms & Conditions, please reach out to us:
                  </p>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                      <Mail size={20} />
                    </div>
                    <span className="font-bold">support@careerxp.in</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                      <MapPin size={20} />
                    </div>
                    <span className="font-bold">Kolkata, India</span>
                  </div>
                </div>
              </div>
            </motion.section>
          </div>
        </div>
      </main>
    </div>
  );
}
