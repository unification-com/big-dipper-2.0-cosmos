import Box from '@/components/box';
import Loading from '@/components/loading';
import TokenPrice from '@/screens/price/components/price_history/components/token_price';
import { usePriceHistory } from '@/screens/price/components/price_history/hooks';
import { FC } from 'react';

const PriceHistory: FC<ComponentDefault> = (props) => {
  const { state } = usePriceHistory();
  let component = null;
  if (!state.loading) {
    component = <TokenPrice items={state.tokenPriceHistory} />;
  } else {
    component = <Loading />;
  }

  return <Box className={props.className}>{component}</Box>;
};

export default PriceHistory;
