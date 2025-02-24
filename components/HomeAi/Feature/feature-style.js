import { makeStyles } from 'tss-react/mui';

const featureStyles = makeStyles({ uniqId: 'feature' })((theme, _params, classes) => ({
  root: {
    position: 'relative',
  },
  desc: {
    position: 'relative',
    zIndex: 60
  },
  item: {
    position: 'relative',
    minHeight: 320,
    marginBottom: theme.spacing(10),
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
    },
    '& h6': {
      marginBottom: theme.spacing(4),
    },
    [`&.${classes.last}`]: {
      marginBottom: theme.spacing(10),
      [theme.breakpoints.down('sm')]: {
        marginBottom: 0
      }
    }
  },
  illustration: {
    position: 'relative',
    '& figure': {
      width: '100%',
      textAlign: 'center',
      position: 'relative',
      [theme.breakpoints.down('sm')]: {
        margin: '0 auto',
        '& img': {
          width: '100%'
        }
      },
      '& img': {
        maxWidth: 400,
        maxHeight: 500
      }
    }
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default featureStyles;
