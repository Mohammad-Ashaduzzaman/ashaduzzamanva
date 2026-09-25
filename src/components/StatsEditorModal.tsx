import React, { useState } from 'react';
import { X, Save, RotateCcw, Check, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface StatsEditorModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentStats: typeof PORTFOLIO_DATA.upworkStats;
  onSaveStats: (updated: typeof PORTFOLIO_DATA.upworkStats) => void;
}

export const StatsEditorModal: React.FC<StatsEditorModalProps> = ({
  isOpen,
  onClose,
  currentStats,
  onSaveStats,
}) => {
  if (!isOpen) return null;

  const [formStats, setFormStats] = useState({ ...currentStats });
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveStats(formStats);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 900);
  };

  const handleReset = () => {
    setFormStats({ ...PORTFOLIO_DATA.upworkStats });
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-150">
      <div className="bg-white rounded-2xl w-full max-w-lg border border-[#E2E3DF] shadow-2xl p-6 sm:p-8">
        <div className="flex items-center justify-between pb-4 border-b border-[#E2E3DF] mb-6">
          <div>
            <span className="font-mono text-xs text-[#14A800] uppercase">CMS Data Field Editor</span>
            <h3 className="text-lg font-bold text-[#101113]">Update Verified Upwork Statistics</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#62666D] hover:text-[#101113] hover:bg-[#F2F3EF] rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-xs text-[#62666D] mb-6 leading-relaxed">
          As required by your portfolio brief, you can update your latest verified Upwork figures at any time.
          All values update dynamically across the hero, proof strips, and track record sections.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div>
            <label className="block text-[#101113] font-semibold mb-1">Years Experience</label>
            <input
              type="text"
              value={formStats.yearsExperience}
              onChange={(e) => setFormStats({ ...formStats, yearsExperience: e.target.value })}
              className="w-full px-3 py-2 rounded-lg border border-[#E2E3DF] font-mono focus:outline-none focus:ring-1 focus:ring-[#14A800]"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-[#101113] font-semibold mb-1">Total Earned</label>
              <input
                type="text"
                value={formStats.totalEarned}
                onChange={(e) => setFormStats({ ...formStats, totalEarned: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-[#E2E3DF] font-mono focus:outline-none focus:ring-1 focus:ring-[#14A800]"
              />
            </div>

            <div>
              <label className="block text-[#101113] font-semibold mb-1">Completed Jobs</label>
              <input
                type="text"
                value={formStats.completedJobs}
                onChange={(e) => setFormStats({ ...formStats, completedJobs: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-[#E2E3DF] font-mono focus:outline-none focus:ring-1 focus:ring-[#14A800]"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-[#101113] font-semibold mb-1">Hours Logged</label>
              <input
                type="text"
                value={formStats.hoursLogged}
                onChange={(e) => setFormStats({ ...formStats, hoursLogged: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-[#E2E3DF] font-mono focus:outline-none focus:ring-1 focus:ring-[#14A800]"
              />
            </div>

            <div>
              <label className="block text-[#101113] font-semibold mb-1">Job Success Score (JSS)</label>
              <input
                type="text"
                value={formStats.jobSuccessScore}
                onChange={(e) => setFormStats({ ...formStats, jobSuccessScore: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-[#E2E3DF] font-mono focus:outline-none focus:ring-1 focus:ring-[#14A800]"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-[#101113] font-semibold mb-1">Status Badge</label>
              <input
                type="text"
                value={formStats.statusBadge}
                onChange={(e) => setFormStats({ ...formStats, statusBadge: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-[#E2E3DF] font-mono focus:outline-none focus:ring-1 focus:ring-[#14A800]"
              />
            </div>

            <div>
              <label className="block text-[#101113] font-semibold mb-1">Average Rating</label>
              <input
                type="text"
                value={formStats.avgRating}
                onChange={(e) => setFormStats({ ...formStats, avgRating: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-[#E2E3DF] font-mono focus:outline-none focus:ring-1 focus:ring-[#14A800]"
              />
            </div>
          </div>

          <div className="pt-4 border-t border-[#E2E3DF] flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs text-[#62666D] hover:text-[#101113] hover:bg-[#F2F3EF] transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Defaults</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-lg text-xs font-medium text-[#62666D] hover:text-[#101113]"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-[#101113] hover:bg-[#14A800] transition-all"
              >
                {savedSuccess ? <Check className="w-3.5 h-3.5 text-[#10B981]" /> : <Save className="w-3.5 h-3.5" />}
                <span>{savedSuccess ? 'Saved!' : 'Apply Updates'}</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
