import React from 'react';
import { ShieldCheck, Award, ExternalLink, Clock, DollarSign, CheckCircle2, MessageSquare, RefreshCw } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface UpworkTrackRecordProps {
  stats: typeof PORTFOLIO_DATA.upworkStats;
}

export const UpworkTrackRecord: React.FC<UpworkTrackRecordProps> = ({ stats }) => {
  const meanings = [
    {
      title: 'Managing High Expectations',
      desc: 'Navigating ambiguous client requirements and turning them into definitive, mutually agreed scopes.',
    },
    {
      title: 'Strict Deadline Discipline',
      desc: 'Shipping deliverables consistently across multi-year contracts without excuses or drop-offs.',
    },
    {
      title: 'Graceful Revisions & QA',
      desc: 'Approaching client feedback constructively to refine copy, design, or data models to perfection.',
    },
    {
      title: 'Cross-Industry Adaptation',
      desc: 'Seamlessly switching context between education, tech SaaS, corporate wellbeing, and logistics.',
    },
    {
      title: 'Asynchronous Precision',
      desc: 'Mastering clear written documentation that allows international teams in opposite timezones to move swiftly.',
    },
    {
      title: 'Long-Term Retention',
      desc: 'Maintaining active multi-year partnerships based on trust, proactive communication, and continuous value.',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#F8F9F5] border-b border-[#DDE4DA]">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-[#14A800] uppercase mb-3">
              <span>Client Provenance</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#182321] tracking-tight leading-tight mb-4">
              Built through years of real client work.
            </h2>
            <p className="text-base text-[#66736D]">
              Over 4,200+ logged hours and a 100% Job Success Score are not abstract vanity metrics.
              They represent hundreds of real deadlines met, revisions handled, and expectations exceeded.
            </p>
          </div>

          <a
            href={PORTFOLIO_DATA.profile.upworkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-[#182321] bg-white border border-[#DDE4DA] rounded-xl hover:bg-[#F1F4EE] hover:border-[#14A800]/40 transition-all shadow-2xs self-start md:self-auto"
          >
            <span>View Upwork Profile</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#14A800]" />
          </a>
        </div>

        {/* Upwork Verified Stats Card */}
        <div className="p-7 sm:p-10 rounded-3xl bg-white border border-[#DDE4DA] shadow-xs mb-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 pb-8 border-b border-[#DDE4DA]">
            <div>
              <span className="text-[11px] font-mono text-[#66736D] uppercase block mb-1">Tenure</span>
              <span className="font-mono text-2xl font-bold text-[#182321]">{stats.yearsExperience}</span>
              <span className="text-[11px] text-[#66736D] block mt-0.5">Est. 2017</span>
            </div>
            <div>
              <span className="text-[11px] font-mono text-[#66736D] uppercase block mb-1">Total Earned</span>
              <span className="font-mono text-2xl font-bold text-[#182321]">{stats.totalEarned}</span>
              <span className="text-[11px] text-[#66736D] block mt-0.5">Verified Gross</span>
            </div>
            <div>
              <span className="text-[11px] font-mono text-[#66736D] uppercase block mb-1">Completed Jobs</span>
              <span className="font-mono text-2xl font-bold text-[#182321]">{stats.completedJobs}</span>
              <span className="text-[11px] text-[#66736D] block mt-0.5">Individual Projects</span>
            </div>
            <div>
              <span className="text-[11px] font-mono text-[#66736D] uppercase block mb-1">Logged Hours</span>
              <span className="font-mono text-2xl font-bold text-[#182321]">{stats.hoursLogged}</span>
              <span className="text-[11px] text-[#66736D] block mt-0.5">Tracked Delivery</span>
            </div>
            <div>
              <span className="text-[11px] font-mono text-[#66736D] uppercase block mb-1">Job Success</span>
              <span className="font-mono text-2xl font-bold text-[#14A800]">{stats.jobSuccessScore}</span>
              <span className="text-[11px] text-[#14A800] block mt-0.5">Flawless Standing</span>
            </div>
            <div>
              <span className="text-[11px] font-mono text-[#66736D] uppercase block mb-1">Standing</span>
              <span className="font-mono text-2xl font-bold text-[#14A800]">{stats.statusBadge}</span>
              <span className="text-[11px] text-[#14A800] block mt-0.5">{stats.avgRating} Feedback</span>
            </div>
          </div>

          {/* What These Numbers Mean in Real Operations */}
          <div className="pt-8">
            <span className="text-xs font-mono uppercase tracking-wider text-[#66736D] block mb-6">
              What This Track Record Signifies In Daily Practice:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {meanings.map((m) => (
                <div key={m.title} className="p-4 rounded-2xl bg-[#F8F9F5] border border-[#DDE4DA]">
                  <h4 className="text-xs font-bold text-[#182321] mb-1.5 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#14A800]" />
                    <span>{m.title}</span>
                  </h4>
                  <p className="text-xs text-[#66736D] leading-relaxed">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
