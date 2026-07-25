import React from 'react';
import { PRICING_PLANS } from '../data/servicesData';
import { ProjectCalculator } from '../components/ProjectCalculator';
import { Check, Sparkles, ShieldCheck, Clock, HelpCircle, Send } from 'lucide-react';

interface PricingPageProps {
  onNavigate: (page: string) => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20 bg-[#0A0A0B] text-white">
      {/* SECTION 1: PRICING HEADER & TIERS */}
      <section className="space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 font-bold text-xs uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" /> Transparent & Fixed Pricing
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase">
            Fair Investments for World-Class Web Engineering
          </h1>
          <p className="text-sm sm:text-base text-white/60">
            No hidden fees. Every package includes 100% mobile responsiveness, 3D card tilt effects, and post-launch developer care.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`p-8 rounded-2xl bg-[#131316] border transition-all flex flex-col justify-between ${
                plan.popular
                  ? 'border-amber-500/80 shadow-2xl ring-1 ring-amber-500/30 relative'
                  : 'border-white/10 shadow-lg hover:border-amber-500/40'
              }`}
            >
              <div className="space-y-6">
                {plan.popular && (
                  <span className="inline-block px-3.5 py-1 text-[10px] font-extrabold uppercase tracking-widest rounded bg-gradient-to-r from-amber-500 to-orange-600 text-black shadow-md">
                    Most Popular Choice
                  </span>
                )}

                <div>
                  <h2 className="text-2xl font-bold text-white uppercase tracking-tight">
                    {plan.name}
                  </h2>
                  <p className="text-xs text-white/50 mt-1">
                    {plan.tagline}
                  </p>
                </div>

                <div className="flex items-baseline gap-1 pt-2">
                  <span className="text-4xl sm:text-5xl font-extrabold text-white">${plan.price}</span>
                  <span className="text-xs text-amber-400 font-mono font-bold">/ {plan.period}</span>
                </div>

                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-white/80 space-y-1">
                  <div>Delivery: <span className="font-bold text-amber-400">{plan.deliveryDays}</span></div>
                  <div>Revisions: <span className="font-bold text-amber-400">{plan.revisionLimit}</span></div>
                </div>

                <div className="space-y-3 pt-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block">Included Deliverables:</span>
                  <ul className="space-y-2.5 text-xs text-white/80">
                    {plan.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5 stroke-[3]" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <button
                onClick={() => onNavigate('contact')}
                className={`w-full py-3.5 mt-8 rounded-full font-extrabold text-xs uppercase tracking-widest shadow-md transition-all cursor-pointer ${
                  plan.popular
                    ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-black shadow-amber-500/20 hover:scale-105'
                    : 'border border-amber-500/40 text-amber-400 hover:bg-amber-500 hover:text-black'
                }`}
              >
                Choose {plan.name}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 2: INTERACTIVE PROJECT COST ESTIMATOR WIDGET */}
      <section className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="inline-block px-3 py-1 bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[10px] uppercase tracking-widest rounded font-bold">
            Interactive Calculator
          </span>
          <h2 className="text-3xl font-bold text-white uppercase tracking-tight">
            Customize Your Project Estimate in Real-Time
          </h2>
        </div>

        <ProjectCalculator onQuoteSubmitted={() => onNavigate('contact')} />
      </section>

      {/* SECTION 3: PACKAGE COMPARISON MATRIX TABLE */}
      <section className="p-8 rounded-2xl bg-[#131316] border border-white/10 shadow-xl space-y-6">
        <h2 className="text-xl font-bold text-white uppercase tracking-tight">
          Package Feature Comparison Matrix
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-white/10 text-white/40 uppercase font-mono">
                <th className="p-3">Feature Metric</th>
                <th className="p-3">Starter ($699)</th>
                <th className="p-3 text-amber-400 font-bold">Pro ($1,499)</th>
                <th className="p-3">Enterprise ($2,800)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10 text-white/80">
              <tr>
                <td className="p-3 font-bold text-white">Pages Included</td>
                <td className="p-3">Up to 5</td>
                <td className="p-3 font-bold text-amber-400">Up to 10+</td>
                <td className="p-3 font-bold text-white">Unlimited</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-white">3D Card Effects & Motion</td>
                <td className="p-3">Basic</td>
                <td className="p-3 font-bold text-amber-400">Advanced 3D CSS</td>
                <td className="p-3 font-bold text-white">Custom 3D Models</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-white">Payment Gateway (Stripe/PayPal)</td>
                <td className="p-3 text-white/40">Optional Add-on</td>
                <td className="p-3 text-amber-400 font-bold">Included</td>
                <td className="p-3 text-amber-400 font-bold">Included</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-white">Post-Launch Support</td>
                <td className="p-3">14 Days</td>
                <td className="p-3 font-bold text-amber-400">30 Days</td>
                <td className="p-3 font-bold text-white">60 Days Priority</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SECTION 4: CARE & MAINTENANCE PLANS */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 rounded-2xl bg-[#131316] text-white border border-white/10 space-y-4 shadow-xl">
          <span className="text-xs font-mono text-amber-400 uppercase font-bold tracking-wider">Monthly Care</span>
          <h3 className="text-2xl font-bold uppercase tracking-tight text-white">Website Security & Maintenance Plan</h3>
          <p className="text-xs text-white/50 leading-relaxed">
            Keep your website running smoothly 24/7 with daily offsite backups, security scans, software updates, and developer care for <strong className="text-amber-400">$150/month</strong>.
          </p>
          <ul className="space-y-2 text-xs text-white/80">
            <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> 24/7 Uptime & Security Monitoring</li>
            <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Weekly Offsite Database Backups</li>
            <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Direct WhatsApp Developer Support</li>
          </ul>
        </div>

        <div className="p-8 rounded-2xl bg-[#131316] border border-amber-500/30 text-white shadow-2xl space-y-4 flex flex-col justify-between">
          <div>
            <span className="text-xs font-mono uppercase font-bold text-amber-400 tracking-wider">100% Risk Free</span>
            <h3 className="text-2xl font-bold uppercase tracking-tight text-white mt-1">Satisfaction & Speed Guarantee</h3>
            <p className="text-xs text-white/60 leading-relaxed mt-2">
              If your website does not achieve a 90+ Google PageSpeed rating or meet the approved wireframe requirements, I will continue refining it until you are 100% satisfied.
            </p>
          </div>

          <button
            onClick={() => onNavigate('contact')}
            className="w-full py-3.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 text-black font-extrabold text-xs uppercase tracking-widest shadow-lg shadow-amber-500/20 hover:scale-105 transition-all cursor-pointer"
          >
            Start Your Project Today
          </button>
        </div>
      </section>

      {/* SECTION 5: FAQs */}
      <section className="text-center space-y-4 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-white uppercase tracking-tight">Have Questions About Pricing?</h2>
        <p className="text-xs text-white/50">Contact Ehtisham Sarwar directly at shamgee40@gmail.com for a custom proposal.</p>
        <button
          onClick={() => onNavigate('contact')}
          className="px-8 py-3.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 text-black font-extrabold text-xs uppercase tracking-widest shadow-lg hover:scale-105 transition-all cursor-pointer"
        >
          Contact Ehtisham Directly
        </button>
      </section>
    </div>
  );
};
