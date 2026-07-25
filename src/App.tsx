import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';
import { ChatAssistant } from './components/ChatAssistant';
import { WhatsAppWidget } from './components/WhatsAppWidget';
import { MouseCursor } from './components/MouseCursor';
import { SEO } from './components/SEO';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { PricingPage } from './pages/PricingPage';
import { TechStackPage } from './pages/TechStackPage';
import { ContactPage } from './pages/ContactPage';

import { Project } from './types';

export function AppContent() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderSEO = () => {
    switch (currentPage) {
      case 'about':
        return (
          <SEO
            title="About Ehtisham Sarwar | Senior Web Developer & Full-Stack Architect"
            description="Learn about Ehtisham Sarwar (ES TECH), a Senior Web Developer with 5+ years of experience building high-performance web applications, custom e-commerce stores, and enterprise software."
            keywords="Ehtisham Sarwar, ES TECH, About Web Developer, Full-Stack Engineer, React Architect, Node.js Expert, Custom Web Development"
          />
        );
      case 'services':
        return (
          <SEO
            title="Web Development Services & Custom Engineering | ES TECH"
            description="Comprehensive web development services by Ehtisham Sarwar including Real Estate Portals, E-Commerce Stores, Custom SaaS Apps, Healthcare Websites, and 3D Web Experiences."
            keywords="Web Development Services, Custom Website Development, Real Estate Portal Developer, E-Commerce Specialist, SaaS Architect, Full-Stack Services"
          />
        );
      case 'portfolio':
        return (
          <SEO
            title="Web Project Showcase & Live Demos | Ehtisham Sarwar Portfolio"
            description="Explore real-world web projects engineered by Ehtisham Sarwar. Featuring interactive live device previews, real estate platforms, online shopping portals, and full-stack web apps."
            keywords="Web Developer Portfolio, Full-Stack Projects, Real Estate Website Demos, React Projects, Live Web App Demos, ES TECH Showcase"
          />
        );
      case 'pricing':
        return (
          <SEO
            title="Instant Website Cost Estimator & Transparent Pricing | ES TECH"
            description="Calculate custom website project costs in real time with our interactive price estimator. Get instant transparent quotes for e-commerce, real estate, or corporate web apps."
            keywords="Website Cost Calculator, Web Development Pricing, Project Cost Estimator, E-Commerce Website Cost, Custom Web App Quote"
          />
        );
      case 'tech-stack':
        return (
          <SEO
            title="3D Interactive Tech Stack & Architecture | ES TECH"
            description="Discover the modern technology stack utilized by Ehtisham Sarwar: React 18+, TypeScript, Next.js, Node.js, Express, PostgreSQL, MongoDB, Tailwind CSS, Three.js, and Cloud Infrastructure."
            keywords="React 18, TypeScript, Next.js, Node.js, Tailwind CSS, 3D Canvas, Web Technologies, Modern Tech Stack"
          />
        );
      case 'contact':
        return (
          <SEO
            title="Contact Ehtisham Sarwar | Schedule Free Strategy Session"
            description="Book a direct 1-on-1 strategy video call or send a project inquiry to Ehtisham Sarwar (ES TECH). Fast response time guaranteed within 2 hours."
            keywords="Contact Web Developer, Hire Full Stack Engineer, Book Web Consultation, Ehtisham Sarwar Contact, Web Project Inquiry"
          />
        );
      case 'home':
      default:
        return (
          <SEO
            title="Ehtisham Sarwar (ES TECH) | Senior Web Developer & Full-Stack Architect"
            description="Senior Web Developer & Full-Stack Architect with 5+ years experience engineering custom web apps, e-commerce platforms, real estate portals, and enterprise SaaS solutions."
            keywords="Ehtisham Sarwar, ES TECH, Senior Web Developer, Full-Stack Engineer, Custom Web Apps, React Developer, Node.js Architect"
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0A0A0B] text-slate-900 dark:text-zinc-100 font-sans transition-colors duration-300 flex flex-col selection:bg-amber-500/30 selection:text-amber-800 dark:selection:text-amber-200">
      {/* Dynamic SEO Head Management via react-helmet-async */}
      {renderSEO()}

      {/* Top Navbar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Page Route View */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onSelectProject={(proj) => setSelectedProject(proj)}
            onNavigate={handleNavigate}
            onOpenResume={() => setIsResumeOpen(true)}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenResume={() => setIsResumeOpen(true)}
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'portfolio' && (
          <PortfolioPage
            onSelectProject={(proj) => setSelectedProject(proj)}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'pricing' && (
          <PricingPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'tech-stack' && (
          <TechStackPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'contact' && <ContactPage />}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Interactive Project Device Preview Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onBookCallClick={() => {
          setSelectedProject(null);
          handleNavigate('contact');
        }}
      />

      {/* Developer Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* Interactive Mouse & Touch Particle Circle Follower */}
      <MouseCursor />

      {/* Floating Chat Assistant (Right) & Floating WhatsApp Bot Widget (Left) */}
      <WhatsAppWidget />
      <ChatAssistant onBookCallClick={() => handleNavigate('contact')} />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
