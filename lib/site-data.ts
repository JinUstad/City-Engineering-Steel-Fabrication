export const COMPANY = {
  name: 'CESF Fabrication',
  fullName: 'City Engineering & Steel Fabrication',
  tagline: 'BUILD • SHAPE • STRONGER',
  subTagline: 'Heavy Structural Steel, PEB Sheds & Precision Metal Fabrication',
  founded: '2008',
  email: 'cityengineering0008@gmail.com',
  phone: '+91 93184 00632',
  phoneClean: '919318400632',
  phone2: '+91 93500 45328',
  phone2Clean: '919350045328',
  gstNumber: '09ABUPW0754A1ZC',
  address: 'Khasra no 259,260 NH-9 Masuri Near By Bankey Bihari Dental College Ghaziabad (U.P)',
  addressLines: [
    'City Engineering & Steel Fabrication',
    'Khasra no 259,260 NH-9 Masuri',
    'Near By Bankey Bihari Dental College',
    'Ghaziabad (U.P), India',
  ],
  addressShort: 'NH-9 Masuri, Ghaziabad (U.P)',
  addressCity: 'Ghaziabad (U.P)',
}

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Services & Products', href: '/products' },
  { label: 'Work Gallery', href: '/gallery' },
  { label: 'Capabilities', href: '/about' },
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
      'Certified MIG/TIG welding, structural I-beams, heavy columns, and industrial assemblies precision-fabricated in Ghaziabad (U.P).',
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
  id: string
  name: string
  category: string
  folderName: string
  image: string
  images: string[]
  description: string
  features: string[]
  specs?: string[]
}

export const SERVICES: Product[] = [
  {
    id: 'interior-design',
    name: 'Interior Design Services',
    category: 'Interior Design',
    folderName: 'Interior Design',
    image: '/banner-office.webp',
    images: [
      '/banner-office.webp',
      '/product-tv-unit.webp',
      '/product-crockery-unit.webp',
      '/about-workshop.webp',
    ],
    description: 'Complete residential & commercial interior solutions, custom 3D space planning, architectural metal accents, and turnkey execution.',
    features: [
      'Custom 3D CAD Visualization & Floor Plans',
      'Turnkey Project Detailing & Execution',
      'Architectural Steel & Wood Fusion Elements',
      'Luxury Ambient Lighting & False Ceiling Integration',
    ],
    specs: ['Design: 3D Photorealistic Renders', 'Scope: Residential & Commercial', 'Execution: Complete Turnkey Solution'],
  },
  {
    id: 'modular-kitchen',
    name: 'Modular Kitchen',
    category: 'Modular Living',
    folderName: 'Modular Kitchen',
    image: '/product-modular-kitchen.webp',
    images: [
      '/product-modular-kitchen.webp',
      '/banner-kitchen.webp',
      '/product-acrylic-shutters.webp',
    ],
    description: 'Modern bespoke modular kitchens engineered with water-proof marine ply, acrylic finishes, soft-close hardware, and quartz island counters.',
    features: [
      'German Soft-close Hettich / Hafele Channels',
      '100% Water & Termite-Proof Marine Ply (IS:710)',
      'Anti-scratch High-Gloss Acrylic & PU Shutters',
      'Integrated Modular Pantry Units & Tandem Drawers',
    ],
    specs: ['Layouts: L-Shape / U-Shape / Island / Parallel', 'Shutters: High-Gloss Acrylic & PU Finish', 'Warranty: 10-Year Hardware Guarantee'],
  },
  {
    id: 'office-furniture',
    name: 'Office Furniture',
    category: 'Office Workspaces',
    folderName: 'Office Furniture',
    image: '/product-workstation.webp',
    images: [
      '/product-workstation.webp',
      '/product-table.webp',
      '/banner-office.webp',
    ],
    description: 'Ergonomic commercial workstations, executive conference tables, reception desks, and heavy-duty steel-framed modular office partitions.',
    features: [
      'Heavy-gauge Laser-Cut & Powder-Coated Steel Frames',
      'Concealed Wire Management & Cable Raceway Trays',
      'Modular 2, 4 & 6-Person Cluster Configurations',
      'High-Density Scratch-Resistant Melamine Table Tops',
    ],
    specs: ['Structure: Heavy Duty Mild Steel / SS', 'Table Tops: 25mm Action TESA Pre-lam', 'Modularity: Expandable Bay System'],
  },
  {
    id: 'bedroom-furniture',
    name: 'Bed Room Furniture',
    category: 'Bedroom Luxury',
    folderName: 'Bed Room Furniture',
    image: '/product-wardrobe.webp',
    images: [
      '/product-wardrobe.webp',
      '/product-sofa.webp',
      '/banner-sofa.webp',
      '/product-crockery-unit.webp',
    ],
    description: 'Custom-crafted designer beds with hydraulic storage, floor-to-ceiling sliding wardrobes, dressing units, and luxury bedside consoles.',
    features: [
      'Heavy-duty Smooth Hydraulic Bed Lift Mechanisms',
      'Floor-to-Ceiling Soft-Close Sliding Wardrobe Tracks',
      'Custom Fabric & Leatherette Cushioned Headboards',
      'Internal Drawer Organizers & Sensor Lighting Options',
    ],
    specs: ['Beds: King / Queen / Hydraulic Lift', 'Wardrobes: 2-Door / 3-Door Sliding & Walk-in', 'Finish: Acrylic / PU Polish / High-Gloss Laminate'],
  },
]

