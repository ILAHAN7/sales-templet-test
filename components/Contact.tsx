'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="w-full py-20 sm:py-28 bg-gradient-to-b from-white to-[#F5E6D3]/50">
      <div className="w-full max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="w-full flex flex-col items-center justify-center text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#3E2723] mb-4">
            {t.contact.title}
          </h2>
          <p className="text-xl text-[#8D4004]">{t.contact.subtitle}</p>
        </div>

        {/* Content */}
        <div className="w-full flex flex-col lg:flex-row items-start justify-center gap-12 max-w-6xl mx-auto">
          {/* Left: Contact Info */}
          <div className="w-full lg:w-1/2 flex flex-col">
            <h3 className="text-2xl font-bold text-[#3E2723] mb-8">Contact Information</h3>
            
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-[#F5E6D3] rounded-full flex items-center justify-center flex-shrink-0">
                  <FaEnvelope className="text-[#8D4004] text-xl" />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="font-bold text-[#3E2723] text-base mb-1">{t.contact.email}</p>
                  <p className="text-[#2C2C2C]">info@gangeong.com</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-[#F5E6D3] rounded-full flex items-center justify-center flex-shrink-0">
                  <FaPhone className="text-[#8D4004] text-xl" />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="font-bold text-[#3E2723] text-base mb-1">{t.contact.phone}</p>
                  <p className="text-[#2C2C2C]">+1 (555) 123-4567</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-[#F5E6D3] rounded-full flex items-center justify-center flex-shrink-0">
                  <FaMapMarkerAlt className="text-[#8D4004] text-xl" />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="font-bold text-[#3E2723] text-base mb-1">{t.contact.location}</p>
                  <p className="text-[#2C2C2C]">Los Angeles, CA</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="w-full lg:w-1/2 bg-white rounded-3xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-[#3E2723] mb-6">Send us a message</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder={t.contact.form.name}
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-[#8D4004]"
              />
              <input
                type="email"
                placeholder={t.contact.form.email}
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-[#8D4004]"
              />
              <textarea
                placeholder={t.contact.form.message}
                rows={5}
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-[#8D4004] resize-none"
              />
              <button
                type="submit"
                className="w-full py-3 bg-[#3E2723] text-white font-semibold rounded-lg hover:bg-[#8D4004] transition-all"
              >
                {t.contact.form.submit}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
