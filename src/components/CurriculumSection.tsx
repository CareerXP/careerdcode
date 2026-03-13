import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Clock } from 'lucide-react';

interface Module {
  id: number;
  title: string;
  duration: string;
  description: string;
  weeks: {
    number: number;
    topics: string;
  }[];
}

const modules: Module[] = [
  {
    id: 1,
    title: 'Fundamentals of Programming and Aptitude',
    duration: '1 Month',
    description: 'This module is designed to introduce you to programming. You\'ll learn how to communicate with a computer.',
    weeks: [
      { number: 1, topics: 'Hello World, Variables & Data Types, Taking Input, Conditional and Loops' },
      { number: 2, topics: 'Loops, Nested Loops, Functions, 1D Array' },
      { number: 3, topics: '1D Array, Subarray' },
      { number: 4, topics: 'Time and Space Complexity, 2D Arrays' },
    ]
  },
  {
    id: 2,
    title: 'Elementary Data Structures and Algorithms',
    duration: '1 Month',
    description: 'Master the building blocks of efficient software development.',
    weeks: [
      { number: 5, topics: 'Recursion, Backtracking, Sorting Algorithms' },
      { number: 6, topics: 'Searching, Hashing, Strings' },
      { number: 7, topics: 'Linked Lists, Stacks, Queues' },
      { number: 8, topics: 'Trees and Binary Search Trees' },
    ]
  },
  {
    id: 3,
    title: 'Intro to HTML & CSS',
    duration: '1 Month',
    description: 'Learn to build beautiful, responsive user interfaces.',
    weeks: [
      { number: 9, topics: 'HTML5 Semantic Tags, Forms, Validations' },
      { number: 10, topics: 'CSS3 Selectors, Box Model, Flexbox' },
      { number: 11, topics: 'CSS Grid, Responsive Design, Media Queries' },
      { number: 12, topics: 'Advanced CSS, Animations, Transitions' },
    ]
  },
  {
    id: 4,
    title: 'Basic Javascript',
    duration: '1 Month',
    description: 'The foundation of modern web development.',
    weeks: [
      { number: 13, topics: 'JS Basics, Variables, Scopes, Hoisting' },
      { number: 14, topics: 'Functions, Arrow Functions, Closures' },
      { number: 15, topics: 'Arrays, Objects, ES6+ Features' },
      { number: 16, topics: 'DOM Manipulation, Event Listeners' },
    ]
  },
  {
    id: 5,
    title: 'Advanced Javascript',
    duration: '1 Month',
    description: 'Deep dive into the engine of the web.',
    weeks: [
      { number: 17, topics: 'Asynchronous JS, Promises, Async/Await' },
      { number: 18, topics: 'Prototypes, Classes, OOP in JS' },
      { number: 19, topics: 'Error Handling, Debugging, Performance' },
      { number: 20, topics: 'API Integration, Fetch, Axios' },
    ]
  },
  {
    id: 6,
    title: 'React & Redux',
    duration: '1 Month',
    description: 'Build complex single-page applications with ease.',
    weeks: [
      { number: 21, topics: 'React Basics, Components, Props, State' },
      { number: 22, topics: 'Hooks (useState, useEffect, useContext)' },
      { number: 23, topics: 'React Router, Navigation, Protected Routes' },
      { number: 24, topics: 'Redux Toolkit, State Management, Thunks' },
    ]
  },
  {
    id: 7,
    title: 'Backend development in NodeJS',
    duration: '1 Month',
    description: 'Server-side programming and database management.',
    weeks: [
      { number: 25, topics: 'Node.js Basics, Event Loop, File System' },
      { number: 26, topics: 'Express.js, Routing, Middleware' },
      { number: 27, topics: 'MongoDB, Mongoose, Schema Design' },
      { number: 28, topics: 'Authentication, JWT, Security Best Practices' },
    ]
  },
  {
    id: 8,
    title: 'Project / Internship',
    duration: '1 Month',
    description: 'Apply your skills to real-world projects and gain industry experience.',
    weeks: [
      { number: 29, topics: 'Project Planning, Architecture, Setup' },
      { number: 30, topics: 'Frontend Development, UI/UX Implementation' },
      { number: 31, topics: 'Backend Integration, Testing, Deployment' },
      { number: 32, topics: 'Final Presentation, Resume Building, Mock Interviews' },
    ]
  }
];

export default function CurriculumSection() {
  const [openModule, setOpenModule] = useState<number | null>(1);

  const toggleModule = (id: number) => {
    setOpenModule(openModule === id ? null : id);
  };

  return (
    <section id="curriculum" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-4">
            COURSE CURRICULUM
          </p>
          <h2 className="text-3xl lg:text-4xl font-black text-slate-900 leading-tight">
            In Depth Syllabus to make you Industry Ready with <span className="text-blue-600">Hands on Implementation</span>
          </h2>
        </div>

        {/* Modules List */}
        <div className="space-y-4">
          {modules.map((module) => (
            <div 
              key={module.id} 
              className="border-b border-slate-100 last:border-0"
            >
              <button
                onClick={() => toggleModule(module.id)}
                className="w-full py-6 flex items-center justify-between text-left group"
              >
                <div className="flex items-center gap-6">
                  <span className="text-sm font-bold text-slate-400 shrink-0">Module {module.id}</span>
                  <div className="flex items-center gap-3 bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-[10px] font-bold shrink-0">
                    <Clock size={12} />
                    {module.duration}
                  </div>
                  <h3 className="text-base lg:text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                    {module.title}
                  </h3>
                </div>
                <motion.div
                  animate={{ rotate: openModule === module.id ? 180 : 0 }}
                  className="text-slate-400"
                >
                  <ChevronDown size={20} />
                </motion.div>
              </button>

              <AnimatePresence>
                {openModule === module.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8 pl-0 lg:pl-[140px] pr-4">
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-sm font-black text-slate-900 mb-2 flex items-center gap-2">
                            What you'll learn? 📚
                          </h4>
                          <p className="text-sm text-slate-500 leading-relaxed">
                            {module.description}
                          </p>
                        </div>

                        <div className="space-y-3">
                          {module.weeks.map((week) => (
                            <div key={week.number} className="flex gap-4">
                              <span className="text-xs font-bold text-blue-600 shrink-0 min-w-[60px]">Week {week.number}</span>
                              <p className="text-xs text-slate-600 leading-relaxed">
                                {week.topics}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
