import { SiteHeader } from '@/components/site-header'
import { BannerSlider } from '@/components/banner-slider'
import { ProductsGrid } from '@/components/products-grid'
import { FeaturedProducts } from '@/components/featured-products'
import { AboutSection } from '@/components/about-section'
import { ContactSection } from '@/components/contact-section'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <BannerSlider />
        <ProductsGrid />
        <FeaturedProducts />
        <AboutSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  )
}
