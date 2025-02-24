import { makeStyles } from 'tss-react/mui';

const parallaxStyles = makeStyles({ uniqId: 'parallax' })(theme => ({
  parallaxWrap: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    left: 0,
    top: 0,
    [theme.breakpoints.down('lg')]: {
      display: 'none'
    },
  },
  innerParallax: {
    height: 2500,
    width: '50%',
    position: 'absolute',
    display: 'block',
    filter: 'blur(5px)',
    opacity: 0.5,
    '& img': {
      height: 'auto',
      margin: 0,
      width: 300,
      display: 'block',
    },
  },
  left: {
    top: 300,
    left: -100,
    '& img': {
      transform: 'rotate(70deg) scale(1)',
      transformOrigin: 'center center',
    }
  },
  right: {
    top: 100,
    right: -600,
    '& img': {
      transform: 'rotate(-30deg) scale(1)',
      transformOrigin: 'center center',
    }
  },
  top: {
    top: -50,
    right: -530,
    zIndex: 1,
    '& img': {
      transform: 'rotate(-20deg) scaleX(-1)',
      transformOrigin: 'center center',
    }
  },
  bottom: {
    top: 1650,
    left: -250,
    zIndex: 1,
    '& img': {
      transform: 'rotate(30deg) scaleX(-1)',
      transformOrigin: 'center center',
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default parallaxStyles;
