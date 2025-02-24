import { makeStyles } from 'tss-react/mui';
import { alpha } from '@mui/material/styles';

const benefitStyle = makeStyles({ uniqId: 'benefit' })((theme, _params, classes) => ({
  container: {
    '&.MuiContainer-root': {
      [theme.breakpoints.down('lg')]: {
        padding: 0
      }
    }
  },
  decoWrap: {
    position: 'relative',
  },
  deco: {
    position: 'absolute',
    left: 0,
    top: -20,
    width: '100%',
    height: '100%',
    [theme.breakpoints.down('md')]: {
      display: 'none'
    },
    '& > div': {
      position: 'absolute',
    }
  },
  orbit: {
    width: 700,
    height: 700,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inner: {
    width: 500,
    height: 500,
    borderRadius: '50%',
    '& svg': {
      fill: 'none',
    }
  },
  lineRound: {
    position: 'absolute',
    transformOrigin: 'top center',
    width: 270,
    height: 90,
  },
  lineRoundBig: {
    position: 'absolute',
    transformOrigin: 'top center',
    width: 500,
    height: 150,
    [theme.breakpoints.down('lg')]: {
      display: 'none'
    }
  },
  borderPrimary: {
    display: theme.direction === 'rtl' ? 'none' : 'block',
    right: -150,
    top: 0,
    border: `1px solid ${alpha(theme.palette.primary.main, 0.4)}`,
    [`& .${classes.lineRound}`]: {
      stroke: theme.palette.primary.main,
      top: 45,
      left: 0,
      transform: 'rotate(-50deg)'
    },
    [`& .${classes.lineRoundBig}`]: {
      stroke: theme.palette.secondary.main,
      bottom: -40,
      left: 90,
      transform: 'rotate(25deg)'
    }
  },
  borderSecondary: {
    display: theme.direction === 'rtl' ? 'none' : 'block',
    left: -150,
    top: 0,
    border: `1px solid ${alpha(theme.palette.secondary.main, 0.4)}`,
    [`& .${classes.lineRound}`]: {
      stroke: theme.palette.secondary.main,
      top: 45,
      right: 0,
      transform: 'rotate(20deg)'
    },
    [`& .${classes.lineRoundBig}`]: {
      stroke: theme.palette.primary.main,
      bottom: -20,
      right: 0,
      transform: 'rotate(-1deg)'
    }
  },
  root: {
    position: 'relative',
    overflow: 'hidden',
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(5),
    },
    [theme.breakpoints.up('md')]: {
      paddingBottom: theme.spacing(20),
    }
  },
  person: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center'
  },
  background: {
    borderRadius: '50%',
    width: 250,
    height: 250,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    [theme.breakpoints.down('sm')]: {
      width: 180,
      height: 180,
    },
    '& span': {
      background: theme.palette.common.black,
      opacity: 0.3,
      filter: 'blur(20px)',
      height: '100%',
      width: '50%',
      display: 'block',
      position: 'absolute',
      left: '20%',
    },
    [`&.${classes.bgPrimary}`]: {
      background: theme.palette.primary.main,
    },
    [`&.${classes.bgSecondary}`]: {
      background: theme.palette.secondary.main,
    },
  },
  img: {
    borderRadius: 250,
    overflow: 'hidden',
    display: 'block',
    zIndex: 1,
    position: 'relative',
    [theme.breakpoints.up('sm')]: {
      width: 250,
      maxHeight: 300,
    },
    [theme.breakpoints.down('sm')]: {
      height: 200,
      borderRadius: 200,
    },
    '& img': {
      display: 'block',
      maxWidth: '100%',
      height: '100%',
      margin: '0 auto'
    }
  },
  list: {
    padding: theme.spacing(0, 2),
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center !important'
    },
    '& li': {
      '& > div': {
        fontSize: 36
      },
      listStyle: 'none',
      marginBottom: theme.spacing(5)
    },
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default benefitStyle;
