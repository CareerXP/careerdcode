import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimationControls } from 'motion/react';
import { Download } from 'lucide-react';

const students = [
  { id: 1, name: 'Student 1', image: 'https://picsum.photos/seed/s1/200/250', company: 'Google' },
  { id: 2, name: 'Student 2', image: 'https://picsum.photos/seed/s2/200/250', company: 'Amazon' },
  { id: 3, name: 'Student 3', image: 'https://picsum.photos/seed/s3/200/250', company: 'Microsoft' },
  { id: 4, name: 'Student 4', image: 'https://picsum.photos/seed/s4/200/250', company: 'Meta' },
  { id: 5, name: 'Student 5', image: 'https://picsum.photos/seed/s5/200/250', company: 'Netflix' },
  { id: 6, name: 'Student 6', image: 'https://picsum.photos/seed/s6/200/250', company: 'Apple' },
  { id: 7, name: 'Student 7', image: 'https://picsum.photos/seed/s7/200/250', company: 'Adobe' },
  { id: 8, name: 'Student 8', image: 'https://picsum.photos/seed/s8/200/250', company: 'Uber' },
  { id: 9, name: 'Student 9', image: 'https://picsum.photos/seed/s9/200/250', company: 'Zomato' },
  { id: 10, name: 'Student 10', image: 'https://picsum.photos/seed/s10/200/250', company: 'Swiggy' },
  { id: 11, name: 'Student 11', image: 'https://picsum.photos/seed/s11/200/250', company: 'Paytm' },
  { id: 12, name: 'Student 12', image: 'https://picsum.photos/seed/s12/200/250', company: 'Razorpay' },
  { id: 13, name: 'Student 13', image: 'https://picsum.photos/seed/s13/200/250', company: 'Cred' },
  { id: 14, name: 'Student 14', image: 'https://picsum.photos/seed/s14/200/250', company: 'PhonePe' },
];

const successStories = [
  { id: 1, name: 'Shantanu Pawar', background: 'Mechanical', role: 'Product Engineer', image: 'https://picsum.photos/seed/shantanu/300/400' },
  { id: 2, name: 'Ansh Jain', background: 'Civil', role: 'Configuration Engineer', image: 'https://picsum.photos/seed/ansh/300/400' },
  { id: 3, name: 'Archita Pandey', background: 'CS/IT', role: 'SDE-1', image: 'https://picsum.photos/seed/archita/300/400' },
  { id: 4, name: 'Shaina Hegde', background: 'Electrical', role: 'Java Developer', image: 'https://picsum.photos/seed/shaina/300/400' },
  { id: 5, name: 'Ankita Pathak', background: 'Electrical', role: 'Software Engineer', image: 'https://picsum.photos/seed/ankita/300/400' },
  { id: 6, name: 'Rameshwar Tale', background: 'Electrical', role: 'Backend Developer', image: 'https://picsum.photos/seed/rameshwar/300/400' },
  { id: 7, name: 'Aman Hussain', background: 'CS/IT', role: 'DevOps Engineer', image: 'https://picsum.photos/seed/aman/300/400' },
  { id: 8, name: 'Mallepalli Kowshik Reddy', background: 'CS/IT', role: 'Software Developer', image: 'https://picsum.photos/seed/kowshik/300/400' },
];

const StudentCard = ({ student, index }: { student: typeof students[0], index: number }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setIsFlipped(prev => !prev);
      }, 4000 + Math.random() * 3000);
      return () => clearInterval(interval);
    }, index * 300);
    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <div className="relative w-16 h-24 lg:w-20 lg:h-28 perspective-1000">
      <motion.div
        className="w-full h-full relative preserve-3d cursor-pointer"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {/* Front */}
        <div className="absolute inset-0 backface-hidden rounded-lg overflow-hidden shadow-md border border-slate-200 bg-slate-100">
          <img 
            src={student.image} 
            alt={student.name} 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            referrerPolicy="no-referrer"
          />
        </div>
        {/* Back */}
        <div 
          className="absolute inset-0 backface-hidden rounded-lg bg-blue-600 flex flex-col items-center justify-center p-2 text-center shadow-md"
          style={{ transform: 'rotateY(180deg)' }}
        >
          <p className="text-[8px] font-bold text-white uppercase tracking-tighter leading-tight">{student.name}</p>
          <div className="h-px w-3 bg-white/30 my-1"></div>
          <p className="text-[6px] font-medium text-blue-100 uppercase">{student.company}</p>
        </div>
      </motion.div>
    </div>
  );
};

interface SuccessStoryProps {
  story: {
    id: number;
    name: string;
    background: string;
    role: string;
    image: string;
  };
}

