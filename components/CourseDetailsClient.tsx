"use client";

import {
  ArrowRight,
  BadgeCheck,
  Banknote,
  Building2,
  CheckCircle2,
  ChevronDown,
  Download,
  Target,
  TrendingUp,
} from 'lucide-react';
import { Course } from '@/data/courses';
import { INDIAN_STATES_AND_UTS } from '@/data/indianStates';
import TrustedCompanies from '@/components/TrustedCompanies';
import PlacedStudents from '@/components/PlacedStudents';
import CurriculumSection from '@/components/CurriculumSection';
import CourseFAQ from '@/components/CourseFAQ';
import { useEffect, useState } from 'react';
import { useModal } from '@/components/ClientLayout';
import Navbar from '@/components/Navbar';
import MentorSection from './MentorSection';

const rotatingWords = [
  'Knowledge',
  'Support',
  'Techniques',
  'Guidance',
  'Mentorship',
  'Success'
];

interface CourseDetailsClientProps {
  course: Course;
  nextBatchDate?: string;
}

const COURSE_APPLY_WEBHOOK =
  'https://n8n.srv1534167.hstgr.cloud/webhook/02e7e7d0-fade-4993-9d44-659a7c97c62b';

const IN_COUNTRY_CODE = '+91';

const DEGREE_OPTIONS = [
  'BE',
  'B.Tech',
  'ME',
  'M.Tech',
  'BCA',
  'MCA',
  'B.Sc',
  'Diploma',
  'BBA',
  'MBA',
  'Others',
] as const;

const GRADUATION_YEARS = Array.from({ length: 12 }, (_, i) => String(2015 + i));

const JOB_STATUS_OPTIONS = [
  'Working Professional',
  'Student',
  'Graduated Not Employed',
] as const;

function isValidEmail(value: string): boolean {
  const t = value.trim();
  if (!t) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t);
}

/** Local 10-digit mobile: strips non-digits, optional leading 91 / 0, caps at 10. */
function normalizeIndianMobile(input: string): string {
  let d = input.replace(/\D/g, '');
  if (d.length >= 12 && d.startsWith('91')) d = d.slice(2);
  if (d.length === 11 && d.startsWith('0')) d = d.slice(1);
  return d.slice(0, 10);
}

function validateCourseApply(
  name: string,
  email: string,
  phoneDigits: string,
  state: string,
  degree: string,
  graduationYear: string,
  jobStatus: string
): string | null {
  const n = name.trim();
  if (n.length < 2) {
    return 'Please enter your full name (at least 2 characters).';
  }
  if (n.length > 120) {
    return 'Name is too long.';
  }
  if (!isValidEmail(email)) {
    return 'Please enter a valid email address.';
  }
  if (!state) {
    return 'Please select your state.';
  }
  if (!degree) {
    return 'Please select your degree.';
  }
  if (!graduationYear) {
    return 'Please select your graduation year.';
  }
  if (!jobStatus) {
    return 'Please select your job status.';
  }
  if (!phoneDigits) {
    return 'Please enter your 10-digit mobile number.';
  }
  if (phoneDigits.length !== 10) {
    return 'Enter a valid 10-digit Indian mobile number.';
  }
  if (!/^[6-9]\d{9}$/.test(phoneDigits)) {
    return 'Mobile number must be 10 digits and start with 6–9.';
  }
  return null;
}

