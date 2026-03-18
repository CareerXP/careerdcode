"use client";

import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";

export default function WhatsAppFAB() {
  return (
    <motion.a
      href="https://wa.me/1234567890"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-blue-500 text-white rounded-full flex items-center justify-center shadow-2xl shadow-blue-500/40 cursor-pointer"
    >
      <MessageCircle className="w-8 h-8" />
    </motion.a>
  );
}
