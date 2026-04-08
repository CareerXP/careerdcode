"use client";

import { useState } from 'react';
import { ChevronDown, PhoneCall, Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { useModal } from './ClientLayout';

export type NavbarCtaModal = 'callback' | 'campus-enquiry' | 'recruiter-enquiry';

type NavbarProps = {
  /** Which modal the primary nav CTA opens. Defaults to callback. */
  ctaModal?: NavbarCtaModal;
  /** Optional override for the desktop CTA button text */
  ctaLabelDesktop?: string;
  /** Optional override for the mobile CTA button text */
  ctaLabelMobile?: string;
};

export default function Navbar({
  ctaModal = 'callback',
  ctaLabelDesktop,
  ctaLabelMobile,
}: NavbarProps = {}) {
  const { openModal, openCampusEnquiryModal, openRecruiterEnquiryModal } =
    useModal();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Courses', href: '/#courses' },
    { name: 'About Us', href: '/about' },
    { name: 'Campus Connect', href: '/campus' },
    { name: 'Recruiters', href: '/recruiters' },
  ];

  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);

  function openPrimaryCta() {
    if (ctaModal === 'campus-enquiry') openCampusEnquiryModal();
    else if (ctaModal === 'recruiter-enquiry') openRecruiterEnquiryModal();
    else openModal('callback');
  }

  const defaultDesktopLabel =
    ctaModal === 'campus-enquiry'
      ? 'Campus enquiry'
      : ctaModal === 'recruiter-enquiry'
        ? 'Recruiter enquiry'
        : 'Callback';
  const defaultMobileLabel =
    ctaModal === 'callback' ? 'Request Callback' : defaultDesktopLabel;
  const desktopCtaLabel = ctaLabelDesktop ?? defaultDesktopLabel;
  const mobileCtaLabel = ctaLabelMobile ?? defaultMobileLabel;

  const moreLinks = [
    { name: 'FAQ', href: '/#faq' },
    { name: 'Mentors', href: '/#mentors' },
    { name: 'Reviews', href: '/#reviews' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-26">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center group shrink-0"
            aria-label="CareerXP home"
          >
            {/* Source is 1600×1600; use square bounds so object-contain doesn’t shrink the mark into a tiny strip */}
            <Image
              src="/logo.png"
              alt=""
              width={1600}
              height={1600}
              className="h-16 w-16 sm:h-22 sm:w-22 object-contain object-center"
              priority
              quality={95}
              sizes="(max-width: 640px) 48px, 56px"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-[12px] font-black text-slate-900 uppercase tracking-widest hover:text-indigo-600 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            
            {/* More Dropdown */}
            <div className="relative group/more">
              <button 
                onMouseEnter={() => setIsMoreMenuOpen(true)}
                onMouseLeave={() => setIsMoreMenuOpen(false)}
                className="flex items-center gap-1 text-[12px] font-black text-slate-900 uppercase tracking-widest hover:text-indigo-600 cursor-pointer transition-colors"
              >
                More <ChevronDown size={12} className={`transition-transform duration-300 ${isMoreMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {isMoreMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    onMouseEnter={() => setIsMoreMenuOpen(true)}
                    onMouseLeave={() => setIsMoreMenuOpen(false)}
                    className="absolute top-full left-0 mt-2 w-48 bg-white border border-slate-100 rounded-2xl shadow-2xl shadow-indigo-100 overflow-hidden"
                  >
                    <div className="py-2">
                      {moreLinks.map((link) => (
                        <Link
                          key={link.name}
                          href={link.href}
                          className="block px-6 py-4 text-[10px] font-black text-slate-900 uppercase tracking-widest hover:bg-slate-50 hover:text-indigo-600 transition-all"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Action Buttons & Mobile Toggle */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={openPrimaryCta}
              className="hidden sm:flex items-center gap-2 px-6 py-3 text-[10px] font-black uppercase tracking-widest text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200"
            >
              <PhoneCall size={14} />
              {desktopCtaLabel}
            </button>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-slate-600 hover:text-indigo-600 transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-4 text-[10px] font-black text-slate-900 uppercase tracking-[0.2em] hover:bg-slate-50 hover:text-indigo-600 rounded-xl transition-all"
                >
                  {link.name}
                </Link>
              ))}
              
              {/* Mobile More Links */}
              <div className="pt-2 pb-2 border-t border-slate-50">
                <p className="px-4 py-2 text-[8px] font-black text-slate-300 uppercase tracking-widest">More Resources</p>
                {moreLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-3 text-[10px] font-black text-slate-900 uppercase tracking-[0.2em] hover:text-indigo-600 transition-all"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <div className="pt-4 px-4">
                <button 
                  onClick={() => {
                    openPrimaryCta();
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 text-[10px] font-black uppercase tracking-widest text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200"
                >
                  <PhoneCall size={14} />
                  {mobileCtaLabel}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
