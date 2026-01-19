'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { FaCheckCircle } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import Image from 'next/image';

export default function FounderPage() {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="fixed inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?q=80&w=2084&auto=format&fit=crop"
          alt="Traditional Korean kitchen"
          fill
          className="object-cover"
          quality={75}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#F5E6D3]/96 to-white/94"></div>
      </div>

      <div className="relative z-10">
        <Navbar />
        
        <main className="pt-24 pb-16">
        <div className="w-full max-w-6xl mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl sm:text-6xl font-bold text-[#3E2723] mb-6">
              {t.founder.title}
            </h1>
            <p className="text-xl text-[#8D4004] mb-4">{t.founder.subtitle}</p>
            <p className="text-lg text-[#2C2C2C] max-w-3xl mx-auto italic">
              {t.founder.intro}
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="flex flex-col lg:flex-row gap-12 mb-16">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-5/12"
            >
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-[#3E2723] to-[#8D4004] rounded-3xl transform rotate-6"></div>
                <div className="relative w-full aspect-square bg-gradient-to-br from-[#8D4004] to-[#3E2723] rounded-3xl flex items-center justify-center shadow-2xl">
                  <div className="text-[200px] leading-none filter drop-shadow-lg">👨‍🍳</div>
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl px-6 py-4 border-2 border-[#3E2723]">
                  <div className="text-3xl font-bold text-[#8D4004]">30+</div>
                  <div className="text-sm text-[#2C2C2C] font-medium">Years</div>
                </div>
              </div>
            </motion.div>

            {/* Bio & Details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-7/12"
            >
              <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-[#F5E6D3]">
                <h2 className="text-3xl font-bold text-[#3E2723] mb-4">{t.hero.card.name}</h2>
                <p className="text-lg text-[#8D4004] font-medium mb-6">{t.hero.card.title}</p>
                <p className="text-lg text-[#2C2C2C] leading-relaxed mb-8">
                  {t.founder.bio}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-bold text-[#3E2723] mb-3 flex items-center gap-2">
                      <span className="text-2xl">🛤️</span>
                      {t.founder.journey}
                    </h3>
                    <p className="text-sm text-[#2C2C2C] leading-relaxed">
                      {t.founder.journeyText}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-[#3E2723] mb-3 flex items-center gap-2">
                      <span className="text-2xl">💡</span>
                      {t.founder.philosophy}
                    </h3>
                    <p className="text-sm text-[#2C2C2C] leading-relaxed">
                      {t.founder.philosophyText}
                    </p>
                  </div>
                </div>
              </div>

              {/* Credentials */}
              <div className="bg-[#3E2723] rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-[#F5E6D3] mb-6">
                  {t.founder.credentials.title}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {t.founder.credentials.items.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <FaCheckCircle className="text-[#8D4004] text-xl flex-shrink-0 mt-1" />
                      <span className="text-[#F5E6D3] text-sm leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mb-12"
          >
            <blockquote className="text-2xl sm:text-3xl font-bold text-[#3E2723] italic leading-relaxed">
              "{t.founder.philosophyText}"
            </blockquote>
          </motion.div>

          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <Link 
              href="/"
              className="inline-block px-8 py-4 bg-[#3E2723] text-white text-lg font-semibold rounded-lg hover:bg-[#8D4004] transition-all shadow-lg"
            >
              Back to Home
            </Link>
          </motion.div>
        </div>
      </main>
      </div>
    </div>
  );
}
