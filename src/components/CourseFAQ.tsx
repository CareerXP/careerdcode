import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Am I eligible for this course if I'm from a non-technical background?",
    answer: "Yes, absolutely! Our curriculum is designed to take you from the very basics to advanced concepts. We have successfully placed many students from non-technical backgrounds into top tech roles."
  },
  {
    question: "I'm a college student but not in my final year. Can I still join the course?",
    answer: "Yes, you can join. The course is self-paced and flexible, making it ideal for students who want to build their skills early. However, placement assistance is typically focused on students in their final year or graduates."
  },
  {
    question: "Are there any Scholarships?",
    answer: "We offer merit-based scholarships and financial aid for deserving candidates. Please contact our admissions team for more details on the current scholarship programs."
  },
  {
    question: "What scholarships are available on tuition fees?",
    answer: "We have various scholarship tiers based on entrance test performance and academic record. You can get up to 50% off on your tuition fees."
  },
  {
    question: "Will I receive a Certificate once I complete my Course?",
    answer: "Yes, you will receive a verified certificate of completion from CareerDCode, which you can showcase on your LinkedIn profile and resume."
  },
  {
    question: "What is the total duration of the Full Stack MERN course?",
    answer: "The course typically takes 6-8 months to complete, depending on your pace and the time you dedicate to projects and assignments."
  },
  {
    question: "What topics are covered in the course curriculum?",
    answer: "The curriculum covers Frontend (HTML, CSS, JS, React), Backend (Node.js, Express), Databases (MongoDB), and Data Structures & Algorithms."
  },
  {
    question: "What resources will I get access to during the Full Stack MERN course?",
    answer: "You will get access to recorded lectures, live doubt-clearing sessions, a dedicated community forum, and a vast library of practice problems and projects."
  },
  {
    question: "Are there any mock interviews in the course?",
    answer: "Yes, we conduct multiple rounds of mock interviews with industry experts from top tech companies to prepare you for the real thing."
  },
  {
    question: "What is the criteria to get placement services after the course?",
    answer: "To be eligible for placement services, you need to complete at least 80% of the course content, pass our internal assessments, and complete the capstone projects."
  },
  {
    question: "What is the policy if I want to pause my course midway?",
    answer: "We understand that life happens. You can pause your course for up to 3 months. Your progress will be saved, and you can resume from where you left off."
  },
  {
    question: "Is there any refund provision in the Full Stack MERN course?",
    answer: "We have a 7-day no-questions-asked refund policy from the date of your first class."
  },
  {
    question: "What if I miss an EMI payment during the course?",
    answer: "We encourage timely payments to ensure uninterrupted access to the course. If you miss a payment, please contact our support team immediately to avoid any service disruption."
  },
  {
    question: "What is the duration of the income sharing agreement?",
    answer: "The Income Sharing Agreement (ISA) typically lasts for 2-3 years or until a specific payment cap is reached, whichever comes first."
  },
  {
    question: "When does payment begin in Pay after placement program?",
    answer: "Payments only start once you land a job with a salary above the specified threshold (e.g., 5 LPA)."
  },
  {
    question: "I want to enroll by paying tuition fees, how much fee do I need to pay?",
    answer: "The upfront tuition fee varies depending on the current batch and available scholarships. Please check our pricing section or talk to an advisor for the exact amount."
  },
  {
    question: "What is the placement services policy?",
    answer: "Our placement services include resume building, interview preparation, and direct referrals to our 500+ hiring partners. We work with you until you get placed."
  }
];

export default function CourseFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-xs font-bold mb-6">
            Have Any Doubts?
          </div>
          <h2 className="text-3xl lg:text-4xl font-black text-slate-900">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ List */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className="border border-slate-100 rounded-xl overflow-hidden hover:border-blue-200 transition-colors"
            >
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full py-5 px-6 flex items-center gap-4 text-left group"
              >
                <motion.div
                  animate={{ rotate: openIndex === idx ? 180 : 0 }}
                  className="text-slate-400 group-hover:text-blue-600 transition-colors"
                >
                  <ChevronDown size={20} />
                </motion.div>
                <span className="text-sm lg:text-base font-bold text-slate-700 group-hover:text-slate-900 transition-colors">
                  {faq.question}
                </span>
              </button>

              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-6 pb-6 pt-0 text-sm text-slate-500 leading-relaxed pl-[52px]">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
