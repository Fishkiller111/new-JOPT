import { makeStyles } from 'tss-react/mui';
import { alpha } from '@mui/material/styles';
import gradient from 'theme/gradient';
import flag from 'public/images/flag-logo.png';

const flagIcon = {
  width: 16,
  height: 16,
  borderRadius: '50%',
  display: 'inline-block',
  position: 'relative',
  marginRight: 5,
  top: 1,
  background: `url(${flag}) no-repeat transparent`,
  backgroundSize: '16px auto',
  '&[class="ar"]': {
    backgroundPosition: '0 3px'
  },
  '&[class="zh"]': {
    backgroundPosition: '0 -12px'
  },
  '&[class="en"]': {
    backgroundPosition: '0 -28px'
  },
  '&[class="de"]': {
    backgroundPosition: '0 -44px'
  },
  '&[class="id"]': {
    backgroundPosition: '0 -62px'
  },
  '&[class="pt"]': {
    backgroundPosition: '0 -79px'
  },
};

const headerStyles = makeStyles({ uniqId: 'header' })((theme, _params, classes) => ({
  header: {
    position: 'fixed',
    color: theme.palette.text.primary,
    background: 'transparent',
    boxShadow: 'none',
    transition: 'all 0.3s ease',
    zIndex: 1000,
    top: 0,
    left: 0,
    [`&.${classes.fixed}`]: {
      background: theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.7)' : 'rgba(255, 255, 255, 0.8)',
      backdropFilter: 'saturate(180%) blur(20px)',
      boxShadow: theme.palette.mode === 'dark' ? `0px 1px 36px -16px ${theme.palette.common.black}` : `0px 1px 36px -16px ${theme.palette.primary.light}`,
      [`& .${classes.logo}`]: {
        '& img': {
          height: 34,
        }
      },
      '& nav': {
        padding: theme.spacing(1, 0),
      },
      [`& .${classes.vDivider}`]: {
        minHeight: theme.spacing(3)
      }
    },
    [`&.${classes.openDrawer}`]: {
      zIndex: 1600,
      boxShadow: 'none',
    }
  },
  noShadow: {
    background: theme.palette.background.paper,
    boxShadow: 'none !important',
  },
  headerContent: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.up('lg')]: {
      justifyContent: 'space-between',
    },
    '& nav': {
      transition: 'all 0.3s ease',
      alignItems: 'center',
      padding: theme.spacing(2, 1),
      [theme.breakpoints.down('lg')]: {
        flex: 1,
        padding: theme.spacing(1, 0),
      },
      display: 'flex'
    }
  },
  settingMenu: {
    width: 240
  },
  logo: {
    '& a': {
      textDecoration: 'none',
      display: 'block'
    },
    '& img': {
      transition: 'all 0.3s ease',
    }
  },
  navMenu: {
    [theme.breakpoints.up('lg')]: {
      '& > *': {
        margin: theme.spacing(0, 1),
      },
    },
    '& ul li': {
      overflow: 'visible'
    }
  },
  mainMenu: {
    '& > ul': {
      listStyle: 'none',
      position: 'relative',
      padding: 0,
      margin: 0,
      '& > li': {
        display: 'inline-block',
        position: 'relative',
        margin: theme.spacing(0, 1),
        listStyle: 'none',
        '& a, button': {
          color: theme.palette.text.primary,
          textTransform: 'capitalize',
          fontWeight: theme.typography.fontWeightMedium
        },
        '&:after': {
          content: '""',
          height: 7,
          borderRadius: 8,
          width: 7,
          margin: '0 auto',
          left: 'calc(50% - 6px)',
          bottom: -5,
          opacity: 0,
          position: 'absolute',
          transformOrigin: 'center left',
          background: theme.palette.mode === 'dark' ? gradient(theme).triple.light : theme.palette.primary.main,
          transition: 'all 0.3s cubic-bezier(0.42, 0.16, 0.21, 0.93)'
        },
        '&:before': {
          content: '""',
          width: 7,
          height: 7,
          borderRadius: '50%',
          opacity: 0,
          left: 'calc(50% - 15px)',
          bottom: -5,
          position: 'absolute',
          background: theme.palette.mode === 'dark' ? gradient(theme).triple.light : theme.palette.primary.main,
          transform: 'scale(0)',
          transition: 'all 0.2s cubic-bezier(0.42, 0.16, 0.21, 0.93)'
        },
        '&:hover': {
          transition: 'all 0.3s ease-out',
          '& a, button': {
            background: 'none',
            color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.main,
          },
          '&:after': {
            width: 20,
            left: 'calc(50% - 3px)',
            opacity: 1,
          },
          '&:before': {
            opacity: 1,
            transform: 'scale(1)',
          },
        },
        '&[class="active"]': {
          color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.main,
          '&:after': {
            width: 20,
            left: 'calc(50% - 3px)',
            opacity: 1,
          },
          '&:before': {
            transform: 'scale(1)',
            opacity: 1
          },
        }
      }
    }
  },
  scrollactiveNav: {
    '& li': {
      '& a, button': {
        padding: theme.spacing(0.5, 2),
        fontSize: 16,
      },
    }
  },
  userMenu: {
    display: 'flex',
    alignItems: 'center',
    '& > div > a': {
      margin: theme.spacing(0, 1),
      '&.MuiButton-text': {
        color: theme.palette.text.primary,
      }
    }
  },
  langMenu: {
    textTransform: 'capitalize',
    '& i': {
      ...flagIcon
    }
  },
  mobileMenu: {
    marginRight: theme.spacing(1),
    padding: 0,
    transform: 'scale(-1)',
    [`& .${classes.bar}`]: {
      backgroundColor: theme.palette.text.secondary,
      '&:after, &:before': {
        backgroundColor: theme.palette.text.secondary
      },
    }
  },
  vDivider: {
    margin: theme.spacing(0, 1, 0, 2),
    borderLeft: `1px solid ${theme.palette.text.disabled}`,
    height: '100%',
    opacity: 0.5,
    minHeight: theme.spacing(6)
  },
  icon: {},
  setting: {
    [`& .${classes.icon}`]: {
      transition: 'all 0.3s ease'
    },
    [`& .${classes.active}`]: {
      transform: 'rotate(30deg)'
    }
  },
  modeSwitch: {
    '& .MuiSwitch-switchBase': {
      color: theme.palette.primary.main
    },
    '& .MuiSwitch-track': {
      backgroundColor: theme.palette.primary.main
    }
  },
  bar: {},
  menu: {},
  megaMenuRoot: {
    width: '100%',
    zIndex: 100,
  },
  multiMenuRoot: {
    minWidth: 200,
    zIndex: 100,
    '& ul': {
      padding: theme.spacing(1),
      '& li': {
        borderRadius: theme.rounded.small,
        minHeight: 48,
        padding: theme.spacing(1),
        '& svg': {
          fill: theme.palette.text.hint,
          transform: theme.direction === 'rtl' ? 'scale(-1)' : 'inherit',
        }
      }
    }
  },
  multiMenu: {
    '& a, button': {
      fontSize: 13,
      lineHeight: '16px',
      padding: theme.spacing(0, 1),
      margin: theme.spacing(0.5, 0)
    }
  },
  megaMenu: {
    background: alpha(theme.palette.background.paper, 0.8),
    backdropFilter: 'saturate(180%) blur(20px)',
    padding: theme.spacing(4, 0),
    borderRadius: 0,
    maxHeight: 500,
    overflow: 'auto',
  },
  thumbMenu: {
    width: '100%',
    height: 78,
    borderRadius: theme.rounded.small,
    margin: theme.spacing(0, 1, 1),
    overflow: 'hidden',
    position: 'relative',
    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  },
  titleMega: {
    color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
    textTransform: 'uppercase',
    fontWeight: theme.typography.fontWeightBold + '!important',
    fontSize: '11px !important'
  },
  menuItem: {
    borderRadius: theme.rounded.small
  },
  thumbLink: {
    flexDirection: 'column',
    marginBottom: theme.spacing(2),
    fontSize: 14,
  },
  link: {
    padding: '0 !important',
    '&:hover': {
      backgroundColor: 'transparent !important'
    }
  },
  current: {
    background: theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
    color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
  },
  /* Search */
  flex: {
    flex: 1
  },
  search: {
    position: 'relative',
    display: 'flex',
    maxWidth: 600,
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(2)
    },
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      flex: 1
    },
    '& form': {
      width: '100%'
    },
    alignItems: 'center',
    [`&.${classes.short}`]: {
      width: 260
    },
    [`& .${classes.input}`]: {
      width: '100%',
      paddingRight: theme.spacing(2),
      background: theme.palette.background.paper,
      paddingLeft: theme.spacing(5),
      borderRadius: 24,
      '& input': {
        maxHeight: 'none',
        padding: theme.spacing(1.5, 0)
      },
      '&:hover': {
        '& fieldset': {
          borderColor: theme.palette.primary.main
        }
      }
    }
  },
  searchIcon: {
    position: 'absolute',
    top: 12,
    left: theme.spacing(1)
  },
  /* Hamburger */
  invert: {},
  navLogo: {
    width: '100%',
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
  paperNav: {
    background: theme.palette.background.paper,
    backdropFilter: 'saturate(180%) blur(20px)',
    width: '100%',
    position: 'fixed',
    zIndex: 50,
    height: '100%',
  },
  mobileNav: {
    [`& .${classes.menu}`]: {
      padding: theme.spacing(0, 2),
      overflow: 'auto',
      top: theme.spacing(15),
      width: '100%',
      position: 'absolute',
      height: 'calc(100% - 80px)',
      listStyle: 'none',
      '& li': {
        textAlign: 'center',
        animationTimingFunction: 'ease',
        '& a': {
          fontSize: 24,
          padding: theme.spacing(1, 4),
          marginBottom: theme.spacing(),
          '&:before': {
            content: '""',
            position: 'absolute',
            left: 0,
            top: 6,
            opacity: 0.2,
            background: `linear-gradient(120deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
            height: '75%',
            width: 0,
            borderRadius: theme.rounded.big,
            transition: 'all 0.2s cubic-bezier(0, 0, 0.14, 0.97)'
          },
          '&:hover': {
            color: theme.palette.primary.main,
            background: 'none',
            '&:before': {
              width: '100%'
            },
          }
        }
      }
    }
  },
  menuList: {
    padding: '6px 0',
    textTransform: 'capitalize',
    fontSize: 13
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default headerStyles;
