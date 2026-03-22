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

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ImpactStats />
        <StudentTransformations />
        <CourseSection />
        <TrustedCompanies />
        <HiringPartnerReview />
        <StudentReviews />
        <MentorSection />
        <FoundersSection />
        <FAQSection />
        <ApplySection />
      </main>
    </>
  );
}
