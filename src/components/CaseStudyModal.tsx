import React, { useState } from 'react';
import { Project, PORTFOLIO_DATA } from '../data/portfolioData';
import { X, ArrowRight, ArrowLeft, Check, Lock, Globe, Eye, FileText, CheckCircle2 } from 'lucide-react';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
  onSelectProject: (p: Project) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onSelectProject,
}) => {
  if (!project) return null;

  const allProjects = PORTFOLIO_DATA.projects;
  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];
  const prevProject = allProjects[(currentIndex - 1 + allProjects.length) % allProjects.length];

  // State for interactive modules
  const [activeVoiceTab, setActiveVoiceTab] = useState<'wellbeing' | 'parent' | 'cultural' | 'executive'>('wellbeing');
  const [activeDataView, setActiveDataView] = useState<'brief' | 'raw'>('brief');

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex justify-center items-start p-3 sm:p-6 lg:p-10 animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-[#DDE4DA] overflow-hidden my-auto">
        {/* Top Control Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-white/95 backdrop-blur-md border-b border-[#DDE4DA]">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-[#62666D] uppercase">Case Study</span>
            <span className="text-xs text-[#DDE4DA]">/</span>
            <span className="text-xs font-semibold text-[#101113] truncate max-w-xs sm:max-w-md">
              {project.client}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className={`text-[11px] font-mono px-2 py-0.5 rounded ${
              project.confidentiality === 'confidential'
                ? 'bg-amber-100 text-amber-800'
                : project.confidentiality === 'limited'
                ? 'bg-[#E5ECE2] text-[#304A32]'
                : 'bg-emerald-50 text-[#14A800]'
            }`}>
              {project.confidentiality === 'confidential' ? 'Confidential Project' : 'Public Portfolio'}
            </span>

            <button
              onClick={onClose}
              className="p-1.5 text-[#62666D] hover:text-[#101113] hover:bg-[#F2F3EF] rounded-lg transition-colors"
              aria-label="Close Case Study"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-10 max-h-[82vh] overflow-y-auto">
          {/* Header & Transformation Outcome */}
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs font-mono text-[#14A800] uppercase tracking-wider mb-2">
              <span>{project.industry}</span>
              <span>·</span>
              <span>{project.duration}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#101113] tracking-tight leading-tight mb-4">
              {project.title}
            </h1>
            <p className="text-base sm:text-lg text-[#14A800] font-medium leading-snug">
              {project.outcomeHeadline}
            </p>
          </div>

          {/* Project Snapshot Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-xl bg-[#F8F9F5] border border-[#DDE4DA] mb-10 text-xs">
            <div>
              <span className="text-[#62666D] font-mono block mb-1">Client</span>
              <span className="font-semibold text-[#101113]">{project.client}</span>
            </div>
            <div>
              <span className="text-[#62666D] font-mono block mb-1">Role</span>
              <span className="font-semibold text-[#101113]">{project.role}</span>
            </div>
            <div>
              <span className="text-[#62666D] font-mono block mb-1">Duration</span>
              <span className="font-semibold text-[#101113]">{project.duration}</span>
            </div>
            <div>
              <span className="text-[#62666D] font-mono block mb-1">Services</span>
              <span className="font-semibold text-[#101113]">{project.services.join(', ')}</span>
            </div>
          </div>

          {/* Context & Challenge */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 pb-10 border-b border-[#DDE4DA]">
            <div>
              <h3 className="text-sm font-mono uppercase tracking-wider text-[#62666D] mb-3">
                01 Context: What Was Happening?
              </h3>
              <p className="text-sm text-[#101113] leading-relaxed">
                {project.context}
              </p>
            </div>
            <div>
              <h3 className="text-sm font-mono uppercase tracking-wider text-[#62666D] mb-3">
                02 The Challenge: What Needed To Change?
              </h3>
              <p className="text-sm text-[#101113] leading-relaxed">
                {project.challenge}
              </p>
            </div>
          </div>

          {/* Interactive Case Study Deliverable Embeds */}
          {project.interactiveType === 'growth-chart' && (
            <div className="p-6 rounded-2xl bg-[#182321] text-white mb-10 border border-[#27272A]">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-[#14A800]">Interactive Growth Model</span>
                <span className="text-xs text-white/60 font-mono">1,500 → 17,000 Followers (~2 Years)</span>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-white/80">
                    <span>Month 0: Erratic Cadence & Static Reach</span>
                    <span className="font-mono">1,500 followers</span>
                  </div>
                  <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-slate-500 rounded-full w-[9%]" />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-white/80">
                    <span>Month 6: Systemized Content Pillars & Micro-Carousels</span>
                    <span className="font-mono">4,800 followers</span>
                  </div>
                  <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-[#14A800] rounded-full w-[28%]" />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-white/80">
                    <span>Month 14: Daily Peer Engagement & High-Authority Commenting</span>
                    <span className="font-mono">10,200 followers</span>
                  </div>
                  <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-[#108A00] rounded-full w-[60%]" />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-white/80">
                    <span>Month 24: Compounded Category Authority & Inbound Retainers</span>
                    <span className="font-mono font-bold text-[#10B981]">17,000 followers (~10× Expansion)</span>
                  </div>
                  <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-[#10B981] rounded-full w-[100%]" />
                  </div>
                </div>
              </div>
              <p className="text-[11px] text-white/50 mt-4 font-mono">
                *Data verified via client reporting. Framed not as viral spikes, but as long-term operational consistency.
              </p>
            </div>
          )}

          {project.interactiveType === 'tone-matrix' && (
            <div className="p-6 rounded-2xl bg-white border border-[#DDE4DA] shadow-xs mb-10">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-[#DDE4DA]">
                <span className="text-xs font-mono uppercase tracking-wider text-[#62666D]">
                  Interactive Brand Voice Calibration Switcher
                </span>
                <div className="flex items-center gap-1 bg-[#F2F3EF] p-1 rounded-lg">
                  <button
                    onClick={() => setActiveVoiceTab('wellbeing')}
                    className={`px-2.5 py-1 text-xs font-medium rounded transition-colors ${
                      activeVoiceTab === 'wellbeing' ? 'bg-white text-[#101113] shadow-xs' : 'text-[#62666D]'
                    }`}
                  >
                    Wellbeing Voice
                  </button>
                  <button
                    onClick={() => setActiveVoiceTab('parent')}
                    className={`px-2.5 py-1 text-xs font-medium rounded transition-colors ${
                      activeVoiceTab === 'parent' ? 'bg-white text-[#101113] shadow-xs' : 'text-[#62666D]'
                    }`}
                  >
                    Parenting Voice
                  </button>
                  <button
                    onClick={() => setActiveVoiceTab('cultural')}
                    className={`px-2.5 py-1 text-xs font-medium rounded transition-colors ${
                      activeVoiceTab === 'cultural' ? 'bg-white text-[#101113] shadow-xs' : 'text-[#62666D]'
                    }`}
                  >
                    Cultural Heritage
                  </button>
                  <button
                    onClick={() => setActiveVoiceTab('executive')}
                    className={`px-2.5 py-1 text-xs font-medium rounded transition-colors ${
                      activeVoiceTab === 'executive' ? 'bg-white text-[#101113] shadow-xs' : 'text-[#62666D]'
                    }`}
                  >
                    Founder Executive
                  </button>
                </div>
              </div>

              {activeVoiceTab === 'wellbeing' && (
                <div className="space-y-3">
                  <div className="p-3 bg-[#F8F9F5] rounded-lg">
                    <span className="text-xs font-mono text-[#14A800] block mb-1">Tone & Posture:</span>
                    <p className="text-xs text-[#101113]">Calm, reflective, clinically responsible, psychologically safe.</p>
                  </div>
                  <div className="p-3 bg-[#F8F9F5] rounded-lg">
                    <span className="text-xs font-mono text-[#059669] block mb-1">Sample Engagement Hook:</span>
                    <p className="text-xs text-[#101113] italic">
                      “Burnout in high-performance teams is rarely an issue of individual resilience. More often, it’s an architecture problem—how meetings are timed, how boundaries are defended, and how silence is interpreted.”
                    </p>
                  </div>
                  <div className="text-[11px] text-[#62666D]">
                    <strong>Vocabulary Rule:</strong> Prohibit aggressive hustle slang; prioritize systemic workplace hygiene.
                  </div>
                </div>
              )}

              {activeVoiceTab === 'parent' && (
                <div className="space-y-3">
                  <div className="p-3 bg-[#F8F9F5] rounded-lg">
                    <span className="text-xs font-mono text-[#14A800] block mb-1">Tone & Posture:</span>
                    <p className="text-xs text-[#101113]">Encouraging, imaginative, educational, parent-focused.</p>
                  </div>
                  <div className="p-3 bg-[#F8F9F5] rounded-lg">
                    <span className="text-xs font-mono text-[#059669] block mb-1">Sample Engagement Hook:</span>
                    <p className="text-xs text-[#101113] italic">
                      “Children don’t need more screen time or stricter drills—they need creative prompts that make them feel like authors of their own curiosity.”
                    </p>
                  </div>
                  <div className="text-[11px] text-[#62666D]">
                    <strong>Vocabulary Rule:</strong> Warm, empowering, accessible, never clinical or punitive.
                  </div>
                </div>
              )}

              {activeVoiceTab === 'cultural' && (
                <div className="space-y-3">
                  <div className="p-3 bg-[#F8F9F5] rounded-lg">
                    <span className="text-xs font-mono text-[#14A800] block mb-1">Tone & Posture:</span>
                    <p className="text-xs text-[#101113]">Reverent, community-centered, culturally aware, historical.</p>
                  </div>
                  <div className="p-3 bg-[#F8F9F5] rounded-lg">
                    <span className="text-xs font-mono text-[#059669] block mb-1">Sample Engagement Hook:</span>
                    <p className="text-xs text-[#101113] italic">
                      “Preserving 18th-century architectural heritage in 3D is not merely technical archiving—it’s handing our grandchildren their living history in full color.”
                    </p>
                  </div>
                  <div className="text-[11px] text-[#62666D]">
                    <strong>Vocabulary Rule:</strong> Factually verified against archival scholars; zero sensationalism.
                  </div>
                </div>
              )}

              {activeVoiceTab === 'executive' && (
                <div className="space-y-3">
                  <div className="p-3 bg-[#F8F9F5] rounded-lg">
                    <span className="text-xs font-mono text-[#14A800] block mb-1">Tone & Posture:</span>
                    <p className="text-xs text-[#101113]">Conversational, thoughtful, relationship-driven, pragmatic.</p>
                  </div>
                  <div className="p-3 bg-[#F8F9F5] rounded-lg">
                    <span className="text-xs font-mono text-[#059669] block mb-1">Sample Engagement Hook:</span>
                    <p className="text-xs text-[#101113] italic">
                      “The fastest way to scale a professional services boutique isn’t hiring more juniors—it’s packaging your senior judgment into predictable delivery workflows.”
                    </p>
                  </div>
                  <div className="text-[11px] text-[#62666D]">
                    <strong>Vocabulary Rule:</strong> Direct, outcome-oriented, zero fluff or artificial jargon.
                  </div>
                </div>
              )}
            </div>
          )}

          {project.interactiveType === 'content-pillars' && (
            <div className="p-6 rounded-2xl bg-[#F8F9F5] border border-[#DDE4DA] mb-10">
              <span className="text-xs font-mono uppercase tracking-wider text-[#62666D] block mb-3">
                Florida Content Pillar Operating System (7 Pillars)
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
                <div className="p-3 bg-white rounded-lg border border-[#DDE4DA]">
                  <span className="font-mono text-[#14A800] block mb-1">Pillar 1: Social Proof</span>
                  <p className="text-[#62666D]">Customer move-day video reactions, 5-star Google review spotlights.</p>
                </div>
                <div className="p-3 bg-white rounded-lg border border-[#DDE4DA]">
                  <span className="font-mono text-[#14A800] block mb-1">Pillar 2: Behind The Scenes</span>
                  <p className="text-[#62666D]">Crew packing techniques, equipment maintenance, veteran camaraderie.</p>
                </div>
                <div className="p-3 bg-white rounded-lg border border-[#DDE4DA]">
                  <span className="font-mono text-[#14A800] block mb-1">Pillar 3: FL Realities</span>
                  <p className="text-[#62666D]">Moving in rain season, heat hydration, elevator reservation rules.</p>
                </div>
                <div className="p-3 bg-white rounded-lg border border-[#DDE4DA]">
                  <span className="font-mono text-[#14A800] block mb-1">Pillar 4: Packing Education</span>
                  <p className="text-[#62666D]">How to wrap antiques, box weight limits, labeling room schematics.</p>
                </div>
                <div className="p-3 bg-white rounded-lg border border-[#DDE4DA]">
                  <span className="font-mono text-[#14A800] block mb-1">Pillar 5: City Guides</span>
                  <p className="text-[#62666D]">Tampa vs. Orlando relocation checklist, neighborhood access laws.</p>
                </div>
                <div className="p-3 bg-white rounded-lg border border-[#DDE4DA]">
                  <span className="font-mono text-[#14A800] block mb-1">Pillar 6: Problem Solving</span>
                  <p className="text-[#62666D]">Tight staircases, last-minute closing delays, insurance facts.</p>
                </div>
              </div>
            </div>
          )}

          {project.interactiveType === 'data-pipeline' && (
            <div className="p-6 rounded-2xl bg-white border border-[#DDE4DA] mb-10 shadow-xs">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase tracking-wider text-[#62666D]">
                  From Raw Data to Executive Briefing
                </span>
                <div className="flex items-center gap-1 bg-[#F2F3EF] p-1 rounded-lg">
                  <button
                    onClick={() => setActiveDataView('brief')}
                    className={`px-3 py-1 text-xs font-medium rounded ${
                      activeDataView === 'brief' ? 'bg-white text-[#101113] shadow-xs' : 'text-[#62666D]'
                    }`}
                  >
                    Synthesized Brief (2 min)
                  </button>
                  <button
                    onClick={() => setActiveDataView('raw')}
                    className={`px-3 py-1 text-xs font-medium rounded ${
                      activeDataView === 'raw' ? 'bg-white text-[#101113] shadow-xs' : 'text-[#62666D]'
                    }`}
                  >
                    Raw Data Source
                  </button>
                </div>
              </div>

              {activeDataView === 'brief' ? (
                <div className="p-4 bg-[#F8F9F5] rounded-xl border border-[#DDE4DA] space-y-3 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                    <span className="font-mono font-semibold text-[#101113]">EXECUTIVE SUMMARY & DECISION</span>
                  </div>
                  <p className="text-[#101113] leading-relaxed">
                    “After normalizing 340 survey entries across 12 sector benchmarks, data demonstrates that customer churn is driven by onboarding latency, not product pricing. Automating week-1 touchpoints resolves 68% of cancellations.”
                  </p>
                  <div className="pt-2 flex items-center justify-between text-[11px] text-[#62666D] border-t border-[#DDE4DA]">
                    <span>Decision Impact: Unanimous capital reallocation approved</span>
                    <span className="font-mono text-[#14A800]">Time to read: 45 seconds</span>
                  </div>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-[11px] text-left border-collapse font-mono">
                    <thead>
                      <tr className="bg-[#F2F3EF] text-[#62666D]">
                        <th className="p-2 border border-[#DDE4DA]">Cohort ID</th>
                        <th className="p-2 border border-[#DDE4DA]">Raw Score</th>
                        <th className="p-2 border border-[#DDE4DA]">Standardized Deviation</th>
                        <th className="p-2 border border-[#DDE4DA]">Status</th>
                      </tr>
                    </thead>
                    <tbody className="text-[#101113]">
                      <tr>
                        <td className="p-2 border border-[#DDE4DA]">C-0914-A</td>
                        <td className="p-2 border border-[#DDE4DA]">4.21</td>
                        <td className="p-2 border border-[#DDE4DA]">+0.34 sigma</td>
                        <td className="p-2 border border-[#DDE4DA] text-[#059669]">Normalized</td>
                      </tr>
                      <tr>
                        <td className="p-2 border border-[#DDE4DA]">C-0914-B</td>
                        <td className="p-2 border border-[#DDE4DA]">3.08</td>
                        <td className="p-2 border border-[#DDE4DA]">-0.82 sigma</td>
                        <td className="p-2 border border-[#DDE4DA] text-[#059669]">Normalized</td>
                      </tr>
                      <tr>
                        <td className="p-2 border border-[#DDE4DA]">C-0914-C</td>
                        <td className="p-2 border border-[#DDE4DA]">4.88</td>
                        <td className="p-2 border border-[#DDE4DA]">+1.12 sigma</td>
                        <td className="p-2 border border-[#DDE4DA] text-[#059669]">Normalized</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}

          {/* What Mohammad Owned */}
          <div className="mb-10">
            <h3 className="text-sm font-mono uppercase tracking-wider text-[#62666D] mb-4">
              03 What I Personally Owned
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.responsibilities.map((resp, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-[#F8F9F5] border border-[#DDE4DA] flex items-start gap-2.5 text-xs text-[#101113]"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#14A800] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{resp}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Approach & System Process */}
          <div className="mb-10">
            <h3 className="text-sm font-mono uppercase tracking-wider text-[#62666D] mb-4">
              04 System / Process Architecture
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {project.systemProcess.map((proc, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white border border-[#DDE4DA] shadow-2xs"
                >
                  <span className="font-mono text-[11px] text-[#14A800] block mb-1">
                    Step 0{idx + 1} · {proc.step}
                  </span>
                  <p className="text-xs text-[#62666D] leading-relaxed">
                    {proc.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Deliverables Produced */}
          <div className="mb-10">
            <h3 className="text-sm font-mono uppercase tracking-wider text-[#62666D] mb-3">
              05 Key Tangible Deliverables
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#101113]">
              {project.deliverables.map((del) => (
                <li key={del} className="flex items-center gap-2 p-2.5 rounded-lg bg-[#F8F9F5]">
                  <FileText className="w-3.5 h-3.5 text-[#62666D]" />
                  <span>{del}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Verified Outcome */}
          <div className="p-6 rounded-2xl bg-[#182321] text-white mb-10">
            <span className="font-mono text-xs uppercase tracking-wider text-[#14A800] block mb-2">
              06 Transformation & Outcome
            </span>
            <p className="text-base sm:text-lg font-medium leading-relaxed text-white">
              {project.outcome}
            </p>
          </div>

          {/* What This Project Demonstrates */}
          <div className="mb-8">
            <span className="text-xs font-mono uppercase tracking-wider text-[#62666D] block mb-3">
              What This Project Demonstrates
            </span>
            <div className="flex flex-wrap gap-2">
              {project.whatItDemonstrates.map((point) => (
                <span
                  key={point}
                  className="text-xs text-[#101113] bg-[#F2F3EF] px-3 py-1.5 rounded-lg border border-[#DDE4DA]"
                >
                  {point}
                </span>
              ))}
            </div>
          </div>

          {/* Navigation to Next / Previous Case Study */}
          <div className="pt-6 border-t border-[#DDE4DA] flex items-center justify-between">
            <button
              onClick={() => onSelectProject(prevProject)}
              className="inline-flex items-center gap-2 text-xs font-medium text-[#62666D] hover:text-[#101113] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Previous Case Study</span>
            </button>

            <button
              onClick={() => onSelectProject(nextProject)}
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#14A800] hover:text-[#108A00] transition-colors"
            >
              <span>Next: {nextProject.client}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
