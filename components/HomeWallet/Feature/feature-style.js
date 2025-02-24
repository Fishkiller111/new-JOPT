import { makeStyles } from 'tss-react/mui';

const featureStyles = makeStyles({ uniqId: 'feature' })((theme, _params, classes) => ({
  root: {
    position: 'relative',
    '& .MuiContainer-root': {
      [theme.breakpoints.between('sm', 'md')]: {
        padding: 0
      }
    }
  },
  desc: {
    position: 'relative',
    zIndex: 60,
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center'
    }
  },
  parallaxWrap: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    overflow: 'hidden'
  },
  item: {
    position: 'relative',
    minHeight: 320,
    overflow: 'hidden',
    [theme.breakpoints.down('md')]: {
      paddingTop: theme.spacing(5),
    },
    [theme.breakpoints.up('sm')]: {
      paddingBottom: theme.spacing(5),
    },
    '& h6': {
      marginBottom: theme.spacing(4),
    },
    [`&.${classes.last}`]: {
      marginBottom: theme.spacing(10),
      [theme.breakpoints.down('sm')]: {
        paddingBottom: theme.spacing(13),
        marginBottom: 0
      }
    }
  },
  illustration: {
    position: 'relative',
  },
  mobileArt: {
    [theme.breakpoints.up('md')]: {
      top: -200,
    },
    [theme.breakpoints.between('sm', 'md')]: {
      top: -260,
    },
    [theme.breakpoints.up('sm')]: {
      position: 'absolute',
      right: 100,
    },
    [theme.breakpoints.down('sm')]: {
      transform: 'scale(0.8)',
      marginBottom: -20
    },
  },
  shareArt: {
    position: 'relative',
    top: -80,
    [theme.breakpoints.down('md')]: {
      top: -40,
    },
    [theme.breakpoints.between('sm', 'md')]: {
      width: 600
    }
  },
  parallaxLogo: {
    height: 600,
    position: 'relative',
    background: 'url(/images/wallet/crypto_logo.png) no-repeat transparent center center',
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    '&:before': {
      content: '""',
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      zIndex: 1,
      background: `linear-gradient(to bottom, ${theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.background.paper} ${theme.direction === 'rtl' ? '90%' : '10%'}, rgba(0, 0, 0, 0) 50%, ${theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.background.paper} 100%)`
    },
    '&:after': {
      content: '""',
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      zIndex: 1,
      opacity: 0.5,
      background: `linear-gradient(to bottom, ${theme.palette.mode === 'dark' ? theme.palette.common.black : theme.palette.background.paper} ${theme.direction === 'rtl' ? '90%' : '10%'}, rgba(0, 0, 0, 0) 50%, ${theme.palette.mode === 'dark' ? theme.palette.common.black : theme.palette.background.paper} 100%)`
    },
  },
  videoPopup: {
    width: 690,
    maxWidth: 'none',
    '& iframe': {
      [theme.breakpoints.down('sm')]: {
        width: '100%',
        height: 300
      }
    }
  },
  closeBtn: {
    position: 'absolute',
    top: 4,
    right: 4,
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default featureStyles;
