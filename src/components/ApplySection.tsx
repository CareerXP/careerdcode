import { motion } from 'motion/react';
import { PhoneCall, MessageCircle, CheckCircle2, ChevronRight } from 'lucide-react';

const steps = [
  {
    number: '1',
    title: 'Request Callback',
    description: 'Kickstart your learning journey by requesting callback today.',
    icon: <PhoneCall className="text-blue-600" size={24} />,
    bgColor: 'bg-blue-50',
  },
  {
    number: '2',
    title: 'Get on a Call',
    description: 'Chat with us to learn more about your options.',
    icon: <MessageCircle className="text-orange-500" size={24} />,
    bgColor: 'bg-orange-50',
  },
  {
    number: '3',
    title: 'Book your seat',
    description: 'Secure your spot and embark on your learning adventure!',
    icon: <CheckCircle2 className="text-emerald-500" size={24} />,
    bgColor: 'bg-emerald-50',
  },
];

export default function ApplySection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
            <span className="text-blue-600">Apply</span> for Upcoming Batches
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Side: Steps */}
          <div className="flex-1 w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {steps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative bg-white border border-slate-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className={`w-12 h-12 ${step.bgColor} rounded-xl flex items-center justify-center`}>
                      {step.icon}
                    </div>
                    <span className="text-5xl font-black text-blue-50/50 leading-none">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
            
            {/* Callback Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-blue-50 text-blue-600 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-100 transition-colors border border-blue-100"
            >
              <PhoneCall size={18} />
              Request a Callback
            </motion.button>
          </div>

          {/* OR Separator */}
          <div className="hidden lg:flex flex-col items-center gap-4">
            <div className="w-px h-24 bg-slate-100"></div>
            <span className="text-sm font-bold text-slate-400">OR</span>
            <div className="w-px h-24 bg-slate-100"></div>
          </div>
          <div className="lg:hidden flex items-center gap-4 w-full">
            <div className="flex-1 h-px bg-slate-100"></div>
            <span className="text-sm font-bold text-slate-400">OR</span>
            <div className="flex-1 h-px bg-slate-100"></div>
          </div>

          {/* Right Side: Illustration & Button */}
          <div className="flex-1 w-full flex flex-col items-center">
            <div className="relative mb-8 w-full max-w-md">
              <img 
                src="https://picsum.photos/seed/learning-illustration/600/400" 
                alt="Learning Illustration" 
                className="w-full h-auto rounded-2xl"
                referrerPolicy="no-referrer"
              />
              {/* Abstract Illustration Overlay (Simplified) */}
              <div className="absolute inset-0 bg-blue-600/5 rounded-2xl flex items-center justify-center">
                <div className="w-3/4 h-3/4 border-4 border-blue-600/20 rounded-full animate-pulse"></div>
              </div>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full max-w-sm py-4 bg-blue-600 text-white rounded-xl font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
            >
              View All Courses
              <ChevronRight size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
