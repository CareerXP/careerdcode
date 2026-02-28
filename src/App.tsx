import { useState } from 'react';
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
import CallbackModal from './components/CallbackModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'callback' | 'brochure'>('callback');

  const openModal = (type: 'callback' | 'brochure' = 'callback') => {
    setModalType(type);
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen flex flex-col">
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
      
      <Footer 
        onCallbackClick={() => openModal('callback')} 
        onBrochureClick={() => openModal('brochure')}
      />

      <WhatsAppFAB />

      <CallbackModal isOpen={isModalOpen} onClose={closeModal} type={modalType} />
    </div>
  );
}
