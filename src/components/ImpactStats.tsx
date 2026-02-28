import { motion } from 'motion/react';

export default function ImpactStats() {
  const stats = [
    { label: 'STUDENTS PLACED', value: '2000 +' },
    { label: 'HIGHEST SALARY', value: '41 LPA' },
    { label: 'PARTNER COMPANIES', value: '500 +' },
    { label: 'AVERAGE SALARY', value: '7.4 LPA' },
  ];

  return (
    <section className="bg-blue-600 py-12 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-sm font-bold uppercase tracking-widest inline-block relative">
            Impact Created
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-white"></span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`text-center px-4 ${
                idx !== stats.length - 1 ? 'lg:border-r lg:border-white/30' : ''
              }`}
            >
              <p className="text-xs font-bold uppercase tracking-wider mb-4 opacity-90">
                {stat.label}
              </p>
              <p className="text-4xl lg:text-5xl font-bold tracking-tight">
                {stat.value}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
