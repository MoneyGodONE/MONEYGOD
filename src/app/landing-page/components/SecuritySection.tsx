import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const SecuritySection = () => {
  const audits = [
    {
      name: 'CertiK',
      logo: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=200&h=200&fit=crop',
      score: '98/100',
      date: 'December 2025',
      reportUrl: '#',
    },
    {
      name: 'Quantstamp',
      logo: 'https://images.pexels.com/photos/6771607/pexels-photo-6771607.jpeg?w=200&h=200&fit=crop',
      score: '96/100',
      date: 'November 2025',
      reportUrl: '#',
    },
    {
      name: 'Trail of Bits',
      logo: 'https://images.pixabay.com/photo/2019/12/17/17/09/hacker-4702772_1280.jpg?w=200&h=200&fit=crop',
      score: '97/100',
      date: 'October 2025',
      reportUrl: '#',
    },
  ];

  const partnerships = [
    { name: 'Binance', logo: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=150&h=80&fit=crop', status: 'Active' },
    { name: 'Coinbase', logo: 'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?w=150&h=80&fit=crop', status: 'Active' },
    { name: 'Polygon', logo: 'https://images.pixabay.com/photo/2021/11/27/15/14/polygon-6827190_1280.png?w=150&h=80&fit=crop', status: 'Active' },
    { name: 'Chainlink', logo: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=150&h=80&fit=crop', status: 'Active' },
  ];

  return (
    <section id="security-section" className="py-24 px-4 bg-primary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-orbitron font-bold text-4xl md:text-5xl text-text-primary mb-6">
            Security & Trust
          </h2>
          <p className="font-source-sans text-xl text-text-secondary max-w-3xl mx-auto">
            Audited by industry leaders and trusted by major exchanges
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {audits?.map((audit, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-6 border border-border text-center"
            >
              <div className="w-24 h-24 mx-auto mb-4 rounded-lg overflow-hidden">
                <AppImage
                  src={audit?.logo}
                  alt={`${audit?.name} security audit badge showing blockchain security verification`}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-rajdhani font-bold text-xl text-text-primary mb-2">
                {audit?.name}
              </h3>
              <div className="flex items-center justify-center gap-2 mb-2">
                <Icon name="ShieldCheckIcon" size={20} className="text-success" />
                <span className="font-orbitron font-bold text-2xl text-success">
                  {audit?.score}
                </span>
              </div>
              <p className="font-space-mono text-xs text-text-secondary mb-4">{audit?.date}</p>
              <a
                href={audit?.reportUrl}
                className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-rajdhani font-semibold text-sm transition-colors duration-250"
              >
                View Report
                <Icon name="ArrowTopRightOnSquareIcon" size={16} />
              </a>
            </div>
          ))}
        </div>

        <div className="bg-card rounded-lg p-8 border border-border">
          <h3 className="font-orbitron font-bold text-2xl text-text-primary text-center mb-8">
            Strategic Partnerships
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {partnerships?.map((partner, index) => (
              <div key={index} className="text-center">
                <div className="h-20 flex items-center justify-center mb-4 bg-muted rounded-lg p-4">
                  <AppImage
                    src={partner?.logo}
                    alt={`${partner?.name} partnership logo representing blockchain collaboration`}
                    className="max-h-full w-auto object-contain"
                  />
                </div>
                <p className="font-rajdhani font-semibold text-text-primary mb-1">
                  {partner?.name}
                </p>
                <span className="inline-flex items-center gap-1 bg-success/20 text-success px-2 py-1 rounded-full text-xs font-space-mono">
                  <Icon name="CheckCircleIcon" size={12} />
                  {partner?.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-card rounded-lg p-6 border border-border text-center">
            <Icon name="LockClosedIcon" size={32} className="text-accent mx-auto mb-4" />
            <h4 className="font-rajdhani font-bold text-lg text-text-primary mb-2">
              Multi-Sig Security
            </h4>
            <p className="font-source-sans text-sm text-text-secondary">
              All treasury operations require 4-of-7 multi-signature approval
            </p>
          </div>
          <div className="bg-card rounded-lg p-6 border border-border text-center">
            <Icon name="DocumentCheckIcon" size={32} className="text-accent mx-auto mb-4" />
            <h4 className="font-rajdhani font-bold text-lg text-text-primary mb-2">
              KYC Verified
            </h4>
            <p className="font-source-sans text-sm text-text-secondary">
              All project teams undergo comprehensive KYC verification
            </p>
          </div>
          <div className="bg-card rounded-lg p-6 border border-border text-center">
            <Icon name="ClockIcon" size={32} className="text-accent mx-auto mb-4" />
            <h4 className="font-rajdhani font-bold text-lg text-text-primary mb-2">
              24/7 Monitoring
            </h4>
            <p className="font-source-sans text-sm text-text-secondary">
              Real-time security monitoring with instant threat response
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;