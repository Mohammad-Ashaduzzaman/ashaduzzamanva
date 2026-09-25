import React from 'react';
import { motion, type Variants } from 'motion/react';
import {
  ArrowDown,
  ArrowUpRight,
  ShieldCheck,
  Award,
  Clock,
  Star,
  Quote,
  Sparkles,
  FileText,
  Zap,
  Workflow,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HeroProps {
  onOpenContact: () => void;
  onExploreWork: () => void;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const fadeInUpVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
  },
};

const portraitContainerVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 18 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const floatingQuoteVariants: Variants = {
  hidden: { opacity: 0, y: -10, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65, delay: 0.2, ease: [0.16, 1, 0.3, 1] },
  },
};

const floatingBadgeVariants: Variants = {
  hidden: { opacity: 0, y: -8, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] },
  },
};

export const Hero: React.FC<HeroProps> = ({ onOpenContact, onExploreWork }) => {
  const heroCards = [
    {
      id: 'experience',
      icon: Award,
      eyebrow: 'PROVEN TRACK RECORD',
      title: 'Senior Strategic Partner',
      description: '10+ years supporting founders, consultants, and teams with dependable, end-to-end ownership.',
      metric: '4,200+ Hours · 100% JSS',
      anchor: '#credentials',
    },
    {
      id: 'marketing-ops',
      icon: Workflow,
      eyebrow: 'SYSTEMS & WORKFLOWS',
      title: 'Marketing Operations',
      description: 'Structured Notion/Asana pipelines, CRM tracking, email automation, CMS setups, and standard operating procedures.',
      metric: 'Scalable SOPs & Systems',
      anchor: '#capabilities',
    },
    {
      id: 'content-research',
      icon: FileText,
      eyebrow: 'RESEARCH & EDITORIAL',
      title: 'Content Strategy & Research',
      description: 'Desk research, competitive audits, executive briefings, and multi-channel editorial systems that educate and convert.',
      metric: 'Evidence-Grounded Insights',
      anchor: '#capabilities',
    },
    {
      id: 'execution',
      icon: Zap,
      eyebrow: 'AI-ASSISTED DELIVERY',
      title: 'Consistent Execution',
      description: 'Turning complex roadmaps into shipped deliverables with modern AI prompt workflows, QA, and high velocity.',
      metric: 'Reliable Shipped Outcomes',
      anchor: '#selected-work',
    },
  ];

  return (
    <section className="relative pt-8 pb-14 md:pt-14 md:pb-16 overflow-hidden bg-gradient-to-b from-[#F8F9F5] via-[#FCFDF9] to-[#F5F7F2]">
      {/* Ambient background glow calibrated to harmonize with #F8F9F5 */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.35, 0.45, 0.35],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-0 right-0 w-[580px] h-[580px] rounded-full pointer-events-none blur-3xl -z-0"
        style={{
          background: 'radial-gradient(circle, rgba(242, 246, 239, 0.8) 0%, rgba(248, 249, 245, 0.4) 50%, transparent 70%)',
        }}
      />
      <div
        className="absolute top-32 left-0 w-[440px] h-[440px] rounded-full pointer-events-none opacity-25 blur-3xl -z-0"
        style={{
          background: 'radial-gradient(circle, #E1EADA 0%, transparent 65%)',
        }}
      />

      <motion.div
        className="relative z-10 max-w-[1360px] mx-auto px-5 sm:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Top Status & Experience Bar */}
        <motion.div
          variants={fadeInUpVariants}
          className="flex flex-wrap items-center justify-between gap-4 mb-8"
        >
          <div className="flex items-center gap-2.5 text-xs font-mono tracking-wider text-[#304A32] uppercase">
            <span className="font-bold text-[#182321]">10+ Years</span>
            <span aria-hidden="true" className="text-[#A2B3A0]">·</span>
            <span>Communication</span>
            <span aria-hidden="true" className="text-[#A2B3A0]">·</span>
            <span>Research</span>
            <span aria-hidden="true" className="text-[#A2B3A0]">·</span>
            <span>Operations</span>
          </div>

          <div className="inline-flex items-center gap-2 text-xs font-medium text-[#182321] bg-white/90 backdrop-blur-xs px-3.5 py-1.5 rounded-full border border-[#DDE4DA] shadow-2xs">
            <span className="w-2.5 h-2.5 rounded-full bg-[#14A800] animate-pulse" />
            <span>Available for select long-term remote partnerships</span>
          </div>
        </motion.div>

        {/* Hero Split Grid: Copy on Left, Organically Blended Portrait with Quote & Wordmark on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-14 sm:mb-16">
          {/* Left Column: Bold Copy & Outcomes */}
          <motion.div variants={fadeInUpVariants} className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5ECE2] text-[#253D27] text-xs font-mono mb-4 border border-[#D3DECE]">
              <Sparkles className="w-3.5 h-3.5 text-[#14A800]" />
              <span>Senior Communication & Marketing Operations Partner</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[58px] font-bold text-[#182321] leading-[1.08] tracking-tight text-balance mb-6">
              I turn complex work into clear communication, smarter systems, and consistent execution.
            </h1>

            <p className="text-base sm:text-lg text-[#5A6860] leading-relaxed max-w-2xl mb-4 font-normal">
              For more than a decade, I’ve helped founders, consultants, and senior teams research ideas,
              communicate clearly, manage digital content, organize projects, analyze information, and turn moving pieces
              into work that actually gets finished.
            </p>

            <p className="text-sm sm:text-base text-[#182321] font-medium mb-8">
              Today I work at the intersection of communication, marketing operations, research, data, and AI-assisted execution.
            </p>

            {/* Action CTAs with Upwork Green & Refined Neutrals */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <button
                onClick={onExploreWork}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#14A800] rounded-xl hover:bg-[#108A00] transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Explore Selected Work</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenContact}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#182321] bg-white border border-[#DDE4DA] rounded-xl hover:bg-[#F1F4EE] hover:border-[#14A800]/40 transition-all shadow-2xs cursor-pointer"
              >
                <span>Discuss Working Together</span>
                <ArrowUpRight className="w-4 h-4 text-[#14A800]" />
              </button>
            </div>

            {/* Quick Trust Chips with Upwork Green Accents */}
            <div className="flex flex-wrap items-center gap-2.5 text-xs text-[#5A6860]">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/95 border border-[#DDE4DA] shadow-2xs">
                <ShieldCheck className="w-3.5 h-3.5 text-[#14A800]" />
                <span className="font-semibold text-[#182321]">100% Job Success</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/95 border border-[#DDE4DA] shadow-2xs">
                <Award className="w-3.5 h-3.5 text-[#14A800]" />
                <span className="font-semibold text-[#182321]">Top Rated on Upwork</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/95 border border-[#DDE4DA] shadow-2xs">
                <Clock className="w-3.5 h-3.5 text-[#14A800]" />
                <span className="font-semibold text-[#182321]">4,200+ Logged Hours</span>
              </span>
            </div>
          </motion.div>

          {/* Right Column: Seamless Blended Portrait with Framer Motion Layout & High-Quality Mask */}
          <motion.div
            layout
            variants={portraitContainerVariants}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            {/* Natural Organic Soft Shape Backdrop */}
            <div className="relative w-full max-w-[510px] flex flex-col items-center">
              {/* Main Portrait & Overlays Container */}
              <div className="relative w-full flex items-end justify-center pt-2 pb-6 sm:pb-8">
                {/* 1. Organic Backdrop Form: Flow starting from the background on the left */}
                <div
                  className="absolute -inset-4 sm:-inset-8 rounded-[48%_52%_60%_40%_/_45%_45%_55%_55%] pointer-events-none opacity-85 blur-2xl -z-0"
                  style={{
                    background:
                      'radial-gradient(ellipse at 38% 48%, rgba(240, 246, 238, 0.95) 0%, rgba(248, 249, 245, 0.7) 55%, transparent 78%)',
                  }}
                />

                {/* 2. Ambient Halo: Soft luminous highlight calibrated to blend with #F8F9F5 canvas */}
                <motion.div
                  animate={{
                    scale: [1.08, 1.15, 1.08],
                    opacity: [0.75, 0.9, 0.75],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute inset-0 rounded-[48%_52%_60%_40%_/_45%_45%_55%_55%] pointer-events-none -z-0"
                  style={{
                    background:
                      'radial-gradient(circle at 52% 46%, rgba(255, 255, 255, 0.95) 0%, rgba(248, 249, 245, 0.85) 48%, rgba(248, 249, 245, 0) 74%)',
                  }}
                />

                {/* 3. Soft Highlight Glow behind shoulders & head */}
                <div
                  className="absolute inset-x-6 top-6 bottom-14 rounded-full pointer-events-none opacity-85 blur-xl -z-0"
                  style={{
                    background:
                      'radial-gradient(ellipse at 52% 42%, rgba(255, 255, 255, 0.98) 0%, rgba(248, 249, 245, 0.6) 50%, transparent 72%)',
                  }}
                />

                {/* 4. Top Right Overlay: Stacked Wordmark & Upwork Badge directly over the image */}
                <motion.div
                  variants={floatingBadgeVariants}
                  className="absolute top-2 right-1 sm:top-3 sm:right-2 z-30 flex flex-col items-end gap-1.5 sm:gap-2"
                >
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#182321] text-white text-[11px] font-mono shadow-md border border-white/10">
                    <Star className="w-3.5 h-3.5 text-[#14A800] fill-[#14A800]" />
                    <span className="font-semibold tracking-wide">Top Rated</span>
                  </div>

                  <div className="bg-white/95 backdrop-blur-md px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-2xl border border-[#DDE4DA] shadow-sm text-right font-mono text-[10px] sm:text-[11px] font-bold tracking-wider uppercase text-[#5A6860] space-y-1">
                    <div className="text-[#182321]">RESEARCH</div>
                    <div className="text-[#182321]">STRATEGY</div>
                    <div className="text-[#182321]">OPERATIONS</div>
                    <div className="text-[#182321]">CONTENT</div>
                    <div className="text-[#14A800] font-extrabold">EXECUTION</div>
                  </div>
                </motion.div>

                {/* 5. Portrait Outer Wrapper: Vertical feathering without horizontal clipping */}
                <div
                  className="relative z-10 w-full max-w-[480px]"
                  style={{
                    maskImage:
                      'linear-gradient(to bottom, transparent 0%, black 5%, black 70%, rgba(0,0,0,0.35) 88%, transparent 100%)',
                    WebkitMaskImage:
                      'linear-gradient(to bottom, transparent 0%, black 5%, black 70%, rgba(0,0,0,0.35) 88%, transparent 100%)',
                  }}
                >
                  {/* 6. Portrait Inner Wrapper: Seamless left-side background flow and smooth right-side edge */}
                  <div
                    className="w-full h-auto"
                    style={{
                      maskImage:
                        'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.06) 4%, rgba(0,0,0,0.4) 14%, rgba(0,0,0,0.85) 25%, black 36%, black 88%, rgba(0,0,0,0.7) 96%, transparent 100%)',
                      WebkitMaskImage:
                        'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.06) 4%, rgba(0,0,0,0.4) 14%, rgba(0,0,0,0.85) 25%, black 36%, black 88%, rgba(0,0,0,0.7) 96%, transparent 100%)',
                    }}
                  >
                    <img
                      src={PORTFOLIO_DATA.profile.portraitUrl}
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src =
                          'https://mohammad-ashaduzzaman.github.io/gis-power-portfolio/assets/ashad-portrait-v6.png';
                      }}
                      alt="Mohammad Ashaduzzaman"
                      className="w-full h-auto object-contain mix-blend-multiply transition-transform duration-700 hover:scale-[1.015] pointer-events-none select-none"
                      style={{
                        filter: 'contrast(1.02) brightness(1.03)',
                      }}
                      fetchPriority="high"
                    />
                  </div>
                </div>

                {/* 7. Bottom Vignette Softener: Ensures zero harsh cutoff under the overlay */}
                <div
                  className="absolute bottom-0 inset-x-0 h-28 pointer-events-none z-20"
                  style={{
                    background:
                      'linear-gradient(to top, #F8F9F5 20%, rgba(248, 249, 245, 0.88) 50%, rgba(248, 249, 245, 0.35) 80%, transparent 100%)',
                  }}
                />

                {/* 8. Bottom Overlay: Authentic Quote in Italic Serif with Line directly covering the bottom */}
                <div className="absolute -bottom-3 inset-x-1 sm:inset-x-3 z-30">
                  <motion.div
                    variants={floatingQuoteVariants}
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                    className="w-full bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl border border-[#DDE4DA] shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-start gap-2.5 sm:gap-3">
                      <Quote className="w-4 h-4 text-[#14A800] shrink-0 mt-0.5 fill-[#14A800]/15" />
                      <div>
                        <p className="text-[12.5px] sm:text-[13px] text-[#182321] font-serif italic leading-relaxed">
                          “Turn complex ideas into clear communication, smarter systems, and consistent execution.”
                        </p>
                        <div className="w-14 h-[1.5px] bg-[#14A800] mt-2 mb-1 opacity-80" />
                        <span className="text-[10px] font-mono text-[#5A6860] uppercase tracking-wider block font-semibold">
                          Mohammad Ashaduzzaman
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Floating 4-Card Row with Staggered Framer Motion Entrance */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5"
        >
          {heroCards.map((card) => {
            const Icon = card.icon;
            return (
              <motion.a
                key={card.id}
                href={card.anchor}
                variants={fadeInUpVariants}
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
                className="group relative p-5 rounded-2xl bg-white/95 hover:bg-white border border-[#DDE4DA] hover:border-[#14A800]/50 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="p-2 rounded-xl bg-[#F0F5ED] text-[#14A800] group-hover:bg-[#14A800] group-hover:text-white transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#A2B3A0] group-hover:text-[#14A800] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>

                  <span className="font-mono text-[10px] tracking-wider uppercase text-[#14A800] font-semibold block mb-1">
                    {card.eyebrow}
                  </span>

                  <h3 className="text-base font-bold text-[#182321] group-hover:text-[#14A800] transition-colors mb-2">
                    {card.title}
                  </h3>

                  <p className="text-xs text-[#5A6860] leading-relaxed mb-4">
                    {card.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#EDF2EA] flex items-center justify-between">
                  <span className="font-mono text-[11px] text-[#182321] font-medium">
                    {card.metric}
                  </span>
                  <span className="text-[11px] font-medium text-[#14A800] opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-0.5">
                    Explore
                  </span>
                </div>
              </motion.a>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
};

