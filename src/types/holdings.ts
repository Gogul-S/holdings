export interface Holding {
  symbol: string;
  quantity: number;
  ltp: number;
  pandl: number;
  currentValue: number;
  investmentValue: number;
}

export interface HoldingsData {
  holdings: Holding[];
  totalCurrentValue: number;
  totalInvestmentValue: number;
  totalPandL: number;
  todayPandL: number;
}
