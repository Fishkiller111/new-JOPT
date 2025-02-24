import { makeStyles } from 'tss-react/mui';
import gradient from 'theme/gradient';

const useStyles = makeStyles({ uniqId: 'paper' })((theme, _params, classes) => ({
  root: {
    padding: theme.spacing(2),
    boxShadow: theme.shade.light,
    color: theme.palette.text.primary,
    overflow: 'hidden',
    [`&.${classes.noMargin}`]: {
      margin: 0
    },
  },
  descBlock: {
    display: 'flex',
    marginBottom: theme.spacing(2),
  },
  titleText: {
    flex: 1
  },
  title: {
    position: 'relative',
    textTransform: 'capitalize',
    fontSize: 20,
    fontWeight: theme.typography.fontWeightBold,
    [theme.breakpoints.down('sm')]: {
      fontWeight: 600,
      marginBottom: theme.spacing(1)
    }
  },
  description: {
    maxWidth: 960,
    paddingTop: theme.spacing(0.5),
  },
  content: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(1),
    borderRadius: theme.rounded.medium,
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(2)
    }
  },
  noMargin: {},
  overflowX: {
    width: '100%',
    overflowX: 'auto',
  },
  iconTitle: {
    width: 36,
    height: 36,
    textAlign: 'center',
    lineHeight: '44px',
    verticalAlign: 'middle',
    marginRight: theme.spacing(2),
    [`&.${classes.gradientIcon}`]: {
      '& i': {
        color: 'transparent',
        background: `linear-gradient(to bottom, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 85%)`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }
    },
    '& i': {
      fontSize: 40,
      verticalAlign: 'baseline',
      color: theme.palette.primary.main,
    },
  },
  primary: {
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.main,
    [`& .${classes.title}`]: {
      color: theme.palette.grey[100],
      '&:after': {
        borderBottom: `5px solid ${theme.palette.primary.light}`
      }
    },
    [`& .${classes.description}`]: {
      color: theme.palette.grey[100],
    },
    [`& .${classes.iconTitle}`]: {
      '& i': {
        color: theme.palette.common.white
      }
    }
  },
  secondary: {
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.main,
    [`& .${classes.title}`]: {
      color: theme.palette.grey[100],
      '&:after': {
        borderBottom: `5px solid ${theme.palette.primary.light}`
      }
    },
    [`& .${classes.description}`]: {
      color: theme.palette.grey[100],
    },
    [`& .${classes.iconTitle}`]: {
      '& i': {
        color: theme.palette.common.white
      }
    }
  },
  gradient: {
    color: theme.palette.common.black,
    background: gradient(theme).triple.light,
    [`& .${classes.iconTitle}`]: {
      '& i': {
        color: theme.palette.common.black
      }
    }
  },
  transparent: {
    background: 'none',
    margin: 0,
    padding: 0,
    boxShadow: 'none'
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
