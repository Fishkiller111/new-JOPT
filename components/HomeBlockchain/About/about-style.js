import { makeStyles } from 'tss-react/mui';
import { alpha } from '@mui/material/styles';

const aboutStyles = makeStyles({ uniqId: 'about_blockchain' })((theme, _params, classes) => ({
  mainFeature: {
    position: 'relative',
    display: 'block',
    [theme.breakpoints.up('lg')]: {
      paddingBottom: theme.spacing(8),
    }
  },
  video: {
    borderRadius: theme.rounded.medium,
    boxShadow: theme.palette.mode === 'dark' ? `0 0 30px -5px ${theme.palette.primary.dark}` : `0 0 30px -5px ${theme.palette.primary.light}`,
    [theme.breakpoints.down('lg')]: {
      maxWidth: 400,
    },
    [theme.breakpoints.down('md')]: {
      margin: '0 auto'
    }
  },
  videoPopup: {
    width: 690,
    maxWidth: 'none',
    '& iframe': {
      [theme.breakpoints.down('sm')]: {
        width: '100%',
        height: 300
      }
    }
  },
  closeBtn: {
    position: 'absolute',
    top: 4,
    right: 4,
  },
  featureWrap: {
    position: 'relative'
  },
  counter: {
    marginTop: theme.spacing(5),
    [theme.breakpoints.up('lg')]: {
      justifyContent: 'flex-end',
    },
    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing(10),
    },
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
    [theme.breakpoints.up('md')]: {
      paddingRight: theme.spacing(8),
    },
    '& > div': {
      [theme.breakpoints.down('md')]: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: theme.spacing(10)
      },
      [theme.breakpoints.down('sm')]: {
        marginBottom: theme.spacing(5)
      },
      [theme.breakpoints.between('sm', 'md')]: {
        width: '50%',
      }
    }
  },
  lower: {
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(15)
    }
  },
  higher: {
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(-3)
    }
  },
  paper: {
    position: 'relative',
    height: 200,
    margin: theme.spacing(1, 0),
    background: alpha(theme.palette.background.paper, 0.8),
    backdropFilter: 'saturate(180%) blur(20px)',
    border: 'none',
    width: '100%',
    [theme.breakpoints.up('md')]: {
      margin: theme.spacing(10, 4, 10, 0),
      width: 174,
    },
    [theme.breakpoints.down('md')]: {
      margin: theme.spacing(1),
      height: 'auto',
    },
    [theme.breakpoints.down('sm')]: {
      margin: 4,
      flex: 1
    },
    [`& .${classes.icon}`]: {
      fontSize: 140,
      position: 'absolute',
      width: '100%',
      textAlign: 'center',
      zIndex: 2,
      top: -100,
      [theme.breakpoints.down('md')]: {
        top: -60,
        fontSize: 100,
      }
    },
    '& h4': {
      fontWeight: theme.typography.fontWeightMedium,
      [theme.breakpoints.down('md')]: {
        fontSize: 22,
      }
    },
    '& p': {
      fontSize: 18,
      [theme.breakpoints.down('md')]: {
        fontSize: 14
      }
    }
  },
  glow: {
    overflow: 'hidden',
    position: 'relative',
    borderRadius: theme.rounded.medium,
    padding: theme.spacing(12, 3, 1),
    '&:before': {
      content: '""',
      filter: 'blur(20px)',
      opacity: 0.25,
      width: '100%',
      height: 190,
      borderRadius: '50%',
      position: 'absolute',
      top: '-50%',
      left: 0,
    },
    [`&.${classes.primary}`]: {
      '&:before': {
        background: theme.palette.primary.main
      }
    },
    [`&.${classes.secondary}`]: {
      '&:before': {
        background: theme.palette.secondary.main
      }
    },
    [`&.${classes.accent}`]: {
      '&:before': {
        background: theme.palette.accent.main
      }
    },
    [`&.${classes.purple}`]: {
      '&:before': {
        background: '#C442E5'
      }
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default aboutStyles;
