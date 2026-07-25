import React, { useState } from 'react';
import { Project } from '../types';
import { X, ExternalLink, Github, Laptop, Tablet, Smartphone, CheckCircle2, Award, Sparkles, Building2, MapPin, Calendar, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onBookCallClick?: () => void;
}

type DeviceMode = 'desktop' | 'tablet' | 'mobile';

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onBookCallClick }) => {
  const [device, setDevice] = useState<DeviceMode>('desktop');
  const [activeTab, setActiveTab] = useState<'preview' | 'case-study'>('preview');

  if (!project) return null;

  const deviceWidthClass = {
    desktop: 'w-full max-w-5xl',
    tablet: 'w-[768px] mx-auto',
    mobile: 'w-[375px] mx-auto'
  }[device];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto bg-black/90 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-6xl max-h-[92vh] flex flex-col rounded-2xl bg-[#0A0A0B] border border-white/10 shadow-2xl overflow-hidden text-white"
        >
          {/* Modal Header Bar */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-white/10 bg-[#131316]">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                {project.category}
              </span>
              <h3 className="text-lg font-bold text-white uppercase tracking-tight truncate max-w-xs sm:max-w-md">
                {project.title}
              </h3>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              {/* Device View Toggles */}
              <div className="hidden sm:flex items-center p-1 rounded-lg bg-white/5 border border-white/10">
                <button
                  onClick={() => setDevice('desktop')}
                  className={`p-1.5 rounded-md transition-colors cursor-pointer ${device === 'desktop' ? 'bg-amber-500 text-black font-bold' : 'text-white/50 hover:text-white'}`}
                  title="Desktop View"
                >
                  <Laptop className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setDevice('tablet')}
                  className={`p-1.5 rounded-md transition-colors cursor-pointer ${device === 'tablet' ? 'bg-amber-500 text-black font-bold' : 'text-white/50 hover:text-white'}`}
                  title="Tablet View"
                >
                  <Tablet className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setDevice('mobile')}
                  className={`p-1.5 rounded-md transition-colors cursor-pointer ${device === 'mobile' ? 'bg-amber-500 text-black font-bold' : 'text-white/50 hover:text-white'}`}
                  title="Mobile View"
                >
                  <Smartphone className="w-4 h-4" />
                </button>
              </div>

              {/* Action Tabs */}
              <div className="flex rounded-lg bg-white/5 p-1 border border-white/10">
                <button
                  onClick={() => setActiveTab('preview')}
                  className={`px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-md transition-all cursor-pointer ${activeTab === 'preview' ? 'bg-amber-500 text-black' : 'text-white/60'}`}
                >
                  Interactive Screen
                </button>
                <button
                  onClick={() => setActiveTab('case-study')}
                  className={`px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-md transition-all cursor-pointer ${activeTab === 'case-study' ? 'bg-amber-500 text-black' : 'text-white/60'}`}
                >
                  Case Study & Metrics
                </button>
              </div>

              <button
                onClick={onClose}
                className="p-2 rounded-lg text-white/50 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Content Body */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-[#0A0A0B]">
            {activeTab === 'preview' ? (
              <div className="flex flex-col items-center">
                {/* Simulated Browser Frame */}
                <div className={`transition-all duration-300 ease-in-out ${deviceWidthClass} rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-[#131316]`}>
                  {/* Browser Address Bar */}
                  <div className="flex items-center gap-3 px-4 py-2.5 bg-black/60 border-b border-white/10">
                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>

                    <div className="flex-1 flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-white/80">
                      <span className="text-amber-400 font-bold">🔒 https://</span>
                      <span className="truncate">{project.liveUrl.replace('https://', '')}</span>
                    </div>

                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hidden sm:flex items-center gap-1 text-xs font-bold text-amber-400 hover:underline uppercase tracking-wider"
                    >
                      <span>Live Site</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  {/* Simulated Viewport Canvas */}
                  <div className="relative min-h-[480px] max-h-[600px] overflow-y-auto bg-[#0A0A0B] text-white p-6 sm:p-8">
                    {/* Hero Banner Mockup */}
                    <div className={`rounded-2xl p-8 bg-gradient-to-br ${project.mockupBg} border border-white/10 shadow-xl mb-8`}>
                      <div className="max-w-2xl">
                        <span className="inline-block px-3 py-1 mb-4 text-xs font-extrabold tracking-widest uppercase rounded-full bg-black/40 text-amber-300 border border-amber-500/30">
                          {project.category} Showcase
                        </span>
                        <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mb-4 leading-tight uppercase">
                          {project.mockupData.headline}
                        </h1>
                        <p className="text-white/80 text-sm sm:text-base mb-6 leading-relaxed">
                          {project.mockupData.subtext}
                        </p>
                        <div className="flex flex-wrap gap-3">
                          <button
                            className="px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 text-black font-extrabold text-xs uppercase tracking-widest shadow-lg hover:scale-105 transition-all cursor-pointer"
                          >
                            Explore Demo Feature
                          </button>
                          <button className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-widest backdrop-blur-md border border-white/20 transition-all cursor-pointer">
                            Learn More
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Section Grid Mockup */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                      {project.mockupData.sections.map((sec, idx) => (
                        <div key={idx} className="p-5 rounded-2xl bg-[#131316] border border-white/10 hover:border-amber-500/40 transition-colors">
                          <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center font-bold text-sm mb-3">
                            0{idx + 1}
                          </div>
                          <h4 className="font-bold text-white text-base mb-2 uppercase tracking-tight">{sec.title}</h4>
                          <p className="text-white/50 text-xs leading-relaxed">{sec.content}</p>
                        </div>
                      ))}
                    </div>

                    {/* Interactive Highlights Bar */}
                    <div className="p-5 rounded-2xl bg-[#131316] border border-white/10 flex flex-wrap items-center justify-between gap-4">
                      <div>
                        <span className="text-xs text-white/40 block uppercase tracking-wider font-mono">Engineered By</span>
                        <span className="text-sm font-bold text-amber-400">Ehtisham Sarwar (Professional Developer)</span>
                      </div>
                      <div className="flex gap-2">
                        {project.techStack.map((tech) => (
                          <span key={tech} className="px-2.5 py-1 text-xs rounded-md bg-white/5 border border-white/10 text-white/80 font-mono">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              /* Case Study & Details Tab */
              <div className="space-y-8 max-w-4xl mx-auto">
                {/* Header Summary */}
                <div className="p-6 rounded-2xl bg-[#131316] border border-white/10 shadow-sm">
                  <h2 className="text-2xl font-bold text-white uppercase tracking-tight mb-2">
                    {project.title}
                  </h2>
                  <p className="text-white/60 text-base leading-relaxed mb-6">
                    {project.fullDescription}
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/10 text-sm">
                    <div>
                      <span className="text-xs text-white/40 block flex items-center gap-1 uppercase font-mono">
                        <Building2 className="w-3.5 h-3.5" /> Client
                      </span>
                      <span className="font-semibold text-white">{project.client}</span>
                    </div>
                    <div>
                      <span className="text-xs text-white/40 block flex items-center gap-1 uppercase font-mono">
                        <MapPin className="w-3.5 h-3.5" /> Location
                      </span>
                      <span className="font-semibold text-white">{project.location}</span>
                    </div>
                    <div>
                      <span className="text-xs text-white/40 block flex items-center gap-1 uppercase font-mono">
                        <Calendar className="w-3.5 h-3.5" /> Delivered
                      </span>
                      <span className="font-semibold text-white">{project.year}</span>
                    </div>
                    <div>
                      <span className="text-xs text-white/40 block flex items-center gap-1 uppercase font-mono">
                        <Award className="w-3.5 h-3.5" /> Role
                      </span>
                      <span className="font-semibold text-amber-400">Lead Web Developer</span>
                    </div>
                  </div>
                </div>

                {/* Key Metrics Impact */}
                <div>
                  <h3 className="text-lg font-bold text-white uppercase tracking-tight mb-4 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-amber-400" /> Measured Business Impact
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {project.metrics.map((m, idx) => (
                      <div key={idx} className="p-5 rounded-2xl bg-[#131316] border border-amber-500/30">
                        <span className="text-3xl font-extrabold text-amber-400 block mb-1">
                          {m.value}
                        </span>
                        <span className="text-xs font-bold text-white/60 uppercase tracking-wider">
                          {m.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Problem vs Solution */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 rounded-2xl bg-[#131316] border border-white/10">
                    <h4 className="text-base font-bold text-amber-400 uppercase tracking-tight mb-2">
                      The Challenge & Problem
                    </h4>
                    <p className="text-sm text-white/70 leading-relaxed">
                      {project.challenge}
                    </p>
                  </div>
                  <div className="p-6 rounded-2xl bg-[#131316] border border-amber-500/40">
                    <h4 className="text-base font-bold text-amber-400 uppercase tracking-tight mb-2">
                      Ehtisham's Engineering Solution
                    </h4>
                    <p className="text-sm text-white/70 leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                </div>

                {/* Key Features List */}
                <div className="p-6 rounded-2xl bg-[#131316] border border-white/10 shadow-sm">
                  <h3 className="text-lg font-bold text-white uppercase tracking-tight mb-4">
                    Implemented Features & Architecture
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10">
                        <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-white/90 font-medium">
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Testimonial if present */}
                {project.testimonial && (
                  <div className="p-6 rounded-2xl bg-[#131316] border border-amber-500/30 text-white shadow-xl">
                    <p className="text-base italic mb-4 leading-relaxed text-white/90">
                      "{project.testimonial.quote}"
                    </p>
                    <div className="flex items-center gap-3">
                      <img
                        src={project.testimonial.avatar}
                        alt={project.testimonial.author}
                        className="w-10 h-10 rounded-full object-cover border-2 border-amber-500"
                      />
                      <div>
                        <h5 className="font-bold text-sm text-white">{project.testimonial.author}</h5>
                        <p className="text-xs text-amber-400">{project.testimonial.role}, {project.testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Modal Footer CTA */}
          <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-4 bg-[#131316] border-t border-white/10">
            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>View Code</span>
                </a>
              )}
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 text-black text-xs font-extrabold uppercase tracking-widest shadow-md hover:scale-105 transition-all"
              >
                <span>Launch Live Preview</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <button
              onClick={() => {
                onClose();
                if (onBookCallClick) onBookCallClick();
              }}
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 text-black text-xs font-extrabold uppercase tracking-widest shadow-lg hover:scale-105 transition-all cursor-pointer"
            >
              Want a Similar Website for Your Business?
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
