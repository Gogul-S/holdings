import {FlatList} from 'react-native';
import {Holding} from '../../types/holdings';
import HoldingListItem from '../HoldingListItem';
import {holdingListStyle} from './styles';

const HoldingList = ({holdings}: {holdings: Holding[]}) => {
  return (
    <FlatList
      style={holdingListStyle.listStyle}
      data={holdings}
      renderItem={({item}) => <HoldingListItem holding={item} />}
      keyExtractor={(item, idx) => `${idx}_${item.symbol}`}
    />
  );
};

export default HoldingList;