const SuccessStoryCard: React.FC<SuccessStoryProps> = ({ story }) => {
  return (
    <div className="relative w-[280px] h-[360px] rounded-3xl overflow-hidden shadow-xl group shrink-0">
      <img 
        src={story.image} 
        alt={story.name} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
      
      {/* LinkedIn Icon */}
      <div className="absolute top-4 right-4 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
      </div>

      <div className="absolute top-4 left-4">
        <p className="text-white font-bold text-sm tracking-tight">{story.name}</p>
      </div>

      <div className="absolute bottom-6 left-4 right-4 space-y-4">
        <div className="flex items-center gap-2">
          {/* Previous Background Pill */}
          <div className="bg-white px-3 py-1.5 rounded-full shadow-lg">
            <p className="text-[10px] font-bold text-blue-600 uppercase tracking-tight">{story.background}</p>
          </div>
          
          {/* Arrow SVG */}
          <svg width="24" height="12" viewBox="0 0 24 12" fill="none" className="text-white/60">
            <path d="M1 6H22M22 6L17 1M22 6L17 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>

          {/* Current Role Pill */}
          <div className="bg-blue-600 px-4 py-2 rounded-full shadow-lg flex-1">
            <p className="text-[10px] font-bold text-white leading-tight">Currently, <br />{story.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function PlacedStudents() {
  const [isPaused, setIsPaused] = useState(false);
  const controls = useAnimationControls();
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isPaused) {
      controls.start({
        x: [0, -1000],
        transition: {
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        },
      });
    } else {
      controls.stop();
    }
  }, [isPaused, controls]);

  return (
    <section className="py-24 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-32">
          
          {/* Left Text */}
          <div className="z-30 text-center lg:text-left">
            <h2 className="text-5xl lg:text-7xl font-black leading-[0.9] tracking-tighter">
              <span className="text-blue-600 block mb-2">Learn</span>
              <span className="text-slate-900 block">To Succeed</span>
            </h2>
          </div>

          {/* Center Grid Area */}
          <div className="relative flex-1 h-[400px] flex items-center justify-center min-w-[300px] lg:min-w-[500px]">
            {/* Horizontal Divider Line */}
            <div className="absolute top-1/2 left-[-20%] right-[-20%] h-[2px] bg-slate-900 z-20"></div>

            {/* Scattered Students */}
            <div className="relative w-full h-full">
              {students.map((student, idx) => {
                const positions = [
                  { top: '5%', left: '15%' }, { top: '10%', left: '45%' }, { top: '5%', left: '75%' },
                  { top: '25%', left: '30%' }, { top: '28%', left: '60%' }, { top: '55%', left: '18%' },
                  { top: '52%', left: '48%' }, { top: '53%', left: '78%' }, { top: '75%', left: '35%' },
                  { top: '72%', left: '65%' }, { top: '90%', left: '20%' }, { top: '88%', left: '50%' },
                  { top: '92%', left: '80%' }, { top: '40%', left: '5%' },
                ];
                const pos = positions[idx % positions.length];
                return (
                  <div key={student.id} className="absolute z-10" style={{ top: pos.top, left: pos.left, transform: 'translate(-50%, -50%)' }}>
                    <StudentCard student={student} index={idx} />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Text */}
          <div className="z-30 text-center lg:text-right">
            <h2 className="text-5xl lg:text-7xl font-black leading-[0.9] tracking-tighter">
              <span className="text-blue-600 block mb-2">Succeed</span>
              <span className="text-slate-900 block">To Learn</span>
            </h2>
          </div>
        </div>

        {/* Real Voices of Success Section */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 text-blue-600 font-bold text-sm uppercase tracking-widest">
              <span className="text-xl">✦</span>
              FROM ASPIRATIONS TO ACHIEVEMENTS: REAL VOICES OF SUCCESS
              <span className="text-xl">✦</span>
            </div>
          </div>

          {/* Carousel */}
          <div 
            className="relative overflow-hidden py-10"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <motion.div 
              className="flex gap-6"
              animate={controls}
            >
              {[...successStories, ...successStories].map((story, idx) => (
                <SuccessStoryCard key={`${story.id}-${idx}`} story={story} />
              ))}
            </motion.div>
          </div>

          {/* Download Button */}
          <div className="mt-20 text-center">
            <button className="px-10 py-4 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-all flex items-center gap-3 mx-auto shadow-xl shadow-blue-600/20">
              Download Placement Report <Download size={20} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .perspective-1000 { perspective: 1000px; }
        .preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
      `}</style>
    </section>
  );
}
