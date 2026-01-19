'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=2070&auto=format&fit=crop"
          alt="Traditional Korean soy sauce jars"
          fill
          className="object-cover"
          priority
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#F5E6D3]/95 via-[#F5E6D3]/90 to-white/95"></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full flex flex-col items-center justify-center text-center"
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#3E2723] leading-tight mb-8 drop-shadow-sm">
            {t.hero.title}
          </h1>
          <p className="text-xl sm:text-2xl text-[#2C2C2C] leading-relaxed mb-12 max-w-3xl drop-shadow-sm">
            {t.hero.subtitle}
          </p>
          <a 
            href="/about-us" 
            className="px-12 py-4 bg-[#3E2723] text-white text-lg font-semibold rounded-lg hover:bg-[#8D4004] transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            {t.hero.cta}
          </a>

          {/* Business Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-20 w-full max-w-md"
          >
            <a 
              href="/founder"
              className="block bg-white rounded-2xl shadow-xl p-8 border border-[#F5E6D3] hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#3E2723] to-[#8D4004] flex items-center justify-center text-white text-3xl font-bold flex-shrink-0">
                  {t.hero.card.name.charAt(0)}
                </div>
                <div className="text-left flex-1">
                  <h3 className="text-2xl font-bold text-[#3E2723] mb-1">
                    {t.hero.card.name}
                  </h3>
                  <p className="text-sm text-[#8D4004] font-medium mb-2">
                    {t.hero.card.title}
                  </p>
                  <p className="text-xs text-[#2C2C2C]">
                    {t.hero.card.tagline}
                  </p>
                </div>
              </div>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
