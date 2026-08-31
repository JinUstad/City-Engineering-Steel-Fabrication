'use client'

import type { FormEvent } from 'react'
import { useState } from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'
import { COMPANY } from '@/lib/site-data'
import { SectionHeading } from '@/components/section-heading'

export function ContactSection() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const subject = encodeURIComponent(`Product inquiry from ${name || 'website'}`)
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    )
    window.location.href = `mailto:${COMPANY.email}?subject=${subject}&body=${body}`
  }

  const inputClasses =
    'w-full border border-border bg-input px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-brand-navy'

  return (
    <section id="contact" className="scroll-mt-24 bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Contact Us"
          title="Send an inquiry and get a quick response"
          description="Tell us about your project and our team in New Delhi will get back to you with product options and pricing."
        />

        <div className="mt-10 grid gap-px border border-border bg-border lg:grid-cols-2">
          {/* Contact details */}
          <div className="bg-brand-navy p-6 text-primary-foreground sm:p-8">
            <h3 className="text-xl font-semibold">Visit or reach out</h3>
            <p className="mt-2 text-sm leading-relaxed text-primary-foreground/80">
              We welcome homeowners and interior designers. Get in touch through any of the
              options below.
            </p>

            <ul className="mt-8 space-y-6 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-5 shrink-0 text-brand-red" aria-hidden="true" />
                <div>
                  <p className="font-semibold">Address</p>
                  <address className="mt-1 not-italic leading-relaxed text-primary-foreground/80">
                    {COMPANY.addressLines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </address>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 size-5 shrink-0 text-brand-red" aria-hidden="true" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <a
                    href={`tel:${COMPANY.phone.replace(/\s/g, '')}`}
                    className="mt-1 block text-primary-foreground/80 hover:text-brand-red"
                  >
                    {COMPANY.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 size-5 shrink-0 text-brand-red" aria-hidden="true" />
                <div>
                  <p className="font-semibold">Email</p>
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="mt-1 block text-primary-foreground/80 hover:text-brand-red"
                  >
                    {COMPANY.email}
                  </a>
                </div>
              </li>
            </ul>

            <a
              href={`mailto:${COMPANY.email}`}
              className="mt-8 inline-flex items-center gap-2 bg-brand-red px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              <Mail className="size-4" aria-hidden="true" />
              Send Email
            </a>
          </div>

          {/* Inquiry form */}
          <div className="bg-background p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                  Full name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className={inputClasses}
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className={inputClasses}
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                  Your requirement
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about the products you're interested in..."
                  className={`${inputClasses} resize-y`}
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center bg-brand-navy px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
