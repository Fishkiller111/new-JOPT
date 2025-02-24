import { makeStyles } from 'tss-react/mui';

const counterStyles = makeStyles({ uniqId: 'counter_landing' })((theme) => ({
  root: {
    position: 'relative',
    paddingBottom: theme.spacing(5),
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default counterStyles;
