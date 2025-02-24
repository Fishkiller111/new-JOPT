import { makeStyles } from 'tss-react/mui';
const gold = '#D6BD96';

const achievementStyles = makeStyles({ uniqId: 'achievement' })((theme) => ({
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
        marginTop: theme.spacing(7),
        padding: theme.spacing(0, 2)
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
    zIndex: 1,
    marginTop: -200,
    [theme.breakpoints.up('md')]: {
      marginTop: -380,
      marginLeft: -60
    },
    [theme.breakpoints.down('md')]: {
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: -240,
    },
    '& figure': {
      margin: 0,
      borderRadius: theme.rounded.big,
      overflow: 'hidden',
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
  livePaper: {
    position: 'absolute',
    borderRadius: theme.rounded.big,
    padding: theme.spacing(2),
    bottom: 0,
    textAlign: 'left',
    [theme.breakpoints.between('md', 'lg')]: {
      marginLeft: theme.spacing(8)
    },
    '& figure': {
      borderRadius: theme.rounded.big,
      overflow: 'hidden',
      height: 120,
      '& img': {
        width: '100%',
        minHeight: '100%',
      }
    },
    '& h6': {
      display: '-webkit-box',
      WebkitLineClamp: 2,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      marginBottom: theme.spacing(2)
    }
  },
  live: {
    fontSize: 14,
    color: theme.palette.text.secondary,
    '& strong': {
      color: theme.palette.text.primary,
      textTransform: 'uppercase',
      marginRight: theme.spacing(1)
    },
    '& span': {
      width: 16,
      height: 16,
      display: 'inline-block',
      borderRadius: '50%',
      marginRight: 2,
      top: 3,
      position: 'relative',
      backgroundImage: 'linear-gradient(159deg, #FF4081 0%, #C00D4F 100%)',
    }
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default achievementStyles;
