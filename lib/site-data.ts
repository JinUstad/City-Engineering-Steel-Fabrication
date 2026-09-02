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
  // Architectural (4)
  { id: 1, title: 'Architectural Project 01', category: 'Architectural', image: '/Architectural/1.jpg', description: 'Architectural metal fabrication' },
  { id: 2, title: 'Architectural Project 02', category: 'Architectural', image: '/Architectural/2.jpg', description: 'Architectural steel staircase' },
  { id: 3, title: 'Architectural Project 03', category: 'Architectural', image: '/Architectural/3.jpg', description: 'Modern steel railing work' },
  { id: 4, title: 'Architectural Project 04', category: 'Architectural', image: '/Architectural/4.jpg', description: 'Facade metal framing' },

  // CNC (5)
  { id: 5, title: 'CNC Laser Cutting 01', category: 'CNC', image: '/CNC/1.jpg', description: 'CNC fiber laser cutting' },
  { id: 6, title: 'CNC Laser Cutting 02', category: 'CNC', image: '/CNC/2jpg.jpg', description: 'High-precision metal perforation' },
  { id: 7, title: 'CNC Laser Cutting 03', category: 'CNC', image: '/CNC/3.webp', description: 'Hydraulic press brake bending' },
  { id: 8, title: 'CNC Laser Cutting 04', category: 'CNC', image: '/CNC/4jpg.jpg', description: 'Custom CNC sheet fabrication' },
  { id: 9, title: 'CNC Laser Cutting 05', category: 'CNC', image: '/CNC/5.jpg', description: 'Tailored metal component cutting' },

  // Heavy Equipment (5)
  { id: 10, title: 'Heavy Equipment 01', category: 'Heavy Equipment', image: '/Heavy Equipment/1.jpg', description: 'Heavy cylindrical storage tank' },
  { id: 11, title: 'Heavy Equipment 02', category: 'Heavy Equipment', image: '/Heavy Equipment/2.jpg', description: 'Industrial chemical silo' },
  { id: 12, title: 'Heavy Equipment 03', category: 'Heavy Equipment', image: '/Heavy Equipment/3.jpg', description: 'Heavy-gauge plate rolling' },
  { id: 13, title: 'Heavy Equipment 04', category: 'Heavy Equipment', image: '/Heavy Equipment/4.jpg', description: 'Pressure vessel welding' },
  { id: 14, title: 'Heavy Equipment 05', category: 'Heavy Equipment', image: '/Heavy Equipment/5.jpg', description: 'Industrial hopper fabrication' },

  // PEB Buildings (5)
  { id: 15, title: 'PEB Buildings 01', category: 'PEB Buildings', image: '/PEB Buildings/1.jpg', description: 'Pre-engineered warehouse shed' },
  { id: 16, title: 'PEB Buildings 02', category: 'PEB Buildings', image: '/PEB Buildings/2.jpg', description: 'Clear-span roof truss system' },
  { id: 17, title: 'PEB Buildings 03', category: 'PEB Buildings', image: '/PEB Buildings/3.jpg', description: 'Factory portal frame erection' },
  { id: 18, title: 'PEB Buildings 04', category: 'PEB Buildings', image: '/PEB Buildings/4.jpg', description: 'Industrial shed purlin framing' },
  { id: 19, title: 'PEB Buildings 05', category: 'PEB Buildings', image: '/PEB Buildings/5.jpg', description: 'Galvalume roof sheet installation' },

  // Security & Gates (5)
  { id: 20, title: 'Security & Gates 01', category: 'Security & Gates', image: '/Security & Gates/1.jpg', description: 'Heavy motorized sliding gate' },
  { id: 21, title: 'Security & Gates 02', category: 'Security & Gates', image: '/Security & Gates/2.webp', description: 'Laser cut security facade' },
  { id: 22, title: 'Security & Gates 03', category: 'Security & Gates', image: '/Security & Gates/3.jpg', description: 'Industrial boundary grill' },
  { id: 23, title: 'Security & Gates 04', category: 'Security & Gates', image: '/Security & Gates/4.webp', description: 'Designer architectural metal gate' },
  { id: 24, title: 'Security & Gates 05', category: 'Security & Gates', image: '/Security & Gates/5.webp', description: 'Perimeter security barrier' },

  // Structural Steel (5)
  { id: 25, title: 'Structural Steel 01', category: 'Structural Steel', image: '/Structural Steel/1.jpg', description: 'Heavy structural column box' },
  { id: 26, title: 'Structural Steel 02', category: 'Structural Steel', image: '/Structural Steel/2.jpg', description: 'Heavy I-beam column assembly' },
  { id: 27, title: 'Structural Steel 03', category: 'Structural Steel', image: '/Structural Steel/3.jpg', description: 'Heavy steel truss framing' },
  { id: 28, title: 'Structural Steel 04', category: 'Structural Steel', image: '/Structural Steel/4.jpg', description: 'Base plate & gusset welding' },
  { id: 29, title: 'Structural Steel 05', category: 'Structural Steel', image: '/Structural Steel/5.jpg', description: 'Heavy industrial girder fabrication' },
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
