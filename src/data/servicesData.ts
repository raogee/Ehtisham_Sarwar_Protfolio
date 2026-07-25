import { Service, Testimonial, TechItem, PricingPlan, FAQItem } from '../types';

export const SERVICES_DATA: Service[] = [
  {
    id: 'ecommerce-dev',
    iconName: 'ShoppingBag',
    title: 'High-Converting E-Commerce Platforms',
    shortDesc: 'Custom online stores designed to turn visitors into repeat buyers with sub-second speeds and seamless checkout.',
    fullDesc: 'Complete e-commerce engineering using modern React/Next.js or custom Shopify headless integrations. Built with multi-currency checkout, Stripe/PayPal gateways, fast product filters, inventory sync, and mobile cart optimization.',
    deliverables: [
      'Custom React or Headless E-Commerce Frontend',
      'Stripe, PayPal, Apple Pay & Klarna Gateway Integration',
      'Instant Search, Filter & 3D Product Gallery',
      'Admin Inventory & Order Management Portal',
      'Mobile-First Cart & 1-Click Checkout UX'
    ],
    idealFor: ['Fashion & Apparel', 'Tech & Electronics', 'Jewelry & Accessories', 'D2C Brands'],
    estimatedTime: '2 - 4 Weeks',
    startingPrice: 1200,
    popular: true
  },
  {
    id: 'property-realestate-dev',
    iconName: 'Home',
    title: 'Real Estate & Property Portals',
    shortDesc: 'Bespoke property listing platforms with 3D virtual tours, interactive map search, and lead capture systems.',
    fullDesc: 'Tailored web portals for luxury real estate agencies, property managers, and resorts. Includes Mapbox interactive radius search, mortgage payment calculators, agent scheduling calendars, and multi-language support.',
    deliverables: [
      'Interactive Property Map Search with Filters',
      '3D Floorplan & Virtual Tour Embed Integration',
      'Automated Mortgage & Monthly Payment Calculator',
      'Agent Lead Capture & WhatsApp Integration',
      'Multi-currency & Multi-language Support'
    ],
    idealFor: ['Real Estate Agencies', 'Property Developers', 'Luxury Resorts & Hotels', 'Vacation Rentals'],
    estimatedTime: '2 - 3 Weeks',
    startingPrice: 1400,
    popular: true
  },
  {
    id: 'corporate-service-websites',
    iconName: 'Briefcase',
    title: 'Corporate & Service Business Websites',
    shortDesc: 'Stunning corporate websites that establish instant authority and generate high-value qualified client inquiries.',
    fullDesc: 'High-impact web development for logistics companies, healthcare clinics, law firms, construction agencies, and luxury service providers. Designed with 3D visual cards, ROI estimators, and online booking workflows.',
    deliverables: [
      'Custom Design with 3D Visual Cards & Dark/Light Themes',
      'Interactive Cost / Quote Estimator Calculator',
      'Online Appointment Scheduler & Booking Engine',
      'SEO Optimized Structure with 95+ Lighthouse Score',
      'Custom Content Management System (CMS)'
    ],
    idealFor: ['Logistics & Transport', 'Healthcare & Clinics', 'Construction & Architecture', 'Consultancies'],
    estimatedTime: '1 - 3 Weeks',
    startingPrice: 800
  },
  {
    id: 'saas-web-apps',
    iconName: 'Cpu',
    title: 'SaaS & Web Application Development',
    shortDesc: 'Scalable full-stack web applications with user authentication, payment subscriptions, and AI API integrations.',
    fullDesc: 'End-to-end full-stack web software development. From high-converting marketing landing pages to secure student LMS portals, AI dashboards, and subscription membership platforms.',
    deliverables: [
      'Full-Stack Architecture (React, Node.js, PostgreSQL/MongoDB)',
      'User Authentication (OAuth, JWT, Firebase Auth)',
      'Stripe Subscription Billing & Tier Management',
      'Gemini AI / OpenAI API Integration & Webhooks',
      'Responsive Admin Dashboard & Analytics'
    ],
    idealFor: ['Tech Startups', 'EdTech & Online Academies', 'AI Software Creators', 'Membership Hubs'],
    estimatedTime: '3 - 6 Weeks',
    startingPrice: 1800,
    popular: true
  },
  {
    id: 'speed-seo-optimization',
    iconName: 'Zap',
    title: 'Website Speed & Technical SEO Tuning',
    shortDesc: 'Transform slow websites into sub-second powerhouses with 90+ PageSpeed scores and top Google rankings.',
    fullDesc: 'Comprehensive code refactoring, image compression, asset minification, core web vitals optimization, schema markup injection, and technical SEO structure to boost organic traffic.',
    deliverables: [
      'Google PageSpeed Score Guarantee (90+ Mobile/Desktop)',
      'Core Web Vitals Repair (LCP, CLS, INP Optimization)',
      'Schema.org Rich Snippets & Structured Data',
      'Image & Code Bundle Compression',
      'Technical SEO Audit & Indexation Cleanup'
    ],
    idealFor: ['Slow Existing Websites', 'WordPress / Shopify Sites', 'Lead Gen Landing Pages'],
    estimatedTime: '3 - 5 Days',
    startingPrice: 400
  },
  {
    id: 'maintenance-care-plan',
    iconName: 'ShieldCheck',
    title: 'Website Maintenance & Care Plans',
    shortDesc: 'Ongoing security monitoring, daily backups, performance maintenance, and on-demand content updates.',
    fullDesc: 'Peace of mind for your business website. Includes automated weekly backups, malware scans, speed checks, framework updates, and dedicated developer hours every month.',
    deliverables: [
      '24/7 Security & Uptime Monitoring',
      'Weekly Offsite Database & File Backups',
      'Priority Bug Fixes & Code Updates',
      'Monthly Analytics & Performance Reports',
      'Direct WhatsApp Developer Support Channel'
    ],
    idealFor: ['Business Owners', 'E-Commerce Stores', 'Busy Agencies'],
    estimatedTime: 'Ongoing Monthly',
    startingPrice: 150
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Alexander Sterling',
    role: 'Managing Director',
    company: 'LuxeHaven Realty Group',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    projectType: 'Property Portal',
    text: 'Ehtisham Sarwar is an exceptional developer! He built our luxury Dubai real estate portal in just 3 weeks. The 3D virtual tour integrations and instant mortgage calculators helped us close 3 major villa sales in the first month alone!',
    country: 'United Arab Emirates',
    flagEmoji: '🇦🇪'
  },
  {
    id: 'test-2',
    name: 'Sophia Chen',
    role: 'Founder & Creative Lead',
    company: 'AuraCraft Couture UK',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    projectType: 'E-Commerce Store',
    text: 'Working with Ehtisham was a breeze. He transformed our sluggish e-commerce store into a lightning-fast React platform. Our cart abandonment dropped by 45% and mobile revenue skyrocketed by 240%!',
    country: 'United Kingdom',
    flagEmoji: '🇬🇧'
  },
  {
    id: 'test-3',
    name: 'Marcus Vance',
    role: 'VP of Operations',
    company: 'Apex Freight Systems',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    projectType: 'Services Website',
    text: 'The shipping quote calculator and container tracking portal Ehtisham engineered reduced our customer support call volume by 40%. Highly professional, communicative, and delivers on time every time.',
    country: 'United States',
    flagEmoji: '🇺🇸'
  },
  {
    id: 'test-4',
    name: 'David K. Miller',
    role: 'Co-Founder & CEO',
    company: 'NovaAI SaaS',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    projectType: 'SaaS Application',
    text: 'Ehtisham built us the cleanest dark-mode SaaS UI we have ever seen. His attention to micro-animations, mobile responsiveness, and clean React code architecture is unmatched in the industry.',
    country: 'United States',
    flagEmoji: '🇺🇸'
  },
  {
    id: 'test-5',
    name: 'Aria Wuryanto',
    role: 'General Manager',
    company: 'PrimeStay Resort Bali',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    projectType: 'Property & Resort Web',
    text: 'Our direct villa bookings increased by 220% after switching to the website Ehtisham designed. He saved us thousands in OTA commissions. I recommend Ehtisham to anyone who wants a world-class website!',
    country: 'Indonesia',
    flagEmoji: '🇮🇩'
  },
  {
    id: 'test-6',
    name: 'Dr. Sarah Jenkins',
    role: 'Medical Director',
    company: 'HealthPulse Network',
    avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    projectType: 'Medical Clinic Web',
    text: 'Ehtisham engineered a secure doctor appointment booking portal that our patients love. It is super fast, accessible, and works flawlessly across mobile devices.',
    country: 'Canada',
    flagEmoji: '🇨🇦'
  }
];

