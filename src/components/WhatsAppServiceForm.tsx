import React, { useState } from 'react';
import { Send, CheckCircle2, Sparkles, ShieldCheck, Clock, MessageSquare, PhoneCall, User, Mail, DollarSign, Layers } from 'lucide-react';

interface WhatsAppServiceFormProps {
  defaultService?: string;
}

export const WhatsAppServiceForm: React.FC<WhatsAppServiceFormProps> = ({ defaultService }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(defaultService || 'E-Commerce Platform');
  const [budget, setBudget] = useState('$600 - $1,200');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const whatsappNumber = '923075119035';

  const servicesList = [
    'E-Commerce & Online Shop Platform',
    'Real Estate & Property Search Portal',
    'Corporate & Business Services Website',
    'Custom SaaS & Web Application',
    'Clinic & Medical Healthcare Web System',
    'Hotels & Booking Web Portal',
    '3D Interactive Web Experience',
    'Website Speed & SEO Audit / Tuning'
  ];

  const budgetOptions = [
    '$300 - $600 (Basic Website)',
    '$600 - $1,200 (Standard Business / Shop)',
    '$1,200 - $2,500 (Advanced SaaS / Portal)',
    '$2,500+ (Enterprise Custom Solution)'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedMessage = `*NEW WEBSITE INQUIRY - EHTISHAM SARWAR PORTFOLIO*
----------------------------------------
👤 *Client Name:* ${name.trim()}
📧 *Email:* ${email.trim()}
📱 *Phone/WhatsApp:* ${phone.trim() || 'Not provided'}
💼 *Selected Service:* ${service}
💰 *Estimated Budget:* ${budget}
📝 *Project Scope & Details:*
${message.trim() || 'No additional details provided.'}
----------------------------------------
_Sent via Ehtisham Sarwar Web Portfolio_`;

    const encodedText = encodeURIComponent(formattedMessage);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

    setSubmitted(true);
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');

    setTimeout(() => {
      setSubmitted(false);
    }, 6000);
  };

  return (
    <section className="p-6 sm:p-10 rounded-3xl bg-[#131316] border border-amber-500/30 text-white shadow-2xl relative overflow-hidden my-8">
      {/* Background Accent Gradients */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto space-y-8">
        {/* Form Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-extrabold text-xs uppercase tracking-widest">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Direct WhatsApp Inquiry Form</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight">
            Get Instant Project Quote On WhatsApp
          </h2>
          
          <p className="text-xs sm:text-sm text-white/60 max-w-2xl mx-auto leading-relaxed">
            Fill out your project details below and hit submit to send your requirement directly to Ehtisham Sarwar's personal WhatsApp (<span className="text-emerald-400 font-bold">+92 307 5119035</span>) for immediate consultation.
          </p>
        </div>

        {/* Success Banner */}
        {submitted && (
          <div className="p-4 rounded-2xl bg-emerald-500/20 border border-emerald-500/50 text-emerald-300 flex items-center justify-center gap-3 text-xs sm:text-sm font-bold uppercase tracking-wider animate-fade-in shadow-lg">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
            <span>Opening WhatsApp! Your project details have been formatted for +92 307 5119035.</span>
          </div>
        )}

        {/* The Form */}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-xs">
          {/* Client Name */}
          <div className="space-y-1.5">
            <label className="block text-white/80 font-bold uppercase tracking-wider text-[11px] flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-amber-400" />
              <span>Your Full Name *</span>
            </label>
            <input
              type="text"
              required
              placeholder="e.g. John Smith"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-emerald-500 text-xs transition-colors"
            />
          </div>

          {/* Client Email */}
          <div className="space-y-1.5">
            <label className="block text-white/80 font-bold uppercase tracking-wider text-[11px] flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-amber-400" />
              <span>Your Email Address *</span>
            </label>
            <input
              type="email"
              required
              placeholder="e.g. john@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-emerald-500 text-xs transition-colors"
            />
          </div>

          {/* WhatsApp / Phone Number */}
          <div className="space-y-1.5">
            <label className="block text-white/80 font-bold uppercase tracking-wider text-[11px] flex items-center gap-1.5">
              <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp / Phone Number</span>
            </label>
            <input
              type="tel"
              placeholder="e.g. +1 555 123 4567"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-emerald-500 text-xs transition-colors"
            />
          </div>

          {/* Selected Service */}
          <div className="space-y-1.5">
            <label className="block text-white/80 font-bold uppercase tracking-wider text-[11px] flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-amber-400" />
              <span>Select Service Required *</span>
            </label>
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-black/80 border border-white/10 text-white focus:outline-none focus:border-emerald-500 text-xs transition-colors cursor-pointer"
            >
              {servicesList.map((srv) => (
                <option key={srv} value={srv} className="bg-[#131316] text-white">
                  {srv}
                </option>
              ))}
            </select>
          </div>

          {/* Budget Range */}
          <div className="sm:col-span-2 space-y-1.5">
            <label className="block text-white/80 font-bold uppercase tracking-wider text-[11px] flex items-center gap-1.5">
              <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
              <span>Estimated Project Budget</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
              {budgetOptions.map((opt) => (
                <button
                  type="button"
                  key={opt}
                  onClick={() => setBudget(opt)}
                  className={`px-3 py-2.5 rounded-xl border text-left font-semibold text-[11px] transition-all cursor-pointer ${
                    budget === opt
                      ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300 shadow-md'
                      : 'bg-black/40 border-white/10 text-white/60 hover:border-white/20'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          {/* Message / Requirements */}
          <div className="sm:col-span-2 space-y-1.5">
            <label className="block text-white/80 font-bold uppercase tracking-wider text-[11px] flex items-center gap-1.5">
              <MessageSquare className="w-3.5 h-3.5 text-amber-400" />
              <span>Project Goals, Required Pages or Features</span>
            </label>
            <textarea
              rows={3}
              placeholder="Tell us about your project vision, target audience, deadline, or required integrations..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-emerald-500 text-xs transition-colors resize-none"
            />
          </div>

          {/* Submit Button */}
          <div className="sm:col-span-2 pt-2">
            <button
              type="submit"
              className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 text-black font-black text-xs sm:text-sm uppercase tracking-widest shadow-xl shadow-emerald-500/20 hover:scale-[1.01] transition-all cursor-pointer flex items-center justify-center gap-2 group"
            >
              <svg className="w-5 h-5 fill-current text-black group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              <span>Submit & Open WhatsApp (+92 307 5119035)</span>
            </button>
          </div>
        </form>

        {/* Guarantees footer */}
        <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-white/50">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>100% Confidential Project Consultation</span>
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-emerald-400" />
            <span>Typical Response Time: &lt; 15 Minutes</span>
          </span>
        </div>
      </div>
    </section>
  );
};
