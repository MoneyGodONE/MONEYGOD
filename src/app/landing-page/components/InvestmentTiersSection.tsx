import React from 'react';
import Icon from '@/components/ui/AppIcon';

const InvestmentTiersSection = () => {
  const tiers = [
    {
      name: 'Explorer',
      price: 'Free',
      description: 'Perfect for crypto enthusiasts exploring the ecosystem',
      features: [
        'Access to orbital visualization',
        'Basic project information',
        'Community forum access',
        'Weekly ecosystem updates',
        'Mobile app access',
      ],
      cta: 'Start Exploring',
      highlighted: false,
    },
    {
      name: 'Investor',
      price: '$1,000',
      description: 'For serious investors ready to participate in the ecosystem',
      features: [
        'Everything in Explorer',
        'Detailed project analytics',
        'Investment calculator',
        'Priority project access',
        'Quarterly strategy calls',
        'Portfolio tracking dashboard',
        'Early access to new launches',
      ],
      cta: 'Become an Investor',
      highlighted: true,
    },
    {
      name: 'Institutional',
      price: '$100,000',
      description: 'Enterprise-grade access for institutional investors',
      features: [
        'Everything in Investor',
        'Dedicated account manager',
        'Custom analytics reports',
        'API access',
        'White-label options',
        'Direct project founder access',
        'Exclusive investment opportunities',
        'Custom integration support',
      ],
      cta: 'Contact Sales',
      highlighted: false,
    },
  ];

  return (
    <section id="investment-section" className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-orbitron font-bold text-4xl md:text-5xl text-text-primary mb-6">
            Investment Opportunities
          </h2>
          <p className="font-source-sans text-xl text-text-secondary max-w-3xl mx-auto">
            Choose the access level that matches your investment goals
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {tiers?.map((tier, index) => (
            <div
              key={index}
              className={`rounded-lg p-8 border ${
                tier?.highlighted
                  ? 'bg-accent/10 border-accent shadow-cta'
                  : 'bg-card border-border'
              }`}
            >
              {tier?.highlighted && (
                <div className="bg-accent text-accent-foreground font-rajdhani font-bold text-sm py-1 px-4 rounded-full inline-block mb-4">
                  Most Popular
                </div>
              )}

              <h3 className="font-orbitron font-bold text-3xl text-text-primary mb-2">
                {tier?.name}
              </h3>
              <p className="font-orbitron font-bold text-4xl text-accent mb-4">
                {tier?.price}
                {tier?.price !== 'Free' && (
                  <span className="font-space-mono text-sm text-text-secondary ml-2">
                    minimum
                  </span>
                )}
              </p>
              <p className="font-source-sans text-text-secondary mb-6">{tier?.description}</p>

              <ul className="space-y-3 mb-8">
                {tier?.features?.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Icon
                      name="CheckCircleIcon"
                      size={20}
                      className="text-success flex-shrink-0 mt-0.5"
                    />
                    <span className="font-source-sans text-sm text-text-secondary">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full font-rajdhani font-bold py-4 px-6 rounded-lg transition-all duration-250 ${
                  tier?.highlighted
                    ? 'bg-accent hover:bg-accent/90 text-accent-foreground shadow-cta'
                    : 'bg-secondary hover:bg-secondary/80 text-secondary-foreground'
                }`}
              >
                {tier?.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-card rounded-lg p-8 border border-border">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-orbitron font-bold text-2xl text-text-primary mb-4">
                MGO Token Benefits
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Icon name="SparklesIcon" size={20} className="text-accent flex-shrink-0 mt-0.5" />
                  <span className="font-source-sans text-text-secondary">
                    Governance rights for ecosystem decisions
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="SparklesIcon" size={20} className="text-accent flex-shrink-0 mt-0.5" />
                  <span className="font-source-sans text-text-secondary">
                    Staking rewards up to 15% APY
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="SparklesIcon" size={20} className="text-accent flex-shrink-0 mt-0.5" />
                  <span className="font-source-sans text-text-secondary">
                    Exclusive access to new project launches
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="SparklesIcon" size={20} className="text-accent flex-shrink-0 mt-0.5" />
                  <span className="font-source-sans text-text-secondary">
                    Fee discounts across all ecosystem projects
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-muted rounded-lg p-6">
              <h4 className="font-rajdhani font-bold text-xl text-text-primary mb-4">
                Tokenomics
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-space-mono text-sm text-text-secondary">Total Supply</span>
                  <span className="font-rajdhani font-semibold text-text-primary">
                    1,000,000,000 MGO
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-space-mono text-sm text-text-secondary">
                    Circulating Supply
                  </span>
                  <span className="font-rajdhani font-semibold text-text-primary">
                    450,000,000 MGO
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-space-mono text-sm text-text-secondary">Token Price</span>
                  <span className="font-rajdhani font-semibold text-accent">$2.45</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-space-mono text-sm text-text-secondary">Market Cap</span>
                  <span className="font-rajdhani font-semibold text-accent">$1.1B</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentTiersSection;