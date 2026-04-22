/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Search, 
  ChevronLeft, 
  ChevronRight, 
  Mail, 
  Globe,
  Clock
} from "lucide-react";

const ARTICLES = [
  {
    category: "REGULATIONS",
    time: "8 MIN READ",
    title: "EU Green Deal: Impact on South Asian Organic Exports",
    excerpt: "Understanding the new traceability requirements and how De'Hydra's institutional standards align with 2025 mandates.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAm9ibtQa9GGybNWykYJq_NmN_fbBVrpxPL9wKhVndj_5SxL3nwEqFDyR24dsXtxE8egC1bBRlLcuCQUszEdYEbAEHyhKm0YxbBppwyJ8p-8iGiJl4IeE9n_l2Vgq6IAYBACeD9ikBoIg_w85KS29xiAdx9hB3eeRzHsfP8cIG4xFBD4lUa596lT-9eSQ6sJFQvP_P4lCawm0VTnlaid4RGx8tTQ7zjIper9ks5Lcv1I1XVCIwZZv-2kxMBvU-LRRkHvoaWPC29eZg"
  },
  {
    category: "FARMING",
    time: "6 MIN READ",
    title: "Regenerative Soil Practices in Tropical Environments",
    excerpt: "How integrated pest management and cover cropping enhance the nutrient profile of our raw materials before processing.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB8J9vPDUEZgJSb-cFXLualqhTj04AK7byfi6mtvGf0vJFnEi9kbZPwsmMRHkANXKNpYhUwSMGzlnDm9mkCcHI0U9Q65hyuIwQCjtmriEuTj560pjsTx-REZOr9hOatJ7_eq5tZU1cGMkCybLSCwOsjlOtexPpCSOW-9MSHs3o5lAataYUx281uoS6VJy1SyB1Ehu630FDCzf7w2VO3Ekvbe-pWYG8Oc_dlY6KlRDMeVpqTHAQeGmOMreJ9dZ21w2fOT9oP0dXasTg"
  },
  {
    category: "MARKET",
    time: "10 MIN READ",
    title: "Global Logistics: Mitigating Risks in B2B Perishable Exports",
    excerpt: "Strategies for cold-chain integrity and navigating international port congestion for high-volume organic contracts.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCUp1h4JwiPjIR-uGyrKVyrpSErsynJH3P2-aiVVhQ8qB_Ox0vA9KXs6yG23d-tZiWZvyM7IN7AwXnXxbNNRiBIMRoL41sVMRb_g68vccxgPearDpmySLsaocNiaSIa_AvSVUSV3CVHD8XEaDX-NFVtrSUbGXu9AitbEDq3-sh-Z3iOiVSAfM__oslKQN6bdSvKwCwZwXm2CgGeE5Dzt7qhGYfDFg-or1z3dIKfwiyYqJeYIB_oxssihUNX1fU734FaQ44wq7ylQV8"
  },
  {
    category: "QUALITY",
    time: "5 MIN READ",
    title: "The Science of Aflatoxin Prevention in Dried Goods",
    excerpt: "A deep dive into De'Hydra's multi-point testing protocols and humidity control systems.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC1xh9fVCLNo1ygfiAIbk7utUQKoE4-KsuZm5_GpBqQh0rQORv9zkkYdeKXFiN22hSJVGtaaMfHuBfVVFEmHNW3BrQJs8rAH8cuSUFRoEJzGxt9PBA5bPQfyyV0OdUnVTfyT7KjS1u0n6YnMpTrTQsQ4H0gXhBMDyntoSa2zGEvS8Iib18Ut3rtaqZoEzeUnTYlXHKcYEzdeN1ekT89-ijuP0AUZfYYAvDjyVYmRdx4_GzpIao0I_86HHj3hrl3tWHIUtMGr_cP1iY"
  },
  {
    category: "TRENDS",
    time: "7 MIN READ",
    title: "Clean Label Revolution: Demand for Additive-Free Ingredients",
    excerpt: "Why European and North American buyers are shifting toward 100% pure dehydrated products over traditional alternatives.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuARdmHbZuR4OqB06RCWNo4_2tw0u_d9NnjWYQtolnXSLkJj68R-u5hXfFVoeNca93QBiY6e-Kf78efSozcueZcIGbS6wUwVosdzshBe_Mkg5UUeEqRW7wkEooRjZKrLuMfQ7OMRZAhz4CuX1mZGj5DMDu1pWaln-rFaDFxDs6g1hwprr3_TecaF55VTGLE1CxwoEXpqiUUQNzNfdLmk0KBSxF4g590QESdMJu_4uDAtLQMX3M1jlkuNZHhZUA2wBhBNTLWQYaKTIF4"
  },
  {
    category: "SUSTAINABILITY",
    time: "9 MIN READ",
    title: "Solar-Powered Processing: The Future of Carbon-Neutral Exports",
    excerpt: "Examining the ROI of renewable energy infrastructure in large-scale food dehydration facilities.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCqG2UIEGByPByXxwz59wWt-f9X8WujBusowsrJ1xkzTI2qqP_RCtj9vMAuk8rXQexKbonsS9O5WD42WbTMCRAIeq4loZd1LvD6R_eSOYQgaCyy-owFugR-Mevf3yJYv38qdG0uSdexnTRQ0D_apehoOfsvOl656UeUPSowauO6VzakR2mrT1Ura7HwEkSzQ27Xoq7SZd4JVN4YeSySUcs9pyzrSn7FnWQkslqWRzDyL2gAfyuAZU96qgNSIQdktXlcuiDW18quUsU"
  }
];

