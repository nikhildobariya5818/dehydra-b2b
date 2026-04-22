import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import {
  Package,
  ShieldCheck,
  LayoutGrid,
  Network,
  Settings2,
  Globe,
  BarChart,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Dehydrated Food Export | De&apos;Hydra Exports',
  description:
    'Premium dehydrated food products for international wholesale. Reliable export partner for organic produce, vegetables, and fruits across 24+ countries.',
  keywords:
    'dehydrated food, export, wholesale, organic, food products, bulk supply',
  openGraph: {
    title: 'Dehydrated Food Export | De&apos;Hydra Exports',
    description: 'Premium dehydrated food products for international wholesale.',
    url: 'https://dehydra-b2b.com',
    type: 'website',
  },
};

export default function Home() {
  return (
    <main className="bg-background">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden bg-primary-container">
        <div className="absolute inset-0 z-0">
          <Image
            className="w-full h-full object-cover opacity-40"
            src="https://images.unsplash.com/photo-1599599810694-f3522f89d6f3?auto=format&fit=crop&w=1920&q=80"
            alt="Dehydrated vegetable photography"
            fill
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-block px-3 py-1 bg-secondary text-on-secondary label-sm rounded-full mb-6">
              GLOBAL DISTRIBUTION
            </span>
            <h1 className="text-h1 text-on-primary mb-8">
              Reliable Export Partner for Dehydrated Food Products
            </h1>
            <p className="text-body-lg text-on-primary-container/90 mb-10 leading-relaxed">
              Precision-dried nutritional solutions for the international wholesale market. We bridge the gap between pristine organic farming and industrial-grade bulk supply chains.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-secondary text-on-secondary px-8 py-4 rounded-lg label-sm uppercase hover:opacity-90 transition-all active:scale-95 shadow-lg"
              >
                Request Quote
              </Link>
              <Link
                href="/products"
                className="border border-on-primary text-on-primary px-8 py-4 rounded-lg label-sm uppercase hover:bg-white/10 transition-all active:scale-95"
              >
                View Products
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Highlights Bento Grid */}
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-h2 text-primary mb-4">Export Infrastructure</h2>
          <div className="w-16 h-1 bg-secondary" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            whileHover={{ y: -5 }}
            className="md:col-span-2 bg-white border border-outline-variant p-8 flex flex-col justify-between hover:border-secondary transition-all rounded-lg group"
          >
            <div>
              <Package className="w-10 h-10 text-secondary mb-4" />
              <h3 className="text-h3 text-primary mb-4">Export-ready products</h3>
              <p className="text-body-md text-on-surface-variant max-w-md">
                Compliance-first packaging and bulk containers designed for sea and air freight across all international borders.
              </p>
            </div>
            <div className="mt-8 overflow-hidden rounded-lg">
              <Image
                className="w-full h-48 object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:rotate-1 group-hover:scale-105"
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
                alt="Logistics warehouse"
                width={500}
                height={400}
              />
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-surface-container-low border border-outline-variant p-8 rounded-lg hover:border-secondary transition-all"
          >
            <ShieldCheck className="w-10 h-10 text-secondary mb-4" />
            <h3 className="text-h3 text-primary mb-4">Consistent quality</h3>
            <p className="text-body-md text-on-surface-variant">
              Batch-level laboratory testing ensuring zero moisture variance and peak nutritional retention.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-surface-container-low border border-outline-variant p-8 rounded-lg hover:border-secondary transition-all"
          >
            <LayoutGrid className="w-10 h-10 text-secondary mb-4" />
            <h3 className="text-h3 text-primary mb-4">Wide range</h3>
            <p className="text-body-md text-on-surface-variant">
              From vegetable powders to fruit flakes, we manage over 150+ SKU varieties for diverse industrial applications.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white border border-outline-variant p-8 rounded-lg hover:border-secondary transition-all"
          >
            <Network className="w-10 h-10 text-secondary mb-4" />
            <h3 className="text-h3 text-primary mb-4">Strong supply chain</h3>
            <p className="text-body-md text-on-surface-variant">
              Direct sourcing from over 5,000 certified organic farms ensuring year-round stock stability.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white border border-outline-variant p-8 rounded-lg hover:border-secondary transition-all"
          >
            <Settings2 className="w-10 h-10 text-secondary mb-4" />
            <h3 className="text-h3 text-primary mb-4">Custom solutions</h3>
            <p className="text-body-md text-on-surface-variant">
              Tailored particle sizing, blend formulations, and private label packaging for international brands.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-surface-container py-24">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Image
              className="rounded-xl border border-outline-variant shadow-lg"
              src="https://images.unsplash.com/photo-1500382017468-7049fae0e5de?auto=format&fit=crop&w=800&q=80"
              alt="Agricultural valley"
              width={500}
              height={400}
            />
            <div className="absolute -bottom-8 -right-8 bg-primary p-8 rounded-lg text-on-primary hidden lg:block shadow-xl">
              <div className="text-4xl font-bold mb-1">24+</div>
              <div className="label-sm font-bold">COUNTRIES SERVED</div>
            </div>
          </motion.div>
          <div>
            <h2 className="text-h2 text-primary mb-6">Bridging Continents with Precision Agriculture</h2>
            <p className="text-body-lg text-on-surface-variant mb-6">
              De&apos;Hydra Exports is an institutional-grade distributor specializing in the thermal preservation of organic produce. Headquartered at the crossroads of major trade routes, we maintain cold-chain integrity and technical purity.
            </p>
            <p className="text-body-md text-on-surface-variant mb-8">
              Our global presence spans from the fertile valleys of our source farms to distribution warehouses in three continents, ensuring that high-specification dehydrated ingredients are accessible to food manufacturers worldwide with absolute transparency.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 label-sm text-primary">
                <Globe className="w-5 h-5 text-secondary" />
                ISO 22000 & HACCP CERTIFIED
              </li>
              <li className="flex items-center gap-3 label-sm text-primary">
                <BarChart className="w-5 h-5 text-secondary" />
                REAL-TIME SHIPMENT TRACKING
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-8">
        <div className="max-w-7xl mx-auto bg-primary rounded-2xl p-16 text-center text-on-primary relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <Image
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80"
              alt="Network pattern background"
              fill
              sizes="100vw"
            />
          </div>
          <div className="relative z-10">
            <h2 className="text-h2 mb-6">Looking for a Reliable Supplier?</h2>
            <p className="text-body-lg mb-10 max-w-xl mx-auto text-on-primary-container/80">
              Join our network of international partners and secure your supply chain with premium dehydrated ingredients.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-secondary text-on-secondary px-12 py-5 rounded-lg label-sm uppercase hover:opacity-90 transition-all active:scale-95 shadow-lg"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
