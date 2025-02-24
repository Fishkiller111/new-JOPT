import { makeStyles } from 'tss-react/mui';

const parallaxStyles = makeStyles({ uniqId: 'parallax' })(theme => ({
  parallaxWrap: {
    position: 'absolute',
    width: '100%',
    height: '120%',
    overflow: 'hidden',
    left: 0,
    top: 0,
    zIndex: 0,
    [theme.breakpoints.down('lg')]: {
      display: 'none'
    },
  },
  innerParallax: {
    height: 2500,
    width: '50%',
    position: 'absolute',
    display: 'block',
    filter: 'blur(20px)',
    opacity: theme.palette.mode === 'dark' ? 0.5 : 0.25,
    '& img': {
      height: 'auto',
      margin: 0,
      width: 'auto',
      display: 'block',
    },
  },
  left: {
    top: 100,
    left: -100,
    '& img': {
      transform: 'rotate(70deg) scale(1.5)',
      transformOrigin: 'center center',
    }
  },
  right: {
    top: 100,
    right: -500,
    '& img': {
      transform: 'rotate(30deg) scale(-1.5)',
      transformOrigin: 'center center',
    }
  },
  top: {
    top: 600,
    right: -400,
    '& img': {
      transform: 'rotate(-280deg) scale(1.5)',
      transformOrigin: 'center center',
    }
  },
  bottom: {
    top: 1150,
    left: -150,
    '& img': {
      transform: 'rotate(100deg) scale(1.5)',
      transformOrigin: 'center center',
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default parallaxStyles;
