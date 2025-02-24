import { makeStyles } from 'tss-react/mui';

const featureStyles = makeStyles({ uniqId: 'feature' })((theme, _params, classes) => ({
  root: {
    position: 'relative',
    '& .MuiContainer-root': {
      [theme.breakpoints.between('sm', 'md')]: {
        padding: 0
      }
    }
  },
  desc: {
    position: 'relative',
    zIndex: 60
  },
  item: {
    position: 'relative',
    minHeight: 320,
    marginBottom: theme.spacing(10),
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(5),
    },
    [theme.breakpoints.between('sm', 'md')]: {
      overflow: 'hidden',
      marginBottom: theme.spacing(-5)
    },
    '& h6': {
      marginBottom: theme.spacing(4),
    },
    [`&.${classes.last}`]: {
      [theme.breakpoints.down('sm')]: {
        marginBottom: 0
      }
    }
  },
  illustration: {
    position: 'relative',
    [`&.${classes.start}`]: {
      [theme.breakpoints.between('sm', 'md')]: {
        left: -200
      }
    },
    '& figure': {
      width: '100%',
      position: 'relative',
      margin: 0,
      [theme.breakpoints.down('sm')]: {
        '& img': {
          margin: '0 auto',
          width: '100%',
          maxWidth: 280,
        }
      },
      [theme.breakpoints.up('sm')]: {
        '& img': {
          maxWidth: 400,
          maxHeight: 500
        }
      }
    }
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default featureStyles;
