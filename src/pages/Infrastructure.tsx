/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { 
  Warehouse, 
  Factory, 
  MapPin, 
  Boxes, 
  Truck, 
  ShieldCheck, 
  Leaf, 
  Settings, 
  Package, 
  Utensils, 
  ShoppingCart, 
  Globe, 
  Hotel, 
  Award,
  ChevronRight,
  Download
} from "lucide-react";

const IMAGES = {
  warehouse: "https://lh3.googleusercontent.com/aida-public/AB6AXuCdV_8esEhmVr4Wu_r8GouwlvIB4fbrKdFUNtXbdB07IbjVM_Y_ClhaatowVcC-l7hiwKtcNrSyCoeXxijmjunF05NflYH88bo6K93J6g0uFHDRX9l7uV5V-yVeUDy-ank0XCqt6iT2Z8FJwrrkrQObjmJz_I89oarisEHUcMD1fI7ROlyxCCB8c0i7xEFhsY-S1NX-Qj_tpIrCx9wJzQGBhNIUmX2xjgqQcKU2CV_rc2Ii09IF9FZ04BaxrSYPgkAtUBMC2eKS61k",
  map: "https://lh3.googleusercontent.com/aida-public/AB6AXuDDPQnx7wEW8d8abS4xoKGrlPcz5gq4x1dfpLn_gogkJfQlqNLe4rVEmz61rT4bf6gI4UmjeKzzwEG4Qpw0lY9WP7CZ3ZGt8VjyHjH1dQ-mL__lnt1Fz1okXEC4MhnVM3M3L8Xedc8wlk4pENjpfhsdyqbvcH6Y4BEN5N38IVvjEO2qywk5TYoeJzIG1BANn8JT-HRBDMg16M3RTxw2TBCTgrfr9Og9ALsmbKKISRdcv0dtdkpV6Mot1uR1s6ewbJV2BiJR6AHfeWc",
  lab: "https://lh3.googleusercontent.com/aida-public/AB6AXuBv-7GBFxXR9KnGqZWK0TcZtNMiqbB72ugwr24DM_MK4NBYDHMjRVd6Cc1EG78CWIP8mceLAtSSWbtUVzNS-qPYsqk8cSWFwqPEid9bh3C1XUjKe1ol8_adPeh1MCcipaObs_T6voNseT8Qsbu30lbvVbtuKd_-2zgEKjk0MdHcRJZvaUiYEIHIFVYoqR4SHcLNhzMNM7EVXWehYnxUBo45Kzfr4cvgsrcw1vQ7MZBOh7p5kWQRXGa9QvyRnl1Yqd_rhPY4uR59oMo",
  spices: "https://lh3.googleusercontent.com/aida-public/AB6AXuBSfUZGt9h-JQvTT-UzJu2I98LvqMD012sxbW7kZpkgdTE6BcWM7BzzteS3qnhYoXbTii5TJ0chh4COdqhJEIvy82jg5oLDAzEIOJ0E0CvT0wq4SHao8ssxH2Jk3FZHGRQXAjoXY20nrRc_kJcUrXMjiBnbT6cTZMnV4MQksCpUj3bxIFZIlZlSOH5bp_mRjH_1FWNyKQZadLHwY0yeJjBmKvwq7QaKdiG5qn-B9c0M-X7i9nwKO09ioBLshCBP92eKxCy2ofRsxMc",
  farm: "https://lh3.googleusercontent.com/aida-public/AB6AXuDYe_f3bRvmqhPtdYaGk8nefIdoOdrQyt1IRI-zxfGww4VAmcTJDQbusNj0lukP_2iyY4ihn9WgQWrdJVdLXLyB9N-cuMpjcn4iJFh-MBbyfEfh8wAhJhfyzCQZ7-QOchzOPilgE4VANfTXYyrf1pvmb9GFxHDfafYl8KHLH2Gj5-OMTqvMh3kdyAN9NyvlVCm7C1zx14mGv3jz9Fbs24TbQ1c0lSKiZCEJfW_gZP-QETTt_MzqoGp_qVkdz420_uuuSjlI7PtPWYk",
  machine: "https://lh3.googleusercontent.com/aida-public/AB6AXuCaG8gkX9u8duW8qBdt9PD_XggkAD7OK72M6LLF0pExVBBKSB10bWH6l0yegsod0-7Fo_6G5LWGV52byPXJQcBgJvPpA_1OQNv0il_861MYjuoAokn2t_bKQWWv7CFm7NZC1p-jjB8r-prDxbUSdEJQPb690jOY9tcKNoRrSOrnmN7zPySvSPzgo7I-b1dwndayc1i8gvmvzwQJ7B-jokCR2FQcroOYwX74cT1MXa_qvXDoEPdYPRgWPdpq6VSSFop0ofwUdBc2gII"
};

