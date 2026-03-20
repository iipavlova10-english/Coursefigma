import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, #14b8a6 0%, transparent 70%)',
          }}
          animate={{
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, #f59e0b 0%, transparent 70%)',
          }}
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-[#131823] via-[#1a1f2e] to-[#131823] rounded-3xl p-8 md:p-12 lg:p-16 border border-white/10 shadow-2xl text-center relative overflow-hidden"
        >
          {/* Decorative elements */}
          <motion.div
            className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-br from-[#14b8a6]/20 to-transparent blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-gradient-to-br from-[#f59e0b]/20 to-transparent blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <div className="relative">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, type: "spring" }}
              className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-[#14b8a6] to-[#0d9488] mb-6"
            >
              <Sparkles className="w-8 h-8 md:w-10 md:h-10 text-white" />
            </motion.div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#14b8a6] via-[#f59e0b] to-[#fb923c] bg-clip-text text-transparent">
                Запишитесь сейчас!
              </span>
            </h2>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed">
              Следующее путешествие станет первым, где ваш ребёнок заговорит по-английски без страха!
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center gap-3 px-8 md:px-10 py-4 md:py-5 bg-gradient-to-r from-[#14b8a6] to-[#0d9488] text-white rounded-2xl shadow-lg hover:shadow-[#14b8a6]/50 transition-all duration-300 text-lg md:text-xl font-bold"
            >
              <span>Записаться на курс</span>
              <motion.div
                animate={{
                  x: [0, 5, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <ArrowRight className="w-6 h-6" />
              </motion.div>
            </motion.button>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-6 text-sm md:text-base text-gray-400"
            >
              Места ограничены! Не упустите возможность
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
