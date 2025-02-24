import { makeStyles } from 'tss-react/mui';
import { darken } from '@mui/material/styles';
import gradient from 'theme/gradient';

const iconDeco = '/images/profile/socmed-deco.png';

const blogStyles = makeStyles({ uniqId: 'blog' })(theme => ({
  root: {
    position: 'relative',
    paddingTop: theme.spacing(4),
  },
  floatingTitle: {
    height: '90%',
    width: '100%',
    position: 'absolute',
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(0, 3),
    },
    [theme.breakpoints.down('md')]: {
      display: 'none',
      '&:after, &:before': {
        display: 'none'
      }
    },
    '&:before': {
      content: '""',
      zIndex: 10,
      width: 700,
      height: 170,
      position: 'absolute',
      left: 0,
      top: -100,
      background: `url(${iconDeco}) no-repeat top left`,
    },
    '&:after': {
      content: '""',
      zIndex: 10,
      width: 700,
      height: 250,
      position: 'absolute',
      left: 0,
      bottom: -150,
      background: `url(${iconDeco}) no-repeat bottom left`,
    }
  },
  container: {
    height: '100%',
    width: '100%',
    maxWidth: 1200,
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: theme.spacing(0, 6),
    borderRadius: 60,
    background: theme.palette.mode === 'dark' ? gradient(theme).double.main : gradient(theme).triple.light,
    backgroundSize: '150%',
  },
  text: {
    left: theme.spacing(15),
    top: 0,
    maxWidth: 400,
    [theme.breakpoints.down('md')]: {
      display: 'none'
    },
    '& h3': {
      position: 'relative'
    },
    '& span': {
      color: theme.palette.common.black,
      fontSize: 100,
      position: 'absolute',
      left: -80,
      top: 0
    }
  },
  carousel: {
    position: 'relative',
    marginTop: theme.spacing(5),
    overflow: 'hidden'
  },
  item: {
    padding: theme.spacing(0, 1),
    margin: theme.spacing(1, 0),
    direction: 'ltr',
    '&:focus': {
      outline: 'none'
    }
  },
  card: {
    width: 300,
    height: 400,
    '& > a': {
      width: '100%',
      height: '100%'
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
      color: theme.palette.text.primary,
    },
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  prev: {
    left: 0,
  },
  next: {
    right: 0,
  },
  itemPropsFirst: {
    '& div': {
      width: 500,
    },
    [theme.breakpoints.down('lg')]: {
      display: 'none'
    },
  },
  itemPropsLast: {
    width: theme.direction === 'rtl' ? 350 : 400,
    '& div': {
      [theme.breakpoints.down(1500)]: {
        width: theme.direction === 'rtl' ? 300 : 500,
      }
    },
    [theme.breakpoints.down('lg')]: {
      display: 'none'
    },
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default blogStyles;
