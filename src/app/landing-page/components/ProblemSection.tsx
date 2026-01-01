import React from 'react';
import Icon from '@/components/ui/AppIcon';

const ProblemSection = () => {
  return (
    <section id="problem-section" className="py-24 px-4 bg-primary">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-orbitron font-bold text-4xl md:text-5xl text-text-primary text-center mb-16">
          The Fragmented Crypto Landscape
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-card rounded-lg p-6 border border-error">
              <div className="flex items-start gap-4">
                <Icon name="XCircleIcon" size={32} className="text-error flex-shrink-0" />
                <div>
                  <h3 className="font-rajdhani font-bold text-xl text-text-primary mb-2">
                    Scattered Information
                  </h3>
                  <p className="font-source-sans text-text-secondary">
                    Investors waste hours researching projects across multiple platforms with no clear connections or ecosystem overview
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border border-error">
              <div className="flex items-start gap-4">
                <Icon name="XCircleIcon" size={32} className="text-error flex-shrink-0" />
                <div>
                  <h3 className="font-rajdhani font-bold text-xl text-text-primary mb-2">
                    Hidden Relationships
                  </h3>
                  <p className="font-source-sans text-text-secondary">
                    Project interconnections and synergies remain invisible, leading to missed investment opportunities
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border border-error">
              <div className="flex items-start gap-4">
                <Icon name="XCircleIcon" size={32} className="text-error flex-shrink-0" />
                <div>
                  <h3 className="font-rajdhani font-bold text-xl text-text-primary mb-2">
                    Lack of Transparency
                  </h3>
                  <p className="font-source-sans text-text-secondary">
                    No unified view of ecosystem health, growth metrics, or project performance tracking
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-card rounded-lg p-6 border border-success">
              <div className="flex items-start gap-4">
                <Icon name="CheckCircleIcon" size={32} className="text-success flex-shrink-0" />
                <div>
                  <h3 className="font-rajdhani font-bold text-xl text-text-primary mb-2">
                    Unified Ecosystem View
                  </h3>
                  <p className="font-source-sans text-text-secondary">
                    MGO provides a single orbital visualization showing all projects and their relationships at a glance
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border border-success">
              <div className="flex items-start gap-4">
                <Icon name="CheckCircleIcon" size={32} className="text-success flex-shrink-0" />
                <div>
                  <h3 className="font-rajdhani font-bold text-xl text-text-primary mb-2">
                    Visual Connections
                  </h3>
                  <p className="font-source-sans text-text-secondary">
                    Interactive orbital system reveals project interconnections with strength indicators and synergy scores
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border border-success">
              <div className="flex items-start gap-4">
                <Icon name="CheckCircleIcon" size={32} className="text-success flex-shrink-0" />
                <div>
                  <h3 className="font-rajdhani font-bold text-xl text-text-primary mb-2">
                    Complete Transparency
                  </h3>
                  <p className="font-source-sans text-text-secondary">
                    Real-time metrics, verified audits, and comprehensive project data in one centralized dashboard
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;