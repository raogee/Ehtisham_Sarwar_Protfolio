import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Sparkles, Phone, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  time: string;
}

interface ChatAssistantProps {
  onBookCallClick?: () => void;
}

export const ChatAssistant: React.FC<ChatAssistantProps> = ({ onBookCallClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'bot',
      text: "👋 Hi! I'm Ehtisham Sarwar's AI Assistant. How can I help you today? Ask me about project pricing, timelines, technology stacks, or Ehtisham's 5+ years of experience!",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const quickPrompts = [
    'What are your project rates?',
    'Show me e-commerce experience',
    'How long does a website take?',
    'Book a discovery call'
  ];

  const handleSend = (textToSend?: string) => {
    const query = textToSend || input.trim();
    if (!query) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setIsTyping(true);

    setTimeout(() => {
      let replyText = "";
      const q = query.toLowerCase();

      if (q.includes('rate') || q.includes('price') || q.includes('cost') || q.includes('budget')) {
        replyText = "Ehtisham offers flexible project packages starting at $500 for standard business sites, $950 for E-Commerce stores, and $1,400+ for custom real estate portals and SaaS web apps. You can also use our live Cost Estimator on the Pricing page!";
      } else if (q.includes('ecommerce') || q.includes('e-commerce') || q.includes('shop') || q.includes('store')) {
        replyText = "Ehtisham has built over 30+ high-converting e-commerce websites with Stripe/PayPal gateways, fast product search, 3D product previews, and 1-click mobile checkout. Check out AuraCraft Couture and ElectroVault in our Portfolio!";
      } else if (q.includes('property') || q.includes('real estate') || q.includes('villa') || q.includes('hotel')) {
        replyText = "Yes! Ehtisham specializes in luxury property portals like LuxeHaven Dubai and PrimeStay Resort with 3D virtual tours, Mapbox interactive location search, and mortgage calculators.";
      } else if (q.includes('time') || q.includes('long') || q.includes('duration') || q.includes('speed')) {
        replyText = "Most websites take between 5 to 14 business days. Express 4-day delivery is also available if you are on a tight deadline!";
      } else if (q.includes('contact') || q.includes('call') || q.includes('book') || q.includes('meet')) {
        replyText = "Awesome! You can book a 15-minute free discovery video call directly with Ehtisham Sarwar, or send a direct email to shamgee40@gmail.com.";
      } else if (q.includes('experience') || q.includes('skill') || q.includes('who')) {
        replyText = "Ehtisham Sarwar is a Senior Full-Stack Website Developer with 5+ years of experience, 120+ completed projects, and a 99% client satisfaction rating globally across USA, UK, UAE, and Europe.";
      } else {
        replyText = "Thanks for your inquiry! Ehtisham Sarwar delivers custom React, Next.js, and Full-Stack web solutions designed to increase sales and client leads. Would you like to schedule a quick call or request an instant quote?";
      }

      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: 'bot',
          text: replyText,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
      setIsTyping(false);
    }, 800);
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 p-4 rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-black shadow-2xl flex items-center justify-center gap-2 font-extrabold cursor-pointer border border-black/20"
      >
        <MessageSquare className="w-6 h-6 text-black" />
        <span className="hidden sm:inline text-xs uppercase tracking-widest">Ask Ehtisham's AI</span>
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-black"></span>
        </span>
      </motion.button>

      {/* Chat Dialog Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed bottom-24 right-4 sm:right-6 z-50 w-[92vw] sm:w-[400px] max-h-[550px] h-[500px] rounded-2xl bg-[#0A0A0B] border border-white/10 shadow-2xl flex flex-col overflow-hidden text-white"
          >
            {/* Header */}
            <div className="px-5 py-4 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-black flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-black/20 backdrop-blur-md flex items-center justify-center font-black text-black text-base">
                    ES
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-black rounded-full" />
                </div>
                <div>
                  <h4 className="font-extrabold text-sm leading-tight uppercase tracking-tight">Ehtisham Sarwar Assistant</h4>
                  <span className="text-[10px] text-black/80 font-bold flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-black" /> Online | 5+ Yrs Senior Developer
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-black/80 hover:text-black hover:bg-black/10 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages Scroll Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-[#0A0A0B]">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex items-start gap-2.5 ${m.sender === 'user' ? 'flex-row-reverse' : ''}`}
                >
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-xs font-bold ${m.sender === 'user' ? 'bg-amber-500 text-black' : 'bg-white/10 text-amber-400 border border-white/10'}`}
                  >
                    {m.sender === 'user' ? <User className="w-4 h-4 text-black" /> : <Bot className="w-4 h-4" />}
                  </div>

                  <div
                    className={`max-w-[80%] p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed shadow-sm ${m.sender === 'user' ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-black font-semibold rounded-tr-none' : 'bg-[#131316] text-white/90 border border-white/10 rounded-tl-none'}`}
                  >
                    <p>{m.text}</p>
                    <span
                      className={`text-[9px] block mt-1 text-right ${m.sender === 'user' ? 'text-black/70 font-mono' : 'text-white/40 font-mono'}`}
                    >
                      {m.time}
                    </span>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex items-center gap-2 text-xs text-amber-400 italic">
                  <Bot className="w-4 h-4 animate-bounce" /> Ehtisham AI is typing...
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Prompt Chips */}
            <div className="px-3 py-2 bg-[#131316] border-t border-white/10 flex gap-1.5 overflow-x-auto no-scrollbar">
              {quickPrompts.map((qp, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(qp)}
                  className="px-2.5 py-1 text-[10px] font-bold rounded-full bg-white/5 text-white/80 border border-white/10 whitespace-nowrap hover:bg-amber-500 hover:text-black transition-colors shrink-0 cursor-pointer uppercase tracking-wider"
                >
                  {qp}
                </button>
              ))}
            </div>

            {/* Input Bar */}
            <div className="p-3 bg-[#131316] border-t border-white/10 flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about websites, pricing, or tech..."
                className="flex-1 px-3.5 py-2 text-xs rounded-xl bg-black/40 text-white border border-white/10 focus:outline-none focus:border-amber-500"
              />
              <button
                onClick={() => handleSend()}
                className="p-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-black font-bold transition-colors cursor-pointer hover:scale-105"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
