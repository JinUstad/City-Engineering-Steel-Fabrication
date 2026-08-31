export const COMPANY = {
  name: 'FM Modular Systems',
  tagline: 'Manufacturer & Supplier of Modular Interiors',
  founded: '2019',
  email: 'info@fmsystems.co.in',
  phone: '+91 98100 00000',
  addressLines: [
    'FM Modular Systems',
    'Plot No. 24, Industrial Area',
    'New Delhi, Delhi 110001, India',
  ],
  addressShort: 'New Delhi, India',
}

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Products', href: '#products' },
  { label: 'Featured', href: '#featured' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export type Banner = {
  image: string
  eyebrow: string
  title: string
  description: string
}

export const BANNERS: Banner[] = [
  {
    image: '/banner-kitchen.png',
    eyebrow: 'Modular Kitchens',
    title: 'Acrylic kitchens built to last a lifetime',
    description:
      'High-gloss acrylic shutters, precision hardware, and factory-finished modular units made to order in New Delhi.',
  },
  {
    image: '/banner-sofa.png',
    eyebrow: 'Living Room',
    title: 'Sofa sets crafted for everyday comfort',
    description:
      'Durable frames, quality upholstery, and clean contemporary designs for homes and offices.',
  },
  {
    image: '/banner-office.png',
    eyebrow: 'Commercial Interiors',
    title: 'Office workstations that scale with you',
    description:
      'Modular workstations, partitions, and storage engineered for productive, professional spaces.',
  },
]

export type Product = {
  name: string
  category: string
  image: string
  description: string
}

export const PRODUCTS: Product[] = [
  {
    name: 'Acrylic Kitchen Shutters',
    category: 'Kitchen',
    image: '/product-acrylic-shutters.png',
    description: 'High-gloss, scratch-resistant acrylic shutters in a full range of colours.',
  },
  {
    name: 'Sofa Sets',
    category: 'Living Room',
    image: '/product-sofa.png',
    description: 'Custom sofa sets with durable frames and premium upholstery.',
  },
  {
    name: 'Modular Kitchens',
    category: 'Kitchen',
    image: '/product-modular-kitchen.png',
    description: 'Complete modular kitchen solutions designed, built, and installed.',
  },
  {
    name: 'Office Workstations',
    category: 'Office',
    image: '/product-workstation.png',
    description: 'Space-efficient workstations and partitions for modern offices.',
  },
  {
    name: 'Wardrobes',
    category: 'Bedroom',
    image: '/product-wardrobe.png',
    description: 'Sliding and hinged wardrobes with smart internal storage.',
  },
  {
    name: 'Tables',
    category: 'Furniture',
    image: '/product-table.png',
    description: 'Dining, coffee, and work tables in a variety of finishes.',
  },
]

export const FEATURED: Product[] = [
  {
    name: 'Handleless Modular Kitchen',
    category: 'Best Seller',
    image: '/product-modular-kitchen.png',
    description: 'Sleek handleless design with soft-close hardware and quartz worktop.',
  },
  {
    name: 'Wall-Mounted TV Unit',
    category: 'New',
    image: '/product-tv-unit.png',
    description: 'Floating entertainment unit with concealed storage and cable management.',
  },
  {
    name: 'Glass Crockery Unit',
    category: 'Popular',
    image: '/product-crockery-unit.png',
    description: 'Display cabinet with toughened glass doors and adjustable shelving.',
  },
  {
    name: 'Sliding Door Wardrobe',
    category: 'Popular',
    image: '/product-wardrobe.png',
    description: 'Mirror-finish sliding wardrobe that maximises bedroom space.',
  },
]
