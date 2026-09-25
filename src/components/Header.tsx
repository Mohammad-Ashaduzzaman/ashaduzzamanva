import React, { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

interface HeaderProps {
  onOpenContact: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenContact }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Work', href: '#selected-work' },
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'How I Work', href: '#how-i-work' },
    { label: 'Credentials', href: '#credentials' },
    { label: 'About', href: '#about' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#F7F7F5]/90 backdrop-blur-md border-b border-[#E2E3DF]">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 h-18 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark (Display face, no subtitles/pill attachments) */}
        <a
          href="#"
          className="text-base sm:text-lg font-bold tracking-tight text-[#182321] hover:text-[#14A800] transition-colors whitespace-nowrap"
        >
          Mohammad Ashaduzzaman
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#66736D]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#14A800] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenContact}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#14A800] rounded-xl hover:bg-[#108A00] transition-all whitespace-nowrap shadow-xs"
          >
            <span>Discuss Partnership</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#101113] hover:bg-[#E2E3DF]/50 rounded-lg transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F8F9F5] border-b border-[#DDE4DA] px-6 py-5 flex flex-col gap-4">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#182321] hover:text-[#14A800] py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-[#DDE4DA]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-2.5 px-4 text-sm font-semibold text-white bg-[#14A800] rounded-xl hover:bg-[#108A00] transition-colors flex items-center justify-center gap-2"
            >
              <span>Discuss Partnership</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
