/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Globe, 
  Settings, 
  Leaf, 
  MapPin, 
  ChevronRight 
} from "lucide-react";

const LEADERS = [
  {
    name: "David Aristhone",
    role: "Chief Executive Officer",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZnmXiOTNn8VuhxDRClYjz_k7DQdcdVNGiz355uiLoENi8ppbAoc_19Pzm5283K0s1aps1uq_yatNSs_Z1CVs7PKBHjCl-GsaGbunkKiz4aWl7OSIABkDvW33uhIsRyJCb9mqnY1uIvWluOyvBGGK8WtAjmMr9sKQ4FG9Row415FovpXFc4Jsvftk5I1-PrQAGwPwmDPJ1f08v9Zi_6Kc0zRcg3NOqM-abBdRGmIKHHrUHr59lzZtIwJUBM50MfdF0v1p7pjyveRw"
  },
  {
    name: "Elena Vance",
    role: "Head of Global Supply Chain",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAszFLckRArnDovn7mbdpa0puTznmy5GXA2cGcR7X5kM9j0tBACvehjjywhv9JfYXo8yS7IpCL-vHCoGX-DP1cqyIC-4KsXYeMIKGJCG3gZlIrYZOjlnt6KM-76-CzBwInqmTyVbMVUri_fGUB7ALRqywiP1R44QuGYp72yeye3vVAFV4MJ61Vs6JT-rqCYW0XUlbLc6vnKCkLwzWe0Sbc-dSI9C-W33DoWkSm19hzx_KnUwSITD13tJX8mp0ZILhsKf2Y4s7wZLNI"
  },
  {
    name: "Marcus Thorne",
    role: "Director of Quality Control",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDs5Jxh2cQlp43TCJetbUyCex5M7sNV5csaMhbDfzgv7TqhA1x1SP0Z7P1vJXEH2k02PgEWPyCM4bFgJ3ZhNSJOs29PERr-AuZC9kTa69OlFbwpYzMsrFdSOx4SYNOV54l9HdINsuWNVutmLPfOhmSFj_3CcEKtzR3OGXraR_SXFpRaHAzvQFHjdbBXisuC3PCs_gNayv6Vyrhva2wgFqkppKTwHdXJDTq11qN27i-cUED0p8ztJrrmYO734j2YXgaKjVJs8WGx7yY"
  },
  {
    name: "Sarah Jenkins",
    role: "Chief Sustainability Officer",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCaTNhvzYoywt2F3JSwefknalPnnJh4gMaKduHfmlw6D510dNGczliDJ7CVKL6oXrHAM7c4GXNSAS_R10hzvylx-qVCo4Wa06-oxP2sk7ycuVqppyFr2lTlJrP3Sn1QGyDC1Rg1T399w65hKbRJ_TGcqPainNC3jzfFSfDin9OSA8fbsJNsTnxymcJE5cfyju53uLLdxpXpmjjK3uXaGtQDB_slWZrdFVZijKQc2kQ0ZrwXpHRA-lcv_UqWrG5AuSvKk15u-jwYawo"
  }
];

const HUBS = [
  { region: "Rotterdam, EU Hub", capacity: "4,500", status: "Active" },
  { region: "Singapore, ASEAN Hub", capacity: "3,200", status: "Active" },
  { region: "Dubai, MENA Hub", capacity: "2,800", status: "Active" },
  { region: "New Jersey, NA Hub", capacity: "5,100", status: "Expanding" }
];

