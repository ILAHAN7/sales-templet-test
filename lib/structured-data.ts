// JSON-LD structured data for SEO
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Gangeong',
    description: 'Premium handmade Korean soy sauce crafted with traditional fermentation methods',
    url: 'https://gangeong.com',
    logo: 'https://gangeong.com/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: 'info@gangeong.com',
    },
    sameAs: [
      'https://facebook.com/gangeong',
      'https://instagram.com/gangeong',
      'https://twitter.com/gangeong',
    ],
  };
}

export function generateProductSchema(product: {
  name: string;
  description: string;
  image: string;
  price?: string;
  availability?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.image,
    brand: {
      '@type': 'Brand',
      name: 'Gangeong',
    },
    offers: {
      '@type': 'Offer',
      price: product.price || '0',
      priceCurrency: 'USD',
      availability: product.availability || 'https://schema.org/InStock',
    },
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generatePersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Master Kim',
    jobTitle: 'Founder & Master Artisan',
    description: '30+ years of traditional Korean fermentation expertise',
    worksFor: {
      '@type': 'Organization',
      name: 'Gangeong',
    },
    knowsAbout: [
      'Korean Fermentation',
      'Traditional Soy Sauce Making',
      'Artisan Food Production',
    ],
  };
}

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://gangeong.com',
    name: 'Gangeong',
    description: 'Premium handmade Korean soy sauce crafted with traditional fermentation methods',
    url: 'https://gangeong.com',
    telephone: '+1-XXX-XXX-XXXX',
    email: 'info@gangeong.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Your City',
      addressRegion: 'State',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 0,
      longitude: 0,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '17:00',
    },
    priceRange: '$$',
    servesCuisine: 'Korean',
  };
}
