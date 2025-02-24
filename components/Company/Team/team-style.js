import { makeStyles } from 'tss-react/mui';
import { darken } from '@mui/material/styles';
import imgAPI from 'public/images/imgAPI';
import gradient from 'theme/gradient';

const useStyles = makeStyles({ uniqId: 'team' })((theme, _params, classes) => ({
  root: {
    position: 'relative',
    zIndex: 5,
  },
  scrollBg: {
    margin: 0,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    '& li': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundAttachment: 'fixed',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      opacity: 0,
      filter: 'blur(5px)',
      transition: 'all 0.5s ease-out',
      '&[class*="active"]': {
        opacity: 0.4
      }
    }
  },
  bgBig: {
    backgroundImage: `url(${imgAPI.photosL[15]})`
  },
  bgMedium: {
    backgroundImage: `url(${imgAPI.photosL[16]})`
  },
  bgSmall: {
    backgroundImage: `url(${imgAPI.photosL[55]})`
  },
  background: {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '60px 60px 0 0',
    [theme.breakpoints.down('sm')]: {
      borderRadius: '40px 40px 0 0',
    },
    [`&.${classes.images}`]: {
      paddingTop: theme.spacing(15),
      paddingBottom: theme.spacing(20),
      [theme.breakpoints.up('sm')]: {
        paddingBottom: theme.spacing(30),
      },
      [theme.breakpoints.down('sm')]: {
        paddingTop: theme.spacing(10),
      },
      '&:after': {
        content: '""',
        height: 160,
        width: '100%',
        position: 'absolute',
        bottom: -80,
        left: 0,
        background: theme.palette.mode === 'dark' ? darken(theme.palette.primary.dark, 0.5) : theme.palette.background.paper,
        borderRadius: '60px 60px 0 0',
        [theme.breakpoints.down('sm')]: {
          borderRadius: '40px 40px 0 0',
        },
      }
    },
    [`&.${classes.parallax}`]: {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(10),
    },
  },
  container: {
    position: 'relative',
    zIndex: 1,
  },
  bgGradient: {
    background: theme.palette.mode === 'dark' ? gradient(theme).double.main : gradient(theme).triple.light,
    opacity: theme.palette.mode === 'dark' ? 0.5 : 0.75,
    position: 'absolute',
    overflow: 'hidden',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  wrap: {
    position: 'relative',
    zIndex: 2
  },
  section: {
    marginTop: theme.spacing(5)
  },
  // Parallax Background
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
    height: 3000,
    position: 'absolute',
    display: 'block',
  },
  full: {
    top: 700,
    width: '100%',
    right: 0,
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
    [`&.${classes.big}`]: {
      width: 350,
      height: 350,
      right: -50,
      top: 200,
    }
  },
  gradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  dots: {
    position: 'relative',
    left: 20,
    top: -100,
    height: 500,
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
    top: 0,
    fill: theme.palette.text.disabled,
    width: 845,
    height: 800,
    opacity: 0.3,
    left: 0
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
