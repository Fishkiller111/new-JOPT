import { makeStyles } from 'tss-react/mui';
import gradient from 'theme/gradient';

const parallaxStyles = makeStyles({ uniqId: 'parallax' })(theme => ({
  parallaxWrap: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0,
    zIndex: 0,
    overflow: 'hidden',
    opacity: theme.palette.mode === 'dark' ? 1 : 0.5,
    [theme.breakpoints.down('lg')]: {
      display: 'none'
    },
  },
  innerParallax: {
    height: 600,
    width: '50%',
    position: 'absolute',
    display: 'block',
    '& img': {
      height: 'auto',
      margin: 0,
      width: 300,
      display: 'block',
    },
  },
  left: {
    top: -50,
    left: 0,
    opacity: 0.75,
  },
  right: {
    top: 200,
    right: 100,
    opacity: 0.9,
  },
  top: {
    top: 250,
    right: 0,
    zIndex: 1,
    opacity: 0.5,
  },
  bottom: {
    top: 800,
    left: 0,
    opacity: 0.5,
    zIndex: 1,
    '& img': {
      transform: 'rotate(30deg) scaleX(-1)',
      transformOrigin: 'center center',
    }
  },
  primaryDark: { background: gradient(theme).primary.dark },
  primaryLight: { background: gradient(theme).primary.light },
  secondaryDark: { background: gradient(theme).secondary.dark },
  secondaryLight: { background: gradient(theme).secondary.light },
  accent: { background: gradient(theme).accent },
  doubleLight: { background: gradient(theme).double.light },
  doubleMain: { background: gradient(theme).double.main },
  doubleDark: { background: gradient(theme).double.dark },
  tripleLight: { background: gradient(theme).triple.light },
  tripleMain: { background: gradient(theme).triple.main },
  tripleDark: { background: gradient(theme).triple.dark },
  fog: {
    filter: 'blur(60px)',
    position: 'relative',
  },
  fogInner: {
    position: 'relative',
    overflow: 'hidden',
    width: 700,
    height: 600,
    '& > div': {
      borderRadius: 500,
      position: 'absolute'
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default parallaxStyles;
