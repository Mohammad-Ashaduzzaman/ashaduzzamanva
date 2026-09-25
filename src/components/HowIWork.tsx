import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Check, ShieldCheck, ArrowRight, Lightbulb, Compass, Workflow, Play, RefreshCw } from 'lucide-react';

export const HowIWork: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const steps = PORTFOLIO_DATA.howIWork;
  const current = steps[activeStep];

  const stepIcons = [
    <Compass className="w-5 h-5 text-[#14A800]" />,
    <Lightbulb className="w-5 h-5 text-[#14A800]" />,
    <Workflow className="w-5 h-5 text-[#14A800]" />,
    <Play className="w-5 h-5 text-[#14A800]" />,
    <RefreshCw className="w-5 h-5 text-[#14A800]" />,
  ];

  return (
    <section id="how-i-work" className="py-20 md:py-28 bg-white border-y border-[#DDE4DA]">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-[#14A800] uppercase mb-3">
            <span>Operating Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#182321] tracking-tight leading-tight mb-4">
            A disciplined five-step consulting cadence.
          </h2>
          <p className="text-base sm:text-lg text-[#66736D] leading-relaxed">
            I don’t wait passively for isolated tasks. Every initiative moves systematically from deep context discovery
            to repeatable execution and compounding performance.
          </p>
        </div>

        {/* 5-Step Horizontal Navigation Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-10">
          {steps.map((s, idx) => {
            const isSelected = activeStep === idx;
            return (
              <button
                key={s.step}
                onClick={() => setActiveStep(idx)}
                className={`p-4 sm:p-5 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#182321] text-white border-[#182321] shadow-xs'
                    : 'bg-[#F8F9F5] text-[#182321] border-[#DDE4DA] hover:bg-[#F1F4EE]'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`font-mono text-xs font-bold ${isSelected ? 'text-[#14A800]' : 'text-[#66736D]'}`}>
                    {s.step}
                  </span>
                  {idx < steps.length - 1 && (
                    <ArrowRight className={`hidden lg:block w-3.5 h-3.5 ${isSelected ? 'text-white/40' : 'text-[#CBD5E1]'}`} />
                  )}
                </div>
                <div>
                  <h4 className="text-sm font-bold block mb-0.5">{s.name}</h4>
                  <span className={`text-[11px] font-mono ${isSelected ? 'text-white/70' : 'text-[#66736D]'}`}>
                    {s.tagline}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Stage Workspace Display */}
        <div className="p-7 sm:p-10 rounded-3xl bg-[#F8F9F5] border border-[#DDE4DA]">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 mb-8 pb-8 border-b border-[#DDE4DA]">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-3">
                <span className="font-mono text-xs text-[#14A800] bg-[#EBF8EA] font-semibold px-3 py-1 rounded-full border border-[#14A800]/20">
                  Phase {current.step} · {current.name}
                </span>
                <span className="text-xs text-[#66736D] font-mono">Philosophy: {current.tagline}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#182321] mb-4">
                {current.name}: {current.tagline}
              </h3>

              <p className="text-sm sm:text-base text-[#66736D] leading-relaxed">
                {current.description}
              </p>
            </div>

            {/* Peace of Mind Guarantee */}
            <div className="lg:w-80 shrink-0 bg-white p-5 rounded-2xl border border-[#DDE4DA] shadow-xs">
              <div className="flex items-center gap-2 mb-2 text-[#14A800]">
                <ShieldCheck className="w-4 h-4" />
                <span className="text-xs font-mono uppercase tracking-wider font-semibold">
                  Founder Peace of Mind
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#182321] font-medium leading-relaxed">
                “{current.peaceOfMind}”
              </p>
            </div>
          </div>

          {/* Deliverables from this step */}
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#66736D] block mb-3">
              Concrete Outputs Produced in Phase {current.step}:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {current.deliverables.map((del) => (
                <div
                  key={del}
                  className="p-3.5 bg-white rounded-xl border border-[#DDE4DA] flex items-center gap-2.5 text-xs text-[#182321]"
                >
                  <Check className="w-3.5 h-3.5 text-[#14A800] shrink-0" />
                  <span className="font-medium">{del}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
