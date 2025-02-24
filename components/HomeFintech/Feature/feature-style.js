import { makeStyles } from 'tss-react/mui';

const featureStyles = makeStyles({ uniqId: 'feature' })((theme, _params, classes) => ({
  root: {
    position: 'relative',
    '& .MuiContainer-root': {
      [theme.breakpoints.down('lg')]: {
        padding: 0
      }
    }
  },
  desc: {
    position: 'relative',
    zIndex: 60,
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0, 3)
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
      textAlign: 'center',
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
        marginBottom: 0
      }
    }
  },
  illustration: {
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      marginBottom: -40
    },
  },
  personArt: {
    [theme.breakpoints.down('sm')]: {
      width: 280,
    },
    [theme.breakpoints.down('md')]: {
      marginTop: 100
    },
    [theme.breakpoints.up('md')]: {
      position: 'absolute',
      left: 100,
      top: -100,
    },
    [theme.breakpoints.down('lg')]: {
      top: -120,
    },
  },
  videoArt: {
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(0, 3),
      paddingBottom: theme.spacing(20)
    }
  },
  appArt: {
    position: 'relative',
    top: 30,
    paddingBottom: theme.spacing(10),
    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing(5),
      paddingBottom: theme.spacing(15),
    },
    [theme.breakpoints.up('sm')]: {
      left: -30,
    },
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      justifyContent: 'center',
    }
  },
  parallaxLogo: {
    height: 600,
    position: 'relative',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'transparent',
    backgroundPosition: 'center center',
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
