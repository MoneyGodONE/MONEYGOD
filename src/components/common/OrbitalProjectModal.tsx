'use client';

import React, { useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface ProjectTeamMember {
  name: string;
  role: string;
  avatar: string;
  credentials: string;
}

interface ProjectMetrics {
  tvl: string;
  marketCap: string;
  holders: string;
  volume24h: string;
}

interface ProjectTokenomics {
  totalSupply: string;
  circulatingSupply: string;
  tokenPrice: string;
  fdv: string;
}

interface ProjectData {
  id: string;
  name: string;
  symbol: string;
  logo: string;
  description: string;
  category: string;
  metrics: ProjectMetrics;
  tokenomics: ProjectTokenomics;
  team: ProjectTeamMember[];
  website: string;
  whitepaper: string;
  auditReport: string;
  connections: string[];
}

interface OrbitalProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: ProjectData | null;
}

const OrbitalProjectModal = ({ isOpen, onClose, project }: OrbitalProjectModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-background" />
      
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-card rounded-lg shadow-card border border-border animate-slide-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 bg-card border-b border-border px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <AppImage
              src={project.logo}
              alt={`${project.name} logo`}
              width={48}
              height={48}
              className="rounded-full"
            />
            <div>
              <h2 className="font-orbitron font-bold text-2xl text-text-primary">
                {project.name}
              </h2>
              <p className="font-space-mono text-sm text-text-secondary">
                {project.symbol} • {project.category}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-lg transition-colors duration-250"
            aria-label="Close modal"
          >
            <Icon name="XMarkIcon" size={24} className="text-text-secondary" />
          </button>
        </div>

        <div className="p-6 space-y-8">
          <section>
            <h3 className="font-orbitron font-bold text-xl text-text-primary mb-4">
              About
            </h3>
            <p className="font-source-sans text-text-secondary leading-relaxed">
              {project.description}
            </p>
          </section>

          <section>
            <h3 className="font-orbitron font-bold text-xl text-text-primary mb-4">
              Key Metrics
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-muted rounded-lg p-4">
                <p className="font-space-mono text-xs text-text-secondary mb-1">TVL</p>
                <p className="font-rajdhani font-bold text-lg text-text-primary">
                  {project.metrics.tvl}
                </p>
              </div>
              <div className="bg-muted rounded-lg p-4">
                <p className="font-space-mono text-xs text-text-secondary mb-1">Market Cap</p>
                <p className="font-rajdhani font-bold text-lg text-text-primary">
                  {project.metrics.marketCap}
                </p>
              </div>
              <div className="bg-muted rounded-lg p-4">
                <p className="font-space-mono text-xs text-text-secondary mb-1">Holders</p>
                <p className="font-rajdhani font-bold text-lg text-text-primary">
                  {project.metrics.holders}
                </p>
              </div>
              <div className="bg-muted rounded-lg p-4">
                <p className="font-space-mono text-xs text-text-secondary mb-1">24h Volume</p>
                <p className="font-rajdhani font-bold text-lg text-text-primary">
                  {project.metrics.volume24h}
                </p>
              </div>
            </div>
          </section>

          <section>
            <h3 className="font-orbitron font-bold text-xl text-text-primary mb-4">
              Tokenomics
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-muted rounded-lg p-4 flex justify-between items-center">
                <span className="font-space-mono text-sm text-text-secondary">Total Supply</span>
                <span className="font-rajdhani font-semibold text-text-primary">
                  {project.tokenomics.totalSupply}
                </span>
              </div>
              <div className="bg-muted rounded-lg p-4 flex justify-between items-center">
                <span className="font-space-mono text-sm text-text-secondary">Circulating Supply</span>
                <span className="font-rajdhani font-semibold text-text-primary">
                  {project.tokenomics.circulatingSupply}
                </span>
              </div>
              <div className="bg-muted rounded-lg p-4 flex justify-between items-center">
                <span className="font-space-mono text-sm text-text-secondary">Token Price</span>
                <span className="font-rajdhani font-semibold text-text-primary">
                  {project.tokenomics.tokenPrice}
                </span>
              </div>
              <div className="bg-muted rounded-lg p-4 flex justify-between items-center">
                <span className="font-space-mono text-sm text-text-secondary">FDV</span>
                <span className="font-rajdhani font-semibold text-text-primary">
                  {project.tokenomics.fdv}
                </span>
              </div>
            </div>
          </section>

          <section>
            <h3 className="font-orbitron font-bold text-xl text-text-primary mb-4">
              Team
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.team.map((member, index) => (
                <div key={index} className="bg-muted rounded-lg p-4 flex items-center gap-4">
                  <AppImage
                    src={member.avatar}
                    alt={`${member.name} avatar`}
                    width={56}
                    height={56}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-rajdhani font-semibold text-text-primary">
                      {member.name}
                    </p>
                    <p className="font-space-mono text-xs text-text-secondary">
                      {member.role}
                    </p>
                    <p className="font-source-sans text-xs text-muted-foreground mt-1">
                      {member.credentials}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h3 className="font-orbitron font-bold text-xl text-text-primary mb-4">
              Ecosystem Connections
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.connections.map((connection, index) => (
                <span
                  key={index}
                  className="bg-muted px-4 py-2 rounded-full font-space-mono text-sm text-text-secondary"
                >
                  {connection}
                </span>
              ))}
            </div>
          </section>

          <section className="flex flex-col sm:flex-row gap-4">
            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-secondary hover:bg-secondary/80 text-secondary-foreground font-rajdhani font-semibold py-3 px-6 rounded-lg transition-colors duration-250 text-center"
            >
              Visit Website
            </a>
            <a
              href={project.whitepaper}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-muted hover:bg-muted/80 text-text-primary font-rajdhani font-semibold py-3 px-6 rounded-lg transition-colors duration-250 text-center"
            >
              Read Whitepaper
            </a>
            <a
              href={project.auditReport}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-success hover:bg-success/80 text-success-foreground font-rajdhani font-semibold py-3 px-6 rounded-lg transition-colors duration-250 text-center"
            >
              View Audit
            </a>
          </section>
        </div>
      </div>
    </div>
  );
};

export default OrbitalProjectModal;