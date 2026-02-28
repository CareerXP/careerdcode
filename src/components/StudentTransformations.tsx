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
];

// Double the list for seamless marquee
const marqueeItems = [...transformations, ...transformations];

export default function StudentTransformations() {
  return (
    <section className="relative py-24 overflow-hidden bg-white">
      {/* Dot Pattern Background */}
      <div className="absolute inset-0 -z-10 opacity-40" 
           style={{ 
             backgroundImage: 'radial-gradient(#3b82f6 1.5px, transparent 1.5px)', 
             backgroundSize: '32px 32px' 
           }}>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
            <span className="text-blue-600">Those Who</span> Acted And Transformed
          </h2>
        </div>

        {/* Continuous Marquee Container */}
        <div className="relative w-full overflow-hidden py-10 pause-on-hover">
          <div className="flex gap-6 w-max animate-marquee">
            {marqueeItems.map((item, idx) => (
              <div
                key={idx}
                className="group relative w-[320px] h-[420px] bg-white rounded-2xl shadow-xl shadow-slate-200/50 border-t-4 border-blue-600 transition-all duration-500 perspective-1000"
              >
                {/* Front Side: Transformation Info */}
                <div className="absolute inset-0 p-8 flex flex-col items-center text-center backface-hidden group-hover:opacity-0 group-hover:scale-95 transition-all duration-500">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-slate-100 mb-4 shadow-inner">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-6">{item.name}</h3>
                  <div className="h-12 flex items-center justify-center mb-8">
                    <img src={item.companyLogo} alt="Company" className="max-h-full max-w-[160px] object-contain grayscale hover:grayscale-0 transition-all" referrerPolicy="no-referrer" />
                  </div>
                  <div className="w-full grid grid-cols-[1fr_auto_1fr] items-center gap-2">
                    <div className="space-y-2">
                      <span className="inline-block px-3 py-1 bg-red-50 text-red-600 text-[10px] font-bold uppercase rounded-md">
                        {item.before.label}
                      </span>
                      <p className="text-xs font-semibold text-slate-600 leading-tight h-8 flex items-center justify-center">
                        {item.before.role}
                      </p>
                    </div>
                    <div className="flex flex-col items-center gap-0.5 text-blue-300">
                      <ChevronRight size={16} className="-mb-2" />
                      <ChevronRight size={16} className="-mb-2" />
                      <ChevronRight size={16} />
                    </div>
                    <div className="space-y-2">
                      <span className="inline-block px-3 py-1 bg-green-50 text-green-600 text-[10px] font-bold uppercase rounded-md">
                        {item.after.label}
                      </span>
                      <p className="text-xs font-semibold text-slate-600 leading-tight h-8 flex items-center justify-center">
                        {item.after.role}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Back Side: Testimonial (Hover State) */}
                <div className="absolute inset-0 p-10 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-all duration-500 bg-white rounded-2xl">
                  <Quote className="text-blue-600 rotate-180" size={32} fill="currentColor" />
                  
                  <p className="text-slate-500 text-lg leading-relaxed font-medium">
                    "{item.testimonial}"
                  </p>

                  <div className="flex justify-between items-center">
                    <Linkedin className="text-blue-600" size={28} fill="currentColor" />
                    <Quote className="text-blue-600" size={32} fill="currentColor" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div className="flex justify-end mt-4">
          <button className="flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-bold rounded-xl shadow-lg shadow-blue-200 hover:bg-blue-700 hover:-translate-y-1 transition-all active:translate-y-0">
            <FileText size={20} />
            Download Placement Report
          </button>
        </div>
      </div>
    </section>
  );
}
