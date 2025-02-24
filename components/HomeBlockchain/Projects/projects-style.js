import { makeStyles } from 'tss-react/mui';
import { darken } from '@mui/material/styles';
import gradient from 'theme/gradient';

const blogStyles = makeStyles({ uniqId: 'popular' })((theme, _params, classes) => ({
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
        marginLeft: theme.spacing(5)
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
    position: 'relative',
    overflow: 'hidden',
    paddingBottom: theme.spacing(5)
  },
  floatingArtwork: {
    position: 'absolute',
    width: '100%',
    top: theme.spacing(25),
    right: theme.direction === 'rtl' ? -50 : 'auto',
    left: theme.direction === 'rtl' ? 'auto' : -50,
    direction: theme.direction === 'rtl' ? 'rtl' : 'ltr',
    [`& .${classes.artwork}`]: {
      [theme.breakpoints.up('md')]: {
        marginRight: theme.spacing(5)
      },
      [theme.breakpoints.up('lg')]: {
        flot: 'right'
      },
      '@media (min-width: 1400px)': {
        marginRight: theme.spacing(-5)
      }
    }
  },
  props: {
    [theme.breakpoints.down('md')]: {
      display: 'none !important',
      width: 1,
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
    },
    '& div[class="slick-track"]': {
      display: 'flex'
    },
    '& ul[class="slick-dots"]': {
      bottom: theme.spacing(-4),
      '& li': {
        width: 15,
        height: 15,
        boxShadow: `inset 0 0 0 1px ${theme.palette.text.disabled}`,
        border: 'none',
        borderRadius: 15,
        opacity: 1,
        margin: '0 4px !important',
        transition: 'width 0.5s ease-in',
        overflow: 'hidden',
        '& button': {
          background: gradient(theme).triple.light,
          opacity: 0,
          width: '100%',
          height: '100%',
          transition: 'opacity 1s ease-in',
        },
        '&[class="slick-active"]': {
          boxShadow: 'none',
          width: 40,
          '& button': {
            opacity: 1,
          },
        }
      },
      '& li button:before': {
        display: 'none'
      }
    }
  },
  item: {
    padding: theme.spacing(0, 1.5),
    direction: 'ltr',
    '&:focus': {
      outline: 'none',
      margin: '0 auto'
    },
    '& > *': {
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
    top: '47%',
    borderRadius: theme.rounded.small,
    width: 48,
    height: 100,
    padding: 0,
    minWidth: 0,
    zIndex: 10,
    background: theme.palette.primary.main,
    boxShadow: theme.shadows[3],
    transform: theme.direction === 'rtl' ? 'scale(-1.6)' : 'scale(1.6)',
    '&:hover': {
      background: darken(theme.palette.primary.main, 0.2),
    },
    '& i': {
      color: theme.palette.common.white,
    },
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  prev: {
    left: -2,
  },
  next: {
    right: 2,
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default blogStyles;
