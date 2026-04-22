import Link from 'next/link'
import { Globe } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-surface-container-low border-t border-outline-variant py-20">
      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-4 gap-16">
        <div className="col-span-2 max-w-sm">
          <span className="text-xl font-black tracking-tighter text-primary mb-6 block">
            De&apos;Hydra
          </span>
          <p className="text-on-surface-variant leading-relaxed mb-8 text-sm">
            © 2024 De&apos;Hydra Exports. Institutional Organic distribution. Professional-grade
            dehydrated food solutions for global export.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:border-primary hover:text-primary transition-all"
            >
              <Globe className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-12 col-span-2 text-sm">
          <div className="flex flex-col gap-4">
            <span className="label-sm text-primary mb-2">Information</span>
            <ul className="space-y-4 text-on-surface-variant">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Certifications
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Sustainability
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <span className="label-sm text-primary mb-2">Commerce</span>
            <ul className="space-y-4 text-on-surface-variant">
              <li>
                <Link href="/process" className="hover:text-primary transition-colors">
                  Our Process
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-primary transition-colors">
                  Industry Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-secondary font-bold hover:underline">
                  Bulk Inquiry
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Warehouse Locations
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
