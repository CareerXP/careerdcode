"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          className="fixed bottom-8 left-0 right-0 z-50 flex justify-center pointer-events-none md:left-auto md:right-8 md:w-auto md:justify-start"
        >
          <button
            type="button"
            onClick={scrollToTop}
            className="pointer-events-auto w-14 h-14 bg-slate-900 text-white rounded-full flex items-center justify-center shadow-2xl shadow-slate-900/20 hover:bg-indigo-600 hover:scale-110 transition-all duration-300 group"
            aria-label="Scroll to top"
          >
            <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
