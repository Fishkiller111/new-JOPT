import { makeStyles } from 'tss-react/mui';

const parallaxStyles = makeStyles({ uniqId: 'parallax' })((theme, _params, classes) => ({
  parallaxWrap: {
    position: 'absolute',
    width: '100%',
    height: '100%',
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
    opacity: theme.palette.mode === 'dark' ? 1 : 0.5,
  },
  obj: {
    position: 'relative'
  },
  small: {
    filter: 'blur(5px) drop-shadow(20px -25px 10px rgba(0, 0, 0, 0.3))'
  },
  left: {
    top: -50,
    [`& .${classes.big}`]: {
      width: 400,
      left: -250,
      height: 400,
    },
    [`& .${classes.small}`]: {
      width: 123,
      height: 160,
      top: -200,
      left: -50
    },
  },
  top: {
    top: 600,
    right: -400,
    [`& .${classes.big}`]: {
      width: 314,
      height: 314,
      left: 100,
    },
    [`& .${classes.small}`]: {
      width: 123,
      height: 160,
      top: -250,
      left: 80
    },
  },
  bottom: {
    top: 1450,
    left: -150,
    [`& .${classes.big}`]: {
      width: 400,
      left: -140,
      height: 400,
    },
    [`& .${classes.small}`]: {
      width: 123,
      height: 160,
      top: -200,
      left: 160
    },
  },
  end: {
    top: 600,
    right: -400,
    [`& .${classes.big}`]: {
      width: 314,
      height: 314,
      left: 100,
    },
    [`& .${classes.small}`]: {
      width: 123,
      height: 160,
      top: -250,
      left: 80
    },
  },
  start: {
    top: 1050,
    left: -150,
    [`& .${classes.big}`]: {
      width: 300,
      left: -30,
      height: 300,
      transform: 'rotate(-45deg)'
    },
    [`& .${classes.small}`]: {
      width: 123,
      height: 160,
      top: -200,
      left: 220,
      transform: 'rotate(-60deg)'
    },
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default parallaxStyles;
