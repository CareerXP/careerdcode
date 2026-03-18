import { Video } from 'lucide-react';
import { motion } from 'motion/react';

export default function MentorConnectFAB() {
  const zoomLink = "https://zoom.us/j/your-meeting-id"; // Placeholder Zoom link

  return (
    <motion.a
      href={zoomLink}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-28 right-8 z-50 p-4 bg-blue-600 text-white rounded-full shadow-2xl transition-all flex items-center justify-center group"
      aria-label="Connect with a Mentor"
    >
      <Video size={32} fill="currentColor" />
      <span className="absolute right-full mr-4 px-4 py-2 bg-slate-900 text-white text-xs font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Connect with a Mentor
      </span>
    </motion.a>
  );
}
