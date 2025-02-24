import { makeStyles } from 'tss-react/mui';
import { alpha } from '@mui/material/styles';
const gold = '#D6BD96';

const achievementStyles = makeStyles({ uniqId: 'achievement' })((theme, _params, classes) => ({
  root: {
    position: 'relative',
    [theme.breakpoints.down('md')]: {
      textAlign: 'center'
    },
    [theme.breakpoints.up('lg')]: {
      '& .MuiContainer-root': {
        maxWidth: 1280,
        padding: 0,
      },
    },
    '& > div': {
      [theme.breakpoints.down('sm')]: {
        padding: 0
      }
    }
  },
  about: {
    display: 'flex',
    flexDirection: 'column-reverse',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    [theme.breakpoints.down('md')]: {
      '& > h5': {
        fontSize: 18,
        lineHeight: '28px',
        padding: theme.spacing(0, 1)
      }
    },
    [theme.breakpoints.down('sm')]: {
      '& > h5': {
        padding: theme.spacing(0, 3)
      }
    }
  },
  reward: {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(5, 7, 0, 0),
    },
    [theme.breakpoints.down('sm')]: {
      overflow: 'auto'
    }
  },
  item: {
    textAlign: 'center',
    color: gold,
    margin: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      margin: theme.spacing(4),
    },
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3)
    },
    '& figure': {
      height: 70,
      margin: theme.spacing(0, 0, 2),
      [theme.breakpoints.down('lg')]: {
        height: 50
      },
      '& img': {
        height: '100%',
      },
    },
    '& p': {
      fontFamily: 'Times New Roman',
      [theme.breakpoints.down('lg')]: {
        fontSize: 16,
        whiteSpace: 'nowrap'
      }
    },
    '& h5': {
      fontWeight: theme.typography.fontWeightMedium,
      textTransform: 'uppercase',
      [theme.breakpoints.down('lg')]: {
        fontSize: 16
      }
    },
  },
  photo: {
    position: 'relative',
    marginTop: -120,
    alignItems: 'flex-start',
    justifyContent: 'center',
    display: 'flex',
    zIndex: 1,
    [theme.breakpoints.up('md')]: {
      marginTop: -380,
      marginLeft: -60
    },
    [theme.breakpoints.down('md')]: {
      marginLeft: 'auto',
      marginRight: 'auto',
      maxWidth: 300
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: -200,
    },
    '& figure': {
      margin: 0,
      borderRadius: theme.rounded.big,
      overflow: 'hidden',
      position: 'relative',
      '&:before': {
        content: '""',
        position: 'absolute',
        width: '120%',
        height: '155px',
        bottom: 0,
        left: -20,
        zIndex: 1,
        background: `linear-gradient(to top, ${theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.background.paper} 40%, rgba(0, 0, 0, 0) 60%)`
      },
      '&:after': {
        content: '""',
        position: 'absolute',
        width: '120%',
        height: '160px',
        bottom: 0,
        left: -20,
        zIndex: 1,
        opacity: 0.5,
        background: `linear-gradient(to top, ${theme.palette.mode === 'dark' ? theme.palette.common.black : theme.palette.background.paper} 40%, rgba(0, 0, 0, 0) 60%)`
      },
      '& img': {
        width: '100%',
        minHeight: '100%',
      }
    }
  },
  avatar: {
    '& img': {
      maxHeight: 600,
      position: 'relative',
      [theme.breakpoints.up('md')]: {
        top: 100
      }
    }
  },
  socmed: {
    display: 'flex',
    justifyContent: 'space-evenly',
    margin: `${theme.spacing(4)} auto`,
    maxWidth: 600,
    '& button': {
      margin: theme.spacing(1, 2),
      width: 36,
      height: 36,
      '& i': {
        color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
      }
    },
    '& i': {
      fontSize: 22
    }
  },
  hirePaper: {
    position: 'absolute',
    borderRadius: theme.rounded.big,
    padding: theme.spacing(2, 4),
    background: alpha(theme.palette.background.paper, 0.5),
    backdropFilter: 'saturate(180%) blur(20px)',
    bottom: 30,
    zIndex: 2,
  },
  hire: {
    marginBottom: theme.spacing(1),
    '& strong': {
      textTransform: 'uppercase',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '& span': {
      width: 12,
      height: 12,
      display: 'inline-block',
      borderRadius: '50%',
      marginRight: 2,
      top: 3,
      position: 'relative',
      [`&.${classes.online}`]: {
        backgroundImage: 'linear-gradient(153deg, #84FF95 0%, #006064 100%)',
      },
      [`&.${classes.bussy}`]: {
        backgroundImage: 'linear-gradient(153deg, #FFBABA 0%, #FF0000 100%);',
      },
      [`&.${classes.offline}`]: {
        backgroundImage: 'linear-gradient(153deg, #E3E3E3 0%, #232323 100%);',
      },
      [`&.${classes.idle}`]: {
        backgroundImage: 'linear-gradient(153deg, #FFEA84 0%, #FF9000 100%);',
      },
    }
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default achievementStyles;
