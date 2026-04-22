/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Sprout, 
  Search, 
  Waves, 
  Thermometer, 
  CheckCircle,
  ShieldCheck,
  PackageCheck,
  Truck
} from "lucide-react";

export const Process = () => {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <header className="relative h-[60vh] flex items-center overflow-hidden bg-primary-container">
        <div className="absolute inset-0 opacity-40">
          <img 
            className="w-full h-full object-cover grayscale brightness-50" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQMPziwA81R_jdthjsztPCKmzP8Hx-3Ea0fLrVllK7M19HvNFUfux1tOOkJoSjHXNKJUsfVMkFk6Rfa3sQ0V4zK_bhupo-QkaruAPgZw11Slk1WVB0tU_E46D8TkskgovLeqKXh1Jc6j7va52zs_CtZkIK0mRO5DkatZB2DUymxV7SiUOAnsXNxuyKSW2RWKhu_641BfFS8NFJUE8fYxBBiSGKQVuXYCUJz53lRgH8pQDlxZSFnYma81tpyEAN7cvljl6xx1f_Sbw"
            alt="Laboratory dehydration equipment" 
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <span className="text-primary-fixed-dim font-label-sm mb-4 block uppercase tracking-widest">INSTITUTIONAL ORGANIC STANDARDS</span>
            <h1 className="text-white text-h1 mb-6">The De'Hydra Standard</h1>
            <p className="text-on-primary-container font-body-lg text-lg opacity-90 leading-relaxed">
              Precision logistics meets biological integrity. Explore our proprietary low-temperature dehydration process designed for global B2B supply chains.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Process Overview - Bento Grid */}
      <section className="py-24 max-w-7xl mx-auto px-8">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-h2 text-primary mb-4">Engineered for Purity</h2>
          <div className="h-1 w-20 bg-primary mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Step 1: Sourcing */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-8 bg-white border border-outline-variant p-10 flex flex-col justify-between group rounded-sm shadow-sm"
          >
            <div>
              <div className="flex items-center gap-4 mb-8">
                <span className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-primary-container font-bold shadow-sm">01</span>
                <Sprout className="text-primary w-8 h-8" />
              </div>
              <h3 className="text-h3 text-primary mb-4">Farm-Direct Sourcing</h3>
              <p className="text-on-surface-variant font-body-md mb-8 max-w-xl">
                We partner exclusively with certified organic estates. Every batch is traced to the specific plot of land, ensuring total transparency from the moment of harvest.
              </p>
            </div>
            <div className="h-64 overflow-hidden rounded-lg">
              <img 
                className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBirKcfZWwhdOtQs-P2-NamJNHWq3MWq4ejLp9a04C9vfqZaVMhUXRPk3Oy3Pddt17Ct-UuAaYnrt5MB5qhvwSyOtjUAf2YCRStar65MvkIm9LVd85_07N0M-ilYulr3-9aXpYrPDTE5MydoTHiTfyeVZDUE4f8oH1OeL3PHfCeEilP1ubsrRbyUB8YOVmO1ZsPKtNniKOP4dCEjPDeq_O-g1cnPa8v4zX02NP_XOXBCOcMSXhFHPklsLkhbU3BOI7fPY4FQ0gtHRU" 
                alt="Organic farm field" 
              />
            </div>
          </motion.div>

          {/* Step 2: Quality Check */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-4 bg-surface-container p-10 flex flex-col border border-outline-variant rounded-sm shadow-sm"
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-primary-container font-bold shadow-sm">02</span>
              <Search className="text-primary w-8 h-8" />
            </div>
            <h3 className="text-h3 text-primary mb-4">Initial Triage</h3>
            <p className="text-on-surface-variant font-body-md mb-8">
              Automated color sorting and manual visual inspection remove any raw material that fails to meet our 'Level 1' freshness threshold.
            </p>
            <div className="mt-auto pt-8 border-t border-outline-variant/50">
              <div className="flex justify-between text-label-sm text-primary mb-3 font-bold tracking-widest">
                <span>PURITY RATE</span>
                <span>99.8%</span>
              </div>
              <div className="w-full bg-outline-variant h-1 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "99.8%" }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="bg-primary h-full" 
                />
              </div>
            </div>
          </motion.div>

          {/* Step 3: Cleaning */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-4 bg-white border border-outline-variant p-10 flex flex-col rounded-sm shadow-sm"
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-primary-container font-bold">03</span>
              <Waves className="text-primary w-8 h-8" />
            </div>
            <h3 className="text-h3 text-primary mb-4">Triple-Ozone Wash</h3>
            <p className="text-on-surface-variant font-body-md leading-relaxed">
              A multi-stage cleaning process using ozonated micro-bubbles to eliminate pathogens without the use of chemical residues or thermal damage.
            </p>
          </motion.div>

          {/* Step 4: Dehydration */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-8 bg-primary-container p-10 text-white flex flex-col md:flex-row gap-10 border border-primary rounded-sm shadow-lg overflow-hidden group"
          >
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-8">
                <span className="w-12 h-12 rounded-full bg-primary-fixed-dim flex items-center justify-center text-primary-container font-bold">04</span>
                <Thermometer className="text-primary-fixed-dim w-8 h-8" />
              </div>
              <h3 className="text-h3 text-white mb-4">Precision Low-Temp Dehydration</h3>
              <p className="text-on-primary-container font-body-md mb-6 leading-relaxed opacity-90">
                Our 'Cold-Core' technology removes moisture at temperatures below 40°C, preserving the molecular structure and phytonutrients often lost in conventional heat drying.
              </p>
              <div className="inline-flex items-center gap-2 bg-primary px-3 py-1.5 rounded text-[10px] font-bold tracking-[0.2em] uppercase border border-primary-fixed-dim/20">
                <CheckCircle className="w-4 h-4 text-primary-fixed-dim" />
                Nutrient Retention Optimized
              </div>
            </div>
            <div className="flex-1 rounded border border-primary-fixed-dim/10 overflow-hidden shadow-inner">
              <img 
                className="w-full h-full object-cover grayscale contrast-125 opacity-40 group-hover:opacity-60 transition-opacity duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaromiE_WvNfPfJINoD3RunYr5k4KGM7_TqSiIADk7yPy5ddosI_rtbCi-Tzobcbd1jjdXPTRCXo-2_0R2QN2naLrt8loFbey96dUwcPQvbeS1EutznQF0wvC_SLycuCT3dtba2hgQKmoiBRGSbLL7bD0c27WFdiO877x0dFglryk9KbQqQGz3Uj9F6wywWH1ndS8bskBJXsVAnmqsRTbQvJ-v8gml8smzyCSzNO86yHDFWUMJprkvIVRE5ZTORWjm7sFP4Pf8EhU" 
                alt="Moisture analytics monitor" 
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technical Specs Table */}
      <section className="bg-surface-container-low py-24 border-y border-outline-variant">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-h2 text-primary mb-12 text-center">Process Specifications</h2>
          <div className="bg-white border border-outline-variant overflow-hidden rounded shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead className="bg-surface-container text-primary font-label-sm uppercase text-[10px] tracking-widest border-b border-outline-variant">
                  <tr>
                    <th className="p-6">Parameter</th>
                    <th className="p-6">De'Hydra Standard</th>
                    <th className="p-6">Industry Average</th>
                    <th className="p-6">Status</th>
                  </tr>
                </thead>
                <tbody className="text-on-surface font-body-md text-sm">
                  {[
                    { p: "Maximum Temperature", d: "38.5°C (101.3°F)", i: "65°C+ (149°F+)", s: "SUPERIOR" },
                    { p: "Vitamin C Retention", d: "> 94%", i: "~ 60-70%", s: "SUPERIOR" },
                    { p: "Moisture Content", d: "Fixed 3-5%", i: "Variable 8-12%", s: "SUPERIOR" },
                    { p: "Pathogen Testing", d: "ISO 17025 Certified", i: "Internal Lab Only", s: "SUPERIOR" },
                  ].map((row, idx) => (
                    <tr key={idx} className="border-b border-outline-variant/30 last:border-0 hover:bg-surface-container-lowest transition-colors">
                      <td className="p-6 font-bold text-primary">{row.p}</td>
                      <td className="p-6">{row.d}</td>
                      <td className="p-6 text-on-surface-variant opacity-60 font-mono text-xs">{row.i}</td>
                      <td className="p-6">
                        <span className="bg-primary-fixed text-on-primary-fixed border border-primary/20 px-3 py-1 text-[10px] font-black rounded-full tracking-widest">
                          {row.s}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Final Quality Control */}
      <section className="py-24 max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row items-center gap-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 order-2 md:order-1 relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-outline-variant shadow-lg grayscale brightness-90 hover:grayscale-0 transition-all duration-1000">
              <img 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWq_gUbbFWOMqrrkSVyExq04BEjjquz2WcoJIx9lU0G2b9UpmIBdrF7dwr_ik47A-lmnRY5AmZn8FsmnCVu42raWqCCejCd9mGAQiUzWZCIhwqMg4o9MHXbe74dSXsu63AKlrq3wrrnow7ERQ42A-w5Sce0yT5DRkp-kfZfE7yYKj8tZaXvlayy2ERM6ZCBG_uXXMxI2Q2RcGX93YLWpOESxxKqdBvr_DpoMDWFDLlN0KnZrZjacvU1m_SuFTL1dggGLq-oJoynE8" 
                alt="Scientist in laboratory" 
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-white border border-outline-variant p-8 max-w-xs shadow-xl rounded-sm">
              <p className="font-label-sm text-primary mb-3 uppercase tracking-widest text-xs font-black">Certified QC</p>
              <p className="text-on-surface-variant font-body-md italic text-sm leading-relaxed">
                "Our laboratory ensures that every shipment exceeds the import regulations of the destination country."
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 order-1 md:order-2 space-y-12"
          >
            <div>
              <span className="text-primary font-label-sm uppercase tracking-widest mb-4 block">Stage 05 & 06</span>
              <h2 className="text-h2 text-primary mb-6">Multi-Stage Testing & Global Export Ready</h2>
            </div>
            
            <div className="space-y-10">
              {[
                { 
                  title: "Microbiological Screen", 
                  desc: "Total Plate Count (TPC), Yeast, and Mold testing on every individual batch before packaging.", 
                  icon: ShieldCheck 
                },
                { 
                  title: "Hermetic Sealing", 
                  desc: "Industrial-grade vacuum sealing in UV-protected liners ensures a 24-month shelf life without preservatives.", 
                  icon: PackageCheck 
                },
                { 
                  title: "Export-Grade Documentation", 
                  desc: "Complete CoA (Certificate of Analysis) and Phyto-sanitary certificates provided with every dispatch.", 
                  icon: Truck 
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="w-12 h-12 flex-shrink-0 bg-primary-container rounded-lg flex items-center justify-center text-primary-fixed-dim shadow-sm group-hover:scale-110 transition-transform">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-2 text-lg">{item.title}</h4>
                    <p className="text-on-surface-variant text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
