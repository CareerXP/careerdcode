"use client";

import { motion } from "motion/react";
import { Shield, Lock, Eye, FileText, Mail, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";

export default function PrivacyPolicyPage() {
  const sections = [
    {
      title: "1. Information We Collect",
      icon: <FileText className="text-indigo-600" size={24} />,
      content: (
        <ul className="list-disc pl-5 space-y-2 text-slate-600">
          <li>Personal details (Name, Email, Phone Number)</li>
          <li>Educational and professional information</li>
          <li>Resume, LinkedIn, GitHub profiles</li>
          <li>Payment details (processed via secure third-party providers)</li>
          <li>Website usage data (cookies, analytics)</li>
        </ul>
      ),
    },
    {
      title: "2. How We Use Your Information",
      icon: <Shield className="text-indigo-600" size={24} />,
      content: (
        <ul className="list-disc pl-5 space-y-2 text-slate-600">
          <li>Provide training and placement services</li>
          <li>Conduct assessments and create personalized learning plans</li>
          <li>Connect you with hiring partners</li>
          <li>Communicate updates, opportunities, and support</li>
          <li>Improve our services and user experience</li>
        </ul>
      ),
    },
    {
      title: "3. Sharing of Information",
      icon: <Eye className="text-indigo-600" size={24} />,
      content: (
        <div className="space-y-4">
          <p className="text-slate-600">We may share your data with:</p>
          <ul className="list-disc pl-5 space-y-2 text-slate-600">
            <li>Hiring companies and recruiters (for placement purposes)</li>
            <li>Third-party service providers (payment, analytics, CRM tools)</li>
          </ul>
          <p className="text-slate-600 font-bold">We do not sell your personal data to any third parties.</p>
        </div>
      ),
    },
    {
      title: "4. Data Security",
      icon: <Lock className="text-indigo-600" size={24} />,
      content: (
        <p className="text-slate-600">
          We implement appropriate technical and organizational measures to protect your data from unauthorized access, misuse, or disclosure.
        </p>
      ),
    },
    {
      title: "5. Cookies & Tracking",
      icon: <FileText className="text-indigo-600" size={24} />,
      content: (
        <p className="text-slate-600">
          Our website may use cookies to enhance user experience and analyze traffic. You can control cookie preferences through your browser settings.
        </p>
      ),
    },
    {
      title: "6. Your Rights",
      icon: <Shield className="text-indigo-600" size={24} />,
      content: (
        <ul className="list-disc pl-5 space-y-2 text-slate-600">
          <li>Request access to your data</li>
          <li>Request correction or deletion</li>
          <li>Opt-out of communications</li>
        </ul>
      ),
    },
    {
      title: "7. Third-Party Links",
      icon: <FileText className="text-indigo-600" size={24} />,
      content: (
        <p className="text-slate-600">
          Our website may contain links to external websites. We are not responsible for their privacy practices.
        </p>
      ),
    },
    {
      title: "8. Updates to Policy",
      icon: <Shield className="text-indigo-600" size={24} />,
      content: (
        <p className="text-slate-600">
          We may update this policy from time to time. Changes will be posted on this page.
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
                  Legal
                </span>
              </div>
              <h1 className="text-5xl sm:text-6xl font-black text-slate-900 leading-tight tracking-tight uppercase font-display">
                Privacy <span className="text-indigo-600">Policy.</span>
              </h1>
              <div className="flex items-center gap-4 text-slate-400 font-mono text-xs uppercase tracking-widest">
                <span>Effective Date: 1st April 2026</span>
              </div>
              <p className="text-slate-500 text-lg font-medium leading-relaxed">
                CareerXP Technologies Pvt. Ltd. (“CareerXP”, “we”, “our”, or “us”) values your privacy and is committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data.
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
                  <h2 className="text-3xl font-bold font-display tracking-tight">9. Contact Us</h2>
                  <p className="text-indigo-100 font-medium leading-relaxed max-w-xl">
                    For any queries regarding this Privacy Policy or our data practices, please reach out to us:
                  </p>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                      <Mail size={20} />
                    </div>
                    <span className="font-bold">Support@careerxp.in</span>
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
