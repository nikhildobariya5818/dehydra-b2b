import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import { products } from '@/lib/products';
import { ShoppingCart, Check, FileText, Zap } from 'lucide-react';

interface ProductDetailPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: ProductDetailPageProps): Promise<Metadata> {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }

  return {
    title: `${product.name} | De'Hydra Exports`,
    description: product.description,
    keywords: [product.name, product.category, 'dehydrated food', 'export'],
    openGraph: {
      title: `${product.name} | De'Hydra Exports`,
      description: product.description,
      url: `https://dehydra-b2b.com/products/${product.slug}`,
      type: 'website',
      images: [
        {
          url: product.image,
          width: 800,
          height: 600,
          alt: product.name,
        },
      ],
    },
  };
}

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  // JSON-LD Schema.org markup
  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.image,
    brand: {
      '@type': 'Brand',
      name: "De'Hydra Exports",
    },
    manufacturer: {
      '@type': 'Organization',
      name: "De'Hydra Exports",
    },
    offers: {
      '@type': 'Offer',
      url: `https://dehydra-b2b.com/products/${product.slug}`,
      priceCurrency: 'USD',
      price: product.price.toString(),
      availability: 'https://schema.org/InStock',
    },
  };

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      <main className="bg-background">
        {/* Breadcrumb */}
        <section className="bg-surface-container py-4 px-8">
          <div className="max-w-7xl mx-auto flex items-center gap-2 text-body-sm">
            <Link href="/" className="text-secondary hover:underline">
              Home
            </Link>
            <span className="text-on-surface-variant">/</span>
            <Link href="/products" className="text-secondary hover:underline">
              Products
            </Link>
            <span className="text-on-surface-variant">/</span>
            <span className="text-primary font-semibold">{product.name}</span>
          </div>
        </section>

        {/* Product Detail */}
        <section className="py-16 px-8">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="sticky top-24">
                <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden bg-surface-container border border-outline-variant">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex flex-col justify-between"
            >
              <div>
                <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary label-xs rounded-full mb-4">
                  {product.category}
                </span>
                <h1 className="text-h1 text-primary mb-4">{product.name}</h1>
                <p className="text-body-lg text-on-surface-variant mb-8">
                  {product.description}
                </p>

                {/* Price and Stock */}
                <div className="mb-8 pb-8 border-b border-outline-variant">
                  <div className="flex items-baseline gap-4 mb-4">
                    <span className="text-3xl font-bold text-primary">
                      ${product.price}
                    </span>
                    <span className="text-body-sm text-on-surface-variant">/kg</span>
                  </div>
                  <div className="flex items-center gap-2 text-label-md text-green-600">
                    <Check className="w-5 h-5" />
                    In Stock - Available for Export
                  </div>
                </div>

                {/* Specifications */}
                <div className="mb-8">
                  <h3 className="text-h3 text-primary mb-4">Specifications</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-surface-container p-4 rounded-lg">
                      <p className="text-label-xs text-on-surface-variant mb-1">
                        Moisture Content
                      </p>
                      <p className="text-body-md font-semibold text-primary">
                        {product.specifications.moistureContent}
                      </p>
                    </div>
                    <div className="bg-surface-container p-4 rounded-lg">
                      <p className="text-label-xs text-on-surface-variant mb-1">
                        Shelf Life
                      </p>
                      <p className="text-body-md font-semibold text-primary">
                        {product.specifications.shelfLife}
                      </p>
                    </div>
                    <div className="bg-surface-container p-4 rounded-lg">
                      <p className="text-label-xs text-on-surface-variant mb-1">
                        Particle Size
                      </p>
                      <p className="text-body-md font-semibold text-primary">
                        {product.specifications.particleSize}
                      </p>
                    </div>
                    <div className="bg-surface-container p-4 rounded-lg">
                      <p className="text-label-xs text-on-surface-variant mb-1">
                        Packaging
                      </p>
                      <p className="text-body-md font-semibold text-primary">
                        {product.specifications.packaging}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Certification */}
                <div className="mb-8">
                  <h3 className="text-h3 text-primary mb-4">Certifications</h3>
                  <ul className="space-y-2">
                    {product.certifications.map((cert) => (
                      <li key={cert} className="flex items-center gap-3 text-body-sm">
                        <Check className="w-5 h-5 text-secondary" />
                        <span className="text-primary">{cert}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-3">
                <button className="w-full bg-primary text-on-primary py-4 rounded-lg label-sm uppercase font-bold hover:opacity-90 transition-all active:scale-95 flex items-center justify-center gap-2 shadow-lg">
                  <ShoppingCart className="w-5 h-5" />
                  Request Quote
                </button>
                <Link
                  href="/contact"
                  className="w-full border-2 border-primary text-primary py-4 rounded-lg label-sm uppercase font-bold hover:bg-primary/5 transition-all text-center"
                >
                  Contact Sales Team
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Additional Info Tabs */}
        <section className="py-16 px-8 bg-surface-container">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg border border-outline-variant">
                <FileText className="w-8 h-8 text-secondary mb-4" />
                <h3 className="text-h3 text-primary mb-3">Documentation</h3>
                <p className="text-body-sm text-on-surface-variant mb-4">
                  Complete technical data sheets and compliance documentation available for download.
                </p>
                <button className="text-secondary label-sm font-semibold hover:underline">
                  Download TDS →
                </button>
              </div>
              <div className="bg-white p-8 rounded-lg border border-outline-variant">
                <Zap className="w-8 h-8 text-secondary mb-4" />
                <h3 className="text-h3 text-primary mb-3">Quick Delivery</h3>
                <p className="text-body-sm text-on-surface-variant mb-4">
                  Sea and air freight options available worldwide with real-time tracking.
                </p>
                <button className="text-secondary label-sm font-semibold hover:underline">
                  Shipping Options →
                </button>
              </div>
              <div className="bg-white p-8 rounded-lg border border-outline-variant">
                <ShoppingCart className="w-8 h-8 text-secondary mb-4" />
                <h3 className="text-h3 text-primary mb-3">Bulk Orders</h3>
                <p className="text-body-sm text-on-surface-variant mb-4">
                  Special pricing for large volume orders and long-term supply contracts.
                </p>
                <button className="text-secondary label-sm font-semibold hover:underline">
                  Get Bulk Pricing →
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="py-24 px-8">
            <div className="max-w-7xl mx-auto">
              <div className="mb-12">
                <h2 className="text-h2 text-primary mb-4">Related Products</h2>
                <div className="w-16 h-1 bg-secondary" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedProducts.map((p) => (
                  <motion.div
                    key={p.slug}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <Link href={`/products/${p.slug}`}>
                      <div className="bg-white border border-outline-variant rounded-lg overflow-hidden hover:border-secondary transition-all hover:shadow-lg">
                        <div className="relative h-48 overflow-hidden bg-surface-container">
                          <Image
                            src={p.image}
                            alt={p.name}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <div className="p-6">
                          <h3 className="text-h3 text-primary mb-2 group-hover:text-secondary transition-colors">
                            {p.name}
                          </h3>
                          <p className="text-body-sm text-on-surface-variant mb-4">
                            ${p.price}/kg
                          </p>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </>
  );
}
