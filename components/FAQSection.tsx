"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What is the duration of the course?",
    answer: "The duration of the course is 6 months, with 2 hours of live classes every day.",
  },
  {
    question: "Do I get a certificate after completing the course?",
    answer: "Yes, you will receive a certificate of completion after successfully finishing the course.",
  },
  {
    question: "Is there any placement assistance?",
    answer: "Yes, we provide placement assistance to all our students, including resume building and mock interviews.",
  },
  {
    question: "What are the prerequisites for the course?",
    answer: "There are no specific prerequisites for the course. We start from the basics and cover everything in detail.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white">
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
                  <ChevronUp className="w-6 h-6 text-blue-600" />
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
