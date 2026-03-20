import { motion } from 'motion/react';
import { MessageCircle, Target, Gamepad2, TrendingUp } from 'lucide-react';

export function WhySpecial() {
  const features = [
    {
      icon: MessageCircle,
      title: 'Живая речь',
      description: 'Акцент на практическую, живую речь, а не на грамматику ради грамматики.',
      gradient: 'from-[#14b8a6] to-[#0d9488]',
    },
    {
      icon: Target,
      title: 'Реальные ситуации',
      description: 'Все ситуации — из реальной жизни путешественника.',
      gradient: 'from-[#f59e0b] to-[#fb923c]',
    },
    {
      icon: Gamepad2,
      title: 'Интерактивность',
      description: 'Ролевые игры, аудиоситуации, мини-квесты.',
      gradient: 'from-[#8b5cf6] to-[#7c3aed]',
    },
    {
      icon: TrendingUp,
      title: 'Быстрый результат',
      description: 'Ребёнок выходит на уровень A2–B1 (Pre-Intermediate) за курс.',
      gradient: 'from-[#ec4899] to-[#db2777]',
    },
  ];

  return (
    <section className="py-16 md:py-24 relative">
      {/* Decorative gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#8b5cf6] via-[#ec4899] to-[#f59e0b] bg-clip-text text-transparent">
              ✨ Почему этот курс особенный?
            </span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="relative bg-[#131823] rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 h-full shadow-lg hover:shadow-2xl">
                {/* Icon with gradient background */}
                <motion.div
                  className={`inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br ${feature.gradient} mb-4`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <feature.icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                </motion.div>
                
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
