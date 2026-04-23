// Schema.org structured data markup for SEO

export const generateProductSchema = (product: {
  name: string
  description: string
  image: string
  price?: string
  rating?: number
  reviewCount?: number
}) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.image,
    ...(product.price && { price: product.price }),
    ...(product.rating && {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: product.rating,
        reviewCount: product.reviewCount || 0,
      },
    }),
  }
}

export const generateArticleSchema = (article: {
  headline: string
  description: string
  image: string
  author: string
  datePublished: string
  dateModified?: string
}) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.headline,
    description: article.description,
    image: article.image,
    author: {
      '@type': 'Person',
      name: article.author,
    },
    datePublished: article.datePublished,
    ...(article.dateModified && { dateModified: article.dateModified }),
  }
}

export const generateOrganizationSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'DeHydra B2B',
    url: 'https://dehydra-b2b.com',
    logo: 'https://dehydra-b2b.com/logo.png',
    description: 'Enterprise-grade hydration solutions with institutional standards and advanced traceability.',
    sameAs: [
      'https://twitter.com/dehydrab2b',
      'https://linkedin.com/company/dehydra-b2b',
      'https://facebook.com/dehydrab2b',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-XXX-XXX-XXXX',
      contactType: 'Customer Service',
    },
  }
}

export const generateBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}
