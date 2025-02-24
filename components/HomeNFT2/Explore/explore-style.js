import { makeStyles } from 'tss-react/mui';

const exploreStyle = makeStyles({ uniqId: 'explore' })(theme => ({
  root: {
    position: 'relative',
    zIndex: 5,
  },
  categories: {
    marginTop: theme.spacing(10),
    [theme.breakpoints.up('sm')]: {
      width: '100%',
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default exploreStyle;
