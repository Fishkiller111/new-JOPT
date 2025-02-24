import { makeStyles } from 'tss-react/mui';
import gradient from 'theme/gradient';

const titleStyles = makeStyles({ uniqId: 'title' })((theme, _params, classes) => ({
  left: {
    textAlign: 'left',
    [`&.${classes.centerMobile}`]: {
      [theme.breakpoints.down('md')]: {
        textAlign: 'center',
      }
    }
  },
  right: {
    textAlign: 'right',
    [`&.${classes.centerMobile}`]: {
      [theme.breakpoints.down('md')]: {
        textAlign: 'center',
      }
    }
  },
  center: {
    textAlign: 'center',
  },
  title: {
    display: 'block',
    position: 'relative',
    marginBottom: theme.spacing(10),
    '& h3': {
      color: theme.palette.text.primary,
      fontWeight: theme.typography.fontWeightBold,
      fontSize: 46,
      textTransform: 'capitalize',
      [theme.breakpoints.down('lg')]: {
        fontSize: 38,
        lineHeight: '50px',
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: 28,
        lineHeight: '32px',
      },
    },
    '&:after': {
      content: '""',
      width: 70,
      height: 12,
      bottom: -32,
      borderRadius: 12,
      position: 'absolute',
      background: gradient(theme).triple.light,
    },
    '&:before': {
      content: '""',
      width: 12,
      height: 12,
      borderRadius: '50%',
      background: gradient(theme).triple.light,
      position: 'absolute',
      bottom: -32,
    },
    '& strong': {
      color: theme.palette.text.primary,
    },
    [`&.${classes.left}`]: {
      '&:before': {
        left: 0,
      },
      '&:after': {
        left: 20,
      },
      [`&.${classes.centerMobile}`]: {
        [theme.breakpoints.down('md')]: {
          '&:before': {
            left: '50%',
            marginLeft: -43,
          },
          '&:after': {
            left: '50%',
            marginLeft: -23,
          }
        }
      }
    },
    [`&.${classes.right}`]: {
      '&:before': {
        right: 0,
      },
      '&:after': {
        right: 20,
      },
      [`&.${classes.centerMobile}`]: {
        [theme.breakpoints.down('md')]: {
          '&:before': {
            left: '50%',
            marginLeft: -43,
          },
          '&:after': {
            left: '50%',
            marginLeft: -23,
          }
        }
      }
    },
    [`&.${classes.center}`]: {
      '&:before': {
        left: '50%',
        marginLeft: -43,
      },
      '&:after': {
        left: '50%',
        marginLeft: -23,
      }
    },
    [`&.${classes.dark}`]: {
      '& h3': {
        color: theme.palette.common.white,
      }
    }
  },
  titleSecondary: {
    display: 'block',
    position: 'relative',
    margin: theme.spacing(4, 0),
    textTransform: 'capitalize',
    [theme.breakpoints.down('md')]: {
      margin: theme.spacing(0, 0, 4)
    },
    [`&.${classes.primary}`]: {
      color: theme.palette.primary.main,
      background: theme.palette.mode === 'dark' ? `linear-gradient(148deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)` : `linear-gradient(148deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      '&:after': {
        background: theme.palette.mode === 'dark' ? `linear-gradient(148deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)` : `linear-gradient(148deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
      }
    },
    [`&.${classes.secondary}`]: {
      color: theme.palette.secondary.main,
      background: theme.palette.mode === 'dark' ? `linear-gradient(148deg, ${theme.palette.common.white} 0%, ${theme.palette.secondary.main} 100%)` : `linear-gradient(148deg, ${theme.palette.secondary.dark} 0%, ${theme.palette.secondary.main} 100%)`,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      '&:after': {
        background: theme.palette.mode === 'dark' ? `linear-gradient(148deg, ${theme.palette.secondary.light} 0%, ${theme.palette.secondary.main} 100%)` : `linear-gradient(148deg, ${theme.palette.secondary.dark} 0%, ${theme.palette.secondary.main} 100%)`,
      }
    },
    [`&.${classes.accent}`]: {
      color: theme.palette.accent.main,
      background: theme.palette.mode === 'dark' ? `linear-gradient(148deg, ${theme.palette.accent.light} 0%, ${theme.palette.accent.main} 100%)` : `linear-gradient(148deg, ${theme.palette.accent.light} 0%, ${theme.palette.accent.main} 100%)`,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      '&:after': {
        background: `linear-gradient(148deg, ${theme.palette.accent.light} 0%, ${theme.palette.accent.main} 100%)`
      }
    },
    '& h4': {
      fontSize: 32,
      fontWeight: theme.typography.fontWeightMedium,
      [theme.breakpoints.down('sm')]: {
        fontSize: 24,
        lineHeight: '36px',
      },
    },
    '&:after': {
      content: '""',
      width: 17,
      height: 17,
      borderRadius: '50%',
      position: 'absolute'
    },
    [`&.${classes.left}`]: {
      paddingLeft: theme.spacing(4),
      '&:after': {
        left: 0,
        top: 12,
      }
    },
    [`&.${classes.right}`]: {
      paddingRight: theme.spacing(4),
      '&:after': {
        right: 0,
        top: 12,
      }
    },
    [`&.${classes.center}`]: {
      marginBottom: theme.spacing(6),
      '&:after': {
        left: '50%',
        marginLeft: -8,
        bottom: -35
      }
    },
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default titleStyles;
