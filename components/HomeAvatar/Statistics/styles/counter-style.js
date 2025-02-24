import { makeStyles } from 'tss-react/mui';
import { alpha } from '@mui/material/styles';

const counterStyles = makeStyles({ uniqId: 'counter_landing' })((theme) => ({
  counterBg: {
    position: 'relative',
    zIndex: 1,
    borderRadius: theme.rounded.big,
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(3, 3, 8),
      background: alpha(theme.palette.primary.dark, 0.5),
      color: theme.palette.common.white,
      backdropFilter: 'saturate(180%) blur(10px)',
      width: 960
    },
    [theme.breakpoints.down('md')]: {
      '& > div': {
        marginTop: theme.spacing(-10),
      }
    },
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(5, 0),
    },
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default counterStyles;
