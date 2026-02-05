import React from 'react';
import Icon from '@/components/ui/AppIcon';

const CommunitySection = () => {
  const socialMetrics = [
    {
      platform: 'Discord',
      icon: 'ChatBubbleLeftRightIcon',
      members: '45,000',
      activity: '2,300 online',
      link: '#',
    },
    {
      platform: 'Twitter',
      icon: 'AtSymbolIcon',
      members: '128,000',
      activity: '15K daily impressions',
      link: '#',
    },
    {
      platform: 'Telegram',
      icon: 'PaperAirplaneIcon',
      members: '67,000',
      activity: '1,800 messages/day',
      link: '#',
    },
  ];

  const recentActivity = [
  {
    user: 'Research Node',
    action: 'published interoperability findings',
    time: '2 hours ago',
  },
  {
    user: 'Core Contributor',
    action: 'deployed infrastructure update',
    time: '5 hours ago',
  },
  {
    user: 'Community Working Group',
    action: 'initiated governance proposal',
    time: '8 hours ago',
  },
  {
    user: 'Security Team',
    action: 'completed network audit',
    time: '12 hours ago',
  },
];

  return (
    <section id="community-section" className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-orbitron font-bold text-4xl md:text-5xl text-text-primary mb-6">
            Join Our Thriving Community
          </h2>
          <p className="font-source-sans text-xl text-text-secondary max-w-3xl mx-auto">
            Connect with thousands of investors, developers, and crypto enthusiasts
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {socialMetrics.map((social, index) => (
            <a
              key={index}
              href={social.link}
              className="bg-card rounded-lg p-8 border border-border hover:shadow-card transition-all duration-250 hover:scale-105 text-center"
            >
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name={social.icon as any} size={32} className="text-accent" />
              </div>
              <h3 className="font-rajdhani font-bold text-2xl text-text-primary mb-2">
                {social.platform}
              </h3>
              <p className="font-orbitron font-bold text-3xl text-accent mb-2">
                {social.members}
              </p>
              <p className="font-space-mono text-sm text-text-secondary">{social.activity}</p>
            </a>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card rounded-lg p-8 border border-border">
            <h3 className="font-orbitron font-bold text-2xl text-text-primary mb-6">
              Recent Activity
            </h3>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start gap-4 pb-4 border-b border-border last:border-0">
                  <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="UserIcon" size={20} className="text-accent" />
                  </div>
                  <div className="flex-1">
                    <p className="font-source-sans text-text-primary">
                      <span className="font-rajdhani font-semibold">{activity.user}</span>{' '}
                      {activity.action}
                    </p>
                    <p className="font-space-mono text-xs text-text-secondary mt-1">
                      {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card rounded-lg p-8 border border-border">
            <h3 className="font-orbitron font-bold text-2xl text-text-primary mb-6">
              Participation Pathways
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Icon name="CheckCircleIcon" size={20} className="text-success flex-shrink-0 mt-0.5" />
                <span className="font-source-sans text-text-secondary">
                  Collaborate with core contributors
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="CheckCircleIcon" size={20} className="text-success flex-shrink-0 mt-0.5" />
                <span className="font-source-sans text-text-secondary">
                  Research forums & working groups
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="CheckCircleIcon" size={20} className="text-success flex-shrink-0 mt-0.5" />
                <span className="font-source-sans text-text-secondary">
                  Participation in initiative pilots
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="CheckCircleIcon" size={20} className="text-success flex-shrink-0 mt-0.5" />
                <span className="font-source-sans text-text-secondary">
                  Governance contribution & review
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="CheckCircleIcon" size={20} className="text-success flex-shrink-0 mt-0.5" />
                <span className="font-source-sans text-text-secondary">
                  Cross-domain collaboration
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;