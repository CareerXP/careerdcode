"use client";

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ImpactStats from '@/components/ImpactStats';
import StudentTransformations from '@/components/StudentTransformations';
import CourseSection from '@/components/CourseSection';
import TrustedCompanies from '@/components/TrustedCompanies';
import HiringPartnerReview from '@/components/HiringPartnerReview';
import StudentReviews from '@/components/StudentReviews';
import MentorSection from '@/components/MentorSection';
import FoundersSection from '@/components/FoundersSection';
import FAQSection from '@/components/FAQSection';
import ApplySection from '@/components/ApplySection';
// import SkillCentres from '@/components/SkillCentres';
import { useModal } from '@/components/ClientLayout';

export default function HomePage() {
  const { openModal } = useModal();

  return (
    <>
      <Navbar onCallbackClick={() => openModal('callback')} />
      <main className="flex-grow">
        <Hero />
        <ImpactStats />
        <StudentTransformations />
        <CourseSection />
        {/* <SkillCentres /> */}
        <TrustedCompanies />
        <HiringPartnerReview />
        <StudentReviews />
        <MentorSection />
        <FoundersSection />
        <FAQSection />
        <ApplySection onCallbackClick={() => openModal('callback')} />
      </main>
    </>
  );
}
