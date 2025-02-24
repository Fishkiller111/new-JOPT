import { makeStyles } from 'tss-react/mui';

const businessStyles = makeStyles({ uniqId: 'business' })((theme, _params, classes) => ({
  circleGroup: {
    position: 'relative',
    width: '100%',
    [theme.breakpoints.up('lg')]: {
      marginTop: theme.spacing(8),
      minHeight: 700,
    },
    [theme.breakpoints.down('lg')]: {
      margin: theme.spacing(0, -2),
      display: 'flex',
      overflow: 'auto'
    }
  },
  circle: {
    position: 'relative',
    textAlign: 'center',
    [theme.breakpoints.up('lg')]: {
      position: 'absolute',
    },
    [theme.breakpoints.down('lg')]: {
      padding: 32,
      width: 275,
      height: 275,
      top: '0 !important',
      left: '0 !important'
    },
    [theme.breakpoints.down('sm')]: {
      padding: 10,
      width: 179,
      height: 179,
    },
    '& h6': {
      [theme.breakpoints.down('lg')]: {
        fontSize: 18
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: 14
      }
    },
    '& i': {
      [theme.breakpoints.down('lg')]: {
        fontSize: 90,
        lineHeight: '90px'
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: 60,
        lineHeight: '60px'
      }
    },
    '& svg': {
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      opacity: 0.5,
      [theme.breakpoints.down('lg')]: {
        display: 'none'
      }
    }
  },
  paper: {
    fontWeight: theme.typography.fontWeightBold,
    borderRadius: '50%',
    width: '100%',
    height: '100%',
    lineHeight: 'normal',
    textTransform: 'capitalize',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    cursor: 'pointer',
    position: 'relative',
    boxShadow: theme.palette.mode === 'dark' ? theme.shade.dark : theme.shade.light,
    transition: 'all 0.3s ease-out',
    textDecoration: 'none',
    transform: 'scale(1)',
    '&:hover': {
      transform: 'scale(1.1)'
    },
    '& h6': {
      fontWeight: theme.typography.fontWeightMedium,
    }
  },
  large: {
    [theme.breakpoints.up('lg')]: {
      padding: 40,
      width: 344,
      height: 344,
    },
    '& h6': {
      [theme.breakpoints.up('lg')]: {
        fontSize: 24
      }
    },
    '& i': {
      [theme.breakpoints.up('lg')]: {
        lineHeight: '120px',
        fontSize: 120,
      }
    }
  },
  medium: {
    [theme.breakpoints.up('lg')]: {
      padding: 32,
      width: 275,
      height: 275,
    },
    '& h6': {
      [theme.breakpoints.up('lg')]: {
        fontSize: 18
      }
    },
    '& i': {
      [theme.breakpoints.up('lg')]: {
        fontSize: 90,
        lineHeight: '90px'
      }
    }
  },
  small: {
    [theme.breakpoints.up('lg')]: {
      padding: 20,
      width: 179,
      height: 179,
    },
    '& h6': {
      [theme.breakpoints.up('lg')]: {
        fontSize: 14
      }
    },
    '& i': {
      [theme.breakpoints.up('lg')]: {
        fontSize: 60,
        lineHeight: '60px'
      }
    }
  },
  fillPrimary: {
    [`& .${classes.paper}`]: {
      color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.main
    },
    '& i': {
      '&:before': {
        background: `linear-gradient(120deg, ${theme.palette.primary.light}, ${theme.palette.primary.main})`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
      }
    },
    '& svg': {
      fill: theme.palette.primary.main
    },
    '& a': {
      [theme.breakpoints.down('lg')]: {
        boxShadow: `0 0 0 1px ${theme.palette.primary.main}`
      }
    }
  },
  fillSecondary: {
    [`& .${classes.paper}`]: {
      color: theme.palette.secondary.main
    },
    '& i': {
      '&:before': {
        background: `linear-gradient(120deg, ${theme.palette.common.white}, ${theme.palette.secondary.main})`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
      }
    },
    '& svg': {
      fill: theme.palette.secondary.main
    },
    '& a': {
      [theme.breakpoints.down('lg')]: {
        boxShadow: `0 0 0 1px ${theme.palette.secondary.main}`
      }
    }
  },
  fillAccent: {
    [`& .${classes.paper}`]: {
      color: theme.palette.accent.main
    },
    '& i': {
      '&:before': {
        background: `linear-gradient(120deg, ${theme.palette.accent.light}, ${theme.palette.accent.main})`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
      }
    },
    '& svg': {
      fill: theme.palette.accent.main
    },
    '& a': {
      [theme.breakpoints.down('lg')]: {
        boxShadow: `0 0 0 1px ${theme.palette.accent.main}`
      }
    }
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default businessStyles;
