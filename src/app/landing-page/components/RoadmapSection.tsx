import React from 'react';
import Icon from '@/components/ui/AppIcon';

const RoadmapSection = () => {
  const roadmapItems = [
    {
      quarter: 'Q1 2026',
      status: 'upcoming',
      title: 'Ecosystem Expansion',
      items: [
        '23 new project launches',
        'Cross-chain bridge integration',
        'Mobile app release',
        'Institutional investor portal',
      ],
      countdown: '45 days',
    },
    {
      quarter: 'Q2 2026',
      status: 'planned',
      title: 'Advanced Features',
      items: [
        'AI-powered project recommendations',
        'Automated portfolio rebalancing',
        'Governance token launch',
        'DAO implementation',
      ],
      countdown: '135 days',
    },
    {
      quarter: 'Q3 2026',
      status: 'planned',
      title: 'Global Expansion',
      items: [
        'European market entry',
        'Fiat on-ramp integration',
        'Multi-language support',
        'Regional compliance certifications',
      ],
      countdown: '225 days',
    },
    {
      quarter: 'Q4 2026',
      status: 'planned',
      title: 'Enterprise Solutions',
      items: [
        'White-label platform licensing',
        'Enterprise API access',
        'Custom ecosystem builder',
        'Advanced analytics suite',
      ],
      countdown: '315 days',
    },
  ];

  return (
    <section id="roadmap-section" className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-orbitron font-bold text-4xl md:text-5xl text-text-primary mb-6">
            Ecosystem Roadmap
          </h2>
          <p className="font-source-sans text-xl text-text-secondary max-w-3xl mx-auto">
            Our vision for the future of interconnected blockchain ecosystems
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border transform -translate-x-1/2" />

          <div className="space-y-12">
            {roadmapItems?.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="hidden md:block absolute left-1/2 w-4 h-4 bg-accent rounded-full border-4 border-background transform -translate-x-1/2" />

                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-card rounded-lg p-6 border border-border hover:shadow-card transition-shadow duration-250">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-orbitron font-bold text-2xl text-accent">
                        {item?.quarter}
                      </h3>
                      {item?.status === 'upcoming' && (
                        <span className="bg-warning/20 text-warning px-3 py-1 rounded-full text-xs font-space-mono">
                          {item?.countdown}
                        </span>
                      )}
                    </div>

                    <h4 className="font-rajdhani font-bold text-xl text-text-primary mb-4">
                      {item?.title}
                    </h4>

                    <ul className="space-y-3">
                      {item?.items?.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Icon
                            name="CheckCircleIcon"
                            size={20}
                            className="text-success flex-shrink-0 mt-0.5"
                          />
                          <span className="font-source-sans text-text-secondary">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {item?.status === 'upcoming' && (
                      <button className="w-full mt-6 bg-accent hover:bg-accent/90 text-accent-foreground font-rajdhani font-semibold py-2 px-4 rounded-lg transition-colors duration-250">
                        Get Early Access
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;