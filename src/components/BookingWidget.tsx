import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Calendar, Clock, Video, CheckCircle2, User, Mail, MessageSquare, Sparkles } from 'lucide-react';

export const BookingWidget: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string>('Tomorrow');
  const [selectedSlot, setSelectedSlot] = useState<string>('10:00 AM EST');
  const [topic, setTopic] = useState<string>('New E-Commerce Website Project');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [confirmed, setConfirmed] = useState(false);

  const dates = ['Today (Express)', 'Tomorrow', 'In 2 Days', 'In 3 Days', 'Next Monday'];
  const slots = ['09:00 AM EST', '10:30 AM EST', '02:00 PM EST', '04:30 PM EST', '07:00 PM EST'];
  const topics = [
    'New E-Commerce Website Project',
    'Real Estate & Property Portal',
    'Services / Corporate Web Revamp',
    'SaaS & Custom Web Software',
    'Website Speed & SEO Optimization'
  ];

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setConfirmed(true);
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.6 }
    });
  };

  return (
    <div className="w-full max-w-4xl mx-auto rounded-2xl bg-[#131316] border border-white/10 shadow-2xl overflow-hidden text-white">
      <div className="p-6 sm:p-8 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-black flex flex-wrap items-center justify-between gap-4">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest bg-black/20 text-black backdrop-blur-md">
            <Video className="w-3.5 h-3.5" /> Free 15-Min Strategy Session
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight mt-2">
            Schedule a Video Discovery Call
          </h2>
          <p className="text-black/80 font-semibold text-xs sm:text-sm mt-1">
            Discuss your website goals, receive technical advice, and get a tailored roadmap & quote.
          </p>
        </div>
        <div className="flex items-center gap-2 bg-black/10 backdrop-blur-md px-4 py-2 rounded-xl border border-black/10 text-xs font-extrabold text-black">
          <Clock className="w-4 h-4 text-black" /> Response Time Guarantee: &lt; 2 Hours
        </div>
      </div>

      <div className="p-6 sm:p-10">
        {confirmed ? (
          <div className="p-8 rounded-2xl bg-amber-500/20 border border-amber-500/40 text-amber-300 text-center space-y-4 animate-scale-up">
            <div className="w-16 h-16 rounded-full bg-amber-500/20 border border-amber-500/40 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10 text-amber-400 stroke-[3]" />
            </div>
            <h3 className="text-2xl font-black text-white uppercase tracking-tight">Strategy Session Confirmed!</h3>
            <p className="text-sm text-white/80 max-w-md mx-auto leading-relaxed">
              Google Meet video call link has been generated and emailed to <span className="font-bold underline text-amber-400">{email}</span> for <span className="font-bold text-amber-400">{selectedDate} at {selectedSlot}</span>.
            </p>
            <div className="p-4 rounded-xl bg-black/40 border border-white/10 text-xs text-amber-400 inline-block font-mono">
              Topic: {topic}
            </div>
            <br />
            <button
              onClick={() => setConfirmed(false)}
              className="mt-4 px-6 py-2.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 text-black font-extrabold text-xs uppercase tracking-widest cursor-pointer"
            >
              Book Another Meeting
            </button>
          </div>
        ) : (
          <form onSubmit={handleBooking} className="space-y-6">
            {/* Topic Selector */}
            <div>
              <label className="text-xs font-bold text-white/80 uppercase tracking-wider block mb-2">
                1. Select Meeting Topic
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                {topics.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTopic(t)}
                    className={`p-3 rounded-xl border text-xs font-semibold text-left transition-all cursor-pointer ${topic === t ? 'border-amber-500 bg-amber-500/10 text-amber-300 ring-1 ring-amber-500/30' : 'border-white/10 text-white/70 hover:border-white/20'}`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Date & Slot Picker */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-xs font-bold text-white/80 uppercase tracking-wider block mb-2">
                  2. Select Preferred Day
                </label>
                <div className="space-y-2">
                  {dates.map((d) => (
                    <button
                      key={d}
                      type="button"
                      onClick={() => setSelectedDate(d)}
                      className={`w-full p-3 rounded-xl border text-xs font-semibold flex items-center justify-between transition-all cursor-pointer ${selectedDate === d ? 'border-amber-500 bg-amber-500/10 text-amber-300' : 'border-white/10 text-white/60'}`}
                    >
                      <span className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-amber-400" /> {d}
                      </span>
                      {selectedDate === d && <CheckCircle2 className="w-4 h-4 text-amber-400" />}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-white/80 uppercase tracking-wider block mb-2">
                  3. Select Time Slot
                </label>
                <div className="space-y-2">
                  {slots.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setSelectedSlot(s)}
                      className={`w-full p-3 rounded-xl border text-xs font-semibold flex items-center justify-between transition-all cursor-pointer ${selectedSlot === s ? 'border-amber-500 bg-amber-500/10 text-amber-300' : 'border-white/10 text-white/60'}`}
                    >
                      <span className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-amber-400" /> {s}
                      </span>
                      {selectedSlot === s && <CheckCircle2 className="w-4 h-4 text-amber-400" />}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
              <div>
                <label className="text-xs font-bold text-white/70 block mb-1 uppercase tracking-wider">
                  Your Full Name
                </label>
                <div className="relative">
                  <User className="w-4 h-4 absolute left-3 top-3 text-white/40" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Smith"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl text-xs bg-white/5 border border-white/10 text-white focus:border-amber-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-white/70 block mb-1 uppercase tracking-wider">
                  Your Email Address
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 absolute left-3 top-3 text-white/40" />
                  <input
                    type="email"
                    required
                    placeholder="john@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl text-xs bg-white/5 border border-white/10 text-white focus:border-amber-500 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 text-black font-extrabold text-xs uppercase tracking-widest shadow-xl shadow-amber-500/20 transition-all cursor-pointer flex items-center justify-center gap-2 hover:scale-[1.02]"
            >
              <Video className="w-5 h-5" /> Confirm & Get Google Meet Invite
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
