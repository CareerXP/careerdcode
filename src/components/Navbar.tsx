import { ChevronDown, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';

interface NavbarProps {
  onCallbackClick: () => void;
}

export default function Navbar({ onCallbackClick }: NavbarProps) {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-slate-900 flex items-center justify-center rounded-lg group-hover:bg-blue-600 transition-colors">
              <div className="w-5 h-5 border-2 border-white rounded-sm rotate-45"></div>
            </div>
            <span className="text-xl font-bold font-display tracking-tight text-slate-900">CareerDCode</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-10">
            <a href="/#courses" className="text-sm font-semibold font-display text-slate-500 hover:text-slate-900 transition-colors relative">
              Courses
            </a>
            <Link to="/about" className="text-sm font-semibold font-display text-slate-500 hover:text-slate-900 transition-colors relative">
              About Us
            </Link>
            <div className="flex items-center gap-1 text-sm font-semibold font-display text-slate-500 hover:text-slate-900 cursor-pointer transition-colors">
              More <ChevronDown size={14} />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={onCallbackClick}
              className="flex items-center gap-2 px-6 py-2.5 text-sm font-bold font-display text-slate-900 border-2 border-slate-900 rounded-xl hover:bg-slate-900 hover:text-white transition-all"
            >
              <PhoneCall size={16} />
              Callback
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
