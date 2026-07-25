import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { BookingWidget } from '../components/BookingWidget';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, Sparkles, MessageSquare, ShieldCheck, Video } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceType, setServiceType] = useState('E-Commerce Website');
  const [budget, setBudget] = useState('$1,000 - $2,500');
  const [message, setMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20 bg-[#0A0A0B] text-white">
      {/* SECTION 1: CONTACT HEADER & DIRECT BADGES */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 font-bold text-xs uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5" /> Start Your Website Project
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase">
          Let’s Build Something Extraordinary
        </h1>
        <p className="text-sm sm:text-base text-white/60 leading-relaxed">
          Have a new project, need a website makeover, or want to calculate a custom estimate? Fill out the form below or email Ehtisham Sarwar directly.
        </p>

        {/* Direct Contact Badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href="mailto:shamgee40@gmail.com"
            className="p-4 rounded-2xl bg-[#131316] border border-white/10 shadow-md flex items-center gap-3 hover:border-amber-500/50 transition-colors"
          >
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center border border-amber-500/20">
              <Mail className="w-5 h-5" />
            </div>
            <div className="text-left">
              <span className="text-[10px] text-white/40 block uppercase font-mono">Email Directly</span>
              <span className="text-xs font-bold text-amber-400">shamgee40@gmail.com</span>
            </div>
          </a>

          <div className="p-4 rounded-2xl bg-[#131316] border border-white/10 shadow-md flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center border border-amber-500/20">
              <Clock className="w-5 h-5" />
            </div>
            <div className="text-left">
              <span className="text-[10px] text-white/40 block uppercase font-mono">Response Time</span>
              <span className="text-xs font-bold text-amber-400">Guaranteed &lt; 2 Hours</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: INTERACTIVE CONTACT FORM WITH CONFETTI */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-7 p-8 sm:p-10 rounded-2xl bg-[#131316] border border-white/10 shadow-2xl space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-white uppercase tracking-tight">
              Send a Direct Inquiry
            </h2>
            <p className="text-xs text-white/50 mt-1">
              Fill in your project details and receive a tailored technical proposal.
            </p>
          </div>

          {formSubmitted ? (
            <div className="p-8 rounded-2xl bg-amber-500/20 border border-amber-500/40 text-amber-300 text-center space-y-3 animate-fade-in">
              <CheckCircle2 className="w-12 h-12 mx-auto stroke-[3] text-amber-400" />
              <h3 className="text-2xl font-extrabold uppercase tracking-tight text-white">Inquiry Sent Successfully!</h3>
              <p className="text-xs text-white/80 max-w-md mx-auto">
                Thank you <span className="font-bold text-amber-400">{name}</span>! Ehtisham Sarwar has received your inquiry for <span className="font-bold text-amber-400">{serviceType}</span> and will respond to <span className="font-bold underline text-amber-400">{email}</span> within 2 hours.
              </p>
              <button
                type="button"
                onClick={() => setFormSubmitted(false)}
                className="mt-4 px-6 py-2.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 text-black font-extrabold text-xs uppercase tracking-widest cursor-pointer"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-white/70 uppercase tracking-wider block mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Smith"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-white/5 border border-white/10 text-white focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-white/70 uppercase tracking-wider block mb-1">
                    Your Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="john@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-white/5 border border-white/10 text-white focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-white/70 uppercase tracking-wider block mb-1">
                    Project Category *
                  </label>
                  <select
                    value={serviceType}
                    onChange={(e) => setServiceType(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-[#1A1A1E] border border-white/10 text-white focus:outline-none focus:border-amber-500"
                  >
                    <option value="E-Commerce Website">E-Commerce Store (Stripe/PayPal)</option>
                    <option value="Real Estate Portal">Real Estate & Property Portal</option>
                    <option value="Corporate Services Web">Corporate Services Website</option>
                    <option value="SaaS & Custom Web App">SaaS & Custom Web App</option>
                    <option value="Speed & SEO Optimization">Speed & SEO Optimization</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-white/70 uppercase tracking-wider block mb-1">
                    Estimated Budget Range
                  </label>
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-[#1A1A1E] border border-white/10 text-white focus:outline-none focus:border-amber-500"
                  >
                    <option value="$500 - $1,000">$500 - $1,000 (Starter)</option>
                    <option value="$1,000 - $2,500">$1,000 - $2,500 (Pro E-Commerce / Portal)</option>
                    <option value="$2,500 - $5,000">$2,500 - $5,000 (Full-Stack SaaS)</option>
                    <option value="$5,000+">$5,000+ (Custom Enterprise)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-white/70 uppercase tracking-wider block mb-1">
                  Project Details & Goals *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Describe your website requirements, target deadline, or reference websites..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full p-3.5 rounded-xl text-xs bg-white/5 border border-white/10 text-white focus:outline-none focus:border-amber-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 text-black font-extrabold text-xs uppercase tracking-widest shadow-xl shadow-amber-500/20 hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer transition-all"
              >
                <Send className="w-4 h-4" /> Send Message to Ehtisham Sarwar
              </button>
            </form>
          )}
        </div>

        {/* Right Info Sidebar */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-8 rounded-2xl bg-[#131316] text-white border border-white/10 shadow-xl space-y-6">
            <h3 className="text-xl font-bold text-white uppercase tracking-tight">Direct Communication</h3>

            <div className="space-y-4 text-xs">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block uppercase font-mono">Email</span>
                  <span className="text-amber-400 font-mono">shamgee40@gmail.com</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block uppercase font-mono">Availability</span>
                  <span className="text-white/60">Serving Clients Globally Across USA, UK, UAE, Europe & PK</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block uppercase font-mono">Privacy Guarantee</span>
                  <span className="text-white/60">Your ideas and contact details are 100% confidential.</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300">
              <span className="font-bold block mb-1">⚡ Need an Urgent Website?</span>
              Express 4-day delivery is available for urgent deadlines!
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: CALENDAR BOOKING WIDGET */}
      <section className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="inline-block px-3 py-1 bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[10px] uppercase tracking-widest rounded font-bold">
            Video Call
          </span>
          <h2 className="text-3xl font-bold text-white uppercase tracking-tight">
            Book a Free 15-Minute Video Discovery Call
          </h2>
        </div>

        <BookingWidget />
      </section>

      {/* SECTION 4: GLOBAL WORKING TIMEZONES */}
      <section className="p-8 rounded-2xl bg-[#131316] text-white border border-white/10 text-center space-y-4">
        <h3 className="text-lg font-bold uppercase tracking-tight text-white">Flexible Global Working Hours</h3>
        <p className="text-xs text-white/50 max-w-xl mx-auto">
          Ehtisham Sarwar accommodates North American, European, Middle Eastern, and Australian business hours for seamless team communication.
        </p>
      </section>

      {/* SECTION 5: DIRECT ASSISTANT FOOTER CALLOUT */}
      <section className="p-8 rounded-2xl bg-[#131316] border border-amber-500/30 text-white text-center space-y-3">
        <MessageSquare className="w-8 h-8 mx-auto text-amber-400" />
        <h3 className="text-xl font-bold uppercase tracking-tight text-white">Have a Quick Question Right Now?</h3>
        <p className="text-xs text-white/60">Click the floating chat button in the bottom right corner to chat with Ehtisham’s AI assistant 24/7!</p>
      </section>
    </div>
  );
};
