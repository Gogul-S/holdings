import {StyleSheet, Text, View} from 'react-native';
import {AppDimensions} from '../../theme/dimension';
import TextView from '../TextView';
import {TextType} from '../../theme/typography';

const ErrorBanner = ({
  title = 'Something Went Wrong',
  description = 'Please try again',
}: {
  title?: string;
  description?: string;
}) => {
  return (
    <View style={styles.container}>
      <TextView textType={TextType.Title}>{title}</TextView>
      <TextView textType={TextType.Body} style={styles.errorText}>
        {description}
      </TextView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  errorText: {
    marginTop: AppDimensions.paddingMedium,
  },
});

export default ErrorBanner;
