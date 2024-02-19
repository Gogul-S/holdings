import React from 'react';
import {ActivityIndicator, SafeAreaView, View} from 'react-native';
import AppBar from '../../components/AppBar';
import ErrorBanner from '../../components/ErrorBanner/errorBanner';
import HoldingList from '../../components/HoldingList';
import useFetchHoldings from '../../query/holdings/useFetchHoldings';
import {COLOR_PALLETE} from '../../theme/colorPallete';
import {holdingListScreenStyles} from './styles';
import HoldingsSummary from '../../components/HoldingsSummary';

const HoldingsScreen = () => {
  const {data, isLoading, error, isError} = useFetchHoldings();

  return (
    <SafeAreaView style={holdingListScreenStyles.safeArea}>
      <AppBar />
      {isLoading && <ActivityIndicator color={COLOR_PALLETE.PRIMARY} />}
      {!isLoading && isError && (
        <ErrorBanner description={error?.toString() as string} />
      )}
      {!isLoading && !isError && (
        <View style={holdingListScreenStyles.dataContainer}>
          <HoldingList holdings={data?.holdings!} />
          <HoldingsSummary
            style={holdingListScreenStyles.summary}
            currentHoldings={data?.totalCurrentValue ?? 0}
            totalInvestment={data?.totalInvestmentValue ?? 0}
            todayPandL={data?.todayPandL ?? 0}
            totalPandL={data?.totalPandL ?? 0}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default HoldingsScreen;
