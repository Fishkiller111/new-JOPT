import { makeStyles } from 'tss-react/mui';
import gradient from 'theme/gradient';

const decoStyles = makeStyles({ uniqId: 'deco_footer' })((theme, _params, classes) => ({
  primaryDark: { background: gradient(theme).primary.dark },
  primaryLight: { background: gradient(theme).primary.light },
  secondaryDark: { background: gradient(theme).secondary.dark },
  secondaryLight: { background: gradient(theme).secondary.light },
  accent: { background: gradient(theme).accent },
  doubleLight: { background: gradient(theme).double.light },
  doubleMain: { background: gradient(theme).double.main },
  doubleDark: { background: gradient(theme).double.dark },
  tripleLight: { background: gradient(theme).triple.light },
  tripleMain: { background: gradient(theme).triple.main },
  tripleDark: { background: gradient(theme).triple.dark },
  fogs: {
    position: 'absolute',
    width: '100%',
    height: 200,
    top: 0,
    left: 0,
    filter: 'blur(100px)',
    opacity: theme.palette.mode === 'dark' ? 0.75 : 0.35,
    padding: theme.spacing(15, 0, 5),
    [`& .${classes.fog}`]: {
      position: 'absolute',
      width: '60%',
      height: '100%',
      '& > div > div': {
        position: 'absolute',
      }
    },
    [`& .${classes.start}`]: {
      bottom: 0,
      overflow: 'hidden',
      left: 0,
      [`& .${classes.ctx}`]: {
        transform: 'translateX(-80px)'
      }
    },
    [`& .${classes.end}`]: {
      bottom: 0,
      overflow: 'hidden',
      right: 0,
      [`& .${classes.ctx}`]: {
        transform: 'translateX(80px)'
      }
    }
  }
}));

export default decoStyles;
