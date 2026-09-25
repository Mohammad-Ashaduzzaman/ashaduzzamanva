import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PORTFOLIO_DATA, Project } from './data/portfolioData';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustProofStrip } from './components/TrustProofStrip';
import { InteractiveWorkGraph } from './components/InteractiveWorkGraph';
import { SelectedWork } from './components/SelectedWork';
import { CapabilitiesSection } from './components/CapabilitiesSection';
import { WhyDifferent } from './components/WhyDifferent';
import { ResearchDataDeepDive } from './components/ResearchDataDeepDive';
import { FounderSupport } from './components/FounderSupport';
import { HowIWork } from './components/HowIWork';
import { TestimonialsSection } from './components/TestimonialsSection';
import { UpworkTrackRecord } from './components/UpworkTrackRecord';
import { CredentialsSection } from './components/CredentialsSection';
import { EducationSection } from './components/EducationSection';
import { ToolsSection } from './components/ToolsSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CaseStudyModal } from './components/CaseStudyModal';

// Motion variants for fluid staggered page entrance
const pageContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.04,
    },
  },
};

const sectionItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export default function App() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<Project | null>(null);
  const currentUpworkStats = PORTFOLIO_DATA.upworkStats;

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToWork = () => {
    const el = document.getElementById('selected-work');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F9F5] text-[#182321]">
      {/* 1. Header (Strict Top Bar Contract) */}
      <Header onOpenContact={scrollToContact} />

      {/* Main Content with Fluid Framer Motion Staggered Entrance */}
      <motion.main
        className="flex-1"
        variants={pageContainerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* 2. Hero Section with Seamless Blended Portrait & 4 Floating Cards */}
        <motion.div variants={sectionItemVariants}>
          <Hero onOpenContact={scrollToContact} onExploreWork={scrollToWork} />
        </motion.div>

        {/* 3. Verified Track Record Statistics Bar */}
        <motion.div variants={sectionItemVariants}>
          <TrustProofStrip stats={currentUpworkStats} />
        </motion.div>

        {/* 4. Interactive Work Blueprint (Directly Visible, Below Verified Track Record) */}
        <motion.div variants={sectionItemVariants} className="py-14 sm:py-20 bg-[#F4F6F1] border-b border-[#DDE4DA]">
          <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
            <InteractiveWorkGraph />
          </div>
        </motion.div>

        {/* 5. Selected Work & Deep Interactive Case Studies (Full-Width Tabs) */}
        <motion.div variants={sectionItemVariants}>
          <SelectedWork onOpenCaseStudy={(p) => setSelectedCaseStudy(p)} />
        </motion.div>

        {/* 6. Core Capabilities (Six Disciplined Areas with Realistic Competency Counts) */}
        <motion.div variants={sectionItemVariants}>
          <CapabilitiesSection />
        </motion.div>

        {/* 7. Why I’m Different: One Person, Multiple Disciplines */}
        <motion.div variants={sectionItemVariants}>
          <WhyDifferent />
        </motion.div>

        {/* 8. Research & Data Case Study (From Raw Data to Decision-Ready Insight) */}
        <motion.div variants={sectionItemVariants}>
          <ResearchDataDeepDive />
        </motion.div>

        {/* 9. Executive / Founder Right-Hand Positioning */}
        <motion.div variants={sectionItemVariants}>
          <FounderSupport onOpenContact={scrollToContact} />
        </motion.div>

        {/* 10. How I Work: 5-Step Consulting Methodology */}
        <motion.div variants={sectionItemVariants}>
          <HowIWork />
        </motion.div>

        {/* 11. Testimonials from Real Upwork Clients */}
        <motion.div variants={sectionItemVariants}>
          <TestimonialsSection />
        </motion.div>

        {/* 12. Upwork Track Record: What 4,200+ Hours Mean */}
        <motion.div variants={sectionItemVariants}>
          <UpworkTrackRecord stats={currentUpworkStats} />
        </motion.div>

        {/* 13. Curated Professional Credentials & Searchable Library */}
        <motion.div variants={sectionItemVariants}>
          <CredentialsSection />
        </motion.div>

        {/* 14. Multidisciplinary Academic Foundations */}
        <motion.div variants={sectionItemVariants}>
          <EducationSection />
        </motion.div>

        {/* 15. Tools Grouped Strictly by Workflow */}
        <motion.div variants={sectionItemVariants}>
          <ToolsSection />
        </motion.div>

        {/* 16. Career Narrative & 5 Brand Principles */}
        <motion.div variants={sectionItemVariants}>
          <AboutSection />
        </motion.div>

        {/* 17. Strategic Inquiry & High-Converting Contact Experience */}
        <motion.div variants={sectionItemVariants}>
          <ContactSection />
        </motion.div>
      </motion.main>

      {/* 18. Quiet Accessible Footer */}
      <Footer />

      {/* Deep Dive Case Study Reader Modal */}
      <CaseStudyModal
        project={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        onSelectProject={(p) => setSelectedCaseStudy(p)}
      />
    </div>
  );
}
