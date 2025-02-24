import { makeStyles } from 'tss-react/mui';

const sharingStyles = makeStyles({ uniqId: 'sharing_art' })((theme, _params, classes) => ({
  sharing: {
    position: 'relative',
    width: '100%',
    height: 600,
    maxWidth: 650,
    '& > div': {
      position: 'absolute'
    }
  },
  liquid: {
    WebkitMaskImage: 'url(/images/decoration/deco-liquid.svg)',
    MaskImage: 'url(/images/decoration/deco-liquid.svg)',
    width: 273,
    height: 228,
  },
  person: {
    overflow: 'hidden',
    position: 'absolute',
    '& img': {
      height: '100%',
    }
  },
  // big
  big: {
    top: 80,
    left: 50,
    maxWidth: 250,
    height: 300,
    width: '100%',
    [`& .${classes.liquid}`]: {
      bottom: 0,
      left: 0,
      position: 'absolute',
    },
    [`& .${classes.person}`]: {
      bottom: 0,
      left: 20,
      width: 250,
      borderRadius: 250,
      height: 300,
    },
  },
  medium: {
    bottom: 20,
    right: 20,
    maxWidth: 200,
    height: 200,
    width: '100%',
    [`& .${classes.liquid}`]: {
      bottom: 0,
      right: 0,
      transform: 'scale(-0.9, 0.9) rotate(-30deg)',
      position: 'absolute',
    },
    [`& .${classes.person}`]: {
      width: 200,
      height: 200,
      bottom: 10,
      left: -35,
      borderRadius: 200,
    },
  },
  small1: {
    top: 170,
    right: 70,
    [theme.breakpoints.down('lg')]: {
      display: 'none'
    },
    [`& .${classes.ovalDeco}`]: {
      position: 'relative',
      '&:before': {
        content: '""',
        borderRadius: '50%',
        width: 140,
        height: 140,
        position: 'absolute',
        border: `1px solid ${theme.palette.primary.light}`,
        top: -12,
        right: -2
      }
    },
    [`& .${classes.avatar}`]: {
      width: 120,
      height: 120,
    },
  },
  small2: {
    bottom: 30,
    left: 140,
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
    [`& .${classes.ovalDeco}`]: {
      position: 'relative',
      '&:before': {
        content: '""',
        borderRadius: '50%',
        width: 140,
        height: 140,
        position: 'absolute',
        border: `1px solid ${theme.palette.secondary.main}`,
        top: -12,
        left: -12
      }
    },
    [`& .${classes.avatar}`]: {
      width: 120,
      height: 120,
    },
  },
  bg: {
    display: 'block',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  bgPrimary: {
    background: theme.palette.primary.main,
  },
  bgSecondary: {
    background: theme.palette.secondary.light,
  },
  shadow: {
    height: '100%',
    width: '50%',
    display: 'block',
    position: 'relative',
    top: 0,
    left: '30%',
    background: 'rgba(0, 0, 0, 0.4)',
    filter: 'blur(20px)'
  },
  counter: {
    background: '#424242',
    padding: theme.spacing(1, 3, 1, 1),
    borderRadius: 50,
    color: theme.palette.common.white,
    display: 'flex',
    position: 'absolute',
    bottom: 0,
    [`&.${classes.large}`]: {
      transform: 'scale(1)',
      left: -10,
    },
    [`&.${classes.small}`]: {
      transform: 'scale(0.8)',
      left: -40,
      bottom: -30
    },
    [`&.${classes.mini}`]: {
      width: '230%',
      transform: 'scale(0.6)',
      transformOrigin: 'left',
      left: -20,
      bottom: -30,
      [`& .${classes.ammount}`]: {
        '& p': {
          fontSize: 14,
        }
      }
    },
    [`& .${classes.icon}`]: {
      background: theme.palette.secondary.main,
      marginRight: theme.spacing(),
      width: 60,
      height: 60,
      '& svg': {
        fill: '#424242'
      }
    },
  },
  avatar: {
    width: 60,
    height: 60,
    marginRight: theme.spacing(),
    '& img': {
      width: '100%',
      height: '100%',
    }
  },
  ammount: {
    color: theme.palette.common.white,
    fontSize: 22,
    '& > div': {
      display: 'flex',
      alignItems: 'center'
    },
    [`& .${classes.logo}`]: {
      width: 20,
      height: 20,
      marginRight: theme.spacing(),
      '& img': {
        width: '100%',
        height: '100%',
      }
    },
    '& p': {
      marginBottom: 0,
      fontSize: '18px',
      '& i': {
        marginRight: theme.spacing(0.5)
      },
      '& strong': {
        fontWeight: theme.typography.fontWeightMedium
      }
    }
  },
  // arrow
  arrow: {
    position: 'absolute',
    display: theme.direction === 'rtl' ? 'none' : 'block',
    '& svg': {
      width: 300,
      height: 320
    },
    [`& .${classes.icon}`]: {
      width: 52,
      height: 52,
      borderRadius: '50%',
      fontSize: 48,
      border: `5px solid ${theme.palette.background.paper}`,
      textAlign: 'center',
      position: 'absolute',
      '& > div': {
        position: 'relative',
        top: -30
      }
    },
    [`&.${classes.primary}`]: {
      right: 0,
      top: 100,
      transform: 'scale(0.9)',
      '& svg': {
        stroke: theme.palette.primary.main
      },
      [`& .${classes.icon}`]: {
        left: 100,
        top: -15,
        background: theme.palette.primary.main,
      },
      [theme.breakpoints.down('md')]: {
        display: 'none'
      },
    },
    [`&.${classes.secondary}`]: {
      left: -70,
      bottom: 20,
      transform: 'scale(0.6)',
      '& svg': {
        transform: 'scaleY(-1) rotate(235deg)',
        stroke: theme.palette.secondary.main
      },
      [`& .${classes.icon}`]: {
        left: -10,
        top: 80,
        background: theme.palette.secondary.main
      },
      [theme.breakpoints.down('md')]: {
        display: 'none'
      },
    },
    [`&.${classes.accent}`]: {
      left: 150,
      bottom: 80,
      transform: 'scale(0.3)',
      [theme.breakpoints.down('lg')]: {
        display: 'none'
      },
      '& svg': {
        stroke: theme.palette.accent.main,
        transform: 'scaleY(1.2) rotate(225deg)'
      },
      [`& .${classes.icon}`]: {
        left: 10,
        top: 40,
        transform: 'scale(1.5)',
        background: theme.palette.accent.main
      }
    },
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default sharingStyles;
