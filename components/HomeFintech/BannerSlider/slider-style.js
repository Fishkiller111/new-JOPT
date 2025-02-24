import { makeStyles } from 'tss-react/mui';
import { alpha, darken } from '@mui/material/styles';
import gradient from 'theme/gradient';

const sliderStyle = makeStyles({ uniqId: 'banner_slider' })((theme, _params, classes) => ({
  bannerWrap: {
    position: 'relative',
    display: 'block',
    overflow: 'hidden',
    '& ul[class*="slick-dots"]': {
      bottom: 0,
      left: 10,
      [theme.breakpoints.down('sm')]: {
        bottom: 0
      }
    },
  },
  carousel: {
    [theme.breakpoints.down('sm')]: {
      position: 'relative',
      zIndex: 5
    },
    '& [class*="slick-list"]': {
      overflow: 'visible'
    }
  },
  btnArea: {
    display: 'flex',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
    },
    [theme.breakpoints.down('sm')]: {
      [`&:not(.${classes.download})`]: {
        flexDirection: 'column'
      }
    },
    [`& .${classes.button}`]: {
      fontSize: 18,
      minWidth: 200,
      [theme.breakpoints.down('sm')]: {
        width: '100%',
        marginBottom: theme.spacing(2)
      }
    },
    '& a, button': {
      marginRight: theme.spacing(2),
      display: 'inline-flex',
      [theme.breakpoints.down('sm')]: {
        margin: 4
      },
      '& img': {
        width: 160,
        [theme.breakpoints.down('sm')]: {
          width: '100%'
        }
      }
    }
  },
  slider: {
    marginBottom: '0 !important',
    zIndex: 1,
    '& div[class*="slick-current"]': {
      [theme.breakpoints.down('md')]: {
        zIndex: 1
      }
    },
  },
  slide: {
    position: 'relative',
    [theme.breakpoints.up('md')]: {
      height: 650,
      paddingTop: theme.spacing(8)
    },
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
      padding: theme.spacing(15, 0, 5)
    },
    [`&.${classes.cur}`]: {
      [`& .${classes.deco}`]: {
        transform: 'translateX(0px) scale(1)',
        opacity: 0.15,
      }
    },
  },
  centerContent: {
    overflow: 'visible !important',
    [`& .${classes.inner}`]: {
      alignItems: 'flex-end'
    },
    [theme.breakpoints.down('md')]: {
      paddingTop: theme.spacing(20)
    }
  },
  decoBanner: {
    position: 'relative',
    zIndex: 10,
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      justifyContent: 'center'
    }
  },
  videoArt: {
    position: 'relative'
  },
  additionalArt: {
    position: 'absolute',
    bottom: -300
  },
  mobileArt: {
    position: 'absolute',
    [theme.breakpoints.up('md', 'xl')]: {
      top: -120
    }
  },
  sharingArt: {
    [theme.breakpoints.down('md')]: {
      width: 600,
      marginTop: -80
    },
    [theme.breakpoints.down('sm')]: {
      width: 300
    }
  },
  imgSlide1: {
    [theme.breakpoints.up('md')]: {
      float: theme.direction === 'rtl' ? 'right' : 'left'
    }
  },
  imgSlide2: {
    [theme.breakpoints.up('md')]: {
      float: theme.direction === 'rtl' ? 'left' : 'right'
    }
  },
  hBanner: {
    textAlign: 'center',
    [`&.${classes.img}`]: {
      '& img': {
        [theme.breakpoints.down('sm')]: {
          maxWidth: 'none'
        }
      }
    },
    [`& .${classes.backgroundBanner}`]: {
      transform: 'scale(0.8)',
      right: 'auto',
      left: 'auto',
      bottom: -260,
      top: 'auto',
      [theme.breakpoints.down('md')]: {
        bottom: -470
      }
    }
  },
  backgroundBanner: {
    position: 'absolute',
    left: theme.direction === 'rtl' ? -500 : 'auto',
    right: theme.direction === 'rtl' ? 'auto' : -500,
    top: -120,
    width: 1100,
    height: 650,
    overflow: 'hidden',
    [theme.breakpoints.down('md')]: {
      opacity: 0.5
    },
    '& iframe': {
      height: '100%',
      width: '100%',
      marginTop: -80
    }
  },
  cover: {
    height: '100%',
    width: '100%',
    marginTop: -80,
    position: 'absolute',
    left: 1,
  },
  video: {
    height: '100%',
    '& > div': {
      height: '100%',
      padding: theme.spacing(2)
    },
  },
  decoLine: {
    height: '90%',
    position: 'absolute',
    top: 0,
    left: 0,
    width: 1100,
    zIndex: 2,
    [theme.breakpoints.down('lg')]: {
      display: 'none'
    },
    '& svg': {
      width: '100%',
      height: '100%',
      position: 'absolute',
    },
    [`& .${classes.primary}`]: {
      left: 0,
      top: 0,
      stroke: theme.palette.primary.main
    },
    [`& .${classes.secondary}`]: {
      left: 10,
      top: -10,
      stroke: theme.palette.secondary.main
    }
  },
  decoMask: {
    height: '90%',
    position: 'absolute',
    top: 0,
    left: 0,
    width: 1100,
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
      background: theme.palette.mode === 'dark' ? theme.palette.common.black : theme.palette.common.white,
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
  inner: {
    display: 'flex',
    height: '100%',
    alignItems: 'center',
    position: 'relative',
    [theme.breakpoints.down('lg')]: {
      flexDirection: 'column',
      justifyContent: 'center'
    }
  },
  text: {
    direction: 'ltr',
    position: 'relative',
    zIndex: 99,
    '& h4': {
      fontWeight: theme.typography.fontWeightBold,
      marginBottom: theme.spacing(2)
    },
    '& h5': {
      marginBottom: theme.spacing(4)
    }
  },
  button: {},
  download: {},
  slideNav: {
    display: 'flex',
    justifyContent: 'center',
    '& nav': {
      display: 'flex',
      margin: '0 auto',
      justifyContent: 'center',
      zIndex: 5,
      position: 'relative',
      padding: theme.spacing(1),
      borderRadius: '20px',
      background: theme.palette.mode === 'dark' ? alpha(darken(theme.palette.primary.dark, 0.5), 0.7) : alpha(theme.palette.background.paper, 0.7),
      backdropFilter: 'saturate(100%) blur(10px)',
    }
  },
  active: {},
  btnNav: {
    padding: theme.spacing(1, 3, 0.5),
    textTransform: 'none',
    height: 'auto',
    border: '1px solid transparent',
    fontWeight: theme.typography.fontWeightRegular,
    flexDirection: 'column',
    alignItems: 'flex-start',
    textAlign: 'left',
    [theme.breakpoints.down('lg')]: {
      padding: theme.spacing(1, 2, 0.5),
    },
    '& strong': {
      textTransform: 'capitalize',
      fontSize: 28,
      display: 'block',
      fontWeight: theme.typography.fontWeightMedium,
      marginLeft: -2,
      transition: 'all 0.5s ease-out',
      '&:before': {
        content: '""',
        width: 18,
        height: 18,
        opacity: 0,
        transform: 'scale(0)',
        transition: 'all 0.5s ease-out',
        background: theme.palette.mode === 'dark' ? gradient(theme).secondary.light : gradient(theme).secondary.dark,
        position: 'absolute',
        borderRadius: '50%',
        top: 16,
        left: 24,
        [theme.breakpoints.down('lg')]: {
          left: 16
        },
      }
    },
    '&:hover': {
      transition: 'all 0.3s ease-out',
      background: alpha(theme.palette.text.primary, 0.05),
      '& strong': {
        color: theme.palette.secondary.main
      }
    },
    [`&.${classes.active}`]: {
      '& strong': {
        paddingLeft: theme.spacing(3),
        color: theme.palette.primary.main,
        background: theme.palette.mode === 'dark' ? gradient(theme).secondary.light : gradient(theme).secondary.dark,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        '&:before': {
          opacity: 1,
          transform: 'scale(1)'
        },
      },
    }
  },
  divider: {
    margin: theme.spacing(1, 2),
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
export default sliderStyle;
