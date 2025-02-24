import { makeStyles } from 'tss-react/mui';
import gradient from 'theme/gradient';

const useStyles = makeStyles({ uniqId: 'number_card' })((theme) => ({
  root: {
    position: 'relative',
    textAlign: 'left',
    padding: theme.spacing(3, 0),
    '& h1': {
      position: 'absolute',
      right: 0,
      bottom: 0,
      fontSize: 200,
      fontWeight: theme.typography.fontWeightBold,
      opacity: 0.1,
      height: '100%',
      lineHeight: '240px'
    }
  },
  content: {
    '& i': {
      fontSize: 50,
      marginBottom: theme.spacing(2),
      background: gradient(theme).triple.light,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
