"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "1. Do you guarantee placement?",
    answer: "No, we do not guarantee jobs. However, we provide continuous placement assistance, real interview opportunities, and support until you get placed. Final selection depends on your performance and company requirements.",
  },
  {
    question: "2. How is CareerXP different from other institutes?",
    answer: "CareerXP follows a placement-first approach: Personalized learning roadmap, 70% practical training, Industry mentors, Unlimited placement drives, and Support until you get hired. We focus on what companies actually hire for, not just theory.",
  },
  {
    question: "3. When do placement drives start?",
    answer: "Placement opportunities start from Day 1 of your program. You can attend multiple drives as you progress in your training.",
  },
  {
    question: "4. What if I am a beginner?",
    answer: "That’s completely fine. We assess your current level first and create a personalized roadmap to help you build skills step by step.",
  },
  {
    question: "5. Will you help with resume and interview preparation?",
    answer: "Yes. We continuously work on: Resume building, GitHub & project portfolio, Mock interviews, and Interview feedback.",
  },
  {
    question: "6. How long will you support me?",
    answer: "We provide continuous support until you get placed. Your journey doesn’t end with training — we stay with you until you achieve your goal.",
  },
  {
    question: "7. Are the classes online or offline?",
    answer: "All programs are 100% online, making it accessible from anywhere. However shortly we are coming up with offline centers too.",
  },
  {
    question: "8. What is the refund policy?",
    answer: "We offer a limited refund window after enrollment. Please refer to our Refund Policy page for detailed information.",
  },
  {
    question: "9. Who are the mentors?",
    answer: "You will learn from industry professionals working in top product and service-based companies, who guide you with real-world insights.",
  },
  {
    question: "10. How do I get started?",
    answer: "It’s simple: Book a free career call, Take a mock assessment, and Start your personalized training journey.",
  },
  {
    question: "11. Do I need prior coding experience?",
    answer: "No, beginners are welcome. We start from basics and gradually move to advanced topics.",
  },
  {
    question: "12. Will I work on real projects?",
    answer: "Yes, you will build real-world projects that can be added to your GitHub portfolio.",
  },
  {
    question: "13. How many interviews can I attend?",
    answer: "There is no limit — you can attend multiple placement drives until you get placed.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 font-display">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Find answers to common questions about our courses and platform.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="mb-4 border-b border-slate-200"
            >
              <button
                onClick={() => toggleFAQ(i)}
                className="w-full flex justify-between items-center py-6 text-left focus:outline-none"
              >
                <h3 className="text-xl font-bold text-slate-900">
                  {faq.question}
                </h3>
                {openIndex === i ? (
                  <ChevronUp className="w-6 h-6 text-indigo-600" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-slate-400" />
                )}
              </button>
              {openIndex === i && (
                <div className="pb-6">
                  <p className="text-slate-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
