"use client";

import { useState } from 'react';
import Footer from './Footer';
import WhatsAppFAB from './WhatsAppFAB';
import MentorConnectFAB from './MentorConnectFAB';
import CallbackModal from './CallbackModal';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'callback' | 'brochure'>('callback');

  const openModal = (type: 'callback' | 'brochure' = 'callback') => {
    setModalType(type);
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);

  // We need to pass openModal to children. 
  // In Next.js, we can use a Context or just pass it down if we use a specific pattern.
  // For simplicity in this conversion, I'll use a simple Context.
  
  return (
    <div className="min-h-screen flex flex-col">
      {/* 
        In a real Next.js app, you'd use a Context Provider here 
        to make openModal available to all components.
      */}
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

import { createContext, useContext } from 'react';

interface ModalContextType {
  openModal: (type?: 'callback' | 'brochure') => void;
}

const ModalContext = createContext<ModalContextType>({
  openModal: () => {},
});

export const useModal = () => useContext(ModalContext);
