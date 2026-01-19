import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { generateOrganizationSchema } from "@/lib/structured-data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: {
    default: "Gangeong - Artisan Soy Sauce | Handcrafted Korean Ganjang",
    template: "%s | Gangeong"
  },
  description: "Premium handmade soy sauce crafted with time-honored Korean traditions in America. Experience authentic flavors from traditional fermentation methods.",
  keywords: ["soy sauce", "ganjang", "Korean food", "artisan", "handmade", "fermented", "traditional", "Korean cuisine", "premium soy sauce", "authentic ganjang"],
  authors: [{ name: "Gangeong" }],
  creator: "Gangeong",
  publisher: "Gangeong",
  metadataBase: new URL('https://gangeong.com'),
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["ko_KR"],
    url: "https://gangeong.com",
    title: "Gangeong - Artisan Soy Sauce | Handcrafted Korean Ganjang",
    description: "Premium handmade soy sauce crafted with time-honored Korean traditions in America. Experience authentic flavors from traditional fermentation methods.",
    siteName: "Gangeong",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Gangeong Artisan Soy Sauce",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gangeong - Artisan Soy Sauce | Handcrafted Korean Ganjang",
    description: "Premium handmade soy sauce crafted with time-honored Korean traditions in America.",
    images: ["/og-image.jpg"],
    creator: "@gangeong",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = generateOrganizationSchema();

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} antialiased`} suppressHydrationWarning>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
