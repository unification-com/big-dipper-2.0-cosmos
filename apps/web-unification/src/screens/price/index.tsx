import Layout from '@/components/layout';
import PriceHistory from '@/screens/price/components/price_history';
import useStyles from '@/screens/price/styles';

const Price = () => {
  const { classes } = useStyles();

  return (
    <Layout className={classes.root}>
      <PriceHistory className={classes.priceHistory} />
    </Layout>
  );
};

export default Price;
