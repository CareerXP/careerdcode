import { MessageCircle } from 'lucide-react';

export default function WhatsAppFAB() {
  return (
    <a
      href="https://wa.me/#"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 p-4 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 transition-transform active:scale-95 flex items-center justify-center"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle size={32} fill="currentColor" />
    </a>
  );
}
