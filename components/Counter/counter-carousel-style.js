import { makeStyles } from 'tss-react/mui';

const counterStyles = makeStyles({ uniqId: 'counter_carousel' })((theme) => ({
  root: {
    position: 'relative',
    textAlign: 'center',
    padding: theme.spacing(10, 0),
    color: theme.palette.common.white,
    [theme.breakpoints.down('sm')]: {
      paddingBottom: 0
    }
  },
  bg: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    '& .MuiContainer-root': {
      [theme.breakpoints.down('md')]: {
        padding: 0
      }
    },
    '& figure': {
      width: '100%',
      borderRadius: 50,
      overflow: 'hidden',
      margin: 0,
      background: theme.palette.common.black,
      height: 640,
      [theme.breakpoints.down('sm')]: {
        height: 400
      },
      '& img': {
        opacity: 0.3,
        display: 'block',
        width: '100%',
        height: '100%',
        objectFit: 'cover'
      }
    }
  },
  sliderWrap: {
    position: 'relative',
  },
  carousel: {
    position: 'relative',
    margin: theme.spacing(8, 0),
    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing(3)
    }
  },
  item: {
    padding: theme.spacing(1, 3),
    '& img': {
      width: 90,
      display: 'block'
    },
    '&:focus': {
      outline: 'none'
    }
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default counterStyles;
