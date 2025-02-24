import { makeStyles } from 'tss-react/mui';
import { alpha } from '@mui/material/styles';
import gradient from 'theme/gradient';

const faqStyles = makeStyles({ uniqId: 'faq' })((theme, _params, classes) => ({
  root: {
    position: 'relative',
    padding: theme.spacing(0, 2),
  },
  content: {
    [`& .${classes.icon}`]: {
      position: 'absolute',
      top: theme.spacing(2.5),
      right: theme.spacing(1)
    }
  },
  accordion: {
    position: 'relative',
    zIndex: 1,
  },
  item: {
    marginBottom: theme.spacing(3),
  },
  paper: {
    borderRadius: `${theme.rounded.medium} !important`,
    background: alpha(theme.palette.background.paper, 0.7),
    backdropFilter: 'saturate(180%) blur(20px)',
    overflow: 'hidden',
  },
  heading: {
    fontWeight: theme.typography.fontWeightMedium,
    padding: theme.spacing(2, 4, 2, 0),
    fontSize: 24,
    [theme.breakpoints.down('sm')]: {
      fontSize: 16,
    }
  },
  expanded: {
    background: theme.palette.primary.main,
    [`& .${classes.heading}`]: {
      color: theme.palette.common.white,
      paddingTop: 0,
      paddingBottom: 0
    },
    [`& .${classes.icon}`]: {
      color: theme.palette.common.white,
      transform: 'rotate(180deg)'
    }
  },
  detail: {
    background: theme.palette.primary.main,
    '& p': {
      color: theme.palette.common.white,
      [theme.breakpoints.up('sm')]: {
        fontSize: 24
      }
    }
  },
  icon: {
    color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.main
  },
  helpPaper: {
    overflow: 'visible',
    background: theme.palette.mode === 'dark' ? gradient(theme).double.dark : gradient(theme).double.light,
    padding: theme.spacing(2, 1),
    '& img': {
      width: '100%',
      maxWidth: 390,
      [theme.breakpoints.up('lg')]: {
        width: 390
      }
    },
  },
  topicList: {
    padding: 0,
    marginBottom: theme.spacing(3),
    '& li': {
      padding: theme.spacing(2, 0),
      listStyle: 'none',
      '& a': {
        textDecoration: 'none',
        color: theme.palette.text.primary,
        '&:hover': {
          textDecoration: 'underline'
        }
      }
    }
  },
  shortcut: {
    paddingTop: theme.spacing(5),
    zIndex: 3,
    position: 'relative',
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(0, 10)
    },
    [theme.breakpoints.down('lg')]: {
      overflow: 'hidden',
    },
    [theme.breakpoints.down('sm')]: {
      padding: 0
    },
  },
  scrollTablet: {
    [theme.breakpoints.up('md')]: {
      overflow: 'hidden',
    },
    [theme.breakpoints.down('sm')]: {
      flexFlow: 'row wrap',
      width: '100%',
      overflow: 'auto',
      paddingBottom: theme.spacing(2),
      flexWrap: 'nowrap',
      padding: 0,
      margin: 0,
      '& > div': {
        paddingTop: theme.spacing(3)
      }
    }
  },
  shortcutBtn: {
    position: 'relative',
    textAlign: 'center',
    minWidth: 200,
    minHeight: 220,
    margin: theme.spacing(2),
    [theme.breakpoints.down('md')]: {
      margin: theme.spacing(0, 1),
    },
    '& p': {
      position: 'relative',
    },
    '& strong': {
      textTransform: 'capitalize',
      color: theme.palette.text.primary,
      position: 'relative'
    },
    '& a, button': {
      position: 'relative',
      color: theme.palette.text.primary,
      border: '1px solid',
      borderRadius: theme.rounded.medium,
      background: theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.background.paper,
      display: 'block',
      textAlign: 'center',
      padding: theme.spacing(2),
      '&:before': {
        content: '""',
        borderRadius: theme.rounded.medium,
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        opacity: 0.5,
        background: theme.palette.mode === 'dark' ? theme.palette.common.black : theme.palette.common.white,
      }
    },
    '&:before': {
      top: 0,
      left: theme.spacing(-2),
      content: '""',
      position: 'absolute',
      width: '100%',
      height: '100%',
      border: '1px solid',
      borderRadius: theme.rounded.medium,
      transform: 'rotate(-5deg)',
      [theme.breakpoints.down('md')]: {
        display: 'none'
      }
    },
    [`&.${classes.primary}`]: {
      '& a, button': {
        borderColor: theme.palette.primary.main
      },
      '&:before': {
        borderColor: theme.palette.primary.main
      }
    },
    [`&.${classes.secondary}`]: {
      '& a, button': {
        borderColor: theme.palette.secondary.main
      },
      '&:before': {
        borderColor: theme.palette.secondary.main
      }
    },
    [`&.${classes.accent}`]: {
      '& a, button': {
        borderColor: theme.palette.accent.main
      },
      '&:before': {
        borderColor: theme.palette.accent.main
      }
    }
  },
  icon3d: {
    marginBottom: theme.spacing(2),
    '& > div': {
      overflow: 'hidden',
      transform: 'scale(2)',
      position: 'relative',
      top: -40,
      fontSize: 80,
      [theme.breakpoints.down('sm')]: {
        fontSize: 60,
        top: -24
      }
    }
  },
  helpGroup: {
    [theme.breakpoints.between('sm', 'md')]: {
      display: 'flex',
      justifyContent: 'center',
      '& button, a': {
        margin: theme.spacing(0, 0.5),
        marginBottom: 0
      }
    },
    [theme.breakpoints.down('md')]: {
      '& button, a': {
        fontSize: 14,
        padding: theme.spacing(1, 2),
      },
      '& svg': {
        width: 22,
        height: 22
      }
    },
    [theme.breakpoints.down('sm')]: {
      '& button, a': {
        marginBottom: theme.spacing(3)
      }
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default faqStyles;
