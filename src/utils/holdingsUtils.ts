import {HoldingsData} from '../types/holdings';

const transformHoldings = (rawResponse: any): HoldingsData | undefined => {
  if (
    !rawResponse ||
    !rawResponse.userHolding ||
    rawResponse.userHolding.length === 0
  ) {
    throw new Error('Invalid response');
  }

  const holdingsData: HoldingsData = {
    holdings: [],
    totalCurrentValue: 0,
    totalInvestmentValue: 0,
    totalPandL: 0,
    todayPandL: 0,
  };

  rawResponse.userHolding.forEach((holding: any) => {
    const ltp = holding.ltp || 0;
    const quantity = holding.quantity || 0;
    const averagePrice = holding.avgPrice || 0;
    const investmentValue = averagePrice * quantity;
    const currentValue = ltp * quantity;
    const pandl = currentValue - investmentValue;

    const todayPandL = (holding.close - ltp) * quantity;

    holdingsData.holdings.push({
      symbol: holding.symbol,
      quantity,
      ltp,
      pandl,
      currentValue,
      investmentValue,
    });

    holdingsData.totalInvestmentValue += investmentValue;
    holdingsData.totalCurrentValue += currentValue;
    holdingsData.todayPandL += todayPandL;
  });

  holdingsData.totalPandL =
    holdingsData.totalCurrentValue - holdingsData.totalInvestmentValue;

  holdingsData.todayPandL;

  return holdingsData;
};

export {transformHoldings};