export const PRODUCTS: Product[] = [
  {
    id: 'structural-steel',
    name: 'Heavy Structural Steel Fabrication',
    category: 'Structural Steel',
    folderName: 'Structural Steel',
    image: '/Structural Steel/1.jpg',
    images: [
      '/Structural Steel/1.jpg',
      '/Structural Steel/2.jpg',
      '/Structural Steel/3.jpg',
      '/Structural Steel/4.jpg',
      '/Structural Steel/5.jpg',
    ],
    description: 'Custom heavy columns, box girders, I-beam framing, and truss networks engineered to withstand high industrial loads.',
    features: ['High-tensile steel grades (IS 2062 / ASTM A36)', 'Ultrasonic tested welds (UT / RT)', 'Anti-corrosive zinc primer coating'],
    specs: ['Max Crane Capacity: 50 Tons', 'Welding: AWS D1.1 Certified', 'Finishes: Sa 2.5 Shot Blasted'],
  },
  {
    id: 'peb-buildings',
    name: 'Industrial Sheds & PEB Warehouses',
    category: 'PEB Buildings',
    folderName: 'PEB Buildings',
    image: '/PEB Buildings/1.jpg',
    images: [
      '/PEB Buildings/1.jpg',
      '/PEB Buildings/2.jpg',
      '/PEB Buildings/3.jpg',
      '/PEB Buildings/4.jpg',
      '/PEB Buildings/5.jpg',
    ],
    description: 'Complete pre-engineered metal building solutions for factories, logistic hubs, storage yards, and manufacturing units.',
    features: ['Clear-span design up to 60m', 'Fast on-site assembly & erection', 'Weather & seismic resistant structural framing'],
    specs: ['Span: 15m to 60m Clear', 'Purlins: Z & C Galvanized', 'Sheeting: Color Coated Galvalume'],
  },
  {
    id: 'cnc-laser',
    name: 'CNC Laser Cutting & Sheet Metal',
    category: 'Precision CNC',
    folderName: 'CNC',
    image: '/CNC/1.jpg',
    images: [
      '/CNC/1.jpg',
      '/CNC/2jpg.jpg',
      '/CNC/3.webp',
      '/CNC/4jpg.jpg',
      '/CNC/5.jpg',
    ],
    description: 'Laser cutting, CNC hydraulic press brake bending, punching, and tailored sheet metal components for all engineering needs.',
    features: ['Up to 25mm mild/stainless steel cutting', '±0.05mm high accuracy repeatable tolerance', 'Rapid CAD prototyping to bulk industrial lots'],
    specs: ['Bed Size: 2m x 6m', 'Laser Power: 6kW Fiber Laser', 'Bending: 250-Ton CNC Press Brake'],
  },
  {
    id: 'architectural',
    name: 'Architectural Staircases & Railings',
    category: 'Architectural',
    folderName: 'Architectural',
    image: '/Architectural/1.jpg',
    images: [
      '/Architectural/1.jpg',
      '/Architectural/2.jpg',
      '/Architectural/3.jpg',
      '/Architectural/4.jpg',
    ],
    description: 'Contemporary floating steel staircases, spiral fire exits, glass-fitted SS railings, and premium facade framing.',
    features: ['Custom luxury metal finishes & powder coat', 'Engineered load bearing structural calculations', 'Interior & exterior grade Grade 304/316 SS'],
    specs: ['Stringers: CNC Profile Cut', 'Treads: Solid Steel / Timber / Glass', 'Railing: Toughened Glass & SS'],
  },
  {
    id: 'heavy-equipment',
    name: 'Industrial Silos & Pressure Vessels',
    category: 'Heavy Equipment',
    folderName: 'Heavy Equipment',
    image: '/Heavy Equipment/1.jpg',
    images: [
      '/Heavy Equipment/1.jpg',
      '/Heavy Equipment/2.jpg',
      '/Heavy Equipment/3.jpg',
      '/Heavy Equipment/4.jpg',
      '/Heavy Equipment/5.jpg',
    ],
    description: 'Heavy cylindrical storage tanks, chemical silos, pressure vessels, and hoppers fabricated with heavy-gauge plate.',
    features: ['Leak-proof X-ray grade radiographic welding', 'Custom volume & pressure rating to ASME codes', 'Food & chemical grade SS 304/316 & MS'],
    specs: ['Capacity: Up to 100,000 Litres', 'Testing: 100% Hydrostatic & DPT', 'Thickness: Up to 30mm Plate'],
  },
  {
    id: 'security-gates',
    name: 'Designer Gates, Grills & Facades',
    category: 'Security & Gates',
    folderName: 'Security & Gates',
    image: '/Security & Gates/1.jpg',
    images: [
      '/Security & Gates/1.jpg',
      '/Security & Gates/2.webp',
      '/Security & Gates/3.jpg',
      '/Security & Gates/4.webp',
      '/Security & Gates/5.webp',
    ],
    description: 'Heavy-duty motorized sliding gates, security grills, laser-cut decorative facades, and perimeter security barriers.',
    features: ['Laser cut custom CNC architectural motifs', 'Hot-dip galvanized & heavy industrial PU painted', 'Automated Italian motor drive compatible'],
    specs: ['Automation: Italian Motor Ready', 'Coating: 10-Yr Weather Coat', 'Custom Pattern CAD Cutting'],
  },
]

