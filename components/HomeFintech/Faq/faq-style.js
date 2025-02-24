import { makeStyles } from 'tss-react/mui';
import { alpha } from '@mui/material/styles';
import gradient from 'theme/gradient';

const faqStyles = makeStyles({ uniqId: 'faq' })((theme, _params, classes) => ({
  root: {
    position: 'relative',
    overflow: 'hidden',
    [theme.breakpoints.between('sm', 'lg')]: {
      marginTop: theme.spacing(15)
    },
  },
  content: {
    [`& .${classes.icon}`]: {
      position: 'absolute',
      top: theme.spacing(2.5),
      right: theme.spacing(1)
    }
  },
  photo: {
    position: 'relative',
    margin: theme.spacing(6),
    overflow: 'hidden',
    width: 540,
    height: 516,
    left: -30,
    borderRadius: 230,
    transform: 'scaleX(-1)',
    [theme.breakpoints.up('lg')]: {
      marginTop: -110,
    },
    [theme.breakpoints.down('lg')]: {
      left: -80
    },
    '& img': {
      display: 'block',
      width: '90%'
    }
  },
  accordion: {
    position: 'relative',
    zIndex: 1,
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(0, 5),
    },
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(5),
    }
  },
  item: {
    marginBottom: theme.spacing(3),
  },
  paper: {
    borderRadius: `${theme.rounded.medium} !important`,
    background: alpha(theme.palette.background.paper, 0.7),
    backdropFilter: 'saturate(180%) blur(20px)',
    overflow: 'hidden',
  },
  heading: {
    fontWeight: theme.typography.fontWeightMedium,
    padding: theme.spacing(2, 4, 2, 0),
    fontSize: 24,
    [theme.breakpoints.down('sm')]: {
      fontSize: 16,
    }
  },
  expanded: {
    background: theme.palette.primary.main,
    [`& .${classes.heading}`]: {
      color: theme.palette.common.white,
      paddingTop: 0,
      paddingBottom: 0
    },
    [`& .${classes.icon}`]: {
      color: theme.palette.common.white,
      transform: 'rotate(180deg)'
    }
  },
  detail: {
    background: theme.palette.primary.main,
    '& p': {
      color: theme.palette.common.white,
      [theme.breakpoints.up('sm')]: {
        fontSize: 24
      }
    }
  },
  icon: {
    color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.main
  },
  btn: {
    position: 'absolute',
    bottom: 0,
    textAlign: 'center',
    left: theme.spacing(10),
    '& button, a': {
      marginBottom: 0,
    }
  },
  bg: {
    zIndex: 0,
    top: 0,
    left: -30,
    position: 'absolute',
    height: 715,
    width: 1320,
    overflow: 'hidden',
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  decoMask: {
    position: 'absolute',
    height: 715,
    width: 1320,
    top: 0,
    left: 0,
    zIndex: 2,
    '& svg': {
      width: '100%',
      height: '100%',
      position: 'absolute',
      left: 0,
      top: 0,
    },
    '&:before': {
      content: '""',
      background: gradient(theme).double.main,
      opacity: 0.5,
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
    },
    [`& .${classes.main}`]: {
      fill: theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.background.paper
    },
    [`& .${classes.darken}`]: {
      fill: theme.palette.mode === 'dark' ? alpha(theme.palette.common.black, 0.5) : theme.palette.background.paper
    }
  },
  decoLine: {
    position: 'absolute',
    height: 655,
    width: 1320,
    top: 0,
    left: 0,
    zIndex: 2,
    opacity: 0.5,
    '& svg': {
      width: '100%',
      height: '100%',
      position: 'absolute',
      left: 10,
      top: 20,
      stroke: theme.palette.secondary.main
    },
  },
  wrap: {
    position: 'relative'
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default faqStyles;
