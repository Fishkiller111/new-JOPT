import { makeStyles } from 'tss-react/mui';
import {
  red, pink, purple,
  deepPurple, indigo, blue,
  lightBlue, cyan, teal,
  green, lightGreen, lime,
  yellow, amber, orange,
  deepOrange, brown, grey,
  blueGrey
} from '@mui/material/colors';

const icons3dStyles = makeStyles({ uniqId: 'icons_3d' })((theme, _params, classes) => ({
  root: {
    textAlign: 'center'
  },
  decoTitle: {
    position: 'absolute',
    width: '100%',
    top: 0,
  },
  icon: {
    display: 'inline-block',
    margin: '0 auto',
    perspective: '100px',
    position: 'relative',
    '& i': {
      display: 'block',
      transformStyle: 'preserve-3d',
      transform: 'rotate3d(3, -5, 3, 33deg)'
    }
  },
  overlay: {
    position: 'absolute',
    color: '#fff',
    filter: 'blur(20px)',
    top: 2,
    left: theme.direction === 'rtl' ? 'auto' : 2,
    right: theme.direction === 'rtl' ? 2 : 'auto',
    opacity: 0.3
  },
  emboss1: {
    position: 'absolute',
    opacity: 1,
    textShadow: '0 0 3px #000',
    filter: 'blur(1px)',
    top: 1,
    left: theme.direction === 'rtl' ? 'auto' : 3,
    right: theme.direction === 'rtl' ? 3 : 'auto',
  },
  emboss2: {
    position: 'absolute',
    opacity: 0.7,
    filter: 'blur(1px)',
    top: 2,
    left: theme.direction === 'rtl' ? 'auto' : 4,
    right: theme.direction === 'rtl' ? 4 : 'auto',
  },
  emboss3: {
    position: 'absolute',
    opacity: 1,
    filter: 'blur(1px)',
    top: 1,
    left: theme.direction === 'rtl' ? 'auto' : 2,
    right: theme.direction === 'rtl' ? 2 : 'auto',
    color: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.05)',
    '&:before': {
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    }
  },
  shadow: {
    position: 'absolute',
    color: '#000',
    filter: 'blur(8px)',
    top: 15,
    left: theme.direction === 'rtl' ? 'auto' : 15,
    right: theme.direction === 'rtl' ? 15 : 'auto',
    opacity: 0.05
  },
  front: {
    color: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.05)',
    '&:before': {
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    }
  },
  primary: {
    [`& .${classes.emboss3}`]: {
      '&:before': {
        backgroundImage: `linear-gradient(${theme.direction === 'rtl' ? '120deg' : '-120deg'}, ${theme.palette.primary.light} 30%, ${theme.palette.primary.main} 80%, ${theme.palette.primary.dark} 100%)`
      }
    },
    [`& .${classes.emboss2}`]: {
      color: theme.palette.primary.main
    },
    [`& .${classes.emboss1}`]: {
      color: theme.palette.primary.dark
    },
    '&:before': {
      backgroundImage: `linear-gradient(${theme.direction === 'rtl' ? '120deg' : '-120deg'}, ${theme.palette.primary.light} 30%, ${theme.palette.primary.main} 80%, ${theme.palette.primary.dark} 100%)`
    }
  },
  secondary: {
    [`& .${classes.emboss3}`]: {
      '&:before': {
        backgroundImage: `linear-gradient(${theme.direction === 'rtl' ? '120deg' : '-120deg'}, ${theme.palette.secondary.light} 10%, ${theme.palette.secondary.main} 60%, ${theme.palette.secondary.dark} 100%)`
      }
    },
    [`& .${classes.emboss2}`]: {
      color: theme.palette.secondary.dark
    },
    [`& .${classes.emboss1}`]: {
      color: theme.palette.secondary.main
    },
    '&:before': {
      backgroundImage: `linear-gradient(${theme.direction === 'rtl' ? '120deg' : '-120deg'}, ${theme.palette.secondary.light} 10%, ${theme.palette.secondary.main} 60%, ${theme.palette.secondary.dark} 100%)`
    }
  },
  accent: {
    [`& .${classes.emboss3}`]: {
      '&:before': {
        backgroundImage: `linear-gradient(${theme.direction === 'rtl' ? '120deg' : '-120deg'}, ${theme.palette.accent.light} 30%, ${theme.palette.accent.main} 80%, ${theme.palette.accent.dark} 100%)`
      }
    },
    [`& .${classes.emboss2}`]: {
      color: theme.palette.accent.main
    },
    [`& .${classes.emboss1}`]: {
      color: theme.palette.accent.dark
    },
    '&:before': {
      backgroundImage: `linear-gradient(${theme.direction === 'rtl' ? '120deg' : '-120deg'}, ${theme.palette.accent.light} 30%, ${theme.palette.accent.main} 80%, ${theme.palette.accent.dark} 100%)`
    }
  },
  primaryDouble: {
    [`& .${classes.emboss3}`]: {
      '&:before': {
        backgroundImage: `linear-gradient(${theme.direction === 'rtl' ? '120deg' : '-120deg'}, ${theme.palette.accent.light} 30%, ${theme.palette.accent.main} 50%, ${theme.palette.primary.main} 80%)`
      }
    },
    [`& .${classes.emboss2}`]: {
      color: theme.palette.primary.main
    },
    [`& .${classes.emboss1}`]: {
      color: theme.palette.primary.dark
    },
    '&:before': {
      backgroundImage: `linear-gradient(${theme.direction === 'rtl' ? '120deg' : '-120deg'}, ${theme.palette.accent.light} 30%, ${theme.palette.accent.main} 50%, ${theme.palette.primary.main} 80%)`
    }
  },
  secondaryDouble: {
    [`& .${classes.emboss3}`]: {
      '&:before': {
        backgroundImage: `linear-gradient(${theme.direction === 'rtl' ? '120deg' : '-120deg'}, ${theme.palette.secondary.main} 40%, ${theme.palette.primary.main} 80%, ${theme.palette.primary.dark} 100%)`
      }
    },
    [`& .${classes.emboss2}`]: {
      color: theme.palette.primary.main
    },
    [`& .${classes.emboss1}`]: {
      color: theme.palette.primary.dark
    },
    '&:before': {
      backgroundImage: `linear-gradient(${theme.direction === 'rtl' ? '120deg' : '-120deg'}, ${theme.palette.secondary.main} 40%, ${theme.palette.primary.main} 80%, ${theme.palette.primary.dark} 100%)`
    }
  },
  accentDouble: {
    [`& .${classes.emboss3}`]: {
      '&:before': {
        backgroundImage: `linear-gradient(${theme.direction === 'rtl' ? '120deg' : '-120deg'}, ${theme.palette.accent.light} 20%, ${theme.palette.accent.main} 40%, ${theme.palette.secondary.dark} 70%, ${theme.palette.secondary.main} 90%)`
      }
    },
    [`& .${classes.emboss2}`]: {
      color: theme.palette.secondary.dark
    },
    [`& .${classes.emboss1}`]: {
      color: theme.palette.secondary.dark
    },
    '&:before': {
      backgroundImage: `linear-gradient(${theme.direction === 'rtl' ? '120deg' : '-120deg'}, ${theme.palette.accent.light} 20%, ${theme.palette.accent.main} 40%, ${theme.palette.secondary.dark} 70%, ${theme.palette.secondary.main} 90%)`
    }
  },
  red: {
    [`& .${classes.emboss3}`]: {
      '&:before': {
        backgroundImage: `linear-gradient(90deg, ${red[100]} 30%, ${red[500]} 80%, ${red[900]} 100%)`
      }
    },
    [`& .${classes.emboss2}`]: {
      color: red[500]
    },
    [`& .${classes.emboss1}`]: {
      color: red[900]
    },
    '&:before': {
      backgroundImage: `linear-gradient(90deg, ${red[100]} 30%, ${red[500]} 80%, ${red[900]} 100%)`
    }
  },
  pink: {
    [`& .${classes.emboss3}`]: {
      '&:before': {
        backgroundImage: `linear-gradient(90deg, ${pink[100]} 30%, ${pink[500]} 80%, ${pink[900]} 100%)`
      }
    },
    [`& .${classes.emboss2}`]: {
      color: pink[500]
    },
    [`& .${classes.emboss1}`]: {
      color: pink[900]
    },
    '&:before': {
      backgroundImage: `linear-gradient(90deg, ${pink[100]} 30%, ${pink[500]} 80%, ${pink[900]} 100%)`
    }
  },
  purple: {
    [`& .${classes.emboss3}`]: {
      '&:before': {
        backgroundImage: `linear-gradient(90deg, ${purple[100]} 30%, ${purple[500]} 80%, ${purple[900]} 100%)`
      }
    },
    [`& .${classes.emboss2}`]: {
      color: purple[500]
    },
    [`& .${classes.emboss1}`]: {
      color: purple[900]
    },
    '&:before': {
      backgroundImage: `linear-gradient(90deg, ${purple[100]} 30%, ${purple[500]} 80%, ${purple[900]} 100%)`
    }
  },
  deepPurple: {
    [`& .${classes.emboss3}`]: {
      '&:before': {
        backgroundImage: `linear-gradient(90deg, ${deepPurple[100]} 30%, ${deepPurple[500]} 80%, ${deepPurple[900]} 100%)`
      }
    },
    [`& .${classes.emboss2}`]: {
      color: deepPurple[500]
    },
    [`& .${classes.emboss1}`]: {
      color: deepPurple[900]
    },
    '&:before': {
      backgroundImage: `linear-gradient(90deg, ${deepPurple[100]} 30%, ${deepPurple[500]} 80%, ${deepPurple[900]} 100%)`
    }
  },
  indigo: {
    [`& .${classes.emboss3}`]: {
      '&:before': {
        backgroundImage: `linear-gradient(90deg, ${indigo[100]} 30%, ${indigo[500]} 80%, ${indigo[900]} 100%)`
      }
    },
    [`& .${classes.emboss2}`]: {
      color: indigo[500]
    },
    [`& .${classes.emboss1}`]: {
      color: indigo[900]
    },
    '&:before': {
      backgroundImage: `linear-gradient(90deg, ${indigo[100]} 30%, ${indigo[500]} 80%, ${indigo[900]} 100%)`
    }
  },
  blue: {
    [`& .${classes.emboss3}`]: {
      '&:before': {
        backgroundImage: `linear-gradient(90deg, ${blue[100]} 30%, ${blue[500]} 80%, ${blue[900]} 100%)`
      }
    },
    [`& .${classes.emboss2}`]: {
      color: blue[500]
    },
    [`& .${classes.emboss1}`]: {
      color: blue[900]
    },
    '&:before': {
      backgroundImage: `linear-gradient(90deg, ${blue[100]} 30%, ${blue[500]} 80%, ${blue[900]} 100%)`
    }
  },
  lightBlue: {
    [`& .${classes.emboss3}`]: {
      '&:before': {
        backgroundImage: `linear-gradient(90deg, ${lightBlue[100]} 30%, ${lightBlue[500]} 80%, ${lightBlue[900]} 100%)`
      }
    },
    [`& .${classes.emboss2}`]: {
      color: lightBlue[500]
    },
    [`& .${classes.emboss1}`]: {
      color: lightBlue[900]
    },
    '&:before': {
      backgroundImage: `linear-gradient(90deg, ${lightBlue[100]} 30%, ${lightBlue[500]} 80%, ${lightBlue[900]} 100%)`
    }
  },
  cyan: {
    [`& .${classes.emboss3}`]: {
      '&:before': {
        backgroundImage: `linear-gradient(90deg, ${cyan[100]} 30%, ${cyan[500]} 80%, ${cyan[900]} 100%)`
      }
    },
    [`& .${classes.emboss2}`]: {
      color: cyan[500]
    },
    [`& .${classes.emboss1}`]: {
      color: cyan[900]
    },
    '&:before': {
      backgroundImage: `linear-gradient(90deg, ${cyan[100]} 30%, ${cyan[500]} 80%, ${cyan[900]} 100%)`
    }
  },
  teal: {
    [`& .${classes.emboss3}`]: {
      '&:before': {
        backgroundImage: `linear-gradient(90deg, ${teal[100]} 30%, ${teal[500]} 80%, ${teal[900]} 100%)`
      }
    },
    [`& .${classes.emboss2}`]: {
      color: teal[500]
    },
    [`& .${classes.emboss1}`]: {
      color: teal[900]
    },
    '&:before': {
      backgroundImage: `linear-gradient(90deg, ${teal[100]} 30%, ${teal[500]} 80%, ${teal[900]} 100%)`
    }
  },
  green: {
    [`& .${classes.emboss3}`]: {
      '&:before': {
        backgroundImage: `linear-gradient(90deg, ${green[100]} 30%, ${green[500]} 80%, ${green[900]} 100%)`
      }
    },
    [`& .${classes.emboss2}`]: {
      color: green[500]
    },
    [`& .${classes.emboss1}`]: {
      color: green[900]
    },
    '&:before': {
      backgroundImage: `linear-gradient(90deg, ${green[100]} 30%, ${green[500]} 80%, ${green[900]} 100%)`
    }
  },
  lightGreen: {
    [`& .${classes.emboss3}`]: {
      '&:before': {
        backgroundImage: `linear-gradient(90deg, ${lightGreen[100]} 30%, ${lightGreen[500]} 80%, ${lightGreen[900]} 100%)`
      }
    },
    [`& .${classes.emboss2}`]: {
      color: lightGreen[500]
    },
    [`& .${classes.emboss1}`]: {
      color: lightGreen[900]
    },
    '&:before': {
      backgroundImage: `linear-gradient(90deg, ${lightGreen[100]} 30%, ${lightGreen[500]} 80%, ${lightGreen[900]} 100%)`
    }
  },
  lime: {
    [`& .${classes.emboss3}`]: {
      '&:before': {
        backgroundImage: `linear-gradient(90deg, ${lime[100]} 30%, ${lime[500]} 80%, ${lime[900]} 100%)`
      }
    },
    [`& .${classes.emboss2}`]: {
      color: lime[500]
    },
    [`& .${classes.emboss1}`]: {
      color: lime[900]
    },
    '&:before': {
      backgroundImage: `linear-gradient(90deg, ${lime[100]} 30%, ${lime[500]} 80%, ${lime[900]} 100%)`
    }
  },
  yellow: {
    [`& .${classes.emboss3}`]: {
      '&:before': {
        backgroundImage: `linear-gradient(90deg, ${yellow[100]} 30%, ${yellow[500]} 80%, ${yellow[900]} 100%)`
      }
    },
    [`& .${classes.emboss2}`]: {
      color: yellow[500]
    },
    [`& .${classes.emboss1}`]: {
      color: yellow[900]
    },
    '&:before': {
      backgroundImage: `linear-gradient(90deg, ${yellow[100]} 30%, ${yellow[500]} 80%, ${yellow[900]} 100%)`
    }
  },
  amber: {
    [`& .${classes.emboss3}`]: {
      '&:before': {
        backgroundImage: `linear-gradient(90deg, ${amber[100]} 30%, ${amber[500]} 80%, ${amber[900]} 100%)`
      }
    },
    [`& .${classes.emboss2}`]: {
      color: amber[500]
    },
    [`& .${classes.emboss1}`]: {
      color: amber[900]
    },
    '&:before': {
      backgroundImage: `linear-gradient(90deg, ${amber[100]} 30%, ${amber[500]} 80%, ${amber[900]} 100%)`
    }
  },
  orange: {
    [`& .${classes.emboss3}`]: {
      '&:before': {
        backgroundImage: `linear-gradient(90deg, ${orange[100]} 30%, ${orange[500]} 80%, ${orange[900]} 100%)`
      }
    },
    [`& .${classes.emboss2}`]: {
      color: orange[500]
    },
    [`& .${classes.emboss1}`]: {
      color: orange[900]
    },
    '&:before': {
      backgroundImage: `linear-gradient(90deg, ${orange[100]} 30%, ${orange[500]} 80%, ${orange[900]} 100%)`
    }
  },
  deepOrange: {
    [`& .${classes.emboss3}`]: {
      '&:before': {
        backgroundImage: `linear-gradient(90deg, ${deepOrange[100]} 30%, ${deepOrange[500]} 80%, ${deepOrange[900]} 100%)`
      }
    },
    [`& .${classes.emboss2}`]: {
      color: deepOrange[500]
    },
    [`& .${classes.emboss1}`]: {
      color: deepOrange[900]
    },
    '&:before': {
      backgroundImage: `linear-gradient(90deg, ${deepOrange[100]} 30%, ${deepOrange[500]} 80%, ${deepOrange[900]} 100%)`
    }
  },
  brown: {
    [`& .${classes.emboss3}`]: {
      '&:before': {
        backgroundImage: `linear-gradient(90deg, ${brown[100]} 30%, ${brown[500]} 80%, ${brown[900]} 100%)`
      }
    },
    [`& .${classes.emboss2}`]: {
      color: brown[500]
    },
    [`& .${classes.emboss1}`]: {
      color: brown[900]
    },
    '&:before': {
      backgroundImage: `linear-gradient(90deg, ${brown[100]} 30%, ${brown[500]} 80%, ${brown[900]} 100%)`
    }
  },
  grey: {
    [`& .${classes.emboss3}`]: {
      '&:before': {
        backgroundImage: `linear-gradient(${theme.direction === 'rtl' ? '120deg' : '-120deg'}, ${grey[100]} 30%, ${grey[500]} 80%, ${grey[900]} 100%)`
      }
    },
    [`& .${classes.emboss2}`]: {
      color: grey[500]
    },
    [`& .${classes.emboss1}`]: {
      color: grey[900]
    },
    '&:before': {
      backgroundImage: `linear-gradient(90deg, ${grey[100]} 30%, ${grey[500]} 80%, ${grey[900]} 100%)`
    }
  },
  blueGrey: {
    [`& .${classes.emboss3}`]: {
      '&:before': {
        backgroundImage: `linear-gradient(90deg, ${blueGrey[100]} 30%, ${blueGrey[500]} 80%, ${blueGrey[900]} 100%)`
      }
    },
    [`& .${classes.emboss2}`]: {
      color: blueGrey[500]
    },
    [`& .${classes.emboss1}`]: {
      color: blueGrey[900]
    },
    '&:before': {
      backgroundImage: `linear-gradient(90deg, ${blueGrey[100]} 30%, ${blueGrey[500]} 80%, ${blueGrey[900]} 100%)`
    }
  },
}));

export default icons3dStyles;
