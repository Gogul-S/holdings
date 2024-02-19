import {useState} from 'react';
import {StyleProp, TouchableOpacity, View, ViewStyle} from 'react-native';
import {TextType} from '../../theme/typography';
import {formatCurrency} from '../../utils/formatUtils';
import TextView from '../TextView';
import {holdingsSummaryStyles} from './styles';

const HoldingsSummary = ({
  currentHoldings,
  totalInvestment,
  todayPandL,
  totalPandL,
  style,
}: {
  currentHoldings: number;
  totalInvestment: number;
  todayPandL: number;
  totalPandL: number;
  style?: StyleProp<ViewStyle>;
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <View style={[style, holdingsSummaryStyles.sheet]}>
      <TouchableOpacity
        style={holdingsSummaryStyles.expandCta}
        onPress={() => setExpanded(!expanded)}>
        <Triangle variant={expanded ? 'down' : 'up'} />
      </TouchableOpacity>
      <View style={holdingsSummaryStyles.container}>
        {expanded && (
          <View>
            {renderSummaryItem(
              'Current Value:',
              formatCurrency(currentHoldings, 2),
            )}
            {renderSummaryItem(
              'Total Investment:',
              formatCurrency(totalInvestment, 2),
            )}
            {renderSummaryItem(
              `Today's Profit & Loss:`,
              formatCurrency(todayPandL, 2),
            )}
            <View style={holdingsSummaryStyles.spacer} />
          </View>
        )}

        {renderSummaryItem('Profit & Loss:', formatCurrency(totalPandL, 2))}
      </View>
    </View>
  );
};

const renderSummaryItem = (label: string, value: string) => {
  return (
    <View style={holdingsSummaryStyles.summaryRow}>
      <TextView textType={TextType.Caption}>{label}</TextView>
      <TextView textType={TextType.Body}>{value}</TextView>
    </View>
  );
};

const Triangle = ({variant}: {variant: 'up' | 'down'}) => {
  return variant === 'up' ? (
    <View style={holdingsSummaryStyles.upTriangle} />
  ) : (
    <View style={holdingsSummaryStyles.downTriangle} />
  );
};

export default HoldingsSummary;
