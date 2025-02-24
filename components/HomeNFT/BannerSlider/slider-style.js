import { makeStyles } from 'tss-react/mui';
import { alpha } from '@mui/material/styles';
import gradient from 'theme/gradient';

const cardWidth = 220;
const cardHeight = 280;
const reducedMobile = 40;

const sliderStyle = makeStyles({ uniqId: 'banner_slider' })((theme, _params, classes) => ({
  bannerWrap: {
    position: 'relative',
    display: 'block',
    '& .MuiContainer-root': {
      [theme.breakpoints.down('lg')]: {
        padding: 0
      }
    }
  },
  btnArea: {
    display: 'flex',
    [theme.breakpoints.down('lg')]: {
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
  artWrap: {
    overflow: 'hidden',
    position: 'relative',
    [theme.breakpoints.down('lg')]: {
      display: 'flex',
      justifyContent: 'center'
    }
  },
  artScene: {
    position: 'relative',
    left: theme.spacing(2),
    display: 'flex',
    flexWrap: 'wrap',
    [theme.breakpoints.up('lg')]: {
      marginTop: theme.spacing(5),
    },
    [theme.breakpoints.down('lg')]: {
      width: '120%',
      marginTop: theme.spacing(5)
    },
  },
  decoLine: {
    position: 'absolute',
    top: 0,
    left: -16,
    borderRadius: theme.rounded.big,
    border: '1px solid transparent',
    borderImageSource: gradient(theme).double.main,
    backgroundImage: gradient(theme).double.main,
    borderImageSlice: 1,
    WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
    WebkitMaskComposite: 'xor',
    MaskComposite: 'exclude',
    width: cardWidth,
    height: cardHeight,
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  inner: {
    display: 'flex',
    height: '100%',
    position: 'relative',
    [theme.breakpoints.up('lg')]: {
      minHeight: 640,
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
    [theme.breakpoints.up('lg')]: {
      marginTop: theme.spacing(10)
    },
    [theme.breakpoints.down('lg')]: {
      textAlign: 'center',
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
  carousel: {
    transform: 'rotate(7deg)',
    transformOrigin: 'center center',
  },
  cardMain: {
    '& > a': {
      width: cardWidth,
      height: cardHeight,
      [theme.breakpoints.down('sm')]: {
        width: cardWidth - reducedMobile,
        height: cardHeight - reducedMobile,
      }
    }
  },
  fadeSlider: {
    position: 'relative',
    zIndex: 3,
    width: '50%',
    [theme.breakpoints.between('md', 'lg')]: {
      width: '25%'
    },
    [theme.breakpoints.between('sm', 'md')]: {
      width: '33%'
    },
    '& div[class*="slick-active"]': {
      [`& .${classes.cardMain}`]: {
        animationName: 'flipInY',
        animationDuration: '1s',
        animationFillMode: 'both',
      }
    }
  },
  searchBanner: {
    position: 'relative',
    marginTop: theme.spacing(3),
    fontSize: 18,
    overflow: 'visible',
    borderRadius: 75,
    border: `1px solid ${theme.palette.mode === 'dark' ? 'transparent' : theme.palette.secondary.main}`,
    [theme.breakpoints.up('md')]: {
      width: '100%'
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(4),
    }
  },
  search: {
    fontSize: 18,
    width: '100%',
    '& input': {
      borderRadius: 75,
      padding: theme.spacing(3, 30, 2, 3),
      '&:focus': {
        boxShadow: `${alpha(theme.palette.secondary.main, 0.25)} 0 0 0 0.4rem`
      }
    },
    '& label': {
      left: theme.spacing(3),
      top: 0,
    },
    '& label + div': {
      marginTop: 0,
      '&:after, &:before': {
        display: 'none'
      }
    }
  },
  action: {
    position: 'absolute',
    right: 0,
    top: 0,
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(2)
  },
  button: {
    height: 48,
    [theme.breakpoints.down('sm')]: {
      padding: 2,
      minWidth: 0,
      width: 50,
      boxShadow: 'none',
      background: 'none',
    }
  },
  connect: {
    textAlign: 'center',
    marginTop: theme.spacing(5),
    '& h5': {
      display: 'flex',
      alignItems: 'center',
      textTransform: 'capitalize',
      fontWeight: theme.typography.fontWeightRegular,
      '& hr': {
        border: `1px solid ${theme.palette.text.secondary}`,
        width: '20%',
        opacity: 0.3
      }
    },
    '& ul': {
      display: 'flex',
      flexWrap: 'wrap',
      margin: 0,
      padding: 0,
      '& li': {
        width: '25%',
        marginBottom: theme.spacing(1),
        listStyle: 'none',
        '&:last-child': {
          width: '100%',
          [`& .${classes.btn}`]: {
            textTransform: 'uppercase'
          }
        }
      }
    }
  },
  btn: {
    marginRight: theme.spacing(1),
    width: '100%',
    padding: theme.spacing(1),
    color: theme.palette.text.primary,
    flexDirection: 'column',
    textTransform: 'capitalize',
    '& img': {
      width: 48,
      borderRadius: '50%',
      marginBottom: theme.spacing(1),
      marginRight: theme.spacing(1)
    }
  },
  connectPopup: {
    width: 500,
    maxWidth: 'none',
    textAlign: 'center'
  },
  walletList: {
    padding: theme.spacing(1, 0),
    '& .MuiListItemIcon-root': {
      minWidth: 0,
      margin: theme.spacing(0, 1)
    },
    '& img': {
      width: 48,
      borderRadius: '50%',
      marginBottom: theme.spacing(1),
      [theme.breakpoints.down('sm')]: {
        width: 36
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
