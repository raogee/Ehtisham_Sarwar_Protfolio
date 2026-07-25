import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, ArrowUp, Send, CheckCircle2, Sparkles, ShieldCheck, Calculator, Video, Clock, Code2, Zap, Globe, Layers, Award } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
      }, 4000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A0A0B] text-white/70 border-t border-white/10 transition-colors duration-300 relative overflow-hidden">
      {/* Decorative ambient glowing background light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-gradient-to-b from-amber-500/10 to-transparent blur-3xl pointer-events-none" />

      {/* Top CTA Banner: Project Consultation */}
      <div className="border-b border-white/10 bg-gradient-to-r from-amber-500/10 via-[#131316] to-orange-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 bg-white/5 border border-white/10 p-6 sm:p-8 rounded-3xl backdrop-blur-md relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
            
            <div className="space-y-2 text-center lg:text-left z-10">
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  Available for New Projects
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  <Clock className="w-3 h-3" />
                  Avg Response &lt; 2 Hrs
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight uppercase">
                Ready to Build Your Next Web Project?
              </h2>
              <p className="text-xs sm:text-sm text-white/70 max-w-2xl leading-relaxed">
                Partner with ES TECH to create ultra-fast, high-converting web applications, e-commerce stores, and custom software tailored to your goals.
              </p>
            </div>

            <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 z-10 shrink-0">
              <button
                onClick={() => {
                  onNavigate('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-6 py-3.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 text-black font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-amber-500/20 hover:scale-105 transition-all cursor-pointer flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 fill-current" />
                <span>Start Your Project</span>
              </button>
              <a
                href="https://wa.me/923075119035"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-full bg-emerald-500/10 hover:bg-emerald-500 border border-emerald-500/30 text-emerald-400 hover:text-black font-extrabold text-xs uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>WhatsApp Instant</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 3 Featured Footer Interactive Boxes */}
      <div className="border-b border-white/10 bg-[#131316]/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Box 1: Instant Cost Calculator */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-500/40 transition-all flex flex-col justify-between group">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                  <Calculator className="w-5 h-5" />
                </div>
                <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-widest bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  Instant Quote
                </span>
                <h3 className="text-lg font-bold text-white uppercase tracking-tight">
                  Website Cost Estimator
                </h3>
                <p className="text-xs text-white/60 leading-relaxed">
                  Configure custom features, page counts, and timelines to calculate an instant transparent project quote.
                </p>
              </div>

              <div className="pt-5 mt-4 border-t border-white/10">
                <button
                  onClick={() => {
                    onNavigate('pricing');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full py-2.5 px-4 rounded-full bg-amber-500/10 hover:bg-amber-500 border border-amber-500/30 hover:border-amber-500 text-amber-300 hover:text-black font-extrabold text-xs uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Calculator className="w-4 h-4" />
                  <span>Calculate Quote</span>
                </button>
              </div>
            </div>

            {/* Box 2: 1-on-1 Video Call Meeting */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-500/40 transition-all flex flex-col justify-between group">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400 group-hover:scale-110 transition-transform">
                  <Video className="w-5 h-5" />
                </div>
                <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-widest bg-orange-500/10 text-orange-400 border border-orange-500/20">
                  Free 15-Min Call
                </span>
                <h3 className="text-lg font-bold text-white uppercase tracking-tight">
                  Schedule Strategy Call
                </h3>
                <p className="text-xs text-white/60 leading-relaxed">
                  Book a direct 1-on-1 video call with Ehtisham Sarwar to discuss architecture, timeline, and tech options.
                </p>
              </div>

              <div className="pt-5 mt-4 border-t border-white/10">
                <button
                  onClick={() => {
                    onNavigate('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full py-2.5 px-4 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 text-black font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-amber-500/20 hover:scale-105 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Video className="w-4 h-4" />
                  <span>Book Free Session</span>
                </button>
              </div>
            </div>

            {/* Box 3: Subscribe Newsletter */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-500/40 transition-all flex flex-col justify-between group">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-widest bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  Newsletter & Deals
                </span>
                <h3 className="text-lg font-bold text-white uppercase tracking-tight">
                  Web Dev Insights & Offers
                </h3>
                <p className="text-xs text-white/60 leading-relaxed">
                  Subscribe to receive monthly tech stack breakdowns, performance tips, and direct project discounts.
                </p>
              </div>

              <div className="pt-4 mt-3 border-t border-white/10">
                {subscribed ? (
                  <div className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 font-bold text-xs uppercase tracking-wider animate-fade-in">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Subscribed Successfully!</span>
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="flex items-center gap-1.5">
                    <input
                      type="email"
                      required
                      placeholder="Your email address..."
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 py-2 rounded-full text-xs bg-black/60 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-amber-500"
                    />
                    <button
                      type="submit"
                      className="p-2 rounded-full bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs shadow-md transition-all cursor-pointer shrink-0"
                      title="Subscribe"
                    >
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Main Footer Links & Expanded Info Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Col 1: Brand & Contact Info */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-600 text-black font-black text-2xl flex items-center justify-center shadow-lg shadow-amber-500/20 border border-black/20 shrink-0">
                ES
              </div>
              <div>
                <h3 className="text-2xl font-black text-white tracking-tight uppercase">Ehtisham Sarwar</h3>
                <p className="text-xs text-amber-400 font-extrabold uppercase tracking-widest">ES TECH • Senior Web Developer (5+ Yrs Exp)</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
              Engineering high-converting E-Commerce platforms, Real Estate web portals, Corporate Services websites, and custom Full-Stack SaaS applications with speed and precision.
            </p>

            {/* Live Stats Row */}
            <div className="grid grid-cols-3 gap-2 py-3 border-y border-white/10 text-center">
              <div>
                <p className="text-base font-black text-amber-400">5+ Yrs</p>
                <p className="text-[10px] text-white/50 uppercase font-semibold">Experience</p>
              </div>
              <div>
                <p className="text-base font-black text-amber-400">50+</p>
                <p className="text-[10px] text-white/50 uppercase font-semibold">Projects</p>
              </div>
              <div>
                <p className="text-base font-black text-amber-400">100%</p>
                <p className="text-[10px] text-white/50 uppercase font-semibold">Satisfaction</p>
              </div>
            </div>

            {/* Direct Contact Badges */}
            <div className="space-y-2 pt-1 text-xs">
              <a
                href="mailto:shamgee40@gmail.com"
                className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-white/90 hover:text-amber-400 hover:border-amber-500/30 transition-colors"
              >
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="truncate">shamgee40@gmail.com</span>
              </a>
              <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-white/80">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Global Remote Services (USA, UK, UAE, PK)</span>
              </div>
            </div>

            {/* Social Icons & WhatsApp */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="https://wa.me/923075119035"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-extrabold text-xs uppercase tracking-wider hover:bg-emerald-500 hover:text-black transition-all shadow-lg shadow-emerald-500/10 cursor-pointer group"
                title="Chat on WhatsApp (+92 307 5119035)"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <svg className="w-4 h-4 fill-current transition-transform group-hover:scale-110" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                <span>+92 307 5119035</span>
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-amber-400 hover:bg-amber-500/10 hover:border-amber-500/40 transition-all cursor-pointer"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-amber-400 hover:bg-amber-500/10 hover:border-amber-500/40 transition-all cursor-pointer"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-amber-400 hover:bg-amber-500/10 hover:border-amber-500/40 transition-all cursor-pointer"
                title="Twitter Profile"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Navigation Pages */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-amber-400 border-b border-white/10 pb-2 inline-block">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs font-semibold text-white/70">
              {[
                { id: 'home', label: 'Home Overview' },
                { id: 'about', label: 'About & Bio' },
                { id: 'services', label: 'Web Services' },
                { id: 'portfolio', label: 'Work Showcase' },
                { id: 'pricing', label: 'Cost Estimator' },
                { id: 'tech-stack', label: '3D Tech Stack' },
                { id: 'contact', label: 'Contact Meeting' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => {
                      onNavigate(link.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-amber-400 transition-colors flex items-center gap-2 cursor-pointer text-left w-full group"
                  >
                    <span className="text-amber-500/60 group-hover:text-amber-400 transition-colors">›</span>
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Tech Stack & Tools */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-amber-400 border-b border-white/10 pb-2 inline-block">
              Technologies & Tools
            </h4>
            <div className="flex flex-wrap gap-1.5 text-xs font-mono">
              {[
                'React 18+',
                'TypeScript',
                'Next.js',
                'Tailwind CSS',
                'Node.js',
                'Express',
                'PostgreSQL',
                'MongoDB',
                'Firebase',
                'Three.js 3D',
                'REST / GraphQL',
                'Docker & Cloud'
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md bg-white/5 text-white/80 border border-white/10 hover:border-amber-500/40 hover:text-amber-300 transition-all text-[11px]"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs text-white/70 space-y-1">
              <span className="font-bold text-white flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5 text-amber-400" />
                Modern Clean Codebase
              </span>
              <p className="text-[11px] text-white/60 leading-relaxed">
                Modular component architecture, high SEO rankings, and fully responsive layouts optimized for mobile & desktop.
              </p>
            </div>
          </div>

          {/* Col 4: Categories & Quality Guarantee */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-amber-400 border-b border-white/10 pb-2 inline-block">
              Web Categories Covered
            </h4>
            <div className="flex flex-wrap gap-1.5 text-xs font-mono">
              {[
                'Real Estate Portals',
                'E-Commerce Stores',
                'Corporate Services',
                'SaaS Applications',
                'Healthcare & Clinics',
                'Hotels & Booking',
                'Architect & Build',
                'Interactive 3D Web'
              ].map((cat) => (
                <span
                  key={cat}
                  className="px-2.5 py-1 rounded-md bg-white/5 text-white/80 border border-white/10 hover:border-amber-500/40 transition-colors text-[11px]"
                >
                  {cat}
                </span>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-[#131316] border border-amber-500/20 text-xs text-white/70 space-y-1.5">
              <span className="font-extrabold flex items-center gap-1.5 text-amber-400 uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-amber-400" /> 100% Quality & Speed Guarantee
              </span>
              <p className="text-white/60 text-[11px] leading-relaxed">
                All websites engineered by Ehtisham Sarwar pass WCAG AA standards, achieve 90+ PageSpeed benchmarks, and come with 30-day post-launch technical support.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Ehtisham Sarwar (ES TECH). All rights reserved. Senior Web Developer Portfolio.</p>

          <div className="flex items-center gap-3">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-amber-500/30 hover:text-amber-400 text-white/80 transition-all cursor-pointer font-bold uppercase tracking-wider text-[11px]"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
