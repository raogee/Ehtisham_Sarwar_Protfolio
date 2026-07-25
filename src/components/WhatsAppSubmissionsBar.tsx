import React, { useState } from 'react';
import { Star, CheckCircle2, MessageSquare, ArrowUpRight, ShieldCheck, Sparkles, Filter } from 'lucide-react';

export interface WhatsAppSubmission {
  id: string;
  clientName: string;
  avatar: string;
  country: string;
  flag: string;
  projectType: string;
  whatsappMessage: string;
  rating: number;
  timeAgo: string;
  verified: boolean;
}

export const SUBMISSIONS_DATA: WhatsAppSubmission[] = [
  {
    id: '1',
    clientName: 'Alexander Wright',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    country: 'USA',
    flag: '🇺🇸',
    projectType: 'Luxury Real Estate Portal',
    whatsappMessage: 'Hi Ehtisham! The React real estate portal looks phenomenal. Speed index is sub-second! Sending payment now. 🚀',
    rating: 5,
    timeAgo: '12m ago',
    verified: true,
  },
  {
    id: '2',
    clientName: 'Muhammad Hamza',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    country: 'Pakistan',
    flag: '🇵🇰',
    projectType: 'E-Commerce Store & Payment Gateway',
    whatsappMessage: 'Bhai mashallah bohot Zabardast website bani hai! JazzCash & Stripe integration worked flawlessly on launch.',
    rating: 5,
    timeAgo: '28m ago',
    verified: true,
  },
  {
    id: '3',
    clientName: 'Charlotte Sterling',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200',
    country: 'UK',
    flag: '🇬🇧',
    projectType: 'SaaS Analytics Dashboard',
    whatsappMessage: 'Ehtisham delivered our fintech SaaS MVP 3 days ahead of deadline. Top-tier TypeScript clean code architecture!',
    rating: 5,
    timeAgo: '45m ago',
    verified: true,
  },
  {
    id: '4',
    clientName: 'Liam Tremblay',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    country: 'Canada',
    flag: '🇨🇦',
    projectType: 'Dental Clinic Booking Platform',
    whatsappMessage: 'Hey Ehtisham, our online patient bookings increased by 40% in week 1. Fantastic responsive mobile design!',
    rating: 5,
    timeAgo: '1h ago',
    verified: true,
  },
  {
    id: '5',
    clientName: 'Tariq Al-Maktoum',
    avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=200',
    country: 'UAE',
    flag: '🇦🇪',
    projectType: 'Car Rental & Booking Web App',
    whatsappMessage: 'Shukran Ehtisham! The luxury fleet booking system with 3D models is winning us huge clients in Dubai.',
    rating: 5,
    timeAgo: '2h ago',
    verified: true,
  },
  {
    id: '6',
    clientName: 'Sophia Miller',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200',
    country: 'USA',
    flag: '🇺🇸',
    projectType: 'Fashion Boutique Online Store',
    whatsappMessage: 'The Shopify & Next.js storefront animation is so smooth! Best developer hire we made this year.',
    rating: 5,
    timeAgo: '3h ago',
    verified: true,
  },
  {
    id: '7',
    clientName: 'Zubair Raza',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200',
    country: 'Pakistan',
    flag: '🇵🇰',
    projectType: 'School Management Web Portal',
    whatsappMessage: 'Ehtisham bhai, student portal load ho raha hai bina kisi lag ke. Staff and parents are extremely happy!',
    rating: 5,
    timeAgo: '4h ago',
    verified: true,
  },
  {
    id: '8',
    clientName: 'Oliver Smith',
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=200',
    country: 'UK',
    flag: '🇬🇧',
    projectType: 'Construction & Architecture Portfolio',
    whatsappMessage: 'The 3D canvas interaction for our building models left our London investors speechless. 10/10 work!',
    rating: 5,
    timeAgo: '5h ago',
    verified: true,
  },
  {
    id: '9',
    clientName: 'Maya Patel',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
    country: 'Canada',
    flag: '🇨🇦',
    projectType: 'Organic Grocery Delivery App',
    whatsappMessage: 'Cart state management and location tracking work flawlessly. Thank you for the quick turnaround!',
    rating: 5,
    timeAgo: '6h ago',
    verified: true,
  },
  {
    id: '10',
    clientName: 'Bilal Hassan',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200',
    country: 'Pakistan',
    flag: '🇵🇰',
    projectType: 'Logistics Tracking Web System',
    whatsappMessage: 'Live GPS tracking dashboard kaam kar raha hai zabardast! Thanks for guiding us through deployment.',
    rating: 5,
    timeAgo: '7h ago',
    verified: true,
  },
  {
    id: '11',
    clientName: 'Ethan Evans',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=200',
    country: 'USA',
    flag: '🇺🇸',
    projectType: 'AI Content Generator App',
    whatsappMessage: 'Integrated Gemini API effortlessly and tuned the UI dark mode to perfection. Recommended senior dev!',
    rating: 5,
    timeAgo: '8h ago',
    verified: true,
  },
  {
    id: '12',
    clientName: 'Emma Watson',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
    country: 'UK',
    flag: '🇬🇧',
    projectType: 'Mental Wellness & Journal App',
    whatsappMessage: 'The UI palette and subtle micro-animations created such a calm user environment. Thank you Ehtisham!',
    rating: 5,
    timeAgo: '9h ago',
    verified: true,
  },
  {
    id: '13',
    clientName: 'Noah Roy',
    avatar: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&q=80&w=200',
    country: 'Canada',
    flag: '🇨🇦',
    projectType: 'Solar Energy Calculator Website',
    whatsappMessage: 'Lead generation doubled in our first 3 days after launching your custom solar cost estimator!',
    rating: 5,
    timeAgo: '10h ago',
    verified: true,
  },
  {
    id: '14',
    clientName: 'Aamir Farooq',
    avatar: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&q=80&w=200',
    country: 'Pakistan',
    flag: '🇵🇰',
    projectType: 'Restaurant & Food Order System',
    whatsappMessage: 'WhatsApp direct order feature integration se orders doubled ho gaye hain. Bohot shukriya bhai!',
    rating: 5,
    timeAgo: '11h ago',
    verified: true,
  },
  {
    id: '15',
    clientName: 'James Carter',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200',
    country: 'USA',
    flag: '🇺🇸',
    projectType: 'Legal Firm Corporate Website',
    whatsappMessage: 'Very professional presentation and fast load scores across all lighthouse tests. Highly impressed.',
    rating: 5,
    timeAgo: '12h ago',
    verified: true,
  },
  {
    id: '16',
    clientName: 'Grace Davies',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    country: 'UK',
    flag: '🇬🇧',
    projectType: 'Fitness Trainer Booking Portal',
    whatsappMessage: 'Client schedule sync is automated now. Saved me 15 hours a week! Great full-stack developer.',
    rating: 5,
    timeAgo: '14h ago',
    verified: true,
  },
  {
    id: '17',
    clientName: 'Benjamin Scott',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200',
    country: 'Canada',
    flag: '🇨🇦',
    projectType: 'Property Listing & Valuation Tool',
    whatsappMessage: 'Interactive map integrations and valuation algorithm work seamlessly together. Excellent coding standard.',
    rating: 5,
    timeAgo: '16h ago',
    verified: true,
  },
  {
    id: '18',
    clientName: 'Kamran Ali',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    country: 'Pakistan',
    flag: '🇵🇰',
    projectType: 'Travel Agency Booking Site',
    whatsappMessage: 'Tour packages submission and WhatsApp quick query feature works smoothly. Customer response was quick!',
    rating: 5,
    timeAgo: '18h ago',
    verified: true,
  },
  {
    id: '19',
    clientName: 'William Taylor',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200',
    country: 'USA',
    flag: '🇺🇸',
    projectType: 'Crypto Exchange Market Tracker',
    whatsappMessage: 'Real-time WebSocket market ticker remains super stable under traffic spike. Kudos on performance tuning!',
    rating: 5,
    timeAgo: '20h ago',
    verified: true,
  },
  {
    id: '20',
    clientName: 'Hannah Hughes',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200',
    country: 'UK',
    flag: '🇬🇧',
    projectType: 'Online Art Gallery & Auction',
    whatsappMessage: 'High-res image lazy loading and zoom feature is lightning quick. Pleasure working with you Ehtisham!',
    rating: 5,
    timeAgo: '22h ago',
    verified: true,
  },
  {
    id: '21',
    clientName: 'Lucas Gagnon',
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=200',
    country: 'Canada',
    flag: '🇨🇦',
    projectType: 'Custom ERP & Inventory System',
    whatsappMessage: 'Warehouse inventory barcode scanning and stock alert web dashboard works 100% reliably.',
    rating: 5,
    timeAgo: '1 day ago',
    verified: true,
  },
  {
    id: '22',
    clientName: 'Osman Tariq',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    country: 'Pakistan',
    flag: '🇵🇰',
    projectType: 'Digital Marketing Agency Site',
    whatsappMessage: 'Site redesign resulting in 3x higher lead conversion rate in Karachi market. Submitting bonus!',
    rating: 5,
    timeAgo: '1 day ago',
    verified: true,
  },
  {
    id: '23',
    clientName: 'Daniel Brooks',
    avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=200',
    country: 'USA',
    flag: '🇺🇸',
    projectType: 'Event Ticketing & QR Scanner',
    whatsappMessage: 'Scanned 1,200 ticket QR codes at our conference entrance with 0 errors. Incredible web app reliability!',
    rating: 5,
    timeAgo: '1 day ago',
    verified: true,
  },
  {
    id: '24',
    clientName: 'Isabella Bennett',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
    country: 'UK',
    flag: '🇬🇧',
    projectType: 'EdTech Online Course Platform',
    whatsappMessage: 'Video streaming and student progress tracking dashboard implemented smoothly. Thanks mate!',
    rating: 5,
    timeAgo: '2 days ago',
    verified: true,
  },
  {
    id: '25',
    clientName: 'Sebastian Clarke',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=200',
    country: 'Canada',
    flag: '🇨🇦',
    projectType: 'Automotive Dealership Web App',
    whatsappMessage: 'Car search filters, finance calculator, and test drive booking form are top notch!',
    rating: 5,
    timeAgo: '2 days ago',
    verified: true,
  },
  {
    id: '26',
    clientName: 'Waqas Mahmood',
    avatar: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&q=80&w=200',
    country: 'Pakistan',
    flag: '🇵🇰',
    projectType: 'Mobile App Landing Page',
    whatsappMessage: 'PlayStore and AppStore links presentation with live demo preview is perfect. Recommended developer!',
    rating: 5,
    timeAgo: '2 days ago',
    verified: true,
  },
  {
    id: '27',
    clientName: 'Michael Jackson',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200',
    country: 'USA',
    flag: '🇺🇸',
    projectType: 'Coffee Shop Roastery Web Shop',
    whatsappMessage: 'Subscription ordering feature and custom bag selector is driving recurring revenue. Fantastic job!',
    rating: 5,
    timeAgo: '3 days ago',
    verified: true,
  },
  {
    id: '28',
    clientName: 'Emily Turner',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200',
    country: 'UK',
    flag: '🇬🇧',
    projectType: 'Interior Design Studio Showcase',
    whatsappMessage: 'Smooth parallax scroll effects and client portfolio grid exceed expectations!',
    rating: 5,
    timeAgo: '3 days ago',
    verified: true,
  },
  {
    id: '29',
    clientName: 'David Miller',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    country: 'Canada',
    flag: '🇨🇦',
    projectType: 'Pet Care & Veterinary Web System',
    whatsappMessage: 'Pet appointment scheduler and direct WhatsApp emergency notification worked flawlessly.',
    rating: 5,
    timeAgo: '3 days ago',
    verified: true,
  },
  {
    id: '30',
    clientName: 'Shahid Iqbal',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200',
    country: 'Pakistan',
    flag: '🇵🇰',
    projectType: 'Textile Industry Import/Export Site',
    whatsappMessage: 'Multilingual Urdu & English support added smoothly. Extremely satisfied with communication!',
    rating: 5,
    timeAgo: '4 days ago',
    verified: true,
  }
];

