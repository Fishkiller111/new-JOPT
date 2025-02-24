import { makeStyles } from 'tss-react/mui';
import { alpha } from '@mui/material/styles';

const headerStyles = makeStyles({ uniqId: 'header' })((theme, _params, classes) => ({
  '@keyframes slideRight': {
    from: {
      opacity: 0,
      transform: 'translateX(-100px)'
    },
    to: {
      opacity: 1,
      transform: 'none'
    }
  },
  header: {
    top: 0,
    color: theme.palette.text.primary,
    background: 'transparent',
    boxShadow: 'none',
    position: 'fixed',
    transition: 'all 0.3s ease',
    left: 0,
    padding: theme.spacing(1),
    zIndex: 1000,
    [theme.breakpoints.up('lg')]: {
      visibility: 'hidden',
      opacity: 0,
    },
    '& .MuiContainer-root': {
      padding: 0
    },
    [`&.${classes.fixed}`]: {
      visibility: 'visible',
      opacity: 1,
      paddingTop: 0,
      paddingBottom: 0,
      backdropFilter: 'saturate(180%) blur(10px)',
      background: alpha(theme.palette.background.paper, 0.8),
      boxShadow: theme.palette.mode === 'dark' ? `0px 1px 36px -16px ${theme.palette.common.black}` : `0px 1px 36px -16px ${theme.palette.primary.light}`,
      [`& .${classes.logo}`]: {
        '& a': {
          color: theme.palette.text.primary,
          '& img': {
            height: 34,
          }
        },
      },
      [`& .${classes.bar}`]: {
        [theme.breakpoints.down('md')]: {
          backgroundColor: theme.palette.text.secondary,
          '&:after, &:before': {
            backgroundColor: theme.palette.text.secondary
          }
        }
      }
    },
    [`&.${classes.openDrawer}`]: {
      zIndex: 1001,
      [theme.breakpoints.up('lg')]: {
        background: 'none',
        backdropFilter: 'none',
      }
    }
  },
  headerContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '& nav': {
      alignItems: 'center',
      display: 'flex'
    }
  },
  logo: {
    flex: 1,
    display: 'flex',
    padding: theme.spacing(0, 2),
    '& a': {
      textDecoration: 'none',
      display: 'flex',
      fontSize: 22,
      color: theme.palette.text.primary,
      alignItems: 'center',
      fontWeight: 500,
      [theme.breakpoints.down('md')]: {
        color: theme.palette.common.white
      }
    },
    '& img': {
      transition: 'all 0.3s ease',
    }
  },
  invert: {},
  navLogo: {
    width: '100%',
    [theme.breakpoints.down('lg')]: {
      marginRight: theme.spacing(2)
    },
    [`&.${classes.invert}`]: {
      [`& .${classes.logo}`]: {
        '& a': {
          color: theme.palette.text.primary,
        }
      },
      [`& .${classes.mobileMenu}`]: {
        [`& .${classes.bar}`]: {
          [theme.breakpoints.down('md')]: {
            backgroundColor: theme.palette.text.secondary,
            '&:after, &:before': {
              backgroundColor: theme.palette.text.secondary
            },
          }
        }
      },
    }
  },
  titleMenu: {
    textTransform: 'capitalize'
  },
  paperNav: {
    background: alpha(theme.palette.background.paper, 0.85),
    backdropFilter: 'saturate(180%) blur(10px)',
    width: '100%',
    position: 'fixed',
    zIndex: 50,
    height: '100%',
  },
  mobileMenu: {
    [theme.breakpoints.up('sm')]: {
      margin: theme.spacing(0, 1),
    },
    [theme.breakpoints.down('lg')]: {
      transform: 'scale(-1)',
    },
    [theme.breakpoints.down('md')]: {
      padding: 0
    },
    [`& .${classes.bar}`]: {
      backgroundColor: theme.palette.text.secondary,
      '&:after, &:before': {
        backgroundColor: theme.palette.text.secondary
      },
      [theme.breakpoints.down('md')]: {
        backgroundColor: theme.palette.common.white,
        '&:after, &:before': {
          backgroundColor: theme.palette.common.white
        },
      }
    }
  },
  rootMenu: {
    position: 'relative',
    display: 'block',
    width: '100%',
    height: '100%',
    marginTop: 100,
  },
  detail: {
    position: 'relative',
    padding: theme.spacing(0, 5),
    textAlign: 'left',
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(0, 4),
      marginTop: 100,
    },
    [theme.breakpoints.down('sm')]: {
      paddingBottom: theme.spacing(5)
    }
  },
  nameDeco: {
    margin: 0,
    padding: 0,
    transform: 'rotate(-90deg)',
    transformOrigin: 'top right',
    letterSpacing: 10,
    position: 'absolute',
    fontWeight: theme.typography.fontWeightBold,
    textTransform: 'uppercase',
    color: theme.palette.text.primary,
    top: 0,
    left: '-50%',
    fontSize: 18,
    opacity: 0.3,
    zIndex: 20,
  },
  logoName: {
    color: theme.palette.text.secondary,
    '& img': {
      filter: 'grayscale(1) contrast(0.5) brightness(1.5)',
      width: 80,
      marginBottom: theme.spacing(2)
    },
    '& h4': {
      textTransform: 'uppercase',
    }
  },
  margin: {
    margin: theme.spacing(2)
  },
  socmed: {
    margin: theme.spacing(3, 0, 3, -2),
    '& button': {
      margin: theme.spacing(),
      width: 36,
      height: 36,
    },
    '& i': {
      fontSize: 24
    }
  },
  tw: {
    color: '#20B1D1'
  },
  fb: {
    color: '#193CCC'
  },
  in: {
    color: '#0050FF'
  },
  ig: {
    color: '#A418E6'
  },
  contact: {
    color: theme.palette.text.secondary,
  },
  divider: {
    margin: theme.spacing(1.5),
    border: 'none',
    background: 'none'
  },
  download: {
    marginTop: theme.spacing(3)
  },
  mobileNav: {
    height: '100%',
    position: 'relative',
    overflow: 'auto',
    [`& .${classes.menu}`]: {
      padding: theme.spacing(0, 2),
      overflow: 'auto',
      width: '100%',
      height: '100%',
      listStyle: 'none',
      '& li': {
        textAlign: 'left',
        animationName: '$slideRight',
        animationTimingFunction: 'ease',
        '& a': {
          fontSize: 24,
          marginBottom: theme.spacing(),
          padding: theme.spacing(1, 3),
          color: theme.palette.text.primary,
          [theme.breakpoints.up('sm')]: {
            padding: theme.spacing(1, 4),
          },
          '&:before': {
            content: '""',
            position: 'absolute',
            left: 0,
            opacity: 0.2,
            borderRadius: theme.rounded.medium,
            overflow: 'hidden',
            background: `linear-gradient(120deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
            height: '100%',
            width: 0,
            transition: 'all 0.2s cubic-bezier(0, 0, 0.14, 0.97)'
          },
          '&:hover': {
            background: 'none',
            '&:before': {
              width: '100%'
            },
          }
        }
      },
    }
  },
  menuList: {
    textTransform: 'capitalize',
    '& span': {
      fontSize: 24
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default headerStyles;
