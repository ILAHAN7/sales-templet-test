'use client';

import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import Link from 'next/link';

interface ProductDetailClientProps {
  product: {
    name: string;
    description: string;
    features: string[];
  };
  productIndex: number;
  t: {
    contact: {
      title: string;
    };
  };
}

export default function ProductDetailClient({ product, productIndex, t }: ProductDetailClientProps) {
  return (
    <main className="pt-24 pb-16">
      <div className="w-full max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative w-full aspect-square bg-gradient-to-br from-[#F5E6D3] to-[#E0D5C7] rounded-3xl flex items-center justify-center shadow-2xl">
              <div className="text-[250px] leading-none">🍶</div>
            </div>
          </motion.div>

          {/* Product Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-[#F5E6D3]">
              <h1 className="text-4xl sm:text-5xl font-bold text-[#3E2723] mb-6">
                {product.name}
              </h1>
              
              <p className="text-lg text-[#2C2C2C] leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Features */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-[#3E2723] mb-4">Key Features</h2>
                <ul className="space-y-3">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-base text-[#2C2C2C]">
                      <FaCheckCircle className="text-[#8D4004] mr-3 mt-1 flex-shrink-0" size={20} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Additional Info */}
              <div className="border-t border-[#F5E6D3] pt-6 mb-8">
                <h3 className="text-xl font-bold text-[#3E2723] mb-4">Perfect For:</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-4 py-2 bg-[#F5E6D3] text-[#3E2723] rounded-full text-sm font-medium">Korean Cuisine</span>
                  <span className="px-4 py-2 bg-[#F5E6D3] text-[#3E2723] rounded-full text-sm font-medium">Marinades</span>
                  <span className="px-4 py-2 bg-[#F5E6D3] text-[#3E2723] rounded-full text-sm font-medium">Dipping Sauces</span>
                  <span className="px-4 py-2 bg-[#F5E6D3] text-[#3E2723] rounded-full text-sm font-medium">Stir-fries</span>
                </div>
              </div>

              {/* CTA */}
              <div className="flex gap-4">
                <Link 
                  href="/#contact"
                  className="flex-1 px-6 py-4 bg-[#3E2723] text-white text-center font-semibold rounded-lg hover:bg-[#8D4004] transition-all shadow-lg"
                >
                  {t.contact.title}
                </Link>
                <Link 
                  href="/"
                  className="flex-1 px-6 py-4 bg-white text-[#3E2723] text-center font-semibold rounded-lg hover:bg-[#F5E6D3] transition-all border-2 border-[#3E2723]"
                >
                  Back to Home
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
