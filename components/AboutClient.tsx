"use client";

import { motion } from 'motion/react';
import Navbar from '@/components/Navbar';
import { Target, Users, Award, ShieldCheck } from 'lucide-react';
import { useModal } from '@/components/ClientLayout';

export default function AboutClient() {
  const { openModal } = useModal();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar onCallbackClick={() => openModal('callback')} />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-24 lg:py-40 overflow-hidden bg-slate-900 text-white">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:32px_32px]"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl"
            >
              <h1 className="text-6xl lg:text-8xl font-bold font-display tracking-tight mb-10 leading-[0.95]">
                Engineering <br />
                <span className="text-indigo-500">Future</span> Leaders.
              </h1>
              <p className="text-xl text-slate-400 leading-relaxed font-medium max-w-2xl">
                CareerDCode is a technical training ecosystem dedicated to bridging the gap between traditional education and the global tech landscape.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 text-slate-900 rounded-lg text-[10px] font-black uppercase tracking-[0.2em] mb-8 font-display border border-slate-100">
                  <Target size={14} /> Our Mission
                </div>
                <h2 className="text-5xl font-bold text-slate-900 mb-8 font-display tracking-tight">Bridging the <br />Technical Gap.</h2>
                <p className="text-lg text-slate-500 leading-relaxed mb-12 font-medium">
                  We provide high-quality, industry-relevant tech education to everyone. We believe that with the right guidance, anyone can build a successful career in technology.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100">
                    <div className="text-4xl font-bold text-slate-900 mb-2 font-display">35k+</div>
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Graduates</div>
                  </div>
                  <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100">
                    <div className="text-4xl font-bold text-slate-900 mb-2 font-display">500+</div>
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Partners</div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <img 
                  src="https://picsum.photos/seed/team-working/800/600" 
                  alt="Our Team" 
                  className="rounded-[32px] shadow-2xl"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-8 -left-8 p-8 bg-white rounded-3xl shadow-xl border border-slate-100 hidden lg:block">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white">
                      <ShieldCheck size={24} />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-slate-900">IIT Delhi Alumni</div>
                      <div className="text-sm text-slate-500">Founded by Industry Experts</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Core Values</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                These principles guide everything we do, from curriculum design to student support.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Users className="text-indigo-600" size={32} />,
                  title: "Student First",
                  description: "Every decision we make is centered around our students' success and learning experience."
                },
                {
                  icon: <Award className="text-orange-500" size={32} />,
                  title: "Excellence",
                  description: "We strive for excellence in our teaching, mentorship, and curriculum quality."
                },
                {
                  icon: <ShieldCheck className="text-indigo-500" size={32} />,
                  title: "Integrity",
                  description: "We maintain the highest standards of transparency and honesty in all our interactions."
                }
              ].map((value, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="mb-6">{value.icon}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{value.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
