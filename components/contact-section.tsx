'use client'

import type { FormEvent } from 'react'
import { useState } from 'react'
import { Mail, MapPin, Phone, MessageSquare, Send, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react'
import { COMPANY, PRODUCTS } from '@/lib/site-data'
import { SectionHeading } from '@/components/section-heading'

export function ContactSection() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [category, setCategory] = useState('Heavy Structural Steel Fabrication')
  const [tonnage, setTonnage] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
    const subject = encodeURIComponent(`[RFQ Inquiry] - ${category} from ${name || 'Client'}`)
    const body = encodeURIComponent(
      `RFQ Details:\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nCategory: ${category}\nEstimated Tonnage/Scope: ${tonnage || 'N/A'}\n\nProject Requirements:\n${message}`
    )
    window.location.href = `mailto:${COMPANY.email}?subject=${subject}&body=${body}`
  }

  const inputClasses =
    'w-full rounded-md border border-slate-700 bg-slate-900/90 px-4 py-3 text-sm text-white outline-none transition-all placeholder:text-slate-500 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange'

  return (
    <section id="contact-form" className="scroll-mt-24 bg-[#090d16] py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Direct RFQ & Quotation"
          title="Submit Project Requirements for Engineering Estimate"
          description="Send us your structural drawings, BOQ, or project specifications. Our engineering team in New Delhi will review and respond with estimate pricing within 24 hours."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-12">
          {/* Contact Details Column */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl border border-slate-800 bg-[#101726] p-6 sm:p-8 shadow-xl">
            <div>
              <div className="inline-flex items-center gap-2 rounded-md bg-brand-orange/20 border border-brand-orange/40 px-3 py-1 text-xs font-bold text-amber-400">
                <ShieldCheck className="size-3.5" />
                <span>Direct Chief Engineer Desk</span>
              </div>
              
              <h3 className="mt-4 text-2xl font-bold text-white">Works & Office Location</h3>
              <p className="mt-2 text-sm text-slate-300">
                Visit our Ghaziabad (U.P) heavy steel fabrication workshop or speak directly with our engineering estimation team:
              </p>

              <ul className="mt-8 space-y-6 text-sm">
                <li className="flex items-start gap-4">
                  <div className="size-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-brand-orange shrink-0">
                    <MapPin className="size-5" />
                  </div>
                  <div>
                    <p className="font-bold text-white">Fabrication Workshop</p>
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
                    <ShieldCheck className="size-5" />
                  </div>
                  <div>
                    <p className="font-bold text-white">GST Registration</p>
                    <p className="mt-1 font-mono text-sm font-bold text-amber-400">
                      GSTIN: {COMPANY.gstNumber}
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="size-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-brand-orange shrink-0">
                    <Phone className="size-5" />
                  </div>
                  <div>
                    <p className="font-bold text-white">Direct Phone Lines</p>
                    <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1">
                      <a
                        href={`tel:${COMPANY.phoneClean}`}
                        className="font-mono text-sm sm:text-base font-bold text-amber-400 hover:underline"
                      >
                        {COMPANY.phone}
                      </a>
                      <span className="text-slate-600">|</span>
                      <a
                        href={`tel:${COMPANY.phone2Clean}`}
                        className="font-mono text-sm sm:text-base font-bold text-amber-400 hover:underline"
                      >
                        {COMPANY.phone2}
                      </a>
                    </div>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="size-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-brand-orange shrink-0">
                    <Mail className="size-5" />
                  </div>
                  <div>
                    <p className="font-bold text-white">Official Email Address</p>
                    <a
                      href={`mailto:${COMPANY.email}`}
                      className="mt-1 block text-sm font-semibold text-amber-400 hover:underline"
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
                    <p className="font-bold text-white">Working Hours</p>
                    <p className="mt-0.5 text-xs text-slate-300">Monday - Saturday: 8:30 AM - 7:30 PM</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Quick Action Button */}
            <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap gap-3">
              <a
                href={`tel:${COMPANY.phoneClean}`}
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-md bg-slate-800 border border-slate-700 py-3 text-xs sm:text-sm font-bold text-white hover:bg-slate-700 transition-colors"
              >
                <Phone className="size-4 text-brand-orange" />
                <span>Call {COMPANY.phone}</span>
              </a>
              <a
                href={`tel:${COMPANY.phone2Clean}`}
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-md bg-slate-800 border border-slate-700 py-3 text-xs sm:text-sm font-bold text-white hover:bg-slate-700 transition-colors"
              >
                <Phone className="size-4 text-amber-400" />
                <span>Call {COMPANY.phone2}</span>
              </a>
              <a
                href={`https://wa.me/${COMPANY.phoneClean}?text=Hello%20CESF%20Fabrication,%20I%20have%20an%20engineering%20inquiry`}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-md bg-[#25D366] hover:brightness-110 py-3 px-6 text-xs sm:text-sm font-bold text-white transition-colors shadow-lg"
              >
                <MessageSquare className="size-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7 rounded-2xl border border-slate-800 bg-[#101726] p-6 sm:p-8 shadow-xl">
            <h3 className="text-xl font-bold text-white">Request for Quotation (RFQ) Form</h3>
            <p className="mt-1.5 text-xs sm:text-sm text-slate-400">
              Provide project scope, required delivery timeline, or request a call from our structural design team.
            </p>

            {submitted && (
              <div className="mt-4 rounded-md bg-emerald-950/80 border border-emerald-600 p-4 text-emerald-200 text-sm flex items-center gap-3">
                <CheckCircle2 className="size-5 text-emerald-400 shrink-0" />
                <span>Thank you! Your inquiry is being sent to our engineering team at {COMPANY.email}.</span>
              </div>
            )}

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
                    placeholder="+91 93184 00632"
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
                  Project Specifications & Drawing Notes *
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
