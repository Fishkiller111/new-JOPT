import { makeStyles } from 'tss-react/mui';
import gradient from 'theme/gradient';

const useStyles = makeStyles({ uniqId: 'case_card' })((theme, _params, classes) => ({
  playlistCard: {
    overflow: 'visible',
    borderRadius: theme.rounded.big,
    marginBottom: theme.spacing(2),
    position: 'relative',
    background: '#424242',
    boxShadow: theme.shadows[8],
    display: 'flex',
    justifyContent: 'center',
    height: 480,
    [theme.breakpoints.down('md')]: {
      height: 320
    },
    '& .MuiTouchRipple-root': {
      zIndex: 2
    },
    [`&.${classes.primaryDark}`]: {
      background: gradient(theme).primary.dark
    },
    [`&.${classes.primaryLight}`]: {
      background: gradient(theme).primary.light
    },
    [`&.${classes.secondaryDark}`]: {
      background: gradient(theme).secondary.dark
    },
    [`&.${classes.secondaryLight}`]: {
      background: gradient(theme).secondary.light
    },
    [`&.${classes.accent}`]: {
      background: gradient(theme).accent
    },
    [`&.${classes.doubleLight}`]: {
      background: gradient(theme).double.light
    },
    [`&.${classes.doubleMain}`]: {
      background: gradient(theme).double.main
    },
    [`&.${classes.doubleDark}`]: {
      background: gradient(theme).double.dark
    },
    [`&.${classes.tripleLight}`]: {
      background: gradient(theme).triple.light
    },
    [`&.${classes.tripleMain}`]: {
      background: gradient(theme).triple.main
    },
    [`&.${classes.tripleDark}`]: {
      background: gradient(theme).triple.dark
    },
    [`&.${classes.deco}`]: {
      [theme.breakpoints.down('lg')]: {
        '&:before, &:after': {
          display: 'none'
        }
      },
      '&:before': {
        content: '""',
        position: 'absolute',
        top: 65,
        left: 50,
        width: '85%',
        height: '100%',
        borderRadius: theme.rounded.big,
        background: gradient(theme).triple.main,
        transform: 'rotate(178deg)',
      },
      '&:after': {
        content: '""',
        position: 'absolute',
        top: 90,
        left: 40,
        width: '90%',
        height: '90%',
        borderRadius: theme.rounded.big,
        background: gradient(theme).triple.light,
        transform: 'rotate(3deg)',
      }
    },
    [`& .${classes.figure}`]: {
      borderRadius: theme.rounded.big,
      overflow: 'hidden',
      margin: 0,
      display: 'inline-block',
      width: '100%',
      height: '100%',
      position: 'relative',
      zIndex: 1,
      '& img': {
        objectFit: 'cover',
        width: '100%',
        height: '100%',
        display: 'block',
        position: 'relative',
      }
    },
  },
  property: {
    transition: 'all 0.3s ease-out',
    position: 'absolute',
    zIndex: 1,
    width: '100%',
    height: '100%',
    minHeight: 170,
    borderRadius: theme.rounded.big,
    padding: theme.spacing(2),
    bottom: 0,
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    left: 0,
    color: theme.palette.common.white,
    '&:before': {
      content: '""',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      position: 'absolute',
    },
    [theme.breakpoints.down('lg')]: {
      padding: theme.spacing(1),
      textAlign: 'center',
      bottom: 0,
      [`& .${classes.desc}`]: {
        display: 'none'
      }
    },
    [`&.${classes.primary}`]: {
      background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.4) 30%, ${theme.palette.primary.main} 80%)`,
    },
    [`&.${classes.secondary}`]: {
      background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.4) 30%, ${theme.palette.secondary.main} 80%)`,
    },
    [`&.${classes.accent}`]: {
      background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.4) 30%, ${theme.palette.accent.light} 80%)`,
    }
  },
  desc: {
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: 16,
    position: 'relative'
  },
  user: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
  },
  head: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(3),
    }
  },
  title: {
    textTransform: 'capitalize',
    fontWeight: theme.typography.fontWeightBold,
    fontSize: 36,
    display: 'block',
    lineHeight: 'normal',
    [theme.breakpoints.down('md')]: {
      fontSize: 24
    },
    [`& .${classes.verified}`]: {
      [theme.breakpoints.up('md')]: {
        width: 32,
        height: 32,
      }
    }
  },
  text: {
    display: 'block',
  },
  name: {
    display: 'block',
    fontWeight: theme.typography.fontWeightMedium,
  },
  avatar: {
    width: 24,
    height: 24,
    borderRadius: '50%',
    overflow: 'hidden',
    display: 'block',
    background: theme.palette.background.paper,
    textAlign: 'center',
    marginRight: theme.spacing(1),
    [theme.breakpoints.down('lg')]: {
      display: 'none'
    },
    '& img': {
      display: 'block',
      width: '100%'
    }
  },
  price: {
    position: 'absolute',
    top: 1,
    zIndex: 1,
    fontWeight: theme.typography.fontWeightMedium
  },
  verified: {
    fill: theme.palette.secondary.main,
    width: 16,
    height: 16,
    marginLeft: theme.spacing()
  },
  gallery: {
    position: 'relative',
    width: '100%',
    padding: 0,
    margin: 0,
    display: 'flex',
    marginTop: theme.spacing(3),
    height: 200,
    justifyContent: 'space-between',
    '& li': {
      width: '50%',
      height: '100%',
      overflow: 'hidden',
      marginLeft: '-50%',
      position: 'relative',
      borderRadius: theme.rounded.big,
      '& img': {
        objectFit: 'cover',
        height: '100%',
        width: '100%',
        display: 'block'
      },
      '&:first-of-type': {
        marginLeft: 0
      },
      '& span': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.7)',
        display: 'flex',
        color: theme.palette.common.white,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 24,
        fontWeight: theme.typography.fontWeightMedium,
        '& svg': {
          width: 36,
          height: 36,
          marginRight: theme.spacing(0.5)
        }
      }
    }
  },
  logo: {
    width: 80,
    height: 80,
    display: 'block',
    borderRadius: theme.rounded.medium,
    overflow: 'hidden',
    background: theme.palette.background.paper,
    textAlign: 'center',
    marginRight: theme.spacing(2),
    [theme.breakpoints.down('lg')]: {
      display: 'none'
    },
    '& img': {
      display: 'block',
      width: '100%'
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
