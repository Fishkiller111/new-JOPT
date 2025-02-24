import { makeStyles } from 'tss-react/mui';

const footerStyles = makeStyles({ uniqId: 'footer' })(theme => ({
  root: {
    position: 'relative',
    zIndex: 20,
    overflow: 'hidden',
    textAlign: 'center',
    paddingBottom: theme.spacing(10),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(10, 0, 10),
    },
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(15, 0),
    },
  },
  logo: {
    marginTop: theme.spacing(5),
    '& img': {
      marginBottom: theme.spacing(2)
    },
    '& h4': {
      fontWeight: theme.typography.fontWeightRegular,
    }
  },
  margin: {
    margin: theme.spacing(2)
  },
  socmed: {
    margin: theme.spacing(3, 0),
    '& button': {
      margin: theme.spacing(),
      width: 36,
      height: 36,
      '& i': {
        color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark
      }
    },
    '& i': {
      fontSize: 24
    }
  },
  contact: {
    color: theme.palette.text.secondary,
  },
  divider: {
    margin: theme.spacing(1.5),
    border: 'none',
    background: 'none'
  },
  download: {
    margin: theme.spacing(2, 0)
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default footerStyles;
