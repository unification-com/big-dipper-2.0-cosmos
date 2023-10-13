import withGetStaticProps from '@/pages/withGetStaticProps';
import Price from '@/screens/price';
import type { NextPage } from 'next';
import nextI18NextConfig from '../../../next-i18next.config';

const PricePage: NextPage = () => <Price />;

export const getStaticProps = withGetStaticProps(nextI18NextConfig, 'params');

export default PricePage;
