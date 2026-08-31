export const COMPANY = {
  name: 'CESF Fabrication',
  fullName: 'City Engineering & Steel Fabrication',
  tagline: 'BUILD • SHAPE • STRONGER',
  subTagline: 'Heavy Structural Steel, PEB Sheds & Precision Metal Fabrication',
  founded: '2008',
  email: 'info@cesffabrication.com',
  phone: '+91 98112 34567',
  altPhone: '+91 98991 23456',
  addressLines: [
    'City Engineering & Steel Fabrication',
    'Plot No. 48, Industrial Area Phase-II',
    'New Delhi, Delhi 110020, India',
  ],
  addressShort: 'Phase-II Industrial Area, New Delhi',
}

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Services & Products', href: '#products' },
  { label: 'Featured Projects', href: '#featured' },
  { label: 'Our Capabilities', href: '#about' },
  { label: 'Contact Us', href: '#contact' },
]

export type Banner = {
  image: string
  eyebrow: string
  title: string
  description: string
  tag: string
}

export const BANNERS: Banner[] = [
  {
    image: '/banner-welding.webp',
    eyebrow: 'Heavy Structural Steel Fabrication',
    title: 'Engineered for Maximum Strength & Durability',
    description:
      'Certified MIG/TIG welding, structural I-beams, heavy columns, and industrial assemblies precision-fabricated in New Delhi.',
    tag: 'Certified ISO 9001:2015',
  },
  {
    image: '/banner-shed.webp',
    eyebrow: 'Pre-Engineered Buildings (PEB)',
    title: 'Industrial Sheds, Warehouses & Factory Framing',
    description:
      'Turnkey design, fabrication, and erection of high-span steel sheds, commercial roofs, and heavy mezzanine structures.',
    tag: 'Turnkey PEB Solutions',
  },
  {
    image: '/banner-laser.webp',
    eyebrow: 'CNC Fiber Laser & Sheet Metal',
    title: 'High-Precision Cutting, Bending & Custom Metalwork',
    description:
      'State-of-the-art CNC fiber laser cutting up to 25mm plate thickness with ultra-fine tolerances and fast turnaround.',
    tag: 'High-Tolerance CNC Precision',
  },
]

export type Product = {
  name: string
  category: string
  image: string
  description: string
  features: string[]
}

export const PRODUCTS: Product[] = [
  {
    name: 'Heavy Structural Steel Fabrication',
    category: 'Structural Steel',
    image: '/product-structural-steel.webp',
    description: 'Custom heavy columns, box girders, I-beam framing, and truss networks engineered to withstand high industrial loads.',
    features: ['High-tensile steel grades', 'Ultrasonic tested welds', 'Anti-corrosive primer coating'],
  },
  {
    name: 'Industrial Sheds & PEB Warehouses',
    category: 'PEB Buildings',
    image: '/banner-shed.webp',
    description: 'Complete pre-engineered metal building solutions for factories, logistic hubs, storage yards, and manufacturing units.',
    features: ['Clear-span design up to 60m', 'Fast on-site assembly', 'Weather & seismic resistant'],
  },
  {
    name: 'CNC Laser Cutting & Sheet Metal',
    category: 'Precision CNC',
    image: '/banner-laser.webp',
    description: 'Laser cutting, CNC hydraulic press brake bending, punching, and tailored sheet metal components for all engineering needs.',
    features: ['Up to 25mm mild/stainless steel', '±0.05mm high accuracy', 'Rapid prototyping to bulk'],
  },
  {
    name: 'Architectural Staircases & Railings',
    category: 'Architectural',
    image: '/product-steel-staircase.webp',
    description: 'Contemporary floating steel staircases, spiral fire exits, glass-fitted SS railings, and premium facade framing.',
    features: ['Custom luxury metal finishes', 'Engineered load bearing', 'Interior & exterior grade'],
  },
  {
    name: 'Industrial Silos & Pressure Vessels',
    category: 'Heavy Equipment',
    image: '/product-storage-tanks.webp',
    description: 'Heavy cylindrical storage tanks, chemical silos, pressure vessels, and hoppers fabricated with heavy-gauge plate.',
    features: ['Leak-proof X-ray grade welding', 'Custom volume & pressure rating', 'Food & chemical grade SS/MS'],
  },
  {
    name: 'Designer Gates, Grills & Facades',
    category: 'Security & Gates',
    image: '/product-gates-grills.webp',
    description: 'Heavy-duty motorized sliding gates, security grills, laser-cut decorative facades, and perimeter security barriers.',
    features: ['Laser cut custom patterns', 'Hot-dip galvanized & powder coated', 'Automated motor compatible'],
  },
]

export const FEATURED: Product[] = [
  {
    name: 'Heavy-Duty Industrial PEB Structure',
    category: 'Mega Project',
    image: '/banner-shed.webp',
    description: '50,000+ sq.ft industrial logistics warehouse engineered with high-strength portal frames and insulated roof panels.',
    features: ['50,000+ Sq. Ft.', 'Full Erection Done', 'Turnkey Handover'],
  },
  {
    name: 'High-Pressure Pipeline Spools & Skids',
    category: 'Specialized',
    image: '/product-pipe-fabrication.webp',
    description: 'Custom flanged piping manifolds, modular equipment skids, and heavy pipeline assemblies tested for severe conditions.',
    features: ['Hydro-tested 150 PSI', '100% NDT Inspected', 'Precision Flange Alignment'],
  },
  {
    name: 'Architectural Commercial Steel Staircase',
    category: 'Showcase',
    image: '/product-steel-staircase.webp',
    description: 'Central floating steel staircase with laser-cut stringers, solid treads, and structural glass railing system.',
    features: ['Grade 304/316 SS', 'Matte Gunmetal Finish', 'Custom Engineered Fit'],
  },
  {
    name: 'Heavy Industrial Silo Storage Battery',
    category: 'Heavy Fabrication',
    image: '/product-storage-tanks.webp',
    description: 'Multi-tank industrial bulk storage setup fabricated with polished stainless steel 304L for chemical processing.',
    features: ['High Capacity Silos', 'Corrosion Shield', 'Automated Discharge'],
  },
]

export const STATS = [
  { value: '18+', label: 'Years of Experience' },
  { value: '1,500+', label: 'Completed Projects' },
  { value: '25,000+', label: 'Tons Steel Fabricated' },
  { value: '99.8%', label: 'On-Time Delivery' },
]

export const CAPABILITIES = [
  {
    title: 'Heavy Structural Fabrication',
    desc: 'Heavy structural beams, portal frames, plate girders, and seismic-resistant steel framing.',
  },
  {
    title: 'Certified Welding Standards',
    desc: 'WPS/PQR qualified welders executing MIG, TIG, and SAW with radiographic inspection compliance.',
  },
  {
    title: 'CNC High-Speed Cutting',
    desc: '6kW Fiber Laser with automated nesting for optimal material utilization and mirror finish edges.',
  },
  {
    title: 'Surface Treatment & Coating',
    desc: 'In-house grit blasting (Sa 2.5), zinc epoxy priming, hot-dip galvanizing, and industrial PU painting.',
  },
]
