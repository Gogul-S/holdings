import {Text, View} from 'react-native';
import {Holding} from '../../types/holdings';
import TextView from '../TextView';
import {TextType} from '../../theme/typography';
import {holdingListItemStyles} from './styles';
import {formatCurrency} from '../../utils/format_utils';

const HoldingListItem = ({holding}: {holding: Holding}) => {
  return (
    <View style={holdingListItemStyles.container}>
      <View>
        <TextView textType={TextType.Caption2}>{holding.symbol}</TextView>
        <TextView
          style={holdingListItemStyles.quantity}
          textType={TextType.Body}>
          {holding.quantity}
        </TextView>
      </View>
      <View style={{alignItems: 'flex-end'}}>
        <TextView textType={TextType.Body}>
          LTP:{' '}
          <TextView textType={TextType.Body1}>
            {formatCurrency(holding.ltp, 2)}
          </TextView>
        </TextView>
        <TextView style={holdingListItemStyles.pandl} textType={TextType.Body}>
          P/L: {''}
          <TextView textType={TextType.Body1}>
            {formatCurrency(holding.pandl, 2)}
          </TextView>
        </TextView>
      </View>
    </View>
  );
};

export default HoldingListItem;
