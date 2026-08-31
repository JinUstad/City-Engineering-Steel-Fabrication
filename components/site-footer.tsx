import Image from 'next/image'
import Link from 'next/link'
import { Mail, MapPin, Phone, ShieldCheck, Flame, ArrowUp } from 'lucide-react'
import { COMPANY, NAV_LINKS, PRODUCTS } from '@/lib/site-data'

export function SiteFooter() {
  return (
    <footer className="bg-[#05080e] border-t border-slate-800 text-slate-300">
      {/* Top Banner inside Footer */}
      <div className="border-b border-slate-800/80 bg-gradient-to-r from-brand-orange/10 via-slate-900 to-amber-500/10 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-full bg-brand-orange/20 border border-brand-orange flex items-center justify-center text-brand-orange">
              <Flame className="size-5" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">Have an Urgent Fabrication Requirement?</h4>
              <p className="text-xs text-slate-400">Speak directly with our Chief Engineer for immediate estimation.</p>
            </div>
          </div>
          <a
            href={`tel:${COMPANY.phone.replace(/\s/g, '')}`}
            className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-brand-orange to-amber-500 px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-[0_0_15px_rgba(255,85,0,0.4)] hover:brightness-110"
          >
            <Phone className="size-4" />
            <span>Call {COMPANY.phone}</span>
          </a>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4 sm:px-6">
        {/* Brand info */}
        <div className="sm:col-span-2 lg:col-span-1">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative size-12 rounded-full overflow-hidden border border-brand-orange/80 bg-[#0b101c] p-0.5">
              <Image
                src="/cesf-logo.webp"
                alt="CESF Fabrication Logo"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-black text-white">
                CESF <span className="text-brand-orange">FABRICATION</span>
              </span>
              <span className="text-[10px] font-bold text-amber-400 tracking-wider">
                BUILD • SHAPE • STRONGER
              </span>
            </div>
          </Link>

          <p className="mt-4 text-xs leading-relaxed text-slate-400">
            {COMPANY.fullName}. Leading fabricators of heavy structural steel, industrial PEB sheds, CNC fiber laser cutting, and architectural metal assemblies since {COMPANY.founded}.
          </p>

          <div className="mt-4 inline-flex items-center gap-1.5 rounded bg-slate-900 border border-slate-800 px-2.5 py-1 text-[11px] font-semibold text-emerald-400">
            <ShieldCheck className="size-3.5" />
            <span>ISO 9001:2015 Certified Workshop</span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-amber-400">Quick Navigation</h3>
          <ul className="mt-4 space-y-2 text-xs sm:text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-slate-400 transition-colors hover:text-brand-orange"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Products */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-amber-400">Fabrication Services</h3>
          <ul className="mt-4 space-y-2 text-xs sm:text-sm">
            {PRODUCTS.map((product) => (
              <li key={product.name}>
                <Link
                  href="/#products"
                  className="text-slate-400 transition-colors hover:text-brand-orange"
                >
                  {product.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-amber-400">Works & Estimation</h3>
          <ul className="mt-4 space-y-3 text-xs sm:text-sm">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 size-4 shrink-0 text-brand-orange" aria-hidden="true" />
              <address className="not-italic leading-relaxed text-slate-400">
                {COMPANY.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="size-4 shrink-0 text-brand-orange" aria-hidden="true" />
              <a
                href={`tel:${COMPANY.phone.replace(/\s/g, '')}`}
                className="text-slate-400 font-mono transition-colors hover:text-amber-400"
              >
                {COMPANY.phone}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="size-4 shrink-0 text-brand-orange" aria-hidden="true" />
              <a
                href={`mailto:${COMPANY.email}`}
                className="text-slate-400 transition-colors hover:text-amber-400"
              >
                {COMPANY.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-900 bg-[#030509] py-5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 text-xs text-slate-400 sm:flex-row sm:px-6">
          <p>
            &copy; {new Date().getFullYear()} {COMPANY.fullName} (CESF). All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span>New Delhi, India</span>
            <Link
              href="/#home"
              className="inline-flex items-center gap-1 text-slate-400 hover:text-brand-orange transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp className="size-3" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
