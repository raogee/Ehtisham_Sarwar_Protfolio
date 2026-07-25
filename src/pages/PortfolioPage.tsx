import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Project } from '../types';
import { TiltCard } from '../components/TiltCard';
import { Search, ExternalLink, Sparkles, Filter, CheckCircle2, ArrowUpRight, ArrowRight, Building2, ShoppingBag, Home, Cpu } from 'lucide-react';

interface PortfolioPageProps {
  onSelectProject: (project: Project) => void;
  onNavigate: (page: string) => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({ onSelectProject, onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'E-Commerce', 'Property Websites', 'Services Websites', 'SaaS & Web Apps'];

  const filteredProjects = PROJECTS_DATA.filter((proj) => {
    const matchesCategory = selectedCategory === 'All' || proj.category === selectedCategory;
    const matchesQuery =
      proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.techStack.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 bg-[#0A0A0B] text-white">
      {/* SECTION 1: PORTFOLIO SHOWCASE HEADER & FILTER BAR */}
      <section className="space-y-6 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 font-bold text-xs uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5" /> 10 Live Showcase Projects
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase">
          Web Engineering Portfolio
        </h1>

        <p className="text-sm sm:text-base text-white/60 leading-relaxed">
          Explore 10 bespoke web applications engineered across E-Commerce, Real Estate & Property, Services & Corporate, and SaaS categories. Every project features 3D card tilt effects and live preview modals.
        </p>

        {/* Search & Category Filter */}
        <div className="space-y-4 pt-2">
          <div className="relative max-w-md mx-auto">
            <Search className="w-4 h-4 absolute left-3.5 top-3.5 text-white/40" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by project name, category or tech stack..."
              className="w-full pl-10 pr-4 py-3 text-xs rounded-full bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-amber-500"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-full transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-black shadow-lg shadow-amber-500/20'
                    : 'bg-white/5 text-white/70 border border-white/10 hover:border-amber-500/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: 10 SHOWCASE PROJECT CARDS WITH 3D TILT ROTATION */}
      <section className="space-y-6">
        <div className="flex justify-between items-center text-xs text-white/40 font-mono">
          <span>Showing {filteredProjects.length} of 10 Projects</span>
          <span className="text-amber-400">3D Mouse-Tilt Hover Active</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <TiltCard
              key={project.id}
              onClick={() => onSelectProject(project)}
              maxRotateX={12}
              maxRotateY={12}
            >
              <div className="h-full rounded-2xl bg-[#131316] border border-white/10 shadow-xl overflow-hidden flex flex-col group hover:border-amber-500/50 transition-colors">
                {/* Image Showcase Header */}
                <div className="relative h-52 overflow-hidden bg-black">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#131316] via-transparent to-transparent" />

                  {/* Category Pill */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 text-[10px] font-bold tracking-widest uppercase rounded-full bg-black/80 backdrop-blur-md text-amber-400 border border-amber-500/30">
                      {project.category}
                    </span>
                  </div>

                  {/* Bottom Metric Pill & Live Link Icon */}
                  <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end">
                    <span className="text-[11px] font-mono font-bold text-amber-400 bg-black/90 px-2.5 py-1 rounded backdrop-blur-sm border border-amber-500/30">
                      {project.metrics[0].label}: {project.metrics[0].value}
                    </span>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 text-black shadow-lg transition-transform hover:scale-110"
                      title="Open Live Link"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors uppercase tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-xs text-white/50 line-clamp-2 mt-1 leading-relaxed">
                      {project.subtitle}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/5 space-y-3">
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech) => (
                        <span key={tech} className="px-2 py-0.5 text-[10px] font-mono rounded bg-white/5 border border-white/10 text-white/70">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => onSelectProject(project)}
                      className="w-full py-2.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 text-black text-xs font-extrabold uppercase tracking-widest shadow-md transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                    >
                      <span>Open Interactive Screen & Details</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </section>

      {/* SECTION 3: CATEGORY MATRIX & COUNTER SUMMARY */}
      <section className="p-8 sm:p-10 rounded-2xl bg-[#131316] text-white border border-white/10 space-y-6 shadow-2xl">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Portfolio Breakdown</span>
          <h2 className="text-2xl font-extrabold uppercase tracking-tight text-white">Domain Versatility & Industry Depth</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <ShoppingBag className="w-6 h-6 text-amber-400 mx-auto mb-2" />
            <span className="text-2xl font-black text-white block">2 Projects</span>
            <span className="text-xs text-white/40">E-Commerce & Retail</span>
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <Home className="w-6 h-6 text-amber-400 mx-auto mb-2" />
            <span className="text-2xl font-black text-white block">2 Projects</span>
            <span className="text-xs text-white/40">Real Estate & Resorts</span>
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <Building2 className="w-6 h-6 text-amber-400 mx-auto mb-2" />
            <span className="text-2xl font-black text-white block">4 Projects</span>
            <span className="text-xs text-white/40">Corporate & Services</span>
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <Cpu className="w-6 h-6 text-amber-400 mx-auto mb-2" />
            <span className="text-2xl font-black text-white block">2 Projects</span>
            <span className="text-xs text-white/40">SaaS & AI Platforms</span>
          </div>
        </div>
      </section>

      {/* SECTION 4: CLIENT CASE STUDIES & ROI HIGHLIGHTS */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="inline-block px-3 py-1 bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[10px] uppercase tracking-widest rounded font-bold">
            Impact Stories
          </span>
          <h2 className="text-3xl font-bold text-white uppercase tracking-tight">
            Real Results Delivered
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROJECTS_DATA.slice(0, 3).map((p) => (
            <div key={p.id} className="p-6 rounded-2xl bg-[#131316] border border-white/10 shadow-xl space-y-4">
              <span className="text-xs font-mono font-bold text-amber-400 block uppercase tracking-wider">
                {p.client} ({p.location})
              </span>
              <h3 className="text-base font-bold text-white uppercase tracking-tight">{p.title}</h3>
              <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-bold font-mono">
                Impact: {p.metrics[0].label} ({p.metrics[0].value})
              </div>
              <p className="text-xs text-white/50 leading-relaxed">
                "{p.testimonial?.quote || p.description}"
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: ESTIMATOR BANNER CTA */}
      <section className="p-8 sm:p-10 rounded-3xl bg-[#131316] border border-amber-500/30 text-white flex flex-wrap items-center justify-between gap-6 shadow-2xl">
        <div className="space-y-2 max-w-xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white">Need a High-Converting Website?</h2>
          <p className="text-white/60 text-xs sm:text-sm">Get an instant price quote calculated in real-time with our Estimator Tool.</p>
        </div>

        <button
          onClick={() => onNavigate('pricing')}
          className="px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 text-black font-extrabold text-xs uppercase tracking-widest shadow-xl shadow-amber-500/20 hover:scale-105 transition-all cursor-pointer"
        >
          Calculate Project Quote
        </button>
      </section>
    </div>
  );
};
