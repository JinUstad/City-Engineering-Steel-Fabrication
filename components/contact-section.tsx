'use client'

import type { FormEvent } from 'react'
import { useState } from 'react'
import { Mail, MapPin, Phone, MessageSquare, Send, Clock, ShieldCheck } from 'lucide-react'
import { COMPANY, PRODUCTS } from '@/lib/site-data'
import { SectionHeading } from '@/components/section-heading'

export function ContactSection() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [category, setCategory] = useState('Heavy Structural Steel Fabrication')
  const [tonnage, setTonnage] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const subject = encodeURIComponent(`[RFQ Inquiry] - ${category} from ${name || 'Client'}`)
    const body = encodeURIComponent(
      `RFQ Details:\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nCategory: ${category}\nEstimated Tonnage/Scope: ${tonnage || 'N/A'}\n\nProject Requirements:\n${message}`
    )
    window.location.href = `mailto:${COMPANY.email}?subject=${subject}&body=${body}`
  }

  const inputClasses =
    'w-full rounded-md border border-slate-700 bg-slate-900/90 px-4 py-3 text-sm text-white outline-none transition-all placeholder:text-slate-500 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange'

  return (
    <section id="contact" className="scroll-mt-24 bg-[#090d16] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Direct RFQ & Contact"
          title="Get a Fast Engineering Quote for Your Project"
          description="Send us your structural drawings, BOQ, or project specifications. Our engineering team in New Delhi will provide estimate pricing and turnaround time within 24 hours."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-12">
          {/* Contact Details Column */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl border border-slate-800 bg-[#101726] p-6 sm:p-8 shadow-xl">
            <div>
              <div className="inline-flex items-center gap-2 rounded-md bg-brand-orange/20 border border-brand-orange/40 px-3 py-1 text-xs font-bold text-amber-400">
                <ShieldCheck className="size-3.5" />
                <span>Immediate Technical Consultation</span>
              </div>
              
              <h3 className="mt-4 text-2xl font-bold text-white">Workshop & Head Office</h3>
              <p className="mt-2 text-sm text-slate-300">
                Visit our New Delhi fabrication yard or reach our engineering estimating team directly:
              </p>

              <ul className="mt-8 space-y-6 text-sm">
                <li className="flex items-start gap-4">
                  <div className="size-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-brand-orange shrink-0">
                    <MapPin className="size-5" />
                  </div>
                  <div>
                    <p className="font-bold text-white">Works & Fabrication Plant</p>
                    <address className="mt-1 not-italic text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {COMPANY.addressLines.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </address>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="size-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-brand-orange shrink-0">
                    <Phone className="size-5" />
                  </div>
                  <div>
                    <p className="font-bold text-white">Call Engineering Desk</p>
                    <a
                      href={`tel:${COMPANY.phone.replace(/\s/g, '')}`}
                      className="mt-1 block font-mono text-sm text-amber-400 hover:underline"
                    >
                      {COMPANY.phone}
                    </a>
                    {COMPANY.altPhone && (
                      <a
                        href={`tel:${COMPANY.altPhone.replace(/\s/g, '')}`}
                        className="block font-mono text-xs text-slate-400 hover:text-slate-200"
                      >
                        Alt: {COMPANY.altPhone}
                      </a>
                    )}
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="size-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-brand-orange shrink-0">
                    <Mail className="size-5" />
                  </div>
                  <div>
                    <p className="font-bold text-white">Official RFQ Mail</p>
                    <a
                      href={`mailto:${COMPANY.email}`}
                      className="mt-1 block text-sm text-amber-400 hover:underline"
                    >
                      {COMPANY.email}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="size-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-brand-orange shrink-0">
                    <Clock className="size-5" />
                  </div>
                  <div>
                    <p className="font-bold text-white">Operating Hours</p>
                    <p className="mt-0.5 text-xs text-slate-300">Mon - Sat: 8:30 AM - 7:30 PM</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Quick Action Button */}
            <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap gap-3">
              <a
                href={`tel:${COMPANY.phone.replace(/\s/g, '')}`}
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-md bg-slate-800 border border-slate-700 py-3 text-xs sm:text-sm font-bold text-white hover:bg-slate-700 transition-colors"
              >
                <Phone className="size-4 text-brand-orange" />
                <span>Call Now</span>
              </a>
              <a
                href={`https://wa.me/${COMPANY.phone.replace(/\D/g, '')}`}
                target="_blank"
                rel="noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-md bg-emerald-600/90 hover:bg-emerald-500 py-3 text-xs sm:text-sm font-bold text-white transition-colors"
              >
                <MessageSquare className="size-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7 rounded-2xl border border-slate-800 bg-[#101726] p-6 sm:p-8 shadow-xl">
            <h3 className="text-xl font-bold text-white">Submit Request for Quotation (RFQ)</h3>
            <p className="mt-1.5 text-xs sm:text-sm text-slate-400">
              Provide project scope, required delivery timeline, or attach CAD drawing specs via mail.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-xs font-semibold text-slate-300">
                    Contact Person / Company Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Rahul Sharma / ABC Infra"
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="mb-1.5 block text-xs font-semibold text-slate-300">
                    Mobile / WhatsApp Number *
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className={inputClasses}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-xs font-semibold text-slate-300">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label htmlFor="category" className="mb-1.5 block text-xs font-semibold text-slate-300">
                    Product / Service Category
                  </label>
                  <select
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className={`${inputClasses} bg-[#101726] text-slate-200 cursor-pointer`}
                  >
                    {PRODUCTS.map((p) => (
                      <option key={p.name} value={p.name}>
                        {p.name}
                      </option>
                    ))}
                    <option value="Custom CNC Laser & Bending">Custom CNC Laser & Bending</option>
                    <option value="Turnkey Steel PEB Shed">Turnkey Steel PEB Shed</option>
                    <option value="Other Engineering Metalwork">Other Engineering Metalwork</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="tonnage" className="mb-1.5 block text-xs font-semibold text-slate-300">
                  Approx. Steel Tonnage / Area / Quantity (Optional)
                </label>
                <input
                  id="tonnage"
                  type="text"
                  value={tonnage}
                  onChange={(e) => setTonnage(e.target.value)}
                  placeholder="e.g. 50 Tons / 10,000 Sq.Ft / 500 Running Feet"
                  className={inputClasses}
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-xs font-semibold text-slate-300">
                  Project Specifications & Notes *
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Describe your requirement (material grade, beam profiles, thickness, site location, timeline)..."
                  className={`${inputClasses} resize-y`}
                />
              </div>

              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-brand-orange to-amber-500 px-6 py-4 text-sm font-bold text-white shadow-[0_0_20px_rgba(255,85,0,0.4)] transition-all hover:shadow-[0_0_30px_rgba(255,85,0,0.7)] hover:brightness-110 active:scale-98"
              >
                <Send className="size-4" />
                <span>Submit RFQ to Engineering Team</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
