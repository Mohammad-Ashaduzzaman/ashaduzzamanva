import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Quote, CheckCircle, Star } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const { testimonials } = PORTFOLIO_DATA;

  return (
    <section className="py-20 md:py-28 bg-white border-b border-[#E2E3DF]">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF8EA] text-[#14A800] text-xs font-mono font-semibold uppercase tracking-wider mb-4 border border-[#14A800]/25 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#14A800] animate-pulse" />
            <span>Client Endorsements</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#182321] tracking-tight leading-tight mb-4">
            Built through years of real client partnership.
          </h2>
          <p className="text-base text-[#66736D]">
            Authentic feedback from founders and executive leaders who relied on Mohammad for communication systems,
            marketing operations, and long-term execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="p-7 sm:p-8 rounded-2xl bg-[#F7F7F5] border border-[#E2E3DF] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#F59E0B]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="font-mono text-[11px] text-[#059669] flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" />
                    <span>Verified Upwork Client</span>
                  </span>
                </div>

                <p className="text-sm sm:text-base text-[#101113] font-serif italic leading-relaxed mb-6">
                  “{t.quote}”
                </p>
              </div>

              <div className="pt-4 border-t border-[#E2E3DF]">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-[#101113]">{t.clientName}</h4>
                    <span className="text-[11px] text-[#62666D]">{t.role} · {t.company}</span>
                  </div>
                  <span className="text-[11px] font-mono text-[#14A800] hidden sm:block">
                    {t.projectType}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
