import { motion } from 'motion/react';
import { ChevronRight, FileText, Quote, Linkedin } from 'lucide-react';

interface TransformationCard {
  name: string;
  image: string;
  companyLogo: string;
  before: { label: string; role: string };
  after: { label: string; role: string };
  testimonial: string;
}

const transformations: TransformationCard[] = [
  {
    name: 'Pradyot Verma',
    image: 'https://picsum.photos/seed/pradyot/100/100',
    companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/MakeMyTrip_Logo.png/320px-MakeMyTrip_Logo.png',
    before: { label: 'Before', role: 'Mechanical Engineer' },
    after: { label: 'After', role: 'Software Developer' },
    testimonial: "The support was there throughout the course. They helped me build my profile from the beginning and would help me crack company specific tech rounds."
  },
  {
    name: 'Lalit K Tiwari',
    image: 'https://picsum.photos/seed/lalit/100/100',
    companyLogo: 'https://picsum.photos/seed/tft/120/40',
    before: { label: 'Before', role: 'Btech' },
    after: { label: 'After', role: 'Software Engineer' },
    testimonial: "The curriculum is very well structured. The mentors are always available to clear doubts and the placement team is exceptional."
  },
  {
    name: 'Mahivirsinh Chauhan',
    image: 'https://picsum.photos/seed/mahi/100/100',
    companyLogo: 'https://picsum.photos/seed/amoga/120/40',
    before: { label: 'Before', role: 'BE' },
    after: { label: 'After', role: 'Software Developer' },
    testimonial: "I transitioned from a non-tech background to a developer role. The hands-on projects were the key to my success."
  },
  {
    name: 'Namrata',
    image: 'https://picsum.photos/seed/namrata/100/100',
    companyLogo: 'https://picsum.photos/seed/sea/120/40',
    before: { label: 'Before', role: 'Biotech Engineering' },
    after: { label: 'After', role: 'Software Engineer' },
    testimonial: "CareerDCode provided me with the right platform to showcase my skills. The mock interviews were extremely helpful."
  },
  {
    name: 'Ankit Sharma',
    image: 'https://picsum.photos/seed/ankit/100/100',
    companyLogo: 'https://picsum.photos/seed/google/120/40',
    before: { label: 'Before', role: 'Civil Engineer' },
    after: { label: 'After', role: 'Full Stack Developer' },
    testimonial: "The transition was smooth thanks to the structured learning path. I never felt overwhelmed despite being from a non-CS background."
  },
  {
    name: 'Sneha Gupta',
    image: 'https://picsum.photos/seed/sneha/100/100',
    companyLogo: 'https://picsum.photos/seed/amazon/120/40',
    before: { label: 'Before', role: 'Fresher' },
    after: { label: 'After', role: 'Backend Developer' },
    testimonial: "The placement assistance is real. They don't just teach; they make sure you are ready for the industry challenges."
  }
];

export default function StudentTransformations() {
  return (
    <section className="relative py-24 overflow-hidden bg-slate-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 opacity-5" 
           style={{ 
             backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', 
             backgroundSize: '24px 24px' 
           }}>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl lg:text-6xl font-bold text-slate-900 font-display tracking-tight"
          >
            Real <span className="text-blue-600">Impact.</span>
          </motion.h2>
          <p className="mt-4 text-slate-500 max-w-2xl mx-auto font-medium">
            Stories of career shifts from diverse backgrounds to global tech leaders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {transformations.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Profile Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-slate-100">
                  {item.image && (
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  )}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 font-display">{item.name}</h3>
                  <div className="h-5 mt-1">
                    {item.companyLogo && (
                      <img src={item.companyLogo} alt="Company" className="h-full object-contain grayscale opacity-60" referrerPolicy="no-referrer" />
                    )}
                  </div>
                </div>
              </div>

              {/* Transformation Path */}
              <div className="flex items-center justify-between p-5 bg-slate-50 rounded-xl mb-8 border border-slate-100">
                <div className="text-center flex-1">
                  <span className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] block mb-2 font-display">Origin</span>
                  <p className="text-[11px] font-bold text-slate-600 leading-tight uppercase tracking-wider">{item.before.role}</p>
                </div>
                <div className="px-3 text-blue-400">
                  <ChevronRight size={20} />
                </div>
                <div className="text-center flex-1">
                  <span className="text-[9px] font-black text-blue-600 uppercase tracking-[0.2em] block mb-2 font-display">Target</span>
                  <p className="text-[11px] font-bold text-slate-900 leading-tight uppercase tracking-wider">{item.after.role}</p>
                </div>
              </div>

              {/* Testimonial */}
              <div className="relative flex-grow">
                <p className="relative z-10 text-slate-500 text-sm leading-relaxed font-medium italic">
                  "{item.testimonial}"
                </p>
              </div>

              {/* Social Link */}
              <div className="mt-6 pt-6 border-t border-slate-50 flex justify-end">
                <a href="#" className="text-blue-600 hover:text-blue-700 transition-colors">
                  <Linkedin size={20} fill="currentColor" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Action Button */}
        {/* <div className="flex justify-center mt-16">
          <button className="flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl shadow-lg shadow-blue-200 hover:bg-blue-700 hover:-translate-y-1 transition-all active:translate-y-0">
            <FileText size={20} />
            Download Placement Report
          </button>
        </div> */}
      </div>
    </section>
  );
}
