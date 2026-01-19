import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { translations } from '@/lib/i18n';
import ProductDetailClient from '@/components/ProductDetailClient';
import type { Metadata } from 'next';
import Image from 'next/image';

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const productIndex = parseInt(resolvedParams.id);
  
  // English product data for SEO (default)
  const products = [
    {
      name: 'Traditional Ganjang',
      description: 'Classic Korean soy sauce aged for 12 months. Rich, deep flavor perfect for all Korean dishes.',
    },
    {
      name: 'Premium Yangjo Ganjang',
      description: 'Premium aged soy sauce with complex umami flavors. Aged for 24 months for ultimate depth.',
    },
    {
      name: 'Jin Ganjang (Dark Soy Sauce)',
      description: 'Rich, dark soy sauce perfect for stews and marinades. Bold flavor with natural sweetness.',
    },
  ];

  const product = products[productIndex];

  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }

  return {
    title: `${product.name} - Premium Korean Soy Sauce`,
    description: product.description,
    keywords: [product.name, "Korean soy sauce", "ganjang", "artisan", "handcrafted", "traditional fermentation", "premium soy sauce"],
    openGraph: {
      title: `${product.name} | Gangeong`,
      description: product.description,
      url: `/products/${productIndex}`,
      type: "website",
      images: [
        {
          url: `/products/soy-sauce-${productIndex + 1}.jpg`,
          width: 1200,
          height: 1200,
          alt: product.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | Gangeong`,
      description: product.description,
      images: [`/products/soy-sauce-${productIndex + 1}.jpg`],
    },
  };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const productIndex = parseInt(resolvedParams.id);
  
  // Use English by default for SSR
  const t = translations.en;
  const product = t.products.items[productIndex];

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#F5E6D3] to-white">
        <Navbar />
        <main className="pt-24 pb-16">
          <div className="w-full max-w-5xl mx-auto px-6 text-center">
            <h1 className="text-4xl font-bold text-[#3E2723] mb-6">Product Not Found</h1>
            <Link 
              href="/"
              className="inline-block px-8 py-4 bg-[#3E2723] text-white text-lg font-semibold rounded-lg hover:bg-[#8D4004] transition-all"
            >
              Back to Home
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="fixed inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=2070&auto=format&fit=crop"
          alt="Soy sauce bottles"
          fill
          className="object-cover"
          quality={75}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#F5E6D3]/96 to-white/94"></div>
      </div>

      <div className="relative z-10">
        <Navbar />
        <ProductDetailClient product={product} productIndex={productIndex} t={t} />
      </div>
    </div>
  );
}
