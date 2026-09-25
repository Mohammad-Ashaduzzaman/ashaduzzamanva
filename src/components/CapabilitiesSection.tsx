import React, { useState, useRef } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Check, ArrowDown, ArrowRight, MessageSquare, Share2, Search, BarChart3, FolderKanban, Palette, Sparkles } from 'lucide-react';

const CAPABILITY_ICONS: Record<string, React.ReactNode> = {
  'communication-content': <MessageSquare className="w-5 h-5" />,
  'marketing-operations': <Share2 className="w-5 h-5" />,
  'research-insight': <Search className="w-5 h-5" />,
  'data-analysis': <BarChart3 className="w-5 h-5" />,
  'project-operations': <FolderKanban className="w-5 h-5" />,
  'creative-production': <Palette className="w-5 h-5" />,
};

export const CapabilitiesSection: React.FC = () => {
  const [selectedCapId, setSelectedCapId] = useState<string>(PORTFOLIO_DATA.capabilities[0].id);
  const inspectorRef = useRef<HTMLDivElement>(null);

  const selectedCap = PORTFOLIO_DATA.capabilities.find((c) => c.id === selectedCapId) || PORTFOLIO_DATA.capabilities[0];

  const handleSelectCapability = (id: string, shouldScroll = false) => {
    setSelectedCapId(id);
    if (shouldScroll && inspectorRef.current) {
      setTimeout(() => {
        inspectorRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 50);
    }
  };

  return (
    <section id="capabilities" className="py-20 md:py-28 bg-white border-y border-[#DDE4DA]">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-[#14A800] uppercase mb-3">
              <span>Core Competency Architecture</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#182321] tracking-tight leading-tight">
              Six disciplined capability areas. One strategic partner.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#66736D] max-w-md">
            Instead of fragmented freelancers, I bring end-to-end stewardship from strategic positioning to granular asset delivery.
          </p>
        </div>

        {/* Capabilities Grid Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {PORTFOLIO_DATA.capabilities.map((cap) => {
            const isSelected = cap.id === selectedCapId;
            return (
              <div
                key={cap.id}
                onClick={() => handleSelectCapability(cap.id, true)}
                className={`cursor-pointer rounded-2xl p-6 sm:p-7 border transition-all flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#F8F9F5] border-[#14A800] shadow-sm ring-2 ring-[#14A800]/20'
                    : 'bg-white border-[#DDE4DA] hover:border-[#CBD5E1] hover:bg-[#FAF9F7]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className={`p-2 rounded-xl transition-colors ${isSelected ? 'bg-[#14A800] text-white' : 'bg-[#EBF8EA] text-[#14A800]'}`}>
                        {CAPABILITY_ICONS[cap.id]}
                      </div>
                      <span className="font-mono text-xs font-semibold text-[#66736D]">Area 0{cap.letter}</span>
                    </div>

                    <span
                      className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full font-semibold ${
                        isSelected
                          ? 'bg-[#14A800] text-white shadow-2xs'
                          : 'bg-[#F1F4EE] text-[#5A6860]'
                      }`}
                    >
                      {cap.items.length} Competencies
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#182321] mb-2">{cap.title}</h3>
                  <p className="text-xs sm:text-sm text-[#182321] font-medium mb-3">{cap.headline}</p>
                  <p className="text-xs text-[#66736D] leading-relaxed line-clamp-2 mb-4">{cap.description}</p>

                  {/* Immediate Competency Preview List */}
                  <div className="space-y-1.5 pt-3 border-t border-[#EDF2EA] mb-4">
                    {cap.items.slice(0, 3).map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#182321]">
                        <Check className="w-3.5 h-3.5 text-[#14A800] shrink-0" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                    {cap.items.length > 3 && (
                      <span className="text-[11px] font-mono text-[#66736D] pl-5 block">
                        +{cap.items.length - 3} more competencies in deep dive
                      </span>
                    )}
                  </div>
                </div>

                <div className="pt-3 border-t border-[#DDE4DA]/70 flex items-center justify-between text-xs">
                  <span className="text-[#66736D] font-mono text-[11px]">
                    {cap.deliverables.length} Deliverables
                  </span>
                  <span
                    className={`inline-flex items-center gap-1 font-semibold transition-colors ${
                      isSelected ? 'text-[#14A800]' : 'text-[#182321] group-hover:text-[#14A800]'
                    }`}
                  >
                    <span>{isSelected ? 'Viewing Below' : 'View Deep Dive'}</span>
                    {isSelected ? <ArrowDown className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Inspector Panel with Integrated Quick Area Switcher */}
        <div
          ref={inspectorRef}
          className="rounded-3xl bg-[#182321] text-white p-6 sm:p-9 lg:p-10 border border-[#DDE4DA]/20 shadow-md scroll-mt-24 transition-all duration-300"
        >
          {/* Quick Area Switcher Tabs across all 6 disciplines */}
          <div className="pb-6 mb-8 border-b border-white/10">
            <span className="text-[11px] font-mono uppercase tracking-wider text-white/50 block mb-3">
              Switch Capability Area Directly:
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
              {PORTFOLIO_DATA.capabilities.map((c) => {
                const isCurrent = c.id === selectedCapId;
                return (
                  <button
                    key={c.id}
                    onClick={() => handleSelectCapability(c.id, false)}
                    className={`p-2.5 rounded-xl text-left transition-all border cursor-pointer flex flex-col justify-between ${
                      isCurrent
                        ? 'bg-[#14A800] text-white border-[#14A800] shadow-sm'
                        : 'bg-white/5 text-white/80 border-white/10 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-mono text-[10px] font-bold opacity-80">
                        Area 0{c.letter}
                      </span>
                      <span className="text-[10px] font-mono opacity-80">
                        {c.items.length} pts
                      </span>
                    </div>
                    <span className="text-xs font-semibold leading-tight line-clamp-1">
                      {c.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 mb-8 pb-8 border-b border-white/10">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-3">
                <span className="font-mono text-xs text-[#14A800] bg-[#14A800]/20 font-semibold px-3 py-1 rounded-full border border-[#14A800]/30">
                  Area 0{selectedCap.letter} Deep Dive
                </span>
                <span className="text-xs text-white/60 font-mono">· {selectedCap.title}</span>
                <span className="text-xs font-mono text-[#14A800]">({selectedCap.items.length} Competencies)</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                {selectedCap.headline}
              </h3>
              <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                {selectedCap.description}
              </p>
            </div>

            {/* Key Deliverables */}
            <div className="lg:w-80 shrink-0 bg-white/5 p-5 rounded-2xl border border-white/10">
              <span className="text-xs font-mono uppercase tracking-wider text-[#14A800] block mb-3 font-semibold">
                Standard Deliverables ({selectedCap.deliverables.length})
              </span>
              <ul className="space-y-2 text-xs sm:text-sm text-white/90">
                {selectedCap.deliverables.map((del) => (
                  <li key={del} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#14A800] shrink-0" />
                    <span>{del}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Breakdown of items */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono uppercase tracking-wider text-white/50 block">
                Scope of Responsibilities & Competencies ({selectedCap.items.length} Tailored Competencies)
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {selectedCap.items.map((item, idx) => (
                <div
                  key={item}
                  className="p-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.07] border border-white/10 transition-colors flex items-start gap-2.5 text-xs text-white/90"
                >
                  <span className="font-mono text-[11px] text-[#14A800] font-bold shrink-0 mt-0.5">
                    0{idx + 1}
                  </span>
                  <span className="leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
