import { motion } from 'motion/react';

export default function ImpactStats() {
  const stats = [
    { label: 'STUDENTS PLACED', value: '2000 +' },
    { label: 'HIGHEST SALARY', value: '41 LPA' },
    { label: 'PARTNER COMPANIES', value: '500 +' },
    { label: 'AVERAGE SALARY', value: '7.4 LPA' },
  ];

  return (
    <section className="bg-slate-900 py-24 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`text-center px-8 ${
                idx !== stats.length - 1 ? 'lg:border-r lg:border-white/10' : ''
              }`}
            >
              <p className="text-[10px] font-black uppercase tracking-[0.2em] mb-6 text-blue-400 font-display">
                {stat.label}
              </p>
              <p className="text-5xl lg:text-6xl font-bold tracking-tight font-display">
                {stat.value}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
