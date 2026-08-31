import { Mail, MapPin, Phone } from 'lucide-react'
import { COMPANY, NAV_LINKS, PRODUCTS } from '@/lib/site-data'

export function SiteFooter() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center bg-brand-red text-lg font-bold text-primary-foreground">
              FM
            </span>
            <span className="text-lg font-semibold">{COMPANY.name}</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-secondary-foreground/70">
            {COMPANY.tagline}. Manufacturing quality modular interiors in New Delhi since{' '}
            {COMPANY.founded}.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-secondary-foreground/70 transition-colors hover:text-brand-red"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider">Products</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {PRODUCTS.map((product) => (
              <li key={product.name}>
                <a
                  href="#products"
                  className="text-secondary-foreground/70 transition-colors hover:text-brand-red"
                >
                  {product.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 size-4 shrink-0 text-brand-red" aria-hidden="true" />
              <address className="not-italic leading-relaxed text-secondary-foreground/70">
                {COMPANY.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="size-4 shrink-0 text-brand-red" aria-hidden="true" />
              <a
                href={`tel:${COMPANY.phone.replace(/\s/g, '')}`}
                className="text-secondary-foreground/70 transition-colors hover:text-brand-red"
              >
                {COMPANY.phone}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="size-4 shrink-0 text-brand-red" aria-hidden="true" />
              <a
                href={`mailto:${COMPANY.email}`}
                className="text-secondary-foreground/70 transition-colors hover:text-brand-red"
              >
                {COMPANY.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-secondary-foreground/15">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-secondary-foreground/60 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </p>
          <p>New Delhi, India</p>
        </div>
      </div>
    </footer>
  )
}
