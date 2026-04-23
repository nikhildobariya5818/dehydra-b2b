import { Metadata } from 'next'

export const baseMetadata: Metadata = {
  title: 'DeHydra B2B - Premium Hydration Solutions',
  description: 'DeHydra B2B provides enterprise-grade hydration solutions with institutional standards and advanced traceability for modern businesses.',
  keywords: 'hydration, B2B solutions, institutional standards, water treatment, quality assurance',
  authors: [{ name: 'DeHydra B2B' }],
  creator: 'DeHydra B2B',
  publisher: 'DeHydra B2B',
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://dehydra-b2b.com',
    siteName: 'DeHydra B2B',
    title: 'DeHydra B2B - Premium Hydration Solutions',
    description: 'Enterprise-grade hydration solutions with institutional standards and advanced traceability.',
    images: [
      {
        url: 'https://dehydra-b2b.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'DeHydra B2B',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DeHydra B2B - Premium Hydration Solutions',
    description: 'Enterprise-grade hydration solutions for modern businesses',
    creator: '@dehydrab2b',
    images: ['https://dehydra-b2b.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://dehydra-b2b.com',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
}

export const generateProductMetadata = (
  product: { name: string; description: string; slug: string; image: string },
  baseUrl: string = 'https://dehydra-b2b.com'
): Metadata => ({
  title: `${product.name} | DeHydra B2B`,
  description: product.description,
  keywords: `${product.name}, hydration, B2B, solutions`,
  openGraph: {
    type: 'product',
    title: `${product.name} | DeHydra B2B`,
    description: product.description,
    url: `${baseUrl}/products/${product.slug}`,
    images: [
      {
        url: product.image,
        width: 1200,
        height: 630,
        alt: product.name,
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${product.name} | DeHydra B2B`,
    description: product.description,
    images: [product.image],
  },
  alternates: {
    canonical: `${baseUrl}/products/${product.slug}`,
  },
})

export const generateArticleMetadata = (
  article: {
    title: string
    excerpt: string
    slug: string
    author: string
    publishedAt: string
    image: string
    category: string
  },
  baseUrl: string = 'https://dehydra-b2b.com'
): Metadata => ({
  title: `${article.title} | DeHydra B2B Blog`,
  description: article.excerpt,
  keywords: `${article.title}, ${article.category}, blog, dehydra`,
  authors: [{ name: article.author }],
  publishedTime: article.publishedAt,
  openGraph: {
    type: 'article',
    title: `${article.title} | DeHydra B2B`,
    description: article.excerpt,
    url: `${baseUrl}/blog/${article.slug}`,
    publishedTime: article.publishedAt,
    authors: [article.author],
    images: [
      {
        url: article.image,
        width: 1200,
        height: 630,
        alt: article.title,
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${article.title} | DeHydra B2B`,
    description: article.excerpt,
    images: [article.image],
  },
  alternates: {
    canonical: `${baseUrl}/blog/${article.slug}`,
  },
})
