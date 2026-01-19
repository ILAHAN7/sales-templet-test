'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';

export default function Process() {
  const { t } = useLanguage();
  const icons = ['🌾', '⏱️', '🏺', '✨'];

  return (
    <section id="process" className="relative w-full py-20 sm:py-28 overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1601314002592-3fa3b95639e6?q=80&w=2070&auto=format&fit=crop"
          alt="Traditional Korean pottery"
          fill
          className="object-cover"
          quality={75}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/93 to-white/95"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="w-full flex flex-col items-center justify-center text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#3E2723] mb-4">
            {t.process.title}
          </h2>
          <p className="text-xl text-[#8D4004]">{t.process.subtitle}</p>
        </div>

        {/* Steps Grid */}
        <div className="w-full flex flex-wrap items-start justify-center gap-8">
          {t.process.steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)] flex flex-col items-center text-center"
            >
              {/* Icon */}
              <div className="w-32 h-32 bg-gradient-to-br from-[#F5E6D3] to-[#E0D5C7] rounded-full flex items-center justify-center shadow-lg mb-5">
                <div className="text-6xl">{icons[index]}</div>
              </div>
              
              {/* Step Number */}
              <div className="text-lg font-bold text-[#8D4004] mb-2">
                Step {index + 1}
              </div>
              
              {/* Title */}
              <h3 className="text-2xl font-bold text-[#3E2723] mb-3">
                {step.title}
              </h3>
              
              {/* Description */}
              <p className="text-base text-[#2C2C2C] leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
