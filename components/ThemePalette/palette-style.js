import { makeStyles } from 'tss-react/mui';
import gradient from 'theme/gradient';

const paletteStyles = makeStyles({ uniqId: 'palette' })((theme, _params, classes) => ({
  btn: {
    position: 'fixed',
    display: 'flex',
    flexDirection: 'column',
    right: 10,
    top: '32%',
    zIndex: 9999,
    borderRadius: 8,
    padding: theme.spacing(0.5),
    background: theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.7)' : 'rgba(255, 255, 255, 0.8)',
    backdropFilter: 'saturate(180%) blur(20px)',
    '&:before': {
      borderRadius: 8,
      top: 0,
      left: 0,
      content: '""',
      width: '100%',
      height: '100%',
      position: 'absolute',
      opacity: theme.palette.mode === 'dark' ? 0.5 : 1,
      border: '1px solid transparent',
      borderImageSource: gradient(theme).triple.light,
      backgroundImage: gradient(theme).triple.light,
      borderImageSlice: 1,
      WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
      WebkitMaskComposite: 'xor',
      MaskComposite: 'exclude',
    },
    [theme.breakpoints.down('sm')]: {
      top: '45%',
    },
    [`&.${classes.active}`]: {
      right: 624,
      border: 'none'
    },
    '& svg': {
      width: 32,
      height: 32,
      fill: theme.palette.text.primary,
      [theme.breakpoints.down('sm')]: {
        width: 22,
        height: 22
      }
    },
    '& button': {
      [theme.breakpoints.down('sm')]: {
        padding: 8
      }
    }
  },
  draweBg: {
    background: theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.7)' : 'rgba(255, 255, 255, 0.8)',
    backdropFilter: 'saturate(180%) blur(20px)',
  },
  paper: {
    padding: theme.spacing(2),
    borderRadius: 10
  },
  optWrap: {
    width: 600,
    overflow: 'hidden',
    '& > div': {
      overflow: 'auto',
      height: '100%',
      paddingTop: theme.spacing(10)
    },
    '& header': {
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'row'
      }
    },
    '& .MuiTabs-root': {
      margin: theme.spacing(1),
      flex: 1,
      boxShadow: theme.shadows[3],
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  },
  appbar: {
    background: 'none',
    boxShadow: 'none'
  },
  tabBtn: {
    minWidth: 90,
    fontWeight: theme.typography.fontWeightBold,
  },
  wrapper: {
    justifyContent: 'space-evenly'
  },
  themeSwitched: {
    marginBottom: theme.spacing(3),
    '& h6': {
      marginBottom: theme.spacing(),
    },
    '& label': {
      lineHeight: '40px'
    }
  },
  thumbSwitch: {
    backgroundColor: theme.palette.secondary.main
  },
  trackSwitch: {
    backgroundColor: theme.palette.secondary.main
  },
  swatch: {
    position: 'relative',
    textAlign: 'center',
    padding: 4,
    overflow: 'hidden',
    marginBottom: theme.spacing(2),
    height: 90,
    width: 100,
    borderRadius: 4,
    [`&.${classes.active}`]: {
      boxShadow: `0 0 0 2px ${theme.palette.primary.main}`
    },
    '& span': {
      borderRadius: '50%',
    }
  },
  primary: {
    width: 80,
    height: 80,
    top: 4,
    left: 4,
    display: 'block',
    position: 'absolute',
  },
  secondary: {
    width: 60,
    height: 60,
    display: 'block',
    position: 'absolute',
    top: 4,
    right: 4,
  },
  accent: {
    width: 40,
    height: 40,
    display: 'block',
    position: 'absolute',
    bottom: 15,
    right: 5,
  },
  themeColor: {
    '& h6': {
      marginBottom: theme.spacing(),
    },
  },
  explore: {
    margin: theme.spacing(4, 0),
    '& ul': {
      padding: 0,
      margin: 0,
      '& li': {
        listStyle: 'none',
        display: 'inline-block',
        textAlign: 'center',
        marginBottom: theme.spacing(4),
        width: '33.33%',
        [theme.breakpoints.down('sm')]: {
          width: '50%',
          padding: theme.spacing(0, 0.5)
        },
        '& a': {
          textDecoration: 'none',
          display: 'inline-block',
          fontSize: 12,
          fontWeight: theme.typography.fontWeightMedium,
          color: theme.palette.text.primary,
          transition: 'all 0.3s ease',
          top: 0,
          position: 'relative',
          '&:hover': {
            color: theme.palette.text.primary,
            top: -5
          },
          '& figure': {
            margin: theme.spacing(0, 0, 1, 0),
            overflow: 'hidden',
            borderRadius: 6,
            boxShadow: theme.shadows[4],
            [theme.breakpoints.up('sm')]: {
              height: 98,
              width: 170,
            }
          },
          '& img': {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block'
          }
        }
      }
    }
  },
  marginBottom: {
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(3)
    }
  },
  lyBtn: {
    display: 'block',
    textAlign: 'center',
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: 4,
    paddingBottom: 2,
    margin: theme.spacing(),
    textTransform: 'uppercase',
    fontWeight: theme.typography.fontWeightBold,
    fontSize: 12,
    [`&.${classes.active}`]: {
      border: `2px solid ${theme.palette.primary.main}`
    },
    '& img': {
      width: '100%',
      display: 'block',
      margin: `0 auto ${theme.spacing()}px`,
      borderRadius: 4,
      boxShadow: theme.shade.light
    }
  },
  tooltip: {
    textTransform: 'capitalize'
  }
}));

export default paletteStyles;
