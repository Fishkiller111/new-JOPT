import { makeStyles } from 'tss-react/mui';
import { alpha } from '@mui/material/styles';
import gradient from 'theme/gradient';

const progressStyles = makeStyles({ uniqId: 'progress' })((theme) => ({
  root: {
    position: 'relative',
    zIndex: 1,
    [theme.breakpoints.between('sm', 'lg')]: {
      paddingTop: theme.spacing(5)
    }
  },
  wrap: {
    '& ul': {
      margin: 0,
      padding: 0,
      '& li': {
        listStyle: 'none',
        marginBottom: theme.spacing(5),
        display: 'flex',
        position: 'relative',
        borderRadius: theme.rounded.medium,
        background: theme.palette.mode === 'dark' ? alpha(theme.palette.primary.dark, 0.5) : alpha(theme.palette.primary.light, 0.5),
        backdropFilter: 'saturate(180%) blur(10px)',
        padding: theme.spacing(3, 2),
        '&:last-child': {
          marginBottom: 0
        },
        '& h6': {
          fontWeight: theme.typography.fontWeightBold
        }
      }
    }
  },
  icon: {
    display: 'flex',
    alignItems: 'center',
    width: 40,
    position: 'relative',
    '& i': {
      position: 'absolute',
      left: 0,
      top: -8,
      color: theme.palette.text.secondary,
      fontSize: 40,
      background: gradient(theme).primary.light,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    },
    '& h6': {
      marginLeft: theme.spacing()
    }
  },
  progress: {
    flex: 1,
    marginLeft: theme.spacing(1)
  },
  text: {
    display: 'flex',
    justifyContent: 'space-between',
    '& p': {
      fontWeight: theme.typography.fontWeightMedium,
    }
  },
  progressBg: {
    borderRadius: 10,
    background: theme.palette.divider,
    height: 10
  },
  bar: {
    borderRadius: 10,
    backgroundImage: `linear-gradient(120deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main});`,
  },
  title: {
    textAlign: 'center',
    textTransform: 'uppercase'
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default progressStyles;
