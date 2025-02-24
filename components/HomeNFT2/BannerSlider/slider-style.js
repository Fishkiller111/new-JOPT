import { makeStyles } from 'tss-react/mui';

const cardWidth = 300;
const cardHeight = 400;

const sliderStyle = makeStyles({ uniqId: 'banner_slider' })((theme, _params, classes) => ({
  bannerWrap: {
    position: 'relative',
    display: 'block',
    overflow: 'hidden',
    '& .MuiContainer-root': {
      padding: theme.spacing(0, 2),
      [theme.breakpoints.down('lg')]: {
        padding: 0
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
  artScene: {
    position: 'relative',
    [theme.breakpoints.up('md')]: {
      left: theme.spacing(2),
      top: theme.spacing(-5),
    },
    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing(10)
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(5)
    }
  },
  decoLine: {
    position: 'absolute',
    top: 80,
    left: -16,
    width: 280,
    height: 350,
    borderRadius: theme.rounded.big,
    border: `1px solid ${theme.palette.primary.light}`,
    transform: 'rotate(5deg)',
    '&:before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: 280,
      height: 350,
      borderRadius: theme.rounded.big,
      border: `1px solid ${theme.palette.secondary.light}`,
      transform: 'rotate(-10deg)',
    }
  },
  inner: {
    display: 'flex',
    height: '100%',
    alignItems: 'center',
    position: 'relative',
    [theme.breakpoints.up('md')]: {
      height: 720,
      paddingTop: theme.spacing(10)
    },
    [theme.breakpoints.down('lg')]: {
      paddingTop: theme.spacing(20),
      flexDirection: 'column',
      justifyContent: 'center'
    }
  },
  text: {
    position: 'relative',
    zIndex: 99,
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
    },
    [theme.breakpoints.down('lg')]: {
      padding: theme.spacing(0, 3)
    },
    '& h4': {
      fontWeight: theme.typography.fontWeightBold,
      marginBottom: theme.spacing(2)
    },
    '& h5': {
      marginBottom: theme.spacing(4)
    }
  },
  cardMain: {
    opacity: 0,
    transform: 'scale(0.9) translateX(100px)',
    transition: 'all 0.7s ease-out',
    '& > a': {
      width: cardWidth,
      height: cardHeight,
    }
  },
  fadeSlider: {
    position: 'relative',
    zIndex: 3,
    marginRight: theme.direction === 'rtl' ? 300 : 0,
    '& div[class*="slick-active"]': {
      [`& .${classes.cardMain}`]: {
        opacity: 1,
        transform: 'scale(1) translateX(0)',
      }
    }
  },
  rollSlider: {
    zIndex: 2,
    top: theme.spacing(5),
    [theme.breakpoints.up('md')]: {
      width: 780,
      position: 'absolute',
    },
    '&:before': {
      content: '""',
      height: '100%',
      width: 100,
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: 1,
      background: `linear-gradient(to right, ${theme.palette.mode === 'dark' ? theme.palette.primary.dark : '#FFF'} 40%, rgba(0, 0, 0, 0) 100%)`,
      [theme.breakpoints.down('md')]: {
        display: 'none'
      }
    },
    '&:after': {
      zIndex: 1,
      content: '""',
      height: '100%',
      width: 100,
      position: 'absolute',
      top: 0,
      left: 0,
      opacity: 0.5,
      background: `linear-gradient(to right, ${theme.palette.mode === 'dark' ? '#000' : '#FFF'} 40%, rgba(0, 0, 0, 0) 100%)`,
      [theme.breakpoints.down('md')]: {
        display: 'none'
      }
    }
  },
  cardSecondary: {
    textAlign: 'center',
    '& > a': {
      height: cardHeight * 0.8,
      [theme.breakpoints.up('md')]: {
        width: cardWidth * 0.8,
      },
      [theme.breakpoints.down('md')]: {
        margin: theme.spacing(0, 1)
      },
      [theme.breakpoints.down('sm')]: {
        width: cardWidth * 0.6,
        height: cardHeight * 0.6,
      }
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default sliderStyle;
