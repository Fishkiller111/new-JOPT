import { makeStyles } from 'tss-react/mui';
import gradient from 'theme/gradient';

const parallaxStyles = makeStyles({ uniqId: 'parallax' })((theme, _params, classes) => ({
  parallaxWrap: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0,
    [theme.breakpoints.down('lg')]: {
      display: 'none'
    },
  },
  innerParallax: {
    height: 2000,
    position: 'absolute',
    display: 'block',
  },
  right: {
    top: 320,
    right: 0,
    width: '50%',
  },
  full: {
    top: -60,
    width: '100%',
    right: 100,
  },
  big: {
    top: -60,
    width: '100%',
    right: -80,
  },
  gradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  oval: {
    opacity: 0.3,
    position: 'relative',
    display: 'block',
    marginLeft: 'auto',
    maskImage: 'url(/images/decoration/oval.svg)',
    maskRepeat: 'no-repeat',
    maskSize: '100%',
    WebkitMaskImage: 'url(/images/decoration/oval.svg)',
    WebkitMaskRepeat: 'no-repeat',
    WebkitMaskSize: '100%',
    '& span': {
      background: gradient(theme).primary.dark
    },
    [`&.${classes.giga}`]: {
      width: 255,
      height: 255,
      right: 500,
      top: 140,
    },
    [`&.${classes.big}`]: {
      width: 255,
      height: 255,
      right: 500,
      top: 400,
    },
    [`&.${classes.small}`]: {
      width: 205,
      height: 205,
      right: 450,
      top: 100,
    }
  },
  triangle: {
    width: 509,
    height: 668,
    right: 10,
    marginLeft: 'auto',
    top: 0,
    transform: 'scale(0.7)',
    display: 'block',
    position: 'relative',
    maskImage: 'url(/images/decoration/triangle.svg)',
    maskRepeat: 'no-repeat',
    maskSize: '100%',
    WebkitMaskImage: 'url(/images/decoration/triangle.svg)',
    WebkitMaskRepeat: 'no-repeat',
    WebkitMaskSize: '100%',
    '& span': {
      background: gradient(theme).triple.main
    }
  },
  parallaxVertical: {
    width: '100%',
    height: '100%',
    [theme.breakpoints.up('lg')]: {
      transform: 'scale(0.5)',
      transformOrigin: 'top left'
    },
    [theme.breakpoints.up('xl')]: {
      display: 'none'
    },
  },
  parallaxDot: {
    top: -200,
    fill: theme.palette.text.disabled,
    width: 845,
    height: 800,
    opacity: 0.3,
    left: 0
  },
  dots: {
    position: 'relative',
    left: 0,
    top: -400,
    height: 500,
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default parallaxStyles;
