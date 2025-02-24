import { makeStyles } from 'tss-react/mui';
import gradient from 'theme/gradient';

const useStyles = makeStyles({ uniqId: 'testi' })((theme) => ({
  root: {
    position: 'relative',
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(0, 5),
    },
    '&:before': {
      content: '""',
      width: 250,
      height: 210,
      borderRadius: 40,
      border: `1px solid ${theme.palette.primary.main}`,
      transform: 'rotate(-6deg)',
      top: -15,
      left: 12,
      position: 'absolute',
    }
  },
  paper: {
    borderRadius: 40,
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    border: `1px solid ${theme.palette.secondary.main}`,
    padding: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      justifyContent: 'center',
      textAlign: 'center'
    },
    '& i': {
      position: 'absolute',
      fontSize: 70,
      transform: 'scale(-1, -1)'
    },
  },
  primary: {
    top: -50,
    left: -10,
    color: 'transparent',
    background: `linear-gradient(to bottom, ${theme.palette.primary.dark} 20%, ${theme.palette.primary.main} 85%)`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  secondary: {
    bottom: -40,
    right: -10,
    color: 'transparent',
    background: `linear-gradient(to bottom, ${theme.palette.secondary.main} 20%, ${theme.palette.secondary.dark} 85%)`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  avatar: {
    width: 180,
    height: 180,
    padding: 4,
    background: gradient(theme).triple.light,
    [theme.breakpoints.down('sm')]: {
      width: 100,
      height: 100,
    },
    '& img': {
      borderRadius: '50%'
    }
  },
  content: {
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(3),
    },
    '& p': {
      fontSize: 18,
      marginBottom: theme.spacing(3)
    },
    '& h6': {
      fontWeight: theme.typography.fontWeightMedium,
    },
  },
  captionTitle: {
    fontStyle: 'italic'
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
