import React, { useState } from 'react';
import { SERVICES_DATA, FAQ_ITEMS } from '../data/servicesData';
import { CheckCircle2, Search, ArrowRight, ShieldCheck, Zap, Sparkles, Clock, Calculator, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { WhatsAppServiceForm } from '../components/WhatsAppServiceForm';

interface ServicesPageProps {
  onNavigate: (page: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [faqQuery, setFaqQuery] = useState('');

  const filteredFaqs = FAQ_ITEMS.filter(
    (item) =>
      item.question.toLowerCase().includes(faqQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(faqQuery.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20 bg-[#0A0A0B] text-white">
      {/* SECTION 1: SERVICES HEADER & SUMMARY */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 font-bold text-xs uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5" /> High-Performance Web Architecture
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase">
          Web Development Services
        </h1>
        <p className="text-sm sm:text-base text-white/60 leading-relaxed">
          From custom e-commerce checkout platforms to luxury property search portals, every service is built with cutting-edge React tech, sub-second speeds, and 100% mobile responsiveness.
        </p>
      </section>

      {/* SECTION 2: 6 DETAILED SERVICE CARDS */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES_DATA.map((service) => (
          <div
            key={service.id}
            className={`p-8 rounded-2xl bg-[#131316] border transition-all flex flex-col justify-between ${service.popular ? 'border-amber-500/80 shadow-2xl ring-1 ring-amber-500/30' : 'border-white/10 shadow-lg hover:border-amber-500/40'}`}
          >
            <div className="space-y-5">
              {service.popular && (
                <span className="inline-block px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest rounded bg-gradient-to-r from-amber-500 to-orange-600 text-black shadow-md">
                  Most Requested
                </span>
              )}

              <h2 className="text-2xl font-bold text-white tracking-tight">
                {service.title}
              </h2>

              <p className="text-xs text-white/50 leading-relaxed">
                {service.fullDesc}
              </p>

              <div className="space-y-2.5 pt-2">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-400 block">
                  Included Deliverables:
                </span>
                <ul className="space-y-2 text-xs text-white/80">
                  {service.deliverables.map((del, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2">
                <span className="text-[10px] font-bold text-white/40 block uppercase tracking-wider">Ideal Business Types:</span>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {service.idealFor.map((tag) => (
                    <span key={tag} className="px-2.5 py-0.5 text-[10px] rounded bg-white/5 border border-white/10 text-white/70">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
              <div>
                <span className="text-[10px] text-white/40 block font-mono">Timeframe: {service.estimatedTime}</span>
                <span className="text-xl font-bold text-amber-400">From ${service.startingPrice}</span>
              </div>
              <button
                onClick={() => onNavigate('pricing')}
                className="px-4 py-2.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 text-black text-xs font-extrabold uppercase tracking-widest shadow-md hover:scale-105 transition-all cursor-pointer"
              >
                Get Quote
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* WHATSAPP DIRECT INQUIRY FORM */}
      <WhatsAppServiceForm />

      {/* SECTION 3: ARCHITECTURE COMPARISON MATRIX */}
      <section className="p-8 sm:p-10 rounded-2xl bg-[#131316] text-white border border-white/10 space-y-6 shadow-2xl">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Technology Benchmarks</span>
          <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white">Why Custom React/Next.js Beats Legacy Systems</h2>
          <p className="text-xs text-white/40">Honest comparison to help you choose the ideal foundation for your business.</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-white/10 text-white/40 uppercase font-mono">
                <th className="p-3">Feature Metric</th>
                <th className="p-3 text-amber-400 font-bold">Custom React / Next.js (Ehtisham Speciality)</th>
                <th className="p-3">Standard WordPress Theme</th>
                <th className="p-3">Generic Shopify Theme</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10 text-white/80">
              <tr>
                <td className="p-3 font-bold text-white">Page Load Speed</td>
                <td className="p-3 text-amber-400 font-bold">⚡ Sub-second (&lt; 0.8s)</td>
                <td className="p-3 text-rose-400">Sluggish (3.5s - 6s)</td>
                <td className="p-3 text-amber-300">Average (1.8s - 2.5s)</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-white">Security & Vulnerability</td>
                <td className="p-3 text-amber-400 font-bold">🛡️ High Security (No plugin exploits)</td>
                <td className="p-3 text-rose-400">High Risk (Plugin exploits)</td>
                <td className="p-3 text-emerald-400">Good Security</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-white">Custom 3D & Micro-Animations</td>
                <td className="p-3 text-amber-400 font-bold">✨ Unlimited 3D CSS & Physics</td>
                <td className="p-3 text-rose-400">Extremely Limited</td>
                <td className="p-3 text-amber-300">Basic Sliders</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-white">Google SEO Performance Score</td>
                <td className="p-3 text-amber-400 font-bold">🎯 95 - 100/100 Guarantee</td>
                <td className="p-3 text-rose-400">50 - 70/100 Average</td>
                <td className="p-3 text-amber-300">75 - 85/100 Average</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SECTION 4: 5-STAGE DEVELOPMENT PROCESS */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="inline-block px-3 py-1 bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[10px] uppercase tracking-widest rounded font-bold">
            How We Work
          </span>
          <h2 className="text-3xl font-bold text-white uppercase tracking-tight">
            5-Step Delivery Process
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {[
            { step: '01', title: 'Discovery & Goals', desc: 'Requirements, audience & wireframing.' },
            { step: '02', title: 'UI & 3D Design', desc: 'Interactive layout & brand aesthetics.' },
            { step: '03', title: 'Clean Coding', desc: 'Building in React, Next.js, and TypeScript.' },
            { step: '04', title: 'Speed & SEO Audit', desc: 'Lighthouse 95+ score tuning.' },
            { step: '05', title: 'Launch & Care', desc: 'Domain setup, SSL & 30-day support.' }
          ].map((s) => (
            <div key={s.step} className="p-5 rounded-2xl bg-[#131316] border border-white/10 shadow-md space-y-2">
              <span className="text-2xl font-black text-amber-400 font-mono">{s.step}</span>
              <h3 className="text-sm font-bold text-white">{s.title}</h3>
              <p className="text-xs text-white/50 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: FREQUENTLY ASKED QUESTIONS ACCORDION */}
      <section className="space-y-8 max-w-3xl mx-auto">
        <div className="text-center space-y-3">
          <span className="inline-block px-3 py-1 bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[10px] uppercase tracking-widest rounded font-bold">
            Client FAQ
          </span>
          <h2 className="text-3xl font-bold text-white uppercase tracking-tight">
            Frequently Asked Questions
          </h2>

          <div className="relative max-w-md mx-auto pt-2">
            <Search className="w-4 h-4 absolute left-3 top-5 text-white/40" />
            <input
              type="text"
              value={faqQuery}
              onChange={(e) => setFaqQuery(e.target.value)}
              placeholder="Search FAQ questions..."
              className="w-full pl-9 pr-4 py-2.5 text-xs rounded-full bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-amber-500"
            />
          </div>
        </div>

        <div className="space-y-3">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#131316] border border-white/10 shadow-md overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-5 text-left font-bold text-sm text-white flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span>{faq.question}</span>
                  {isOpen ? <ChevronUp className="w-5 h-5 text-amber-400" /> : <ChevronDown className="w-5 h-5 text-white/40" />}
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs text-white/70 leading-relaxed border-t border-white/5 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
