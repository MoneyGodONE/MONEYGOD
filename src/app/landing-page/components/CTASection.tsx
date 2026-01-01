import React from 'react';
import Icon from '@/components/ui/AppIcon';

const CTASection = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-primary to-background">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-orbitron font-bold text-4xl md:text-6xl text-text-primary mb-6">
          Ready to Explore the Future?
        </h2>
        <p className="font-source-sans text-xl text-text-secondary mb-12 max-w-2xl mx-auto">
          Join 156,000+ investors discovering interconnected blockchain opportunities through MGO's revolutionary orbital ecosystem
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button className="bg-accent hover:bg-accent/90 text-accent-foreground font-rajdhani font-bold text-lg py-4 px-8 rounded-lg shadow-cta transition-all duration-250 flex items-center justify-center gap-2">
            Get Started Free
            <Icon name="ArrowRightIcon" size={20} />
          </button>
          <button className="bg-secondary hover:bg-secondary/80 text-secondary-foreground font-rajdhani font-bold text-lg py-4 px-8 rounded-lg border border-border transition-all duration-250 flex items-center justify-center gap-2">
            Schedule Demo
            <Icon name="CalendarIcon" size={20} />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border">
            <Icon name="BoltIcon" size={32} className="text-accent mx-auto mb-4" />
            <h3 className="font-rajdhani font-bold text-xl text-text-primary mb-2">
              Instant Access
            </h3>
            <p className="font-source-sans text-sm text-text-secondary">
              Start exploring the ecosystem immediately after signup
            </p>
          </div>
          <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border">
            <Icon name="ShieldCheckIcon" size={32} className="text-success mx-auto mb-4" />
            <h3 className="font-rajdhani font-bold text-xl text-text-primary mb-2">
              Secure Platform
            </h3>
            <p className="font-source-sans text-sm text-text-secondary">
              Bank-grade security with multi-signature protection
            </p>
          </div>
          <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border">
            <Icon name="UserGroupIcon" size={32} className="text-warning mx-auto mb-4" />
            <h3 className="font-rajdhani font-bold text-xl text-text-primary mb-2">
              Expert Support
            </h3>
            <p className="font-source-sans text-sm text-text-secondary">
              24/7 customer support from crypto investment specialists
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;