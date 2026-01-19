'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import Image from 'next/image';

export default function AboutUsPage() {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="fixed inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1609501676725-7186f017a4b7?q=80&w=2070&auto=format&fit=crop"
          alt="Korean traditional food"
          fill
          className="object-cover"
          quality={75}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#F5E6D3]/96 to-white/94"></div>
      </div>

      <div className="relative z-10">
        <Navbar />
        
        <main className="pt-24 pb-16">
        <div className="w-full max-w-5xl mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl sm:text-6xl font-bold text-[#3E2723] mb-6">
              {t.aboutUs.title}
            </h1>
            <p className="text-xl text-[#8D4004] leading-relaxed max-w-3xl mx-auto">
              {t.aboutUs.subtitle}
            </p>
          </motion.div>

          {/* Origin Story */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 mb-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="text-5xl">🌱</span>
              <h2 className="text-3xl font-bold text-[#3E2723]">{t.aboutUs.origin.title}</h2>
            </div>
            <p className="text-lg text-[#2C2C2C] leading-relaxed mb-6">
              {t.aboutUs.origin.story}
            </p>
          </motion.section>

          {/* Mission */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#3E2723] rounded-3xl shadow-xl p-8 sm:p-12 mb-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="text-5xl">🎯</span>
              <h2 className="text-3xl font-bold text-[#F5E6D3]">{t.aboutUs.mission.title}</h2>
            </div>
            <p className="text-lg text-[#F5E6D3] leading-relaxed">
              {t.aboutUs.mission.content}
            </p>
          </motion.section>

          {/* Values */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 mb-8"
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="text-5xl">💎</span>
              <h2 className="text-3xl font-bold text-[#3E2723]">{t.aboutUs.values.title}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {t.aboutUs.values.items.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl mb-3">{value.icon}</div>
                  <h3 className="text-xl font-bold text-[#3E2723] mb-2">{value.title}</h3>
                  <p className="text-sm text-[#2C2C2C]">{value.description}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center my-16"
          >
            <blockquote className="text-2xl sm:text-3xl font-bold text-[#3E2723] italic leading-relaxed">
              "{t.aboutUs.quote}"
            </blockquote>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center"
          >
            <Link 
              href="/"
              className="inline-block px-8 py-4 bg-[#3E2723] text-white text-lg font-semibold rounded-lg hover:bg-[#8D4004] transition-all shadow-lg"
            >
              {t.aboutUs.backHome}
            </Link>
          </motion.div>
        </div>
      </main>      </div>    </div>
  );
}
