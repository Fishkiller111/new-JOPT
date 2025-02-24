import { makeStyles } from 'tss-react/mui';
import { darken } from '@mui/material/styles';

const integrationStyle = makeStyles({ uniqId: 'integration' })((theme, _params, classes) => ({
  root: {
    position: 'relative',
    zIndex: 12,
  },
  background: {
    direction: 'ltr',
    borderRadius: '60px 60px 0 0',
    position: 'relative',
    overflow: 'hidden',
    background: theme.palette.mode === 'dark' ? `linear-gradient(to right, ${theme.palette.primary.dark} ${theme.direction === 'rtl' ? '-10%' : '10%'}, ${theme.palette.secondary.dark} 40%, ${theme.palette.secondary.dark} 70%, ${theme.palette.secondary.main} 100%)` : `linear-gradient(to right, ${theme.palette.primary.light} ${theme.direction === 'rtl' ? '-10%' : '10%'}, ${theme.palette.common.white} 40%, ${theme.palette.common.white} 70%, ${theme.palette.secondary.light} 100%)`,
    padding: theme.spacing(10, 0),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(10, 0, 20),
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
    opacity: 0.2,
    '& span': {
      position: 'absolute',
    }
  },
  ovalRight: {
    width: 1025,
    height: 2136,
    top: 100,
    right: 400,
    opacity: 0.3,
    background: `linear-gradient(172deg, ${theme.palette.primary.main} 16%, ${theme.palette.common.black} 56%, ${theme.palette.accent.main} 98%)`
  },
  ovalTop: {
    width: 1612,
    height: 1612,
    top: -100,
    left: -400,
    opacity: 0.85,
    background: `linear-gradient(144deg, ${theme.palette.accent.main} 0%, ${theme.palette.common.white} 100%)`
  },
  ovalBottom: {
    width: 1312,
    height: 1312,
    top: -600,
    left: 0,
    opacity: 0.3,
    background: theme.palette.primary.dark
  },
  grid: {
    textAlign: 'center',
    [theme.breakpoints.up('lg')]: {
      margin: theme.spacing(0, 5),
    },
    [theme.breakpoints.down('md')]: {
      marginBottom: theme.spacing(10),
    }
  },
  timeline: {
    position: 'relative',
    marginTop: theme.spacing(10),
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(15),
    },
    '& ul': {
      listStyle: 'none',
      padding: 0,
      paddingLeft: theme.spacing(3),
      margin: 0,
      [theme.breakpoints.down('sm')]: {
        padding: 0
      },
      '& li': {
        '& strong': {
          fontWeight: theme.typography.fontWeightMedium
        }
      }
    },
  },
  text: {
    position: 'relative',
    display: 'block',
    '& p': {
      [theme.breakpoints.down('md')]: {
        marginBottom: 0
      }
    },
    '&:after': {
      border: `6px solid ${theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.common.white}`,
      [theme.breakpoints.down('lg')]: {
        display: 'none'
      },
    },
    [theme.breakpoints.down('md')]: {
      marginBottom: 0
    },
    [theme.breakpoints.down('md')]: {
      fontSize: 18,
      '&:after': {
        display: 'none'
      }
    },
    [theme.breakpoints.down('sm')]: {
      margin: 0
    }
  },
  item: {
    margin: theme.spacing(0, 3),
    '& h2': {
      fontSize: 96,
      textTransform: 'uppercase',
      fontWeight: theme.typography.fontWeightBold,
      marginBottom: -60,
      [theme.breakpoints.down('lg')]: {
        fontSize: 72,
        marginBottom: -48,
      },
      [theme.breakpoints.down('md')]: {
        fontSize: 56
      }
    },
    '& h3': {
      fontWeight: theme.typography.fontWeightBold,
      fontSize: 64,
      [theme.breakpoints.down('lg')]: {
        fontSize: 48
      },
      [theme.breakpoints.down('md')]: {
        fontSize: 36,
        marginTop: theme.spacing(2)
      }
    },
    '& p': {
      margin: theme.spacing(4, 0),
      fontSize: 18,
    },
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
    },
  },
  leftSide: {
    '& li': {
      textAlign: 'right',
      marginBottom: theme.spacing(11),
      '& h2': {
        background: `linear-gradient(to bottom, ${theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.main} 10%, transparent 70%)`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      },
      [theme.breakpoints.down('md')]: {
        marginBottom: theme.spacing(10)
      },
      [theme.breakpoints.down('sm')]: {
        marginBottom: theme.spacing(5)
      },
      [`& .${classes.item}`]: {
        justifyContent: 'flex-end',
      }
    },
    [`& .${classes.text}`]: {
      '&:after': {
        content: '""',
        width: 24,
        height: 24,
        borderRadius: '50%',
        position: 'absolute',
        top: 84,
        right: -82,
        background: theme.palette.primary.light,
        [theme.breakpoints.down('lg')]: {
          right: -150
        }
      }
    },
  },
  rightSide: {
    '& li': {
      '& h2': {
        background: `linear-gradient(to bottom, ${theme.palette.secondary.main} 20%, transparent 70%)`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      },
      [theme.breakpoints.up('md')]: {
        marginTop: theme.spacing(11)
      },
      [theme.breakpoints.down('md')]: {
        marginBottom: theme.spacing(10)
      },
      [theme.breakpoints.down('sm')]: {
        marginBottom: theme.spacing(5)
      }
    },
    [`& .${classes.text}`]: {
      '&:after': {
        content: '""',
        width: 24,
        height: 24,
        borderRadius: '50%',
        position: 'absolute',
        top: 84,
        left: -94,
        background: theme.palette.secondary.light,
        [theme.breakpoints.down('lg')]: {
          left: -145
        }
      }
    },
  },
  solidDivider: {
    position: 'absolute',
    left: 'calc(50% + 3px)',
    top: 140,
    width: 6,
    height: 'calc(100% - 180px)',
    borderRadius: 6,
    opacity: theme.palette.mode === 'dark' ? 0.2 : 0.05,
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.common.white : theme.palette.common.black,
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  yearTitle: {
    position: 'absolute',
    left: 0,
    width: '100%',
    textAlign: 'center',
    top: 80,
    [theme.breakpoints.down('lg')]: {
      display: 'none'
    }
  },
  dashedDivider: {
    position: 'absolute',
    opacity: theme.palette.mode === 'dark' ? 0.2 : 0.05,
    left: 'calc(50% + 4px)',
    top: '50%',
    width: 4,
    height: '63%',
    borderRadius: 2,
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.common.white : theme.palette.common.black,
    [theme.breakpoints.down('md')]: {
      display: 'none'
    },
    '&:before': {
      content: '""',
      position: 'absolute',
      left: 'calc(50% + -1px)',
      top: '-23%',
      width: 2,
      height: '20%',
      borderRadius: 2,
      backgroundColor: theme.palette.mode === 'dark' ? theme.palette.common.white : theme.palette.common.black,
    },
    '&:after': {
      content: '""',
      position: 'absolute',
      left: 'calc(50% + -3px)',
      top: '103%',
      width: 6,
      height: '60%',
      borderRadius: 6,
      backgroundColor: theme.palette.mode === 'dark' ? theme.palette.common.white : theme.palette.common.black,
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default integrationStyle;
