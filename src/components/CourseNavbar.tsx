import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CourseNavbar() {
  return (
    <nav className="bg-[#050A18] text-white py-4 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">
          {/* Logo & Courses Dropdown */}
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-6 h-6 bg-blue-600 rotate-45 flex items-center justify-center rounded-sm">
                <div className="w-3 h-3 bg-white -rotate-45"></div>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">CareerDCode</span>
            </Link>

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-bold transition-all">
              Courses <ChevronDown size={16} />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="/#partners" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
              Hiring Partners
            </a>
            <a href="#curriculum" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
              Curriculum
            </a>
            <a href="/#faq" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
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
