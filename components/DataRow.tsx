
import React from 'react';
import { UsaFlagIcon, BelgiumFlagIcon, EUFlagIcon, GBFlagIcon, JPFlagIcon, AUFlagIcon, CHFlagIcon, NZFlagIcon, CAFlagIcon } from './Icons';
import type { ForexPair } from '../types';

interface DataRowProps {
  pair: ForexPair;
}

const flagComponents: { [key: string]: React.FC<{className?: string}> } = {
  US: UsaFlagIcon,
  BE: BelgiumFlagIcon,
  EU: EUFlagIcon,
  GB: GBFlagIcon,
  JP: JPFlagIcon,
  AU: AUFlagIcon,
  CH: CHFlagIcon,
  NZ: NZFlagIcon,
  CA: CAFlagIcon,
};


const PriceDisplay: React.FC<{ price: number, isUp: boolean }> = ({ price, isUp }) => {
    const priceStr = price.toFixed(6);
    const mainPart = priceStr.slice(0, -3);
    const lastPart = priceStr.slice(-3);
    
    const parts = mainPart.split('.');
    const integerPart = parts[0];
    const decimalPart = parts[1];
    const dotColor = isUp ? 'text-green-500' : 'text-red-500';

    return (
        <span className="font-mono text-lg tracking-tighter">
            {integerPart}<span className={dotColor}>.</span>{decimalPart}
            <span className="text-2xl font-semibold">{lastPart}</span>
        </span>
    );
};


const DataRow: React.FC<DataRowProps> = ({ pair }) => {
  const isUp = pair.change >= 0;
  
  const BaseFlag = flagComponents[pair.baseFlag] || UsaFlagIcon;
  const QuoteFlag = flagComponents[pair.quoteCurrency] || BelgiumFlagIcon;

  return (
    <div className="flex items-center justify-between p-3 transition-colors duration-200 hover:bg-gray-800/50">
      <div className="flex flex-col space-y-1">
        <div className="flex items-center space-x-2">
          <div className="flex items-center">
            <BaseFlag className="w-6 h-6 rounded-full border-2 border-gray-700" />
            <QuoteFlag className="w-6 h-6 rounded-full border-2 border-gray-700 -ml-2" />
          </div>
          <span className="text-xs text-gray-500">{pair.time}</span>
        </div>
        <div>
          <span className="font-bold text-base">{pair.baseCurrency}/{pair.quoteCurrency}</span>
        </div>
        <div className={`text-sm ${isUp ? 'text-green-500' : 'text-red-500'}`}>
          <span>{isUp ? '+' : ''}{pair.change}</span>
          <span className="ml-1">({isUp ? '+' : ''}{pair.changePercent}%)</span>
        </div>
      </div>

      <div className="flex space-x-4 text-right">
        <div className="flex flex-col">
           <PriceDisplay price={pair.bid} isUp={!isUp} />
          <span className="text-xs text-gray-500">L:{pair.low.toFixed(5)}</span>
        </div>
        <div className="flex flex-col">
           <PriceDisplay price={pair.ask} isUp={isUp} />
          <span className="text-xs text-gray-500">H:{pair.high.toFixed(5)}</span>
        </div>
      </div>
    </div>
  );
};

export default DataRow;
