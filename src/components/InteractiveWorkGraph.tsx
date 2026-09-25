import React, { useState, useEffect } from 'react';
import {
  Search,
  Sparkles,
  Layers,
  FileText,
  Activity,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  Play,
  Pause,
  RotateCcw,
  Zap,
  ShieldCheck,
} from 'lucide-react';

interface WorkPhase {
  id: string;
  step: string;
  name: string;
  shortTag: string;
  headline: string;
  description: string;
  input: string;
  ownership: string[];
  deliverable: string;
  impactMetric: string;
}

const WORK_PHASES: WorkPhase[] = [
  {
    id: 'discovery',
    step: '01',
    name: 'Context & Discovery',
    shortTag: 'Context First',
    headline: 'Uncovering the business intent and core constraints before writing a single word.',
    description:
      'I begin by diagnosing why the work exists. I interview stakeholders or parse raw voice notes, map the target executive audience, identify operational constraints, and define explicit success metrics.',
    input: 'Founder voice notes, scattered notes, past campaigns, and target audience persona.',
    ownership: [
      'Strategic intake questionnaire & alignment memo',
      'Stakeholder vocabulary & forbidden phrases guide',
      'Definition of done & KPI targets',
    ],
    deliverable: 'Strategic Context Charter',
    impactMetric: 'Zero wasted briefing cycles',
  },
  {
    id: 'research',
    step: '02',
    name: 'Evidence & Research',
    shortTag: 'Signal Extraction',
    headline: 'Finding empirical signal inside messy information and competitive noise.',
    description:
      'Desk research, competitor audit, qualitative audience listening, and raw dataset aggregation. Every recommendation is grounded in verified benchmarks rather than guesswork.',
    input: 'Competitor posts, industry surveys, academic sources, customer feedback logs.',
    ownership: [
      'Desk research & competitive landscape audit',
      'Survey data cleaning & normalization',
      'Topic demand & keyword opportunity scan',
    ],
    deliverable: 'Decision-Ready Research Dossier',
    impactMetric: '100% evidence-backed positioning',
  },
  {
    id: 'architecture',
    step: '03',
    name: 'System Architecture',
    shortTag: 'Repeatable Systems',
    headline: 'Building predictable operating pipelines that prevent last-minute firefighting.',
    description:
      'Translating research into modular content pillars, standard operating procedures (SOPs), weekly publication cadences, and clear sprint milestone boards.',
    input: 'Strategic goals, research findings, team availability calendar.',
    ownership: [
      '7-Pillar content & messaging framework',
      'Standard Operating Procedures (SOPs)',
      'Editorial calendar & production roadmap',
    ],
    deliverable: 'Scalable Operating Blueprint',
    impactMetric: 'Compounding operational velocity',
  },
  {
    id: 'production',
    step: '04',
    name: 'Content & Polish',
    shortTag: 'High-Retention Craft',
    headline: 'Writing high-authority copy and designing visual assets with zero tonal bleed.',
    description:
      'Crafting executive LinkedIn posts, editorial carousels, short-form video cutdowns, presentation decks, and Figma wireframes tailored strictly to the client’s authentic voice.',
    input: 'Approved topics, raw media assets, founder viewpoints.',
    ownership: [
      'Executive-grade long-form & micro copywriting',
      'Figma & Canva typography-led carousel graphics',
      'Short-form vertical video pacing & captions',
    ],
    deliverable: 'Production-Ready Asset Packs',
    impactMetric: '10× audience resonance & authority',
  },
  {
    id: 'execution',
    step: '05',
    name: 'Cadence & Operations',
    shortTag: 'Disciplined Delivery',
    headline: 'Managing queues, asynchronous follow-ups, and proactive deliverable QA.',
    description:
      'Publishing scheduling across peak engagement windows, managing high-touch peer commentary on LinkedIn, tracking sprint deliverables, and removing roadblocks.',
    input: 'Approved assets, distribution schedule, peer engagement targets.',
    ownership: [
      'Queue management across LinkedIn & Meta Suite',
      'High-impact peer dialogue & comment engagement',
      'Cross-functional QA & deliverable tracking',
    ],
    deliverable: 'Autonomous Cadence Management',
    impactMetric: '100% on-time delivery track record',
  },
  {
    id: 'reporting',
    step: '06',
    name: 'Analysis & Refinement',
    shortTag: 'Continuous ROI',
    headline: 'Translating analytics into executive decisions and compounding next-cycle ROI.',
    description:
      'Reviewing performance data, audience resonance patterns, and operational bottlenecks. Synthesizing numbers into a concise 2-minute executive briefing with actionable recommendations.',
    input: 'Platform analytics, engagement rates, inbound inquiries, retention data.',
    ownership: [
      'Monthly executive performance briefing',
      'Topic affinity & audience expansion analysis',
      'Process optimization notes for next sprint',
    ],
    deliverable: 'Executive Decision Briefing',
    impactMetric: 'Continuous compound growth',
  },
];

