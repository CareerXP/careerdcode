import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ImpactStats from './components/ImpactStats';
import StudentTransformations from './components/StudentTransformations';
import CourseSection from './components/CourseSection';
import SkillCentres from './components/SkillCentres';
import TrustedCompanies from './components/TrustedCompanies';
import StudentReviews from './components/StudentReviews';
import MentorSection from './components/MentorSection';
import FoundersSection from './components/FoundersSection';
import FAQSection from './components/FAQSection';
import ApplySection from './components/ApplySection';
import Footer from './components/Footer';
import WhatsAppFAB from './components/WhatsAppFAB';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
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
        <ApplySection />
      </main>
      
      <Footer />

      <WhatsAppFAB />
    </div>
  );
}
