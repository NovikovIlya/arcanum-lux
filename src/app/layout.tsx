import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Arcanum Lux — Расклады Таро | Карта дня, расклады, дневник",
  description:
    "Arcanum Lux — приложение для тех, кто использует Таро как инструмент саморефлексии. Карта дня, 78 карт с трактовками, расклады и личный дневник.",
  keywords: [
    "таро",
    "расклады таро",
    "карта дня",
    "таро онлайн",
    "таро приложение",
    "таро значения",
    "расклад таро на любовь",
    "кельтский крест",
    "таро дневник",
    "tarot",
    "tarot reading",
    "daily card",
    "arcanum lux",
    "таро саморефлексия",
  ],
  authors: [{ name: "Nurr0" }],
  creator: "Nurr0",
  publisher: "Nurr0",
  metadataBase: new URL("https://nurr0.github.io"),
  alternates: {
    canonical: "/arcanum-lux-landing",
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://nurr0.github.io/arcanum-lux-landing",
    siteName: "Arcanum Lux",
    title: "Arcanum Lux — Расклады Таро",
    description:
      "Карта дня, полная колода из 78 карт с подробными трактовками и личный дневник. Приложение для саморефлексии через Таро.",
    images: [
      {
        url: "https://play-lh.googleusercontent.com/BPX_fIZGSRYp8h7Tk7GzgkwdbqRqDe9a9nbWI39Ib5Vk0uy91bfMRDjzl3ftMKGUd_-6Db7_kkx_IREGHQmI=w2560-h1440",
        width: 2560,
        height: 1440,
        alt: "Arcanum Lux — Карта дня",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arcanum Lux — Расклады Таро",
    description:
      "Карта дня, полная колода из 78 карт с подробными трактовками и личный дневник.",
    images: [
      "https://play-lh.googleusercontent.com/BPX_fIZGSRYp8h7Tk7GzgkwdbqRqDe9a9nbWI39Ib5Vk0uy91bfMRDjzl3ftMKGUd_-6Db7_kkx_IREGHQmI=w2560-h1440",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0118",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ru" className={`${inter.variable} h-full antialiased`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MobileApplication",
              name: "Arcanum Lux — Расклады Таро",
              operatingSystem: "ANDROID",
              applicationCategory: "LifestyleApplication",
              description:
                "Приложение для саморефлексии через Таро. Карта дня, 78 карт с трактовками, расклады и личный дневник.",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "KZT",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                ratingCount: "100",
              },
              url: "https://play.google.com/store/apps/details?id=com.nurr0.arcanum_lux",
              screenshot:
                "https://play-lh.googleusercontent.com/BPX_fIZGSRYp8h7Tk7GzgkwdbqRqDe9a9nbWI39Ib5Vk0uy91bfMRDjzl3ftMKGUd_-6Db7_kkx_IREGHQmI=w2560-h1440",
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#0a0118] text-white">
        {children}
      </body>
    </html>
  );
}
