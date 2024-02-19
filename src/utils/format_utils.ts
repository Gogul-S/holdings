import {INR_SYMBOL} from '../constants/currencyConstants';

export function formatCurrency(
  value: number,
  decimalPlaces: number,
  currencySymbol = INR_SYMBOL,
): string {
  const roundedValue = value.toFixed(decimalPlaces);
  return `${currencySymbol} ${roundedValue}`;
}
