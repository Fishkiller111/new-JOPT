import { makeStyles } from 'tss-react/mui';
import { darken, alpha } from '@mui/material/styles';

const integrationStyle = makeStyles({ uniqId: 'integration' })((theme, _params, classes) => ({
  root: {
    position: 'relative',
  },
  background: {
    direction: 'ltr',
    borderRadius: '60px 60px 0 0',
    position: 'relative',
    padding: theme.spacing(10, 0),
    overflow: 'hidden',
    background: theme.palette.mode === 'dark' ? `linear-gradient(to right, ${theme.palette.primary.dark} 10%, ${theme.palette.secondary.dark} 40%, ${theme.palette.secondary.dark} 70%, ${theme.palette.secondary.main} 100%)` : `linear-gradient(to right, ${theme.palette.primary.light} 10%, ${theme.palette.common.white} 40%, ${theme.palette.common.white} 70%, ${theme.palette.secondary.light} 100%)`,
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(15),
      paddingBottom: theme.spacing(20),
    },
    '&:before': {
      content: '""',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: theme.palette.background.paper,
      opacity: theme.palette.mode === 'dark' ? '0.6' : '0.2',
      position: 'absolute',
    },
    '&:after': {
      content: '""',
      borderRadius: '60px 60px 0 0',
      height: 200,
      width: '100%',
      position: 'absolute',
      bottom: -150,
      left: 0,
      background: theme.palette.mode === 'dark' ? darken(theme.palette.primary.dark, 0.5) : theme.palette.background.paper,
    }
  },
  container: {
    position: 'relative',
    zIndex: 1,
  },
  bgGradient: {
    filter: 'blur(50px)',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    opacity: 0.5,
    '& span': {
      position: 'absolute',
    }
  },
  ovalRight: {
    width: 1025,
    height: 2136,
    top: 100,
    right: 400,
    zIndex: 1,
    opacity: 0.3,
    background: `linear-gradient(172deg, ${theme.palette.accent.main} 20%, ${alpha(theme.palette.common.white, 0.1)} 90%)`
  },
  ovalTop: {
    width: 1612,
    height: 1612,
    top: -100,
    left: -400,
    opacity: 0.5,
    background: theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light
  },
  ovalBottom: {
    width: 1312,
    height: 1312,
    top: -600,
    left: 0,
    opacity: 0.3,
    background: theme.palette.primary.dark
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
    background: theme.palette.secondary.main,
  },
  illustration: {
    marginBottom: theme.spacing(5),
    display: 'flex',
    [`&.${classes.left}`]: {
      justifyContent: 'flex-end',
    },
    [theme.breakpoints.down('md')]: {
      transform: 'scale(0.75)',
      transformOrigin: 'center center',
      marginBottom: -30,
      marginTop: -40,
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: 0,
      marginTop: -20,
      justifyContent: 'center !important'
    }
  },
  icon: {
    width: 'auto',
    height: 'auto',
    position: 'relative',
    top: theme.spacing()
  },
  list: {
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10)
    },
    '& ul': {
      padding: 0,
      '& li': {
        marginBottom: 20,
        listStyle: 'none',
        fontSize: 24,
        [theme.breakpoints.down('md')]: {
          fontSize: 16
        },
        [`& .${classes.icon}`]: {
          borderRadius: '50%',
          padding: 6,
          [theme.breakpoints.down('md')]: {
            fontSize: 14
          }
        }
      }
    },
    '& h3': {
      marginBottom: theme.spacing(1)
    }
  },
  listWrap: {
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      justifyContent: 'center'
    }
  },
  listPrimary: {
    [`& .${classes.icon}`]: {
      background: theme.palette.primary.light,
      color: theme.palette.primary.main,
      marginRight: theme.spacing(3),
      [theme.breakpoints.down('sm')]: {
        marginRight: theme.spacing(2)
      }
    }
  },
  listSecondary: {
    '& li': {
      [theme.breakpoints.up('sm')]: {
        textAlign: 'right'
      }
    },
    [`& .${classes.icon}`]: {
      background: theme.palette.secondary.light,
      color: theme.palette.secondary.dark,
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
      },
      [theme.breakpoints.down('sm')]: {
        float: 'left',
        marginRight: theme.spacing(2),
        marginTop: -10
      }
    }
  },
  liquid: {
    MaskImage: 'url(/images/decoration/deco-liquid-fill.svg)',
    MaskRepeat: 'no-repeat',
    WebkitMaskImage: 'url(/images/decoration/deco-liquid-fill.svg)',
    WebkitMaskRepeat: 'no-repeat',
    width: 258,
    height: 218,
  },
  leaf: {
    MaskImage: 'url(/images/decoration/deco-leaf-fill.svg)',
    MaskRepeat: 'no-repeat',
    WebkitMaskImage: 'url(/images/decoration/deco-leaf-fill.svg)',
    WebkitMaskRepeat: 'no-repeat',
    width: 273,
    height: 282,
  },
  photo: {
    overflow: 'hidden',
    width: 258,
    borderRadius: 258,
    display: 'block',
    zIndex: 1,
    position: 'relative',
    height: 320,
    '& img': {
      height: '100%',
      minWidth: '100%',
    }
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
  obj: {
    position: 'relative',
    [`& .${classes.deco}`]: {
      bottom: 0,
      left: 0,
      position: 'absolute',
    },
  },
  icon3D: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 1,
    '& > div': {
      position: 'absolute',
    },
    [`& .${classes.big}`]: {
      fontSize: 120
    },
    [`& .${classes.medium}`]: {
      fontSize: 80
    },
    [`& .${classes.small}`]: {
      fontSize: 40
    }
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default integrationStyle;
