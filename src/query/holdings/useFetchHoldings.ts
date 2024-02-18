import {useQuery} from 'react-query';
import datasources from '../../service';
import {transformHoldings} from '../../utils/holdingsUtils';

const useFetchHoldings = () => {
  return useQuery('holdings', async () => {
    const rawResponse = await datasources.holdings.getNewsList();

    const transformedResponse = transformHoldings(rawResponse);

    return transformedResponse;
  });
};

export default useFetchHoldings;
