import { motion } from 'motion/react';
import Navbar from '../components/Navbar';
import { Target, Users, Award, ShieldCheck } from 'lucide-react';

export default function AboutUs() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar onCallbackClick={() => {}} />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden bg-slate-900 text-white">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:40px_40px]"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-8">
                Empowering the Next Generation of <span className="text-blue-500">Tech Leaders</span>
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                CareerDCode is more than just an ed-tech platform. We are a community of learners, mentors, and industry experts dedicated to bridging the gap between traditional education and the rapidly evolving tech landscape.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-bold mb-6">
                  <Target size={18} /> Our Mission
                </div>
                <h2 className="text-4xl font-bold text-slate-900 mb-6">Bridging the Skill Gap</h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  Our mission is to provide accessible, high-quality, and industry-relevant tech education to everyone, regardless of their background. We believe that with the right guidance and resources, anyone can build a successful career in technology.
                </p>
                <div className="grid grid-cols-2 gap-8">
                  <div className="p-6 bg-slate-50 rounded-2xl">
                    <div className="text-3xl font-bold text-blue-600 mb-2">35k+</div>
                    <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Students Trained</div>
                  </div>
                  <div className="p-6 bg-slate-50 rounded-2xl">
                    <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                    <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Hiring Partners</div>
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
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white">
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
                  icon: <Users className="text-blue-600" size={32} />,
                  title: "Student First",
                  description: "Every decision we make is centered around our students' success and learning experience."
                },
                {
                  icon: <Award className="text-orange-500" size={32} />,
                  title: "Excellence",
                  description: "We strive for excellence in our teaching, mentorship, and curriculum quality."
                },
                {
                  icon: <ShieldCheck className="text-emerald-500" size={32} />,
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