const SectionHeader = ({ label, title, description, dark = false }: { label: string, title: string, description?: string, dark?: boolean }) => (
  <div className="mb-16">
    <span className={`label-sm mb-4 block ${dark ? 'text-on-primary-container opacity-80' : 'text-primary'}`}>
      {label}
    </span>
    <h2 className={`text-h2 mb-6 ${dark ? 'text-on-primary' : 'text-primary'}`}>
      {title}
    </h2>
    {description && (
      <p className={`text-body-lg max-w-2xl ${dark ? 'text-on-primary-container opacity-70' : 'text-on-surface-variant'}`}>
        {description}
      </p>
    )}
  </div>
);

export const Infrastructure = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="py-24 bg-surface overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="label-sm text-primary mb-6 block">Institutional Organic</span>
            <h1 className="text-h1 text-primary mb-8">World-Class Infrastructure for Global Export.</h1>
            <p className="text-body-lg text-on-surface-variant max-w-lg mb-10">
              De'Hydra bridges the gap between traditional organic farming and high-tech industrial distribution, ensuring every shipment meets international benchmarks for quality and reliability.
            </p>
            <div className="flex gap-4">
              <button className="bg-primary text-on-primary px-8 py-4 rounded-lg label-sm hover:bg-primary/95 transition-all">
                Our Assets
              </button>
              <button className="border border-outline text-primary px-8 py-4 rounded-lg label-sm hover:bg-primary/5 transition-all">
                Case Studies
              </button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-surface-container-highest border border-outline-variant"
          >
            <img 
              src={IMAGES.warehouse} 
              alt="Logistics center" 
              className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-primary/5 mix-blend-multiply" />
          </motion.div>
        </div>
      </section>

      {/* Logistics Network Section */}
      <section id="infrastructure" className="py-24 bg-surface-container-low border-y border-outline-variant">
        <div className="max-w-7xl mx-auto px-8">
          <SectionHeader 
            label="Network Reach"
            title="Strategic Logistics Network"
            description="Our distribution hubs are strategically located across Gujarat to ensure rapid processing and proximity to major export ports."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-px bg-outline-variant border border-outline-variant">
            {[
              { name: "Mahuva", detail: "PRIMARY HUB", icon: Warehouse },
              { name: "Rajkot", detail: "PROCESSING CENTER", icon: Factory },
              { name: "Mahesana", detail: "REGIONAL DEPOT", icon: MapPin },
              { name: "Ahmedabad", detail: "CORPORATE COLD-CHAIN", icon: Boxes },
              { name: "Surat", detail: "TRANSIT TERMINAL", icon: Truck },
            ].map((loc, i) => (
              <motion.div 
                key={loc.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-surface p-8 group hover:bg-surface-container transition-colors cursor-default"
              >
                <loc.icon className="w-8 h-8 text-secondary mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-primary mb-1">{loc.name}</h3>
                <p className="text-[10px] font-bold tracking-[0.2em] text-on-surface-variant uppercase">{loc.detail}</p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-12 h-[400px] rounded-xl overflow-hidden border border-outline-variant grayscale brightness-105 contrast-125"
          >
            <img src={IMAGES.map} alt="Gujarat Network" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </section>

      {/* Quality Assurance Section */}
      <section id="quality" className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <SectionHeader 
                label="Standards"
                title="Export-Grade Quality Assurance"
                description="We maintain a relentless focus on precision. Every batch of dehydrated produce undergoes rigorous testing to ensure it meets the stringent requirements of international markets."
              />
              <div className="space-y-10">
                {[
                  { title: "Strict Quality Control", desc: "Multi-stage testing protocols ensuring zero contaminants and consistent nutrient retention.", icon: ShieldCheck },
                  { title: "No Preservatives", desc: "100% natural processing. Moisture-reduction technology maintains shelf life without additives.", icon: Leaf },
                  { title: "Consistent Processing", desc: "Automated dehydration lines ensure uniformity in texture, color, and flavor profile.", icon: Settings },
                  { title: "Export-Grade Packaging", desc: "Vacuum-sealed, multi-layered industrial packaging designed for long-distance maritime shipping.", icon: Package },
                ].map((feat, i) => (
                  <motion.div 
                    key={feat.title}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-6"
                  >
                    <div className="w-12 h-12 flex-shrink-0 bg-primary-container rounded-lg flex items-center justify-center text-on-primary-container">
                      <feat.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-primary mb-2">{feat.title}</h4>
                      <p className="text-on-surface-variant leading-relaxed">{feat.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-outline-variant">
                  <img src={IMAGES.lab} alt="Lab" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden border border-outline-variant">
                  <img src={IMAGES.spices} alt="Produce" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="space-y-4 pt-12">
                <div className="aspect-square rounded-2xl overflow-hidden border border-outline-variant">
                  <img src={IMAGES.farm} alt="Sourcing" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-outline-variant">
                  <img src={IMAGES.machine} alt="Processing" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served Section */}
      <section className="py-24 bg-primary text-on-primary">
        <div className="max-w-7xl mx-auto px-8">
          <SectionHeader 
            label="Market Sectors"
            title="Industries Served"
            description="Supplying premium dehydrated ingredients to the world's leading food brands and logistic partners."
            dark
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 border border-on-primary-container/20">
            {[
              { title: "Food manufacturers", sub: "BULK RAW MATERIALS", icon: Utensils },
              { title: "Retail", sub: "SHELF-READY SOLUTIONS", icon: ShoppingCart },
              { title: "Export traders", sub: "GLOBAL LOGISTICS", icon: Globe },
              { title: "HORECA", sub: "INSTITUTIONAL PACKS", icon: Hotel },
              { title: "Private label", sub: "WHITE LABEL SERVICES", icon: Award },
            ].map((ind, i) => (
              <motion.div 
                key={ind.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 border-r border-b lg:border-b-0 border-on-primary-container/20 last:border-r-0 hover:bg-primary-container transition-all group cursor-pointer"
              >
                <ind.icon className="w-10 h-10 mb-8 opacity-60 group-hover:opacity-100 transition-opacity" />
                <h4 className="text-xl font-bold mb-2 leading-tight">{ind.title}</h4>
                <p className="label-sm text-[10px] opacity-50 tracking-[0.2em]">{ind.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership CTA */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto border border-outline-variant p-16 text-center rounded-3xl"
          >
            <h2 className="text-h2 text-primary mb-6">Partner with Excellence</h2>
            <p className="text-body-lg text-on-surface-variant mb-12 max-w-2xl mx-auto">
              Connect with our institutional sales team to discuss bulk requirements, customized processing specifications, and global logistics arrangements.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="bg-secondary text-on-secondary px-10 py-5 rounded-lg label-sm hover:bg-secondary/95 flex items-center justify-center gap-2">
                Inquire Now <ChevronRight className="w-4 h-4" />
              </Link>
              <button className="border border-primary text-primary px-10 py-5 rounded-lg label-sm hover:bg-primary/5 flex items-center justify-center gap-2">
                Download Specs <Download className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};
