import { makeStyles } from 'tss-react/mui';
import gradient from 'theme/gradient';

const useStyles = makeStyles({ uniqId: 'profile_card' })((theme, _params, classes) => ({
  /* General */
  profileCard: {
    position: 'relative',
    borderRadius: theme.rounded.medium,
    boxShadow: 'none',
    '& a': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
    },
    '& h2': {
      position: 'absolute',
      paddingRight: theme.spacing(2),
      opacity: 0.36,
      right: 0,
      bottom: theme.spacing(),
      background: `linear-gradient(to bottom, ${theme.palette.secondary.light} -10%, transparent 85%)`,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      fontSize: 72,
      fontWeight: theme.typography.fontWeightBold
    }
  },
  inner: {
    borderRadius: theme.rounded.medium,
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(2),
    background: theme.palette.primary.dark,
    color: theme.palette.common.white,
    border: theme.palette.mode === 'dark' ? 'none' : `1px solid ${theme.palette.primary.main}`,
  },
  avatar: {
    margin: 0,
    background: gradient(theme).triple.light,
    padding: 2,
    width: 60,
    height: 60,
    '& img': {
      borderRadius: '50%',
      display: 'block'
    }
  },
  properties: {
    padding: theme.spacing(1, 2),
    fontSize: 12,
    flex: 1,
  },
  title: {
    whiteSpace: 'noWrap',
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: 18
  },
  verified: {
    fill: theme.palette.secondary.main,
    width: 16,
    height: 16,
    marginLeft: theme.spacing()
  },
  action: {
    padding: 0,
    paddingTop: 4,
    display: 'flex',
    '& strong': {
      fontWeight: theme.typography.fontWeightMedium,
    },
    '& p, span': {
      fontSize: 12
    },
    '& > div': {
      marginRight: theme.spacing()
    },
    '& svg': {
      width: 12,
      height: 12,
      top: 2,
      position: 'relative',
      marginRight: theme.spacing(0.5),
    }
  },
  stats: {
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  iconPrimary: {
    fill: theme.palette.primary.main
  },
  iconSecondary: {
    fill: theme.palette.secondary.main
  },
  first: {
    background: gradient(theme).double.main,
    padding: 2,
    [`& .${classes.avatar}`]: {
      width: 94,
      height: 94,
    },
    [`& .${classes.title}`]: {
      fontSize: 36,
      position: 'relative',
      zIndex: 1,
      [theme.breakpoints.down('sm')]: {
        fontSize: 22
      }
    },
    [`& .${classes.action}`]: {
      '& > div': {
        paddingRight: theme.spacing(2),
        position: 'relative',
        zIndex: 1
      }
    },
    '& h2': {
      opacity: 1,
      background: `linear-gradient(to bottom, ${theme.palette.secondary.light} 30%, ${theme.palette.primary.main} 60%, ${theme.palette.primary.dark} 90%)`,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      fontSize: 120,
      top: theme.spacing(-2),
      [theme.breakpoints.up('sm')]: {
        right: theme.spacing(4),
      },
      [theme.breakpoints.down('sm')]: {
        opacity: 0.5
      }
    },
    '& svg': {
      top: 3,
      width: 18,
      height: 18,
    },
    '& p, span': {
      fontSize: 16
    },
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
