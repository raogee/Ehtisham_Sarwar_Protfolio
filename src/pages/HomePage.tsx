import React from 'react';
import { Canvas3D } from '../components/Canvas3D';
import { TiltCard } from '../components/TiltCard';
import { WhatsAppServiceForm } from '../components/WhatsAppServiceForm';
import { WhatsAppSubmissionsBar } from '../components/WhatsAppSubmissionsBar';
import { Project } from '../types';
import { PROJECTS_DATA } from '../data/portfolioData';
import { SERVICES_DATA, TESTIMONIALS_DATA } from '../data/servicesData';
import { ArrowRight, Sparkles, CheckCircle2, Award, Zap, Code2, ShieldCheck, Star, ExternalLink, Calculator, Send, Building2, ShoppingBag, Home as HomeIcon, Cpu, ChevronRight } from 'lucide-react';

interface HomePageProps {
  onSelectProject: (project: Project) => void;
  onNavigate: (page: string) => void;
  onOpenResume: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onSelectProject, onNavigate, onOpenResume }) => {
  const featuredProjects = PROJECTS_DATA.slice(0, 6);

  return (
    <div className="space-y-24 pb-16 bg-[#0A0A0B] text-white">
      {/* SECTION 1: HERO SECTION WITH 3D CANVAS & ELEGANT DARK CARDS */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-12 pb-16 px-4 sm:px-6 lg:px-8 bg-[#0A0A0B]">
        <Canvas3D />

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Hero Copy */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[10px] uppercase tracking-widest rounded-full font-bold">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              <span>3D Particle Video Background • 5+ Years Senior Developer</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.95] text-white uppercase">
              CRAFTING <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-orange-500">
                DIGITAL
              </span> <br />
              MASTERY
            </h1>

            <p className="text-sm sm:text-base text-white/60 leading-relaxed max-w-xl mx-auto lg:mx-0 italic">
              "5+ years of architectural excellence in web development. I transform complex business requirements into high-performing, conversion-focused digital platforms."
            </p>

            {/* Quick Hero CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => onNavigate('portfolio')}
                className="px-7 py-3.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-black font-extrabold text-xs uppercase tracking-widest shadow-xl shadow-amber-500/20 flex items-center gap-2 transition-all hover:scale-105 cursor-pointer"
              >
                <span>Explore 10 Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('pricing')}
                className="px-7 py-3.5 rounded-full border border-amber-500/50 text-amber-500 hover:bg-amber-500 hover:text-black font-bold text-xs uppercase tracking-widest flex items-center gap-2 transition-all cursor-pointer"
              >
                <Calculator className="w-4 h-4" />
                <span>Calculate Quote</span>
              </button>
            </div>

            {/* Guarantees */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-4 text-[11px] font-mono tracking-wider uppercase text-white/50">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400" /> 100% Mobile & 3D Responsive
              </span>
              <span className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-amber-400" /> 95+ PageSpeed Score
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-amber-400" /> 120+ Global Clients
              </span>
            </div>
          </div>

          {/* Right Hero 3D Holographic Card */}
          <div className="lg:col-span-5 flex justify-center">
            <TiltCard maxRotateX={15} maxRotateY={15} glareOpacity={0.25} className="w-full max-w-md">
              <div className="p-8 rounded-2xl bg-[#1a1a1c] text-white border border-white/10 shadow-2xl relative overflow-hidden group">
                {/* Background glowing orb */}
                <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
                <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-orange-600/10 blur-3xl pointer-events-none" />

                <div className="relative z-10 space-y-6">
                  {/* Top Badge */}
                  <div className="flex justify-between items-center">
                    <span className="px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-widest rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
                      SENIOR ARCHITECT 3D
                    </span>
                    <span className="text-[10px] text-white/40 font-mono">ID: ES-5YRS</span>
                  </div>

                  {/* Profile Avatar & Image Graphic */}
                  <div className="relative group/photo">
                    <div className="relative w-full h-64 sm:h-72 rounded-2xl overflow-hidden border-2 border-amber-500/40 shadow-2xl shadow-amber-500/10 bg-black">
                      <img
                        src="/assets/boss.jpeg"
                        alt="Ehtisham Sarwar - Senior Web Developer"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-top group-hover/photo:scale-105 transition-transform duration-500 filter contrast-[1.05]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1c] via-transparent to-transparent opacity-80" />
                      
                      {/* Live availability floating pill */}
                      <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-amber-500/30 flex items-center gap-2 text-[10px] font-bold text-amber-400 uppercase tracking-widest shadow-lg">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span>Open for Hiring</span>
                      </div>

                      {/* Name overlay badge */}
                      <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 flex items-center justify-between">
                        <div>
                          <h3 className="text-base font-extrabold text-white tracking-tight leading-tight">Ehtisham Sarwar</h3>
                          <p className="text-[11px] text-amber-400 font-bold uppercase tracking-wider">Senior Web Architect</p>
                        </div>
                        <div className="text-right">
                          <span className="text-[10px] font-mono text-white/50 block">EXPERIENCE</span>
                          <span className="text-xs font-black text-amber-400 font-mono">5+ YEARS</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Stats pill inside card */}
                  <div className="grid grid-cols-2 gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-white/40 block">Experience</span>
                      <span className="text-2xl font-bold text-amber-500">05+ Yrs</span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-white/40 block">Projects</span>
                      <span className="text-2xl font-bold text-amber-500">120+ Sites</span>
                    </div>
                  </div>

                  {/* Tech stack mini pills */}
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-white/40 block">Technical Arsenal</span>
                    <div className="flex flex-wrap gap-1.5 text-[10px]">
                      {['React 19', 'Next.js 15', 'TypeScript', 'Tailwind CSS', 'Stripe API', 'Three.js / 3D'].map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-white/5 rounded-full border border-white/10 text-white/80">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action button inside card */}
                  <button
                    onClick={onOpenResume}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-black font-extrabold text-xs uppercase tracking-widest shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 cursor-pointer transition-transform hover:scale-[1.02]"
                  >
                    <Code2 className="w-4 h-4" /> Download Official CV
                  </button>
                </div>
              </div>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* WHATSAPP RECENT PROJECT SUBMISSIONS SLIDING BAR */}
      <WhatsAppSubmissionsBar />

      {/* SECTION 2: TRUST TICKER & STATS COUNTER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-2xl bg-[#131316] border border-white/10 shadow-2xl grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-3xl sm:text-5xl font-bold text-amber-500">05+</span>
            <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white">Years Experience</p>
            <p className="text-[11px] text-white/40">In Full-Stack Web Development</p>
          </div>

          <div className="space-y-1 text-center sm:text-left">
            <span className="text-3xl sm:text-5xl font-bold text-amber-500">120+</span>
            <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white">Web Applications</p>
            <p className="text-[11px] text-white/40">Delivered to Global Clients</p>
          </div>

          <div className="space-y-1 text-center sm:text-left">
            <span className="text-3xl sm:text-5xl font-bold text-amber-500">100%</span>
            <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white">Client Satisfaction</p>
            <p className="text-[11px] text-white/40">5-Star Verified Ratings</p>
          </div>

          <div className="space-y-1 text-center sm:text-left">
            <span className="text-3xl sm:text-5xl font-bold text-amber-500">&lt;0.8s</span>
            <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white">Load Speed</p>
            <p className="text-[11px] text-white/40">Sub-Second Benchmark Guarantee</p>
          </div>
        </div>
      </section>

      {/* SECTION 3: FEATURED 3D TILT PROJECTS SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="inline-block px-3 py-1 bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[10px] uppercase tracking-widest rounded mb-2 font-bold">
              Featured Creations
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white uppercase">
              3D Interactive Showcase
            </h2>
            <p className="text-xs text-white/40 mt-1">
              Hover over cards for 3D physics perspective. Click any card for interactive device inspection.
            </p>
          </div>

          <button
            onClick={() => onNavigate('portfolio')}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-amber-500/40 text-amber-500 hover:bg-amber-500 hover:text-black font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
          >
            <span>View All 10 Projects</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* 3D Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <TiltCard
              key={project.id}
              onClick={() => onSelectProject(project)}
              maxRotateX={10}
              maxRotateY={10}
            >
              <div className="h-full rounded-2xl bg-[#131316] border border-white/10 shadow-2xl overflow-hidden flex flex-col group hover:border-amber-500/50 transition-all">
                {/* Image Banner */}
                <div className="relative h-48 overflow-hidden bg-black">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#131316] via-transparent to-transparent" />

                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full bg-black/70 backdrop-blur-md text-amber-400 border border-amber-500/30">
                      {project.category}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end">
                    <span className="text-[11px] font-mono font-bold text-emerald-400 bg-black/80 px-2.5 py-1 rounded-md backdrop-blur-sm border border-emerald-500/30">
                      {project.metrics[0].label}: {project.metrics[0].value}
                    </span>
                    <span className="p-2 rounded-full bg-amber-500 text-black shadow-lg group-hover:scale-110 transition-transform">
                      <ExternalLink className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-white/50 line-clamp-2 mt-1.5 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/5 space-y-3">
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.slice(0, 4).map((tech) => (
                        <span key={tech} className="px-2.5 py-0.5 text-[10px] font-mono rounded bg-white/5 border border-white/10 text-white/70">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => onSelectProject(project)}
                      className="w-full py-2.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 border border-amber-500/30 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      Inspect Device Preview & Story
                    </button>
                  </div>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </section>

      {/* SECTION 4: WHAT I DO / CORE SOLUTIONS PILLARS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-block px-3 py-1 bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[10px] uppercase tracking-widest rounded font-bold">
            Services Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white uppercase tracking-tight">
            Tailored Development Pillars
          </h2>
          <p className="text-xs text-white/50">
            Engineered from scratch to maximize site conversion and Google Lighthouse performance scores.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((srv) => (
            <div
              key={srv.id}
              className="p-6 rounded-2xl bg-[#131316] border border-white/10 shadow-xl hover:border-amber-500/40 transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center font-bold text-xl shadow-md">
                  <Sparkles className="w-6 h-6" />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-white/50 leading-relaxed">
                    {srv.shortDesc}
                  </p>
                </div>

                <div className="space-y-2 pt-2">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-amber-400">
                    Key Deliverables:
                  </span>
                  <ul className="space-y-1.5 text-xs text-white/80">
                    {srv.deliverables.slice(0, 3).map((d, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-white/40 block uppercase font-mono">Starting From</span>
                  <span className="text-xl font-bold text-amber-400">${srv.startingPrice}</span>
                </div>
                <button
                  onClick={() => onNavigate('services')}
                  className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-xs font-bold uppercase tracking-wider text-white transition-colors cursor-pointer"
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* DIRECT WHATSAPP INQUIRY FORM */}
        <WhatsAppServiceForm />
      </section>

      {/* SECTION 5: CLIENT TESTIMONIALS & CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#131316] text-white border border-white/10 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl mx-auto space-y-6">
            <span className="px-3 py-1 text-xs font-mono font-bold uppercase tracking-widest rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30">
              Verified Client Endorsements
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white uppercase">
              Trusted Globally Across USA, UK, UAE & Europe
            </h2>
          </div>

          <div className="relative overflow-hidden pt-4 w-full">
            <div className="flex animate-marquee gap-4 px-4">
              {[...TESTIMONIALS_DATA.slice(0, 6), ...TESTIMONIALS_DATA.slice(0, 6)].map((t, index) => (
                <div key={`${t.id}-${index}`} style={{ flex: '0 0 calc(33.333% - 11px)' }} className="p-6 rounded-2xl bg-black/50 border border-white/10 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-xs text-white/40 font-mono">{t.flagEmoji} {t.country}</span>
                  </div>
                  <p className="text-xs sm:text-sm italic text-white/80 leading-relaxed">
                    "{t.text}"
                  </p>
                  <div className="flex items-center gap-3 pt-2">
                    <img src={t.avatar} alt={t.name} className="w-9 h-9 rounded-full object-cover border border-amber-500/30" />
                    <div>
                      <h4 className="font-bold text-xs text-white">{t.name}</h4>
                      <p className="text-[11px] text-white/40">{t.role}, {t.company}</p>
                    </div>
                  </div>
                </div>
                ))}
              </div>
            </div>

            <div className="pt-6 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate('contact')}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-black font-extrabold text-xs uppercase tracking-widest shadow-xl shadow-amber-500/20 transition-all cursor-pointer flex items-center gap-2"
              >
                <Send className="w-4 h-4" /> Start Your Project with Ehtisham
              </button>
            </div>
          </div>
      </section>
    </div>
  );
};
