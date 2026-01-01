'use client';

import React, { useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Project {
  id: string;
  name: string;
  symbol: string;
  logo: string;
  description: string;
  category: string;
  tvl: string;
  marketCap: string;
  holders: string;
  volume24h: string;
  connections: string[];
}

interface EcosystemShowcaseProps {
  onProjectClick: (project: Project) => void;
}

const EcosystemShowcase = ({ onProjectClick }: EcosystemShowcaseProps) => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const projects: Project[] = [
  {
    id: 'defi-protocol',
    name: 'MGO DeFi Protocol',
    symbol: 'MGDF',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1c68dac9a-1767274178015.png",
    description: 'Advanced decentralized finance protocol offering lending, borrowing, and yield farming with innovative liquidity mechanisms',
    category: 'DeFi',
    tvl: '$450M',
    marketCap: '$1.2B',
    holders: '45,000',
    volume24h: '$23M',
    connections: ['NFT Marketplace', 'Staking Platform', 'Bridge Protocol']
  },
  {
    id: 'nft-marketplace',
    name: 'MGO NFT Hub',
    symbol: 'MNFT',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1f7a4b9ea-1767274046135.png",
    description: 'Premier NFT marketplace with cross-chain support, fractional ownership, and integrated DeFi utilities',
    category: 'NFT',
    tvl: '$280M',
    marketCap: '$650M',
    holders: '67,000',
    volume24h: '$18M',
    connections: ['DeFi Protocol', 'Gaming Platform', 'Launchpad']
  },
  {
    id: 'gaming-platform',
    name: 'MGO GameFi',
    symbol: 'MGAME',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1bb072fb1-1767274045523.png",
    description: 'Play-to-earn gaming ecosystem with AAA titles, NFT integration, and sustainable tokenomics',
    category: 'Gaming',
    tvl: '$320M',
    marketCap: '$890M',
    holders: '89,000',
    volume24h: '$15M',
    connections: ['NFT Marketplace', 'Staking Platform', 'DEX Aggregator']
  },
  {
    id: 'lending-protocol',
    name: 'MGO Lend',
    symbol: 'MLEND',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1bfe88a5d-1767274045697.png",
    description: 'Decentralized lending protocol with algorithmic interest rates and collateral optimization',
    category: 'Lending',
    tvl: '$560M',
    marketCap: '$1.1B',
    holders: '34,000',
    volume24h: '$28M',
    connections: ['DeFi Protocol', 'Bridge Protocol', 'Staking Platform']
  },
  {
    id: 'dex-aggregator',
    name: 'MGO Swap',
    symbol: 'MSWAP',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1a73f211c-1767274047303.png",
    description: 'Multi-chain DEX aggregator providing best execution prices across 50+ exchanges',
    category: 'DEX',
    tvl: '$720M',
    marketCap: '$1.5B',
    holders: '123,000',
    volume24h: '$67M',
    connections: ['DeFi Protocol', 'Bridge Protocol', 'Gaming Platform']
  },
  {
    id: 'staking-platform',
    name: 'MGO Stake',
    symbol: 'MSTAKE',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_10aadd51a-1765333053919.png",
    description: 'Flexible staking platform with liquid staking derivatives and auto-compounding rewards',
    category: 'Staking',
    tvl: '$890M',
    marketCap: '$780M',
    holders: '56,000',
    volume24h: '$12M',
    connections: ['DeFi Protocol', 'Lending Protocol', 'Gaming Platform']
  }];


  return (
    <section id="ecosystem-section" className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-orbitron font-bold text-4xl md:text-5xl text-text-primary mb-6">
            Interactive Ecosystem Explorer
          </h2>
          <p className="font-source-sans text-xl text-text-secondary max-w-3xl mx-auto">
            Hover over projects to see connections. Click for detailed information and investment opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) =>
          <div
            key={project.id}
            className="bg-card rounded-lg border border-border overflow-hidden transition-all duration-250 hover:shadow-card hover:scale-105 cursor-pointer"
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
            onClick={() => onProjectClick(project)}>

              <div className="relative h-48 overflow-hidden">
                <AppImage
                src={project.logo}
                alt={`${project.name} logo showing blockchain technology visualization`}
                className="w-full h-full object-cover" />

                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-orbitron font-bold text-xl text-text-primary mb-1">
                    {project.name}
                  </h3>
                  <p className="font-space-mono text-sm text-accent">{project.symbol}</p>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <p className="font-source-sans text-sm text-text-secondary line-clamp-2">
                  {project.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="font-space-mono text-xs text-muted-foreground">TVL</span>
                  <span className="font-rajdhani font-semibold text-text-primary">
                    {project.tvl}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="font-space-mono text-xs text-muted-foreground">Market Cap</span>
                  <span className="font-rajdhani font-semibold text-text-primary">
                    {project.marketCap}
                  </span>
                </div>

                {hoveredProject === project.id &&
              <div className="pt-4 border-t border-border animate-fade-in">
                    <p className="font-space-mono text-xs text-muted-foreground mb-2">
                      Connected to:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.connections.map((conn, idx) =>
                  <span
                    key={idx}
                    className="bg-muted px-2 py-1 rounded text-xs font-space-mono text-text-secondary">

                          {conn}
                        </span>
                  )}
                    </div>
                  </div>
              }

                <button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-rajdhani font-semibold py-2 px-4 rounded-lg transition-colors duration-250 flex items-center justify-center gap-2">
                  View Details
                  <Icon name="ArrowRightIcon" size={16} />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

};

export default EcosystemShowcase;