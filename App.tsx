import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import HoldingsScreen from './src/screens/holdingsScreen/holdingsScreen';

const queryClient = new QueryClient();

function App(): React.JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <HoldingsScreen />
    </QueryClientProvider>
  );
}

export default App;
