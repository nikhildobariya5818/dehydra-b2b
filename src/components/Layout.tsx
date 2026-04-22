/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, Globe } from "lucide-react";
import { motion } from "motion/react";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-surface/95 backdrop-blur-sm border-b border-outline-variant">
        <div className="max-w-7xl mx-auto px-8 h-20 flex justify-between items-center">
          <div className="flex items-center gap-12">
            <Link to="/" className="text-2xl font-black tracking-tighter text-primary">De'Hydra</Link>
            <div className="hidden md:flex items-center gap-8">
              {[
                { name: 'Products', path: '/products' },
                { name: 'Process', path: '/process' },
                { name: 'Infrastructure', path: '/infrastructure' },
                { name: 'Quality', path: '/quality' },
                { name: 'Blog', path: '/blog' },
                { name: 'About Us', path: '/about' },
                { name: 'Contact', path: '/contact' }
              ].map((item) => (
                <Link 
                  key={item.name} 
                  to={item.path} 
                  className={`text-sm font-medium transition-colors relative pb-1 ${
                    location.pathname === item.path 
                      ? 'text-primary' 
                      : 'text-on-surface-variant hover:text-primary'
                  }`}
                >
                  {item.name}
                  {location.pathname === item.path && (
                    <motion.div 
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-primary" 
                    />
                  )}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Search className="w-5 h-5 text-outline cursor-pointer hover:text-primary transition-colors hidden lg:block" />
            <Link 
              to="/contact"
              className="bg-secondary text-on-secondary px-6 py-3 rounded-lg text-sm font-semibold uppercase tracking-wider hover:bg-secondary/90 transition-all active:scale-95 shadow-sm"
            >
              Request Quote
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-surface-container-low border-t border-outline-variant py-20">
        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-4 gap-16">
          <div className="col-span-2 max-w-sm">
            <span className="text-xl font-black tracking-tighter text-primary mb-6 block">De'Hydra</span>
            <p className="text-on-surface-variant leading-relaxed mb-8 text-sm">
              © 2024 De'Hydra Exports. Institutional Organic distribution. Professional-grade dehydrated food solutions for global export.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:border-primary hover:text-primary transition-all">
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-12 col-span-2 text-sm">
            <div className="flex flex-col gap-4">
              <span className="label-sm text-primary mb-2">Information</span>
              <ul className="space-y-4 text-on-surface-variant">
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Certifications</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Sustainability</a></li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <span className="label-sm text-primary mb-2">Commerce</span>
              <ul className="space-y-4 text-on-surface-variant">
                <li><Link to="/process" className="hover:text-primary transition-colors">Our Process</Link></li>
                <li><Link to="/blog" className="hover:text-primary transition-colors">Industry Blog</Link></li>
                <li><Link to="/contact" className="text-secondary font-bold hover:underline">Bulk Inquiry</Link></li>
                <li><a href="#" className="hover:text-primary transition-colors">Warehouse Locations</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
