'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export default function NotFound() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: '404',
      subtitle: 'Page Not Found',
      message: 'The page you are looking for might have been moved or doesn\'t exist.',
      home: 'Back to Home',
      products: 'View Products',
      contact: 'Contact Us',
    },
    ko: {
      title: '404',
      subtitle: '페이지를 찾을 수 없습니다',
      message: '찾으시는 페이지가 이동되었거나 존재하지 않습니다.',
      home: '홈으로 돌아가기',
      products: '제품 보기',
      contact: '연락하기',
    },
  };

  const t = content[language];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F5E6D3] to-white px-6">
      <div className="w-full max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* 404 Number with soy sauce bottle emoji */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <div className="text-[120px] sm:text-[180px] font-bold text-[#3E2723] leading-none">
              {t.title}
            </div>
            <div className="text-[80px] leading-none">🍶</div>
          </motion.div>

          {/* Subtitle */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-3xl sm:text-4xl font-bold text-[#3E2723] mb-4"
          >
            {t.subtitle}
          </motion.h1>

          {/* Message */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg text-[#2C2C2C] mb-12 max-w-md mx-auto"
          >
            {t.message}
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="/"
              className="w-full sm:w-auto px-8 py-4 bg-[#3E2723] text-white text-lg font-semibold rounded-lg hover:bg-[#8D4004] transition-all shadow-lg hover:shadow-xl"
            >
              {t.home}
            </Link>
            <Link
              href="/#products"
              className="w-full sm:w-auto px-8 py-4 bg-white text-[#3E2723] text-lg font-semibold rounded-lg hover:bg-[#F5E6D3] transition-all border-2 border-[#3E2723]"
            >
              {t.products}
            </Link>
            <Link
              href="/#contact"
              className="w-full sm:w-auto px-8 py-4 bg-white text-[#3E2723] text-lg font-semibold rounded-lg hover:bg-[#F5E6D3] transition-all border-2 border-[#3E2723]"
            >
              {t.contact}
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
