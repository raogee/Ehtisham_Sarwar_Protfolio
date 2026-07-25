import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Menu, X, Code2, Sparkles, Calculator, FileText, Send, PhoneCall, Github, Linkedin, Twitter } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, onOpenResume }) => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Me' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio (10 Projects)' },
    { id: 'pricing', label: 'Pricing & Estimator' },
    { id: 'tech-stack', label: 'Tech Stack' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-[#0A0A0B]/90 border-b border-white/5 transition-colors duration-300">
      {/* Top Banner Bar with Phone/WhatsApp & Social Icons */}
      <div className="bg-[#121216] border-b border-white/10 py-1.5 px-4 sm:px-6 lg:px-8 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5">
          {/* Phone / WhatsApp Number */}
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/923075119035"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-extrabold text-[11px] sm:text-xs tracking-wider transition-colors cursor-pointer"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              <span>+92 307 5119035</span>
            </a>

            <span className="hidden sm:inline text-white/20">•</span>
            <span className="hidden sm:inline text-[10px] text-amber-400 font-bold uppercase tracking-wider">
              Senior Web Developer
            </span>
          </div>

          {/* Social Icons (LinkedIn, GitHub, Vercel, Twitter) */}
          <div className="flex items-center gap-3 text-white/60">
            <span className="text-[10px] uppercase font-bold tracking-wider text-white/40 hidden md:inline">
              Follow & Deploy:
            </span>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition-colors p-1"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition-colors p-1"
              title="GitHub Profile"
            >
              <Github className="w-3.5 h-3.5" />
            </a>

            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition-colors p-1 flex items-center gap-1"
              title="Vercel Deployments"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 512 512">
                <path d="M256 48l240 416H16z" />
              </svg>
              <span className="text-[10px] font-bold hidden sm:inline">Vercel</span>
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition-colors p-1"
              title="Twitter Profile"
            >
              <Twitter className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 group text-left cursor-pointer"
        >
          <div className="relative">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-amber-500 to-orange-600 flex items-center justify-center text-black font-extrabold text-xl shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
              ES
            </div>
            <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-[#0A0A0B]" title="Available for projects" />
          </div>

          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg tracking-tight text-white">
                Ehtisham Sarwar
              </span>
              <span className="px-2 py-0.5 text-[10px] font-mono font-bold tracking-widest uppercase rounded bg-amber-500/10 text-amber-500 border border-amber-500/20">
                5+ Yrs Exp
              </span>
            </div>
            <p className="text-[11px] font-medium text-amber-400/90 block -mt-0.5">
              ES TECH • Full-Stack & Web Architect
            </p>
          </div>
        </button>

        {/* Desktop Nav Tabs */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/5 p-1.5 rounded-full border border-white/10">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  isActive
                    ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30 shadow-sm'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Header Right Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Resume Button */}
          <button
            onClick={onOpenResume}
            className="hidden sm:flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-white/5 text-white/80 border border-white/10 hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5 text-amber-500" />
            <span>Resume</span>
          </button>

          {/* Dark / Light Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-white/5 text-amber-400 border border-white/10 hover:border-amber-500/50 hover:scale-105 transition-all cursor-pointer"
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-amber-300" />
            )}
          </button>

          {/* Hire Me CTA Button */}
          <button
            onClick={() => handleNavClick('contact')}
            className="hidden sm:flex items-center gap-2 px-6 py-2 border border-amber-500/50 rounded-full text-xs uppercase tracking-widest text-amber-500 hover:bg-amber-500 hover:text-black font-bold transition-all shadow-md shadow-amber-500/10 cursor-pointer"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Hire Me</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-white/5 text-white border border-white/10"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A0A0B] border-b border-white/10 px-4 py-6 space-y-2 animate-fade-in">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full text-left px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors ${
                currentPage === item.id
                  ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                  : 'text-white/70 hover:bg-white/5 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}

          <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
            <button
              onClick={() => {
                onOpenResume();
                setMobileMenuOpen(false);
              }}
              className="w-full py-3 rounded-xl bg-white/5 border border-white/10 font-bold text-xs uppercase tracking-wider text-white text-center"
            >
              View Resume / CV
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-black font-extrabold text-xs uppercase tracking-widest text-center shadow-lg shadow-amber-500/20"
            >
              Hire Ehtisham Sarwar
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
