import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { GraduationCap, BookOpen, Layers, CheckCircle2 } from 'lucide-react';

export const EducationSection: React.FC = () => {
  const { education } = PORTFOLIO_DATA;

  return (
    <section className="py-20 md:py-24 bg-white border-b border-[#DDE4DA]">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-[#14A800] uppercase mb-3">
            <span>Academic Foundations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#182321] tracking-tight mb-4">
            Multidisciplinary academic rigor.
          </h2>
          <p className="text-base text-[#66736D] leading-relaxed">
            Planning taught systems thinking. Public health strengthened empirical research and evidence evaluation.
            Development studies added social and institutional context. A decade of client partnership turned those disciplines into dependable execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {education.map((item, idx) => (
            <div
              key={item.degree}
              className="p-6 sm:p-7 rounded-3xl bg-[#F8F9F5] border border-[#DDE4DA] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 bg-white rounded-xl border border-[#DDE4DA]">
                    <GraduationCap className="w-5 h-5 text-[#182321]" />
                  </div>
                  <span className="font-mono text-xs text-[#66736D]">Degree 0{idx + 1}</span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-[#182321] mb-1">
                  {item.degree}
                </h3>
                <span className="text-xs font-mono text-[#14A800] font-semibold block mb-4">
                  {item.institution}
                </span>

                <p className="text-xs sm:text-sm text-[#66736D] leading-relaxed">
                  {item.advantage}
                </p>
              </div>

              <div className="pt-4 border-t border-[#DDE4DA] mt-6 flex items-center gap-2 text-xs text-[#182321] font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#14A800]" />
                <span>Verified Academic Foundation</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
