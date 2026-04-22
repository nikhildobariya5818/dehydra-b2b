/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { 
  Package, 
  ShieldCheck, 
  LayoutGrid, 
  Network, 
  Settings2, 
  Globe, 
  BarChart 
} from "lucide-react";

export const Home = () => {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden bg-primary-container">
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover opacity-40 shrink-0" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtz7YTmDheLpis3dl1_LRE-xMaGSvtrt880Y2axoWmkj9e1eywXEPKCWw_VRL6wxyNmDhATb_XI9A7TAVZR088eXzJvkMw-BFz-msr_0MAwEgam3Z4o4p5LaZ_3gCL0vjG8tFRNN9iabgSsZWdlHfk4_3LqAXaG4pX0yQQ3aIrVHsb46D2-NqZTLLaic37Fx-zcQjcJgOOQpcRz4UYmKr12xgHHWNr8Btn9gbT0JrhwRNSo_1smfTZbz__ua0FnEwv1ZyucjlqYWs"
            alt="Dehydrated vegetable photography"
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
              <Link to="/contact" className="bg-secondary text-on-secondary px-8 py-4 rounded-lg label-sm uppercase hover:opacity-90 transition-all active:scale-95 shadow-lg">
                Request Quote
              </Link>
              <Link to="/products" className="border border-on-primary text-on-primary px-8 py-4 rounded-lg label-sm uppercase hover:bg-white/10 transition-all active:scale-95">
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
              <p className="text-body-md text-on-surface-variant max-w-md">Compliance-first packaging and bulk containers designed for sea and air freight across all international borders.</p>
            </div>
            <div className="mt-8 overflow-hidden rounded-lg">
              <img 
                className="w-full h-48 object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:rotate-1 group-hover:scale-105" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgqS9Tjsgo4q_MYAsVMhtgFOZ0MTMEBbFH6osAeDmeMDf0pRe82PanUg-cqT-EOpiW1vgG86Qr9qP0lZQaKbvDwFrsIg74dpuMQ5pbgCfSvhJHQXzRJ99OK5eparOzXRmCmJkeEC_d9eAtF4E4TUrhrAAydqSHr6-8BnnJvUU5TPHdE7u_OUMgomyjuI2KaiKXBkJUby-kQw4xPqGaWS78YaC0jssSHSzmO0ZgUEV2vdCNvPmi-Xrva1dGyaV2KdkTPjnUjA2qLlo"
                alt="Logistics warehouse"
              />
            </div>
          </motion.div>

          <motion.div whileHover={{ y: -5 }} className="bg-surface-container-low border border-outline-variant p-8 rounded-lg hover:border-secondary transition-all">
            <ShieldCheck className="w-10 h-10 text-secondary mb-4" />
            <h3 className="text-h3 text-primary mb-4">Consistent quality</h3>
            <p className="text-body-md text-on-surface-variant">Batch-level laboratory testing ensuring zero moisture variance and peak nutritional retention.</p>
          </motion.div>

          <motion.div whileHover={{ y: -5 }} className="bg-surface-container-low border border-outline-variant p-8 rounded-lg hover:border-secondary transition-all">
            <LayoutGrid className="w-10 h-10 text-secondary mb-4" />
            <h3 className="text-h3 text-primary mb-4">Wide range</h3>
            <p className="text-body-md text-on-surface-variant">From vegetable powders to fruit flakes, we manage over 150+ SKU varieties for diverse industrial applications.</p>
          </motion.div>

          <motion.div whileHover={{ y: -5 }} className="bg-white border border-outline-variant p-8 rounded-lg hover:border-secondary transition-all">
            <Network className="w-10 h-10 text-secondary mb-4" />
            <h3 className="text-h3 text-primary mb-4">Strong supply chain</h3>
            <p className="text-body-md text-on-surface-variant">Direct sourcing from over 5,000 certified organic farms ensuring year-round stock stability.</p>
          </motion.div>

          <motion.div whileHover={{ y: -5 }} className="bg-white border border-outline-variant p-8 rounded-lg hover:border-secondary transition-all">
            <Settings2 className="w-10 h-10 text-secondary mb-4" />
            <h3 className="text-h3 text-primary mb-4">Custom solutions</h3>
            <p className="text-body-md text-on-surface-variant">Tailored particle sizing, blend formulations, and private label packaging for international brands.</p>
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
            <img 
              className="rounded-xl border border-outline-variant shadow-lg" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuApL0Po6TlAu6VrlrdNmGRa5tVYZyscBOPSfdYZN5-ZZCriCBs90lBsbpjBtWq10qLid1IW53KSZ49sEXYszyVO5JFclqMkp_xy3clGr1wS7EN-9iPXHFfpMAsJZgUZ7D7uoWW-7GtMiGqA9mY8MuyoB0sGx8cPOkvIjCjVBDPYhMMsvtfNKV3LO_3KDyG_NUDFs540C8EAL8Kr8rWu8h5Lmus4WnRTPyE15sPkwQrXXsDo0KKgH8OzYlu5V4qbEc56unua9ufUVcc"
              alt="Agricultural valley"
            />
            <div className="absolute -bottom-8 -right-8 bg-primary p-8 rounded-lg text-on-primary hidden lg:block shadow-xl">
              <div className="text-4xl font-bold mb-1">24+</div>
              <div className="label-sm font-bold">COUNTRIES SERVED</div>
            </div>
          </motion.div>
          <div>
            <h2 className="text-h2 text-primary mb-6">Bridging Continents with Precision Agriculture</h2>
            <p className="text-body-lg text-on-surface-variant mb-6">
              De'Hydra Exports is an institutional-grade distributor specializing in the thermal preservation of organic produce. Headquartered at the crossroads of major trade routes, we maintain cold-chain integrity and technical purity.
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
            <img 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsvvLsAUw4urxP3n4H1iditCrKeMI_vMUy_RU-nuXl32JU8Dehp1TjqUg2CXkkMfsCYq1F3GXbxYgcODsvoh-aFzAS8hLYSfrvTT0VMUysjElFhOOuUIa4d7-EaWoZeTbKZzkRcQhN5m5bx6-swZw81EL061KNvbsKDt3qtqRYL93Tyfej0ZLykbvSu3bkqbtXY_5vIdZk8IXJQjjLVpXVA6c3-56TB1tHwS-ux7QE3WMcUeg-bOVATWgasGgKXenOr1FCCvDfOOM"
              alt="Network pattern background"
            />
          </div>
          <div className="relative z-10">
            <h2 className="text-h2 mb-6">Looking for a Reliable Supplier?</h2>
            <p className="text-body-lg mb-10 max-w-xl mx-auto text-on-primary-container/80">
              Join our network of international partners and secure your supply chain with premium dehydrated ingredients.
            </p>
            <Link to="/contact" className="bg-secondary text-on-secondary px-12 py-5 rounded-lg label-sm uppercase hover:opacity-90 transition-all active:scale-95 shadow-lg">
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
