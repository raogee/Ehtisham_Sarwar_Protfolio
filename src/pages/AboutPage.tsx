import React, { useState } from 'react';
import { TECH_STACK_DATA } from '../data/servicesData';
import { Award, Briefcase, GraduationCap, CheckCircle2, Code2, Globe, HeartHandshake, ShieldCheck, Zap, Sparkles, Send, FileText } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: string) => void;
  onOpenResume: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenResume }) => {
  const [selectedTechCategory, setSelectedTechCategory] = useState<string>('All');

  const categories = ['All', 'Frontend', 'Backend', 'Database', 'E-Commerce', 'DevOps & Tools'];

  const filteredTech = selectedTechCategory === 'All'
    ? TECH_STACK_DATA
    : TECH_STACK_DATA.filter((t) => t.category === selectedTechCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20 bg-[#0A0A0B] text-white">
      {/* SECTION 1: BIOGRAPHY & MISSION HEADER */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 font-bold text-xs uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" /> About Ehtisham Sarwar
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight uppercase tracking-tight">
            Building Digital Platforms That Drive Revenue & Impact.
          </h1>

          <p className="text-base text-white/70 leading-relaxed">
            I am <span className="font-bold text-white">Ehtisham Sarwar</span>, a Senior Website Developer with <span className="font-bold text-amber-400">5+ years of professional engineering experience</span>. Over the past half-decade, I have personally delivered 120+ web platforms for clients across the USA, UK, UAE, Canada, Australia, and Europe.
          </p>

          <p className="text-sm text-white/50 leading-relaxed">
            My engineering philosophy centers around three uncompromised principles: <strong className="text-white">unmatched aesthetic precision</strong>, <strong className="text-white">sub-second load speeds</strong>, and <strong className="text-white">conversion-driven architecture</strong>.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={onOpenResume}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 text-black font-extrabold text-xs uppercase tracking-widest flex items-center gap-2 shadow-lg shadow-amber-500/20 hover:scale-105 transition-all cursor-pointer"
            >
              <FileText className="w-4 h-4" /> Download Official CV
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 rounded-full border border-amber-500/50 text-amber-400 hover:bg-amber-500 hover:text-black font-bold text-xs uppercase tracking-widest transition-all cursor-pointer"
            >
              Book Discovery Call
            </button>
          </div>
        </div>

        {/* Right Info Card */}
        <div className="lg:col-span-5">
          <div className="p-8 rounded-2xl bg-[#131316] text-white border border-white/10 shadow-2xl space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-xl overflow-hidden border-2 border-amber-500/40 shadow-lg shadow-amber-500/20 shrink-0">
                <img
                  src="/assets/boss.jpeg"
                  alt="Ehtisham Sarwar"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold uppercase tracking-tight text-white">Ehtisham Sarwar</h3>
                <p className="text-xs text-amber-400 font-semibold uppercase tracking-wider">Web Developer & Architect</p>
                <p className="text-[11px] text-white/40">shamgee40@gmail.com</p>
              </div>
            </div>

            <div className="space-y-3 text-xs font-medium border-t border-b border-white/10 py-4">
              <div className="flex justify-between">
                <span className="text-white/40">Years of Experience:</span>
                <span className="font-bold text-white">5+ Years (2020 - Present)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/40">Completed Projects:</span>
                <span className="font-bold text-amber-400">120+ Web Applications</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/40">Primary Specialization:</span>
                <span className="font-bold text-white">React, Next.js, E-Commerce, 3D UI</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/40">Working Timezone:</span>
                <span className="font-bold text-white">Flexible (EST / GMT / PKT)</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200">
              <span className="font-bold block mb-1 text-amber-400 uppercase tracking-wider">🌟 100% Client Satisfaction</span>
              "Ehtisham’s dedication to code quality and deadline precision is exceptional."
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: INTERACTIVE 5-YEAR CAREER EVOLUTION TIMELINE */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="inline-block px-3 py-1 bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[10px] uppercase tracking-widest rounded font-bold">
            Career Journey
          </span>
          <h2 className="text-3xl font-bold text-white uppercase tracking-tight">
            5+ Years of Developer Milestones
          </h2>
        </div>

        <div className="relative border-l-2 border-amber-500/30 pl-6 ml-4 sm:ml-8 space-y-10">
          {[
            {
              year: '2025 - 2026',
              title: 'Senior Web Architect & 3D Web UI Specialist',
              desc: 'Architecting high-scale full-stack Next.js web applications, luxury property portals with 3D tours, and AI-driven SaaS landing pages for global brands.',
              badge: 'Current Phase'
            },
            {
              year: '2023 - 2024',
              title: 'Full-Stack Web Developer & E-Commerce Consultant',
              desc: 'Engineered custom e-commerce checkout flows using Stripe API, built custom real estate portals, and optimized existing client websites for 95+ Google PageSpeed.',
              badge: 'Expanded Scope'
            },
            {
              year: '2021 - 2022',
              title: 'Senior Frontend Engineer',
              desc: 'Specialized in building modern React web apps, Tailwind CSS utility systems, and responsive component libraries for digital agencies.',
              badge: 'Agency Era'
            },
            {
              year: '2020 - 2021',
              title: 'Web Developer & UI Designer',
              desc: 'Kicked off professional software development career, creating custom HTML/CSS/JavaScript websites and client portfolios.',
              badge: 'Kickoff'
            }
          ].map((item, idx) => (
            <div key={idx} className="relative group">
              <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-amber-500 border-4 border-[#0A0A0B] group-hover:scale-125 transition-transform" />

              <div className="p-6 rounded-2xl bg-[#131316] border border-white/10 shadow-xl space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-mono font-bold text-amber-400">
                    {item.year}
                  </span>
                  <span className="px-2.5 py-0.5 text-[10px] font-bold uppercase rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    {item.badge}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white">
                  {item.title}
                </h3>
                <p className="text-xs text-white/50 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: CORE CODING PHILOSOPHY & STANDARDS */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="inline-block px-3 py-1 bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[10px] uppercase tracking-widest rounded font-bold">
            Guiding Principles
          </span>
          <h2 className="text-3xl font-bold text-white uppercase tracking-tight">
            Engineering Standards
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: Zap,
              title: 'Sub-Second Page Load Speed',
              desc: 'Every millisecond matters. I optimize bundle sizes, compress assets, and utilize caching to achieve sub-second response times.'
            },
            {
              icon: HeartHandshake,
              title: 'Conversion-Centric UX',
              desc: 'A website should be a 24/7 salesperson. Layouts, call-to-actions, and checkout funnels are built to convert visitors into clients.'
            },
            {
              icon: ShieldCheck,
              title: 'Clean & Scalable Code',
              desc: 'Strict TypeScript typing, modular components, and documented architecture make future enhancements effortless and bug-free.'
            }
          ].map((card, i) => (
            <div key={i} className="p-6 rounded-2xl bg-[#131316] border border-white/10 shadow-xl space-y-3">
              <card.icon className="w-8 h-8 text-amber-400" />
              <h3 className="text-base font-bold text-white">{card.title}</h3>
              <p className="text-xs text-white/50 leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: INTERACTIVE SKILL PROFICIENCY BARS & CATEGORY TOGGLE */}
      <section className="space-y-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="inline-block px-3 py-1 bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[10px] uppercase tracking-widest rounded mb-1 font-bold">
              Tech Expertise
            </span>
            <h2 className="text-3xl font-bold text-white uppercase tracking-tight">
              Technical Skill Proficiency
            </h2>
          </div>

          <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-white/5 border border-white/10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedTechCategory(cat)}
                className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-lg transition-all ${selectedTechCategory === cat ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' : 'text-white/60 hover:text-white'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredTech.map((item) => (
            <div key={item.name} className="p-5 rounded-2xl bg-[#131316] border border-white/10 shadow-md space-y-2">
              <div className="flex justify-between items-center text-sm">
                <span className="font-bold text-white">{item.name}</span>
                <span className="font-mono text-xs font-bold text-amber-400">{item.proficiency}% Proficiency</span>
              </div>
              <p className="text-xs text-white/50 leading-relaxed">{item.description}</p>
              <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden pt-1">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-amber-500 to-orange-600 transition-all duration-500"
                  style={{ width: `${item.proficiency}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: GLOBAL CLIENT MAP & CERTIFICATIONS */}
      <section className="p-8 sm:p-12 rounded-3xl bg-[#131316] border border-white/10 text-white shadow-2xl flex flex-wrap items-center justify-between gap-8">
        <div className="max-w-xl space-y-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold uppercase bg-amber-500/10 text-amber-400 border border-amber-500/20">
            Global Footprint
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-white">
            Ready to Take Your Web Presence to the Next Level?
          </h2>
          <p className="text-white/60 text-xs sm:text-sm">
            Ehtisham Sarwar works directly with business owners, founders, and marketing directors around the world.
          </p>
        </div>

        <button
          onClick={() => onNavigate('contact')}
          className="px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 text-black font-extrabold text-xs uppercase tracking-widest shadow-xl shadow-amber-500/20 hover:scale-105 transition-all cursor-pointer flex items-center gap-2"
        >
          <Send className="w-4 h-4" /> Schedule Free Consultation
        </button>
      </section>
    </div>
  );
};