export const InteractiveWorkGraph: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(2); // Default: System Architecture
  const [isPlaying, setIsPlaying] = useState(false);

  const activePhase = WORK_PHASES[activeStepIndex];

  // Auto-play interactive tour
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveStepIndex((prev) => (prev + 1) % WORK_PHASES.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div className="w-full rounded-3xl bg-white border border-[#DDE4DA] p-6 sm:p-8 lg:p-10 shadow-xs">
      {/* Header & Controls Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#DDE4DA] mb-8">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#14A800]" />
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#304A32]">
              Interactive Operating Workflow
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-[#182321] tracking-tight">
            How The Work Gets Done: From Raw Ambiguity to Reliable Results
          </h3>
        </div>

        {/* Tour Control & Reset */}
        <div className="flex items-center gap-2 self-start sm:self-auto">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-mono border transition-all ${
              isPlaying
                ? 'bg-[#14A800] text-white border-[#14A800] shadow-2xs'
                : 'bg-[#F8F9F5] text-[#182321] border-[#DDE4DA] hover:bg-[#EBF8EA] hover:border-[#14A800]/40'
            }`}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            <span>{isPlaying ? 'Pause Simulation' : 'Run Interactive Tour'}</span>
          </button>

          <button
            onClick={() => {
              setIsPlaying(false);
              setActiveStepIndex(0);
            }}
            className="p-1.5 text-[#66736D] hover:text-[#182321] rounded-lg hover:bg-[#F8F9F5] border border-transparent hover:border-[#DDE4DA] transition-colors"
            title="Reset to Phase 01"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Visual Interactive Pipeline Graph Ribbon */}
      <div className="mb-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 relative">
          {WORK_PHASES.map((phase, idx) => {
            const isSelected = activeStepIndex === idx;
            const isPassed = idx < activeStepIndex;

            return (
              <button
                key={phase.id}
                onClick={() => {
                  setIsPlaying(false);
                  setActiveStepIndex(idx);
                }}
                className={`relative p-3.5 sm:p-4 rounded-2xl text-left border transition-all flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#182321] text-white border-[#182321] shadow-md ring-2 ring-[#14A800]/30 -translate-y-1'
                    : 'bg-[#F8F9F5] text-[#182321] border-[#DDE4DA] hover:bg-[#F1F4EE] hover:border-[#14A800]/40'
                }`}
              >
                {/* Step pill & Progress indicator */}
                <div className="flex items-center justify-between mb-3 w-full">
                  <span
                    className={`font-mono text-xs font-bold ${
                      isSelected ? 'text-[#14A800]' : 'text-[#66736D]'
                    }`}
                  >
                    {phase.step}
                  </span>

                  <span
                    className={`w-2 h-2 rounded-full ${
                      isSelected
                        ? 'bg-[#14A800] animate-ping'
                        : isPassed
                        ? 'bg-[#14A800]'
                        : 'bg-[#DDE4DA]'
                    }`}
                  />
                </div>

                <div>
                  <h4 className="text-xs sm:text-sm font-bold block leading-snug mb-1">
                    {phase.name}
                  </h4>
                  <span
                    className={`text-[11px] font-mono block ${
                      isSelected ? 'text-white/70' : 'text-[#66736D]'
                    }`}
                  >
                    {phase.shortTag}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Progress Timeline Ribbon */}
        <div className="w-full bg-[#E5ECE2] h-1.5 rounded-full mt-4 overflow-hidden">
          <div
            className="bg-[#14A800] h-full transition-all duration-500 rounded-full"
            style={{ width: `${((activeStepIndex + 1) / WORK_PHASES.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Selected Phase Deep Dive Display */}
      <div className="rounded-2xl bg-[#F8F9F5] border border-[#DDE4DA] p-6 sm:p-8">
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 pb-8 border-b border-[#DDE4DA]">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2.5 mb-3">
              <span className="font-mono text-xs text-[#14A800] bg-[#EBF8EA] font-semibold px-3 py-1 rounded-full border border-[#14A800]/20">
                Phase {activePhase.step} of 06 · {activePhase.shortTag}
              </span>
              <span className="text-xs text-[#66736D] font-mono">Status: Active Inspection</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-[#182321] tracking-tight mb-3">
              {activePhase.name}
            </h3>

            <p className="text-base text-[#182321] font-medium leading-relaxed mb-4">
              {activePhase.headline}
            </p>

            <p className="text-sm text-[#66736D] leading-relaxed">
              {activePhase.description}
            </p>
          </div>

          {/* Right Card: Tangible Deliverable & Output Metric */}
          <div className="lg:w-80 shrink-0 bg-white p-5 rounded-2xl border border-[#DDE4DA] shadow-xs space-y-4">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#66736D] block mb-1">
                Tangible Deliverable:
              </span>
              <div className="flex items-center gap-2 text-sm font-bold text-[#182321]">
                <FileText className="w-4 h-4 text-[#14A800] shrink-0" />
                <span>{activePhase.deliverable}</span>
              </div>
            </div>

            <div className="pt-3 border-t border-[#DDE4DA]">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#66736D] block mb-1">
                Executive Outcome:
              </span>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#14A800] bg-[#EBF8EA] px-2.5 py-1.5 rounded-lg">
                <CheckCircle2 className="w-4 h-4 text-[#14A800] shrink-0" />
                <span>{activePhase.impactMetric}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Granular Ownership & Inputs */}
        <div className="pt-6 grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-4">
            <span className="text-xs font-mono uppercase tracking-wider text-[#66736D] block mb-2">
              Raw Input & Context Required:
            </span>
            <p className="text-xs sm:text-sm text-[#182321] bg-white p-3.5 rounded-xl border border-[#DDE4DA] leading-relaxed">
              {activePhase.input}
            </p>
          </div>

          <div className="md:col-span-8">
            <span className="text-xs font-mono uppercase tracking-wider text-[#66736D] block mb-2">
              What Mohammad Personally Owns & Delivers:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {activePhase.ownership.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3 bg-white rounded-xl border border-[#DDE4DA] flex items-start gap-2 text-xs text-[#182321]"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#14A800] shrink-0 mt-0.5" />
                  <span className="leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
