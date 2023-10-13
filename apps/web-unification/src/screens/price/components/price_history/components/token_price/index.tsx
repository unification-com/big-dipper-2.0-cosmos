import { usePrice } from '@/screens/price/components/price_history/components/token_price/hooks';
import useStyles from '@/screens/price/components/price_history/components/token_price/styles';
import type { TokenPriceType } from '@/screens/price/components/price_history/types';
import Typography from '@mui/material/Typography';
import useAppTranslation from '@/hooks/useAppTranslation';
import { FC } from 'react';

const TokenPrice: FC<{ items: TokenPriceType[] }> = (props) => {
  const { classes, theme } = useStyles();
  const { t } = useAppTranslation('price');
  const { chartRef } = usePrice(props.items, theme);

  return (
    <div>
      <Typography variant="h2">Price History (~48h)</Typography>
      <div ref={chartRef} className={classes.chart} />
    </div>
  );
};

export default TokenPrice;
