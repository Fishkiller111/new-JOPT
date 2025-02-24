import { makeStyles } from 'tss-react/mui';

const personStyles = makeStyles({ uniqId: 'person_art' })((theme, _params, classes) => ({
  person: {
    textAlign: 'center',
    position: 'relative',
    maxWidth: 538,
    height: 530,
    top: -40,
    [theme.breakpoints.down('md')]: {
      height: 440
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: 400,
      textAlign: 'center'
    }
  },
  // background
  outlined: {
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  background: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '100%',
    '& > div': {
      position: 'absolute',
    },
    '& svg': {
      position: 'absolute',
      width: 257,
      height: 217
    },
    [`& .${classes.secondary}`]: {
      transform: 'scale(0.5) rotate(165deg)',
      top: 105,
      left: 200,
      [`& .${classes.filled}`]: {
        top: -1,
        left: -5,
        fill: theme.palette.secondary.main,
      },
      [`& .${classes.outlined}`]: {
        top: 20,
        left: 15,
        stroke: theme.palette.secondary.main,
        fill: 'none',
      },
    },
    [`& .${classes.primary}`]: {
      bottom: 100,
      right: -90,
      [`& .${classes.filled}`]: {
        bottom: 0,
        right: 20,
        transform: 'scale(1.2)',
        fill: theme.palette.primary.main,
      },
      [`& .${classes.outlined}`]: {
        bottom: 20,
        right: 80,
        transform: 'scale(1.8)',
        stroke: theme.palette.primary.main,
        fill: 'none',
      },
    },
  },
  // person photo
  photo: {
    margin: '0 auto',
    '& img': {
      maxWidth: 300,
      filter: 'drop-shadow(0px -5px 10px rgba(0, 0, 0, 0.2))',
      [theme.breakpoints.down('md')]: {
        maxWidth: 200,
        margin: '0 auto'
      }
    }
  },
  // icons
  icons: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
    [`& .${classes.secondary}`]: {
      position: 'absolute',
      fontSize: 56,
      left: 0,
      top: 20,
      [theme.breakpoints.up('md')]: {
        left: 30,
      },
      '& > div': {
        position: 'relative',
        zIndex: 1,
        top: -20,
        left: -20
      },
      '&:after': {
        content: '""',
        top: -3,
        left: -2,
        position: 'absolute',
        width: 54,
        height: 54,
        borderRadius: '50%',
        background: theme.palette.secondary.light,
      },
      '&:before': {
        content: '""',
        width: 60,
        height: 60,
        top: -10,
        left: -2,
        position: 'absolute',
        borderRadius: '50%',
        border: `1px solid ${theme.palette.secondary.main}`,
      }
    },
    [`& .${classes.accent}`]: {
      position: 'absolute',
      fontSize: 64,
      right: -40,
      top: 140,
      '& > div': {
        position: 'relative',
        zIndex: 1,
        top: -20,
        left: -20
      },
      '&:after': {
        content: '""',
        top: -3,
        left: -2,
        position: 'absolute',
        width: 74,
        height: 74,
        borderRadius: '50%',
        background: theme.palette.accent.light,
      },
      '&:before': {
        content: '""',
        width: 77,
        height: 77,
        top: -8,
        left: 0,
        position: 'absolute',
        borderRadius: '50%',
        border: `1px solid ${theme.palette.accent.light}`,
      }
    },
  },
  // screen
  screen: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    [theme.breakpoints.down('lg')]: {
      display: 'none'
    },
    '& span': {
      display: 'block',
      borderRadius: 4,
      overflow: 'hidden',
      position: 'absolute',
      boxShadow: theme.shade.light,
      '& img': {
        width: '100%'
      }
    }
  },
  top: {
    width: 158,
    height: 40,
    top: 40,
    right: -80
  },
  center: {
    width: 86,
    height: 74,
    top: 200,
    left: -100
  },
  bottom: {
    width: 122,
    height: 106,
    bottom: 160,
    right: -160
  },
  // app ui
  appUi: {
    position: 'absolute',
    width: '100%',
    bottom: 60,
    left: 0,
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      bottom: 100
    }
  },
  resume: {
    borderRadius: 40,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    background: `linear-gradient(110deg, ${theme.palette.accent.light} 0%, ${theme.palette.secondary.light} 20%, ${theme.palette.common.white} 40%, ${theme.palette.common.white} 60%, ${theme.palette.primary.light} 90%)`,
    padding: theme.spacing(),
    color: theme.palette.common.black,
    bottom: -60,
    paddingBottom: 60,
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
    '& span': {
      color: 'rgba(0, 0, 0, 0.54)',
    },
    '& h3': {
      fontSize: 18,
      display: 'block',
      fontWeight: theme.typography.fontWeightMedium,
      '& strong': {
        fontWeight: theme.typography.fontWeightMedium,
        fontSize: 26,
      },
      '& i': {
        color: '#30A80F'
      },
    }
  },
  counter: {
    borderRadius: 60,
    display: 'flex',
    zIndex: 1,
    position: 'relative',
    padding: theme.spacing(2),
    background: theme.palette.common.black,
    color: theme.palette.common.white,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      left: theme.direction === 'rtl' ? 'auto' : -90,
      right: theme.direction === 'rtl' ? 90 : 'auto',
      width: 475,
    },
    [theme.breakpoints.between('sm', 'md')]: {
      left: theme.direction === 'rtl' ? 'auto' : -140,
      right: theme.direction === 'rtl' ? 140 : 'auto',
    },
    '& .MuiDivider-root': {
      margin: theme.spacing(0, 2),
      borderColor: theme.palette.common.white,
      opacity: 0.12
    },
  },
  item: {
    fontSize: 20,
    textAlign: 'center',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      fontSize: 14
    },
    '& span': {
      display: 'flex',
      '& img': {
        marginRight: theme.spacing(),
        width: 29,
        height: 29,
        borderRadius: '50%',
        [theme.breakpoints.down('sm')]: {
          width: 20,
          height: 20,
        },
      }
    },
    '& strong': {
      display: 'block',
      fontWeight: theme.typography.fontWeightMedium,
    }
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default personStyles;
