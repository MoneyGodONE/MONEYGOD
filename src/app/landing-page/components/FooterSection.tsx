import React from 'react';
import Icon from '@/components/ui/AppIcon';

const FooterSection = () => {
  const currentYear = new Date()?.getFullYear();

  return (
    <footer className="bg-primary border-t border-border py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                <span className="font-orbitron font-bold text-accent-foreground text-sm">MGO</span>
              </div>
              <span className="font-orbitron font-bold text-xl text-text-primary">Orbital</span>
            </div>
            <p className="font-source-sans text-sm text-text-secondary mb-4">
              The first orbital visualization platform for interconnected blockchain ecosystems
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-text-secondary hover:text-accent transition-colors duration-250">
                <Icon name="AtSymbolIcon" size={20} />
              </a>
              <a href="#" className="text-text-secondary hover:text-accent transition-colors duration-250">
                <Icon name="ChatBubbleLeftRightIcon" size={20} />
              </a>
              <a href="#" className="text-text-secondary hover:text-accent transition-colors duration-250">
                <Icon name="PaperAirplaneIcon" size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-rajdhani font-bold text-text-primary mb-4">Platform</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="font-source-sans text-sm text-text-secondary hover:text-accent transition-colors duration-250">
                  Ecosystem Explorer
                </a>
              </li>
              <li>
                <a href="#" className="font-source-sans text-sm text-text-secondary hover:text-accent transition-colors duration-250">
                  Investment Dashboard
                </a>
              </li>
              <li>
                <a href="#" className="font-source-sans text-sm text-text-secondary hover:text-accent transition-colors duration-250">
                  Project Analytics
                </a>
              </li>
              <li>
                <a href="#" className="font-source-sans text-sm text-text-secondary hover:text-accent transition-colors duration-250">
                  API Documentation
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-rajdhani font-bold text-text-primary mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="font-source-sans text-sm text-text-secondary hover:text-accent transition-colors duration-250">
                  Whitepaper
                </a>
              </li>
              <li>
                <a href="#" className="font-source-sans text-sm text-text-secondary hover:text-accent transition-colors duration-250">
                  Security Audits
                </a>
              </li>
              <li>
                <a href="#" className="font-source-sans text-sm text-text-secondary hover:text-accent transition-colors duration-250">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="font-source-sans text-sm text-text-secondary hover:text-accent transition-colors duration-250">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-rajdhani font-bold text-text-primary mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="font-source-sans text-sm text-text-secondary hover:text-accent transition-colors duration-250">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="font-source-sans text-sm text-text-secondary hover:text-accent transition-colors duration-250">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="font-source-sans text-sm text-text-secondary hover:text-accent transition-colors duration-250">
                  Press Kit
                </a>
              </li>
              <li>
                <a href="#" className="font-source-sans text-sm text-text-secondary hover:text-accent transition-colors duration-250">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-space-mono text-xs text-text-secondary">
              &copy; {currentYear} MGO Orbital. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="font-space-mono text-xs text-text-secondary hover:text-accent transition-colors duration-250">
                Privacy Policy
              </a>
              <a href="#" className="font-space-mono text-xs text-text-secondary hover:text-accent transition-colors duration-250">
                Terms of Service
              </a>
              <a href="#" className="font-space-mono text-xs text-text-secondary hover:text-accent transition-colors duration-250">
                Risk Disclosure
              </a>
            </div>
          </div>
          <p className="font-space-mono text-xs text-muted-foreground text-center mt-4">
            Cryptocurrency investments carry significant risk. Past performance does not guarantee future results. Please invest responsibly.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;