import React, { useState } from 'react';
import { Search, Database, LineChart, FileText, CheckCircle2, ArrowRight } from 'lucide-react';

export const ResearchDataDeepDive: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const stages = [
    {
      step: '01',
      title: 'QUESTION',
      label: 'Strategic Framing',
      summary: 'Framing the exact decision criteria non-technical executives must evaluate.',
      detail: '“Where is operational drag occurring across enterprise onboarding, and what specific intervention yields the highest retention ROI?”',
      output: 'Investigation charter & metric boundaries',
    },
    {
      step: '02',
      title: 'DATA / SOURCES',
      label: 'Rigorous Sourcing',
      summary: 'Aggregating raw qualitative and quantitative inputs across multiple repositories.',
      detail: 'Standardized 340+ enterprise customer responses, 12 competitor benchmark filings, and internal onboarding timestamps into a unified model.',
      output: 'Multi-source raw aggregation database',
    },
    {
      step: '03',
      title: 'METHOD',
      label: 'Cleaning & Normalization',
      summary: 'Data cleaning, outlier removal, and categorical reconciliation in advanced spreadsheets.',
      detail: 'Eliminated anomalous latency artifacts, tagged verbatim text feedback into structured themes, and cross-referenced with account tiers.',
      output: 'Clean, auditable master workbook',
    },
    {
      step: '04',
      title: 'ANALYSIS',
      label: 'Pattern Identification',
      summary: 'Uncovering statistical correlations that overturn surface assumptions.',
      detail: 'Disproved the leadership assumption that price drove cancellations. Demonstrated that a 48-hour onboarding delay created an 84% probability of 90-day churn.',
      output: 'Correlation models & inflection graphs',
    },
    {
      step: '05',
      title: 'VISUALIZATION',
      label: 'Cognitive Ergonomics',
      summary: 'Translating dense matrices into clear, high-retention visual charts.',
      detail: 'Built an executive slide deck comparing the cost of manual onboarding versus automated day-1 touchpoints, legible in under 60 seconds.',
      output: 'Executive visual briefing pack',
    },
    {
      step: '06',
      title: 'DECISION',
      label: 'Capital Reallocation',
      summary: 'Converting empirical findings into unanimous leadership action.',
      detail: 'Leadership unanimously reallocated budget from ad acquisition into an automated onboarding sequence, reducing 90-day customer churn by 42%.',
      output: 'Board-approved operational mandate',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white border-b border-[#DDE4DA]">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-[#14A800] uppercase mb-3">
            <span>Research & Analytical Rigor</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#182321] tracking-tight leading-tight mb-4">
            From raw information to decision-ready insight.
          </h2>
          <p className="text-base sm:text-lg text-[#66736D] leading-relaxed">
            Data should answer a business question—not merely produce another chart. I bridge the gap between messy
            unstructured inputs, statistical clarity, and executive decision-making.
          </p>
        </div>

        {/* Interactive 6-Stage Methodology Walkthrough */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Step Selector */}
          <div className="lg:col-span-5 space-y-2">
            {stages.map((stg, idx) => {
              const isSelected = activeStep === idx;
              return (
                <button
                  key={stg.step}
                  onClick={() => setActiveStep(idx)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center justify-between ${
                    isSelected
                      ? 'bg-[#182321] text-white border-[#182321] shadow-xs'
                      : 'bg-[#F8F9F5] text-[#182321] border-[#DDE4DA] hover:bg-[#F1F4EE]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`font-mono text-xs font-bold ${isSelected ? 'text-[#14A800]' : 'text-[#66736D]'}`}>
                      {stg.step}
                    </span>
                    <div>
                      <span className="text-xs font-bold block">{stg.title}</span>
                      <span className={`text-[11px] ${isSelected ? 'text-white/70' : 'text-[#66736D]'}`}>
                        {stg.label}
                      </span>
                    </div>
                  </div>
                  <ArrowRight className={`w-4 h-4 ${isSelected ? 'text-[#14A800]' : 'text-[#A1A39E]'}`} />
                </button>
              );
            })}
          </div>

          {/* Right: Dynamic Stage Details Display */}
          <div className="lg:col-span-7 p-7 sm:p-9 rounded-3xl bg-[#182321] text-white border border-[#DDE4DA]/20 shadow-md">
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
              <span className="font-mono text-xs text-[#14A800] uppercase tracking-wider font-semibold">
                Phase {stages[activeStep].step} · {stages[activeStep].title}
              </span>
              <span className="text-xs font-mono text-white/50">
                {stages[activeStep].label}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              {stages[activeStep].summary}
            </h3>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 mb-6">
              <span className="text-xs font-mono uppercase tracking-wider text-[#14A800] block mb-2 font-semibold">
                Execution Detail & Empirical Finding
              </span>
              <p className="text-sm text-white/90 leading-relaxed font-sans">
                {stages[activeStep].detail}
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#14A800]" />
                <span className="text-white/80 font-medium">Deliverable: {stages[activeStep].output}</span>
              </div>
              <span className="font-mono text-[11px] text-white/40">Step {activeStep + 1} of 6</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
