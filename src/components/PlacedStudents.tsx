import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

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

export default function PlacedStudents() {
  return (
    <section className="py-32 bg-white overflow-hidden relative min-h-[600px] flex items-center">
      {/* Grid Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)', 
          backgroundSize: '60px 60px' 
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
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
                // Manually define positions to match the "scattered" look in the image
                const positions = [
                  { top: '5%', left: '15%' },
                  { top: '10%', left: '45%' },
                  { top: '5%', left: '75%' },
                  { top: '25%', left: '30%' },
                  { top: '28%', left: '60%' },
                  { top: '55%', left: '18%' },
                  { top: '52%', left: '48%' },
                  { top: '53%', left: '78%' },
                  { top: '75%', left: '35%' },
                  { top: '72%', left: '65%' },
                  { top: '90%', left: '20%' },
                  { top: '88%', left: '50%' },
                  { top: '92%', left: '80%' },
                  { top: '40%', left: '5%' },
                ];
                const pos = positions[idx % positions.length];
                
                return (
                  <div 
                    key={student.id} 
                    className="absolute z-10"
                    style={{ top: pos.top, left: pos.left, transform: 'translate(-50%, -50%)' }}
                  >
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
      </div>

      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
      `}</style>
    </section>
  );
}
