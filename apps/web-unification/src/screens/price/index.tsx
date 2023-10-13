import Layout from '@/components/layout';
import PriceHistory from '@/screens/price/components/price_history';
import useStyles from '@/screens/price/styles';
import useAppTranslation from '@/hooks/useAppTranslation';

const Price = () => {
  const { classes } = useStyles();

  const { t } = useAppTranslation('price');

  return (
    <Layout navTitle={t('title') ?? undefined} className={classes.root}>
      <PriceHistory className={classes.priceHistory} />
    </Layout>
  );
};

export default Price;
