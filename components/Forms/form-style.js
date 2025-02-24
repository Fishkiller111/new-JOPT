import { makeStyles } from 'tss-react/mui';
import { alpha, darken } from '@mui/material/styles';
import gradient from 'theme/gradient';

const contactStyles = makeStyles({ uniqId: 'form' })((theme, _params, classes) => ({
  pageWrap: {
    textAlign: 'center',
    minHeight: '100%',
    position: 'relative',
    width: '100%',
    alignItems: 'center',
    padding: theme.spacing(15, 5, 0),
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(10, 0, 0),
    },
    [`& .${classes.title}`]: {
      color: theme.palette.common.white,
    },
    '& a': {
      color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.main,
      textTransform: 'none',
      fontSize: 16,
      textDecoration: 'none',
      fontWeight: theme.typography.fontWeightRegular,
      [theme.breakpoints.down('sm')]: {
        fontSize: 14
      },
    }
  },
  innerWrap: {
    textAlign: 'left',
  },
  formBox: {
    borderRadius: 40,
    position: 'relative',
    zIndex: 22,
    background: alpha(theme.palette.background.paper, 0.6),
    backdropFilter: 'saturate(180%) blur(20px)',
  },
  mapForm: {
    [theme.breakpoints.up('md')]: {
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
      borderRight: 'none',
    }
  },
  desc: {
    color: theme.palette.common.white,
    textAlign: 'center',
    padding: theme.spacing(0, 10),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0, 2),
    }
  },
  light: {},
  input: {
    width: '100%',
    '& label': {
      left: theme.spacing(0.5),
    },
    '& > div': {
      border: `1px solid ${alpha(theme.palette.text.primary, 0.25)}`,
      background: 'none',
      overflow: 'hidden',
      '& input': {
        paddingLeft: theme.spacing(2),
        '&:focus': {
          background: alpha(theme.palette.background.paper, 0.7)
        },
        '&:hover': {
          background: alpha(theme.palette.background.paper, 0.7)
        }
      }
    },
    [`&.${classes.light}`]: {
      '& label': {
        color: theme.palette.common.white,
      },
      '& > div': {
        border: `1px solid ${alpha(theme.palette.primary.light, 0.5)}`,
        '& input': {
          color: theme.palette.common.white,
          '&:focus': {
            background: alpha(theme.palette.text.disabled, 0.2)
          },
          '&:hover': {
            background: alpha(theme.palette.text.disabled, 0.2)
          }
        },
      }
    }
  },
  form: {
    textAlign: 'left',
    position: 'relative',
    padding: theme.spacing(7, 5),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(5, 2),
    },
  },
  formHelper: {
    display: 'flex',
    marginTop: theme.spacing(),
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
    }
  },
  buttonLink: {
    '& span[class*="material-icon"]': {
      transform: theme.direction === 'rtl' ? 'scale(-1)' : 'none'
    }
  },
  btnArea: {
    justifyContent: 'space-between',
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(5),
      display: 'flex',
    },
    [theme.breakpoints.down('md')]: {
      '& .MuiButton-root': {
        width: '100%'
      }
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(2),
    },
    '& label': {
      position: 'relative'
    },
    '& button': {
      marginTop: theme.spacing(2),
      minHeight: 48,
      minWidth: 180
    },
    '& span': {
      '& a': {
        textDecoration: 'none !important',
        color: theme.palette.secondary.main,
      }
    },
    [`&.${classes.double}`]: {
      '& button': {
        [theme.breakpoints.up('sm')]: {
          maxWidth: 250
        }
      }
    },
  },
  primary: {
    background: theme.palette.primary.main,
    position: 'absolute',
    opacity: 0.08,
    transform: 'rotate(45deg)',
  },
  secondary: {
    background: theme.palette.secondary.main,
    position: 'absolute',
    opacity: 0.1,
    transform: 'rotate(45deg)',
  },
  decoTop: {
    [`& .${classes.primary}`]: {
      borderRadius: 80,
      width: 405,
      height: 405,
      top: -200,
      right: -50,
    },
    [`& .${classes.secondary}`]: {
      borderRadius: 40,
      width: 205,
      height: 205,
      top: 24,
      right: -100,
    }
  },
  decoBottom: {
    [`& .${classes.primary}`]: {
      borderRadius: 40,
      width: 205,
      height: 205,
      bottom: 180,
      left: -110,
    },
    [`& .${classes.secondary}`]: {
      borderRadius: 80,
      width: 405,
      height: 405,
      bottom: -100,
      left: -100,
    }
  },
  rightIcon: {
    marginLeft: theme.spacing()
  },
  check: {
    '& svg': {
      fill: theme.palette.secondary.main
    }
  },
  checkArea: {
    position: 'relative',
    '& span a': {
      color: theme.palette.secondary.main
    }
  },
  authFrame: {
    display: 'block',
    position: 'relative'
  },
  greeting: {
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    justifyContent: 'center',
    borderRadius: 40,
    height: '100%',
    overflow: 'hidden',
    zIndex: 3,
    boxShadow: theme.shade.light,
    color: theme.palette.common.white,
    background: gradient(theme).triple.main,
    padding: theme.spacing(3),
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(4),
    },
    img: {
      position: 'absolute'
    }
  },
  imgLogin: {
    bottom: -310,
    left: -100,
    transform: 'rotate(-245deg)',
  },
  imgRegister: {
    top: -480,
    left: 100,
    transform: 'rotate(-25deg)',
  },
  text: {
    position: 'relative',
    zIndex: 2,
  },
  logo: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.spacing(3),
    [`&.${classes.logoHeader}`]: {
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative',
      zIndex: 10
    },
    '& img': {
      width: 64,
    },
    '& p, span': {
      display: 'block',
      paddingBottom: 4,
      color: theme.palette.common.white,
    }
  },
  head: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    textTransform: 'capitalize',
    marginBottom: theme.spacing(3),
    '& a': {
      marginTop: theme.spacing(2),
    },
    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing(2),
      justifyContent: 'center',
      '& a': {
        display: 'none'
      }
    }
  },
  formWrap: {
    background: alpha(theme.palette.background.paper, 0.6),
    backdropFilter: 'saturate(180%) blur(20px)',
    position: 'relative',
    padding: theme.spacing(2),
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    boxShadow: theme.shade.light,
    [theme.breakpoints.down('md')]: {
      borderRadius: 20
    },
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(5)
    },
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(3, 4, 3, 8)
    }
  },
  socmedSideLogin: {
    display: 'flex',
    justifyContent: 'space-around',
    [theme.breakpoints.down('lg')]: {
      justifyContent: 'center',
    },
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
      display: 'block'
    },
    '& > a, & > button': {
      color: theme.palette.common.white,
      width: 160,
      padding: theme.spacing(),
      margin: theme.spacing(0, 0.5),
      [theme.breakpoints.down('sm')]: {
        marginBottom: theme.spacing(2),
        width: '100%',
      }
    },
    '& i': {
      color: theme.palette.common.white,
      marginRight: theme.spacing()
    }
  },
  blueBtn: {
    background: '#28aae1',
    '&:hover': {
      background: darken('#28aae1', 0.2),
    }
  },
  naviBtn: {
    background: '#3b579d',
    '&:hover': {
      background: darken('#3b579d', 0.2),
    }
  },
  redBtn: {
    background: '#dd493c',
    '&:hover': {
      background: darken('#dd493c', 0.2),
    }
  },
  separator: {
    margin: `${theme.spacing(5)} auto`,
    maxWidth: 300,
    minWidth: 200,
    textAlign: 'center',
    position: 'relative',
    '& p': {
      [theme.breakpoints.down('sm')]: {
        fontSize: 12
      },
    },
    '&:before, &:after': {
      content: '""',
      borderTop: `1px solid ${theme.palette.text.disabled}`,
      top: '50%',
      position: 'absolute',
      width: '20%'
    },
    '&:before': {
      left: 0,
    },
    '&:after': {
      right: 0,
    }
  },
  inner: {
    height: 600,
    top: 0,
    left: 0,
    width: '50%',
    position: 'absolute',
    display: 'block',
  },
  primaryDark: { background: gradient(theme).primary.dark },
  primaryLight: { background: gradient(theme).primary.light },
  secondaryDark: { background: gradient(theme).secondary.dark },
  secondaryLight: { background: gradient(theme).secondary.light },
  accent: { background: gradient(theme).accent },
  doubleLight: { background: gradient(theme).double.light },
  doubleMain: { background: gradient(theme).double.main },
  doubleDark: { background: gradient(theme).double.dark },
  tripleLight: { background: gradient(theme).triple.light },
  tripleMain: { background: gradient(theme).triple.main },
  tripleDark: { background: gradient(theme).triple.dark },
  fog: {
    filter: 'blur(60px)',
    width: 700,
    height: 600,
    opacity: 0.75,
    position: 'relative',
    '& > div': {
      borderRadius: 500,
      position: 'absolute',
      transition: 'all 1.5s cubic-bezier(.11,.99,.81,1.13)'
    }
  },
  arrowIcon: {
    position: 'absolute',
    right: 0,
    bottom: 60,
    width: 270,
    height: 270,
    color: theme.palette.common.black,
    opacity: 0.05,
    transform: theme.direction === 'rtl' ? 'scale(-1)' : 'none'
  },
  decoration: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    left: 0,
    top: 0,
    '& > div': {
      position: 'absolute'
    },
    [`&.${classes.left}`]: {
      left: -50,
      [theme.breakpoints.down('sm')]: {
        zIndex: 0
      }
    },
    [`& .${classes.ball}`]: {
      width: 160,
      height: 170,
      top: 100,
      left: 0,
      zIndex: 30,
      transform: 'rotate(-45deg)',
    },
    [`& .${classes.plate}`]: {
      width: 100,
      height: 100,
      zIndex: 20,
      top: 120,
      left: 140,
      transform: 'rotate(-50deg)',
      filter: 'blur(5px) drop-shadow(0px 25px 12px rgba(0, 0, 0, 0.3))'
    },
    [`& .${classes.flower}`]: {
      width: 180,
      height: 180,
      top: 300,
      right: -10,
      transform: 'rotate(-50deg)'
    },
    [`& .${classes.bowl}`]: {
      width: 100,
      height: 100,
      top: 300,
      right: 40,
      transform: 'rotate(60deg)',
      filter: 'blur(5px) drop-shadow(20px 25px 5px rgba(0, 0, 0, 0.3))'
    },
    [`& .${classes.ufo}`]: {
      width: 160,
      height: 170,
      top: 180,
      left: 40,
      zIndex: 20,
      transform: 'rotate(-45deg)',
    },
    [`& .${classes.bom}`]: {
      width: 60,
      height: 60,
      zIndex: 33,
      top: 160,
      left: 50,
      transform: 'rotate(-50deg)',
      filter: 'blur(5px) drop-shadow(0px 25px 12px rgba(0, 0, 0, 0.3))'
    },
    [`& .${classes.snail}`]: {
      width: 180,
      height: 180,
      top: 300,
      right: -10,
      transform: 'rotate(-50deg)'
    },
  },
  map: {
    position: 'relative',
    zIndex: 20,
    overflow: 'hidden',
    height: 850,
    [theme.breakpoints.down('md')]: {
      height: '300px !important',
      marginTop: theme.spacing(5)
    },
    [theme.breakpoints.up('md')]: {
      borderRadius: '0 12px 12px 0 !important',
    },
    [`&.${classes.full}`]: {
      height: 915,
    }
  },
  buble: {
    borderRadius: 10,
    padding: theme.spacing(2),
    width: 'auto',
    left: -250,
    top: -300,
    color: theme.palette.common.black,
    '& p': {
      fontSize: 13,
    },
  },
  icon: {
    color: '#607D8B',
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(2),
    top: 4,
    position: 'relative',
    fontSize: 16,
  },
  notif: {
    top: 90
  },
  paper: {
    padding: theme.spacing(2),
    borderRadius: 12,
    width: 400,
    maxWidth: '95%',
    marginTop: theme.spacing(4),
    '& .MuiDialogTitle-root': {
      paddingBottom: 0,
      position: 'relative'
    },
    '& .MuiTypography-h6': {
      fontWeight: theme.typography.fontWeightBold,
      fontSize: 18
    }
  },
  closeBtn: {
    color: theme.palette.text.primary,
    '& svg': {
      width: 24,
      height: 24
    }
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default contactStyles;
