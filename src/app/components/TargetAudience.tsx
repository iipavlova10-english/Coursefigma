import { motion } from 'motion/react';
import { Users, BookOpen } from 'lucide-react';

export function TargetAudience() {
  const groups = [
    {
      icon: BookOpen,
      title: 'Первая группа',
      subtitle: '4–5 класс',
      gradient: 'from-[#14b8a6] to-[#0d9488]',
    },
    {
      icon: Users,
      title: 'Вторая группа',
      subtitle: '6–8 класс',
      gradient: 'from-[#f59e0b] to-[#fb923c]',
    },
  ];

  return (
    <section className="py-16 md:py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#14b8a6] to-[#f59e0b] bg-clip-text text-transparent">
              📌 Для кого курс
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {groups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="relative group"
            >
              <div className="bg-[#131823] rounded-2xl p-8 md:p-10 border border-white/10 hover:border-white/20 transition-all duration-300 shadow-xl hover:shadow-2xl">
                {/* Gradient glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${group.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
                
                <div className="relative">
                  <div className={`inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br ${group.gradient} mb-6`}>
                    <group.icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {group.title}
                  </h3>
                  <p className="text-xl md:text-2xl text-gray-400">
                    {group.subtitle}
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
