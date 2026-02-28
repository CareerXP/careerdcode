import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ImpactStats from '../components/ImpactStats';
import StudentTransformations from '../components/StudentTransformations';
import CourseSection from '../components/CourseSection';
import SkillCentres from '../components/SkillCentres';
import TrustedCompanies from '../components/TrustedCompanies';
import StudentReviews from '../components/StudentReviews';
import MentorSection from '../components/MentorSection';
import FoundersSection from '../components/FoundersSection';
import FAQSection from '../components/FAQSection';
import ApplySection from '../components/ApplySection';

interface HomePageProps {
  openModal: (type?: 'callback' | 'brochure') => void;
}

export default function HomePage({ openModal }: HomePageProps) {
  return (
    <>
      <Navbar onCallbackClick={() => openModal('callback')} />
      <main className="flex-grow">
        <Hero />
        <ImpactStats />
        <StudentTransformations />
        <CourseSection />
        <SkillCentres />
        <TrustedCompanies />
        <StudentReviews />
        <MentorSection />
        <FoundersSection />
        <FAQSection />
        <ApplySection onCallbackClick={() => openModal('callback')} />
      </main>
    </>
  );
}
