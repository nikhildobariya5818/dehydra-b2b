import type { Metadata, Viewport } from 'next'
import './globals.css'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: "De'Hydra - Organic Dehydrated Food Exports",
    template: "%s | De'Hydra Exports",
  },
  description:
    "Premium institutional organic dehydrated food solutions for global B2B export. Vegetables, fruits, spices, and herbs processed with advanced dehydration technology.",
  keywords: [
    'dehydrated food',
    'organic exports',
    'bulk food ingredients',
    'institutional food',
    'B2B food supplier',
    'dehydrated vegetables',
    'spices export',
  ],
  authors: [{ name: "De'Hydra Exports" }],
  creator: "De'Hydra Exports",
  publisher: "De'Hydra Exports",
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://dehydra.example.com',
    siteName: "De'Hydra Exports",
    title: "De'Hydra - Organic Dehydrated Food Exports",
    description:
      'Premium institutional organic dehydrated food solutions for global B2B export.',
    images: [
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMYYXrhmoFR93BseOdg8lDxnS8v0i4mPHHl--_ZFo-Yei88vQWDQn4piJl7ivE03-1B1Zt1VjZlarVTfE-6jqVFcbuCMcuyXmC6OOv94cf5tItAUpm5vdYUhIqY5wt11ZIkPNQXvCP1sy_BpjIS-HND-aV6oJ7s-qhzXNAGzYtZn1BaGhP_0cLZrgcmrGdQI-Emv7KYx5hM6q8oD7KPh1hkuiPiQKYoSk6gnqC0a3-QGOadPPv8LcMq2tFquaXyW1tDSbEPkWbYxg',
        width: 1200,
        height: 630,
        alt: "De'Hydra Dehydrated Vegetables",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "De'Hydra - Organic Dehydrated Food Exports",
    description:
      'Premium institutional organic dehydrated food solutions for global B2B export.',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAMYYXrhmoFR93BseOdg8lDxnS8v0i4mPHHl--_ZFo-Yei88vQWDQn4piJl7ivE03-1B1Zt1VjZlarVTfE-6jqVFcbuCMcuyXmC6OOv94cf5tItAUpm5vdYUhIqY5wt11ZIkPNQXvCP1sy_BpjIS-HND-aV6oJ7s-qhzXNAGzYtZn1BaGhP_0cLZrgcmrGdQI-Emv7KYx5hM6q8oD7KPh1hkuiPiQKYoSk6gnqC0a3-QGOadPPv8LcMq2tFquaXyW1tDSbEPkWbYxg',
    ],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#012d1d',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-surface scroll-smooth">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body>
        <Navigation />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