export const About = () => {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative bg-primary-container py-24 px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <span className="text-primary-fixed-dim font-label-sm uppercase tracking-widest text-xs font-bold">Global Export Infrastructure</span>
            <h1 className="text-on-primary text-h1">Redefining the Standards of International Agriculture.</h1>
            <p className="text-on-primary-container font-body-lg opacity-90 leading-relaxed max-w-xl">
              De'Hydra bridges the gap between fertile natural sources and industrial-grade global distribution through world-class infrastructure and unyielding precision.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative h-[500px] bg-white/5 rounded-2xl overflow-hidden shadow-2xl border border-white/10"
          >
            <img 
              alt="Modern Logistics Facility" 
              className="absolute inset-0 w-full h-full object-cover grayscale brightness-75 mix-blend-overlay" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYnabJUK79TgbG9BpHg676uQfUEyU9QGbl0y-z51IauQdWK3h9eP1XgXIo83XMzMO--SPa8M-_j9cMNJEc4bZA-CO4whQTvxuWXV8m7C6szwnVBB22lrHDpzjqUaBKPCKcGKv-h3d99EzTMuo1_hYbwuL2g2_vePaeGRz8f_QzlxaCM7tRbuqP-ufWqCJXBVPZz1adfcDLrVug114d4HrP1mX--TcizmsOS-l9_YW5R_JCaAOFdnqTTNzzSfUh0R7S8ZG80Ve73do" 
            />
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 px-8 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-4 border-l-4 border-primary-container pl-8"
            >
              <h2 className="text-h2 text-primary">The De'Hydra Origin</h2>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-8 space-y-8"
            >
              <p className="text-body-lg text-on-surface-variant leading-relaxed">
                Founded on the principle of technical excellence, De'Hydra was established to solve the fragmentation of the organic export market. While the world demanded high-quality natural products, the infrastructure to deliver them consistently was lacking. 
              </p>
              <p className="text-body-lg text-on-surface-variant leading-relaxed">
                We invested in proprietary dehydration technology and cold-chain logistics that exceed ISO standards, ensuring that every ton of product delivered in Rotterdam or Singapore carries the same purity it had at the source in the lush valleys of our origin.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-24 px-8 bg-surface-container-low border-y border-outline-variant">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-h2 text-primary">Precision in Every Metric</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Globe, title: "Global Footprint", text: "Operating across 4 continents with dedicated quality assurance labs in each regional hub." },
              { icon: Settings, title: "World-Class Tech", text: "Utilizing Grade-A dehydration systems that preserve 98% of natural enzymatic activity." },
              { icon: Leaf, title: "Institutional Organic", text: "Independent audits by three global agencies ensure we set the benchmark for sustainability." }
            ].map((value, i) => (
              <motion.div 
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 border border-outline-variant rounded-xl flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-primary-fixed flex items-center justify-center rounded-lg text-primary">
                  <value.icon className="w-6 h-6" />
                </div>
                <h3 className="text-h3 text-primary">{value.title}</h3>
                <p className="text-body-md text-on-surface-variant leading-relaxed">{value.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-h2 text-primary">Executive Leadership</h2>
            <div className="h-1 w-24 bg-primary-container mt-4 rounded-full" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {LEADERS.map((leader, i) => (
              <motion.div 
                key={leader.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="aspect-square bg-slate-100 mb-6 overflow-hidden rounded-xl border border-outline-variant group-hover:border-primary transition-colors">
                  <img 
                    alt={leader.name} 
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" 
                    src={leader.image} 
                  />
                </div>
                <h4 className="text-h3 text-primary group-hover:text-secondary transition-colors">{leader.name}</h4>
                <p className="text-primary font-label-sm uppercase mt-1 tracking-widest text-[10px] font-black opacity-60">{leader.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Footprint */}
      <section className="py-24 px-8 bg-surface-container border-t border-outline-variant">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-h2 text-primary mb-8">Strategic Distribution Hubs</h2>
              <div className="overflow-hidden border border-outline-variant rounded-xl shadow-sm bg-white">
                <table className="w-full text-left">
                  <thead className="bg-surface-container-high border-b border-outline-variant">
                    <tr>
                      <th className="py-4 px-6 font-label-sm text-primary uppercase text-[10px] tracking-widest">Region</th>
                      <th className="py-4 px-6 font-label-sm text-primary uppercase text-[10px] tracking-widest">Capacity (Tons/Mo)</th>
                      <th className="py-4 px-6 font-label-sm text-primary uppercase text-[10px] tracking-widest">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-outline-variant/30">
                    {HUBS.map((hub) => (
                      <tr key={hub.region} className="hover:bg-surface-container-lowest transition-colors">
                        <td className="py-4 px-6 font-bold text-primary text-sm">{hub.region}</td>
                        <td className="py-4 px-6 font-mono text-xs text-on-surface-variant">{hub.capacity}</td>
                        <td className="py-4 px-6">
                          <span className={`${
                            hub.status === 'Active' 
                              ? 'bg-primary-fixed text-on-primary-fixed-variant border-primary/20' 
                              : 'bg-secondary-fixed text-on-secondary-fixed-variant border-secondary/20'
                          } px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border`}>
                            {hub.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-slate-300 h-[450px] rounded-2xl overflow-hidden relative border border-outline-variant shadow-lg group"
            >
              <img 
                alt="Global Logistics Map" 
                className="w-full h-full object-cover opacity-80 grayscale group-hover:grayscale-0 transition-all duration-1000" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_v_6CKex4u6x9NEZg3PQR0x33O39xCDwKxZL0raXo8HGrKxfYlul0D_-KAaW7iRSX1z6xQBvRxr_467sxa8GVxIgPqQHylFBVNE9pZTUiD61kUvUkPOpd8So8qyVbUGrT2P8fOb6LtpKitIf7MT1EhaYTrErN9vBT1l9YbT_rUConvZUnAR-mvjwJm8dyzS4K1WA8qb2bcd6BGpFGDA5id0rsc0BngSccXZ8slaUrAYIf19CCAE5rl4JoKPSRmSifCgAl5Vr9tfg" 
              />
              <div className="absolute inset-0 bg-primary-container/20 mix-blend-multiply" />
              <div className="absolute bottom-8 left-8 flex items-center gap-3 bg-white/90 backdrop-blur-md px-6 py-3 rounded-full border border-outline-variant shadow-lg">
                <MapPin className="text-secondary w-4 h-4" />
                <span className="text-xs font-bold text-primary tracking-widest uppercase">Global Port Network</span>
                <ChevronRight className="w-4 h-4 text-primary" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
