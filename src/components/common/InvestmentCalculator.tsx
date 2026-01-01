'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface CalculatorResult {
  projectedValue: number;
  roi: number;
  riskLevel: 'Low' | 'Medium' | 'High';
}

interface InvestmentCalculatorProps {
  className?: string;
  onCalculate?: (result: CalculatorResult) => void;
}

const InvestmentCalculator = ({ className = '', onCalculate }: InvestmentCalculatorProps) => {
  const [investmentAmount, setInvestmentAmount] = useState<number>(10000);
  const [timeHorizon, setTimeHorizon] = useState<number>(12);
  const [riskTolerance, setRiskTolerance] = useState<'conservative' | 'moderate' | 'aggressive'>('moderate');
  const [result, setResult] = useState<CalculatorResult | null>(null);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const riskMultipliers = {
    conservative: { min: 1.05, max: 1.15, risk: 'Low' as const },
    moderate: { min: 1.15, max: 1.35, risk: 'Medium' as const },
    aggressive: { min: 1.35, max: 1.75, risk: 'High' as const },
  };

  useEffect(() => {
    calculateROI();
  }, [investmentAmount, timeHorizon, riskTolerance]);

  const calculateROI = () => {
    const multiplier = riskMultipliers[riskTolerance];
    const monthlyGrowth = Math.pow(multiplier.max, 1 / 12);
    const projectedValue = investmentAmount * Math.pow(monthlyGrowth, timeHorizon);
    const roi = ((projectedValue - investmentAmount) / investmentAmount) * 100;

    const calculatedResult: CalculatorResult = {
      projectedValue: Math.round(projectedValue),
      roi: Math.round(roi * 10) / 10,
      riskLevel: multiplier.risk,
    };

    setResult(calculatedResult);
    
    if (onCalculate) {
      onCalculate(calculatedResult);
    }
  };

  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const handleInvestmentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 0) {
      setInvestmentAmount(value);
    }
  };

  const handleTimeHorizonChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 1 && value <= 60) {
      setTimeHorizon(value);
    }
  };

  return (
    <div className={`bg-card rounded-lg shadow-card border border-border ${className}`}>
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-orbitron font-bold text-xl text-text-primary">
            Investment Calculator
          </h3>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="lg:hidden p-2 hover:bg-muted rounded-lg transition-colors duration-250"
            aria-label={isExpanded ? 'Collapse calculator' : 'Expand calculator'}
          >
            <Icon
              name={isExpanded ? 'ChevronUpIcon' : 'ChevronDownIcon'}
              size={20}
              className="text-text-secondary"
            />
          </button>
        </div>

        <div className={`space-y-6 ${isExpanded ? 'block' : 'hidden lg:block'}`}>
          <div>
            <label className="flex items-center justify-between mb-2">
              <span className="font-space-mono text-sm text-text-secondary">
                Investment Amount
              </span>
              <span className="font-rajdhani font-semibold text-accent">
                {formatCurrency(investmentAmount)}
              </span>
            </label>
            <input
              type="range"
              min="1000"
              max="1000000"
              step="1000"
              value={investmentAmount}
              onChange={handleInvestmentChange}
              className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-accent"
            />
            <div className="flex justify-between mt-1">
              <span className="font-space-mono text-xs text-muted-foreground">$1K</span>
              <span className="font-space-mono text-xs text-muted-foreground">$1M</span>
            </div>
          </div>

          <div>
            <label className="flex items-center justify-between mb-2">
              <span className="font-space-mono text-sm text-text-secondary">
                Time Horizon
              </span>
              <span className="font-rajdhani font-semibold text-accent">
                {timeHorizon} months
              </span>
            </label>
            <input
              type="range"
              min="1"
              max="60"
              step="1"
              value={timeHorizon}
              onChange={handleTimeHorizonChange}
              className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-accent"
            />
            <div className="flex justify-between mt-1">
              <span className="font-space-mono text-xs text-muted-foreground">1 mo</span>
              <span className="font-space-mono text-xs text-muted-foreground">5 yrs</span>
            </div>
          </div>

          <div>
            <label className="font-space-mono text-sm text-text-secondary mb-3 block">
              Risk Tolerance
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => setRiskTolerance('conservative')}
                className={`py-3 px-4 rounded-lg font-rajdhani font-semibold text-sm transition-all duration-250 ${
                  riskTolerance === 'conservative' ?'bg-success text-success-foreground shadow-cta' :'bg-muted text-text-secondary hover:bg-muted/80'
                }`}
              >
                Conservative
              </button>
              <button
                onClick={() => setRiskTolerance('moderate')}
                className={`py-3 px-4 rounded-lg font-rajdhani font-semibold text-sm transition-all duration-250 ${
                  riskTolerance === 'moderate' ?'bg-warning text-warning-foreground shadow-cta' :'bg-muted text-text-secondary hover:bg-muted/80'
                }`}
              >
                Moderate
              </button>
              <button
                onClick={() => setRiskTolerance('aggressive')}
                className={`py-3 px-4 rounded-lg font-rajdhani font-semibold text-sm transition-all duration-250 ${
                  riskTolerance === 'aggressive' ?'bg-error text-error-foreground shadow-cta' :'bg-muted text-text-secondary hover:bg-muted/80'
                }`}
              >
                Aggressive
              </button>
            </div>
          </div>

          {result && (
            <div className="bg-muted rounded-lg p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-space-mono text-sm text-text-secondary">
                  Projected Value
                </span>
                <span className="font-orbitron font-bold text-2xl text-accent">
                  {formatCurrency(result.projectedValue)}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-space-mono text-sm text-text-secondary">
                  Expected ROI
                </span>
                <span className="font-rajdhani font-bold text-xl text-success">
                  +{result.roi}%
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-space-mono text-sm text-text-secondary">
                  Risk Level
                </span>
                <span
                  className={`font-rajdhani font-semibold text-sm px-3 py-1 rounded-full ${
                    result.riskLevel === 'Low' ?'bg-success/20 text-success'
                      : result.riskLevel === 'Medium' ?'bg-warning/20 text-warning' :'bg-error/20 text-error'
                  }`}
                >
                  {result.riskLevel}
                </span>
              </div>
            </div>
          )}

          <button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-rajdhani font-bold py-4 px-6 rounded-lg shadow-cta transition-all duration-250">
            Start Investing
          </button>
        </div>
      </div>
    </div>
  );
};

export default InvestmentCalculator;