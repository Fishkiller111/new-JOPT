import { makeStyles } from 'tss-react/mui';

const titleStyles = makeStyles({ uniqId: 'parallax_title' })((theme, _params, classes) => ({
  root: {
    textAlign: 'center',
    '& h3': {
      overflow: 'hidden',
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(0, 3),
      },
    }
  },
  decoTitle: {
    position: 'absolute',
    width: '100%',
    top: -100,
    left: 0,
    overflow: 'hidden',
    textTransform: 'uppercase',
    fontSize: 200,
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down('lg')]: {
      fontSize: 160,
      top: -50
    },
    [theme.breakpoints.down('md')]: {
      fontSize: 120
    },
    [theme.breakpoints.down('sm')]: {
      top: 0,
      fontSize: 60
    },
    [`&.${classes.static}`]: {
      opacity: 0.4,
      top: -50,
      [theme.breakpoints.down('sm')]: {
        top: 20
      }
    }
  }
}));

export default titleStyles;
