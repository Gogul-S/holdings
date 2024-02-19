import {StyleSheet} from 'react-native';
import {AppDimensions} from '../../theme/dimension';
import {COLOR_PALLETE} from '../../theme/colorPallete';

export const holdingListItemStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: AppDimensions.paddingMedium,
    backgroundColor: COLOR_PALLETE.BACKGROUND_LIGHT,
  },
  quantity: {
    marginTop: AppDimensions.marginSmall,
  },
  pandl: {
    marginTop: AppDimensions.marginSmall,
  },
});
