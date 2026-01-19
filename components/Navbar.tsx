'use client';

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const { t, language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: t.nav.home, href: '#home' },
    { name: t.nav.about, href: '#about' },
    { name: t.nav.products, href: '#products' },
    { name: t.nav.process, href: '#process' },
    { name: t.nav.contact, href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 w-full bg-white shadow-md z-50">
      <div className="w-full max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <a href="#home" className="text-2xl font-bold text-[#3E2723] hover:text-[#8D4004] transition-colors">
            Gangeong
          </a>

          <div className="hidden md:flex items-center justify-center gap-1">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-base font-medium text-[#2C2C2C] hover:text-[#8D4004] hover:bg-[#F5E6D3]/30 rounded-md transition-all"
              >
                {item.name}
              </a>
            ))}
            <div className="ml-4 flex items-center gap-2">
              <span className={`text-sm font-medium transition-colors ${language === 'en' ? 'text-[#3E2723]' : 'text-gray-400'}`}>
                EN
              </span>
              <button
                onClick={() => setLanguage(language === 'en' ? 'ko' : 'en')}
                className="relative inline-flex h-7 w-12 items-center rounded-full bg-[#3E2723] transition-colors hover:bg-[#8D4004] focus:outline-none focus:ring-2 focus:ring-[#8D4004] focus:ring-offset-2"
              >
                <span
                  className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${
                    language === 'en' ? 'translate-x-1' : 'translate-x-6'
                  }`}
                />
              </button>
              <span className={`text-sm font-medium transition-colors ${language === 'ko' ? 'text-[#3E2723]' : 'text-gray-400'}`}>
                KO
              </span>
            </div>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[#3E2723]"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-6 py-4 space-y-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base text-[#2C2C2C] hover:text-[#8D4004] hover:bg-[#F5E6D3]/30 rounded-md"
              >
                {item.name}
              </a>
            ))}
            <div className="flex items-center justify-center gap-3 py-3">
              <span className={`text-sm font-medium transition-colors ${language === 'en' ? 'text-[#3E2723]' : 'text-gray-400'}`}>
                EN
              </span>
              <button
                onClick={() => {
                  setLanguage(language === 'en' ? 'ko' : 'en');
                  setIsOpen(false);
                }}
                className="relative inline-flex h-8 w-14 items-center rounded-full bg-[#3E2723] transition-colors focus:outline-none focus:ring-2 focus:ring-[#8D4004] focus:ring-offset-2"
              >
                <span
                  className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                    language === 'en' ? 'translate-x-1' : 'translate-x-7'
                  }`}
                />
              </button>
              <span className={`text-sm font-medium transition-colors ${language === 'ko' ? 'text-[#3E2723]' : 'text-gray-400'}`}>
                KO
              </span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
