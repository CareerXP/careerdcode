"use client";

import { motion } from "motion/react";
import { UserPlus } from "lucide-react";

export default function MentorConnectFAB() {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-24 right-6 z-50 w-14 h-14 bg-indigo-600 text-white rounded-full flex items-center justify-center shadow-2xl shadow-indigo-600/40 cursor-pointer"
    >
      <UserPlus className="w-8 h-8" />
    </motion.button>
  );
}
