import { CSSObject } from '@emotion/react';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  root: {
    ...(theme.mixins.layout as CSSObject),
    '& a': {
      color: theme.palette.custom.fonts.highlight,
    },
    display: 'grid',
    gridTemplateRows: 'auto auto 1fr',
    gridTemplateColumns: '1fr',
    gap: theme.spacing(1),
    [theme.breakpoints.up('lg')]: {
      gap: theme.spacing(2),
    },
  },
  priceHistory: {
    minHeight: '400px',
    height: '40vh',
    [theme.breakpoints.up('lg')]: {
      height: '100%',
      minHeight: '65vh',
    },
  },
}));

export default useStyles;
