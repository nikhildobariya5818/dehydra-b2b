/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { ChevronRight, ShieldCheck, Factory, Package, MonitorCheck } from "lucide-react";
import { PRODUCT_DATA } from "../data/products";

export const ProductDetail = () => {
  const { productId } = useParams();
  const product = PRODUCT_DATA[productId || ""];

  if (!product) {
    return (
      <div className="py-24 text-center">
        <h2 className="text-h2 text-primary">Product Not Found</h2>
        <Link to="/products" className="text-secondary mt-4 inline-block hover:underline">Return to Catalog</Link>
      </div>
    );
  }

  return (
    <div className="bg-background">
      {/* Breadcrumbs */}
      <section className="max-w-7xl mx-auto px-8 pt-8">
        <nav className="flex items-center space-x-2 label-sm text-on-surface-variant/60 uppercase tracking-widest text-[10px]">
          <Link to="/products" className="hover:text-primary transition-colors">Products</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-primary font-bold">{product.title.split(' - ')[0]}</span>
        </nav>
      </section>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-8 py-16 flex flex-col md:flex-row gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex-1 space-y-6"
        >
          <h1 className="text-h1 text-primary">{product.title}</h1>
          <p className="text-body-lg text-on-surface-variant max-w-xl">
            {product.description}
          </p>
          <div className="pt-4 flex flex-wrap gap-4">
            <Link to="/contact" className="bg-primary text-on-primary px-8 py-4 label-sm uppercase tracking-widest hover:bg-primary/95 transition-all shadow-lg active:scale-95">
              Request Bulk Quote
            </Link>
            <button className="border border-outline text-primary px-8 py-4 label-sm uppercase tracking-widest hover:bg-surface-container transition-all active:scale-95">
              Technical Datasheet
            </button>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex-1 w-full aspect-square md:aspect-[4/3] bg-surface-container relative overflow-hidden rounded-2xl border border-outline-variant shadow-sm"
        >
          <img src={product.heroImage} alt={product.title} className="w-full h-full object-cover grayscale brightness-90 contrast-125" />
          <div className="absolute inset-0 bg-primary/5 mix-blend-multiply" />
        </motion.div>
      </section>

      {/* Product Overview / Standard */}
      <section className="bg-surface-container-low py-24 border-y border-outline-variant">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div className="space-y-4">
              <span className="text-secondary label-sm uppercase tracking-widest block">Process & Integrity</span>
              <h2 className="text-h2 text-primary">The De'Hydra Standard</h2>
              <p className="text-body-md text-on-surface-variant leading-relaxed">
                {product.standardDescription}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="p-8 bg-white border border-outline-variant rounded-xl group hover:border-primary transition-all shadow-sm">
                <ShieldCheck className="w-8 h-8 text-primary mb-4 transition-transform group-hover:scale-110" />
                <h3 className="label-sm text-primary uppercase mb-2">Nutrition Lock</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">Precision drying ensures maximum vitamin and mineral retention.</p>
              </div>
              <div className="p-8 bg-white border border-outline-variant rounded-xl group hover:border-primary transition-all shadow-sm">
                <Factory className="w-8 h-8 text-primary mb-4 transition-transform group-hover:scale-110" />
                <h3 className="label-sm text-primary uppercase mb-2">Industrial Grade</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">Optimized profiles for bulk manufacturing and processing lines.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Table */}
      <section className="py-24 max-w-7xl mx-auto px-8">
        <h2 className="text-h2 text-primary mb-12 text-center">Technical Specifications</h2>
        <div className="overflow-hidden border border-outline-variant rounded-2xl shadow-sm bg-white">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-low">
                <th className="py-5 px-8 label-sm text-primary uppercase border-b border-outline-variant">Parameter</th>
                <th className="py-5 px-8 label-sm text-primary uppercase border-b border-outline-variant">Technical Specification Details</th>
              </tr>
            </thead>
            <tbody className="text-body-md text-on-surface">
              {product.specs.map((spec, i) => (
                <tr key={spec.parameter} className="border-b border-surface-container hover:bg-surface-container-low transition-colors">
                  <td className="py-5 px-8 font-semibold text-primary">{spec.parameter}</td>
                  <td className="py-5 px-8 text-on-surface-variant">{spec.detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Available Variants Asymmetric Grid */}
      <section className="bg-primary text-on-primary py-24">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-h2 mb-12 border-l-4 border-secondary pl-6">Available Variants</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.variants.map((v, i) => (
              <motion.div 
                key={v.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`group relative overflow-hidden bg-primary-container border border-on-primary-container/10 aspect-square ${i === 1 && product.variants.length > 2 ? 'md:col-span-1 lg:col-span-1' : ''}`}
              >
                <img src={v.image} alt={v.name} className="w-full h-full object-cover opacity-40 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 grayscale contrast-125" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-primary via-transparent">
                  <h3 className="text-h3 font-bold">{v.name}</h3>
                  <p className="text-sm text-on-primary-container mt-2 opacity-80">{v.forms}</p>
                </div>
              </motion.div>
            ))}
            
            <div className="col-span-full grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {product.smallVariants.map((sv) => (
                <div key={sv} className="p-6 border border-on-primary-container/20 border-dashed hover:border-secondary transition-colors cursor-default">
                  <span className="label-sm text-[10px] uppercase tracking-widest text-secondary mb-2 block">Institutional</span>
                  <h4 className="text-xl font-medium">{sv}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Packaging & Quality Badges */}
      <section className="py-24 border-b border-outline-variant">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row gap-20">
            <div className="flex-1">
              <h2 className="text-h2 text-primary mb-8">Export Grade Packaging</h2>
              <div className="space-y-10">
                <div className="flex gap-6">
                  <Package className="w-8 h-8 text-secondary shrink-0" />
                  <div>
                    <h4 className="label-sm text-primary uppercase mb-1">Standard Logistics Packaging</h4>
                    <p className="text-body-md text-on-surface-variant">25kg / 50kg Double-layered HDPE bags with inner LDPE liner specifically designed for moisture barriers during ocean freight.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <MonitorCheck className="w-8 h-8 text-secondary shrink-0" />
                  <div>
                    <h4 className="label-sm text-primary uppercase mb-1">Optical Inspection</h4>
                    <p className="text-body-md text-on-surface-variant">Rigid multi-stage foreign body inspection including high-intensity magnetic separation and laser color sorting.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex-1 bg-surface-container rounded-3xl p-12 flex flex-wrap gap-12 items-center justify-center border border-outline-variant shadow-inner">
              {[
                { label: "ISO 22000", sub: "Safety Management" },
                { label: "HACCP", sub: "Certified Safe" },
                { label: "FSSAI", sub: "Regulated Quality" }
              ].map((badge) => (
                <div key={badge.label} className="text-center group">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-4 border border-outline-variant shadow-sm mx-auto group-hover:scale-105 transition-transform group-hover:border-primary">
                    <span className="font-black text-primary text-lg">{badge.label}</span>
                  </div>
                  <p className="label-sm text-[10px] uppercase text-primary tracking-widest">{badge.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Order CTA */}
      <section className="bg-primary text-on-primary py-24">
        <div className="max-w-4xl mx-auto px-8 text-center space-y-10">
          <h2 className="text-h1">Ready to Secure Your Supply Chain?</h2>
          <p className="text-body-lg text-on-primary-container max-w-2xl mx-auto">
            Consult with our export specialists for custom mesh sizes, bulk pricing tiers, and global shipping logistics tailored to your manufacturing requirements.
          </p>
          <div className="pt-4">
            <Link to="/contact" className="inline-block px-12 py-5 label-sm uppercase tracking-widest transition-all bg-secondary text-white hover:bg-secondary/90 shadow-xl active:scale-95">
              Inquire Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
