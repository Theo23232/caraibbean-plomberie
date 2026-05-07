import type { Metadata, Viewport } from "next";
import { Inter, Outfit, Bebas_Neue } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { SITE } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default:
      "Plombier Guadeloupe — Caraibbean Plomberie | Dépannage 7j/7 Morne-à-l'Eau",
    template: "%s | Caraibbean Plomberie",
  },
  description:
    "Caraibbean Plomberie, votre plombier en Guadeloupe. Dépannage urgence, installation chauffe-eau, détection de fuite. ☎️ 06 90 80 63 99. Devis gratuit.",
  keywords: [
    "plombier Guadeloupe",
    "plombier Morne-à-l'Eau",
    "dépannage plomberie urgence Guadeloupe",
    "fuite eau Guadeloupe",
    "chauffe-eau Guadeloupe",
    "débouchage canalisation Guadeloupe",
    "plombier Pointe-à-Pitre",
    "plombier Le Gosier",
  ],
  authors: [{ name: "Caraibbean Plomberie" }],
  creator: "Caraibbean Plomberie",
  publisher: "Caraibbean Plomberie",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE.url,
    siteName: SITE.name,
    title:
      "Plombier Guadeloupe — Caraibbean Plomberie | Dépannage 7j/7",
    description:
      "Dépannage urgence, installation chauffe-eau, détection de fuite dans toute la Guadeloupe. Devis gratuit, intervention rapide.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1606274741559-d3a98f24f88e?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Caraibbean Plomberie — Plombier en Guadeloupe",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Caraibbean Plomberie — Plombier Guadeloupe",
    description:
      "Dépannage urgence, installation, rénovation. Toute la Guadeloupe. ☎️ 06 90 80 63 99",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#1e3a5f",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Plumber",
  name: SITE.name,
  description: SITE.shortDescription,
  url: SITE.url,
  telephone: SITE.phoneDisplayFull,
  priceRange: "€€",
  image:
    "https://images.unsplash.com/photo-1606274741559-d3a98f24f88e?auto=format&fit=crop&w=1200&q=80",
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street,
    postalCode: SITE.address.postalCode,
    addressLocality: SITE.address.city,
    addressRegion: SITE.address.region,
    addressCountry: SITE.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 16.3372,
    longitude: -61.4067,
  },
  areaServed: SITE.zones.map((z) => ({
    "@type": "City",
    name: z,
  })),
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: "07:00",
      closes: "20:00",
    },
  ],
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${outfit.variable} ${bebas.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white text-noir">
        <Script
          id="schema-plumber"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-1 pt-16 md:pt-20">{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
