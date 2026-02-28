import { motion } from 'motion/react';
import { Play } from 'lucide-react';

interface ReviewCard {
  title: string;
  subtitle: string;
  image: string;
  tag?: string;
}

const reviews: ReviewCard[] = [
  {
    title: 'STUDENT EXPERIENCE',
    subtitle: 'CLASS OF CAREERDCODE',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: '9 MONTHS JOBLESS TO 2 OFFERS!',
    subtitle: 'His Roadmap to Your Dream Job',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800',
    tag: 'SUCCESS STORY'
  },
  {
    title: 'CAREER SWITCH THAT PAID OFF!',
    subtitle: 'From Non-Tech to Software Engineer',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800',
    tag: 'CAREER SWITCH'
  }
];

export default function StudentReviews() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="mb-4">
            <span className="text-sm font-bold uppercase tracking-widest text-slate-900 relative inline-block">
              STUDENT REVIEWS
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600"></span>
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            <span className="text-blue-600">Watch</span> yourself transform your future
          </h2>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto">
            Work hard with us, with dedication and commitment, and watch multiple opportunities transforming your future!
          </p>
        </div>

        {/* Video Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative rounded-2xl overflow-hidden shadow-xl cursor-pointer aspect-video md:aspect-[4/3]"
            >
              {/* Background Image */}
              <img 
                src={review.image} 
                alt={review.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="mb-4">
                  <h3 className="text-yellow-400 font-black text-xl lg:text-2xl leading-tight mb-1">
                    {review.title}
                  </h3>
                  <p className="text-white text-sm font-bold opacity-90">
                    {review.subtitle}
                  </p>
                </div>
                
                {/* Play Button */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <Play className="text-black fill-current ml-1" size={20} />
                    </div>
                  </div>
                </div>

                {/* Brand Logo Placeholder */}
                <div className="flex items-center gap-2 mt-4 opacity-70">
                  <div className="w-4 h-4 bg-white rotate-45 flex items-center justify-center rounded-sm">
                    <div className="w-2 h-2 bg-blue-600 -rotate-45"></div>
                  </div>
                  <span className="text-[10px] font-bold text-white tracking-widest uppercase">CareerDCode</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