export const Blog = () => {
  return (
    <main className="max-w-7xl mx-auto px-8 py-20">
      {/* Header Section */}
      <motion.header 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16 max-w-3xl"
      >
        <span className="label-sm text-primary mb-4 block uppercase tracking-widest">Industry Insights</span>
        <h1 className="text-h1 text-primary mb-6">Expertise in Organic Export & Technology.</h1>
        <p className="text-body-lg text-on-surface-variant">
          Navigating the intersection of sustainable agriculture and global industrial distribution. Technical briefs for the professional buyer.
        </p>
      </motion.header>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-4 mb-12 pb-8 border-b border-outline-variant">
        {["All Insights", "Organic Farming", "Export Regulations", "Dehydration Tech", "Market Trends"].map((cat, i) => (
          <button 
            key={cat}
            className={`px-6 py-2 rounded-full font-label-sm transition-colors ${
              i === 0 
                ? "bg-primary text-on-primary" 
                : "bg-surface-container hover:bg-surface-container-high text-on-surface-variant"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Featured Article (Bento Style) */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-8 group cursor-pointer"
        >
          <div className="relative h-[500px] overflow-hidden rounded-lg mb-6 shadow-sm border border-outline-variant">
            <img 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmmjciQOa_ANX75YTN51XM4LsllXI8JwY-xemoyPzc_FsWR1aswqzguFGeEUYfC6u6ied0l0bYE6dQ7nXTI-0pidnXCM8REP5McC73tNTspknqt5jCvS4_W914XEt_RNJ2uKh5UdTt3tHm52TbIIF-DhG3anC_xIUHiu_J3-m5BjQwsXlvzk0skcdL_YflHIfzAlu1j8pv5Xt3k-JzRdgv0FzVFz4brYraOi-_8GCzTJ8oWtDRO4Vf69mZhQt_UzuGB8DUp2iGo2s" 
              alt="Dehydration facility" 
            />
            <div className="absolute top-6 left-6">
              <span className="bg-primary px-4 py-1 text-white font-label-sm uppercase tracking-widest">Featured Brief</span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent transition-opacity group-hover:opacity-20" />
          </div>
          <div className="max-w-2xl">
            <div className="flex gap-4 mb-4 items-center">
              <span className="font-label-sm text-secondary uppercase tracking-widest">Dehydration Tech</span>
              <span className="w-1 h-1 bg-outline-variant rounded-full" />
              <span className="font-label-sm text-on-surface-variant uppercase tracking-widest">12 MIN READ</span>
            </div>
            <h2 className="text-h2 text-primary mb-4 group-hover:text-secondary transition-colors leading-tight">
              Next-Gen Multi-Stage Dehydration: Maintaining Nutrient Density at Scale
            </h2>
            <p className="text-body-md text-on-surface-variant">
              A technical analysis of thermodynamics in industrial-grade drying and how precision airflow controls preserve volatile organic compounds.
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-4"
        >
          <div className="p-8 bg-primary-container rounded-lg text-on-primary h-full flex flex-col justify-center border border-primary shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-3xl" />
            <span className="label-sm text-on-primary-container mb-4 block uppercase tracking-widest opacity-80 font-bold">Newsletter</span>
            <h3 className="text-h3 mb-6 leading-tight">Monthly Export Market Report</h3>
            <p className="text-body-md mb-8 text-on-primary-container/90">
              Get quarterly pricing trends and regulatory updates directly to your inbox.
            </p>
            <div className="space-y-4">
              <div className="relative">
                <input 
                  className="w-full bg-white/10 border border-white/20 px-4 py-3 text-white placeholder:text-white/40 focus:border-white focus:bg-white/15 outline-none transition-all rounded" 
                  placeholder="Professional Email" 
                  type="email" 
                />
              </div>
              <button className="w-full bg-white text-primary font-label-sm py-4 rounded font-bold uppercase tracking-widest hover:bg-white/90 active:scale-95 transition-all shadow-md">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Article Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {ARTICLES.map((article, i) => (
          <motion.article 
            key={article.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (i % 3) * 0.1 }}
            className="group cursor-pointer"
          >
            <div className="aspect-[16/10] overflow-hidden rounded-lg border border-outline-variant mb-6 shadow-sm">
              <img 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                src={article.image} 
                alt={article.title} 
              />
            </div>
            <div className="flex gap-3 mb-3 items-center">
              <span className="font-label-sm text-secondary uppercase tracking-widest">{article.category}</span>
              <span className="text-on-surface-variant/40">•</span>
              <span className="font-label-sm text-on-surface-variant uppercase tracking-widest">{article.time}</span>
            </div>
            <h3 className="text-h3 text-primary mb-3 group-hover:text-secondary transition-colors line-clamp-2">
              {article.title}
            </h3>
            <p className="text-body-md text-on-surface-variant line-clamp-3">
              {article.excerpt}
            </p>
          </motion.article>
        ))}
      </section>

      {/* Pagination */}
      <div className="mt-20 flex justify-center items-center gap-6">
        <button className="w-12 h-12 flex items-center justify-center border border-outline-variant text-primary hover:bg-surface-container-low transition-colors rounded-full active:scale-90">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <span className="font-label-sm text-primary font-bold tracking-widest">PAGE 01 / 04</span>
        <button className="w-12 h-12 flex items-center justify-center border border-outline-variant text-primary hover:bg-surface-container-low transition-colors rounded-full active:scale-90">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </main>
  );
};
