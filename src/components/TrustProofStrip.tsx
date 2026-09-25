import React from 'react';
import { ShieldCheck, Award, Clock } from 'lucide-react';

interface TrustProofStripProps {
  stats: {
    yearsExperience: string;
    totalEarned: string;
    completedJobs: string;
    hoursLogged: string;
    jobSuccessScore: string;
    statusBadge: string;
    avgRating: string;
  };
}

export const TrustProofStrip: React.FC<TrustProofStripProps> = ({ stats }) => {
  return (
    <section className="border-y border-[#DDE4DA] bg-white/90 py-6">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          {/* Label / Context */}
          <div className="flex items-center gap-2.5 shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-[#14A800] animate-pulse" />
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#182321]">
              Verified Track Record
            </span>
          </div>

          {/* Understated proof items */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 flex-1 md:justify-items-center">
            <div className="flex flex-col">
              <span className="font-mono text-xl sm:text-2xl font-bold text-[#182321] tabular-nums">
                {stats.yearsExperience}
              </span>
              <span className="text-xs text-[#66736D] mt-0.5">Professional Experience</span>
            </div>

            <div className="flex flex-col">
              <span className="font-mono text-xl sm:text-2xl font-bold text-[#182321] tabular-nums">
                {stats.totalEarned}
              </span>
              <span className="text-xs text-[#66736D] mt-0.5">Earned on Upwork</span>
            </div>

            <div className="flex flex-col">
              <span className="font-mono text-xl sm:text-2xl font-bold text-[#182321] tabular-nums">
                {stats.completedJobs}
              </span>
              <span className="text-xs text-[#66736D] mt-0.5">Completed Contracts</span>
            </div>

            <div className="flex flex-col">
              <span className="font-mono text-xl sm:text-2xl font-bold text-[#182321] tabular-nums">
                {stats.hoursLogged}
              </span>
              <span className="text-xs text-[#66736D] mt-0.5">Logged Hours</span>
            </div>

            <div className="flex flex-col">
              <span className="font-mono text-xl sm:text-2xl font-bold text-[#14A800] tabular-nums">
                {stats.jobSuccessScore}
              </span>
              <span className="text-xs text-[#66736D] mt-0.5">Job Success Score (JSS)</span>
            </div>

            <div className="flex flex-col">
              <span className="font-mono text-xl sm:text-2xl font-bold text-[#14A800] tabular-nums">
                {stats.statusBadge}
              </span>
              <span className="text-xs text-[#66736D] mt-0.5">Upwork Standing</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
