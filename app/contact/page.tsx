import { Metadata } from 'next';
import Image from 'next/image';
import { motion } from 'motion/react';
import { MapPin, Mail, Phone, ShieldCheck, ChevronRight, Globe } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us | De&apos;Hydra Exports',
  description:
    'Get in touch with De&apos;Hydra Exports for bulk orders, partnerships, and inquiries about our dehydrated food products.',
  keywords: 'contact, bulk order, inquiries, dehydrated food export',
  openGraph: {
    title: 'Contact Us | De&apos;Hydra Exports',
    description: 'Connect with our sales team for bulk orders and partnerships.',
    url: 'https://dehydra-b2b.com/contact',
    type: 'website',
  },
};

export default function ContactPage() {
  return (
    <main className="pt-12 pb-24 bg-background">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header Section */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 max-w-2xl"
        >
          <span className="label-sm text-primary uppercase tracking-[0.2em] mb-4 block">
            Institutional Organic Export
          </span>
          <h1 className="text-h1 text-primary mb-6">Contact & Global Inquiry</h1>
          <p className="text-body-lg text-on-surface-variant">
            Streamlining international supply chains with precision. Connect with our logistics team for bulk specifications and distribution timelines.
          </p>
        </motion.header>

        <div className="grid grid-cols-12 gap-8">
          {/* Contact Details */}
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="col-span-12 lg:col-span-4 flex flex-col gap-8"
          >
            <div className="p-4 border border-outline-variant bg-surface-container-lowest flex flex-col gap-6 rounded-sm shadow-sm">
              <div className="flex items-start gap-4 p-4 hover:bg-surface-container-low transition-colors rounded-lg">
                <MapPin
                  className="text-primary w-6 h-6 shrink-0"
                  fill="currentColor"
                  fillOpacity={0.1}
                />
                <div>
                  <h3 className="text-h3 text-primary mb-2 text-xl font-bold">Headquarters</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    Industrial District 4, Logistics Hub
                    <br />
                    Dubai, United Arab Emirates
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 hover:bg-surface-container-low transition-colors rounded-lg">
                <Mail className="text-primary w-6 h-6 shrink-0" fill="currentColor" fillOpacity={0.1} />
                <div>
                  <h3 className="text-h3 text-primary mb-2 text-xl font-bold">Direct Inquiry</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    exports@dehydra.com
                    <br />
                    support@dehydra.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 hover:bg-surface-container-low transition-colors rounded-lg">
                <Phone className="text-primary w-6 h-6 shrink-0" fill="currentColor" fillOpacity={0.1} />
                <div>
                  <h3 className="text-h3 text-primary mb-2 text-xl font-bold">Phone Support</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    +971 4 555 0192
                    <br />
                    Mon - Fri: 09:00 - 18:00 GST
                  </p>
                </div>
              </div>
            </div>

            {/* Visual Anchor Image */}
            <div className="h-64 bg-slate-200 rounded-xl overflow-hidden relative group border border-outline-variant shadow-sm">
              <Image
                alt="Logistics warehouse"
                className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 transition-all duration-1000"
                src="https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=600&q=80"
                fill
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply transition-opacity group-hover:opacity-0" />
            </div>
          </motion.aside>

          {/* Inquiry Form */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="col-span-12 lg:col-span-8"
          >
            <div className="bg-surface-container-lowest border border-outline-variant p-8 md:p-12 rounded-sm shadow-sm">
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="label-sm text-on-surface-variant uppercase text-xs">
                      Name
                    </label>
                    <input
                      className="w-full bg-transparent border-b border-outline-variant focus:border-primary focus:ring-0 px-0 py-3 transition-colors outline-none text-body-md placeholder:text-outline-variant"
                      placeholder="Full legal name"
                      type="text"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="label-sm text-on-surface-variant uppercase text-xs">
                      Company
                    </label>
                    <input
                      className="w-full bg-transparent border-b border-outline-variant focus:border-primary focus:ring-0 px-0 py-3 transition-colors outline-none text-body-md placeholder:text-outline-variant"
                      placeholder="Entity name"
                      type="text"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="label-sm text-on-surface-variant uppercase text-xs">
                      Country
                    </label>
                    <select className="w-full bg-transparent border-b border-outline-variant focus:border-primary focus:ring-0 px-0 py-3 transition-colors outline-none text-body-md appearance-none cursor-pointer">
                      <option value="">Select destination</option>
                      <option>United States</option>
                      <option>Germany</option>
                      <option>Japan</option>
                      <option>United Kingdom</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="label-sm text-on-surface-variant uppercase text-xs">
                      Product Interest
                    </label>
                    <select className="w-full bg-transparent border-b border-outline-variant focus:border-primary focus:ring-0 px-0 py-3 transition-colors outline-none text-body-md appearance-none cursor-pointer">
                      <option value="">Choose category</option>
                      <option>Organic Dehydrates</option>
                      <option>Industrial Concentrates</option>
                      <option>Institutional Grains</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="label-sm text-on-surface-variant uppercase text-xs">
                    Quantity (Metric Tons)
                  </label>
                  <input
                    className="w-full bg-transparent border-b border-outline-variant focus:border-primary focus:ring-0 px-0 py-3 transition-colors outline-none text-body-md placeholder:text-outline-variant"
                    placeholder="Estimated annual volume"
                    type="number"
                  />
                </div>

                <div className="space-y-2">
                  <label className="label-sm text-on-surface-variant uppercase text-xs">
                    Message
                  </label>
                  <textarea
                    className="w-full bg-transparent border-b border-outline-variant focus:border-primary focus:ring-0 px-0 py-3 transition-colors outline-none text-body-md resize-none placeholder:text-outline-variant"
                    placeholder="Specific technical requirements or shipping constraints"
                    rows={4}
                  />
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-2 text-on-surface-variant">
                    <ShieldCheck className="w-5 h-5" />
                    <span className="text-[10px] uppercase tracking-wider font-bold">
                      ISO 9001:2015 Encrypted
                    </span>
                  </div>
                  <button className="w-full sm:w-auto bg-secondary text-on-secondary px-12 py-4 label-sm rounded-lg uppercase tracking-[0.2em] transition-all hover:brightness-110 active:scale-95 shadow-lg flex items-center justify-center gap-3">
                    Submit Inquiry
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </div>
          </motion.section>
        </div>

        {/* Global Reach */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 pt-16 border-t border-slate-200"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
            <div className="col-span-1">
              <h2 className="text-h2 text-primary mb-4">Global Reach</h2>
              <p className="text-on-surface-variant mb-6 leading-relaxed">
                Our network spans 45 countries, ensuring seamless distribution of high-grade organic products from harvest to warehouse.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Europe', 'APAC', 'MENA', 'Americas'].map((region) => (
                  <span
                    key={region}
                    className="px-3 py-1 bg-surface-container-high rounded-full text-[10px] font-bold text-primary uppercase tracking-widest border border-outline-variant"
                  >
                    {region}
                  </span>
                ))}
              </div>
            </div>
            <div className="col-span-1 md:col-span-2 aspect-[21/9] bg-surface-container-low rounded-2xl overflow-hidden relative border border-outline-variant shadow-inner group">
              <Image
                alt="Global network map"
                className="w-full h-full object-cover opacity-60 grayscale group-hover:scale-105 transition-transform duration-[2s]"
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80"
                fill
                sizes="100vw"
              />
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
