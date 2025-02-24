import { makeStyles } from 'tss-react/mui';

const desktopStyles = makeStyles({ uniqId: 'desktop_art' })((theme) => ({
  root: {
    perspective: 1000,
    display: 'block',
    position: 'relative',
    top: -30,
    [theme.breakpoints.up('sm')]: {
      top: -50,
      left: 60,
    }
  },
  desktop: {
    position: 'relative',
    transform: 'rotateY(42deg) rotateX(45deg) rotateZ(-20deg)',
    borderRadius: theme.rounded.big,
    background: `linear-gradient(0deg, ${theme.palette.secondary.main} -20%, ${theme.palette.secondary.light} -10%, ${theme.palette.primary.dark} 50%, ${theme.palette.primary.main} 55%, ${theme.palette.accent.light} 80%, ${theme.palette.secondary.main} 120%)`,
    width: 600,
    height: 388,
    [theme.breakpoints.down('sm')]: {
      width: 300,
      height: 194
    }
  },
  screen: {
    borderRadius: theme.rounded.big,
    overflow: 'hidden',
    position: 'relative',
    left: 8,
    top: -4,
    width: 590,
    height: 390,
    [theme.breakpoints.down('sm')]: {
      width: 295,
      height: 195
    },
    '& img': {
      width: '100%',
    }
  },
  reflect: {
    position: 'absolute',
    bottom: '-110%',
    left: theme.direction === 'rtl' ? 'auto' : '30%',
    right: theme.direction === 'rtl' ? '30%' : 'auto',
    opacity: theme.palette.mode === 'dark' ? 0.8 : 0.2,
    display: theme.direction === 'rtl' ? 'none' : 'block',
    transform: 'rotateY(40deg) rotateX(-15deg) rotateZ(0deg) scale(1.1, -1.1)',
    '&:before': {
      content: '""',
      position: 'absolute',
      width: '120%',
      height: '100%',
      bottom: 0,
      left: theme.direction === 'rtl' ? 'auto' : -20,
      right: theme.direction === 'rtl' ? -20 : 'auto',
      zIndex: 1,
      background: `linear-gradient(190deg, ${theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.background.paper} 90%, rgba(0, 0, 0, 0) 120%)`
    },
    '&:after': {
      content: '""',
      position: 'absolute',
      width: '120%',
      height: '100%',
      bottom: 0,
      left: theme.direction === 'rtl' ? 'auto' : -20,
      right: theme.direction === 'rtl' ? -20 : 'auto',
      zIndex: 1,
      opacity: 0.5,
      background: `linear-gradient(260deg, ${theme.palette.mode === 'dark' ? theme.palette.common.black : theme.palette.background.paper} 90%, rgba(0, 0, 0, 0) 160%)`
    },
  },
  widget: {
    transform: 'rotateY(42deg) rotateX(45deg) rotateZ(-21deg)',
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
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
    width: 225,
    height: 120,
    top: -30,
    left: theme.direction === 'rtl' ? 'auto' : 50,
    right: theme.direction === 'rtl' ? 50 : 'auto',
  },
  left: {
    width: 130,
    height: 90,
    bottom: 30,
    left: theme.direction === 'rtl' ? 'auto' : -30,
    right: theme.direction === 'rtl' ? -30 : 'auto',
  },
  right: {
    width: 220,
    height: 100,
    bottom: -20,
    right: theme.direction === 'rtl' ? 'auto' : -40,
    left: theme.direction === 'rtl' ? -40 : 'auto',
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default desktopStyles;
