import React from 'react';
import {ActivityIndicator, SafeAreaView} from 'react-native';
import AppBar from '../../components/AppBar';
import ErrorBanner from '../../components/ErrorBanner/errorBanner';
import HoldingList from '../../components/HoldingList';
import useFetchHoldings from '../../query/holdings/useFetchHoldings';
import {COLOR_PALLETE} from '../../theme/colorPallete';
import {holdingListScreenStyles} from './styles';

const HoldingsScreen = () => {
  const {data, isLoading, error, isError} = useFetchHoldings();

  return (
    <SafeAreaView style={holdingListScreenStyles.safeArea}>
      <AppBar />
      {isLoading && <ActivityIndicator color={COLOR_PALLETE.PRIMARY} />}
      {!isLoading && isError && (
        <ErrorBanner description={error?.toString() as string} />
      )}
      {!isLoading && !isError && <HoldingList holdings={data?.holdings!} />}
    </SafeAreaView>
  );
};

export default HoldingsScreen;
