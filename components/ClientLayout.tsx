"use client";

import { useState, createContext, useContext } from 'react';
import Footer from './Footer';
import WhatsAppFAB from './WhatsAppFAB';
import CallbackModal from './CallbackModal';
import ScrollToTop from '@/components/ScrollToTop';

interface ModalContextType {
  openModal: (
    type?: 'callback' | 'brochure',
    triggerPoint?: 'course-inquiry' | 'general'
  ) => void;
}

const ModalContext = createContext<ModalContextType>({
  openModal: () => {},
});

export const useModal = () => useContext(ModalContext);

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'callback' | 'brochure'>('callback');
  const [triggerPoint, setTriggerPoint] = useState<'course-inquiry' | 'general'>('general');

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
      <ModalContext.Provider value={{ openModal }}>
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
      </ModalContext.Provider>
    </div>
  );
}
