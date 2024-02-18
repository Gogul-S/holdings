import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import useFetchHoldings from '../../query/holdings/useFetchHoldings';

const HoldingsScreen = () => {
  const {data, isLoading, error, isError} = useFetchHoldings();

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {!isLoading && <Text>{JSON.stringify(data, null, 2)}</Text>}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HoldingsScreen;
