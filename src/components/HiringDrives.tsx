import { motion } from 'motion/react';
import { MapPin, ArrowRight, CheckCircle2 } from 'lucide-react';

interface JobCardProps {
  company: string;
  role: string;
  salary: string;
  location: string;
  logo?: string;
}

const JobCard = ({ company, role, salary, location, logo }: JobCardProps) => (
  <div className="bg-white rounded-xl p-5 border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full">
    <div>
      <div className="flex justify-between items-start mb-3">
        <h4 className="text-blue-600 font-bold text-sm">{company}</h4>
        {logo && <img src={logo} alt={company} className="h-6 object-contain" referrerPolicy="no-referrer" />}
      </div>
      <h5 className="text-slate-900 font-bold text-base mb-1">{role}</h5>
      <p className="text-slate-500 text-xs font-medium mb-4">{salary}</p>
    </div>
    <div className="flex items-center justify-between mt-auto">
      <div className="flex items-center gap-1 text-slate-400">
        <MapPin size={14} />
        <span className="text-[10px] font-semibold uppercase tracking-wider">{location}</span>
      </div>
      <button className="flex items-center gap-1.5 px-4 py-2 bg-blue-600 text-white text-[10px] font-bold rounded-lg hover:bg-blue-700 transition-colors">
        Apply Now <ArrowRight size={12} />
      </button>
    </div>
  </div>
);

export default function HiringDrives() {
  const jobs = [
    {
      company: 'HummingBird Technologies',
      role: 'Java Backend Developer',
      salary: '6 - 9 Lakhs',
      location: 'Pune (Onsite)',
      logo: 'https://picsum.photos/seed/humming/40/40'
    },
    {
      company: 'Amazon',
      role: 'Software Engineer',
      salary: '25 - 30 Lakhs',
      location: 'Bengaluru (Onsite)',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg'
    },
    {
      company: 'Sceniuz IT Pvt. Ltd.',
      role: 'Data Engineer',
      salary: '3 - 6 Lakhs',
      location: 'Mumbai (Onsite)',
      logo: 'https://picsum.photos/seed/sceniuz/40/40'
    },
    {
      company: 'Global IT Consulting company',
      role: 'Software Engineer',
      salary: '11.1 Lakhs',
      location: 'Bangalore (Onsite)',
      logo: 'https://picsum.photos/seed/globalit/40/40'
    }
  ];

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:40px_40px] opacity-30"></div>
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="mb-4">
            <span className="text-sm font-bold uppercase tracking-widest text-slate-900 relative inline-block">
              HIRING DRIVES
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600"></span>
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
            Attend <span className="text-blue-600">FREE</span> Hiring Drives at our Skill Centres
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 items-start">
          {/* Left: Large Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[32px] overflow-hidden shadow-2xl shadow-slate-200"
          >
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800" 
              alt="Students working" 
              className="w-full h-full object-cover aspect-[4/5]"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          {/* Right: Jobs and Features */}
          <div className="space-y-8">
            {/* Jobs Header */}
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold text-slate-900">Offline Hiring Drives</h3>
              <button className="text-xs font-bold text-slate-600 border border-slate-200 px-4 py-2 rounded-lg hover:bg-slate-50 transition-colors">
                View All Jobs
              </button>
            </div>

            {/* Jobs Grid */}
            <div className="grid md:grid-cols-2 gap-4">
              {jobs.map((job, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <JobCard {...job} />
                </motion.div>
              ))}
            </div>

            {/* Bottom Feature Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Skill Analysis Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-indigo-50 to-white rounded-3xl p-8 border border-indigo-100 flex flex-col justify-between h-[300px] overflow-hidden relative group"
              >
                <h4 className="text-3xl font-bold text-indigo-900 relative z-10">Skill Analysis</h4>
                <div className="flex items-end gap-2 h-32 relative z-10">
                  {[40, 70, 50, 90, 60, 80, 45].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h}%` }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                      className="flex-1 bg-indigo-400/40 rounded-t-lg group-hover:bg-indigo-500/60 transition-colors"
                    ></motion.div>
                  ))}
                </div>
                <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-indigo-200/20 rounded-full blur-3xl"></div>
              </motion.div>

              {/* Test Series / Mock Interview Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-rose-50 to-white rounded-3xl p-8 border border-rose-100 flex flex-col justify-between h-[300px] overflow-hidden relative"
              >
                <div>
                  <h4 className="text-2xl font-bold text-rose-900 mb-2">Test Series</h4>
                  <div className="space-y-2 mb-6">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-center gap-2 text-rose-600">
                        <CheckCircle2 size={16} fill="currentColor" className="text-white" />
                        <div className="h-1.5 w-24 bg-rose-200 rounded-full"></div>
                      </div>
                    ))}
                  </div>
                  <h4 className="text-2xl font-bold text-rose-900">Mock Interview</h4>
                </div>
                
                {/* Mock UI Illustration */}
                <div className="absolute right-4 bottom-4 w-48 bg-white rounded-xl shadow-lg border border-rose-100 p-4 transform rotate-[-5deg]">
                  <div className="text-[10px] font-bold text-rose-900 mb-3">Mock Interviews</div>
                  <div className="space-y-2">
                    {['Java Full Stack', 'MERN Full Stack', 'Node.js Developer'].map((role, i) => (
                      <div key={i} className="text-[8px] font-medium text-slate-500 bg-slate-50 px-2 py-1 rounded border border-slate-100">
                        {role}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
