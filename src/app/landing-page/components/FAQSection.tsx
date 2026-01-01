'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FAQItem {
  question: string;
  answer: string;
  category: 'technical' | 'investment' | 'security';
}

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const faqs: FAQItem[] = [
    {
      question: 'What is MGO Orbital and how does it work?',
      answer:
        'MGO Orbital is the first cryptocurrency ecosystem platform that uses orbital visualization to display interconnected blockchain projects. Our platform shows how projects relate to each other, their funding status, and growth metrics in an intuitive, interactive interface.',
      category: 'technical',
    },
    {
      question: 'What is the minimum investment required?',
      answer:
        'We offer three tiers: Explorer (Free), Investor ($1,000 minimum), and Institutional ($100,000 minimum). Each tier provides different levels of access and features tailored to your investment goals.',
      category: 'investment',
    },
    {
      question: 'How are projects vetted before being added to the ecosystem?',
      answer:
        'Every project undergoes comprehensive due diligence including team KYC verification, smart contract audits from leading firms (CertiK, Quantstamp, Trail of Bits), tokenomics review, and community assessment. Only projects meeting our strict criteria are accepted.',
      category: 'security',
    },
    {
      question: 'Can I invest in multiple projects simultaneously?',
      answer:
        'Yes! Our unified investment dashboard allows you to diversify across multiple ecosystem projects. The platform provides portfolio tracking, automated rebalancing, and synergy analysis to optimize your investments.',
      category: 'investment',
    },
    {
      question: 'What blockchain networks does MGO support?',
      answer:
        'MGO currently supports Ethereum, Binance Smart Chain, Polygon, Avalanche, and Solana. We are actively expanding to additional chains based on ecosystem demand and technical compatibility.',
      category: 'technical',
    },
    {
      question: 'How do I withdraw my investments?',
      answer:
        'Withdrawals can be initiated directly from your dashboard. Processing times vary by project but typically complete within 24-48 hours. All withdrawals are subject to the individual project\'s terms and any applicable lock-up periods.',
      category: 'investment',
    },
    {
      question: 'What security measures protect my funds?',
      answer:
        'We employ multi-signature wallets (4-of-7 approval), cold storage for 95% of funds, 24/7 security monitoring, regular penetration testing, and insurance coverage up to $50M. All smart contracts are audited by multiple independent firms.',
      category: 'security',
    },
    {
      question: 'How does the orbital visualization help with investment decisions?',
      answer:
        'The orbital visualization reveals project interconnections, showing which projects work together and create synergies. This helps identify investment opportunities where multiple projects can amplify returns through ecosystem effects.',
      category: 'technical',
    },
  ];

  const filteredFAQs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-4 bg-primary">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-orbitron font-bold text-4xl md:text-5xl text-text-primary mb-6">
            Frequently Asked Questions
          </h2>
          <p className="font-source-sans text-xl text-text-secondary max-w-3xl mx-auto mb-8">
            Find answers to common questions about MGO Orbital
          </p>

          <div className="relative max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-card border border-border rounded-lg py-4 px-12 font-source-sans text-text-primary placeholder-text-secondary focus:outline-none focus:border-accent"
            />
            <Icon
              name="MagnifyingGlassIcon"
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary"
            />
          </div>
        </div>

        <div className="space-y-4">
          {filteredFAQs.map((faq, index) => (
            <div key={index} className="bg-card rounded-lg border border-border overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/50 transition-colors duration-250"
              >
                <span className="font-rajdhani font-bold text-lg text-text-primary pr-4">
                  {faq.question}
                </span>
                <Icon
                  name={openIndex === index ? 'ChevronUpIcon' : 'ChevronDownIcon'}
                  size={24}
                  className="text-accent flex-shrink-0"
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 animate-fade-in">
                  <p className="font-source-sans text-text-secondary leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {filteredFAQs.length === 0 && (
          <div className="text-center py-12">
            <Icon name="QuestionMarkCircleIcon" size={48} className="text-muted-foreground mx-auto mb-4" />
            <p className="font-source-sans text-text-secondary">
              No questions found matching your search. Try different keywords.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default FAQSection;