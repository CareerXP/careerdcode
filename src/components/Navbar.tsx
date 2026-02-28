import { ChevronDown, PhoneCall } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rotate-45 flex items-center justify-center rounded-sm">
              <div className="w-4 h-4 bg-white -rotate-45"></div>
            </div>
            <span className="text-2xl font-bold tracking-tight text-slate-900">CareerDCode</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors relative group">
              Courses
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </a>
            <a href="#" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors relative group">
              Centres
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </a>
            <a href="#" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors relative group">
              Jobs
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </a>
            <div className="flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-blue-600 cursor-pointer transition-colors">
              More <ChevronDown size={16} />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <button className="px-6 py-2.5 text-sm font-semibold text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-all">
              Login
            </button>
            <button className="flex items-center gap-2 px-6 py-2.5 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all">
              <PhoneCall size={18} />
              Request Callback
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
