import React from 'react';
import { ArrowRight, Check, X, Layers, Users, Zap, GitCommit } from 'lucide-react';

export const WhyDifferent: React.FC = () => {
  const pipeline = [
    { title: 'Research', desc: 'Synthesizing market context & evidence' },
    { title: 'Insight', desc: 'Distilling high-leverage strategic direction' },
    { title: 'Message', desc: 'Formulating clear executive copy & hooks' },
    { title: 'Content', desc: 'Designing brand-aligned visual assets' },
    { title: 'Creative', desc: 'Refining typography, layout, & video cuts' },
    { title: 'Execution', desc: 'Coordinating delivery & scheduled queues' },
    { title: 'Analysis', desc: 'Interpreting performance for continuous ROI' },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#F8F9F5]">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-[#14A800] uppercase mb-3">
            <span>Multidisciplinary Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#182321] tracking-tight leading-tight mb-4">
            One person. Multiple disciplines. Less coordination overhead.
          </h2>
          <p className="text-base sm:text-lg text-[#66736D] leading-relaxed">
            Most organizations normally fragment this workflow across seven separate individuals: a researcher,
            content strategist, copywriter, designer, social media manager, data analyst, and project coordinator.
            Every handoff introduces context loss, delays, and management friction.
          </p>
        </div>

        {/* Visual Pipeline Flow */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#DDE4DA] shadow-xs mb-10">
          <div className="text-xs font-mono text-[#66736D] uppercase tracking-wider mb-6">
            The Connected Value Chain
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3 relative">
            {pipeline.map((step, idx) => (
              <div
                key={step.title}
                className="relative flex flex-col p-4 rounded-xl bg-[#F8F9F5] border border-[#DDE4DA] hover:border-[#14A800]/40 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[11px] text-[#66736D]">0{idx + 1}</span>
                  {idx < pipeline.length - 1 && (
                    <ArrowRight className="hidden lg:block w-3.5 h-3.5 text-[#A1A39E]" />
                  )}
                </div>
                <h4 className="text-sm font-bold text-[#182321] mb-1">{step.title}</h4>
                <p className="text-xs text-[#66736D] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-[#DDE4DA] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="text-sm text-[#182321] font-medium leading-relaxed max-w-2xl">
              “This means less context switching, fewer handoffs, faster execution, and one person who understands
              why the work exists—not only what needs to be delivered.”
            </p>
            <span className="font-mono text-xs text-[#66736D] shrink-0">
              Zero coordination latency
            </span>
          </div>
        </div>

        {/* Side-by-side comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Traditional Agency / Fragmented Model */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white/60 border border-[#DDE4DA]">
            <div className="flex items-center gap-2 mb-4 text-xs font-mono text-[#66736D] uppercase">
              <span className="w-2 h-2 rounded-full bg-[#EF4444]" />
              <span>The Fragmented Agency / Freelancer Approach</span>
            </div>
            <ul className="space-y-3 text-sm text-[#66736D]">
              <li className="flex items-start gap-3">
                <X className="w-4 h-4 text-[#EF4444] shrink-0 mt-0.5" />
                <span>Endless briefing cycles and lost nuances between research and writing.</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-4 h-4 text-[#EF4444] shrink-0 mt-0.5" />
                <span>Designers working in a vacuum without understanding the strategic objective.</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-4 h-4 text-[#EF4444] shrink-0 mt-0.5" />
                <span>Heavy management overhead for the founder to constantly bridge communication gaps.</span>
              </li>
            </ul>
          </div>

          {/* Mohammad's Integrated Model */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#14A800]/40 shadow-xs relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#14A800]/5 rounded-bl-full pointer-events-none" />
            <div className="flex items-center gap-2 mb-4 text-xs font-mono text-[#14A800] uppercase font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#14A800]" />
              <span>Mohammad’s Integrated Partnership Model</span>
            </div>
            <ul className="space-y-3 text-sm text-[#182321]">
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-[#14A800] shrink-0 mt-0.5" />
                <span>Continuous intellectual thread from raw desk research directly into high-fidelity copy and graphics.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-[#14A800] shrink-0 mt-0.5" />
                <span>Operational accountability—identifying blockers and establishing SOPs so work flows autonomously.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-[#14A800] shrink-0 mt-0.5" />
                <span>Senior judgment: asking the right questions upfront rather than passively waiting for task checklists.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
