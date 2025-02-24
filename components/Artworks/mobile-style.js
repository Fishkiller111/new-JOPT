import { makeStyles } from 'tss-react/mui';

const mobileStyles = makeStyles({ uniqId: 'mobile_art' })((theme) => ({
  root: {
    perspective: 1000,
    display: 'block',
    position: 'relative',
  },
  phone: {
    width: 250,
    height: 470,
    position: 'relative',
    transform: 'rotateY(-42deg) rotateX(27deg) rotateZ(-2deg)',
    borderRadius: theme.rounded.big,
    background: `linear-gradient(0deg, ${theme.palette.secondary.main} -20%, ${theme.palette.secondary.light} -10%, ${theme.palette.primary.dark} 50%, ${theme.palette.primary.main} 55%, ${theme.palette.accent.light} 80%, ${theme.palette.secondary.main} 120%)`,
  },
  screen: {
    width: 250,
    height: 480,
    borderRadius: theme.rounded.big,
    overflow: 'hidden',
    position: 'relative',
    left: theme.direction === 'rtl' ? 'auto' : -8,
    right: theme.direction === 'rtl' ? -8 : 'auto',
    top: -8,
    '& img': {
      width: '100%',
    }
  },
  reflect: {
    position: 'absolute',
    bottom: '-109%',
    left: '-64%',
    display: theme.direction === 'rtl' ? 'none' : 'block',
    opacity: theme.palette.mode === 'dark' ? 0.8 : 0.2,
    transform: 'rotateY(-42deg) rotateX(27deg) rotateZ(-2deg) scale(1.1, -1.1)',
    '&:before': {
      content: '""',
      position: 'absolute',
      width: '120%',
      height: '100%',
      bottom: -20,
      left: -20,
      zIndex: 1,
      background: `linear-gradient(to bottom, ${theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.background.paper} 85%, rgba(0, 0, 0, 0) 110%)`
    },
    '&:after': {
      content: '""',
      position: 'absolute',
      width: '120%',
      height: '100%',
      bottom: -20,
      left: -20,
      zIndex: 1,
      opacity: 0.5,
      background: `linear-gradient(to bottom, ${theme.palette.mode === 'dark' ? theme.palette.common.black : theme.palette.background.paper} 85%, rgba(0, 0, 0, 0) 130%)`
    },
  },
  widget: {
    transform: 'rotateY(-42deg) rotateX(27deg) rotateZ(-2deg)',
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    '& span': {
      zIndex: 2,
      position: 'absolute',
      borderRadius: theme.rounded.medium,
      overflow: 'hidden',
      boxShadow: '0 10px 20px 5px rgba(0, 0, 0, 0.25)',
      '& img': {
        width: '100%',
      }
    }
  },
  top: {
    width: 220,
    height: 85,
    top: -35,
    left: -190
  },
  left: {
    width: 160,
    height: 80,
    bottom: 20,
    left: -40,
    [theme.breakpoints.up('sm')]: {
      left: -80,
    }
  },
  right: {
    width: 195,
    height: 100,
    top: 250,
    right: -90,
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default mobileStyles;
