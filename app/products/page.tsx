import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import { products } from '@/lib/products';
import { Search } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Dehydrated Food Products | De&apos;Hydra Exports',
  description:
    'Browse our complete catalog of premium dehydrated food products. Over 150+ SKUs including vegetables, fruits, herbs, and spices.',
  keywords:
    'dehydrated products, dehydrated vegetables, dehydrated fruits, food export, wholesale',
  openGraph: {
    title: 'Our Products | De&apos;Hydra Exports',
    description: 'Premium dehydrated food products for international wholesale.',
    url: 'https://dehydra-b2b.com/products',
    type: 'website',
  },
};

export default function ProductsPage() {
  // Group products by category
  const groupedProducts = products.reduce(
    (acc, product) => {
      if (!acc[product.category]) {
        acc[product.category] = [];
      }
      acc[product.category].push(product);
      return acc;
    },
    {} as Record<string, typeof products>
  );

  return (
    <main className="bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center overflow-hidden bg-primary-container">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1488554347441-f8e4e99f6471?auto=format&fit=crop&w=1920&q=80"
            alt="Product catalog background"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-h1 text-on-primary mb-4">Our Product Catalog</h1>
            <p className="text-body-lg text-on-primary-container/90 max-w-2xl">
              Discover our extensive range of premium dehydrated food products designed for international wholesale markets.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 px-8">
        <div className="max-w-7xl mx-auto">
          {Object.entries(groupedProducts).map((entry, idx) => {
            const [category, categoryProducts] = entry;
            return (
              <div key={category} className="mb-20">
                <div className="mb-12">
                  <h2 className="text-h2 text-primary mb-4">{category}</h2>
                  <div className="w-16 h-1 bg-secondary" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {(categoryProducts as typeof products).map((product) => (
                    <motion.div
                      key={product.slug}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                      className="group"
                    >
                      <Link href={`/products/${product.slug}`}>
                        <div className="bg-white border border-outline-variant rounded-lg overflow-hidden hover:border-secondary transition-all hover:shadow-lg">
                          <div className="relative h-64 overflow-hidden bg-surface-container">
                            <Image
                              src={product.image}
                              alt={product.name}
                              fill
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              className="object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                          </div>
                          <div className="p-6">
                            <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary label-xs rounded-full mb-3">
                              {product.category}
                            </span>
                            <h3 className="text-h3 text-primary mb-2 group-hover:text-secondary transition-colors">
                              {product.name}
                            </h3>
                            <p className="text-body-sm text-on-surface-variant mb-4">
                              {product.description.substring(0, 80)}...
                            </p>
                            <div className="flex items-center justify-between">
                              <span className="text-label-md font-semibold text-primary">
                                ${product.price}/kg
                              </span>
                              <span className="text-label-xs text-on-surface-variant">
                                {product.specifications.shelfLife}
                              </span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-8 bg-surface-container">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-h2 text-primary mb-6">Can&apos;t find what you&apos;re looking for?</h2>
          <p className="text-body-lg text-on-surface-variant mb-10 max-w-2xl mx-auto">
            We offer custom blending, particle sizing, and private label packaging. Get in touch with our team.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary text-on-primary px-12 py-5 rounded-lg label-sm uppercase hover:opacity-90 transition-all active:scale-95 shadow-lg"
          >
            Request Custom Quote
          </Link>
        </div>
      </section>
    </main>
  );
}
