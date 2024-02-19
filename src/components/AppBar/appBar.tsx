import {StyleSheet, View} from 'react-native';
import TextView from '../TextView';
import {TextType} from '../../theme/typography';
import {AppDimensions} from '../../theme/dimension';
import {COLOR_PALLETE, Colors} from '../../theme/colorPallete';

const AppBar = () => {
  return (
    <View style={styles.appBar}>
      <TextView textType={TextType.Title} color={Colors.Secondary}>
        Upstox
      </TextView>
    </View>
  );
};

const styles = StyleSheet.create({
  appBar: {
    padding: AppDimensions.paddingMedium,
    backgroundColor: COLOR_PALLETE.PRIMARY,
  },
});

export default AppBar;
