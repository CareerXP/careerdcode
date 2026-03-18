import { ChevronDown, PhoneCall } from 'lucide-react';
import Link from 'next/link';

interface NavbarProps {
  onCallbackClick: () => void;
}

export default function Navbar({ onCallbackClick }: NavbarProps) {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 bg-blue-600 rotate-45 flex items-center justify-center rounded-sm shadow-lg shadow-blue-100">
              <div className="w-4 h-4 bg-white -rotate-45"></div>
            </div>
            <span className="text-xl font-bold tracking-tighter text-slate-900 font-display">CareerDCode.</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-10">
            <a href="/#courses" className="text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-blue-600 transition-colors">
              Courses
            </a>
            <Link href="/about" className="text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-blue-600 transition-colors">
              About Us
            </Link>
            <div className="flex items-center gap-1 text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-blue-600 cursor-pointer transition-colors">
              More <ChevronDown size={12} />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={onCallbackClick}
              className="flex items-center gap-2 px-6 py-3 text-[10px] font-black uppercase tracking-widest text-white bg-slate-900 rounded-xl hover:bg-blue-600 transition-all shadow-xl shadow-slate-200"
            >
              <PhoneCall size={14} />
              Callback
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
