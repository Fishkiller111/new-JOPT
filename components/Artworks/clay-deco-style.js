import { makeStyles } from 'tss-react/mui';
import gradient from 'theme/gradient';

const clayStyles = makeStyles({ uniqId: 'clay' })((theme) => ({
  clay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
  },
  mask: {
    position: 'relative',
    width: '100%',
    height: '100%',
    display: 'block',
    '& img': {
      width: '100%',
    },
    '&:after': {
      content: '""',
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      mixBlendMode: 'multiply',
    }
  },
  primaryDark: {
    '&:after': {
      backgroundImage: gradient(theme).primary.dark,
    }
  },
  primaryLight: {
    '&:after': {
      backgroundImage: gradient(theme).primary.light,
    }
  },
  secondaryDark: {
    '&:after': {
      backgroundImage: gradient(theme).secondary.dark,
    }
  },
  secondaryLight: {
    '&:after': {
      backgroundImage: gradient(theme).secondary.light,
    }
  },
  accent: {
    '&:after': {
      backgroundImage: gradient(theme).accent,
    }
  },
  doubleLight: {
    '&:after': {
      backgroundImage: gradient(theme).double.light,
    }
  },
  doubleMain: {
    '&:after': {
      backgroundImage: gradient(theme).double.main,
    }
  },
  doubleDark: {
    '&:after': {
      backgroundImage: gradient(theme).double.dark,
    }
  },
  doublePrimary: {
    '&:after': {
      backgroundImage: gradient(theme).double.primary,
    }
  },
  doubleSecondary: {
    '&:after': {
      backgroundImage: gradient(theme).double.secondary,
    }
  },
  doubleAccent: {
    '&:after': {
      backgroundImage: gradient(theme).double.accent,
    }
  },
  tripleLight: {
    '&:after': {
      backgroundImage: gradient(theme).triple.light,
    }
  },
  tripleMain: {
    '&:after': {
      backgroundImage: gradient(theme).triple.main,
    }
  },
  tripleDark: {
    '&:after': {
      backgroundImage: gradient(theme).triple.dark,
    }
  },
}));

export default clayStyles;
