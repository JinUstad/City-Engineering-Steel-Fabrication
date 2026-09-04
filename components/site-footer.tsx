import Image from 'next/image'
import Link from 'next/link'
import { Mail, MapPin, Phone, ArrowUp, Award } from 'lucide-react'
import { COMPANY, NAV_LINKS, PRODUCTS } from '@/lib/site-data'

export function SiteFooter() {
  return (
    <footer className="bg-slate-900 dark:bg-[#05080e] border-t border-slate-800 text-slate-300">
      {/* Main Footer Links */}
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4 sm:px-6">
        {/* Brand info */}
        <div className="sm:col-span-2 lg:col-span-1">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative size-12 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900/90 p-1 border border-slate-700 shadow-[0_0_15px_rgba(255,85,0,0.25)] flex items-center justify-center shrink-0">
              <Image
                src="/updated-logo-transparent.png"
                alt="CESF Fabrication Logo"
                fill
                className="object-contain p-0.5 filter drop-shadow-[0_0_8px_rgba(255,85,0,0.45)] brightness-125 contrast-110"
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

          <div className="mt-4 flex flex-col gap-2">
            <div className="inline-flex items-center gap-1.5 rounded bg-amber-500/10 border border-amber-500/25 px-2.5 py-1 text-[11px] font-mono font-bold text-amber-300 w-max">
              <Award className="size-3.5 text-brand-orange" />
              <span>GSTIN: {COMPANY.gstNumber}</span>
            </div>
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
                  href="/products"
                  className="text-slate-400 transition-colors hover:text-brand-orange"
                >
                  {product.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact info with Full Address & GST */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-amber-400">Works & Estimation Desk</h3>
          <ul className="mt-4 space-y-3 text-xs sm:text-sm">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 size-4 shrink-0 text-brand-orange" aria-hidden="true" />
              <address className="not-italic leading-relaxed text-slate-300">
                {COMPANY.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="size-4 shrink-0 text-brand-orange" aria-hidden="true" />
              <div className="flex flex-wrap items-center gap-x-2 text-slate-300 font-mono text-xs sm:text-sm">
                <a
                  href={`tel:${COMPANY.phoneClean}`}
                  className="transition-colors hover:text-amber-400"
                >
                  {COMPANY.phone}
                </a>
                <span className="text-slate-600">/</span>
                <a
                  href={`tel:${COMPANY.phone2Clean}`}
                  className="transition-colors hover:text-amber-400"
                >
                  {COMPANY.phone2}
                </a>
              </div>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="size-4 shrink-0 text-brand-orange" aria-hidden="true" />
              <a
                href={`mailto:${COMPANY.email}`}
                className="text-slate-300 transition-colors hover:text-amber-400"
              >
                {COMPANY.email}
              </a>
            </li>
            <li className="flex items-center gap-2.5 pt-1 border-t border-slate-800/80">
              <Award className="size-4 shrink-0 text-brand-orange" />
              <span className="font-mono text-xs font-semibold text-amber-400">
                GST: {COMPANY.gstNumber}
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800/80 bg-slate-950 dark:bg-[#030509] py-5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 text-xs text-slate-400 sm:flex-row sm:px-6">
          <p>
            &copy; {new Date().getFullYear()} {COMPANY.fullName} (CESF). All rights reserved. | GST: {COMPANY.gstNumber}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <span>
              Design by{' '}
              <a
                href="https://www.devfordevs.in"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-brand-orange hover:text-amber-400 underline underline-offset-4 transition-colors"
              >
                DevforDevs
              </a>
            </span>
            <span className="hidden sm:inline text-slate-700">•</span>
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
