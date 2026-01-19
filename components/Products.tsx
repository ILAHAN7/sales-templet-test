'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { FaCheckCircle } from 'react-icons/fa';

export default function Products() {
  const { t } = useLanguage();

  return (
    <section id="products" className="w-full py-20 sm:py-28 bg-gradient-to-b from-white to-[#F5E6D3]/30">
      <div className="w-full max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="w-full flex flex-col items-center justify-center text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#3E2723] mb-4">
            {t.products.title}
          </h2>
          <p className="text-xl text-[#8D4004]">{t.products.subtitle}</p>
        </div>

        {/* Products Grid */}
        <div className="w-full flex flex-wrap items-stretch justify-center gap-8">
          {t.products.items.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-sm bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all overflow-hidden"
            >
              {/* Image */}
              <div className="w-full aspect-square bg-gradient-to-br from-[#F5E6D3] to-[#E0D5C7] flex items-center justify-center">
                <div className="text-[140px] leading-none">🍶</div>
              </div>
              
              {/* Content */}
              <div className="p-6 flex flex-col">
                <h3 className="text-2xl font-bold text-[#3E2723] mb-3">
                  {product.name}
                </h3>
                <p className="text-base text-[#2C2C2C] leading-relaxed mb-5">
                  {product.description}
                </p>
                
                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-[#2C2C2C]">
                      <FaCheckCircle className="text-[#8D4004] mr-2 mt-0.5 flex-shrink-0" size={16} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Button */}
                <a 
                  href={`/products/${index}`}
                  className="w-full py-3 bg-[#3E2723] text-white font-semibold rounded-lg hover:bg-[#8D4004] transition-all text-center block"
                >
                  Learn More
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
