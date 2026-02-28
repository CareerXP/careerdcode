import { Mail, Phone, MapPin, Send, Instagram, Youtube, Linkedin, Facebook, MessageCircle, Download } from 'lucide-react';

interface FooterProps {
  onCallbackClick: () => void;
  onBrochureClick: () => void;
}

export default function Footer({ onCallbackClick, onBrochureClick }: FooterProps) {
  return (
    <footer className="bg-white border-t border-slate-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Row: Centres and Courses */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Certified Courses */}
          <div>
            <h3 className="text-blue-600 font-bold text-sm uppercase tracking-wider mb-6">Certified Courses</h3>
            <ul className="space-y-3 text-slate-600 text-sm font-medium">
              <li>Full Stack Development with Gen AI</li>
              <li>Data Science & AI</li>
              <li>Data Analytics</li>
            </ul>
          </div>

          {/* Pune Centre */}
          <div>
            <h3 className="text-blue-600 font-bold text-sm uppercase tracking-wider mb-6">Pune Skill Centre</h3>
            <div className="mb-4">
              <h4 className="text-slate-900 font-bold text-xs uppercase mb-2">Courses Offered</h4>
              <ul className="space-y-1 text-slate-600 text-sm">
                <li>Full Stack Development</li>
                <li>Data Analytics</li>
              </ul>
            </div>
            <p className="text-slate-500 text-xs leading-relaxed mb-3">
              5th Floor, Aria Tower, above Punjab National Bank, Baner, Pune, Maharashtra 411045
            </p>
            <a href="#" className="text-blue-600 text-xs font-bold flex items-center gap-1 hover:underline">
              Get direction <Send size={12} className="rotate-45" />
            </a>
          </div>

          {/* Noida Centre */}
          <div>
            <h3 className="text-blue-600 font-bold text-sm uppercase tracking-wider mb-6">Noida Skill Centre</h3>
            <div className="mb-4">
              <h4 className="text-slate-900 font-bold text-xs uppercase mb-2">Courses Offered</h4>
              <ul className="space-y-1 text-slate-600 text-sm">
                <li>Full Stack Development</li>
                <li>Data Analytics</li>
              </ul>
            </div>
            <p className="text-slate-500 text-xs leading-relaxed mb-3">
              2nd Floor, D69, Block-D, Sector 2, Noida, Uttar Pradesh
            </p>
            <a href="#" className="text-blue-600 text-xs font-bold flex items-center gap-1 hover:underline">
              Get direction <Send size={12} className="rotate-45" />
            </a>
          </div>

          {/* Hyderabad Centre */}
          <div>
            <h3 className="text-blue-600 font-bold text-sm uppercase tracking-wider mb-6">Hyderabad Skill Centre</h3>
            <div className="mb-4">
              <h4 className="text-slate-900 font-bold text-xs uppercase mb-2">Courses Offered</h4>
              <ul className="space-y-1 text-slate-600 text-sm">
                <li>Full Stack Development</li>
                <li>Data Analytics</li>
              </ul>
            </div>
            <p className="text-slate-500 text-xs leading-relaxed mb-3">
              23, 24, Plot No: 25, 2nd Floor, Lumbini Avenue, Gachibowli, Hyderabad, Telangana 500032
            </p>
            <a href="#" className="text-blue-600 text-xs font-bold flex items-center gap-1 hover:underline">
              Get direction <Send size={12} className="rotate-45" />
            </a>
          </div>
        </div>

        {/* Bottom Row: Company Info and Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-t border-slate-100 pt-16 mb-12">
          {/* About Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-6 bg-blue-600 rotate-45 flex items-center justify-center rounded-sm">
                <div className="w-3 h-3 bg-white -rotate-45"></div>
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">CareerDCode</span>
            </div>
            <p className="text-slate-500 text-xs leading-relaxed">
              CareerDCode is an ed-tech startup run by IIT Delhi Alumni that provides a comprehensive state-of-the-art learning platform for Full Stack Web Development. Our industry-relevant curriculum is taught by top tech instructors and mentors, and our students have gone on to work at leading tech companies like Amazon, Salesforce, & Walmart, among others.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-blue-600 font-bold text-sm uppercase tracking-wider mb-6">Company</h3>
            <ul className="space-y-4 text-slate-600 text-sm font-medium">
              <li><a href="#" className="hover:text-blue-600">Become A Mentor</a></li>
              <li><a href="#" className="hover:text-blue-600">Careers</a></li>
              <li><a href="#" className="hover:text-blue-600">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-blue-600">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-600">Cancellation/Refund Policy</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-blue-600 font-bold text-sm uppercase tracking-wider mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-slate-600 text-sm">
                <Mail size={16} className="text-blue-600" />
                <span>contactus@careerdcode.com</span>
              </li>
              <li className="flex items-center gap-3 text-slate-600 text-sm">
                <Phone size={16} className="text-blue-600" />
                <span>+91 8595563221</span>
              </li>
              <li className="flex items-start gap-3 text-slate-600 text-sm">
                <MapPin size={16} className="text-blue-600 mt-0.5" />
                <span>Corporate Office - Sector 44, Gurugram</span>
              </li>
            </ul>
            <a href="#" className="text-blue-600 text-xs font-bold flex items-center gap-1 mt-4 hover:underline">
              Get direction <Send size={12} className="rotate-45" />
            </a>
            
            {/* Social Icons */}
            <div className="flex gap-4 mt-8">
              <a href="#" className="text-rose-500 hover:scale-110 transition-transform"><Instagram size={20} /></a>
              <a href="#" className="text-red-600 hover:scale-110 transition-transform"><Youtube size={20} /></a>
              <a href="#" className="text-blue-700 hover:scale-110 transition-transform"><Linkedin size={20} /></a>
              <a href="#" className="text-blue-600 hover:scale-110 transition-transform"><Facebook size={20} /></a>
              <a href="#" className="text-emerald-500 hover:scale-110 transition-transform"><MessageCircle size={20} /></a>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-4">
            <button 
              onClick={onBrochureClick}
              className="w-full py-3.5 bg-blue-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors shadow-lg shadow-blue-100"
            >
              <Download size={18} />
              Download Brochure
            </button>
            <button 
              onClick={onCallbackClick}
              className="w-full py-3.5 bg-blue-50 text-blue-600 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-100 transition-colors border border-blue-100"
            >
              <Phone size={18} />
              Request Callback
            </button>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-xs font-medium">
            © Copyright 2026. All Rights Reserved
          </p>
          <div className="flex items-center gap-2">
            <span className="text-slate-400 text-xs font-medium">Backed by</span>
            <div className="flex items-center gap-1 bg-[#FF6600] text-white px-2 py-1 rounded text-[10px] font-bold">
              <span className="text-lg leading-none">Y</span>
              <span>Combinator</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
