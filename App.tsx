import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import NavTabs from "./components/NavTabs";
import DataList from "./components/DataList";
import BottomNav from "./components/BottomNav";
import type { ForexPair } from "./types";

const App: React.FC = () => {
  const [forexData, setForexData] = useState<ForexPair[]>([]);

  const generateMockData = (): ForexPair[] => {
    const pairs = [
      { base: "EUR", quote: "GBP", baseFlag: "EU", quoteFlag: "GB" },
      { base: "USD", quote: "JPY", baseFlag: "US", quoteFlag: "JP" },
      { base: "AUD", quote: "USD", baseFlag: "AU", quoteFlag: "US" },
      { base: "GBP", quote: "CHF", baseFlag: "GB", quoteFlag: "CH" },
      { base: "NZD", quote: "CAD", baseFlag: "NZ", quoteFlag: "CA" },
      { base: "EUR", quote: "USD", baseFlag: "EU", quoteFlag: "US" },
      { base: "USD", quote: "CAD", baseFlag: "US", quoteFlag: "CA" },
      { base: "CHF", quote: "JPY", baseFlag: "CH", quoteFlag: "JP" },
      { base: "GBP", quote: "USD", baseFlag: "GB", quoteFlag: "US" },
      { base: "EUR", quote: "AUD", baseFlag: "EU", quoteFlag: "AU" },
    ];

    return pairs.map((pair, index) => {
      const isUp = Math.random() > 0.5;
      const change = parseFloat((Math.random() * 50).toFixed(0));
      const changePercent = parseFloat((Math.random() * 2).toFixed(2));
      const basePrice = 1.12345 + (Math.random() - 0.5) * 0.1;

      return {
        id: index,
        baseCurrency: pair.base,
        quoteCurrency: pair.quote,
        baseFlag: pair.baseFlag,
        quoteFlag: pair.quoteFlag,
        time: "15:00:00",
        change: isUp ? change : -change,
        changePercent: isUp ? changePercent : -changePercent,
        bid: parseFloat((basePrice + Math.random() * 0.001).toFixed(6)),
        ask: parseFloat(
          (basePrice + 0.0015 + Math.random() * 0.001).toFixed(6)
        ),
        low: parseFloat((basePrice - 0.005).toFixed(6)),
        high: parseFloat((basePrice + 0.005).toFixed(6)),
      };
    });
  };

  useEffect(() => {
    setForexData(generateMockData());

    const interval = setInterval(() => {
      setForexData((prevData) =>
        prevData.map((pair) => {
          const isUp = Math.random() > 0.5;
          const priceChange = (Math.random() - 0.5) * 0.0005;
          return {
            ...pair,
            bid: parseFloat(Math.max(0, pair.bid + priceChange).toFixed(6)),
            ask: parseFloat(Math.max(0, pair.ask + priceChange).toFixed(6)),
            change: isUp ? Math.abs(pair.change) : -Math.abs(pair.change),
          };
        })
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#0D0D0D] text-white min-h-screen font-sans">
      <div className="container mx-auto max-w-md h-screen flex flex-col">
        <Header />
        <NavTabs />
        <DataList data={forexData} />
        <BottomNav />
      </div>
    </div>
  );
};

export default App;
