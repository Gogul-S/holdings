import {StyleSheet, Text, View} from 'react-native';
import {AppDimensions} from '../../theme/dimension';

const ErrorBanner = ({
  title = 'Something Went Wrong',
  description = 'Please try again',
}: {
  title?: string;
  description?: string;
}) => {
  return (
    <View>
      <Text>{title}</Text>
      <Text style={styles.errorText}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  errorText: {
    marginTop: AppDimensions.paddingMedium,
  },
});

export default ErrorBanner;
