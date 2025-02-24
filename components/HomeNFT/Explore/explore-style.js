import { makeStyles } from 'tss-react/mui';

const exploreStyle = makeStyles({ uniqId: 'explore' })(theme => ({
  root: {
    position: 'relative',
    zIndex: 5,
    [theme.breakpoints.up('lg')]: {
      marginTop: theme.spacing(15),
    }
  },
  categories: {
    width: '100%',
    marginTop: theme.spacing(10)
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default exploreStyle;
