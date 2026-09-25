import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import {
  Mail,
  ArrowUpRight,
  Copy,
  Check,
  Send,
  Sparkles,
  Phone,
  MessageCircle,
  Linkedin,
  ExternalLink,
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    website: '',
    needHelpWith: '',
    engagementType: 'Long-term monthly partnership',
    monthlyBudget: '$3,000/month (Target Strategic Retainer — Recommended)',
    message: '',
  });

  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const engagementOptions = [
    'Long-term monthly partnership (Target: $3,000/mo)',
    'Full-time remote operations role',
    'Fractional right-hand support ($2,000–$2,500/mo)',
    'Fixed-scope project engagement / Sprint',
  ];

  const budgetOptions = [
    '$3,000/month (Target Strategic Retainer — Recommended)',
    '$2,000–$2,500/month (Fractional / Targeted Scope)',
    '$4,500–$6,000+/month (Full Leadership & Multi-Brand)',
    'Fixed-Scope Project Sprint',
    'Hourly / Consultation Basis',
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const subject = encodeURIComponent(
      `Partnership Inquiry from ${formData.name || 'Client'} (${formData.company || 'Company'})`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nCompany: ${formData.company}\nEmail: ${formData.email}\nWebsite: ${formData.website}\nEngagement: ${formData.engagementType}\nBudget Bracket: ${formData.monthlyBudget}\nNeed help with: ${formData.needHelpWith}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:${PORTFOLIO_DATA.profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#182321] text-white border-t border-[#DDE4DA]/20">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
        {/* Pre-Contact Banner */}
        <div className="mb-20 pb-16 border-b border-white/10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-mono text-[#14A800] uppercase tracking-wider mb-3">
              <span className="w-2 h-2 rounded-full bg-[#14A800]" />
              <span>Direct Partnership Inquiries</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
              Need someone who can understand the work—not just wait for the next task?
            </h2>
            <p className="text-base sm:text-lg text-white/70 leading-relaxed mb-8">
              If your business requires senior ownership across communication, research, content engines, and marketing operations,
              there’s a good chance we’ll work well together.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#inquiry-form"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold text-white bg-[#14A800] hover:bg-[#108A00] rounded-xl transition-all shadow-sm"
              >
                <span>Discuss a Partnership</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href={PORTFOLIO_DATA.profile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold text-white bg-white/10 hover:bg-white/20 rounded-xl transition-colors border border-white/15"
              >
                <Linkedin className="w-4 h-4 text-[#14A800]" />
                <span>Connect on LinkedIn</span>
              </a>

              <a
                href={PORTFOLIO_DATA.profile.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold text-white bg-white/10 hover:bg-white/20 rounded-xl transition-colors border border-white/15"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp ({PORTFOLIO_DATA.profile.whatsappNumber})</span>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Inquiry Form & Verified Channels */}
        <div id="inquiry-form" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Contact Channels & Scope Analysis */}
          <div className="lg:col-span-5 space-y-6">
            <span className="font-mono text-xs text-[#14A800] uppercase tracking-wider block">
              Verified Communication Channels
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Let’s talk about what you’re trying to move forward.
            </h3>
            <p className="text-sm sm:text-base text-white/70 leading-relaxed">
              Reach out directly through any of the channels below or submit your project scope through the briefing form.
            </p>

            {/* Direct Channel Cards */}
            <div className="space-y-3">
              {/* Email */}
              <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-white/10 text-[#14A800]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-white/50 block">Primary Email</span>
                    <a
                      href={`mailto:${PORTFOLIO_DATA.profile.email}`}
                      className="text-xs sm:text-sm font-mono text-white hover:text-[#14A800] transition-colors"
                    >
                      {PORTFOLIO_DATA.profile.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 text-white/70 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
                  title="Copy email address"
                >
                  {copied ? <Check className="w-4 h-4 text-[#14A800]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* LinkedIn */}
              <a
                href={PORTFOLIO_DATA.profile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-between hover:bg-white/[0.08] transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-white/10 text-[#14A800]">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-white/50 block">Professional Profile</span>
                    <span className="text-xs sm:text-sm font-mono text-white group-hover:text-[#14A800] transition-colors">
                      linkedin.com/in/mohammad-ashaduzzaman
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-white transition-colors" />
              </a>

              {/* WhatsApp / Phone */}
              <a
                href={PORTFOLIO_DATA.profile.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-between hover:bg-white/[0.08] transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-white/10 text-[#25D366]">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-white/50 block">WhatsApp / Telegram</span>
                    <span className="text-xs sm:text-sm font-mono text-white group-hover:text-[#25D366] transition-colors">
                      {PORTFOLIO_DATA.profile.whatsappNumber}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-white transition-colors" />
              </a>

              {/* Upwork Profile */}
              <a
                href={PORTFOLIO_DATA.profile.upworkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-between hover:bg-white/[0.08] transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-white/10 text-[#14A800]">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-white/50 block">Upwork Standing</span>
                    <span className="text-xs sm:text-sm font-mono text-white group-hover:text-[#14A800] transition-colors">
                      Top Rated · 100% JSS Profile · 4,200+ Hours
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-white/40 group-hover:text-white transition-colors" />
              </a>
            </div>

            {/* Target Retainer & Availability Note ($3,000/mo Analysis) */}
            <div className="p-4.5 rounded-2xl bg-[#14A800]/10 border border-[#14A800]/30 text-xs text-white/90 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[#14A800] font-bold uppercase tracking-wider text-[11px]">
                  Typical Engagement Target: $3,000 / month
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-[#14A800] text-white">
                  Optimal Value Anchor
                </span>
              </div>
              <p className="leading-relaxed text-white/80">
                <strong>Why $3,000/month?</strong> A standard retainer at $3,000/month delivers ~15–20 hours/week of dedicated executive ownership across weekly content pipelines, deep desk research dossiers, and founder operational support—offering senior autonomous execution without the overhead or friction of an agency or full-time hire.
              </p>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-7 bg-white/[0.03] p-7 sm:p-9 rounded-2xl border border-white/10">
            {submitted ? (
              <div className="p-8 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#14A800]/20 text-[#14A800] mx-auto flex items-center justify-center">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-white">Inquiry Initialized</h4>
                <p className="text-sm text-white/70 max-w-md mx-auto">
                  Thank you! Your email application has opened with your inquiry parameters. You can also message directly on WhatsApp at{' '}
                  <span className="font-mono text-white">{PORTFOLIO_DATA.profile.whatsappNumber}</span> or email{' '}
                  <span className="font-mono text-white">{PORTFOLIO_DATA.profile.email}</span>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 text-xs font-semibold text-white bg-white/10 rounded-lg hover:bg-white/20"
                >
                  Edit Inquiry Form
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono text-white/70 block mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/15 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#14A800]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono text-white/70 block mb-1.5">
                      Company / Organization *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Apex Advisory"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/15 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#14A800]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono text-white/70 block mb-1.5">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="sarah@apexadvisory.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/15 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#14A800]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono text-white/70 block mb-1.5">
                      Website or Social URL
                    </label>
                    <input
                      type="text"
                      placeholder="https://apexadvisory.com"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/15 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#14A800]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono text-white/70 block mb-1.5">
                    Engagement Structure
                  </label>
                  <select
                    value={formData.engagementType}
                    onChange={(e) => setFormData({ ...formData, engagementType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#111917] border border-white/15 text-xs text-white focus:outline-none focus:border-[#14A800]"
                  >
                    {engagementOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-xs font-mono text-white/70 block mb-1.5">
                    Expected Monthly Budget Target
                  </label>
                  <select
                    value={formData.monthlyBudget}
                    onChange={(e) => setFormData({ ...formData, monthlyBudget: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#111917] border border-white/15 text-xs text-white focus:outline-none focus:border-[#14A800]"
                  >
                    {budgetOptions.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-xs font-mono text-white/70 block mb-1.5">
                    What are you looking to move forward? *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Briefly describe your business, current bottlenecks, and what you're looking for (e.g. content operations, research, founder executive support)..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/15 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#14A800]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-4 text-xs font-bold text-white bg-[#14A800] hover:bg-[#108A00] rounded-xl transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>Start a Conversation</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
