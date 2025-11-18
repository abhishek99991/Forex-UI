
export interface ForexPair {
  id: number;
  baseCurrency: string;
  quoteCurrency: string;
  baseFlag: string;
  quoteFlag: string;
  time: string;
  change: number;
  changePercent: number;
  bid: number;
  ask: number;
  low: number;
  high: number;
}
