import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles({ uniqId: 'popular' })((theme, _params, classes) => ({
  carouselHeader: {
    position: 'relative',
    zIndex: 3,
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: theme.spacing(0, 10),
      '& > div': {
        maxWidth: '33%'
      },
      '& > p': {
        flex: 1,
        marginLeft: theme.spacing(3)
      }
    },
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
      marginBottom: theme.spacing(5)
    },
  },
  viewAll: {
    padding: '6px 24px',
    color: theme.palette.mode === 'dark' ? theme.palette.secondary.light : theme.palette.primary.main,
    [theme.breakpoints.up('lg')]: {
      marginRight: 160
    },
  },
  icon: {
    marginLeft: theme.spacing(),
    transform: theme.direction === 'rtl' ? 'scale(-1)' : 'inherit',
    '& svg': {
      width: 36
    }
  },
  root: {
    overflow: 'hidden',
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(5, 0)
    },
  },
  floatingArtwork: {
    position: 'absolute',
    width: '100%',
    top: theme.spacing(10),
    right: theme.direction === 'rtl' ? -80 : 'auto',
    left: theme.direction === 'rtl' ? 'auto' : -80,
    direction: theme.direction === 'rtl' ? 'rtl' : 'ltr',
    [`& .${classes.artwork}`]: {
      [theme.breakpoints.up('md')]: {
        marginRight: theme.spacing(5)
      },
      [theme.breakpoints.up('lg')]: {
        float: 'right'
      },
      '@media (min-width: 1400px)': {
        marginRight: theme.spacing(-5)
      }
    }
  },
  props: {
    [theme.breakpoints.down('md')]: {
      display: 'none !important'
    },
    '& > div': {
      width: 350,
      height: 2
    },
    '&:focus': {
      outline: 'none'
    }
  },
  carousel: {
    position: 'relative',
    zIndex: 5,
    [theme.breakpoints.up('md')]: {
      marginBottom: -20
    }
  },
  item: {
    padding: theme.spacing(0, 1.5),
    direction: 'ltr',
    '&:focus': {
      outline: 'none',
      margin: '0 auto'
    },
    '& > div': {
      width: 320
    }
  },
  link: {
    padding: 0,
    '& span': {
      textTransform: 'none',
      fontWeight: theme.typography.fontWeightRegular,
    }
  },
  nav: {
    position: 'absolute',
    top: '50%',
    borderRadius: '50%',
    width: 48,
    height: 48,
    padding: 0,
    minWidth: 0,
    zIndex: 10,
    background: theme.palette.background.paper,
    boxShadow: theme.shadows[3],
    transform: theme.direction === 'rtl' ? 'scale(-1.6)' : 'scale(1.6)',
    '&:hover': {
      background: theme.palette.background.paper
    },
    '& i': {
      color: theme.palette.text.primary,
    },
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  prev: {
    left: 6,
  },
  next: {
    right: 6,
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
