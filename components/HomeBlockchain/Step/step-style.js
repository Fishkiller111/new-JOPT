import { makeStyles } from 'tss-react/mui';
import gradient from 'theme/gradient';

const featureStyles = makeStyles({ uniqId: 'feature' })((theme, _params, classes) => ({
  item: {
    position: 'relative',
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(0, 6)
    },
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      margin: theme.spacing(3, 0)
    }
  },
  icon: {
    position: 'relative',
    display: 'inline-block',
    [theme.breakpoints.down('sm')]: {
      transform: 'scale(0.75)',
      marginLeft: theme.spacing(5),
      marginTop: theme.spacing(2),
    },
    '& > div': {
      position: 'absolute',
      textAlign: 'center',
      zIndex: 2,
    },
    [`& .${classes.left}`]: {
      fontSize: 64,
      top: -80,
      left: -60
    },
    [`& .${classes.right}`]: {
      fontSize: 48,
      top: 10,
      right: -80
    },
    [`& .${classes.center}`]: {
      fontSize: 128,
      top: -80,
      left: -60
    },
  },
  glow: {
    overflow: 'hidden',
    padding: theme.spacing(2),
    position: 'relative',
    '& h6': {
      textTransform: 'capitalize'
    },
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(12, 3, 1),
    },
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing(10),
    },
    '&:before': {
      content: '""',
      filter: 'blur(20px)',
      opacity: 0.25,
      width: '80%',
      height: 190,
      borderRadius: '50%',
      position: 'absolute',
      top: '-70%',
      left: '10%',
      [theme.breakpoints.down('sm')]: {
        display: 'none'
      },
    },
    [`&.${classes.primary}`]: {
      '&:before': {
        background: theme.palette.primary.main
      }
    },
    [`&.${classes.secondary}`]: {
      '&:before': {
        background: theme.palette.secondary.main
      }
    },
    [`&.${classes.accent}`]: {
      '&:before': {
        background: theme.palette.accent.main
      }
    },
    [`&.${classes.purple}`]: {
      '&:before': {
        background: '#C442E5'
      }
    }
  },
  step: {
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(15),
      textAlign: 'center',
    },
    '& h6': {
      fontWeight: theme.typography.fontWeightBold,
    },
    [`& .${classes.item}`]: {
      opacity: 1
    }
  },
  divider: {
    position: 'absolute',
    top: '50%',
    right: 40,
    overflow: 'visible',
    border: 'none',
    [theme.breakpoints.down('md')]: {
      display: 'none'
    },
    [`&.${classes.primary}`]: {
      '&:after': {
        background: gradient(theme).primary.light
      },
      '&:before': {
        background: gradient(theme).primary.light
      }
    },
    [`&.${classes.secondary}`]: {
      '&:after': {
        background: gradient(theme).secondary.light,
      },
      '&:before': {
        background: gradient(theme).secondary.light
      }
    },
    '&:after': {
      content: '""',
      width: 70,
      height: 12,
      borderRadius: 12,
      position: 'absolute',
      left: 40,
    },
    '&:before': {
      content: '""',
      width: 12,
      height: 12,
      borderRadius: '50%',
      position: 'absolute',
      left: 20,
    },
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default featureStyles;
