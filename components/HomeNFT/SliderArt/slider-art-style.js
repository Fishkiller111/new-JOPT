import { makeStyles } from 'tss-react/mui';
import gradient from 'theme/gradient';

const sliderArtStyles = makeStyles({ uniqId: 'slider_art' })((theme, _params, classes) => ({
  deco: {
    position: 'relative',
    [theme.breakpoints.down('lg')]: {
      display: 'none'
    },
    '& img': {
      zIndex: 5,
      position: 'relative',
      width: '100%',
    },
  },
  content: {
    position: 'relative',
    zIndex: 10,
  },
  figure: {
    width: 300,
    display: 'flex',
    alignItems: 'center',
    transition: 'all 0.3s ease',
    direction: 'ltr',
    position: 'relative',
  },
  inner: {
    height: 600,
    top: 0,
    left: 0,
    width: '50%',
    position: 'absolute',
    display: 'block',
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
    width: 700,
    height: 600,
    opacity: 0.75,
    display: theme.direction === 'rtl' ? 'none' : 'block',
    position: 'relative',
    '& > div': {
      borderRadius: 500,
      position: 'absolute',
      transition: 'all 1.5s cubic-bezier(.11,.99,.81,1.13)'
    }
  },
  fade: {
    opacity: 0.5,
    [`& .${classes.content}`]: {
      zIndex: 0,
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default sliderArtStyles;
