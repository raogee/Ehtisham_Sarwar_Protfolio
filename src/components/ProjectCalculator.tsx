import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Calculator, Check, ArrowRight, Sparkles, Clock, ShieldCheck, Send } from 'lucide-react';

interface ProjectCalculatorProps {
  onQuoteSubmitted?: (data: any) => void;
}

export const ProjectCalculator: React.FC<ProjectCalculatorProps> = ({ onQuoteSubmitted }) => {
  const [projectType, setProjectType] = useState<'services' | 'ecommerce' | 'property' | 'saas'>('services');
  const [pageCount, setPageCount] = useState<number>(5);
  const [features, setFeatures] = useState<string[]>(['mobile', 'seo', '3d']);
  const [deliverySpeed, setDeliverySpeed] = useState<'standard' | 'express'>('standard');
  const [carePlan, setCarePlan] = useState<boolean>(true);

  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Price calculations
  const basePrices = {
    services: 500,
    ecommerce: 950,
    property: 1100,
    saas: 1400,
  };

  const featurePrices: Record<string, number> = {
    mobile: 0, // included
    seo: 150,
    '3d': 200,
    payments: 250,
    booking: 200,
    calculator: 250,
    cms: 300,
    ai: 350,
  };

  const featureLabels: Record<string, string> = {
    mobile: '100% Mobile & Tablet Responsive (Free)',
    seo: 'Technical SEO & 95+ Speed Tuning (+$150)',
    '3d': 'Interactive 3D Tilt Cards & Animations (+$200)',
    payments: 'Stripe / PayPal Gateway Integration (+$250)',
    booking: 'Appointment & Calendar Booking System (+$200)',
    calculator: 'Custom Price / Quote Estimator Calculator (+$250)',
    cms: 'Admin Panel / Easy Content Management (+$300)',
    ai: 'Gemini AI Assistant / Smart Feature API (+$350)',
  };

  const toggleFeature = (key: string) => {
    if (key === 'mobile') return; // mandatory included
    setFeatures((prev) =>
      prev.includes(key) ? prev.filter((f) => f !== key) : [...prev, key]
    );
  };

  const pagesPrice = (pageCount - 1) * 60;
  const featuresTotal = features.reduce((sum, f) => sum + (featurePrices[f] || 0), 0);
  const speedPrice = deliverySpeed === 'express' ? 300 : 0;
  const carePlanPrice = carePlan ? 150 : 0;

  const totalEstimate = basePrices[projectType] + pagesPrice + featuresTotal + speedPrice;

  const estimatedDeliveryDays = {
    services: deliverySpeed === 'express' ? 4 : 7,
    ecommerce: deliverySpeed === 'express' ? 7 : 12,
    property: deliverySpeed === 'express' ? 8 : 14,
    saas: deliverySpeed === 'express' ? 12 : 21,
  }[projectType];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });

    if (onQuoteSubmitted) {
      onQuoteSubmitted({
        clientName,
        clientEmail,
        projectType,
        pageCount,
        features,
        deliverySpeed,
        carePlan,
        totalEstimate
      });
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto rounded-2xl bg-[#131316] border border-white/10 shadow-2xl overflow-hidden text-white">
      <div className="p-6 sm:p-8 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-black flex flex-wrap items-center justify-between gap-4">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest bg-black/20 text-black backdrop-blur-md mb-2">
            <Calculator className="w-3.5 h-3.5" /> Instant Cost Estimator
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight">
            Calculate Your Website Investment
          </h2>
          <p className="text-black/80 text-xs sm:text-sm font-semibold mt-1">
            Configure your custom web requirements and get an instant transparent quote in real-time.
          </p>
        </div>
        <div className="text-right bg-black/10 backdrop-blur-md p-4 rounded-xl border border-black/10">
          <span className="text-xs text-black/70 block uppercase font-extrabold">Estimated Total</span>
          <span className="text-3xl sm:text-4xl font-extrabold text-black">${totalEstimate}</span>
          <span className="text-xs text-black/80 block font-bold mt-0.5">Est. Time: {estimatedDeliveryDays} Days</span>
        </div>
      </div>

      <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Options Form */}
        <div className="lg:col-span-7 space-y-6">
          {/* Step 1: Select Website Type */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-white/80 block mb-3">
              1. Choose Website Category
            </label>
            <div className="grid grid-cols-2 gap-3">
              {[
                { key: 'services', label: 'Services & Corporate', desc: 'Starting at $500' },
                { key: 'ecommerce', label: 'E-Commerce Store', desc: 'Starting at $950' },
                { key: 'property', label: 'Property & Real Estate', desc: 'Starting at $1,100' },
                { key: 'saas', label: 'SaaS & Web App', desc: 'Starting at $1,400' },
              ].map((type) => (
                <button
                  key={type.key}
                  type="button"
                  onClick={() => setProjectType(type.key as any)}
                  className={`p-3.5 rounded-xl text-left border transition-all cursor-pointer ${projectType === type.key ? 'border-amber-500 bg-amber-500/10 text-amber-400 ring-1 ring-amber-500/30' : 'border-white/10 hover:border-white/20 bg-white/5'}`}
                >
                  <span className="font-bold text-sm text-white block uppercase tracking-tight">
                    {type.label}
                  </span>
                  <span className="text-xs text-amber-400 font-mono font-bold">
                    {type.desc}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Number of Pages */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-bold uppercase tracking-wider text-white/80">
                2. Number of Custom Pages: <span className="text-amber-400 font-extrabold text-base">{pageCount} Pages</span>
              </label>
              <span className="text-xs text-white/40 font-mono">+$60 per additional page</span>
            </div>
            <input
              type="range"
              min="1"
              max="20"
              value={pageCount}
              onChange={(e) => setPageCount(parseInt(e.target.value))}
              className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-amber-500"
            />
            <div className="flex justify-between text-xs text-white/40 mt-1">
              <span>1 Page Landing</span>
              <span>5 Pages</span>
              <span>10 Pages</span>
              <span>20+ Pages</span>
            </div>
          </div>

          {/* Step 3: Add-on Features */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-white/80 block mb-3">
              3. Select Desired Features
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {Object.keys(featureLabels).map((key) => {
                const isSelected = features.includes(key);
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => toggleFeature(key)}
                    className={`flex items-center justify-between p-3 rounded-xl border text-xs font-medium text-left transition-all cursor-pointer ${isSelected ? 'border-amber-500/80 bg-amber-500/10 text-amber-300' : 'border-white/10 bg-white/5 text-white/70'}`}
                  >
                    <span className="truncate pr-2">{featureLabels[key]}</span>
                    <div className={`w-4 h-4 rounded flex items-center justify-center shrink-0 border ${isSelected ? 'bg-amber-500 border-amber-500 text-black' : 'border-white/30'}`}>
                      {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 4: Speed & Care Plan */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-white/80 block mb-2">
                Delivery Timeline
              </label>
              <div className="flex rounded-xl bg-white/5 p-1 border border-white/10">
                <button
                  type="button"
                  onClick={() => setDeliverySpeed('standard')}
                  className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${deliverySpeed === 'standard' ? 'bg-amber-500 text-black font-bold' : 'text-white/60'}`}
                >
                  Standard
                </button>
                <button
                  type="button"
                  onClick={() => setDeliverySpeed('express')}
                  className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${deliverySpeed === 'express' ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-black font-bold' : 'text-white/60'}`}
                >
                  ⚡ Express (+$300)
                </button>
              </div>
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-white/80 block mb-2">
                1st Month Care & Backups
              </label>
              <button
                type="button"
                onClick={() => setCarePlan(!carePlan)}
                className={`w-full py-2 px-3 rounded-xl border text-xs font-semibold flex items-center justify-between transition-all cursor-pointer ${carePlan ? 'border-amber-500/80 bg-amber-500/10 text-amber-300' : 'border-white/10 text-white/50'}`}
              >
                <span>Include Care & Security</span>
                <span>{carePlan ? 'Included (+$150/mo)' : 'No thanks'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Breakdown & Submission Form */}
        <div className="lg:col-span-5 flex flex-col justify-between p-6 rounded-2xl bg-white/5 border border-white/10">
          <div>
            <h3 className="text-base font-bold text-white uppercase tracking-tight mb-4 pb-3 border-b border-white/10 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" /> Estimate Summary
            </h3>

            <div className="space-y-2.5 text-xs text-white/80 font-medium">
              <div className="flex justify-between">
                <span>Base Category ({projectType.toUpperCase()}):</span>
                <span className="font-mono font-bold text-amber-400">${basePrices[projectType]}</span>
              </div>
              <div className="flex justify-between">
                <span>Custom Pages ({pageCount} Pages):</span>
                <span className="font-mono font-bold text-amber-400">${pagesPrice}</span>
              </div>
              <div className="flex justify-between">
                <span>Selected Add-ons ({features.length}):</span>
                <span className="font-mono font-bold text-amber-400">${featuresTotal}</span>
              </div>
              {deliverySpeed === 'express' && (
                <div className="flex justify-between text-amber-400">
                  <span>Express Priority Speed:</span>
                  <span className="font-mono font-bold">+$300</span>
                </div>
              )}
              <div className="pt-3 border-t border-white/10 flex justify-between text-base font-extrabold text-white">
                <span>Estimated Price:</span>
                <span className="text-amber-400 font-mono">${totalEstimate}</span>
              </div>
            </div>

            <div className="mt-6 p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300 space-y-1">
              <div className="flex items-center gap-1.5 font-bold">
                <Clock className="w-3.5 h-3.5" /> Estimated Delivery: {estimatedDeliveryDays} Business Days
              </div>
              <div className="flex items-center gap-1.5 font-bold text-amber-400">
                <ShieldCheck className="w-3.5 h-3.5" /> 100% Satisfaction Guarantee Included
              </div>
            </div>
          </div>

          {/* Submission Form */}
          {submitted ? (
            <div className="mt-6 p-6 rounded-2xl bg-amber-500/20 border border-amber-500/40 text-amber-300 text-center space-y-2 animate-fade-in">
              <Check className="w-10 h-10 mx-auto stroke-[3] text-amber-400" />
              <h4 className="font-bold text-lg text-white uppercase tracking-tight">Quote Request Submitted!</h4>
              <p className="text-xs text-white/80">
                Ehtisham Sarwar will review your requirements and respond to {clientEmail || 'your email'} within 2 hours.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-3 text-xs underline font-semibold text-amber-400 hover:opacity-80"
              >
                Recalculate another quote
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 space-y-3 pt-4 border-t border-white/10">
              <input
                type="text"
                required
                placeholder="Your Name / Business Name"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-black/40 border border-white/10 text-white focus:outline-none focus:border-amber-500"
              />
              <input
                type="email"
                required
                placeholder="Your Work Email Address"
                value={clientEmail}
                onChange={(e) => setClientEmail(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-black/40 border border-white/10 text-white focus:outline-none focus:border-amber-500"
              />
              <button
                type="submit"
                className="w-full py-3.5 px-4 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 text-black text-xs font-extrabold uppercase tracking-widest shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 transition-all cursor-pointer hover:scale-[1.02]"
              >
                <Send className="w-4 h-4" /> Lock In This Quote with Ehtisham
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
