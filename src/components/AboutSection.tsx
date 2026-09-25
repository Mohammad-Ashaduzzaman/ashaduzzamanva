import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Check, Shield, Compass, Sparkles, Target } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { principles } = PORTFOLIO_DATA;

  return (
    <section id="about" className="py-20 md:py-28 bg-[#F8F9F5] border-b border-[#DDE4DA]">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          {/* Left Narrative */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-[#14A800] uppercase mb-3">
              <span>Career Narrative</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#182321] tracking-tight leading-tight mb-6">
              Why multidisciplinary capability matters.
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-[#66736D] leading-relaxed">
              <p className="font-serif italic text-[#182321] text-lg sm:text-xl">
                “I started freelancing in 2017 and quickly learned that clients rarely have isolated problems.”
              </p>
              <p>
                A social media problem is often a communication problem. A communication problem may actually be a research problem.
                A delayed project is almost always a systems problem. And data becomes useful only when someone can explain what it means.
              </p>
              <p>
                That is why my career gradually expanded across communication, content, research, data, creative work, and project execution.
                Today I bring those disciplines together to help founders and teams move from scattered information and unfinished ideas to organized, useful work.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#DDE4DA] flex flex-wrap gap-4 text-xs font-mono text-[#182321]">
              <span className="p-2.5 bg-white rounded-xl border border-[#DDE4DA]">
                10+ Years Professional Experience
              </span>
              <span className="p-2.5 bg-white rounded-xl border border-[#DDE4DA]">
                Top Rated on Upwork (100% JSS)
              </span>
              <span className="p-2.5 bg-white rounded-xl border border-[#DDE4DA]">
                Multidisciplinary Academic Foundation
              </span>
            </div>
          </div>

          {/* Right: Key Operating Metrics & Focus */}
          <div className="lg:col-span-5 p-7 sm:p-8 rounded-3xl bg-white border border-[#DDE4DA] shadow-xs">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#66736D] mb-4 pb-2 border-b border-[#DDE4DA]">
              Operational Profile
            </h3>

            <div className="space-y-4 text-xs">
              <div>
                <span className="text-[#66736D] font-mono block">Primary Positioning</span>
                <span className="font-semibold text-[#182321] text-sm">
                  Communication & Marketing Operations Specialist
                </span>
              </div>

              <div>
                <span className="text-[#66736D] font-mono block">Target Partnership</span>
                <span className="font-medium text-[#182321]">
                  Long-term retainers ($2,500–$4,500+/mo), fractional right-hand roles, senior operations support
                </span>
              </div>

              <div>
                <span className="text-[#66736D] font-mono block">Core Values</span>
                <span className="font-medium text-[#182321]">
                  High emotional intelligence, asynchronous clarity, proactive ownership, zero vanity metrics
                </span>
              </div>

              <div>
                <span className="text-[#66736D] font-mono block">Engagement Location</span>
                <span className="font-medium text-[#182321]">
                  Global remote-first organizations (US, UK, Europe, Australia, International)
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 5 Personal Brand Principles */}
        <div className="pt-12 border-t border-[#DDE4DA]">
          <div className="max-w-2xl mb-8">
            <span className="font-mono text-xs uppercase tracking-wider text-[#14A800] block mb-2 font-semibold">
              Core Principles
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#182321] tracking-tight">
              Five principles governing my work.
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {principles.map((pr, idx) => (
              <div
                key={pr.title}
                className="p-5 rounded-2xl bg-white border border-[#DDE4DA] shadow-2xs flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-xs text-[#14A800] font-bold block mb-2">
                    0{idx + 1}
                  </span>
                  <h4 className="text-sm font-bold text-[#182321] mb-2">{pr.title}</h4>
                  <p className="text-xs text-[#66736D] leading-relaxed">{pr.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
