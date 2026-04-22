/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  ShieldCheck, 
  Award, 
  FileCheck, 
  Download, 
  History, 
  Search,
  Scan,
  BadgeCheck,
  Leaf,
  Gavel,
  Settings,
  Eye
} from "lucide-react";
import { Link } from "react-router-dom";

const CERTIFICATES = [
  {
    name: "ISO 22000:2018",
    description: "Food Safety Management System (FSMS) certification ensuring every step of our supply chain meets global safety requirements for human consumption.",
    ref: "ISO-DEH-2024",
    size: "2.4MB",
    icon: ShieldCheck
  },
  {
    name: "HACCP Certification",
    description: "Hazard Analysis and Critical Control Points protocol implementation to prevent chemical, physical, and biological hazards in production.",
    ref: "HC-9921-X",
    size: "1.1MB",
    icon: BadgeCheck
  },
  {
    name: "USDA & EU Organic",
    description: "Dual certification for international organic trade. Validates zero synthetic pesticide usage and non-GMO procurement processes across all De'Hydra sourcing farms.",
    isMajor: true,
    subCerts: ["USDA Organic", "EU Organic (Bio)"],
    icon: Leaf
  },
  {
    name: "FSSAI License",
    description: "Central License from the Food Safety and Standards Authority of India for high-capacity export operations.",
    ref: "Lic: 1002209100045",
    size: "0.8MB",
    icon: Gavel
  },
  {
    name: "GMP Certified",
    description: "Good Manufacturing Practices certification ensuring consistent production and quality control according to international standards.",
    ref: "Ref: GMP-DH-24",
    size: "1.5MB",
    icon: Settings
  }
];

const AUDITS = [
  { date: "Oct 2023", agency: "SGS International", scope: "Annual ISO 22000 Review" },
  { date: "Jul 2023", agency: "Control Union", scope: "Organic Sourcing Audit" },
  { date: "Apr 2023", agency: "FSSAI Authority", scope: "Facility Sanitation Check" }
];

