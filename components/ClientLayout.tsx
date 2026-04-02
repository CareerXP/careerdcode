"use client";

import { useState, createContext, useContext } from 'react';
import Footer from './Footer';
import WhatsAppFAB from './WhatsAppFAB';
import CallbackModal from './CallbackModal';
import RecruiterEnquiryModal from './RecruiterEnquiryModal';
import CampusEnquiryModal from './CampusEnquiryModal';
import ScrollToTop from '@/components/ScrollToTop';

interface ModalContextType {
  openModal: (
    type?: 'callback' | 'brochure',
    triggerPoint?: 'course-inquiry' | 'general'
  ) => void;
  openRecruiterEnquiryModal: () => void;
  openCampusEnquiryModal: () => void;
}

const ModalContext = createContext<ModalContextType>({
  openModal: () => {},
  openRecruiterEnquiryModal: () => {},
  openCampusEnquiryModal: () => {},
});

export const useModal = () => useContext(ModalContext);

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'callback' | 'brochure'>('callback');
  const [triggerPoint, setTriggerPoint] = useState<'course-inquiry' | 'general'>('general');
  const [isRecruiterModalOpen, setIsRecruiterModalOpen] = useState(false);

  const openRecruiterEnquiryModal = () => setIsRecruiterModalOpen(true);
  const closeRecruiterModal = () => setIsRecruiterModalOpen(false);
  const [isCampusModalOpen, setIsCampusModalOpen] = useState(false);
  const openCampusEnquiryModal = () => setIsCampusModalOpen(true);
  const closeCampusModal = () => setIsCampusModalOpen(false);

  const openModal = (
    type: 'callback' | 'brochure' = 'callback',
    tp: 'course-inquiry' | 'general' = 'general'
  ) => {
    setModalType(type);
    setTriggerPoint(tp);
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen flex flex-col">
      <ModalContext.Provider
        value={{ openModal, openRecruiterEnquiryModal, openCampusEnquiryModal }}
      >
        {children}
        
        <Footer 
          onCallbackClick={() => openModal('callback', 'general')} 
          onBrochureClick={() => openModal('brochure', 'general')}
        />

        <WhatsAppFAB />
        <ScrollToTop />

        <CallbackModal
          isOpen={isModalOpen}
          onClose={closeModal}
          type={modalType}
          triggerPoint={triggerPoint}
        />

        <RecruiterEnquiryModal
          isOpen={isRecruiterModalOpen}
          onClose={closeRecruiterModal}
        />

        <CampusEnquiryModal
          isOpen={isCampusModalOpen}
          onClose={closeCampusModal}
        />
      </ModalContext.Provider>
    </div>
  );
}
