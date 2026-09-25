import React, { useState } from 'react';
import { PORTFOLIO_DATA, Credential } from '../data/portfolioData';
import { Award, CheckCircle, Search, ChevronDown, ChevronUp, ExternalLink, ShieldCheck } from 'lucide-react';

const CATEGORY_RATIONALES: Record<string, string> = {
  'Communication': 'Training across corporate communications and persuasive presentation ensures executive correspondence and content strategies resonate clearly without fluff.',
  'Project Management': 'Scrum Master and program management accreditations from Google, IBM, and Microsoft back my ability to establish SOPs and run cross-functional initiatives autonomously.',
  'Data & Analytics': 'Certifications across Google, IBM, Meta, and Microsoft support my ability to move from raw, unstructured datasets to clear findings, dashboards, and visual narratives.',
  'Marketing': 'Meta and Google marketing credentials provide empirical rigor in campaign science, audience targeting, and content engine operations.',
  'Product & UX': 'UX design and product management frameworks ensure visual assets, screen architectures, and user journeys are grounded in user psychology.',
  'Business Support': 'Rigorous accounting, IT support, and business analysis training ensure financial literacy and enterprise IT operational hygiene.',
};

export const CredentialsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showAllLibrary, setShowAllLibrary] = useState<boolean>(false);

  const categories = ['All', 'Communication', 'Project Management', 'Data & Analytics', 'Marketing', 'Product & UX', 'Business Support'];

  const filteredCredentials = PORTFOLIO_DATA.certifications.filter((cert) => {
    const matchesCategory = selectedCategory === 'All' || cert.category === selectedCategory;
    const matchesSearch = cert.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          cert.issuer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredCategories = ['Communication', 'Project Management', 'Data & Analytics', 'Marketing', 'Product & UX', 'Business Support'];

  return (
    <section id="credentials" className="py-20 md:py-28 bg-[#F8F9F5]">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-[#14A800] uppercase mb-3">
              <span>Verified Qualifications</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#182321] tracking-tight leading-tight mb-4">
              Curated professional credentials.
            </h2>
            <p className="text-base text-[#66736D]">
              Over 60+ certifications completed across global technology leaders. Structured not as badge clutter,
              but as foundational methodologies applied to real client engagements every day.
            </p>
          </div>

          <div className="flex items-center gap-3 self-start md:self-auto">
            <button
              onClick={() => setShowAllLibrary(!showAllLibrary)}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#182321] bg-white border border-[#DDE4DA] rounded-xl hover:bg-[#F1F4EE] transition-all shadow-2xs"
            >
              <span>{showAllLibrary ? 'Collapse Library' : 'Browse All 64 Credentials'}</span>
              {showAllLibrary ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* Curated Category Cards (Homepage view) */}
        {!showAllLibrary && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredCategories.map((catName) => {
              const catCerts = PORTFOLIO_DATA.certifications.filter((c) => c.category === catName && c.featured);
              const rationale = CATEGORY_RATIONALES[catName];

              return (
                <div
                  key={catName}
                  className="p-6 sm:p-7 rounded-3xl bg-white border border-[#DDE4DA] shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono text-xs text-[#14A800] font-bold">{catName}</span>
                      <span className="text-[11px] text-[#66736D] font-mono">{catCerts.length} Verified</span>
                    </div>

                    <p className="text-xs text-[#66736D] leading-relaxed mb-5 italic">
                      “{rationale}”
                    </p>

                    <div className="space-y-2 mb-6">
                      {catCerts.slice(0, 4).map((c) => (
                        <div key={c.name} className="flex items-start gap-2 text-xs">
                          <CheckCircle className="w-3.5 h-3.5 text-[#14A800] shrink-0 mt-0.5" />
                          <div>
                            <span className="font-medium text-[#182321] block leading-snug">{c.name}</span>
                            <span className="text-[11px] text-[#66736D] font-mono">{c.issuer}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setSelectedCategory(catName);
                      setShowAllLibrary(true);
                    }}
                    className="pt-3 border-t border-[#DDE4DA] text-xs font-semibold text-[#14A800] hover:text-[#108A00] flex items-center justify-between transition-colors"
                  >
                    <span>View all {catName} credentials</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              );
            })}
          </div>
        )}

        {/* Expanded Searchable Library Drawer */}
        {showAllLibrary && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#DDE4DA] shadow-sm mb-8 animate-in fade-in duration-200">
            {/* Filter Bar & Search */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-[#DDE4DA]">
              {/* Category Pills */}
              <div className="flex flex-wrap gap-1.5">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                      selectedCategory === cat
                        ? 'bg-[#182321] text-white'
                        : 'bg-[#F8F9F5] text-[#66736D] hover:text-[#182321]'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Search Box */}
              <div className="relative min-w-[260px]">
                <Search className="w-4 h-4 text-[#66736D] absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search certification or issuer..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg border border-[#DDE4DA] focus:outline-none focus:ring-1 focus:ring-[#14A800]"
                />
              </div>
            </div>

            {/* Credential Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {filteredCredentials.map((c, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded-2xl bg-[#F8F9F5] border border-[#DDE4DA] flex items-start gap-2.5 text-xs hover:border-[#14A800]/40 transition-colors"
                >
                  <Award className="w-4 h-4 text-[#14A800] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-semibold text-[#182321] leading-snug">{c.name}</h5>
                    <div className="flex items-center gap-1.5 text-[11px] text-[#66736D] mt-1 font-mono">
                      <span>{c.issuer}</span>
                      <span>·</span>
                      <span>{c.category}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredCredentials.length === 0 && (
              <div className="p-8 text-center text-xs text-[#66736D]">
                No certifications found matching your filter criteria.
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
