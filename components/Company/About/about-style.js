import { makeStyles } from 'tss-react/mui';
import { lighten } from '@mui/material/styles';
import gradient from 'theme/gradient';

const bgAbstract = '/images/inner/bg_abstract.jpg';

const useStyles = makeStyles({ uniqId: 'about' })((theme, _params, classes) => ({
  desc: {
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center'
    }
  },
  paper: {
    position: 'relative',
    padding: theme.spacing(1),
    background: 'transparent',
    [theme.breakpoints.up('sm')]: {
      background: theme.palette.mode === 'dark' ? theme.palette.primary.dark : lighten(theme.palette.primary.light, 0.8),
      borderRadius: 50,
      padding: theme.spacing(8),
    },
    '& p': {
      marginBottom: theme.spacing(2),
    },
    [`& .${classes.quote}`]: {
      position: 'relative',
      marginTop: theme.spacing(10),
      '& i': {
        color: theme.palette.mode === 'dark' ? theme.palette.primary.main : theme.palette.primary.light,
        opacity: 0.5,
        position: 'absolute',
        fontSize: 80,
        top: -40,
        left: 0,
      },
      '& em': {
        position: 'relative'
      }
    },
  },
  counter: {
    position: 'relative',
    width: '100%',
    height: '100%',
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  count: {
    color: theme.palette.common.white,
    textAlign: 'center',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    paddingTop: theme.spacing(3),
    zIndex: 3,
    position: 'absolute',
    '& h2, h3, h4, h5, h6': {
      fontWeight: theme.typography.fontWeightBold
    }
  },
  card: {
    borderRadius: theme.rounded.big,
    overflow: 'hidden',
    boxShadow: theme.shade.light,
    zIndex: 1,
    position: 'absolute',
    '& .MuiCardMedia-root': {
      height: '100%',
      width: '100%',
      position: 'absolute'
    },
    '&:after': {
      content: '""',
      position: 'absolute',
      width: '100%',
      height: '100%',
      opacity: 0.75,
    },
    [`&.${classes.primary}`]: {
      width: 286,
      height: 280,
      top: -40,
      left: -40,
      [theme.breakpoints.up('lg')]: {
        left: 20,
      },
      '&:after': {
        background: gradient(theme).double.main
      },
      [`& .${classes.count}`]: {
        justifyContent: 'flex-start',
      }
    },
    [`&.${classes.secondary}`]: {
      width: 180,
      height: 180,
      right: -60,
      top: -80,
      '&:after': {
        background: gradient(theme).triple.main
      }
    },
    [`&.${classes.accent}`]: {
      width: 325,
      height: 205,
      right: -10,
      bottom: -40,
      [theme.breakpoints.down('lg')]: {
        bottom: 20
      },
      '&:after': {
        background: gradient(theme).triple.light
      }
    }
  },
  values: {
    position: 'relative',
    [theme.breakpoints.down('md')]: {
      textAlign: 'center'
    }
  },
  keyGroup: {
    [theme.breakpoints.between('sm', 'md')]: {
      display: 'flex',
      justifyContent: 'center',
      margin: theme.spacing(5, 0),
      '& > div': {
        margin: theme.spacing(0, 0.5)
      },
    },
    [theme.breakpoints.down('sm')]: {
      '& > div': {
        margin: theme.spacing(3, 1)
      },
    }
  },
  title: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-60%, -50%)',
    width: 450,
    height: 450,
    borderRadius: '50%',
    padding: theme.spacing(2),
    background: `url(${bgAbstract}) no-repeat`,
    [theme.breakpoints.down('md')]: {
      display: 'none'
    },
    '& div': {
      borderRadius: '50%',
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      background: theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.background.paper,
      '&:before': {
        content: '""',
        width: '100%',
        height: '100%',
        position: 'absolute',
        opacity: 0.5,
        background: theme.palette.mode === 'dark' ? theme.palette.common.black : theme.palette.background.paper,
      }
    },
    '& h1': {
      position: 'relative',
      textAlign: 'center',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      backgroundImage: `url(${bgAbstract})`,
      color: 'transparent',
      fontSize: 100,
    },
  },
  text: {
    [theme.breakpoints.up('md')]: {
      marginTop: 350,
    }
  },
  value: {
    padding: theme.spacing(2),
    borderRadius: '50%',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    position: 'relative',
    background: theme.palette.background.paper,
    fontSize: 14,
    [theme.breakpoints.up('md')]: {
      width: 250,
      height: 250,
      padding: theme.spacing(0, 6),
    },
    [theme.breakpoints.down('md')]: {
      borderRadius: theme.rounded.big,
    },
    '& i': {
      height: 100,
      display: 'block',
      margin: '0 auto',
      fontSize: 80,
    },
    strong: {
      display: 'block',
    }
  },
  culture: {
    position: 'relative',
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
    },
    [theme.breakpoints.down('sm')]: {
      padding: 0
    },
    '& p': {
      marginBottom: theme.spacing(2),
      [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(0, 2)
      }
    }
  },
  collagesWrap: {
    display: 'flex',
    justifyContent: 'flex-end',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      overflow: 'hidden',
      position: 'relative',
    }
  },
  collages: {
    display: 'flex',
    flexShrink: 0,
    width: 700,
    '& > div': {
      flex: 1
    },
    '& figure': {
      margin: theme.spacing(2, 1),
      overflow: 'hidden',
      borderRadius: theme.rounded.medium,
      '& img': {
        width: '100%',
        display: 'block'
      }
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