export const ARCHITECTURAL_FABRICATION: Product[] = [
  {
    id: 'upvc-windows',
    name: 'UPVC & Window Aluminium',
    category: 'Windows & Glazing',
    folderName: 'UPVC & Windows',
    image: '/product-upvc-windows.webp',
    images: ['/product-upvc-windows.webp', '/gallery-canopy-facade.webp', '/banner-office.webp'],
    description: 'High-performance UPVC & slim aluminium sliding windows, soundproof double glazing, and weather-resistant architectural profiles.',
    features: [
      'Multi-point Locking Security Hardware',
      'Thermal & Acoustic Sound Insulation',
      'Powder Coated Anodized Aluminium Finish',
      'Smooth Heavy-duty Roller Sliding Channels',
    ],
    specs: ['Glass: 5mm - 12mm Toughened / DGU', 'Profiles: Premium UPVC & Aluminium 6063-T6', 'Finish: Anodized / Powder Coated'],
  },
  {
    id: 'ceiling-work',
    name: 'Ceiling Work',
    category: 'Interior Fitouts',
    folderName: 'Ceiling Work',
    image: '/product-ceiling-work.webp',
    images: ['/product-ceiling-work.webp', '/banner-office.webp', '/product-modular-kitchen.webp'],
    description: 'Designer false ceiling work, gypsum board installations, concealed LED cove lighting profiles, and commercial acoustic grid ceilings.',
    features: [
      'Saint-Gobain Gyproc / USG Boral Boards',
      'Seamless Concealed Ambient LED Profiles',
      'Acoustic Moisture-Resistant Grid Systems',
      'Precision Laser Level Alignment & Framing',
    ],
    specs: ['Material: Gypsum / Metal T-Grid / PVC', 'Thickness: 12.5mm Plasterboard', 'Fire Rating: Class 1 Fire Resistant'],
  },
  {
    id: 'ms-shutter-motors',
    name: 'M.S Shutter Auto Motors',
    category: 'Industrial Automation',
    folderName: 'MS Shutters',
    image: '/product-ms-shutter.webp',
    images: ['/product-ms-shutter.webp', '/product-gates-grills.webp', '/banner-welding.webp'],
    description: 'Heavy-duty motorized mild steel rolling shutters with automated electric motors, remote access controls, and manual override safety.',
    features: [
      'High-Torque Italian / Indian Shutter Motors',
      'Wireless Remote & Wall Switch Operation',
      'Heavy-gauge Interlocking MS Slats',
      'Manual Chain Gear Pull For Power Cuts',
    ],
    specs: ['Motor: 300kg - 1500kg Load Capacity', 'Slats: 0.9mm to 1.2mm MS Strip', 'Operation: Remote & Manual Chain'],
  },
  {
    id: 'column-box',
    name: 'Column Box',
    category: 'Construction Formwork',
    folderName: 'Column Box',
    image: '/product-column-box.webp',
    images: ['/product-column-box.webp', '/Structural Steel/1.jpg', '/Structural Steel/2.jpg', '/Structural Steel/3.jpg'],
    description: 'Heavy MS steel column box shuttering plates, concrete formwork panels, adjustable corner angles, and high-strength casting molds.',
    features: [
      'Heavy MS Sheet with Structural Angle Framing',
      'Precision Drilled Alignment Pin Holes',
      'High Reusability & Zero Slurry Leakage Design',
      'Rust-proof Primer & Industrial Blue Coat',
    ],
    specs: ['Plate: 2.5mm - 4.0mm MS Sheet', 'Angle Frame: 35x35x5mm to 50x50x6mm', 'Sizes: Custom Square & Rectangular Columns'],
  },
  {
    id: 'ms-grating',
    name: 'M.S Grating Fabrication',
    category: 'Industrial Flooring',
    folderName: 'MS Grating',
    image: '/product-ms-grating.webp',
    images: ['/product-ms-grating.webp', '/gallery-mezzanine-floor.webp', '/product-structural-steel.webp'],
    description: 'Heavy-duty welded mild steel floor gratings, drain trench covers, catwalk platforms, staircase treads, and hot-dip galvanized panels.',
    features: [
      'High Load Bearing Serrated / Plain Bearing Bars',
      'Hot-Dip Galvanized to IS 4759 Standards',
      'Slip-Resistant Industrial Surface Pattern',
      'Custom Trench & Platform Span Fabrication',
    ],
    specs: ['Bearing Bar: 25x3mm to 50x5mm', 'Cross Bar: 6mm / 8mm Twisted Square', 'Finishing: Hot-Dip Galvanized / Self-Color'],
  },
]

export const FEATURED: Product[] = PRODUCTS.slice(0, 4)

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
