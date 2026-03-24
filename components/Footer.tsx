import { Mail, Phone, MapPin, Send, Instagram, Youtube, Linkedin, Facebook, MessageCircle, Download } from 'lucide-react';
import Link from 'next/link';

interface FooterProps {
  onCallbackClick: () => void;
  onBrochureClick: () => void;
}

export default function Footer({ onCallbackClick, onBrochureClick }: FooterProps) {
  return (
    <footer className="relative bg-white border-t border-slate-100 pt-32 pb-16 overflow-hidden">
      {/* Technical Grid Background */}
      <div className="absolute inset-0 -z-10 opacity-[0.02] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:32px_32px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-32">
          {/* Brand & Mission */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4 mb-10">
              <Link href="/" className="flex items-center gap-4">
                <div className="w-10 h-10 bg-indigo-600 rotate-45 flex items-center justify-center rounded-sm shadow-xl shadow-indigo-100">
                  <div className="w-5 h-5 bg-white -rotate-45"></div>
                </div>
                <span className="text-3xl font-bold tracking-tighter text-slate-900 font-display">CareerXP.</span>
              </Link>
            </div>
            <p className="text-xl text-slate-500 leading-relaxed mb-12 font-medium max-w-md">
              Empowering the next generation of tech leaders through industry-aligned curriculum and elite mentorship from IIT Delhi alumni.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Instagram, color: 'hover:text-rose-500' },
                { icon: Youtube, color: 'hover:text-red-600' },
                { icon: Linkedin, color: 'hover:text-indigo-700' },
                { icon: Facebook, color: 'hover:text-indigo-600' },
                { icon: MessageCircle, color: 'hover:text-indigo-500' }
              ].map((social, idx) => (
                <a key={idx} href="#" className={`w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 transition-all hover:bg-white hover:shadow-2xl hover:shadow-slate-200 ${social.color}`}>
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Grids */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-600 font-display mb-10 block">
                COURSES
              </span>
              <ul className="space-y-5 text-slate-600 text-sm font-bold">
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Full Stack Dev</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Data Science & AI</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Data Analytics</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Web 3.0</a></li>
              </ul>
            </div>

            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-600 font-display mb-10 block">
                COMPANY
              </span>
              <ul className="space-y-5 text-slate-600 text-sm font-bold">
                <li><Link href="/about" className="hover:text-indigo-600 transition-colors">About Us</Link></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Mentors</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Privacy Policy</a></li>
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-600 font-display mb-10 block">
                SUPPORT
              </span>
              <div className="space-y-8">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">EMAIL</span>
                  <a href="mailto:contactus@careerxp.com" className="text-sm font-bold text-slate-900 hover:text-indigo-600 transition-colors">contactus@careerxp.com</a>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">PHONE</span>
                  <a href="tel:+918595563221" className="text-sm font-bold text-slate-900 hover:text-indigo-600 transition-colors">+91 8595563221</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Bar */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          <button 
            onClick={onBrochureClick}
            className="group relative overflow-hidden bg-indigo-600 text-white rounded-2xl py-8 px-10 flex items-center justify-between transition-all hover:bg-indigo-700 shadow-2xl shadow-indigo-200"
          >
            <div className="relative z-10 text-left">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] opacity-60 mb-2 block">RESOURCES</span>
              <span className="text-xl font-bold font-display">Download Brochure</span>
            </div>
            <Download className="relative z-10 group-hover:translate-y-1 transition-transform" size={32} />
            <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors"></div>
          </button>

          <button 
            onClick={onCallbackClick}
            className="group relative overflow-hidden bg-white border border-slate-200 text-slate-900 rounded-2xl py-8 px-10 flex items-center justify-between transition-all hover:border-indigo-600 hover:shadow-2xl hover:shadow-indigo-50"
          >
            <div className="relative z-10 text-left">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-600 mb-2 block">ADMISSIONS</span>
              <span className="text-xl font-bold font-display">Request Callback</span>
            </div>
            <Phone className="relative z-10 group-hover:rotate-12 transition-transform text-indigo-600" size={32} />
            <div className="absolute bottom-0 left-0 -ml-8 -mb-8 w-32 h-32 bg-indigo-50 rounded-full blur-3xl group-hover:bg-indigo-100 transition-colors"></div>
          </button>
        </div>

        {/* Bottom Bar */}
        <div className="pt-16 border-t border-slate-100 flex flex-col lg:flex-row justify-between items-center gap-12">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
              © 2026 CareerXP. All Rights Reserved
            </p>
            <div className="flex gap-8">
              <a href="#" className="text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-indigo-600 transition-colors">Terms</a>
              <a href="#" className="text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-indigo-600 transition-colors">Privacy</a>
              <a href="#" className="text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-indigo-600 transition-colors">Refunds</a>
            </div>
          </div>
          
          <div className="flex items-center gap-6 px-8 py-4 bg-slate-50 rounded-3xl border border-slate-100">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">BACKED BY</span>
            <div className="flex items-center gap-2 bg-[#FF6600] text-white px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-tighter shadow-lg shadow-orange-100">
              <span className="text-2xl leading-none">Y</span>
              <span>Combinator</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
