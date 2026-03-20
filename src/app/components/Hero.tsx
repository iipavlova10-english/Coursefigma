import { motion } from 'motion/react';
import { Plane, Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Animated background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-1/2 -right-1/4 w-96 h-96 md:w-[600px] md:h-[600px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, #14b8a6 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-1/2 -left-1/4 w-96 h-96 md:w-[600px] md:h-[600px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, #f59e0b 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.25, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Icon */}
          <motion.div
            className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-[#14b8a6] to-[#0d9488] mb-6 md:mb-8"
            animate={{
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Plane className="w-8 h-8 md:w-10 md:h-10 text-white" />
          </motion.div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8">
            <span className="inline-block bg-gradient-to-r from-[#14b8a6] via-[#f59e0b] to-[#fb923c] bg-clip-text text-transparent">
              Английский для путешествий
            </span>
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed px-4"
          >
            Мечтаете свободно общаться за границей — от заказа кофе до поиска утраченного чемодана? 
            Этот курс научит вашего ребёнка реальному разговорному английскому, который пригодится в отпуске, 
            поездках и будущих путешествиях!
          </motion.p>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#14b8a6]/20 to-[#f59e0b]/20 border border-[#14b8a6]/30 rounded-full backdrop-blur-sm"
          >
            <Sparkles className="w-5 h-5 text-[#f59e0b]" />
            <span className="text-sm md:text-base text-gray-200">Набор открыт! Места ограничены</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
