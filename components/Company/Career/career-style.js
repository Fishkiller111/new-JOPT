import { makeStyles } from 'tss-react/mui';
import { darken } from '@mui/material/styles';
import {
  red, pink, purple,
  deepPurple, indigo, blue,
  lightBlue, cyan, teal,
  green, lightGreen, lime,
  yellow, amber, orange,
  deepOrange, brown, grey,
  blueGrey
} from '@mui/material/colors';

const useStyles = makeStyles({ uniqId: 'career' })((theme, _params, classes) => ({
  root: {
    color: theme.palette.common.white,
    position: 'relative',
    zIndex: 4,
    borderRadius: '60px 60px 0 0',
    background: `linear-gradient(-2deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center'
    },
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(15, 3, 0),
    },
    '&:before': {
      content: '""',
      height: 60,
      width: '100%',
      position: 'absolute',
      bottom: 0,
      left: 0,
      background: theme.palette.mode === 'dark' ? darken(theme.palette.primary.dark, 0.5) : theme.palette.background.paper,
      [theme.breakpoints.up('md')]: {
        borderRadius: '60px 60px 0 0',
      }
    },
  },
  benefit: {
    display: 'flex',
    marginBottom: theme.spacing(3),
    textAlign: 'left',
    '& h3': {
      fontWeight: theme.typography.fontWeightMedium,
    }
  },
  bg: {
    borderRadius: theme.rounded.medium,
    position: 'relative',
    overflow: 'visible',
    height: 100,
    width: 100,
    background: theme.palette.background.paper,
    backgroundSize: '150%',
    marginRight: theme.spacing(2),
    '& > div': {
      fontSize: 100,
      position: 'relative',
      bottom: 50,
      left: -10,
    },
    [`&.${classes.red}`]: {
      backgroundImage: `linear-gradient(320deg, rgba(255, 255, 255, 1) 15%, ${red[500]} 120%)`
    },
    [`&.${classes.pink}`]: {
      backgroundImage: `linear-gradient(320deg, rgba(255, 255, 255, 1) 15%, ${pink[500]} 120%)`
    },
    [`&.${classes.purple}`]: {
      backgroundImage: `linear-gradient(320deg, rgba(255, 255, 255, 1) 15%, ${purple[500]} 120%)`
    },
    [`&.${classes.deepPurple}`]: {
      backgroundImage: `linear-gradient(320deg, rgba(255, 255, 255, 1) 15%, ${deepPurple[500]} 120%)`
    },
    [`&.${classes.indigo}`]: {
      backgroundImage: `linear-gradient(320deg, rgba(255, 255, 255, 1) 15%, ${indigo[500]} 120%)`
    },
    [`&.${classes.blue}`]: {
      backgroundImage: `linear-gradient(320deg, rgba(255, 255, 255, 1) 15%, ${blue[500]} 120%)`
    },
    [`&.${classes.lightBlue}`]: {
      backgroundImage: `linear-gradient(320deg, rgba(255, 255, 255, 1) 15%, ${lightBlue[500]} 120%)`
    },
    [`&.${classes.cyan}`]: {
      backgroundImage: `linear-gradient(320deg, rgba(255, 255, 255, 1) 15%, ${cyan[500]} 120%)`
    },
    [`&.${classes.teal}`]: {
      backgroundImage: `linear-gradient(320deg, rgba(255, 255, 255, 1) 15%, ${teal[500]} 120%)`
    },
    [`&.${classes.green}`]: {
      backgroundImage: `linear-gradient(320deg, rgba(255, 255, 255, 1) 15%, ${green[500]} 120%)`
    },
    [`&.${classes.lightGreen}`]: {
      backgroundImage: `linear-gradient(320deg, rgba(255, 255, 255, 1) 15%, ${lightGreen[500]} 120%)`
    },
    [`&.${classes.lime}`]: {
      backgroundImage: `linear-gradient(320deg, rgba(255, 255, 255, 1) 15%, ${lime[500]} 120%)`
    },
    [`&.${classes.yellow}`]: {
      backgroundImage: `linear-gradient(320deg, rgba(255, 255, 255, 1) 15%, ${yellow[500]} 120%)`
    },
    [`&.${classes.amber}`]: {
      backgroundImage: `linear-gradient(320deg, rgba(255, 255, 255, 1) 15%, ${amber[500]} 120%)`
    },
    [`&.${classes.orange}`]: {
      backgroundImage: `linear-gradient(320deg, rgba(255, 255, 255, 1) 15%, ${orange[500]} 120%)`
    },
    [`&.${classes.deepOrange}`]: {
      backgroundImage: `linear-gradient(320deg, rgba(255, 255, 255, 1) 15%, ${deepOrange[500]} 120%)`
    },
    [`&.${classes.brown}`]: {
      backgroundImage: `linear-gradient(320deg, rgba(255, 255, 255, 1) 15%, ${brown[500]} 120%)`
    },
    [`&.${classes.grey}`]: {
      backgroundImage: `linear-gradient(320deg, rgba(255, 255, 255, 1) 15%, ${grey[500]} 120%)`
    },
    [`&.${classes.blueGrey}`]: {
      backgroundImage: `linear-gradient(320deg, rgba(255, 255, 255, 1) 15%, ${blueGrey[500]} 120%)`
    },
  },
  text: {
    marginLeft: theme.spacing(),
    '& h3': {
      marginBottom: theme.spacing(2)
    },
  },
  bannerWrap: {
    '&.MuiContainer-root': {
      [theme.breakpoints.down('sm')]: {
        padding: 0
      }
    }
  },
  banner: {
    marginTop: theme.spacing(10),
    borderRadius: 50,
    overflow: 'hidden',
    position: 'relative',
    padding: theme.spacing(10, 2),
    color: theme.palette.common.white,
    alignItems: 'center',
    zIndex: 3,
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(10),
      display: 'flex',
    },
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
      '& h3': {
        marginBottom: theme.spacing(3)
      }
    },
    '& figure': {
      background: theme.palette.common.black,
      position: 'absolute',
      left: 0,
      top: 0,
      margin: 0,
      width: '100%',
      height: '100%',
      '& img': {
        opacity: 0.4,
        width: '100%',
        height: '100%',
        objectFit: 'cover'
      }
    },
    '& h3': {
      flex: 1,
      fontStyle: 'italic',
      fontWeight: theme.typography.fontWeightLight,
      fontSize: 38,
      lineHeight: '44px',
      position: 'relative',
      [theme.breakpoints.down('sm')]: {
        lineHeight: '32px',
        fontSize: 22,
      }
    },
  },
  btn: {
    position: 'relative',
    [theme.breakpoints.up('sm')]: {
      fontSize: 18,
      padding: theme.spacing(2, 3)
    }
  },
  content: {
    alignItems: 'center',
    '& p': {
      [theme.breakpoints.down('sm')]: {
        fontSize: 12
      }
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
    [`& .${classes.icon}`]: {
      transition: 'all 0.3s ease',
      position: 'absolute',
      left: 10,
      width: 50,
      height: 50,
      top: 40,
      transform: theme.direction === 'rtl' ? 'scale(-1)' : 'none',
      [theme.breakpoints.down('sm')]: {
        top: 20
      }
    }
  },
  tabLabel: {
    fontSize: 18,
    fontWeight: theme.typography.fontWeightMedium,
    letterSpacing: 0,
    padding: theme.spacing(0, 4),
    borderBottom: '1px solid',
    borderColor: theme.palette.text.disabled,
    [theme.breakpoints.down('sm')]: {
      fontSize: 14
    }
  },
  indicator: {
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.light,
    height: 5,
    borderRadius: '4px 4px 0 0'
  },
  tabContent: {
    marginTop: theme.spacing(5)
  },
  accordion: {
    position: 'relative',
    zIndex: 1,
  },
  item: {
    marginBottom: theme.spacing(3),
  },
  paper: {
    borderRadius: '20px !important',
    background: theme.palette.background.paper,
    backdropFilter: 'saturate(180%) blur(20px)',
    overflow: 'hidden',
    [theme.breakpoints.up('sm')]: {
      borderRadius: '80px !important',
    },
    '&.Mui-expanded': {
      border: `1px solid ${theme.palette.secondary.main}`,
    }
  },
  heading: {
    flex: 1,
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: 24,
    padding: theme.spacing(2, 2, 2, 6),
    [theme.breakpoints.down('sm')]: {
      fontSize: 16,
    },
    '& .MuiChip-label': {
      [theme.breakpoints.down('sm')]: {
        fontSize: 12,
      },
    }
  },
  expanded: {
    [`& .${classes.heading}`]: {
      paddingTop: 0,
      paddingBottom: 0
    },
    [`& .${classes.icon}`]: {
      transform: 'rotate(90deg)'
    }
  },
  detail: {
    background: theme.palette.background.paper,
    paddingBottom: theme.spacing(5),
    [theme.breakpoints.up('sm')]: {
      paddingLeft: theme.spacing(10),
    },
    '& ul': {
      paddingLeft: theme.spacing(3),
      '& li': {
        marginBottom: theme.spacing(2)
      }
    },
    '& p': {
      marginBottom: theme.spacing(3)
    }
  },
  btnGradient: {
    color: theme.palette.common.black,
    borderRadius: theme.rounded.medium,
    fontWeight: theme.typography.fontWeightBold,
    fontSize: 16,
    position: 'relative',
    justifyContent: 'space-between',
    textTransform: 'capitalize',
    padding: theme.spacing(1.5, 1),
    marginBottom: theme.spacing(2),
    width: '100%',
    '& svg': {
      width: 40,
      height: 40
    }
  },
  triple: {
    background: `linear-gradient(120deg, ${theme.palette.secondary.main} 0%, ${theme.palette.primary.light} 50%, ${theme.palette.accent.light} 100%)`,
  },
  double: {
    background: `linear-gradient(120deg, ${theme.palette.primary.light} 0%, ${theme.palette.common.white} 100%)`,
  },
  socmed: {
    display: 'flex',
    marginLeft: theme.spacing(2),
    '& button, a': {
      background: theme.palette.divider,
      marginRight: theme.spacing(0.5),
      color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.main,
    }
  },
  property: {
    margin: theme.spacing(7, 0),
    padding: '0 !important',
    listStyle: 'none',
    '& li': {
      listStyle: 'none',
      marginBottom: theme.spacing(),
      display: 'flex',
      '& span': {
        flex: 1
      }
    }
  },
  iconBtn: {
    '& i': {
      width: 25,
      height: 25,
      fontSize: 22,
      lineHeight: '24px'
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
