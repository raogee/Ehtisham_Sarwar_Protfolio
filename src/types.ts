export type ThemeMode = 'dark' | 'light';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'E-Commerce' | 'Property Websites' | 'Services Websites' | 'SaaS & Web Apps';
  description: string;
  fullDescription: string;
  image: string;
  mockupBg: string;
  client: string;
  location: string;
  year: string;
  metrics: {
    label: string;
    value: string;
  }[];
  techStack: string[];
  features: string[];
  liveUrl: string;
  githubUrl?: string;
  challenge: string;
  solution: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    company: string;
    avatar: string;
  };
  mockupData: {
    headline: string;
    subtext: string;
    primaryColor: string;
    accentColor: string;
    sections: {
      title: string;
      content: string;
    }[];
  };
}

export interface Service {
  id: string;
  iconName: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  idealFor: string[];
  estimatedTime: string;
  startingPrice: number;
  popular?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  projectType: string;
  text: string;
  country: string;
  flagEmoji: string;
}

export interface TechItem {
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'E-Commerce' | 'DevOps & Tools';
  proficiency: number;
  years: number;
  icon: string;
  description: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  price: number;
  period: string;
  popular?: boolean;
  features: string[];
  notIncluded?: string[];
  deliveryDays: string;
  revisionLimit: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'General' | 'Process' | 'Pricing' | 'Technical';
}
