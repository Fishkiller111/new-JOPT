import { makeStyles } from 'tss-react/mui';
import { alpha } from '@mui/material/styles';

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
