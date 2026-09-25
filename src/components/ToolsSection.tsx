import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Wrench, Check } from 'lucide-react';

export const ToolsSection: React.FC = () => {
  const { tools } = PORTFOLIO_DATA;

  return (
    <section className="py-20 md:py-24 bg-[#F8F9F5] border-b border-[#DDE4DA]">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-[#14A800] uppercase mb-3">
            <span>Workflow Infrastructure</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#182321] tracking-tight mb-4">
            Tools grouped strictly by workflow.
          </h2>
          <p className="text-base text-[#66736D]">
            No vanity logo soup. Only battle-tested platforms used regularly for communication, content production,
            data modeling, and operations management.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((group) => (
            <div
              key={group.category}
              className="p-6 rounded-3xl bg-white border border-[#DDE4DA] shadow-xs"
            >
              <h3 className="font-mono text-xs font-semibold text-[#182321] uppercase tracking-wider mb-4 pb-2 border-b border-[#DDE4DA]">
                {group.category}
              </h3>

              <div className="space-y-2">
                {group.tools.map((t) => (
                  <div key={t} className="flex items-center gap-2.5 text-xs text-[#182321]">
                    <div className="w-2 h-2 rounded-full bg-[#14A800]" />
                    <span>{t}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
