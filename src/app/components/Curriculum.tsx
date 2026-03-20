import { motion } from 'motion/react';
import { 
  Plane, 
  Hotel, 
  UtensilsCrossed, 
  Map, 
  AlertCircle, 
  Ticket,
  Heart,
  Award
} from 'lucide-react';

export function Curriculum() {
  const modules = [
    {
      icon: Plane,
      title: 'Аэропорт без стресса',
      description: 'Регистрация, паспортный контроль, вопросы на таможне — всё на английском.',
      benefit: 'Уверенность уже в первые часы за границей.',
      color: '#14b8a6',
    },
    {
      icon: Hotel,
      title: 'В отеле: заселение и помощь',
      description: 'Как попросить сменить номер, вызвать уборку или спросить про Wi-Fi.',
      benefit: 'Практика вежливых фраз и повседневной лексики.',
      color: '#f59e0b',
    },
    {
      icon: UtensilsCrossed,
      title: 'Кафе и рестораны',
      description: 'Заказ еды, вопросы про аллергены, счёт и чаевые.',
      benefit: 'Развитие гастрономического словаря и уверенности в общении.',
      color: '#8b5cf6',
    },
    {
      icon: Map,
      title: 'На улице: ориентирование и просьбы',
      description: 'Как спросить дорогу, вызвать такси или найти аптеку.',
      benefit: 'Понимание устной речи и произношения в реальных ситуациях.',
      color: '#fb923c',
    },
    {
      icon: AlertCircle,
      title: 'Экстренные случаи',
      description: 'Потеря вещей, болезнь, помощь полиции — всё это на английском.',
      benefit: 'Важные фразы, которые могут спасти отпуск.',
      color: '#ec4899',
    },
    {
      icon: Ticket,
      title: 'Туризм и развлечения',
      description: 'Покупка билетов, экскурсии, общение с гидами, музеи и парки.',
      benefit: 'Погружение в культурный контекст через язык.',
      color: '#06b6d4',
    },
    {
      icon: Heart,
      title: 'Дружба в путешествиях',
      description: 'Как познакомиться с другими детьми или подростками за границей.',
      benefit: 'Игровая практика диалогов и неформального общения.',
      color: '#f59e0b',
    },
    {
      icon: Award,
      title: 'Дипломный проект: «Мой идеальный отпуск»',
      description: 'Ребёнок планирует воображаемое путешествие и представляет его на английском.',
      benefit: 'Развитие связной речи и творческого самовыражения.',
      color: '#14b8a6',
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
            <span className="bg-gradient-to-r from-[#14b8a6] via-[#f59e0b] to-[#fb923c] bg-clip-text text-transparent">
              📚 Программа курса
            </span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
          {modules.map((module, index) => (
            <motion.div
              key={module.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="relative group"
            >
              <div className="bg-[#131823] rounded-xl p-6 md:p-8 border border-white/10 hover:border-white/20 transition-all duration-300 h-full shadow-lg hover:shadow-2xl">
                {/* Animated border glow */}
                <div 
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, ${module.color}, transparent 70%)`,
                  }}
                />
                
                <div className="relative">
                  <div 
                    className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-lg mb-4"
                    style={{
                      background: `linear-gradient(135deg, ${module.color}20, ${module.color}10)`,
                      border: `1px solid ${module.color}30`,
                    }}
                  >
                    <module.icon 
                      className="w-6 h-6 md:w-7 md:h-7" 
                      style={{ color: module.color }}
                    />
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                    {module.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {module.description}
                  </p>
                  
                  <div 
                    className="flex items-start gap-2 p-3 rounded-lg"
                    style={{
                      background: `linear-gradient(135deg, ${module.color}15, ${module.color}05)`,
                    }}
                  >
                    <span className="text-lg">👉</span>
                    <p 
                      className="text-sm md:text-base leading-relaxed"
                      style={{ color: module.color }}
                    >
                      {module.benefit}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
