import { ChevronDown } from 'lucide-react';
import Link from 'next/link';

export default function CourseNavbar() {
  return (
    <nav className="bg-white/80 backdrop-blur-md text-slate-900 py-4 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">
          {/* Logo & Courses Dropdown */}
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-8 h-8 bg-blue-600 rotate-45 flex items-center justify-center rounded-sm shadow-lg shadow-blue-100">
                <div className="w-4 h-4 bg-white -rotate-45"></div>
              </div>
              <span className="text-xl font-bold tracking-tighter text-slate-900 font-display">CareerDCode.</span>
            </Link>

            <button className="bg-slate-900 hover:bg-blue-600 text-white px-5 py-2.5 rounded-xl flex items-center gap-2 text-[10px] font-black uppercase tracking-widest transition-all shadow-xl shadow-slate-200">
              Courses <ChevronDown size={14} />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center space-x-10">
            <a href="#partners" className="text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-blue-600 transition-colors">
              Hiring Partners
            </a>
            <a href="#curriculum" className="text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-blue-600 transition-colors">
              Curriculum
            </a>
            <a href="#faq" className="text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-blue-600 transition-colors">
              FAQs
            </a>
          </div>

          {/* Action Button */}
          <div className="hidden lg:block">
            {/* Action button removed as per request */}
          </div>
        </div>
      </div>
    </nav>
  );
}
