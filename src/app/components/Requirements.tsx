import { motion } from 'motion/react';
import { Monitor, Headphones, Wifi, Video } from 'lucide-react';

export function Requirements() {
  const requirements = [
    {
      icon: Monitor,
      text: 'Стационарный компьютер или ноутбук',
    },
    {
      icon: Headphones,
      text: 'Наушники и микрофон',
    },
    {
      icon: Wifi,
      text: 'Стабильный интернет',
    },
    {
      icon: Video,
      text: 'Zoom',
    },
  ];

  return (
    <section className="py-16 md:py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#14b8a6] to-[#f59e0b] bg-clip-text text-transparent">
              💻 Что потребуется
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-br from-[#131823] to-[#1a1f2e] rounded-2xl p-8 md:p-10 border border-white/10 shadow-2xl"
        >
          <div className="grid sm:grid-cols-2 gap-6">
            {requirements.map((req, index) => (
              <motion.div
                key={req.text}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-4 group"
              >
                <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-lg bg-gradient-to-br from-[#14b8a6]/20 to-[#14b8a6]/10 border border-[#14b8a6]/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <req.icon className="w-6 h-6 md:w-7 md:h-7 text-[#14b8a6]" />
                </div>
                <p className="text-base md:text-lg text-gray-200">
                  {req.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
