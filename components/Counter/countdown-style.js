import { makeStyles } from 'tss-react/mui';
import gradient from 'theme/gradient';

const useStyles = makeStyles({ uniqId: 'countdown' })((theme, _params, classes) => ({
  counterWrap: {
    margin: theme.spacing(5, 0)
  },
  countdown: {
    margin: theme.spacing(5, 0, 4),
    borderRadius: theme.rounded.big,
    padding: theme.spacing(2),
    fontSize: 18,
    maxWidth: 530,
    display: 'block',
    background: theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.5)' : gradient(theme).triple.light,
    backdropFilter: 'saturate(180%) blur(20px)',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      fontSize: 13,
      width: '100%',
    }
  },
  time: {
    display: 'block',
    [`&.${classes.mini}`]: {
      fontSize: 13,
    },
    '& p': {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: 0
    },
    '& strong': {
      fontWeight: theme.typography.fontWeightBold,
      fontSize: 32,
      marginBottom: theme.spacing(1),
      display: 'block',
      [theme.breakpoints.down('sm')]: {
        fontSize: 16
      }
    },
    '& i': {
      margin: theme.spacing(2, 3, 0),
      fontStyle: 'normal',
      [theme.breakpoints.down('sm')]: {
        margin: theme.spacing(2, 1, 0),
      }
    },
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
