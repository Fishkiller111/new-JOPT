import { makeStyles } from 'tss-react/mui';
import { alpha } from '@mui/material/styles';
import gradient from 'theme/gradient';

const iconStyles = makeStyles({ uniqId: 'icon' })((theme) => ({
  iconCard: {
    position: 'relative',
    textAlign: 'center',
    padding: 2,
    overflow: 'hidden',
    width: 180,
    height: 180,
    borderRadius: theme.rounded.big,
    background: gradient(theme).double.main,
    boxShadow: 'none',
    [theme.breakpoints.down('sm')]: {
      width: 90,
      height: 90,
    }
  },
  icon: {
    fontSize: 160,
    height: '100%',
    background: alpha(theme.palette.background.paper, 0.75),
    textAlign: 'center',
    borderRadius: theme.rounded.big,
    [theme.breakpoints.down('sm')]: {
      fontSize: 80,
    },
    '& > div': {
      position: 'relative',
      left: -20,
      top: -40,
      [theme.breakpoints.down('sm')]: {
        left: -8,
        top: -20
      }
    }
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default iconStyles;
