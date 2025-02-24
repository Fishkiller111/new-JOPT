import { makeStyles } from 'tss-react/mui';
import { darken } from '@mui/material/styles';
import gradient from 'theme/gradient';

const blogStyles = makeStyles({ uniqId: 'popular' })((theme, _params, classes) => ({
  root: {
    position: 'relative',
    padding: theme.spacing(10, 0),
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(5, 0)
    },
    [theme.breakpoints.down('sm')]: {
      padding: 0
    },
  },
  wrap: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center'
  },
  sliderWrap: {
    position: 'relative',
    marginTop: theme.spacing(5)
  },
  btn: {
    width: '100%',
  },
  floatingArtwork: {
    position: 'absolute',
    width: '100%',
    top: theme.spacing(15),
    right: theme.direction === 'rtl' ? 40 : 'auto',
    left: theme.direction === 'rtl' ? 'auto' : 40,
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
    },
  },
  props: {
    [theme.breakpoints.down('lg')]: {
      display: 'none !important'
    },
    '& > div': {
      width: 450,
      height: 2
    },
    '&:focus': {
      outline: 'none'
    }
  },
  carousel: {
    position: 'relative',
    overflow: 'hidden',
    zIndex: 5,
    [theme.breakpoints.up('md')]: {
      marginBottom: -20
    },
    '& ul[class="slick-dots"]': {
      bottom: theme.spacing(-10),
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
    top: '38%',
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
  },
  background: {
    position: 'absolute',
    height: 480,
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(5),
    borderRadius: 40,
    top: 0,
    backgroundImage: theme.palette.mode === 'dark' ? `linear-gradient(121deg, ${theme.palette.accent.light} -80%, ${theme.palette.primary.dark} 45%, ${theme.palette.secondary.dark} 100%)` : `linear-gradient(121deg, ${theme.palette.secondary.light} 0%, ${theme.palette.primary.light} 100%)`,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '90%',
    },
    '& h2': {
      marginBottom: theme.spacing(2),
      '& span': {
        width: 48,
        height: 48,
        display: 'inline-block',
        borderRadius: '50%',
        marginRight: theme.spacing(),
        backgroundImage: 'linear-gradient(159deg, #FF4081 0%, #C00D4F 100%)',
      },
      display: 'block',
      fontWeight: theme.typography.fontWeightBold,
    }
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default blogStyles;
