import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const TestimonialsSection = () => {
  const testimonials = [
  {
    id: 1,
    name: 'Sarah Chen',
    role: 'Founder, DeFi Protocol',
    company: 'MGO DeFi Protocol',
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_18d02aed5-1764706700120.png",
    quote: 'MGO\'s orbital ecosystem visualization helped us secure $15M in funding by clearly demonstrating our project\'s interconnections and growth potential. The platform\'s transparency is unmatched.',
    verified: true
  },
  {
    id: 2,
    name: 'Michael Rodriguez',
    role: 'Investment Director',
    company: 'Crypto Ventures Capital',
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_14ac7b06b-1766821067811.png",
    quote: 'As an institutional investor, MGO provides the comprehensive ecosystem view we need for due diligence. We\'ve allocated $50M across multiple MGO projects with confidence.',
    verified: true
  },
  {
    id: 3,
    name: 'Emily Watson',
    role: 'Early Investor',
    company: 'Independent',
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_14ed93629-1764829363226.png",
    quote: 'I invested $10K in three MGO ecosystem projects last year. My portfolio is now worth $34K. The orbital visualization made it easy to identify synergistic opportunities.',
    verified: true
  },
  {
    id: 4,
    name: 'David Kim',
    role: 'CTO',
    company: 'MGO NFT Hub',
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_12b9e3744-1766384360598.png",
    quote: 'Building on MGO\'s infrastructure accelerated our development by 6 months. The ecosystem connections brought us 45K users in the first month.',
    verified: true
  },
  {
    id: 5,
    name: 'Lisa Anderson',
    role: 'Portfolio Manager',
    company: 'Blockchain Capital Group',
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1a9f1f22b-1764662329890.png",
    quote: 'MGO\'s unified dashboard saves our team 20+ hours weekly on research. The real-time metrics and audit transparency are game-changers for institutional adoption.',
    verified: true
  },
  {
    id: 6,
    name: 'James Thompson',
    role: 'Crypto Enthusiast',
    company: 'Community Member',
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1b325ff7f-1764894102806.png",
    quote: 'The orbital visualization is not just beautiful—it\'s functional. I discovered three high-potential projects I would have missed on traditional platforms.',
    verified: true
  }];


  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-orbitron font-bold text-4xl md:text-5xl text-text-primary mb-6">
            Trusted by Innovators & Investors
          </h2>
          <p className="font-source-sans text-xl text-text-secondary max-w-3xl mx-auto">
            Join thousands of successful investors and project founders building the future of crypto
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials?.map((testimonial) =>
          <div
            key={testimonial?.id}
            className="bg-card rounded-lg p-6 border border-border hover:shadow-card transition-shadow duration-250">

              <div className="flex items-start gap-4 mb-4">
                <AppImage
                src={testimonial?.avatar}
                alt={`Professional headshot of ${testimonial?.name}, ${testimonial?.role}`}
                width={56}
                height={56}
                className="rounded-full" />

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-rajdhani font-bold text-text-primary">
                      {testimonial?.name}
                    </h4>
                    {testimonial?.verified &&
                  <Icon name="CheckBadgeIcon" size={16} className="text-success" />
                  }
                  </div>
                  <p className="font-space-mono text-xs text-text-secondary">
                    {testimonial?.role}
                  </p>
                  <p className="font-space-mono text-xs text-muted-foreground">
                    {testimonial?.company}
                  </p>
                </div>
              </div>

              <p className="font-source-sans text-sm text-text-secondary leading-relaxed">
                "{testimonial?.quote}"
              </p>
            </div>
          )}
        </div>
      </div>
    </section>);

};

export default TestimonialsSection;