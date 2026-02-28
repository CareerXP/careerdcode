import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQData {
  [key: string]: FAQItem[];
}

const faqData: FAQData = {
  Courses: [
    {
      question: "What courses does CareerDCode offer?",
      answer: "CareerDCode offers comprehensive Full Stack Development (Java & MERN), Data Analytics, and Data Science & AI programs designed to make you industry-ready."
    },
    {
      question: "Are the courses certified?",
      answer: "Yes, all our programs come with industry-recognized certifications upon successful completion of the curriculum and projects."
    }
  ],
  Learning: [
    {
      question: "How are offline and online courses different at CareerDCode?",
      answer: "At CareerDCode, both offline and online courses offer the same high-quality curriculum. The main differences lie in the learning environment:\n• Offline Courses are held at our centers, providing a classroom experience with face-to-face interactions, peer learning, and instant support from instructors.\n• Live Online Courses provide the same real-time interaction but allow you to learn from anywhere, with flexibility in attending classes remotely while still benefiting from live discussions and mentorship.\n\nBoth formats include projects, assignments, and expert mentorship, but you choose the learning environment that fits your lifestyle best."
    },
    {
      question: "What study materials and resources will I get access to?",
      answer: "You will get access to our proprietary learning management system (LMS) which includes recorded lectures, detailed notes, practice assignments, and real-world project templates."
    },
    {
      question: "Is there mentor support for doubt resolution?",
      answer: "Absolutely! We have dedicated teaching assistants and mentors available for 1-on-1 doubt resolution sessions to ensure you never get stuck."
    },
    {
      question: "Is the platform suitable for beginners with no coding background?",
      answer: "Yes, our courses start from the absolute basics. We have successfully trained thousands of students from non-tech backgrounds who are now working as software engineers."
    },
    {
      question: "Can I balance CareerDCode's courses with a job or college?",
      answer: "Our schedules are designed to be flexible. We offer evening and weekend batches specifically for working professionals and college students."
    },
    {
      question: "How flexible is the learning schedule?",
      answer: "While we have fixed live session timings, all sessions are recorded. You can catch up on missed classes and complete assignments at your own pace within the module timelines."
    },
    {
      question: "Will I receive feedback and progress tracking throughout the course?",
      answer: "Yes, we provide weekly performance reports, regular mock tests, and detailed feedback on every project you submit."
    },
    {
      question: "What kind of real-world projects are included?",
      answer: "You will work on industry-grade projects like E-commerce clones, Social Media dashboards, and Data Visualization tools that simulate real work environments."
    }
  ]
};

export default function FAQSection() {
  const [activeTab, setActiveTab] = useState('Learning');
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-[#F0F7FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="mb-4">
            <span className="text-sm font-bold uppercase tracking-widest text-slate-900 relative inline-block">
              HAVE ANY DOUBTS?
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600"></span>
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            <span className="text-blue-600">Frequently</span> Asked Questions
          </h2>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto">
            Work hard with us, with dedication and commitment, and watch multiple opportunities grab you and transform your future!
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Tabs */}
          <div className="lg:w-1/4">
            <div className="flex flex-col space-y-2">
              {Object.keys(faqData).map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    setExpandedIndex(0); // Reset accordion on tab change
                  }}
                  className={`text-left px-6 py-4 rounded-xl text-sm font-bold transition-all ${
                    activeTab === tab
                      ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600 shadow-sm'
                      : 'text-slate-400 hover:text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Accordion Content */}
          <div className="lg:w-3/4 space-y-4">
            {faqData[activeTab].map((item, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-xl border border-slate-100 overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setExpandedIndex(expandedIndex === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
                >
                  <span className="text-base font-bold text-slate-800">
                    {item.question}
                  </span>
                  <ChevronDown 
                    size={20} 
                    className={`text-slate-400 transition-transform duration-300 ${expandedIndex === idx ? 'rotate-180' : ''}`} 
                  />
                </button>
                
                <AnimatePresence>
                  {expandedIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="p-6 pt-0 text-slate-500 text-sm leading-relaxed whitespace-pre-line">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
