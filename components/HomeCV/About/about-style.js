import { makeStyles } from 'tss-react/mui';
import gradient from 'theme/gradient';

const aboutStyles = makeStyles({ uniqId: 'about_landing' })((theme) => ({
  about: {
    position: 'relative',
    display: 'block',
    [theme.breakpoints.up('lg')]: {
      paddingBottom: theme.spacing(8),
    }
  },
  lower: {
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(10)
    },
    [theme.breakpoints.down('md')]: {
      marginLeft: theme.spacing(5)
    },
  },
  higher: {
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(-3)
    }
  },
  iconProfile: {
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 0,
      paddingRight: 0
    },
  },
  nameDeco: {
    margin: 0,
    padding: 0,
    transform: 'rotate(-90deg)',
    transformOrigin: 'top left',
    position: 'absolute',
    letterSpacing: '5px',
    fontWeight: theme.typography.fontWeightLight,
    textTransform: 'uppercase',
    background: gradient(theme).double.main,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    color: theme.palette.secondary.main,
    top: theme.spacing(110),
    left: theme.spacing(-3),
    fontSize: 100,
    opacity: 0.2,
    zIndex: 20,
  },
  icon: {
    textAlign: 'center',
    '& i': {
      fontSize: 100,
      display: 'block'
    },
    '& p': {
      fontSize: 14,
      fontWeight: theme.typography.fontWeightMedium,
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default aboutStyles;
