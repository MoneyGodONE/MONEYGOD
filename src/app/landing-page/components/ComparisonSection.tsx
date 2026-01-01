import React from 'react';
import Icon from '@/components/ui/AppIcon';

const ComparisonSection = () => {
  const features = [
    { name: 'Orbital Visualization', mgo: true, others: false },
    { name: 'Project Interconnectivity Scoring', mgo: true, others: false },
    { name: 'Unified Investment Dashboard', mgo: true, others: false },
    { name: 'Real-time Ecosystem Metrics', mgo: true, others: true },
    { name: 'Multi-chain Support', mgo: true, others: true },
    { name: 'Security Audits', mgo: true, others: true },
    { name: 'AI-powered Recommendations', mgo: true, others: false },
    { name: 'Automated Portfolio Rebalancing', mgo: true, others: false },
    { name: 'Institutional-grade Analytics', mgo: true, others: false },
    { name: 'Cross-project Synergy Analysis', mgo: true, others: false },
  ];

  return (
    <section className="py-24 px-4 bg-primary">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-orbitron font-bold text-4xl md:text-5xl text-text-primary mb-6">
            Why Choose MGO?
          </h2>
          <p className="font-source-sans text-xl text-text-secondary max-w-3xl mx-auto">
            Compare our comprehensive ecosystem platform with traditional crypto platforms
          </p>
        </div>

        <div className="bg-card rounded-lg border border-border overflow-hidden">
          <div className="grid grid-cols-3 bg-muted p-4">
            <div className="font-rajdhani font-bold text-text-primary">Feature</div>
            <div className="font-rajdhani font-bold text-accent text-center">MGO Orbital</div>
            <div className="font-rajdhani font-bold text-text-secondary text-center">
              Other Platforms
            </div>
          </div>

          {features?.map((feature, index) => (
            <div
              key={index}
              className={`grid grid-cols-3 p-4 items-center ${
                index % 2 === 0 ? 'bg-card' : 'bg-muted/50'
              }`}
            >
              <div className="font-source-sans text-text-primary">{feature?.name}</div>
              <div className="flex justify-center">
                {feature?.mgo ? (
                  <Icon name="CheckCircleIcon" size={24} className="text-success" />
                ) : (
                  <Icon name="XCircleIcon" size={24} className="text-error" />
                )}
              </div>
              <div className="flex justify-center">
                {feature?.others ? (
                  <Icon name="CheckCircleIcon" size={24} className="text-success" />
                ) : (
                  <Icon name="XCircleIcon" size={24} className="text-error" />
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-card rounded-lg p-6 border border-border text-center">
            <p className="font-orbitron font-bold text-4xl text-accent mb-2">10x</p>
            <p className="font-space-mono text-sm text-text-secondary">
              Faster Project Discovery
            </p>
          </div>
          <div className="bg-card rounded-lg p-6 border border-border text-center">
            <p className="font-orbitron font-bold text-4xl text-accent mb-2">5x</p>
            <p className="font-space-mono text-sm text-text-secondary">
              Better Investment Insights
            </p>
          </div>
          <div className="bg-card rounded-lg p-6 border border-border text-center">
            <p className="font-orbitron font-bold text-4xl text-accent mb-2">3x</p>
            <p className="font-space-mono text-sm text-text-secondary">
              Higher Portfolio Returns
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;