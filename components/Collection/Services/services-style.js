import { makeStyles } from 'tss-react/mui';
import { darken } from '@mui/material/styles';
import gradient from 'theme/gradient';

const useStyles = makeStyles({ uniqId: 'services' })((theme, _params, classes) => ({
  root: {
    position: 'relative',
    [theme.breakpoints.down('md')]: {
      overflow: 'hidden',
      textAlign: 'center'
    }
  },
  carouselHeader: {
    position: 'relative',
    zIndex: 3,
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center'
    },
  },
  viewAll: {
    padding: '6px 24px',
    color: theme.palette.mode === 'dark' ? theme.palette.secondary.light : theme.palette.primary.main,
    [theme.breakpoints.down('md')]: {
      marginBottom: 32
    },
  },
  icon: {
    marginLeft: theme.spacing(),
    transform: theme.direction === 'rtl' ? 'scale(-1)' : 'inherit',
    '& svg': {
      width: 36
    }
  },
  sliderWrap: {
    position: 'relative',
    overflow: 'hidden',
  },
  floatingText: {
    position: 'absolute',
    width: 300,
    height: '100%',
    display: 'flex',
    paddingTop: theme.spacing(3),
    paddingLeft: theme.spacing(6),
    lineHeight: '24px',
    left: theme.direction === 'rtl' ? 'auto' : 0,
    right: theme.direction === 'rtl' ? 0 : 'auto',
    '& p': {
      fontSize: 22,
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
    },
    '& ul[class="slick-dots"]': {
      bottom: -5,
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
    top: '32%',
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
  desc: {
    position: 'relative',
    zIndex: 60
  },
  itemText: {
    position: 'relative',
    marginBottom: theme.spacing(10),
    [theme.breakpoints.up('md')]: {
      minHeight: 320,
      marginBottom: theme.spacing(15),
    },
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
    },
    '& h6': {
      marginBottom: theme.spacing(4),
    },
    [`&.${classes.last}`]: {
      marginBottom: theme.spacing(5),
      [theme.breakpoints.down('sm')]: {
        marginBottom: 0
      }
    }
  },
  illustration: {
    position: 'relative',
    display: 'inline-block',
    borderRadius: theme.rounded.big,
    width: 280,
    height: 280,
    [theme.breakpoints.up('lg')]: {
      margin: theme.spacing(0, 5),
    },
    [theme.breakpoints.down('md')]: {
      width: 180,
      height: 180,
    },
    [`&.${classes.primary}`]: {
      backgroundImage: `linear-gradient(120deg, rgba(0, 0, 0, 0) 30%, ${theme.palette.primary.main} 130%)`
    },
    [`&.${classes.secondary}`]: {
      backgroundImage: `linear-gradient(120deg, rgba(0, 0, 0, 0) 30%, ${theme.palette.secondary.main} 130%)`
    },
    [`&.${classes.accent}`]: {
      backgroundImage: `linear-gradient(120deg, rgba(0, 0, 0, 0) 30%, ${theme.palette.accent.main} 130%)`
    },
    '& > div': {
      position: 'absolute',
      top: 10,
      left: -50,
      fontSize: 100,
      transformOrigin: 'center left',
      transform: 'scale(2)',
      [theme.breakpoints.up('md')]: {
        transform: 'scale(3.5)',
      }
    }
  },
  progress: {
    flex: 1,
    marginBottom: theme.spacing(8),
    [`&.${classes.last}`]: {
      marginBottom: 0
    },
    [`& .${classes.text}`]: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: theme.spacing(),
      '& p': {
        fontSize: 18,
        fontWeight: theme.typography.fontWeightMedium,
      },
      '& h3': {
        fontWeight: theme.typography.fontWeightMedium,
        fontSize: 36,
        '& span': {
          fontSize: 22
        }
      }
    }
  },
  progressBg: {
    borderRadius: 10,
    background: theme.palette.divider,
    height: 10
  },
  bar: {
    borderRadius: 10,
    backgroundImage: `linear-gradient(120deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main});`,
  },
  range: {
    borderRadius: 10,
    height: '100%',
    position: 'relative',
    backgroundImage: gradient(theme).triple.light,
    transition: 'width 0.5s ease-out',
    transform: theme.direction === 'rtl' ? 'translateX(50%)' : 'none',
    '& span': {
      position: 'absolute',
      fontWeight: theme.typography.fontWeightMedium,
      fontSize: 18,
      top: '-300%',
      '&:first-of-type': {
        transform: 'translateX(-50%)'
      },
      '&:last-child': {
        right: 0,
        transform: 'translateX(50%)'
      }
    }
  },
  action: {
    [theme.breakpoints.up('md')]: {
      height: '100%',
    },
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(3, 0)
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