export const TECH_STACK_DATA: TechItem[] = [
  {
    name: 'React.js / React 19',
    category: 'Frontend',
    proficiency: 98,
    years: 5,
    icon: 'Atom',
    description: 'Component architecture, custom hooks, context state management, and modern UI library integration.'
  },
  {
    name: 'Next.js 14/15',
    category: 'Frontend',
    proficiency: 95,
    years: 4,
    icon: 'Globe',
    description: 'Server Components, App Router, SSR/SSG rendering, SEO optimization, and fast routing.'
  },
  {
    name: 'TypeScript',
    category: 'Frontend',
    proficiency: 94,
    years: 4,
    icon: 'Code2',
    description: 'Strongly typed codebases, interfaces, generic types, and compile-time bug prevention.'
  },
  {
    name: 'Tailwind CSS v4',
    category: 'Frontend',
    proficiency: 99,
    years: 5,
    icon: 'Palette',
    description: 'Utility-first responsive layouts, 3D CSS transforms, dark/light themes, and fluid typography.'
  },
  {
    name: 'Node.js & Express',
    category: 'Backend',
    proficiency: 92,
    years: 5,
    icon: 'Server',
    description: 'RESTful API architecture, middleware authentication, rate limiting, and backend services.'
  },
  {
    name: 'PostgreSQL & MongoDB',
    category: 'Database',
    proficiency: 90,
    years: 4,
    icon: 'Database',
    description: 'Relational & NoSQL database schemas, queries, indexing, and ORM integrations.'
  },
  {
    name: 'Firebase & Firestore',
    category: 'Database',
    proficiency: 95,
    years: 5,
    icon: 'Flame',
    description: 'Realtime database listeners, Cloud Functions, Authentication, and security rules.'
  },
  {
    name: 'Stripe & PayPal APIs',
    category: 'E-Commerce',
    proficiency: 96,
    years: 4,
    icon: 'CreditCard',
    description: 'Secure payment checkout, webhook handling, subscription management, and multi-currency.'
  },
  {
    name: 'Shopify / WooCommerce',
    category: 'E-Commerce',
    proficiency: 90,
    years: 5,
    icon: 'ShoppingBag',
    description: 'Custom theme development, headless e-commerce store setups, and plugin customization.'
  },
  {
    name: '3D CSS & Motion',
    category: 'Frontend',
    proficiency: 92,
    years: 3,
    icon: 'Sparkles',
    description: 'Perspective 3D tilt effects, spring physics animations, page transitions, and interactive visual cards.'
  },
  {
    name: 'Git, Vite & Vercel',
    category: 'DevOps & Tools',
    proficiency: 96,
    years: 5,
    icon: 'GitBranch',
    description: 'CI/CD deployment pipelines, fast bundle builds, environment management, and version control.'
  },
  {
    name: 'Gemini AI Integration',
    category: 'Backend',
    proficiency: 94,
    years: 2,
    icon: 'Bot',
    description: 'Server-side Gemini AI models integration for smart copy, AI chatbots, and content generation.'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter Business',
    tagline: 'Ideal for local businesses, portfolios & service providers needing a professional presence.',
    price: 699,
    period: 'one-time',
    features: [
      'Up to 5 Custom Pages (Home, About, Services, Portfolio, Contact)',
      '100% Mobile & Tablet Responsive Design',
      'Dark & Light Mode Support',
      'Interactive Contact Form with Instant Notification',
      'Speed & SEO Base Optimization (85+ Score)',
      'Social Media & WhatsApp Button Integration',
      '14 Days Post-Launch Support & Minor Edits'
    ],
    notIncluded: ['Custom E-Commerce Cart', '3D Virtual Tours'],
    deliveryDays: '5 - 7 Business Days',
    revisionLimit: '3 Rounds'
  },
  {
    id: 'professional',
    name: 'E-Commerce & Pro Portals',
    tagline: 'Best for online stores, property portals, healthcare & growing businesses.',
    price: 1499,
    period: 'one-time',
    popular: true,
    features: [
      'Up to 10+ Custom Pages or Full Catalog Structure',
      'Interactive 3D Tilt Cards & Custom Animation Effects',
      'Full E-Commerce Cart OR Property Search Engine',
      'Stripe & PayPal Payment Gateway Integration',
      'Instant Quote / Cost Calculator Widget',
      'Advanced Speed Optimization (95+ PageSpeed Guarantee)',
      'Custom Content Management Portal (CMS)',
      '30 Days Post-Launch Support & Developer Care'
    ],
    deliveryDays: '10 - 14 Business Days',
    revisionLimit: 'Unlimited Revisions'
  },
  {
    id: 'enterprise',
    name: 'Full-Stack SaaS & Custom',
    tagline: 'For startups, complex web apps, custom LMS & high-volume enterprise platforms.',
    price: 2800,
    period: 'one-time',
    features: [
      'Unlimited Pages / Custom Web Software Architecture',
      'Full-Stack App (React + Node.js + Database)',
      'User Accounts, Authentication & Roles',
      'Gemini AI / OpenAI API Smart Features Integration',
      'Custom Interactive Tools & 3D Interactive Mockups',
      'Sub-Second Performance & Security Hardening',
      'Dedicated Admin Dashboard & Data Exporting',
      '60 Days Priority Support & 1-on-1 Training'
    ],
    deliveryDays: '3 - 4 Weeks',
    revisionLimit: 'Unlimited Revisions'
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'How long does it take to build a website with Ehtisham?',
    answer: 'Standard business or portfolio websites usually take 5 to 7 days. E-commerce platforms and property portals take around 10 to 14 days, while complex full-stack web applications take 3 to 4 weeks depending on features.',
    category: 'Process'
  },
  {
    question: 'Will my website work perfectly on mobile devices?',
    answer: 'Yes! Every single website built by Ehtisham Sarwar is 100% mobile-first and fully responsive across smartphones, tablets, laptops, and ultra-wide desktop monitors.',
    category: 'Technical'
  },
  {
    question: 'Do you offer dark and light mode for websites?',
    answer: 'Yes! As shown in this portfolio, I can craft beautiful dark and light themes with smooth toggling, persistence, and WCAG AA contrast compliance so your site looks stunning in any environment.',
    category: 'Technical'
  },
  {
    question: 'Can I edit and update content on my website myself later?',
    answer: 'Absolutely. I can provide a simple content management panel or set up user-friendly administrative controls so you can easily update text, add new portfolio items, or edit products without needing coding knowledge.',
    category: 'General'
  },
  {
    question: 'How do payments work for a web development project?',
    answer: 'We typically work on a 50% upfront milestone to kick off design & wireframing, and 50% upon final inspection and deployment to your domain. Payments can be made via credit card, Bank Wire, PayPal, or Wise.',
    category: 'Pricing'
  },
  {
    question: 'What happens after the website is launched?',
    answer: 'All packages include free post-launch support (from 14 to 60 days). I also offer affordable monthly maintenance plans to keep your site updated, secure, and backed up 24/7.',
    category: 'Process'
  }
];
