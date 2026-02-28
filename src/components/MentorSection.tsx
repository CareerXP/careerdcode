import { motion } from 'motion/react';
import { Linkedin } from 'lucide-react';

interface Mentor {
  name: string;
  image: string;
  companyLogo: string;
  role: string;
  bio: string;
  bgColor: string;
}

const mentors: Mentor[] = [
  {
    name: 'Dharmendra Tiwari',
    image: 'https://picsum.photos/seed/dharmendra/300/400',
    companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/ServiceNow_logo.svg/1200px-ServiceNow_logo.svg.png',
    role: 'Senior Software Engineer',
    bio: 'Expert in cloud infrastructure and scalable backend systems. Passionate about mentoring the next generation of engineers.',
    bgColor: 'bg-red-500'
  },
  {
    name: 'Gaurav Choudhary',
    image: 'https://picsum.photos/seed/gaurav/300/400',
    companyLogo: 'https://picsum.photos/seed/careerdcode/120/40', // Placeholder for CareerDCode
    role: 'Lead Instructor',
    bio: 'Full-stack specialist with a focus on React and Node.js. Has trained over 1000+ students in modern web technologies.',
    bgColor: 'bg-emerald-400'
  },
  {
    name: 'Navdeep Singh',
    image: 'https://picsum.photos/seed/navdeep/300/400',
    companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1200px-Microsoft_logo.svg.png',
    role: 'Software Engineer',
    bio: 'Specializes in distributed systems and enterprise-grade software. Loves solving complex algorithmic challenges.',
    bgColor: 'bg-slate-100'
  },
  {
    name: 'Dhruv Gupta',
    image: 'https://picsum.photos/seed/dhruv/300/400',
    companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/BharatPe_logo.svg/1200px-BharatPe_logo.svg.png',
    role: 'Senior Manager Growth',
    bio: 'Experienced Data Analytics Instructor with a proven track record at CareerDCode and BharatPe Analytics team. Full-time at CareerDCode to deliver top-notch curriculum & develop students\' problem solving skills',
    bgColor: 'bg-blue-100'
  },
  {
    name: 'Samudrala Aravind',
    image: 'https://picsum.photos/seed/aravind/300/400',
    companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png',
    role: 'Software Engineer',
    bio: 'Passionate about machine learning and large-scale data processing. Focuses on building intuitive and efficient user experiences.',
    bgColor: 'bg-slate-200'
  },
  {
    name: 'Ayush Bansal',
    image: 'https://picsum.photos/seed/ayush/300/400',
    companyLogo: 'https://picsum.photos/seed/careerdcode2/120/40', // Placeholder for CareerDCode
    role: 'Software Developer',
    bio: 'Frontend enthusiast with a deep understanding of UI/UX principles. Dedicated to teaching clean and maintainable code.',
    bgColor: 'bg-blue-200'
  }
];

const marqueeMentors = [...mentors, ...mentors];

export default function MentorSection() {
  return (
    <section className="relative py-24 bg-[#3B82F6] overflow-hidden text-white">
      {/* Cross Pattern Background */}
      <div className="absolute inset-0 opacity-20" 
           style={{ 
             backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`,
             backgroundSize: '40px 40px'
           }}>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="mb-4">
            <span className="text-sm font-bold uppercase tracking-widest text-white/80 relative inline-block">
              MEET THE TEAM
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-white"></span>
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 flex items-center justify-center gap-4 flex-wrap">
            <span className="bg-white text-[#3B82F6] px-4 py-1 rounded-lg">Learn</span>
            from India's Best Mentors
          </h2>
          <p className="text-white/90 text-lg font-medium">
            In Today's competitive world, you need industry-relevant skills taught by the best.
          </p>
        </div>

        {/* Marquee Container */}
        <div className="relative w-full overflow-hidden py-10 pause-on-hover">
          <div className="flex gap-6 w-max animate-marquee">
            {marqueeMentors.map((mentor, idx) => (
              <motion.div
                key={idx}
                className={`group relative h-[380px] bg-white rounded-2xl overflow-hidden shadow-xl transition-all duration-500 flex`}
                initial={{ width: 280 }}
                whileHover={{ width: 560 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {/* Left Side: Photo & Basic Info */}
                <div className="relative min-w-[280px] h-full overflow-hidden">
                  <img 
                    src={mentor.image} 
                    alt={mentor.name} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  {/* Info Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-lg font-bold text-white mb-2">{mentor.name}</h3>
                    <div className="bg-white rounded-lg p-2 w-max shadow-lg">
                      <img 
                        src={mentor.companyLogo} 
                        alt="Company" 
                        className="h-5 object-contain"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                </div>

                {/* Right Side: Bio & LinkedIn (Revealed on Hover) */}
                <div className="min-w-[280px] h-full bg-white p-8 flex flex-col justify-between border-l border-slate-100">
                  <div>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {mentor.bio}
                    </p>
                  </div>
                  <div className="flex justify-between items-end">
                    <div>
                      <h4 className="text-slate-400 font-medium text-sm mb-1">{mentor.role}</h4>
                      <div className="mt-2">
                        <img 
                          src={mentor.companyLogo} 
                          alt="Company" 
                          className="h-5 object-contain grayscale opacity-50"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    </div>
                    <a href="#" className="text-blue-600 hover:scale-110 transition-transform">
                      <Linkedin size={24} fill="currentColor" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
