'use client';

import React, { useState, useEffect } from 'react';

import Icon from '@/components/ui/AppIcon';

interface NavigationItem {
  id: string;
  label: string;
  sectionId: string;
  orbitalIntegration: boolean;
}

interface AnchorNavigationProps {
  className?: string;
}

const AnchorNavigation = ({ className = '' }: AnchorNavigationProps) => {
  const [activeSection, setActiveSection] = useState<string>('ecosystem');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const navigationItems: NavigationItem[] = [
    { id: 'ecosystem', label: 'Ecosystem', sectionId: 'ecosystem-section', orbitalIntegration: true },
    { id: 'investment', label: 'Investment', sectionId: 'investment-section', orbitalIntegration: false },
    { id: 'roadmap', label: 'Roadmap', sectionId: 'roadmap-section', orbitalIntegration: false },
    { id: 'security', label: 'Security', sectionId: 'security-section', orbitalIntegration: false },
    { id: 'community', label: 'Community', sectionId: 'community-section', orbitalIntegration: false },
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          const navItem = navigationItems.find((item) => item.sectionId === sectionId);
          if (navItem) {
            setActiveSection(navItem.id);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navigationItems.forEach((item) => {
      const section = document.getElementById(item.sectionId);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleNavClick = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav
        className={`fixed top-8 right-8 z-[100] hidden lg:block ${className}`}
        aria-label="Main navigation"
      >
        <div className="bg-card/95 backdrop-blur-sm rounded-lg shadow-card border border-border px-6 py-4">
          <ul className="flex flex-col gap-4">
            {navigationItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavClick(item.sectionId)}
                  className={`font-rajdhani font-semibold text-sm tracking-wide transition-all duration-250 hover:text-accent ${
                    activeSection === item.id
                      ? 'text-accent border-l-2 border-accent pl-3' :'text-text-secondary pl-3'
                  }`}
                  aria-current={activeSection === item.id ? 'true' : 'false'}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <button
        onClick={toggleMobileMenu}
        className="fixed top-6 right-6 z-[100] lg:hidden bg-card rounded-lg p-3 shadow-card border border-border"
        aria-label="Toggle navigation menu"
        aria-expanded={isMobileMenuOpen}
      >
        <Icon
          name={isMobileMenuOpen ? 'XMarkIcon' : 'Bars3Icon'}
          size={24}
          className="text-accent"
        />
      </button>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-[90] lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div className="absolute inset-0 bg-background" />
          <div
            className="absolute top-0 right-0 w-64 h-full bg-card shadow-card border-l border-border animate-slide-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="pt-24 px-6">
              <ul className="flex flex-col gap-6">
                {navigationItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => handleNavClick(item.sectionId)}
                      className={`font-rajdhani font-semibold text-lg tracking-wide transition-all duration-250 hover:text-accent w-full text-left ${
                        activeSection === item.id
                          ? 'text-accent border-l-2 border-accent pl-4' :'text-text-secondary pl-4'
                      }`}
                      aria-current={activeSection === item.id ? 'true' : 'false'}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AnchorNavigation;