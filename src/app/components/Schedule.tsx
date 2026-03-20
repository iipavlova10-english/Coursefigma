import { motion } from 'motion/react';
import { Calendar, Clock } from 'lucide-react';

export function Schedule() {
  const schedule = [
    {
      day: 'Четверг',
      time: '15:00 (МСК)',
      group: 'группа 4–5 класс',
      color: '#14b8a6',
    },
    {
      day: 'Пятница',
      time: '15:30 (МСК)',
      group: 'группа 6–8 класс',
      color: '#f59e0b',
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
              🕒 Расписание
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {schedule.map((item, index) => (
            <motion.div
              key={item.day}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="relative group"
            >
              <div className="bg-[#131823] rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 shadow-lg hover:shadow-2xl">
                {/* Glow effect */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, ${item.color}, transparent 70%)`,
                  }}
                />
                
                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div 
                      className="flex items-center justify-center w-12 h-12 rounded-lg"
                      style={{
                        background: `linear-gradient(135deg, ${item.color}20, ${item.color}10)`,
                        border: `1px solid ${item.color}30`,
                      }}
                    >
                      <Calendar className="w-6 h-6" style={{ color: item.color }} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">
                        {item.day}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 mb-3">
                    <Clock className="w-5 h-5 text-gray-400" />
                    <p className="text-xl text-gray-200">
                      {item.time}
                    </p>
                  </div>
                  
                  <p 
                    className="text-lg"
                    style={{ color: item.color }}
                  >
                    {item.group}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