export const Quality = () => {
  return (
    <main className="max-w-7xl mx-auto px-8 py-20">
      {/* Hero Section */}
      <section className="mb-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <span className="text-primary font-label-sm uppercase mb-4 block tracking-widest">Institutional Standards</span>
          <h1 className="text-h1 text-primary mb-6">Global Compliance & Quality Assurance</h1>
          <p className="text-body-lg text-on-surface-variant max-w-xl mb-8">
            We bridge the gap between natural sources and industrial-grade distribution. Our certifications are a testament to our commitment to international organic standards and rigorous safety protocols.
          </p>
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-2 text-primary font-semibold">
              <ShieldCheck className="w-5 h-5 text-secondary" />
              <span className="text-label-sm tracking-wide">ISO 22000:2018</span>
            </div>
            <div className="flex items-center gap-2 text-primary font-semibold">
              <BadgeCheck className="w-5 h-5 text-secondary" />
              <span className="text-label-sm tracking-wide">HACCP Certified</span>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative h-[400px] bg-surface-container rounded-2xl overflow-hidden border border-outline-variant shadow-sm group"
        >
          <img 
            alt="Laboratory testing" 
            className="w-full h-full object-cover grayscale contrast-125 opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-hVMHF8qC5cbfFCRST8ukQggMEBXmmI23fpavrOzyphH2PcGnHaeUEC5AOQiDHEYUqLNs3N79R1vUDHJt8uB14gCUpalFK5cM-Gy49h7V9jrkpdJ_-UrtA78DBHkQRSfjj6etSoBSPbeg_d5PzlPn0--oYR_3M0rUCdEZZJe2R2SNxfraBndA-9B8yTu0svyK8sgExc2URMUxEUopkOEEKvjStKRu3wZW6pV3y0ZAPdUoTBYeYQAQtV4UzeRHEUo0nNaYz4fEWj8" 
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent pointer-events-none" />
        </motion.div>
      </section>

      {/* Certificates Bento Grid */}
      <section className="mb-24">
        <h2 className="text-h2 text-primary mb-12 border-l-4 border-secondary pl-6">Institutional Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATES.map((cert) => (
            <motion.div 
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`p-8 border border-outline-variant bg-white flex flex-col justify-between hover:border-primary transition-all rounded-sm shadow-sm group ${cert.isMajor ? 'lg:row-span-2' : ''}`}
            >
              <div>
                <div className="w-16 h-16 mb-6 flex items-center justify-center bg-surface-container-low rounded-lg group-hover:bg-primary-container group-hover:text-on-primary-container transition-colors">
                  <cert.icon className="w-8 h-8 text-primary group-hover:text-inherit" />
                </div>
                <h3 className="text-h3 text-primary mb-4">{cert.name}</h3>
                <p className="text-on-surface-variant mb-6 text-label-sm leading-relaxed">{cert.description}</p>
                
                {cert.subCerts && (
                  <div className="space-y-3 mb-8">
                    {cert.subCerts.map(sub => (
                      <div key={sub} className="flex justify-between items-center bg-surface-container-low p-4 rounded border border-outline-variant/30">
                        <span className="font-label-sm text-xs">{sub}</span>
                        <ShieldCheck className="w-4 h-4 text-primary" />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {cert.ref ? (
                <div className="flex items-center justify-between pt-6 border-t border-outline-variant/50">
                  <span className="text-[10px] font-bold text-outline uppercase tracking-wider">{cert.ref}</span>
                  <button className="flex items-center gap-2 text-primary font-bold hover:text-secondary transition-colors group/btn">
                    <Download className="w-4 h-4 group-hover/btn:translate-y-0.5 transition-transform" />
                    <span className="text-xs uppercase tracking-widest">PDF ({cert.size})</span>
                  </button>
                </div>
              ) : (
                <button className="w-full bg-primary text-on-primary py-4 font-label-sm rounded uppercase tracking-widest flex justify-center items-center gap-3 hover:brightness-110 active:scale-[0.98] transition-all shadow-md mt-auto">
                  <FileCheck className="w-5 h-5" />
                  Download Full Dossier
                </button>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Compliance Timeline/Table */}
      <section className="mb-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="text-h2 text-primary mb-2">Audit History</h2>
            <p className="text-on-surface-variant text-body-md">Transparent reporting on our last four quarterly inspections.</p>
          </div>
          <button className="text-primary font-label-sm flex items-center gap-2 border border-outline-variant px-6 py-3 hover:bg-surface-container transition-all rounded transition-colors group">
            <History className="w-4 h-4 group-hover:rotate-[-45deg] transition-transform" />
            <span className="uppercase tracking-widest">View Full Archive</span>
          </button>
        </div>
        
        <div className="overflow-hidden border border-outline-variant bg-white rounded-lg shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-low">
                  <th className="p-6 font-label-sm text-primary uppercase tracking-wider border-b border-outline-variant">Date</th>
                  <th className="p-6 font-label-sm text-primary uppercase tracking-wider border-b border-outline-variant">Audit Agency</th>
                  <th className="p-6 font-label-sm text-primary uppercase tracking-wider border-b border-outline-variant">Scope</th>
                  <th className="p-6 font-label-sm text-primary uppercase tracking-wider border-b border-outline-variant">Status</th>
                  <th className="p-6 font-label-sm text-primary uppercase tracking-wider border-b border-outline-variant text-right">Report</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/30">
                {AUDITS.map((audit) => (
                  <tr key={audit.date} className="hover:bg-surface-container-lowest transition-colors">
                    <td className="p-6 text-label-sm font-bold text-primary">{audit.date}</td>
                    <td className="p-6 text-body-md text-on-surface-variant">{audit.agency}</td>
                    <td className="p-6 text-body-md text-on-surface-variant font-medium">{audit.scope}</td>
                    <td className="p-6">
                      <span className="bg-primary-fixed text-on-primary-fixed px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-primary/20">
                        Compliant
                      </span>
                    </td>
                    <td className="p-6 text-right">
                      <button className="p-2 text-outline hover:text-primary hover:bg-surface-container-low transition-all rounded-full">
                        <Eye className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Technical Specification Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-primary p-12 text-on-primary rounded-2xl grid grid-cols-1 md:grid-cols-3 gap-12 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl" />
        <div className="md:col-span-2 relative z-10">
          <h2 className="text-h2 mb-4">Request Technical Data Sheets</h2>
          <p className="text-body-lg opacity-80 mb-8 max-w-2xl">
            Need detailed lab reports for a specific batch? Our QA team provides complete Batch Analysis Reports (BAR) including microbial profiles and moisture content for all bulk shipments.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl" onSubmit={(e) => e.preventDefault()}>
            <input 
              className="flex-1 bg-white/10 border border-white/20 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/30 rounded transition-all" 
              placeholder="Institutional Email Address" 
              type="email" 
            />
            <button className="bg-white text-primary font-label-sm px-8 py-3 whitespace-nowrap hover:bg-primary-fixed transition-colors rounded font-bold uppercase tracking-widest shadow-lg active:scale-95">
              Request Access
            </button>
          </form>
        </div>
        <div className="hidden md:flex flex-col justify-center items-end border-l border-white/10 pl-12 relative z-10">
          <div className="text-right">
            <span className="text-5xl font-black block tracking-tighter mb-1">100%</span>
            <span className="text-[10px] font-black opacity-60 uppercase tracking-[0.3em]">Transparency</span>
          </div>
          <div className="text-right mt-12">
            <span className="text-5xl font-black block tracking-tighter mb-1">24h</span>
            <span className="text-[10px] font-black opacity-60 uppercase tracking-[0.3em]">QA Response</span>
          </div>
        </div>
      </motion.section>
    </main>
  );
};