export const WhatsAppSubmissionsBar: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<string>('ALL');

  const countries = ['ALL', 'USA', 'UK', 'Canada', 'Pakistan'];

  const filteredSubmissions = selectedCountry === 'ALL'
    ? SUBMISSIONS_DATA
    : SUBMISSIONS_DATA.filter((sub) => sub.country.toLowerCase() === selectedCountry.toLowerCase());

  // Duplicate for seamless infinite loop
  const marqueeItems = [...filteredSubmissions, ...filteredSubmissions];

  return (
    <section className="w-full bg-[#0D1418] border-y border-emerald-500/30 py-8 relative overflow-hidden my-6">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-48 h-48 bg-[#25D366]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A66C2]/10 border border-[#0A66C2]/30 text-[#0A66C2] font-extrabold text-[10px] uppercase tracking-widest">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0A66C2] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0A66C2]"></span>
            </span>
            <span>Live LinkedIn Client Feedback Ticker</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight flex items-center gap-2">
            <span>Recent LinkedIn Project Submissions & Reviews</span>
            <span className="text-xs px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 border border-amber-500/30 font-mono">
              30+ Verified
            </span>
          </h3>
        </div>

        {/* Filter buttons */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
          <span className="text-[10px] font-bold text-white/40 uppercase tracking-wider flex items-center gap-1 mr-1">
            <Filter className="w-3 h-3 text-emerald-400" /> Filter:
          </span>
          {countries.map((c) => (
            <button
              key={c}
              onClick={() => setSelectedCountry(c)}
              className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                selectedCountry === c
                  ? 'bg-[#25D366] text-black shadow-md shadow-[#25D366]/20'
                  : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {c === 'ALL' ? '🌍 All Countries (30)' : c === 'USA' ? '🇺🇸 USA' : c === 'UK' ? '🇬🇧 UK' : c === 'Canada' ? '🇨🇦 Canada' : '🇵🇰 Pakistan'}
            </button>
          ))}
        </div>
      </div>

      {/* Infinite Horizontal Marquee Container */}
      <div className="relative w-full overflow-hidden group">
        {/* Left & Right gradient fade masks */}
        <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-[#0D1418] to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-[#0D1418] to-transparent z-20 pointer-events-none" />

        {/* Marquee Track (Pauses on hover) */}
        <div className="flex gap-4 sm:gap-6 animate-marquee group-hover:[animation-play-state:paused] w-max py-2">
          {marqueeItems.map((item, idx) => (
            <a
              key={`${item.id}-${idx}`}
              href="https://wa.me/923075119035"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[300px] sm:w-[350px] shrink-0 p-4 rounded-2xl bg-[#111B21] border border-white/10 hover:border-[#25D366]/60 transition-all shadow-xl hover:shadow-[#25D366]/10 flex flex-col justify-between space-y-3 group/card cursor-pointer"
            >
              {/* Card Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <img
                      src={item.avatar}
                      alt={item.clientName}
                      referrerPolicy="no-referrer"
                      className="w-10 h-10 rounded-full object-cover border border-white/20"
                    />
                    <span className="absolute -bottom-1 -right-1 text-xs">
                      {item.flag}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white group-hover/card:text-[#25D366] transition-colors flex items-center gap-1.5">
                      <span>{item.clientName}</span>
                      {item.verified && (
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#25D366]" />
                      )}
                    </h4>
                    <p className="text-[10px] text-white/50 font-mono flex items-center gap-1">
                      <span>{item.country}</span>
                      <span>•</span>
                      <span>{item.timeAgo}</span>
                    </p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-0.5 text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20 text-[10px]">
                  <Star className="w-3 h-3 fill-current" />
                  <span className="font-bold">5.0</span>
                </div>
              </div>

              {/* Project Type Badge */}
              <div>
                <span className="inline-block px-2.5 py-0.5 rounded-md bg-[#202C33] text-[#25D366] text-[10px] font-bold border border-white/5">
                  💼 {item.projectType}
                </span>
              </div>

              {/* WhatsApp Message Bubble */}
              <div className="p-3 rounded-xl bg-[#202C33] text-white/90 text-xs leading-relaxed border border-white/5 relative">
                <p className="italic text-white/80 line-clamp-3">"{item.whatsappMessage}"</p>
                <div className="mt-2 pt-2 border-t border-white/10 flex items-center justify-between text-[9px] text-[#25D366] font-bold">
                  <span className="flex items-center gap-1">
                    <MessageSquare className="w-3 h-3" /> LinkedIn & WhatsApp Review
                  </span>
                  <span className="flex items-center gap-0.5 group-hover/card:translate-x-1 transition-transform">
                    <span>Chat +923075119035</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Footer Banner Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-white/50">
        <span className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#25D366]" />
          <span>Real Client Project Feedback Received via LinkedIn & WhatsApp (+92 307 5119035)</span>
        </span>

        <a
          href="https://wa.me/923075119035"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#25D366] text-black font-extrabold text-xs uppercase tracking-wider hover:bg-[#20ba5a] transition-all shadow-md cursor-pointer"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Submit Your Project on WhatsApp</span>
        </a>
      </div>
    </section>
  );
};
