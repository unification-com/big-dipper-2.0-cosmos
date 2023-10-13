import { usePrice } from '@/screens/price/components/price_history/components/token_price/hooks';
import useStyles from '@/screens/price/components/price_history/components/token_price/styles';
import type { TokenPriceType } from '@/screens/price/components/price_history/types';
import Typography from '@mui/material/Typography';
import useAppTranslation from '@/hooks/useAppTranslation';
import { FC } from 'react';
import numeral from 'numeral';
import { useDataBlocks } from '@/screens/home/components/data_blocks/hooks';

const TokenPrice: FC<{ items: TokenPriceType[] }> = (props) => {
  const { classes, theme } = useStyles();
  const { t } = useAppTranslation('price');
  const { chartRef } = usePrice(props.items, theme);
  const { state } = useDataBlocks();

  const currentPrice = state.price !== null ? `$${numeral(state.price).format('0.000')}` : 'N/A';

  return (
    <div>
      <Typography variant="h2">
        {t('priceHistory')} ({t('currentPrice')}: {currentPrice})
      </Typography>
      <div ref={chartRef} className={classes.chart} />
    </div>
  );
};

export default TokenPrice;
