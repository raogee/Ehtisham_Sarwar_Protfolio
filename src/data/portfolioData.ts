import { Project } from '../types';

export const PROJECTS_DATA: Project[] = [
  {
    id: 'luxehaven-realestate',
    title: 'LuxeHaven Real Estate & Villa Portal',
    subtitle: 'Luxury Property Listings & Virtual Tour Booking Engine',
    category: 'Property Websites',
    description: 'A high-end real estate web portal featuring 3D virtual tour integrations, interactive property map, mortgage calculator, and automated lead capture.',
    fullDescription: 'LuxeHaven is a bespoke property management and sales portal built for luxury real estate agencies in Dubai & California. Designed for high conversion, it features filterable property search by neighborhood, automated schedule-a-viewing calendar, and mortgage estimator.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    mockupBg: 'from-amber-950/80 via-zinc-900 to-black',
    client: 'LuxeHaven Realty Group',
    location: 'Dubai, UAE',
    year: '2025',
    metrics: [
      { label: 'Inquiry Conversion', value: '+180%' },
      { label: 'Page Load Speed', value: '0.6s' },
      { label: 'Monthly Visitors', value: '85K+' }
    ],
    techStack: ['React', 'Next.js', 'Tailwind CSS', 'Mapbox GL', 'Node.js', 'Firebase'],
    features: [
      'Interactive 3D Floorplan & Virtual Tour Preview',
      'Dynamic Map Radius Search with School & Transit Filters',
      'Instant Mortgage & Monthly Payment Calculator',
      'Agent WhatsApp & Direct Appointment Booking',
      'Multi-currency & Language Switcher (USD, EUR, AED)'
    ],
    liveUrl: 'https://luxehaven-realestate.demo.com',
    githubUrl: 'https://github.com/ehtishamsarwar/luxehaven-portal',
    challenge: 'The client had an outdated WordPress theme that loaded slowly (>5 seconds) and lost high-net-worth buyers who expected instant luxury visual experiences.',
    solution: 'Rebuilt from scratch with React & Next.js server-side rendering, sub-second imagery optimization, Mapbox custom styling, and interactive lead magnets.',
    testimonial: {
      quote: 'Ehtisham delivered an absolute masterclass in web development! Our luxury villa inquiries tripled within 30 days of launching LuxeHaven.',
      author: 'Alexander Sterling',
      role: 'Managing Director',
      company: 'LuxeHaven Group',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80'
    },
    mockupData: {
      headline: 'Find Your Sanctuary of Luxury Living',
      subtext: 'Explore premium waterfront villas, penthouses, and private estates.',
      primaryColor: '#D97706',
      accentColor: '#10B981',
      sections: [
        { title: 'Featured Waterfront Estates', content: '6 Bed | 7 Bath | 8,500 Sq Ft - Palm Jumeirah Waterfront' },
        { title: 'Interactive Mortgage Tool', content: 'Estimate payments with instant interest rates & down payment sliders.' },
        { title: 'Schedule Private VIP Viewing', content: 'Book in-person or live 4K drone video tours with top brokers.' }
      ]
    }
  },
  {
    id: 'auracraft-ecommerce',
    title: 'AuraCraft Luxury Fashion & Accessories',
    subtitle: 'High-Converting E-Commerce Storefront with 3D Product Views',
    category: 'E-Commerce',
    description: 'An ultra-fast e-commerce platform built for a luxury handcrafted jewelry brand with 360-degree interactive product preview and 1-click checkout.',
    fullDescription: 'AuraCraft delivers a fluid shopping experience. Features real-time stock sync, multi-tier discount engine, custom ring size recommender, and instant search with filter tags.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
    mockupBg: 'from-rose-950/80 via-zinc-900 to-black',
    client: 'AuraCraft Couture',
    location: 'London, UK',
    year: '2025',
    metrics: [
      { label: 'Cart Checkout Rate', value: '+310%' },
      { label: 'Mobile Sales Share', value: '74%' },
      { label: 'Average Order Value', value: '$340' }
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Stripe API', 'Express', 'MongoDB'],
    features: [
      '360-Degree Interactive 3D Jewelry Viewer',
      'Instant Slide-Over Cart with Upsell Recommendations',
      'Stripe & Apple Pay 1-Click Checkout',
      'Custom Ring & Necklace Sizing Guide Quiz',
      'Real-Time Order Tracking & SMS Notification Gateway'
    ],
    liveUrl: 'https://auracraft-store.demo.com',
    githubUrl: 'https://github.com/ehtishamsarwar/auracraft-ecommerce',
    challenge: 'High cart abandonment on mobile due to clunky WooCommerce checkout and sluggish image gallery renders.',
    solution: 'Migrated to custom React frontend with Stripe Elements, optimized WebP imagery, and micro-animations that make shopping delightful.',
    testimonial: {
      quote: 'Ehtisham is a wizard when it comes to e-commerce UX! Our revenue jumped by 240% in the first quarter post launch.',
      author: 'Sophia Chen',
      role: 'Founder & Creative Lead',
      company: 'AuraCraft UK',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80'
    },
    mockupData: {
      headline: 'Timeless Elegance, Handcrafted Perfection',
      subtext: 'Discover ethically sourced diamond rings and 18k gold collections.',
      primaryColor: '#F43F5E',
      accentColor: '#3B82F6',
      sections: [
        { title: 'New Royal Solitaire Series', content: 'Hand-polished ethically mined emerald cut diamonds.' },
        { title: 'Interactive Ring Sizer', content: 'Find your perfect fit in under 30 seconds using your phone camera.' },
        { title: 'Express Global Delivery', content: 'Free insured overnight shipping worldwide on orders above $200.' }
      ]
    }
  },
  {
    id: 'apex-logistics-services',
    title: 'Apex Global Logistics & Freight Services',
    subtitle: 'Corporate Logistics Portal & Shipping Quote Calculator',
    category: 'Services Websites',
    description: 'Enterprise logistics website featuring live shipment tracking, instant freight rate calculator, and interactive fleet management dashboard.',
    fullDescription: 'Apex Logistics needed a modern website to showcase their air, sea, and land freight services across 40 countries. Integrated with a custom instant cost calculator and live container tracking API.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    mockupBg: 'from-blue-950/80 via-zinc-900 to-black',
    client: 'Apex Freight Systems',
    location: 'Chicago, USA',
    year: '2024',
    metrics: [
      { label: 'Quote Requests', value: '+195%' },
      { label: 'Client Retention', value: '98.5%' },
      { label: 'Tracking Speed', value: '<100ms' }
    ],
    techStack: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'REST API', 'PostgreSQL'],
    features: [
      'Instant Air/Sea Freight Quote Estimator Tool',
      'Real-Time Container Tracking Search Bar',
      'Service Coverage World Map with Interactive Nodes',
      'B2B Client Portal for Invoice & Waybill Downloads',
      'Automated Customs Clearance Checklist & Form Download'
    ],
    liveUrl: 'https://apex-logistics.demo.com',
    githubUrl: 'https://github.com/ehtishamsarwar/apex-logistics-app',
    challenge: 'Clients were swamping customer support calls for basic price quotes and shipment updates.',
    solution: 'Designed an intuitive self-service portal where clients get instant pricing and live GPS tracking in seconds.',
    testimonial: {
      quote: 'Our support call volume dropped 40% because customers now easily track and estimate quotes directly on our new website.',
      author: 'Marcus Vance',
      role: 'VP of Operations',
      company: 'Apex Freight Systems',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80'
    },
    mockupData: {
      headline: 'Global Freight & Supply Chain Simplified',
      subtext: 'Seamless sea, air, and highway freight solutions tailored for enterprise growth.',
      primaryColor: '#2563EB',
      accentColor: '#10B981',
      sections: [
        { title: 'Track Any Shipment Live', content: 'Enter your 10-digit Container Bill of Lading to get live location.' },
        { title: 'Instant Freight Calculator', content: 'Select origin, destination, weight, and volume for a 30-sec quote.' },
        { title: '40+ Global Hubs', content: 'Connected ports across North America, Europe, Asia, and Middle East.' }
      ]
    }
  },
  {
    id: 'novasaas-ai-app',
    title: 'NovaSaaS - AI Copywriting & Growth Platform',
    subtitle: 'SaaS Landing Page & Interactive Dashboard UI',
    category: 'SaaS & Web Apps',
    description: 'A modern SaaS application landing page with dark/light mode, live interactive AI prompt playground, subscription pricing tiers, and analytics dashboard preview.',
    fullDescription: 'NovaSaaS empowers marketers and creators with AI-generated ad copy and articles. Built with hyper-sleek dark mode UI, glowing gradients, pricing toggle (Monthly/Annual), and interactive playground.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    mockupBg: 'from-violet-950/80 via-zinc-900 to-black',
    client: 'NovaAI Labs',
    location: 'San Francisco, USA',
    year: '2025',
    metrics: [
      { label: 'Free Trial Signup Rate', value: '14.2%' },
      { label: 'Lighthouse Score', value: '100/100' },
      { label: 'User Rating', value: '4.9/5' }
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Gemini API', 'Motion', 'Express'],
    features: [
      'Interactive Prompt-to-Copy Live Generator Demo',
      'Dynamic Pricing Calculator with Monthly/Annual 20% Discount Toggle',
      'Interactive Feature Tabs with Video & Animated Mockups',
      'Custom Token Usage & Analytics Preview Dashboard',
      'Testimonial Wall with Filterable Categories'
    ],
    liveUrl: 'https://novasaas-ai.demo.com',
    githubUrl: 'https://github.com/ehtishamsarwar/novasaas-app',
    challenge: 'Standing out in a congested AI market required an exceptionally sleek, fast, and trustworthy visual interface.',
    solution: 'Crafted a high-contrast dark aesthetic with silky smooth motion animations, social proof counters, and instant playground trial.',
    testimonial: {
      quote: 'Ehtisham created the most visually striking SaaS landing page we have ever seen. Converts like crazy!',
      author: 'David K. Miller',
      role: 'Co-Founder & CEO',
      company: 'NovaAI Labs',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
    },
    mockupData: {
      headline: 'Supercharge Your Ad Copy with 10x AI Speed',
      subtext: 'Generate high-converting headlines, emails, and social posts in 5 seconds.',
      primaryColor: '#8B5CF6',
      accentColor: '#EC4899',
      sections: [
        { title: 'Interactive Copy Playground', content: 'Type topic -> Select tone (Persuasive, Witty, Professional) -> Generate!' },
        { title: '120+ High Converting Templates', content: 'Pre-tested copy blueprints for Facebook Ads, Google Ads & Emails.' },
        { title: 'Team Workspace & API Integration', content: 'Collaborate with your marketing team and export directly to HubSpot.' }
      ]
    }
  },
  {
    id: 'primestay-hotel-property',
    title: 'PrimeStay Luxury Hotel & Golf Resort',
    subtitle: 'Resort Showcase & Room Reservation Booking Portal',
    category: 'Property Websites',
    description: 'An immersive hotel and resort website featuring room customizers, interactive amenities map, dining reservation system, and virtual concierge.',
    fullDescription: 'PrimeStay is a 5-star resort website designed to capture direct bookings without paying hefty OTA commission fees. Features date picker room availability, spa package builder, and guest reviews.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    mockupBg: 'from-emerald-950/80 via-zinc-900 to-black',
    client: 'PrimeStay Hospitality Group',
    location: 'Bali, Indonesia',
    year: '2025',
    metrics: [
      { label: 'Direct Bookings', value: '+220%' },
      { label: 'OTA Commission Saved', value: '$45K/yr' },
      { label: 'Avg Session Time', value: '4m 12s' }
    ],
    techStack: ['React', 'Next.js', 'Tailwind CSS', 'Stripe', 'Node.js'],
    features: [
      'Interactive Room & Villa Comparison Table with 360 Gallery',
      'Real-Time Room Availability Calendar & Direct Booking Engine',
      'Spa, Dining & Helicopter Tour Add-On Selector',
      'Interactive Resort Amenities Map with Zoom Nodes',
      'Guest Loyalty Points & Promo Code Redemption Engine'
    ],
    liveUrl: 'https://primestay-resort.demo.com',
    githubUrl: 'https://github.com/ehtishamsarwar/primestay-resort-web',
    challenge: 'High reliance on Booking.com losing 18% in commissions and generic template aesthetic.',
    solution: 'Built a bespoke visual experience that makes guests fall in love with the resort atmosphere instantly on mobile or desktop.',
    testimonial: {
      quote: 'Our direct booking revenue jumped by 220%! Ehtisham understood our brand aesthetic down to the finest pixel.',
      author: 'Aria Wuryanto',
      role: 'General Manager',
      company: 'PrimeStay Resort',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
    },
    mockupData: {
      headline: 'Escape to Tropical Luxury & Unrivaled Serenity',
      subtext: 'Private oceanfront villas, infinity pools, and world-class spa retreats.',
      primaryColor: '#10B981',
      accentColor: '#F59E0B',
      sections: [
        { title: 'Ocean Royal Pool Villa', content: 'Private infinity pool, butler service, and sunset balcony access.' },
        { title: 'Holistic Wellness Spa', content: 'Traditional Balinese massages, yoga pavilions, and hydrotherapy.' },
        { title: 'Direct Booking Guarantee', content: 'Free breakfast, $50 spa voucher, and late checkout when booking direct.' }
      ]
    }
  },
  {
    id: 'healthpulse-services',
    title: 'HealthPulse Medical Clinic & Telehealth',
    subtitle: 'Patient Portal & Online Doctor Booking Platform',
    category: 'Services Websites',
    description: 'A clean, accessible medical clinic website with online doctor appointment booking, patient portal, live video consultation UI, and health blog.',
    fullDescription: 'HealthPulse connects patients with top medical specialists. Features HIPAA-compliant booking workflow, symptom checker widget, doctor specialty directory, and instant appointment reminders.',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80',
    mockupBg: 'from-cyan-950/80 via-zinc-900 to-black',
    client: 'HealthPulse Care Network',
    location: 'Toronto, Canada',
    year: '2024',
    metrics: [
      { label: 'Online Bookings', value: '78%' },
      { label: 'No-Show Rate Drop', value: '-35%' },
      { label: 'Accessibility Score', value: '100%' }
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
    features: [
      '3-Step Online Doctor Appointment Scheduler',
      'Filterable Doctor Directory by Specialty, Insurance & Rating',
      'Interactive AI Symptom Checker & Triage Quiz',
      'Patient Document Upload & Prescription Renewal Request',
      'Fully WCAG 2.1 AA Accessible Typography & Contrast'
    ],
    liveUrl: 'https://healthpulse-care.demo.com',
    githubUrl: 'https://github.com/ehtishamsarwar/healthpulse-portal',
    challenge: 'Old phone-based appointment system resulted in long hold times, frustrated patients, and missed appointments.',
    solution: 'Designed an intuitive mobile-friendly booking system where patients select specialty, doctor, time slot, and confirm in under 60 seconds.',
    testimonial: {
      quote: 'Ehtisham built us a secure, patient-friendly portal that transformed our clinic efficiency. Patients love the ease of booking!',
      author: 'Dr. Sarah Jenkins',
      role: 'Medical Director',
      company: 'HealthPulse Network',
      avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=200&q=80'
    },
    mockupData: {
      headline: 'Compassionate Healthcare at Your Fingertips',
      subtext: 'In-person visits and instant 24/7 video consultations with certified doctors.',
      primaryColor: '#06B6D4',
      accentColor: '#3B82F6',
      sections: [
        { title: 'Find a Specialist Near You', content: 'Cardiology, Dermatology, Pediatrics, Orthopedics, Mental Health.' },
        { title: 'Instant Telehealth Consult', content: 'Connect with a physician in under 15 minutes from your home.' },
        { title: 'Accepted Insurance Providers', content: 'Direct billing with Sun Life, Manulife, Great-West & Blue Cross.' }
      ]
    }
  },
  {
    id: 'electrovault-ecommerce',
    title: 'ElectroVault Next-Gen Tech Store',
    subtitle: 'Electronics E-Commerce Storefront & Custom PC Builder',
    category: 'E-Commerce',
    description: 'A high-speed electronics e-commerce store with custom PC compatibility builder, technical specifications compare tool, and flash sale countdowns.',
    fullDescription: 'ElectroVault sells premium laptops, gaming rigs, and audio gear. Includes a custom PC builder that auto-checks component power & socket compatibility, live inventory status, and user reviews.',
    image: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&w=1200&q=80',
    mockupBg: 'from-indigo-950/80 via-zinc-900 to-black',
    client: 'ElectroVault Digital Inc',
    location: 'Berlin, Germany',
    year: '2025',
    metrics: [
      { label: 'PC Builder Orders', value: '+280%' },
      { label: 'Avg Session Duration', value: '5m 45s' },
      { label: 'Return Rate Drop', value: '-18%' }
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Redux Toolkit', 'Express', 'MongoDB'],
    features: [
      'Interactive Custom Rig/PC Compatibility Builder Engine',
      'Side-by-Side Specs Comparison Tool for Laptops & Monitors',
      'Live Flash Deal Countdown Timer with Progress Bar',
      'Filterable Product Grid by Brands, Specs, Price & Rating',
      'Multi-currency support (EUR, USD, GBP, CHF)'
    ],
    liveUrl: 'https://electrovault-tech.demo.com',
    githubUrl: 'https://github.com/ehtishamsarwar/electrovault-store',
    challenge: 'Customers were buying incompatible PC parts and returning them, causing high logistics costs.',
    solution: 'Engineered an intelligent PC builder wizard that validates motherboard socket, RAM generation, and power supply wattage automatically.',
    testimonial: {
      quote: 'Ehtisham’s custom compatibility builder changed our business model overnight! Our average order value doubled.',
      author: 'Lars Weber',
      role: 'Head of E-Commerce',
      company: 'ElectroVault GmbH',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80'
    },
    mockupData: {
      headline: 'Next-Level Tech, Gaming & Custom Rigs',
      subtext: 'Unleash peak performance with hand-tested components & expert support.',
      primaryColor: '#6366F1',
      accentColor: '#10B981',
      sections: [
        { title: 'Pro Custom PC Configurator', content: 'Pick CPU, GPU, RAM & Liquid Cooling with auto compatibility check.' },
        { title: '4K OLED Gaming Monitors', content: '240Hz refresh rates, 0.03ms response time, HDR10+ certified.' },
        { title: '2-Year Hardware Warranty', content: 'Includes free technical support and hassle-free replacements.' }
      ]
    }
  },
  {
    id: 'urbanbuild-services',
    title: 'UrbanBuild Architecture & Construction',
    subtitle: 'Commercial & Residential Construction Showcase',
    category: 'Services Websites',
    description: 'A striking portfolio website for a premier architectural firm showcasing 3D blue-print renders, project stage timelines, and request-for-proposal wizard.',
    fullDescription: 'UrbanBuild creates iconic architectural landmarks. This website highlights their commercial and residential portfolio with high-res image galleries, before/after sliders, and cost estimator.',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=1200&q=80',
    mockupBg: 'from-orange-950/80 via-zinc-900 to-black',
    client: 'UrbanBuild Group',
    location: 'Melbourne, Australia',
    year: '2024',
    metrics: [
      { label: 'RFP Leads', value: '+165%' },
      { label: 'Project Value Inquiries', value: '$12M+' },
      { label: 'Mobile Score', value: '98/100' }
    ],
    techStack: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Node.js'],
    features: [
      'Interactive Before & After Renovation Image Slider',
      'Filterable Architectural Portfolio (Commercial, Residential, Industrial)',
      'Building Project Estimation Calculator Wizard',
      'Interactive Project Blueprint & Render Gallery',
      'Downloadable Corporate Brochure & Accreditation PDF Generator'
    ],
    liveUrl: 'https://urbanbuild-arch.demo.com',
    githubUrl: 'https://github.com/ehtishamsarwar/urbanbuild-website',
    challenge: 'Needed a premium modern aesthetic to compete for multi-million dollar commercial construction contracts.',
    solution: 'Designed an architectural showcase with high contrast dark/light theme, structural grid alignments, and interactive RFP estimator.',
    testimonial: {
      quote: 'The website Ehtisham built helped us secure two $5M commercial contracts within 60 days of launch. Extraordinary craftsmanship!',
      author: 'Oliver Henderson',
      role: 'Principal Architect',
      company: 'UrbanBuild Australia',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
    },
    mockupData: {
      headline: 'Architectural Innovation Meets Engineering Mastery',
      subtext: 'Designing sustainable, forward-thinking residential & commercial structures.',
      primaryColor: '#EA580C',
      accentColor: '#3B82F6',
      sections: [
        { title: 'The SkyTower Commercial Complex', content: '45-story LEED Gold certified green office tower in Melbourne CBD.' },
        { title: 'Interactive Cost Estimator', content: 'Calculate estimated build cost per square meter by structural type.' },
        { title: 'Sustainable Green Concrete', content: '100% eco-friendly materials minimizing carbon footprint.' }
      ]
    }
  },
  {
    id: 'skillforge-saas',
    title: 'SkillForge Learning & Academy LMS',
    subtitle: 'EdTech Course Platform & Online Student Portal',
    category: 'SaaS & Web Apps',
    description: 'A feature-rich online learning management system with course video player, interactive quizzes, progress tracking, and certificate generator.',
    fullDescription: 'SkillForge provides tech skills training. Built with clean dashboard UI, course curriculum breakdown, instructor profiles, student discussion forums, and automated certificate generation.',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=1200&q=80',
    mockupBg: 'from-emerald-950/80 via-zinc-900 to-black',
    client: 'SkillForge Education',
    location: 'Austin, USA',
    year: '2025',
    metrics: [
      { label: 'Course Completion Rate', value: '+42%' },
      { label: 'Active Students', value: '45K+' },
      { label: 'Platform Uptime', value: '99.99%' }
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Express', 'PostgreSQL', 'AWS S3'],
    features: [
      'Interactive Video Player with Speed Control & Chapter Markers',
      'Real-Time Student Progress Bar & Quiz Score Tracker',
      'Dynamic PDF Certificate Generator upon Course Completion',
      'Course Filter Engine by Difficulty, Tech Stack & Price',
      'Discussion Forum & Instructor Q&A Portal'
    ],
    liveUrl: 'https://skillforge-academy.demo.com',
    githubUrl: 'https://github.com/ehtishamsarwar/skillforge-lms',
    challenge: 'Students dropped out early due to poorly structured course viewports and slow video load times.',
    solution: 'Built a sleek distraction-free video portal with gamified milestones and instant certificate generation.',
    testimonial: {
      quote: 'Ehtisham created a seamless LMS platform that our 45,000 students love. Completion rates jumped by 42%!',
      author: 'Dr. Rebecca Vance',
      role: 'Head of Learning',
      company: 'SkillForge US',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80'
    },
    mockupData: {
      headline: 'Master Web Development & AI Engineering',
      subtext: 'Project-based hands-on courses taught by industry veterans.',
      primaryColor: '#059669',
      accentColor: '#6366F1',
      sections: [
        { title: 'Full-Stack Next.js 15 Masterclass', content: 'Build 5 real-world SaaS apps from design to Cloud deployment.' },
        { title: 'Interactive Code Playground', content: 'Practice coding directly in your browser with real-time feedback.' },
        { title: 'Verifiable Certificate of Completion', content: 'Share your verified credential on LinkedIn and to top recruiters.' }
      ]
    }
  },
  {
    id: 'gourmetbistro-services',
    title: 'GourmetBistro Fine Dining & Catering',
    subtitle: 'Restaurant Menu & Table Reservation System',
    category: 'Services Websites',
    description: 'An elegant culinary website featuring interactive digital menu with dietary filters, table reservation booking engine, and event catering order form.',
    fullDescription: 'GourmetBistro is an award-winning Michelin-starred restaurant. The website delivers a visual feast with high-res food photography, table reservation selector, wine list, and private party booking.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    mockupBg: 'from-amber-950/80 via-zinc-900 to-black',
    client: 'GourmetBistro Dining Group',
    location: 'Paris, France',
    year: '2024',
    metrics: [
      { label: 'Table Reservations', value: '+190%' },
      { label: 'No-Show Rate Drop', value: '-40%' },
      { label: 'Catering Inquiries', value: '3x Increase' }
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Twilio API', 'Firebase'],
    features: [
      'Interactive Menu Filter (Vegan, Gluten-Free, Chef Specials, Wine Pairings)',
      'Real-Time Table Reservation Engine with SMS Confirmation',
      'Private Dining & Corporate Event Booking Request Wizard',
      'Virtual Chef Tasting Menu Experience Story',
      'Integrated Digital Gift Card Purchase System'
    ],
    liveUrl: 'https://gourmetbistro-paris.demo.com',
    githubUrl: 'https://github.com/ehtishamsarwar/gourmetbistro-web',
    challenge: 'Over-reliance on phone reservations led to double-bookings and no-shows during peak dinner hours.',
    solution: 'Engineered an automated table booking system with Twilio SMS confirmations and deposit payments for large tables.',
    testimonial: {
      quote: 'Ehtisham’s digital reservation platform streamlined our entire dining operation. No-shows reduced by 40%!',
      author: 'Chef Antoine Laurent',
      role: 'Executive Head Chef',
      company: 'GourmetBistro Paris',
      avatar: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=200&q=80'
    },
    mockupData: {
      headline: 'An Unforgettable French Culinary Journey',
      subtext: 'Exquisite seasonal tasting menus crafted with farm-to-table organic ingredients.',
      primaryColor: '#D97706',
      accentColor: '#EF4444',
      sections: [
        { title: '7-Course Chef Tasting Menu', content: 'Wagyu beef tenderloin, black truffle risotto, paired with vintage Bordeaux.' },
        { title: 'Reserve Your Table Online', content: 'Select date, guest count, and indoor/terrace seating preference.' },
        { title: 'Private Party & Catering', content: 'Bespoke catering for corporate galas, weddings, and private dinners.' }
      ]
    }
  }
];
