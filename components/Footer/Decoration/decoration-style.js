import { makeStyles } from 'tss-react/mui';
import { alpha } from '@mui/material/styles';
import gradient from 'theme/gradient';

const liquid = '/images/ai/parallax.png';
const stone = '/images/blockchain/parallax.png';

const decoStyles = makeStyles({ uniqId: 'deco_footer' })((theme, _params, classes) => ({
  liquid: {
    overflow: 'hidden',
    position: 'relative',
    [theme.breakpoints.up('md')]: {
      paddingBottom: theme.spacing(10),
    },
    '&:after': {
      content: '""',
      width: 384,
      height: 621,
      background: `url(${liquid}) transparent no-repeat`,
      backgroundPosition: 'center center',
      backgroundSize: '100%',
      position: 'absolute',
      right: 160,
      transform: 'rotate(270deg) scale(-1, 1)',
      filter: 'blur(10px)',
      opacity: '0.2',
      top: 0,
      [theme.breakpoints.down('md')]: {
        top: 200
      }
    },
    '&:before': {
      content: '""',
      width: 384,
      height: 621,
      background: `url(${liquid}) transparent no-repeat`,
      backgroundPosition: 'center center',
      backgroundSize: '100%',
      position: 'absolute',
      left: -50,
      transform: 'rotate(90deg) scale(-1, -1)',
      filter: 'blur(10px)',
      opacity: '0.2',
      top: 80,
      [theme.breakpoints.down('md')]: {
        top: 100
      }
    },
  },
  stone: {
    paddingBottom: theme.spacing(5),
    position: 'relative',
    overflow: 'hidden',
    '&:after': {
      content: '""',
      width: 384,
      height: 621,
      background: `url(${stone}) transparent no-repeat`,
      backgroundPosition: 'center center',
      backgroundSize: '100%',
      position: 'absolute',
      top: 180,
      right: 0,
      transform: 'rotate(160deg) scale(-1, -1)',
      filter: 'blur(5px)',
      opacity: '0.5',
      [theme.breakpoints.down('md')]: {
        top: 500
      }
    },
    '&:before': {
      content: '""',
      width: 384,
      height: 621,
      background: `url(${stone}) transparent no-repeat`,
      backgroundPosition: 'center center',
      backgroundSize: '100%',
      position: 'absolute',
      top: 90,
      left: 190,
      transform: 'rotate(-90deg) scale(-1, 1)',
      filter: 'blur(5px)',
      opacity: '0.5',
      [theme.breakpoints.down('md')]: {
        top: 300
      }
    },
  },
  line: {
    position: 'relative',
    [`& .${classes.deco}`]: {
      top: -400,
      [theme.breakpoints.up('sm')]: {
        top: -270,
      }
    }
  },
  deco: {
    overflow: 'hidden',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    [theme.breakpoints.up('xl')]: {
      display: 'none'
    },
    '& svg': {
      width: 1573,
      height: 266,
      position: 'absolute'
    },
    [`& .${classes.primary}`]: {
      stroke: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.main,
      top: 0,
      left: 0,
    },
    [`& .${classes.secondary}`]: {
      stroke: theme.palette.secondary.main,
      top: 0,
      left: -200,
    },
  },
  wave: {
    position: 'relative',
    paddingTop: theme.spacing(30),
    overflow: 'hidden',
    [theme.breakpoints.down('md')]: {
      paddingTop: theme.spacing(10),
    },
    [`& .${classes.deco}`]: {
      top: -80,
      zIndex: 2,
      opacity: 0.5
    },
    '&:before': {
      content: '""',
      zIndex: 0,
      width: '100%',
      height: '100%',
      bottom: 0,
      left: 0,
      opacity: 0.4,
      display: 'block',
      position: 'absolute',
      background: theme.palette.mode === 'dark' ? gradient(theme).triple.dark : gradient(theme).triple.light
    }
  },
  decoMask: {
    position: 'absolute',
    height: 300,
    top: 0,
    left: 0,
    zIndex: 2,
    width: 1280,
    [theme.breakpoints.up('xl')]: {
      transform: 'scale(1.5)',
      top: 10
    },
    '& svg': {
      width: '100%',
      height: '100%',
      position: 'absolute',
      left: 0,
      top: 0,
    },
    [`& .${classes.main}`]: {
      fill: theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.background.paper
    },
    [`& .${classes.darken}`]: {
      fill: theme.palette.mode === 'dark' ? alpha(theme.palette.common.black, 0.5) : theme.palette.background.paper
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
  fogs: {
    position: 'relative',
    padding: theme.spacing(15, 0, 5),
    [theme.breakpoints.down('md')]: {
      paddingTop: theme.spacing(10)
    },
    [`& .${classes.fog}`]: {
      position: 'absolute',
      filter: 'blur(50px)',
      opacity: 0.5,
      top: 0,
      left: 0,
      width: '100%',
      height: 400,
      [theme.breakpoints.up('sm')]: {
        overflow: 'hidden',
      },
    },
    [`& .${classes.start}`]: {
      bottom: 0,
      position: 'absolute',
      overflow: 'hidden',
      width: 300,
      left: -200,
      height: '100%',
      '& > div': {
        position: 'absolute',
      }
    },
    [`& .${classes.end}`]: {
      bottom: 0,
      position: 'absolute',
      overflow: 'hidden',
      right: 0,
      width: 300,
      height: '100%',
      '& > div': {
        position: 'absolute',
      }
    }
  }
}));

export default decoStyles;
