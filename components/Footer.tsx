import { Mail, Phone, MapPin, Send, Instagram, Youtube, Linkedin, Facebook, MessageCircle, Download } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { coursesData } from '@/data/courses';

interface FooterProps {
  onCallbackClick: () => void;
  onBrochureClick: () => void;
  hideCTA?: boolean;
}

export default function Footer({ onCallbackClick, onBrochureClick,hideCTA = false }: FooterProps) {
  return (
    <footer className="relative bg-white border-t border-slate-100 pt-32 pb-16 overflow-hidden">
      {/* Technical Grid Background */}
      <div className="absolute inset-0 -z-10 opacity-[0.02] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:32px_32px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-32">
          {/* Brand & Mission */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4 mb-10">
              <Link
                href="/"
                className="inline-flex items-center shrink-0"
                aria-label="CareerXP home"
              >
                <Image
                  src="/logo.png"
                  alt=""
                  width={1600}
                  height={1600}
                  className="h-14 w-14 sm:h-16 sm:w-16 object-contain object-left"
                  quality={95}
                  sizes="(max-width: 640px) 56px, 64px"
                />
              </Link>
            </div>
            <p className="text-xl text-slate-500 leading-relaxed mb-12 font-medium max-w-md">
            From learning skills to landing offers — we bridge the gap.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Instagram, color: 'hover:text-rose-500', href: 'https://www.instagram.com/careerxp_/' },
                { icon: Linkedin, color: 'hover:text-indigo-700', href: ' https://www.linkedin.com/in/career-xp-5114a63ba' },
                { icon: Facebook, color: 'hover:text-indigo-600', href: 'https://www.facebook.com/profile.php?id=61577590602666' },
              ].map((social, idx) => (
                <a key={idx} href={social.href} className={`w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 transition-all hover:bg-white hover:shadow-2xl hover:shadow-slate-200 ${social.color}`} target="_blank" rel="noopener noreferrer">
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
                {coursesData.map((course) => (
                  <li key={course.id}>
                    <Link
                      href={`/courses/${course.id}`}
                      className="hover:text-indigo-600 transition-colors"
                    >
                      {course.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-600 font-display mb-10 block">
                COMPANY
              </span>
              <ul className="space-y-5 text-slate-600 text-sm font-bold">
                <li><Link href="/about" className="hover:text-indigo-600 transition-colors">About Us</Link></li>
                <li><a href="#mentors" className="hover:text-indigo-600 transition-colors">Mentors</a></li>
                <li><Link href="/careers" className="hover:text-indigo-600 transition-colors">Careers</Link></li>
                <li><Link href="/privacy" className="hover:text-indigo-600 transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-600 font-display mb-10 block">
                SUPPORT
              </span>
              <div className="space-y-8">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">EMAIL</span>
                  <a href="mailto:support@careerxp.in" className="text-sm font-bold text-slate-900 hover:text-indigo-600 transition-colors">support@careerxp.in</a>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">PHONE</span>
                  <a href="tel:+917980444047" className="text-sm font-bold text-slate-900 hover:text-indigo-600 transition-colors">+91 7980444047</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Bar */}
       {!hideCTA && <div className="grid md:grid-cols-2 gap-8 mb-24">
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
        </div>}

        {/* Bottom Bar */}
        <div className="pt-16 border-t border-slate-100 flex flex-col lg:flex-row justify-between items-center gap-12">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
              © 2026 CareerXP. All Rights Reserved
            </p>
            <div className="flex gap-8">
              <Link href="/terms" className="text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-indigo-600 transition-colors">Terms</Link>
              <Link href="/privacy" className="text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-indigo-600 transition-colors">Privacy</Link>
              <Link href="/refunds" className="text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-indigo-600 transition-colors">Refunds</Link>
            </div>
          </div>
          
         
        </div>
      </div>
    </footer>
  );
}
