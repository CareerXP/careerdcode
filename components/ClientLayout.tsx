"use client";

import { useState, createContext, useContext } from 'react';
import Footer from './Footer';
import WhatsAppFAB from './WhatsAppFAB';
import MentorConnectFAB from './MentorConnectFAB';
import CallbackModal from './CallbackModal';

interface ModalContextType {
  openModal: (type?: 'callback' | 'brochure') => void;
}

const ModalContext = createContext<ModalContextType>({
  openModal: () => {},
});

export const useModal = () => useContext(ModalContext);

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'callback' | 'brochure'>('callback');

  const openModal = (type: 'callback' | 'brochure' = 'callback') => {
    setModalType(type);
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen flex flex-col">
      <ModalContext.Provider value={{ openModal }}>
        {children}
        
        <Footer 
          onCallbackClick={() => openModal('callback')} 
          onBrochureClick={() => openModal('brochure')}
        />

        <WhatsAppFAB />
        <MentorConnectFAB />

        <CallbackModal isOpen={isModalOpen} onClose={closeModal} type={modalType} />
      </ModalContext.Provider>
    </div>
  );
}
