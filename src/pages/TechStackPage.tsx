import React, { useState } from 'react';
import { TECH_STACK_DATA } from '../data/servicesData';
import { Code2, Zap, ShieldCheck, Cpu, Database, Flame, Globe, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

interface TechStackPageProps {
  onNavigate: (page: string) => void;
}

export const TechStackPage: React.FC<TechStackPageProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'frontend' | 'backend' | 'database'>('all');

  const filteredItems = activeTab === 'all'
    ? TECH_STACK_DATA
    : TECH_STACK_DATA.filter((t) => t.category.toLowerCase() === activeTab);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20 bg-[#0A0A0B] text-white">
      {/* SECTION 1: TECH VAULT & CATEGORY TABS */}
      <section className="space-y-8 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 font-bold text-xs uppercase tracking-widest">
          <Code2 className="w-3.5 h-3.5" /> Modern Web Engineering Stack
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase">
          3D Interactive Tech Stack & Standards
        </h1>
        <p className="text-sm text-white/60 leading-relaxed">
          I use battle-tested, industry-standard frameworks and modern libraries to deliver resilient, scalable, and sub-second web applications.
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 pt-2">
          {['all', 'frontend', 'backend', 'database'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-full transition-all cursor-pointer ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-black shadow-lg shadow-amber-500/20'
                  : 'bg-white/5 text-white/70 border border-white/10 hover:border-amber-500/30'
              }`}
            >
              {tab} Technologies
            </button>
          ))}
        </div>
      </section>

      {/* Grid of Tech Items */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.name}
            className="p-6 rounded-2xl bg-[#131316] border border-white/10 shadow-xl space-y-3 hover:border-amber-500/50 transition-colors"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
                {item.category}
              </span>
              <span className="text-xs font-mono font-bold text-amber-400">
                {item.years} Years Exp
              </span>
            </div>

            <h3 className="text-lg font-bold text-white uppercase tracking-tight">
              {item.name}
            </h3>

            <p className="text-xs text-white/50 leading-relaxed">
              {item.description}
            </p>

            <div className="pt-2">
              <div className="flex justify-between text-[11px] font-mono text-white/40 mb-1">
                <span>Proficiency Level</span>
                <span className="font-bold text-amber-400">{item.proficiency}%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-amber-500 to-orange-600"
                  style={{ width: `${item.proficiency}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* SECTION 2: LIVE SPEED BENCHMARK SIMULATOR */}
      <section className="p-8 sm:p-10 rounded-2xl bg-[#131316] text-white border border-white/10 space-y-8 shadow-2xl">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Performance Standards</span>
          <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white">Lighthouse 100/100 Benchmark Guarantee</h2>
          <p className="text-xs text-white/40">Target metrics achieved on every website engineered by Ehtisham Sarwar.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-5 rounded-2xl bg-white/5 border border-amber-500/30">
            <div className="w-16 h-16 rounded-full border-4 border-amber-400 text-amber-400 font-extrabold text-xl flex items-center justify-center mx-auto mb-2">
              99
            </div>
            <span className="font-bold text-sm block text-white">Performance</span>
            <span className="text-[11px] text-white/40">&lt; 0.6s FCP</span>
          </div>

          <div className="p-5 rounded-2xl bg-white/5 border border-amber-500/30">
            <div className="w-16 h-16 rounded-full border-4 border-amber-400 text-amber-400 font-extrabold text-xl flex items-center justify-center mx-auto mb-2">
              100
            </div>
            <span className="font-bold text-sm block text-white">Accessibility</span>
            <span className="text-[11px] text-white/40">WCAG 2.1 AA</span>
          </div>

          <div className="p-5 rounded-2xl bg-white/5 border border-amber-500/30">
            <div className="w-16 h-16 rounded-full border-4 border-amber-400 text-amber-400 font-extrabold text-xl flex items-center justify-center mx-auto mb-2">
              100
            </div>
            <span className="font-bold text-sm block text-white">Best Practices</span>
            <span className="text-[11px] text-white/40">HTTPS & Clean JS</span>
          </div>

          <div className="p-5 rounded-2xl bg-white/5 border border-amber-500/30">
            <div className="w-16 h-16 rounded-full border-4 border-amber-400 text-amber-400 font-extrabold text-xl flex items-center justify-center mx-auto mb-2">
              100
            </div>
            <span className="font-bold text-sm block text-white">SEO Score</span>
            <span className="text-[11px] text-white/40">Schema Markup</span>
          </div>
        </div>
      </section>

      {/* SECTION 3: CODE ARCHITECTURE STANDARDS */}
      <section className="p-8 rounded-2xl bg-[#131316] border border-white/10 shadow-xl space-y-6">
        <h2 className="text-2xl font-bold text-white uppercase tracking-tight">
          Clean Code Architecture Standards
        </h2>

        <div className="p-5 rounded-xl bg-black text-amber-400 font-mono text-xs overflow-x-auto border border-white/10 space-y-2">
          <div className="text-white/40">// TypeScript & React 19 Clean Architecture</div>
          <div className="text-amber-400">export function <span className="text-white">useHighPerformanceStore</span>() {'{'}</div>
          <div className="pl-4 text-emerald-400">const <span className="text-white">[cart, setCart]</span> = useState&lt;CartItem[]&gt;([]);</div>
          <div className="pl-4 text-orange-400">useEffect(() =&gt; {'{'}</div>
          <div className="pl-8 text-white/40">// Sub-second cache synchronization</div>
          <div className="pl-8 text-white">syncWithStripeCheckout(cart);</div>
          <div className="pl-4 text-orange-400">{'}'}, [cart]);</div>
          <div className="text-amber-400">{'}'}</div>
        </div>
      </section>

      {/* SECTION 4: INTEGRATIONS DIRECTORY */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-white text-center uppercase tracking-tight">
          Third-Party APIs & Gateway Integrations
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-semibold">
          {[
            'Stripe Payments',
            'PayPal Express',
            'Mapbox GL 3D',
            'Gemini AI API',
            'Twilio SMS',
            'Firebase Auth',
            'PostgreSQL / Drizzle',
            'Shopify Headless'
          ].map((api) => (
            <div key={api} className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center gap-2 text-white/90">
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              <span>{api}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: CTA */}
      <section className="p-8 sm:p-10 rounded-3xl bg-[#131316] border border-amber-500/30 text-white text-center space-y-4 shadow-2xl">
        <h2 className="text-2xl font-extrabold uppercase tracking-tight text-white">Ready to Discuss Your Technical Requirements?</h2>
        <p className="text-xs text-white/60">Schedule a 1-on-1 technical discovery session with Ehtisham Sarwar.</p>
        <button
          onClick={() => onNavigate('contact')}
          className="px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 text-black font-extrabold text-xs uppercase tracking-widest shadow-xl shadow-amber-500/20 hover:scale-105 transition-all cursor-pointer"
        >
          Book Technical Discovery Call
        </button>
      </section>
    </div>
  );
};
