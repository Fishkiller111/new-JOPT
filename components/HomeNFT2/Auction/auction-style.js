import { makeStyles } from 'tss-react/mui';
import { darken } from '@mui/material/styles';
import gradient from 'theme/gradient';

const bidStyles = makeStyles({ uniqId: 'bid' })((theme, _params, classes) => ({
  root: {
    position: 'relative',
    overflow: 'hidden',
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingBottom: theme.spacing(10),
    },
    '& ul[class="slick-dots"]': {
      bottom: theme.spacing(-5),
      '& li': {
        width: 15,
        height: 15,
        boxShadow: `inset 0 0 0 1px ${theme.palette.text.disabled}`,
        border: 'none',
        borderRadius: 15,
        opacity: 1,
        margin: '0 4px !important',
        transition: 'width 0.5s ease-in',
        overflow: 'hidden',
        '& button': {
          background: gradient(theme).triple.light,
          opacity: 0,
          width: '100%',
          height: '100%',
          transition: 'opacity 1s ease-in',
        },
        '&[class="slick-active"]': {
          boxShadow: 'none',
          width: 40,
          '& button': {
            opacity: 1,
          },
        }
      },
      '& li button:before': {
        display: 'none'
      }
    }
  },
  slide: {
    borderRadius: 40,
    overflow: 'hidden',
    position: 'relative',
    [`& .${classes.inner}`]: {
      height: 430,
      width: '100%',
      textAlign: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
    },
    '& a': {
      zIndex: 10,
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0
    },
    '& figure': {
      position: 'absolute',
      background: theme.palette.common.black,
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      margin: 0,
      '& img': {
        margin: 0,
        opacity: 0.5,
        width: '100%',
        height: '100%',
        objectFit: 'cover'
      }
    },
  },
  title: {
    position: 'relative',
    fontSize: 48,
    color: theme.palette.common.white,
    fontWeight: theme.typography.fontWeightMedium,
    [theme.breakpoints.down('sm')]: {
      fontSize: 24
    }
  },
  countdown: {
    padding: theme.spacing(2),
    position: 'relaative',
    zIndex: 2,
  },
  property: {
    position: 'relative',
    color: theme.palette.common.white,
    '& p': {
      marginBottom: theme.spacing(2)
    },
    '& strong': {
      fontWeight: theme.typography.fontWeightMedium,
    }
  },
  price: {
    color: theme.palette.secondary.light
  },
  nav: {
    position: 'absolute',
    top: '30%',
    borderRadius: theme.rounded.small,
    width: 48,
    height: 100,
    padding: 0,
    minWidth: 0,
    zIndex: 10,
    background: theme.palette.primary.main,
    boxShadow: theme.shadows[3],
    transform: theme.direction === 'rtl' ? 'scale(-1.6)' : 'scale(1.6)',
    '&:hover': {
      background: darken(theme.palette.primary.main, 0.2),
    },
    '& svg': {
      fill: theme.palette.common.white,
    },
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  prev: {
    left: -2,
  },
  next: {
    right: 2,
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default bidStyles;
