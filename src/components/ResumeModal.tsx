import React from 'react';
import { X, Download, Briefcase, GraduationCap, Award, Code2, Globe, Mail, Phone, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleDownload = () => {
    // Generate simple text CV file download
    const cvText = `EHTISHAM SARWAR - Senior Full-Stack Website Developer
Email: shamgee40@gmail.com | Portfolio: https://ehtishamsarwar.dev
Experience: 5+ Years | Projects Completed: 120+ | Client Satisfaction: 99%

SUMMARY
Senior Web Developer with 5+ years of experience engineering high-converting e-commerce platforms, luxury property portals, SaaS web applications, and corporate service websites using React, Next.js, TypeScript, Tailwind CSS, Node.js, and Cloud Infrastructure.

CORE SKILLS
- Frontend: React 19, Next.js 15, TypeScript, Tailwind CSS, Motion, 3D CSS
- Backend: Node.js, Express, REST APIs, GraphQL, Gemini AI SDK
- Databases: PostgreSQL, MongoDB, Firebase Firestore
- E-Commerce: Stripe API, PayPal, Custom Checkout, Shopify Headless

KEY ACHIEVEMENTS
- Engineered 120+ web projects for international clients in USA, UK, UAE, and Europe.
- Achieved sub-second page load times and 95+ Google PageSpeed ratings.
- Delivered 240% revenue growth for e-commerce clients through conversion-optimized UX.
`;

    const blob = new Blob([cvText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Ehtisham_Sarwar_Web_Developer_CV.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-3xl rounded-2xl bg-[#0A0A0B] border border-white/10 shadow-2xl overflow-hidden my-8 text-white"
        >
          {/* Header */}
          <div className="p-6 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-black flex items-center justify-between">
            <div>
              <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest bg-black/20 text-black backdrop-blur-md">
                Developer Resume / CV
              </span>
              <h2 className="text-2xl font-black uppercase tracking-tight mt-1">Ehtisham Sarwar</h2>
              <p className="text-xs text-black/80 font-bold">Senior Full-Stack Website Developer (5+ Years Exp)</p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleDownload}
                className="px-4 py-2 rounded-full bg-black text-amber-400 hover:bg-black/80 font-extrabold text-xs uppercase tracking-widest flex items-center gap-1.5 shadow-md transition-colors cursor-pointer"
              >
                <Download className="w-4 h-4" /> Download CV
              </button>
              <button
                onClick={onClose}
                className="p-2 rounded-xl text-black/80 hover:text-black hover:bg-black/10 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Body */}
          <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto text-white/80">
            {/* Contact Info Row */}
            <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold">
              <span className="flex items-center gap-1.5 text-amber-400 font-mono">
                <Mail className="w-4 h-4" /> shamgee40@gmail.com
              </span>
              <span className="flex items-center gap-1.5 text-white/90">
                <Globe className="w-4 h-4 text-amber-400" /> Availability: Open for New Projects
              </span>
              <span className="flex items-center gap-1.5 text-amber-400 font-mono">
                <Award className="w-4 h-4" /> 120+ Completed Web Apps
              </span>
            </div>

            {/* Work History */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-3 flex items-center gap-2">
                <Briefcase className="w-4 h-4" /> Professional Experience (5+ Years)
              </h3>
              <div className="space-y-4 border-l-2 border-amber-500 pl-4 ml-2">
                <div>
                  <div className="flex justify-between items-baseline">
                    <h4 className="font-extrabold text-sm text-white uppercase tracking-tight">
                      Senior Web Developer & Technical Architect
                    </h4>
                    <span className="text-xs text-amber-400 font-mono font-bold">2022 - Present</span>
                  </div>
                  <p className="text-xs text-amber-400 font-semibold mb-1 uppercase tracking-wider">
                    Independent Web Development Consultancy
                  </p>
                  <p className="text-xs text-white/60 leading-relaxed">
                    Designed and launched 120+ custom web platforms for global clients across E-Commerce, Real Estate, Healthcare, and SaaS. Specialized in 3D web cards, sub-second speed optimization, and high-converting UX.
                  </p>
                </div>

                <div>
                  <div className="flex justify-between items-baseline">
                    <h4 className="font-extrabold text-sm text-white uppercase tracking-tight">
                      Lead Frontend Developer
                    </h4>
                    <span className="text-xs text-amber-400 font-mono font-bold">2020 - 2022</span>
                  </div>
                  <p className="text-xs text-amber-400 font-semibold mb-1 uppercase tracking-wider">
                    Digital Web Studio
                  </p>
                  <p className="text-xs text-white/60 leading-relaxed">
                    Led a team of 4 developers building high-performance React web portals, Stripe payment integrations, and responsive UI components for international clients.
                  </p>
                </div>
              </div>
            </div>

            {/* Core Tech Stack */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-3 flex items-center gap-2">
                <Code2 className="w-4 h-4" /> Primary Technical Expertise
              </h3>
              <div className="flex flex-wrap gap-2 text-xs font-medium">
                {['React 19', 'Next.js 15', 'TypeScript', 'Tailwind CSS v4', '3D CSS Transforms', 'Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'Firebase', 'Stripe API', 'Gemini AI', 'REST APIs', 'Vite', 'Git'].map((skill) => (
                  <span key={skill} className="px-3 py-1 rounded-lg bg-white/5 text-white/90 font-mono border border-white/10">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Education & Certs */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-3 flex items-center gap-2">
                <GraduationCap className="w-4 h-4" /> Education & Certifications
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <span className="font-bold text-white block uppercase tracking-tight">Bachelor of Computer Science</span>
                  <span className="text-white/50">Software & Web Engineering Major</span>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <span className="font-bold text-white block uppercase tracking-tight">AWS Certified Web Developer</span>
                  <span className="text-white/50">Cloud Applications & Architecture</span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 bg-[#131316] border-t border-white/10 flex justify-end">
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider cursor-pointer transition-colors"
            >
              Close Preview
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
