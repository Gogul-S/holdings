import {StyleSheet} from 'react-native';
import {AppDimensions} from '../../theme/dimension';
import {COLOR_PALLETE} from '../../theme/colorPallete';

export const holdingsSummaryStyles = StyleSheet.create({
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: AppDimensions.paddingSmall,
  },
  container: {
    padding: AppDimensions.paddingMedium,
  },
  sheet: {
    backgroundColor: COLOR_PALLETE.BACKGROUND_LIGHT,
  },

  spacer: {
    height: AppDimensions.paddingMedium,
  },
  upTriangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderBottomWidth: 20,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: COLOR_PALLETE.PRIMARY,
  },
  downTriangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderTopWidth: 20,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: COLOR_PALLETE.PRIMARY,
  },
  expandCta: {alignItems: 'center'},
});
