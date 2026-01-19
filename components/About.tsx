'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';
import { FaStar, FaAward, FaLeaf } from 'react-icons/fa';

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative w-full py-20 sm:py-28 overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1496412705862-e0088f16f791?q=80&w=2070&auto=format&fit=crop"
          alt="Traditional fermentation"
          fill
          className="object-cover opacity-50"
          quality={75}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/90 to-white/95"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-[#8D4004]/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-[#F5E6D3]/30 rounded-full blur-3xl"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full flex flex-col items-center justify-center text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-6 py-2 bg-gradient-to-r from-[#8D4004]/20 to-[#F5E6D3]/30 rounded-full backdrop-blur-sm">
            <FaStar className="text-[#8D4004]" />
            <span className="text-sm font-semibold text-[#8D4004]">Premium Quality</span>
            <FaStar className="text-[#8D4004]" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#3E2723] mb-4 drop-shadow-sm">
            {t.about.title}
          </h2>
          <p className="text-xl text-[#8D4004] font-semibold drop-shadow-sm">{t.about.subtitle}</p>
        </motion.div>

        {/* Content */}
        <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-16">
          {/* Left: Text */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 flex flex-col items-start justify-center"
          >
            <div className="relative bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-[#F5E6D3]/50 hover:shadow-2xl transition-shadow duration-300">
              {/* Decorative corner accent */}
              <div className="absolute -top-3 -left-3 w-6 h-6 border-t-4 border-l-4 border-[#8D4004] rounded-tl-lg"></div>
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-4 border-r-4 border-[#8D4004] rounded-br-lg"></div>
              
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#8D4004] to-[#3E2723] rounded-full flex items-center justify-center">
                  <FaLeaf className="text-white text-xl" />
                </div>
                <h3 className="text-3xl font-bold text-[#3E2723]">{t.about.philosophy}</h3>
              </div>
              
              <p className="text-lg text-[#2C2C2C] leading-relaxed mb-10 font-medium">
                {t.about.story}
              </p>
              
              {/* Stats */}
              <div className="w-full grid grid-cols-3 gap-4">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center text-center bg-gradient-to-br from-[#F5E6D3] to-[#E0D5C7] rounded-xl p-4 shadow-md hover:shadow-lg transition-all"
                >
                  <div className="text-4xl font-bold text-[#8D4004] mb-2">30+</div>
                  <div className="text-xs text-[#2C2C2C] font-semibold">Years<br/>Experience</div>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center text-center bg-gradient-to-br from-[#F5E6D3] to-[#E0D5C7] rounded-xl p-4 shadow-md hover:shadow-lg transition-all"
                >
                  <div className="text-4xl font-bold text-[#8D4004] mb-2">100%</div>
                  <div className="text-xs text-[#2C2C2C] font-semibold">Natural</div>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center text-center bg-gradient-to-br from-[#F5E6D3] to-[#E0D5C7] rounded-xl p-4 shadow-md hover:shadow-lg transition-all"
                >
                  <div className="text-4xl font-bold text-[#8D4004] mb-2">24m</div>
                  <div className="text-xs text-[#2C2C2C] font-semibold">Max<br/>Aging</div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right: Image */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 flex items-center justify-center"
          >
            <div className="relative w-full max-w-md">
              {/* Animated ring */}
              <motion.div 
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#8D4004]/20 via-[#F5E6D3]/20 to-[#8D4004]/20 blur-xl"
              ></motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative aspect-square bg-gradient-to-br from-[#F5E6D3] via-white to-[#E0D5C7] rounded-3xl flex items-center justify-center shadow-2xl border-4 border-white/50"
              >
                {/* Badge */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                  className="absolute -top-6 -right-6 bg-gradient-to-br from-[#8D4004] to-[#3E2723] text-white rounded-full w-20 h-20 flex flex-col items-center justify-center shadow-xl border-4 border-white"
                >
                  <FaAward className="text-2xl mb-1" />
                  <span className="text-xs font-bold">Award</span>
                </motion.div>
                
                <div className="text-[180px] leading-none drop-shadow-2xl">🫙</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
