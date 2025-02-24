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
  avatar: {
    borderRadius: theme.rounded.big,
    width: 120,
    height: 120,
    margin: '0 auto',
    [theme.breakpoints.down('lg')]: {
      width: '100%',
      height: 100,
    }
  },
  lower: {
    [theme.breakpoints.up('sm')]: {
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
    opacity: 0.25,
    zIndex: 20,
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default aboutStyles;
