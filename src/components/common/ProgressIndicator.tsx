'use client';

import React, { useState, useEffect } from 'react';

interface Section {
  id: string;
  label: string;
  sectionId: string;
}

interface ProgressIndicatorProps {
  className?: string;
}

const ProgressIndicator = ({ className = '' }: ProgressIndicatorProps) => {
  const [activeSection, setActiveSection] = useState<string>('ecosystem');
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  const sections: Section[] = [
    { id: 'ecosystem', label: 'Ecosystem', sectionId: 'ecosystem-section' },
    { id: 'investment', label: 'Investment', sectionId: 'investment-section' },
    { id: 'roadmap', label: 'Roadmap', sectionId: 'roadmap-section' },
    { id: 'security', label: 'Security', sectionId: 'security-section' },
    { id: 'community', label: 'Community', sectionId: 'community-section' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;
      setScrollProgress(Math.min(scrollPercentage, 100));
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
          const section = sections.find((s) => s.sectionId === sectionId);
          if (section) {
            setActiveSection(section.id);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((section) => {
      const element = document.getElementById(section.sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleSectionClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <div
        className={`fixed left-8 top-1/2 -translate-y-1/2 z-[75] hidden lg:flex flex-col items-center gap-6 ${className}`}
      >
        <div className="relative h-64 w-1 bg-muted rounded-full overflow-hidden">
          <div
            className="absolute top-0 left-0 w-full bg-accent transition-all duration-300 ease-out"
            style={{ height: `${scrollProgress}%` }}
          />
        </div>

        <div className="flex flex-col gap-4">
          {sections.map((section, index) => (
            <button
              key={section.id}
              onClick={() => handleSectionClick(section.sectionId)}
              className="group relative flex items-center"
              aria-label={`Navigate to ${section.label}`}
            >
              <div
                className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                  activeSection === section.id
                    ? 'bg-accent border-accent scale-125' :'bg-transparent border-muted-foreground hover:border-accent'
                }`}
              />
              <span
                className={`absolute left-6 whitespace-nowrap font-space-mono text-xs transition-all duration-300 opacity-0 group-hover:opacity-100 ${
                  activeSection === section.id ? 'text-accent' : 'text-text-secondary'
                }`}
              >
                {section.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 z-[75] lg:hidden h-1 bg-muted">
        <div
          className="h-full bg-accent transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </>
  );
};

export default ProgressIndicator;