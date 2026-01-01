import React from 'react';
import Icon from '@/components/ui/AppIcon';

const BenefitsSection = () => {
  return (
    <section className="py-24 px-4 bg-primary">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-orbitron font-bold text-4xl md:text-5xl text-text-primary text-center mb-16">
          Key Benefits
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card rounded-lg p-8 border border-border text-center">
            <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="ChartBarIcon" size={32} className="text-success" />
            </div>
            <h3 className="font-orbitron font-bold text-2xl text-text-primary mb-4">
              Ecosystem Growth
            </h3>
            <p className="font-orbitron font-bold text-5xl text-accent mb-2">340%</p>
            <p className="font-space-mono text-sm text-text-secondary mb-4">Year-over-Year</p>
            <p className="font-source-sans text-text-secondary">
              Unprecedented expansion with 23 new projects launching in Q1 2026, creating diverse investment opportunities
            </p>
          </div>

          <div className="bg-card rounded-lg p-8 border border-border text-center">
            <div className="w-16 h-16 bg-warning/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="RocketLaunchIcon" size={32} className="text-warning" />
            </div>
            <h3 className="font-orbitron font-bold text-2xl text-text-primary mb-4">
              Innovation Pipeline
            </h3>
            <p className="font-orbitron font-bold text-5xl text-accent mb-2">23</p>
            <p className="font-space-mono text-sm text-text-secondary mb-4">Projects Launching Q1</p>
            <p className="font-source-sans text-text-secondary">
              Cutting-edge blockchain solutions across DeFi, NFT, Gaming, and Infrastructure sectors
            </p>
          </div>

          <div className="bg-card rounded-lg p-8 border border-border text-center">
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="CurrencyDollarIcon" size={32} className="text-accent" />
            </div>
            <h3 className="font-orbitron font-bold text-2xl text-text-primary mb-4">
              Average ROI
            </h3>
            <p className="font-orbitron font-bold text-5xl text-accent mb-2">127%</p>
            <p className="font-space-mono text-sm text-text-secondary mb-4">For Early Investors</p>
            <p className="font-source-sans text-text-secondary">
              Historical performance of projects launched through MGO ecosystem in 2025
            </p>
          </div>
        </div>

        <div className="mt-16 bg-card rounded-lg p-8 border border-border">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="font-orbitron font-bold text-4xl text-accent mb-2">$2.3B</p>
              <p className="font-space-mono text-sm text-text-secondary">Total Value Locked</p>
            </div>
            <div>
              <p className="font-orbitron font-bold text-4xl text-accent mb-2">156K</p>
              <p className="font-space-mono text-sm text-text-secondary">Active Users</p>
            </div>
            <div>
              <p className="font-orbitron font-bold text-4xl text-accent mb-2">47</p>
              <p className="font-space-mono text-sm text-text-secondary">Live Projects</p>
            </div>
            <div>
              <p className="font-orbitron font-bold text-4xl text-accent mb-2">98%</p>
              <p className="font-space-mono text-sm text-text-secondary">Uptime Guarantee</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;