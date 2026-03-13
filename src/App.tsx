import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import WhatsAppFAB from './components/WhatsAppFAB';
import CallbackModal from './components/CallbackModal';
import HomePage from './pages/HomePage';
import TestPage from './pages/TestPage';
import CourseDetails from './pages/CourseDetails';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'callback' | 'brochure'>('callback');

  const openModal = (type: 'callback' | 'brochure' = 'callback') => {
    setModalType(type);
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Routes>
          <Route path="/" element={<HomePage openModal={openModal} />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="/courses/:courseId" element={<CourseDetails />} />
        </Routes>
        
        <Footer 
          onCallbackClick={() => openModal('callback')} 
          onBrochureClick={() => openModal('brochure')}
        />

        <WhatsAppFAB />

        <CallbackModal isOpen={isModalOpen} onClose={closeModal} type={modalType} />
      </div>
    </Router>
  );
}

