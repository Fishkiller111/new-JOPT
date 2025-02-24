import { makeStyles } from 'tss-react/mui';
import gradient from 'theme/gradient';

const useStyles = makeStyles({ uniqId: 'profile_card' })((theme, _params, classes) => ({
  /* General */
  profileCard: {
    position: 'relative',
    marginBottom: theme.spacing(5)
  },
  avatar: {
    position: 'relative',
    '& svg': {
      position: 'absolute',
    },
    '& figure': {
      margin: 0,
      display: 'flex',
      justifyContent: 'center',
      position: 'relative',
      zIndex: 1,
      '& img': {
        display: 'block'
      }
    }
  },
  socmed: {
    marginTop: theme.spacing(2),
    '& button, a': {
      marginRight: theme.spacing(1),
      [theme.breakpoints.up('sm')]: {
        marginRight: theme.spacing(2),
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: 16,
        padding: theme.spacing(1),
        width: 20,
        height: 20
      }
    }
  },
  bg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    bottom: 0,
    '& span': {
      position: 'absolute',
      width: '100%',
      height: '100%',
    }
  },
  primary: {
    stroke: theme.palette.primary.main,
    top: 20,
    left: 10
  },
  secondary: {
    stroke: theme.palette.secondary.main,
    top: 20,
    left: -10
  },
  property: {
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center'
    },
    '& h1, h3': {
      fontWeight: theme.typography.fontWeightBold,
      marginBottom: theme.spacing(2)
    }
  },
  link: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  big: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
    [`& .${classes.avatar}`]: {
      position: 'relative',
      width: 400,
      height: 380,
      [theme.breakpoints.down('md')]: {
        width: 220,
        height: 200,
      },
      '& svg': {
        width: 410,
        height: 350,
        [theme.breakpoints.down('md')]: {
          display: 'none'
        }
      },
      '& figure': {
        width: 400,
        height: 360,
        borderRadius: '50%',
        marginTop: -1,
        overflow: 'hidden',
        [theme.breakpoints.down('md')]: {
          width: 220,
          height: 195,
        },
      }
    },
    [`& .${classes.bg}`]: {
      WebkitMaskImage: 'url(/images/decoration/deco-liquid-fill2.svg)',
      MaskImage: 'url(/images/decoration/deco-liquid-fill2.svg)',
      WebkitMaskRepeat: 'no-repeat',
      MaskSize: '100% 100%',
      WebkitMaskSize: '100% 100%',
      '& span': {
        background: gradient(theme).double.main,
        '&:before': {
          content: '""',
          height: '100%',
          width: '25%',
          display: 'block',
          position: 'absolute',
          top: 0,
          left: '18%',
          background: 'rgba(0, 0, 0, 0.2)',
          filter: 'blur(20px)'
        }
      }
    },
    [`& .${classes.property}`]: {
      '& h1': {
        fontSize: 60,
      },
      '& h3': {
        fontSize: 26,
      },
      '& p': {
        fontSize: 18,
      },
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
      },
      [theme.breakpoints.down('md')]: {
        '& h1': {
          fontSize: 40,
        },
        '& h3': {
          fontSize: 18,
        },
        '& p': {
          fontSize: 16,
        },
      }
    },
    [`& .${classes.socmed}`]: {
      '& button, a': {
        background: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.main,
        width: 38,
        height: 38,
        [theme.breakpoints.down('md')]: {
          width: 32,
          height: 32,
        },
        '& i': {
          color: theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.common.white,
        }
      }
    }
  },
  medium: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
    [`& .${classes.avatar}`]: {
      position: 'relative',
      width: 203,
      height: 246,
      '& svg': {
        width: 203,
        height: 246,
      },
      '& figure': {
        width: 193,
        height: 220,
        borderRadius: 193,
        marginTop: 7,
        overflow: 'hidden',
      }
    },
    [`& .${classes.bg}`]: {
      WebkitMaskImage: 'url(/images/decoration/deco-leaf-fill2.svg)',
      MaskImage: 'url(/images/decoration/deco-leaf-fill2.svg)',
      MaskRepeat: 'no-repeat',
      WebkitMaskRepeat: 'no-repeat',
      MaskSize: '100% 100%',
      WebkitMaskSize: '100% 100%',
      '& span': {
        background: gradient(theme).triple.light,
        '&:before': {
          content: '""',
          height: '100%',
          width: '50%',
          display: 'block',
          position: 'absolute',
          top: 0,
          left: '20%',
          background: 'rgba(0, 0, 0, 0.3)',
          filter: 'blur(20px)'
        }
      }
    },
    [`& .${classes.property}`]: {
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
      },
      '& h1': {
        fontSize: 40,
      },
      '& h3': {
        fontSize: 18,
      },
      '& p': {
        fontSize: 16,
      },
    },
    [`& .${classes.socmed}`]: {
      '& button, a': {
        width: 32,
        height: 32,
        background: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.main,
        '& i': {
          color: theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.common.white,
        }
      }
    }
  },
  small: {
    textAlign: 'center',
    [`& .${classes.decoCircle}`]: {
      position: 'absolute',
      width: 127,
      height: 127,
      borderRadius: '50%',
      top: 0,
      marginLeft: 20,
      border: `1px solid ${theme.palette.secondary.main}`,
      '&:after': {
        content: '""',
        position: 'absolute',
        width: 127,
        height: 127,
        borderRadius: '50%',
        left: -20,
        top: -10,
        border: `1px solid ${theme.palette.primary.main}`,
      },
      '&:before': {
        content: '""',
        position: 'absolute',
        width: 127,
        height: 127,
        borderRadius: '50%',
        left: 0,
        top: 10,
        border: `1px solid ${theme.palette.accent.main}`,
      }
    },
    [`& .${classes.avatar}`]: {
      display: 'flex',
      justifyContent: 'center',
      '& figure': {
        width: 127,
        height: 127,
        borderRadius: '50%',
        overflow: 'hidden',
        marginBottom: theme.spacing(3),
        '& img': {
          display: 'block',
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }
      }
    },
    [`& .${classes.property}`]: {
      '& h1': {
        fontSize: 24,
      },
      '& h3': {
        fontSize: 16,
        fontWeight: theme.typography.fontWeightRegular,
      },
    },
    [`& .${classes.socmed}`]: {
      '& button, a': {
        width: 32,
        height: 32,
        [theme.breakpoints.down('sm')]: {
          marginRight: 0
        },
        '& i': {
          color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
        }
      }
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
