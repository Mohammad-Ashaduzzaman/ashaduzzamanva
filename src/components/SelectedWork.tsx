import React, { useState } from 'react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';
import { ArrowUpRight, ArrowRight, ShieldCheck, Check, Sparkles } from 'lucide-react';

interface SelectedWorkProps {
  onOpenCaseStudy: (project: Project) => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({ onOpenCaseStudy }) => {
  const [filter, setFilter] = useState<'all' | 'social' | 'marketing-ops' | 'research-data' | 'product-ops'>('all');

  const filteredProjects = PORTFOLIO_DATA.projects.filter((p) => {
    if (filter === 'all') return true;
    return p.category === filter;
  });

  return (
    <section id="selected-work" className="py-20 md:py-28 bg-[#F8F9F5]">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-8">
          <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-[#14A800] uppercase mb-3">
            <span>Selected Work & Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#182321] tracking-tight leading-tight mb-4">
            Proven business impact, systematic execution.
          </h2>
          <p className="text-base text-[#66736D]">
            Every case study reflects deep ownership, strategic discipline, and verified outcomes across communication,
            marketing operations, research, and product coordination.
          </p>
        </div>

        {/* Interactive Filter Tabs - Full Length & Width of the Viewport */}
        <div className="w-full mb-10">
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 p-1.5 bg-white rounded-2xl border border-[#DDE4DA] shadow-2xs">
            <button
              onClick={() => setFilter('all')}
              className={`py-3 px-3 text-xs sm:text-sm font-semibold rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer ${
                filter === 'all'
                  ? 'bg-[#182321] text-white shadow-sm'
                  : 'text-[#66736D] hover:text-[#182321] hover:bg-[#F8F9F5]'
              }`}
            >
              <span>All Projects</span>
              <span
                className={`font-mono text-[11px] px-2 py-0.5 rounded-full ${
                  filter === 'all' ? 'bg-[#14A800] text-white' : 'bg-[#EBF8EA] text-[#14A800]'
                }`}
              >
                {PORTFOLIO_DATA.projects.length}
              </span>
            </button>

            <button
              onClick={() => setFilter('social')}
              className={`py-3 px-3 text-xs sm:text-sm font-semibold rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer ${
                filter === 'social'
                  ? 'bg-[#182321] text-white shadow-sm'
                  : 'text-[#66736D] hover:text-[#182321] hover:bg-[#F8F9F5]'
              }`}
            >
              <span>Social & Content</span>
              <span
                className={`font-mono text-[11px] px-2 py-0.5 rounded-full ${
                  filter === 'social' ? 'bg-[#14A800] text-white' : 'bg-[#EBF8EA] text-[#14A800]'
                }`}
              >
                {PORTFOLIO_DATA.projects.filter((p) => p.category === 'social').length}
              </span>
            </button>

            <button
              onClick={() => setFilter('marketing-ops')}
              className={`py-3 px-3 text-xs sm:text-sm font-semibold rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer ${
                filter === 'marketing-ops'
                  ? 'bg-[#182321] text-white shadow-sm'
                  : 'text-[#66736D] hover:text-[#182321] hover:bg-[#F8F9F5]'
              }`}
            >
              <span>Marketing Operations</span>
              <span
                className={`font-mono text-[11px] px-2 py-0.5 rounded-full ${
                  filter === 'marketing-ops' ? 'bg-[#14A800] text-white' : 'bg-[#EBF8EA] text-[#14A800]'
                }`}
              >
                {PORTFOLIO_DATA.projects.filter((p) => p.category === 'marketing-ops').length}
              </span>
            </button>

            <button
              onClick={() => setFilter('research-data')}
              className={`py-3 px-3 text-xs sm:text-sm font-semibold rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer ${
                filter === 'research-data'
                  ? 'bg-[#182321] text-white shadow-sm'
                  : 'text-[#66736D] hover:text-[#182321] hover:bg-[#F8F9F5]'
              }`}
            >
              <span>Research & Data</span>
              <span
                className={`font-mono text-[11px] px-2 py-0.5 rounded-full ${
                  filter === 'research-data' ? 'bg-[#14A800] text-white' : 'bg-[#EBF8EA] text-[#14A800]'
                }`}
              >
                {PORTFOLIO_DATA.projects.filter((p) => p.category === 'research-data').length}
              </span>
            </button>

            <button
              onClick={() => setFilter('product-ops')}
              className={`col-span-2 sm:col-span-1 py-3 px-3 text-xs sm:text-sm font-semibold rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer ${
                filter === 'product-ops'
                  ? 'bg-[#182321] text-white shadow-sm'
                  : 'text-[#66736D] hover:text-[#182321] hover:bg-[#F8F9F5]'
              }`}
            >
              <span>Product & Systems</span>
              <span
                className={`font-mono text-[11px] px-2 py-0.5 rounded-full ${
                  filter === 'product-ops' ? 'bg-[#14A800] text-white' : 'bg-[#EBF8EA] text-[#14A800]'
                }`}
              >
                {PORTFOLIO_DATA.projects.filter((p) => p.category === 'product-ops').length}
              </span>
            </button>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="space-y-6">
          {filteredProjects.map((project, index) => {
            const isFeaturedHero = index === 0;

            return (
              <div
                key={project.id}
                onClick={() => onOpenCaseStudy(project)}
                className={`group cursor-pointer rounded-3xl bg-white border border-[#DDE4DA] hover:border-[#14A800] hover:shadow-md transition-all p-6 sm:p-8 lg:p-10 flex flex-col justify-between ${
                  isFeaturedHero ? 'ring-1 ring-[#14A800]/20' : ''
                }`}
              >
                <div>
                  {/* Top metadata line: CLIENT / INDUSTRY · Unboxed */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4 text-xs font-mono">
                    <div className="flex items-center gap-2 text-[#66736D]">
                      <span className="font-semibold text-[#182321]">{project.client}</span>
                      <span aria-hidden="true">/</span>
                      <span>{project.industry}</span>
                      <span aria-hidden="true">·</span>
                      <span>{project.duration}</span>
                    </div>

                    <span className="text-[11px] text-[#304A32] bg-[#EBF8EA] font-semibold px-2.5 py-1 rounded-full">
                      {project.role}
                    </span>
                  </div>

                  {/* Title & One-Line Transformation Outcome */}
                  <div className="max-w-4xl mb-6">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#182321] tracking-tight group-hover:text-[#14A800] transition-colors mb-3">
                      {project.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#14A800] font-semibold leading-relaxed">
                      {project.outcomeHeadline}
                    </p>
                  </div>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-[#66736D] leading-relaxed mb-6 max-w-3xl">
                    {project.summary}
                  </p>

                  {/* What I Owned Bulleted Fragment */}
                  <div className="pt-5 border-t border-[#DDE4DA] mb-6">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#66736D] block mb-3">
                      What I Personally Owned & Executed:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {project.responsibilities.slice(0, 3).map((item, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-[#182321]">
                          <Check className="w-3.5 h-3.5 text-[#14A800] shrink-0 mt-0.5" />
                          <span className="leading-snug">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer: Services + View Action */}
                <div className="pt-4 border-t border-[#DDE4DA]/60 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-[#66736D] font-mono">
                    {project.services.map((service, idx) => (
                      <span key={service} className="flex items-center gap-1.5">
                        {idx > 0 && <span aria-hidden="true" className="text-[#CBD5E1]">·</span>}
                        <span>{service}</span>
                      </span>
                    ))}
                  </div>

                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#182321] group-hover:text-[#14A800] transition-colors">
                    <span>VIEW CASE STUDY</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
