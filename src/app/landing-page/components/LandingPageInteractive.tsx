'use client';

import React, { useState, useEffect } from 'react';
import TopLeftOrgSwitch from './TopLeftOrgSwitch';
import Header from './Header';
import HeroSection from './HeroSection';
import WebGLBackground from './WebGLBackground';
import ProblemSection from './ProblemSection';
import EcosystemShowcase from './EcosystemShowcase';
import BenefitsSection from './BenefitsSection';
import TestimonialsSection from './TestimonialsSection';
import SecuritySection from './SecuritySection';
import RoadmapSection from './RoadmapSection';
import ComparisonSection from './ComparisonSection';
import InvestmentTiersSection from './InvestmentTiersSection';
import FAQSection from './FAQSection';
import CommunitySection from './CommunitySection';
import CTASection from './CTASection';
import FooterSection from './FooterSection';
import InvestmentCalculator from '@/components/common/InvestmentCalculator';
import OrbitalProjectModal from '@/components/common/OrbitalProjectModal';
import AnchorNavigation from '@/components/common/AnchorNavigation';
import ProgressIndicator from '@/components/common/ProgressIndicator';

interface ProjectData {
  id: string;
  name: string;
  symbol: string;
  logo: string;
  description: string;
  category: string;
  metrics: {
    tvl: string;
    marketCap: string;
    holders: string;
    volume24h: string;
  };
  tokenomics: {
    totalSupply: string;
    circulatingSupply: string;
    tokenPrice: string;
    fdv: string;
  };
  team: Array<{
    name: string;
    role: string;
    avatar: string;
    credentials: string;
  }>;
  website: string;
  whitepaper: string;
  auditReport: string;
  connections: string[];
}

const LandingPageInteractive = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const handleExploreClick = () => {
    const ecosystemSection = document.getElementById('ecosystem-section');
    if (ecosystemSection) {
      ecosystemSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleInvestmentClick = () => {
    const investmentSection = document.getElementById('investment-section');
    if (investmentSection) {
      investmentSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleProjectClick = (project: any) => {
    const fullProjectData: ProjectData = {
      id: project.id,
      name: project.name,
      symbol: project.symbol,
      logo: project.logo,
      description: project.description,
      category: project.category,
      metrics: {
        tvl: project.tvl,
        marketCap: project.marketCap,
        holders: project.holders,
        volume24h: project.volume24h
      },
      tokenomics: {
        totalSupply: '1,000,000,000',
        circulatingSupply: '450,000,000',
        tokenPrice: '$2.45',
        fdv: '$2.45B'
      },
      team: [
      {
        name: 'Alex Johnson',
        role: 'Founder & CEO',
        avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_18276e8bd-1765872905794.png",
        credentials: 'Former VP at Coinbase, 10+ years blockchain experience'
      },
      {
        name: 'Sarah Chen',
        role: 'CTO',
        avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_12f2fa675-1763295678226.png",
        credentials: 'Ex-Google engineer, Smart contract security expert'
      }],

      website: 'https://example.com',
      whitepaper: 'https://example.com/whitepaper',
      auditReport: 'https://example.com/audit',
      connections: project.connections
    };

    setSelectedProject(fullProjectData);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-accent animate-pulse" />
          <p className="font-orbitron font-bold text-2xl text-text-primary">
            Loading MGO Orbital...
          </p>
        </div>
      </div>);

  }

  return (
  <div className="min-h-screen flex flex-col bg-background">
    <WebGLBackground />
    <TopLeftOrgSwitch />
    <Header />

    {/* ОСНОВНОЙ КОНТЕНТ */}
    <main className="flex-grow">
      <HeroSection
        onExploreClick={handleExploreClick}
        onInvestmentClick={handleInvestmentClick}
      />

      <ProblemSection />
      <EcosystemShowcase onProjectClick={handleProjectClick} />
      <BenefitsSection />
      <TestimonialsSection />
      <SecuritySection />
      <RoadmapSection />
      <ComparisonSection />
      <InvestmentTiersSection />

      {/* Calculator */}
      <div className="py-24 px-4 bg-background">
        ...
      </div>

      <FAQSection />
      <CommunitySection />
      <CTASection />
    </main>

    {/* 🔥 МЕНЮ ПЕРЕД ФУТЕРОМ */}
    <nav className="w-full flex justify-center py-10">
      <AnchorNavigation />
    </nav>

    <FooterSection />

    <ProgressIndicator />
    <OrbitalProjectModal ... />
  </div>
);

export default LandingPageInteractive;
