import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ArrowUp, Linkedin, MessageCircle, Mail, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#111917] text-white border-t border-white/10 py-12">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-8 border-b border-white/10">
          <div>
            <a href="#" className="text-lg font-bold tracking-tight text-white hover:text-[#14A800] transition-colors">
              Mohammad Ashaduzzaman
            </a>
            <p className="text-xs text-white/60 mt-1 max-w-md leading-relaxed font-sans">
              Communication & Marketing Operations Specialist · Founder’s Right-Hand Professional
            </p>
          </div>

          <nav className="flex flex-wrap items-center gap-6 text-xs text-white/70">
            <a href="#selected-work" className="hover:text-white transition-colors">Selected Work</a>
            <a href="#capabilities" className="hover:text-white transition-colors">Capabilities</a>
            <a href="#how-i-work" className="hover:text-white transition-colors">How I Work</a>
            <a href="#credentials" className="hover:text-white transition-colors">Credentials</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div className="flex flex-wrap items-center gap-4">
            <p>© {new Date().getFullYear()} Mohammad Ashaduzzaman. All rights reserved.</p>
            <span className="hidden sm:inline text-white/20">|</span>
            <a
              href={`mailto:${PORTFOLIO_DATA.profile.email}`}
              className="font-mono text-[11px] text-white/70 hover:text-[#14A800] transition-colors"
            >
              {PORTFOLIO_DATA.profile.email}
            </a>
          </div>

          <div className="flex items-center gap-3.5">
            <a
              href={PORTFOLIO_DATA.profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-[#14A800] transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={PORTFOLIO_DATA.profile.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-[#25D366] transition-colors"
              title="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            <a
              href={PORTFOLIO_DATA.profile.upworkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-[#14A800] transition-colors"
              title="Upwork Profile"
            >
              <Sparkles className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-white/70 hover:text-white transition-colors p-1.5 rounded bg-white/5 ml-2"
              aria-label="Back to Top"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
