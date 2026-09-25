import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ArrowUpRight, VolumeX, FastForward, MessageSquareCode, Check } from 'lucide-react';

interface FounderSupportProps {
  onOpenContact: () => void;
}

export const FounderSupport: React.FC<FounderSupportProps> = ({ onOpenContact }) => {
  const { founderSupport } = PORTFOLIO_DATA;

  const pillarIcons = [
    <VolumeX className="w-5 h-5 text-[#14A800]" />,
    <FastForward className="w-5 h-5 text-[#14A800]" />,
    <MessageSquareCode className="w-5 h-5 text-[#14A800]" />,
  ];

  return (
    <section className="py-20 md:py-28 bg-[#F8F9F5]">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-[#14A800] uppercase mb-3">
            <span>Executive & Founder Right-Hand</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#182321] tracking-tight leading-tight mb-4">
            {founderSupport.headline}
          </h2>
          <p className="text-base sm:text-lg text-[#66736D] leading-relaxed">
            {founderSupport.subhead}
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {founderSupport.pillars.map((pillar, idx) => (
            <div
              key={pillar.title}
              className="p-7 sm:p-8 rounded-3xl bg-white border border-[#DDE4DA] shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-[#EBF8EA] rounded-xl text-[#14A800]">
                    {pillarIcons[idx]}
                  </div>
                  <span className="font-mono text-xs text-[#66736D]">Pillar 0{idx + 1}</span>
                </div>

                <h3 className="text-xl font-bold text-[#182321] mb-3">{pillar.title}</h3>
                <p className="text-xs sm:text-sm text-[#66736D] leading-relaxed mb-6">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#DDE4DA]">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#66736D] block mb-2">
                  Immediate Impact:
                </span>
                <ul className="space-y-2 text-xs text-[#182321]">
                  {pillar.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#14A800] shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Founder Callout Ribbon */}
        <div className="p-7 sm:p-9 rounded-3xl bg-[#182321] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-md">
          <div>
            <h4 className="text-lg sm:text-xl font-bold text-white mb-1">
              Looking for a dedicated right-hand operational partner?
            </h4>
            <p className="text-xs sm:text-sm text-white/70">
              Select monthly retainers ($2,500 – $4,500+) & fractional executive support available.
            </p>
          </div>

          <button
            onClick={onOpenContact}
            className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold text-white bg-[#14A800] hover:bg-[#108A00] rounded-xl transition-all shrink-0 self-start sm:self-auto shadow-xs"
          >
            <span>Let’s Talk About Scope</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
