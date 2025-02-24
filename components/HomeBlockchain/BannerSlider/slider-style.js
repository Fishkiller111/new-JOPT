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
        bottom: theme.spacing(4)
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
    },
    '& ul[class="slick-dots"]': {
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
          transition: 'opacity 0.5s ease-in',
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
  btnArea: {
    display: 'flex',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
    },
    [theme.breakpoints.down('sm')]: {
      alignItems: 'center',
      [`&:not(.${classes.download})`]: {
        flexDirection: 'column'
      }
    },
    [`& .${classes.button}`]: {
      fontSize: 18,
      minWidth: 200,
      [theme.breakpoints.up('sm')]: {
        marginRight: theme.spacing(2)
      },
      [theme.breakpoints.down('sm')]: {
        width: '100%',
        marginBottom: theme.spacing(2)
      }
    },
    '& a': {
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
      height: 560,
      paddingTop: theme.spacing(10)
    },
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
      padding: theme.spacing(15, 0, 5)
    },
    [`& .${classes.img}`]: {
      '& img': {
        margin: '20px auto 0',
        position: 'relative',
        zIndex: 5,
        [theme.breakpoints.down('md')]: {
          marginTop: theme.spacing(3)
        },
        [theme.breakpoints.down('sm')]: {
          marginTop: 0
        }
      }
    },
    [`&.${classes.cur}`]: {
      [`& .${classes.deco}`]: {
        transform: 'translateX(0px) scale(1)',
        opacity: 0.15,
      }
    },
    [`&.${classes.centerContent}`]: {
      [theme.breakpoints.up('md')]: {
        paddingTop: 0,
      },
      [`& .${classes.btnArea}`]: {
        justifyContent: 'center'
      }
    },
  },
  decoBanner: {
    position: 'relative',
    zIndex: 10,
  },
  parallaxScene: {
    right: 0,
    top: 0,
    transformOrigin: 'top',
    width: 1200,
    position: 'absolute',
    '& > div': {
      position: 'absolute',
      right: '28%',
      top: 100,
      '& > div': {
        position: 'absolute'
      }
    },
    '& span': {
      display: 'block',
      position: 'absolute',
      '& img': {
        width: '100%'
      }
    },
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  hexa: {
    top: -260,
    left: -200,
    width: 160,
  },
  cube: {
    top: 120,
    left: -50,
    width: 100
  },
  cubeBlur: {
    top: 200,
    left: 240,
    width: 200,
  },
  accentBlur: {
    top: -80,
    left: 10,
    width: 100,
    height: 100,
    borderRadius: '50%',
    filter: 'blur(30px)',
    opacity: 1,
    background: theme.palette.accent.main
  },
  pyramid: {
    top: -300,
    left: 0,
    width: 140,
  },
  box: {
    top: 160,
    left: -50,
    width: 120
  },
  round: {
    top: 280,
    left: 340,
    width: 140
  },
  primaryBlur: {
    top: 300,
    left: -90,
    width: 50,
    height: 50,
    borderRadius: '50%',
    filter: 'blur(15px)',
    background: theme.palette.primary.main
  },
  hexa2: {
    top: -420,
    left: -850,
    width: 140
  },
  pyramidBlur: {
    top: -260,
    left: 80,
    width: 150,
    filter: 'blur(5px)'
  },
  tube: {
    top: 0,
    left: 0,
    width: 150
  },
  round2: {
    top: 50,
    left: 300,
    width: 220
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
        margin: 0,
        position: 'absolute',
        bottom: -260,
        width: '90%',
        left: '5%',
        [theme.breakpoints.down('md')]: {
          bottom: -200,
        },
        [theme.breakpoints.down('sm')]: {
          maxWidth: 'none',
          bottom: -50,
        }
      }
    }
  },
  backgroundBanner: {
    position: 'absolute',
    left: theme.direction === 'rtl' ? -460 : 'auto',
    right: theme.direction === 'rtl' ? 'auto' : -460,
    top: -180,
    [`&.${classes.img}`]: {
      '& img': {
        height: 750,
        [theme.breakpoints.down('md')]: {
          opacity: 0.25,
          top: -200
        },
      }
    },
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
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default sliderStyle;
