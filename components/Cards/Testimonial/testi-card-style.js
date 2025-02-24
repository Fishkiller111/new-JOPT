import { makeStyles } from 'tss-react/mui';
import gradient from 'theme/gradient';

const testiCardStyles = makeStyles({ uniqId: 'testi' })((theme, _params, classes) => ({
  testimonial: {
    maxWidth: 540,
    margin: '0 auto',
    borderRadius: 40,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    height: 240,
    [theme.breakpoints.up('sm')]: {
      height: 300,
    },
    '& figure': {
      width: '60%',
      margin: 0,
      overflow: 'hidden',
      background: gradient(theme).triple.light,
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
      '& img': {
        zIndex: 1,
        position: 'relative',
        filter: 'drop-shadow(10px 5px 10px rgba(0, 0, 0, 0.2))',
        [theme.breakpoints.up('lg')]: {
          minHeight: '100%',
          width: '100%',
        },
        [theme.breakpoints.down('lg')]: {
          height: '100%'
        }
      },
      '&:before': {
        content: '""',
        width: 400,
        height: 400,
        borderRadius: '50%',
        border: `1px solid ${theme.palette.primary.main}`,
        position: 'absolute',
        left: -105,
        top: -60,
      },
    },
    [`& .${classes.content}`]: {
      position: 'relative',
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(3),
      '& span': {
        height: 75,
        overflow: 'hidden',
        display: '-webkit-box',
        WebkitLineClamp: 3,
        WebkitBoxOrient: 'vertical',
      },
      '&:after': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
      },
      '&:before': {
        content: '""',
        position: 'absolute',
        right: 0,
        bottom: 0
      }
    },
    '& h6': {
      fontWeight: theme.typography.fontWeightBold
    }
  },
  deco: {
    position: 'absolute',
    background: theme.palette.primary.main,
    height: 428,
    width: '100%',
    top: -60,
    [theme.breakpoints.up('sm')]: {
      width: 428,
      borderRadius: '50%',
      left: -120
    },
    '&:after': {
      content: '""',
      width: 28,
      height: 28,
      position: 'absolute',
      top: 80,
      right: 25,
      borderRadius: '50%',
      backgroundImage: gradient(theme).accent,
      transform: 'scale(-1)',
      [theme.breakpoints.down('sm')]: {
        display: 'none'
      }
    },
    '&:before': {
      content: '""',
      width: 82,
      height: 82,
      position: 'absolute',
      bottom: 30,
      left: 90,
      borderRadius: '50%',
      background: theme.palette.secondary.main,
      [theme.breakpoints.down('sm')]: {
        display: 'none'
      }
    }
  },
  text: {
    flex: 1,
    color: theme.palette.common.white,
    zIndex: 2,
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(4, 0, 4, 3),
      width: '45%'
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default testiCardStyles;
