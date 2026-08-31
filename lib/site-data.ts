export const COMPANY = {
  name: 'CESF Fabrication',
  fullName: 'City Engineering & Steel Fabrication',
  tagline: 'BUILD • SHAPE • STRONGER',
  subTagline: 'Heavy Structural Steel, PEB Sheds & Precision Metal Fabrication',
  founded: '2008',
  email: 'cityengineering0008@gmail.com',
  phone: '+91 93184 00632',
  phoneClean: '919318400632',
  addressLines: [
    'City Engineering & Steel Fabrication',
    'Plot No. 48, Industrial Area Phase-II',
    'New Delhi, Delhi 110020, India',
  ],
  addressShort: 'Phase-II Industrial Area, New Delhi',
}

export const NAV_LINKS = [
  { label: 'Home', href: '/#home' },
  { label: 'Services & Products', href: '/#products' },
  { label: 'Work Gallery', href: '/#gallery' },
  { label: 'Capabilities', href: '/#about' },
  { label: 'Contact Us', href: '/contact' },
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

export type GalleryItem = {
  id: number
  title: string
  category: string
  image: string
  description: string
  location?: string
  scope?: string
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    title: 'Certified Heavy Structural I-Beam Welding',
    category: 'Heavy Structural',
    image: '/banner-welding.webp',
    description: 'High-amperage MIG fillet welding on 40mm thick structural steel beams with 100% NDT radiography test approval.',
    location: 'CESF Workshop, New Delhi',
    scope: '450 MT Structural Steelwork',
  },
  {
    id: 2,
    title: 'High-Span Pre-Engineered Logistics Warehouse',
    category: 'PEB Sheds',
    image: '/banner-shed.webp',
    description: '45,000 sq.ft clear-span PEB industrial warehouse with custom built-up portal columns, purlins, and color-coated roofing.',
    location: 'Greater Noida Industrial Hub',
    scope: 'Design, Fabrication & Erection',
  },
  {
    id: 3,
    title: '6kW CNC Fiber Laser Precision Cutting Bay',
    category: 'CNC Precision',
    image: '/banner-laser.webp',
    description: 'High-speed automated laser cutting for 20mm thick MS & SS machinery plates with micro-burr finish and tight tolerances.',
    location: 'CNC Laser Division, Phase-II',
    scope: '±0.05mm Precision Batch Run',
  },
  {
    id: 4,
    title: 'Heavy Crane Runway Girders & Bridge Spans',
    category: 'Heavy Structural',
    image: '/gallery-bridge-girder.webp',
    description: 'Fabrication of 20-Ton overhead crane runway plate girders with reinforced stiffeners and heavy load mounting brackets.',
    location: 'Heavy Bay, New Delhi',
    scope: 'Heavy Plate Girder Assembly',
  },
  {
    id: 5,
    title: 'Industrial Heavy Duty Mezzanine Platform',
    category: 'PEB Sheds',
    image: '/gallery-mezzanine-floor.webp',
    description: 'Multi-tier structural steel mezzanine flooring with chequered plate decking, safety yellow guardrails, and heavy access stairs.',
    location: 'Logistics Facility, Delhi NCR',
    scope: '12,000 Sq.Ft Load Platform',
  },
  {
    id: 6,
    title: 'Architectural Geometric Canopy & Metal Facade',
    category: 'Architectural',
    image: '/gallery-canopy-facade.webp',
    description: 'Architectural laser-cut structural steel canopy overhang and custom perforated facade for modern commercial exterior.',
    location: 'Aerocity Commercial Complex',
    scope: 'Architectural Framing & Facade',
  },
  {
    id: 7,
    title: 'Stainless Steel Chemical Storage Silos & Tanks',
    category: 'Heavy Tanks',
    image: '/product-storage-tanks.webp',
    description: 'Heavy gauge SS 304L vertical storage silos with welded skirt support, conical bottom discharge, and pressure relief nozzles.',
    location: 'Chemical Plant Yard',
    scope: '8 x 50,000L Storage Tanks',
  },
  {
    id: 8,
    title: 'Commercial Floating Steel Spine Staircase',
    category: 'Architectural',
    image: '/product-steel-staircase.webp',
    description: 'Multi-story central architectural floating steel staircase with CNC cut stringers and toughened glass clamp railings.',
    location: 'Corporate HQ, Gurugram',
    scope: 'Luxury Architectural Fitout',
  },
  {
    id: 9,
    title: 'High-Pressure Process Pipeline Spools & Headers',
    category: 'Piping & Skids',
    image: '/product-pipe-fabrication.webp',
    description: 'Flanged carbon steel and stainless steel pipe spools welded under ASME Section IX with 150 PSI hydro-testing.',
    location: 'CESF Fabrication Bay A2',
    scope: 'Class 300 Pipeline Assemblies',
  },
  {
    id: 10,
    title: 'Heavy Structural Column & I-Beam Staging Yard',
    category: 'Heavy Structural',
    image: '/product-structural-steel.webp',
    description: 'Factory staging yard with zinc chromate primed heavy structural columns ready for site delivery and crane erection.',
    location: 'Assembly Staging Yard',
    scope: 'Over 800 Metric Tons Stock',
  },
  {
    id: 11,
    title: 'Designer Motorized Laser-Cut Security Gates',
    category: 'Architectural',
    image: '/product-gates-grills.webp',
    description: 'Heavy duty architectural entrance gate featuring precision laser cut geometric motifs with weather-proof PU coating.',
    location: 'Premium Estate, South Delhi',
    scope: 'Custom Automated Gate System',
  },
  {
    id: 12,
    title: '25,000 Sq.Ft Modern Heavy Fabrication Plant',
    category: 'Capabilities',
    image: '/about-factory.webp',
    description: 'Our certified New Delhi manufacturing facility equipped with dual 50-Ton overhead cranes and dedicated welding bays.',
    location: 'New Delhi Works',
    scope: 'Manufacturing Infrastructure',
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
