import { makeStyles } from 'tss-react/mui';

const newReleaseStyles = makeStyles({ uniqId: 'new_release' })((theme) => ({
  mainFeature: {
    position: 'relative',
    display: 'block',
    overflow: 'hidden',
    [theme.breakpoints.up('lg')]: {
      paddingBottom: theme.spacing(8),
    },
  },
  featureWrap: {
    position: 'relative'
  },
  group: {},
  cards: {
    display: 'flex',
    [theme.breakpoints.up('lg')]: {
      justifyContent: 'flex-end',
    },
    '& > div': {
      [theme.breakpoints.down('lg')]: {
        width: '50%',
        padding: theme.spacing(0.5)
      }
    }
  },
  card: {
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(),
    },
    '& > a': {
      height: 380,
      [theme.breakpoints.up('lg')]: {
        width: 285
      },
      [theme.breakpoints.down('lg')]: {
        height: 300
      },
      [theme.breakpoints.down('sm')]: {
        height: 220
      }
    }
  },
  lower: {
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(10)
    }
  },
  higher: {
    [theme.breakpoints.up('md')]: {
      marginTop: 0
    }
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default newReleaseStyles;