export default function CourseDetailsClient({ course, nextBatchDate }: CourseDetailsClientProps) {
  const { openModal } = useModal();
  const [wordIndex, setWordIndex] = useState(0);

  const [applyName, setApplyName] = useState('');
  const [applyEmail, setApplyEmail] = useState('');
  const [applyPhone, setApplyPhone] = useState('');
  const [applyState, setApplyState] = useState('');
  const [applyDegree, setApplyDegree] = useState('');
  const [applyGraduationYear, setApplyGraduationYear] = useState('');
  const [applyJobStatus, setApplyJobStatus] = useState('');
  const [applyStatus, setApplyStatus] = useState<
    | { kind: 'idle' }
    | { kind: 'loading' }
    | { kind: 'success'; message: string }
    | { kind: 'error'; message: string }
  >({ kind: 'idle' });

  async function onApplySubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (applyStatus.kind === 'loading') return;

    const name = applyName.trim();
    const number = normalizeIndianMobile(applyPhone);
    const validationError = validateCourseApply(
      name,
      applyEmail,
      number,
      applyState,
      applyDegree,
      applyGraduationYear,
      applyJobStatus
    );
    if (validationError) {
      setApplyStatus({ kind: 'error', message: validationError });
      return;
    }

    setApplyStatus({ kind: 'loading' });

    try {
      const res = await fetch(COURSE_APPLY_WEBHOOK, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source: 'CourseDetailsApplyForm',
          course: {
            id: course.id,
            title: course.title,
            category: course.category,
          },
          name,
          email: applyEmail.trim(),
          whatsapp: {
            countryCode: IN_COUNTRY_CODE,
            number,
            full: `${IN_COUNTRY_CODE}${number}`,
          },
          state: applyState,
          degree: applyDegree,
          graduationYear: applyGraduationYear,
          jobStatus: applyJobStatus,
          submittedAt: new Date().toISOString(),
        }),
      });

      if (!res.ok) {
        throw new Error(`Request failed (${res.status})`);
      }

      setApplyStatus({
        kind: 'success',
        message: "Thanks! We'll reach out shortly.",
      });
      setApplyName('');
      setApplyEmail('');
      setApplyPhone('');
      setApplyState('');
      setApplyDegree('');
      setApplyGraduationYear('');
      setApplyJobStatus('');
    } catch (err) {
      const message =
        err instanceof Error ? err.message : 'Something went wrong. Please try again.';
      setApplyStatus({ kind: 'error', message });
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2500);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen min-w-0 bg-white">
      <div className="sticky top-0 z-50">
        {/* Top Banner */}
        <div className="bg-slate-900 text-white text-center py-2 text-[10px] font-black uppercase tracking-[0.2em] shadow-md">
          Next batch starting from {nextBatchDate ?? '8 March 2026'}
        </div>
        <Navbar />
      </div>
      
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden border-b border-slate-100">
        {/* Technical Grid Background */}
        <div className="absolute inset-0 -z-10 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:32px_32px]"></div>
        
        <div className="relative z-10 mx-auto max-w-7xl min-w-0 px-4 sm:px-6 lg:px-8">
          <div className="grid min-w-0 grid-cols-1 gap-16 items-start lg:grid-cols-12">
            
            {/* Left Content */}
            <div className="min-w-0 lg:col-span-7">
              <div className="min-w-0 space-y-10">
                <div className="min-w-0">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-600 font-display mb-6 block">
                    PROFESSIONAL CERTIFICATION
                  </span>
                  <h1 className="mb-8 break-words text-4xl font-bold leading-[0.9] tracking-tight text-slate-900 font-display sm:text-5xl lg:text-8xl">
                    {course.title.split('-')[0]} <br />
                    <span className="text-indigo-600">Full Stack</span> <br />
                    Development.
                  </h1>
                </div>
                
                <div className="flex min-w-0 items-start gap-4 sm:gap-6">
                  <div
                    className="mt-[0.65em] h-px w-10 shrink-0 bg-slate-900 sm:w-12"
                    aria-hidden
                  />
                  <h2 className="min-w-0 flex-1 break-words text-xl font-medium leading-snug text-slate-600 italic font-serif lg:text-2xl">
                    Master {course.techStack.slice(0, 4).join(', ')} & more
                  </h2>
                </div>

                <div className="flex min-w-0 max-w-xl items-start gap-6 rounded-2xl border border-slate-100 bg-slate-50 p-6 sm:p-8">
                  <div className="w-12 h-12 shrink-0 rounded-xl border border-slate-100 bg-white shadow-sm flex items-center justify-center">
                    <CheckCircle2 className="text-indigo-600" size={24} />
                  </div>
                  <p className="min-w-0 text-base font-medium leading-relaxed text-slate-600 sm:text-lg">
                    Curriculum designed and taught by Alumni from <span className="text-slate-900 font-bold">IITs & Leading Tech Companies</span>.
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-4 sm:gap-6 pt-10">
                  <button 
                    onClick={() => openModal('brochure', 'course-inquiry')}
                    className="w-full sm:w-auto px-10 py-5 bg-slate-900 text-white rounded-2xl font-bold font-display text-xs uppercase tracking-widest hover:bg-indigo-600 transition-all flex items-center justify-center gap-3 shadow-2xl shadow-slate-200 group"
                  >
                    <Download size={18} className="group-hover:translate-y-1 transition-transform" />
                    Download Syllabus
                  </button>
                  <a 
                    href="#curriculum"
                    className="w-full sm:w-auto px-10 py-5 bg-white text-slate-900 border border-slate-200 rounded-2xl font-bold font-display text-xs uppercase tracking-widest hover:bg-slate-50 transition-all flex items-center justify-center gap-3 shadow-2xl shadow-slate-100 group"
                  >
                    Explore Curriculum
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Right Content: Form Card */}
            <div className="mx-auto w-full min-w-0 max-w-xl lg:col-span-5 lg:mx-0 lg:max-w-none">
              <div className="relative min-w-0 rounded-[32px] border border-slate-100 bg-white p-6 shadow-2xl shadow-slate-200/50 sm:p-10 lg:p-12">
                <div className="absolute top-0 right-10 transform -translate-y-1/2">
                  <div className="bg-indigo-600 text-white px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-lg">
                    FREE DEMO
                  </div>
                </div>

                <div className="mb-10">
                  <h3 className="text-3xl font-bold text-slate-900 font-display tracking-tight mb-3">
                    Reserve Your <span className="text-indigo-600">Seat.</span>
                  </h3>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed">
                    Get access to exclusive lectures & assignments curated by industry veterans.
                  </p>
                </div>

                <form className="space-y-5" onSubmit={onApplySubmit}>
                  <div className="space-y-1.5">
                    <label htmlFor="course-apply-name" className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                    <input 
                      id="course-apply-name"
                      type="text" 
                      name="name"
                      value={applyName}
                      onChange={(e) => {
                        setApplyName(e.target.value);
                        if (applyStatus.kind === 'error') setApplyStatus({ kind: 'idle' });
                      }}
                      autoComplete="name"
                      placeholder="e.g. John Doe"
                      className="w-full bg-slate-50 border border-slate-100 rounded-xl py-4 px-5 text-slate-900 focus:outline-none focus:border-indigo-500 transition-colors font-medium"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="course-apply-email" className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Email</label>
                    <input
                      id="course-apply-email"
                      type="email"
                      name="email"
                      value={applyEmail}
                      onChange={(e) => {
                        setApplyEmail(e.target.value);
                        if (applyStatus.kind === 'error') setApplyStatus({ kind: 'idle' });
                      }}
                      autoComplete="email"
                      inputMode="email"
                      placeholder="you@example.com"
                      className="w-full bg-slate-50 border border-slate-100 rounded-xl py-4 px-5 text-slate-900 focus:outline-none focus:border-indigo-500 transition-colors font-medium"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="course-apply-phone" className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Phone Number</label>
                    <div className="flex gap-3">
                      <div
                        className="flex shrink-0 items-center gap-2 rounded-xl border border-slate-100 bg-slate-50 px-3 sm:px-4 py-4"
                        title="India (+91)"
                      >
                        <span className="text-xl leading-none" role="img" aria-label="India">
                          🇮🇳
                        </span>
                        <span className="text-sm font-semibold text-slate-700 tabular-nums">{IN_COUNTRY_CODE}</span>
                      </div>
                      <input 
                        id="course-apply-phone"
                        type="tel" 
                        name="phone"
                        inputMode="numeric"
                        value={applyPhone}
                        onChange={(e) => {
                          setApplyPhone(normalizeIndianMobile(e.target.value));
                          if (applyStatus.kind === 'error') setApplyStatus({ kind: 'idle' });
                        }}
                        autoComplete="tel-national"
                        maxLength={10}
                        placeholder="9876543210"
                        className="min-w-0 flex-1 bg-slate-50 border border-slate-100 rounded-xl py-4 px-5 text-slate-900 focus:outline-none focus:border-indigo-500 transition-colors font-medium tabular-nums"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="course-apply-state" className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">State</label>
                    <div className="relative">
                      <select
                        id="course-apply-state"
                        name="state"
                        value={applyState}
                        onChange={(e) => {
                          setApplyState(e.target.value);
                          if (applyStatus.kind === 'error') setApplyStatus({ kind: 'idle' });
                        }}
                        className={`w-full appearance-none bg-slate-50 border border-slate-100 rounded-xl py-4 px-5 pr-10 text-slate-900 focus:outline-none focus:border-indigo-500 transition-colors font-medium ${
                          applyState ? '' : 'text-slate-400'
                        }`}
                      >
                        <option value="" disabled>
                          Select state / UT
                        </option>
                        {INDIAN_STATES_AND_UTS.map((s) => (
                          <option key={s} value={s} className="text-slate-900">
                            {s}
                          </option>
                        ))}
                      </select>
                      <ChevronDown
                        className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                        aria-hidden
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="course-apply-degree" className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Degree</label>
                    <div className="relative">
                      <select
                        id="course-apply-degree"
                        name="degree"
                        value={applyDegree}
                        onChange={(e) => {
                          setApplyDegree(e.target.value);
                          if (applyStatus.kind === 'error') setApplyStatus({ kind: 'idle' });
                        }}
                        className={`w-full appearance-none bg-slate-50 border border-slate-100 rounded-xl py-4 px-5 pr-10 text-slate-900 focus:outline-none focus:border-indigo-500 transition-colors font-medium ${
                          applyDegree ? '' : 'text-slate-400'
                        }`}
                      >
                        <option value="" disabled>
                          Select degree
                        </option>
                        {DEGREE_OPTIONS.map((d) => (
                          <option key={d} value={d} className="text-slate-900">
                            {d}
                          </option>
                        ))}
                      </select>
                      <ChevronDown
                        className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                        aria-hidden
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="course-apply-grad-year" className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Graduation Year</label>
                    <div className="relative">
                      <select
                        id="course-apply-grad-year"
                        name="graduationYear"
                        value={applyGraduationYear}
                        onChange={(e) => {
                          setApplyGraduationYear(e.target.value);
                          if (applyStatus.kind === 'error') setApplyStatus({ kind: 'idle' });
                        }}
                        className={`w-full appearance-none bg-slate-50 border border-slate-100 rounded-xl py-4 px-5 pr-10 text-slate-900 focus:outline-none focus:border-indigo-500 transition-colors font-medium ${
                          applyGraduationYear ? '' : 'text-slate-400'
                        }`}
                      >
                        <option value="" disabled>
                          Select year
                        </option>
                        {GRADUATION_YEARS.map((y) => (
                          <option key={y} value={y} className="text-slate-900">
                            {y}
                          </option>
                        ))}
                      </select>
                      <ChevronDown
                        className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                        aria-hidden
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="course-apply-job-status" className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Job status</label>
                    <div className="relative">
                      <select
                        id="course-apply-job-status"
                        name="jobStatus"
                        value={applyJobStatus}
                        onChange={(e) => {
                          setApplyJobStatus(e.target.value);
                          if (applyStatus.kind === 'error') setApplyStatus({ kind: 'idle' });
                        }}
                        className={`w-full appearance-none bg-slate-50 border border-slate-100 rounded-xl py-4 px-5 pr-10 text-slate-900 focus:outline-none focus:border-indigo-500 transition-colors font-medium ${
                          applyJobStatus ? '' : 'text-slate-400'
                        }`}
                      >
                        <option value="" disabled>
                          Select job status
                        </option>
                        {JOB_STATUS_OPTIONS.map((j) => (
                          <option key={j} value={j} className="text-slate-900">
                            {j}
                          </option>
                        ))}
                      </select>
                      <ChevronDown
                        className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                        aria-hidden
                      />
                    </div>
                  </div>

                  {applyStatus.kind === 'error' && (
                    <p className="text-xs font-bold text-red-600">{applyStatus.message}</p>
                  )}
                  {applyStatus.kind === 'success' && (
                    <p className="text-xs font-bold text-emerald-700">{applyStatus.message}</p>
                  )}

                  <button
                    type="submit"
                    disabled={applyStatus.kind === 'loading'}
                    className="w-full py-5 bg-indigo-600 text-white rounded-xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 group mt-4 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {applyStatus.kind === 'loading' ? (
                      'Submitting...'
                    ) : (
                      <>
                        Apply Now <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>

                  <p className="text-[10px] text-center text-slate-400 leading-relaxed font-medium pt-4">
                    By clicking &apos;Apply Now&apos;, you agree to our <br />
                    <a href="/terms" className="text-indigo-600 hover:underline font-bold">Terms & Conditions</a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes strip — overlaps hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
        <div className="rounded-3xl border border-slate-200/90 bg-white shadow-[0_24px_64px_-12px_rgba(15,23,42,0.18)] overflow-hidden ring-1 ring-slate-900/[0.04]">
          <div className="flex flex-col gap-1 border-b border-slate-100 bg-gradient-to-r from-slate-50 via-white to-indigo-50/40 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <p className="text-[10px] font-black uppercase tracking-[0.28em] text-indigo-600 font-display">
              Placement &amp; career outcomes
            </p>
            <p className="text-xs font-medium text-slate-500">
              Numbers learners use to plan their next move.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-slate-100">
            {(
              [
                {
                  label: 'Highest package',
                  value: '18 LPA',
                  Icon: Banknote,
                  accent: 'text-rose-600',
                  surface: 'bg-rose-50',
                },
                {
                  label: 'Partner companies',
                  value: '1000+',
                  Icon: Building2,
                  accent: 'text-amber-600',
                  surface: 'bg-amber-50',
                },
                {
                  label: 'Job assistance',
                  value: '100%',
                  Icon: BadgeCheck,
                  accent: 'text-indigo-600',
                  surface: 'bg-indigo-50',
                },
                {
                  label: 'Avg CTC',
                  value: '8 LPA',
                  Icon: TrendingUp,
                  accent: 'text-emerald-600',
                  surface: 'bg-emerald-50',
                },
                {
                  label: 'Placement rate',
                  value: '96%',
                  Icon: Target,
                  accent: 'text-violet-600',
                  surface: 'bg-violet-50',
                },
              ] as const
            ).map(({ label, value, Icon, accent, surface }) => (
              <div
                key={label}
                className="group flex items-center gap-4 bg-white px-5 py-5 sm:px-6 sm:py-7 transition-colors hover:bg-slate-50/90"
              >
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${surface} shadow-sm ring-1 ring-black/[0.04] transition-transform duration-300 group-hover:scale-[1.04]`}
                >
                  <Icon className={`h-5 w-5 ${accent}`} strokeWidth={2.25} aria-hidden />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-display text-2xl font-bold tabular-nums tracking-tight text-slate-900 sm:text-[1.65rem] leading-none">
                    {value}
                  </p>
                  <p className="mt-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                    {label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      
      <MentorSection />

      {/* Hiring Partners Section */}
      <div id="partners" className="bg-white border-t border-slate-50">
        <TrustedCompanies />
      </div>

      {/* Placed Students Section */}
      {/* <PlacedStudents /> */}

      {/* Technologies Section */}
      <section className="py-32 bg-white overflow-hidden border-t border-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20">
            <div className="mb-4">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-600 font-display">
                TECHNICAL STACK
              </span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 font-display tracking-tight">
              Technologies You'll <br />
              <span className="text-indigo-600">Master.</span>
            </h2>
          </div>
          
          <div className="rounded-[28px] border border-slate-200/90 bg-gradient-to-b from-slate-50/80 via-white to-indigo-50/30 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)] ring-1 ring-slate-900/[0.04] sm:p-6 lg:p-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4">
              {course.techStack.map((tech) => (
                <div
                  key={tech}
                  className="group relative flex flex-col items-center justify-center gap-3.5 overflow-hidden rounded-2xl border border-slate-200/70 bg-white/90 px-3 py-6 shadow-sm backdrop-blur-[2px] transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200/90 hover:bg-white hover:shadow-[0_20px_48px_-28px_rgba(79,70,229,0.35)] sm:gap-4 sm:px-4 sm:py-8"
                >
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-indigo-400/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_-20%,rgba(99,102,241,0.12),transparent_55%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50 ring-1 ring-slate-100 transition-all duration-300 group-hover:scale-110 group-hover:bg-indigo-50/80 group-hover:ring-indigo-100 sm:h-14 sm:w-14">
                    <img
                      src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech}/${tech}-original.svg`}
                      alt=""
                      className="h-8 w-8 object-contain grayscale transition-all duration-300 group-hover:grayscale-0 sm:h-9 sm:w-9"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech}/${tech}-plain.svg`;
                      }}
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <span className="relative max-w-full truncate px-1 text-center text-[10px] font-black uppercase tracking-[0.16em] text-slate-500 transition-colors duration-300 group-hover:text-indigo-600 font-display">
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <CurriculumSection curriculum={course.curriculum} />

      {/* FAQ Section */}
      <div id="faq">
        <CourseFAQ faqs={course.faqs} />
      </div>
    </div>
  );
}
