import React, { useState } from 'react';
import { X, Send, CheckCheck, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const WhatsAppWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('Hi Ehtisham! I visited your portfolio and would like to discuss a website project.');

  const whatsappNumber = '923075119035';

  const quickPrompts = [
    'Hi Ehtisham! I need a Website Quote 💰',
    'Looking for E-Commerce / Online Store 🛍️',
    'Need Real Estate Property Portal 🏡',
    'Custom Full-Stack Web App 🚀',
  ];

  const handleStartChat = (customMsg?: string) => {
    const textToSubmit = customMsg || message;
    const encodedText = encodeURIComponent(textToSubmit);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedText}`, '_blank');
  };

  return (
    <>
      {/* Floating WhatsApp Toggle Button (Left Side) */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 z-40 p-3.5 sm:p-4 rounded-full bg-[#25D366] text-black shadow-2xl flex items-center justify-center gap-2.5 font-extrabold cursor-pointer border border-white/20 hover:bg-[#20ba5a] transition-all group"
        aria-label="Chat on WhatsApp"
      >
        <div className="relative">
          {/* WhatsApp SVG Icon */}
          <svg className="w-6 h-6 fill-current text-black" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
          </svg>
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-black"></span>
          </span>
        </div>
        <span className="hidden sm:inline text-xs uppercase tracking-widest font-black text-black">
          WhatsApp Us
        </span>
      </motion.button>

      {/* Floating WhatsApp Card Popup (Left Side) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed bottom-24 left-4 sm:left-6 z-50 w-[92vw] sm:w-[360px] rounded-2xl bg-[#0D1418] border border-white/10 shadow-2xl flex flex-col overflow-hidden text-white font-sans"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-[#075E54] to-[#128C7E] text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-amber-500 text-black font-black flex items-center justify-center text-sm border-2 border-white/20">
                    ES
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-[#25D366] border-2 border-[#075E54] rounded-full" />
                </div>
                <div>
                  <h4 className="font-extrabold text-sm leading-tight tracking-wide flex items-center gap-1.5">
                    <span>Ehtisham Sarwar</span>
                    <span className="text-[10px] px-1.5 py-0.2 rounded bg-black/30 text-amber-300 font-mono">Dev</span>
                  </h4>
                  <p className="text-[10px] text-emerald-100 flex items-center gap-1">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse"></span>
                    Online | Typically replies instantly
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-black/20 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Body Pattern Background */}
            <div className="p-4 space-y-4 bg-[#0B141A] min-h-[220px] max-h-[300px] overflow-y-auto relative">
              {/* WhatsApp background pattern tint */}
              <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#25D366_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

              {/* Automated Welcome Bubble */}
              <div className="relative z-10 max-w-[88%] p-3.5 rounded-2xl bg-[#202C33] text-white/90 text-xs leading-relaxed border border-white/5 rounded-tl-none shadow-md space-y-2">
                <div className="flex items-center justify-between gap-2 text-[10px] text-amber-400 font-bold border-b border-white/10 pb-1">
                  <span className="flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> Senior Web Developer
                  </span>
                  <span className="text-white/40 font-mono">Now</span>
                </div>
                <p>
                  Hello! 👋 Welcome to my portfolio. I'm available for new custom web development projects (+92 307 5119035).
                </p>
                <p className="text-white/70">
                  Select a topic below or type your message to chat directly on WhatsApp!
                </p>
                <div className="text-[9px] text-white/40 text-right flex items-center justify-end gap-1 font-mono">
                  <span>Delivered</span>
                  <CheckCheck className="w-3 h-3 text-[#53bdeb]" />
                </div>
              </div>

              {/* Quick Reply Chips */}
              <div className="relative z-10 space-y-1.5 pt-1">
                <p className="text-[10px] text-white/50 font-bold uppercase tracking-wider">Quick Topics:</p>
                <div className="flex flex-col gap-1.5">
                  {quickPrompts.map((prompt, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setMessage(prompt);
                        handleStartChat(prompt);
                      }}
                      className="text-left px-3 py-2 rounded-xl bg-[#111B21] border border-white/10 text-xs text-white/80 hover:bg-[#202C33] hover:text-[#25D366] hover:border-[#25D366]/40 transition-all cursor-pointer flex items-center justify-between group"
                    >
                      <span className="text-[11px] font-medium">{prompt}</span>
                      <Send className="w-3 h-3 text-white/30 group-hover:text-[#25D366] transition-colors" />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Input & Action Footer */}
            <div className="p-3 bg-[#111B21] border-t border-white/10 space-y-2">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleStartChat()}
                  placeholder="Type message for WhatsApp..."
                  className="flex-1 px-3.5 py-2 text-xs rounded-xl bg-[#202C33] text-white border border-white/10 focus:outline-none focus:border-[#25D366] placeholder:text-white/40"
                />
              </div>

              <button
                onClick={() => handleStartChat()}
                className="w-full py-2.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-black font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/20 transition-all cursor-pointer"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                <span>Start WhatsApp Chat</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
