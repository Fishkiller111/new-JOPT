import { makeStyles } from 'tss-react/mui';
import gradient from 'theme/gradient';

const photoCardStyles = makeStyles({ uniqId: 'photo_card' })((theme, _params, classes) => ({
  imgThumb: {
    position: 'relative',
    borderRadius: theme.rounded.big,
    overflow: 'hidden',
    '& button': {
      textAlign: 'left',
      width: '100%',
      height: '100%',
    },
    [`& .${classes.figure}`]: {
      height: '100%',
      width: '100%',
      position: 'relative',
      margin: 0,
      overflow: 'hidden',
      borderRadius: theme.rounded.big,
    },
    [`& .${classes.img}`]: {
      display: 'block',
      width: '100%',
      height: '100%',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      transform: 'scale(1.1)',
      transition: 'transform 0.2s ease-out',
    },
    '&:hover': {
      [`& .${classes.img}`]: {
        transform: 'scale(1)'
      },
      [`& .${classes.detail}`]: {
        opacity: 1,
        backgroundPosition: '60% 0',
        '&:before': {
          bottom: 0
        },
        '& h6, & a': {
          transform: 'translate(0, 20px)',
        }
      }
    }
  },
  detail: {
    position: 'absolute',
    transition: 'all 0.3s ease-out',
    width: '100%',
    bottom: 0,
    opacity: 0,
    background: gradient(theme).triple.light,
    backgroundSize: '300%',
    backgroundPosition: '0% 0',
    padding: theme.spacing(3),
    borderRadius: theme.rounded.big,
    color: theme.palette.common.black,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    '& > *': {
      transition: 'all 0.4s ease-out'
    },
    '& h6': {
      position: 'relative',
      transform: 'translate(0, 60px)',
      marginBottom: theme.spacing(3),
      lineHeight: '36px'
    },
    '& a': {
      fontSize: 18,
      textDecoration: 'underline',
      color: theme.palette.primary.main,
      position: 'relative',
      transform: 'translate(0, 60px)',
    },
  },
  short: {
    height: 240,
    [theme.breakpoints.down('lg')]: {
      height: 210
    },
    [`& .${classes.img}`]: {
      width: '100%'
    },
    '&:before': {
      width: 80,
      height: 80
    },
    [`& .${classes.detail}`]: {
      height: '100%',
    }
  },
  medium: {
    height: 320,
    [theme.breakpoints.down('sm')]: {
      height: 210
    },
    [`& .${classes.img}`]: {
      width: '100%'
    },
    [`& .${classes.detail}`]: {
      height: '80%',
    }
  },
  long: {
    height: 480,
    [theme.breakpoints.down('sm')]: {
      height: 210
    },
    [`& .${classes.img}`]: {
      height: '100%'
    },
    '&:before': {
      width: 190,
      height: 260
    },
    [`& .${classes.figure}`]: {
      '&:after': {
        width: 300,
        height: 300,
        left: -200,
        bottom: -120,
      }
    },
    [`& .${classes.detail}`]: {
      height: '80%',
    }
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default photoCardStyles;
