import { motion } from 'motion/react';
import { Package, CreditCard } from 'lucide-react';

export function Pricing() {
  const options = [
    {
      icon: Package,
      title: 'Полный курс',
      details: '10 уроков',
      price: '12 000 ₽',
      highlight: true,
      gradient: 'from-[#14b8a6] to-[#0d9488]',
    },
    {
      icon: CreditCard,
      title: 'Абонемент',
      details: 'за 1 урок',
      price: '1 300 ₽',
      highlight: false,
      gradient: 'from-[#f59e0b] to-[#fb923c]',
    },
  ];

  return (
    <section className="py-16 md:py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#14b8a6] via-[#f59e0b] to-[#fb923c] bg-clip-text text-transparent">
              💳 Стоимость
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {options.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="relative group"
            >
              <div className={`bg-[#131823] rounded-2xl p-8 md:p-10 border transition-all duration-300 shadow-lg hover:shadow-2xl ${
                option.highlight 
                  ? 'border-[#14b8a6]/50 hover:border-[#14b8a6]' 
                  : 'border-white/10 hover:border-white/20'
              }`}>
                {option.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex px-4 py-1 bg-gradient-to-r from-[#14b8a6] to-[#0d9488] text-white text-sm rounded-full">
                      Популярный
                    </span>
                  </div>
                )}
                
                {/* Glow effect */}
                <div 
                  className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-br ${option.gradient}`}
                />
                
                <div className="relative">
                  <div 
                    className={`inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br ${option.gradient} mb-6`}
                  >
                    <option.icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {option.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-6">
                    {option.details}
                  </p>
                  
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#14b8a6] to-[#f59e0b] bg-clip-text text-transparent">
                      {option.price.split(' ')[0]}
                    </span>
                    <span className="text-2xl text-gray-400">
                      ₽
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#14b8a6]/10 to-[#f59e0b]/10 border border-[#14b8a6]/30 rounded-full">
            <span className="text-lg text-gray-200">
              📢 Группы маленькие — максимум 6 детей
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
