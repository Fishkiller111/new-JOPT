import { makeStyles } from 'tss-react/mui';

const newReleaseStyles = makeStyles({ uniqId: 'new_release' })((theme) => ({
  mainFeature: {
    position: 'relative',
    display: 'block',
    [theme.breakpoints.up('lg')]: {
      paddingBottom: theme.spacing(8),
    },
  },
  card: {
    '& > a': {
      height: 400,
      [theme.breakpoints.down('lg')]: {
        height: 350
      },
      [theme.breakpoints.down('sm')]: {
        height: 220
      }
    }
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default newReleaseStyles;
