import { makeStyles } from 'tss-react/mui';

const videoStyles = makeStyles({ uniqId: 'video_art' })((theme) => ({
  root: {
    perspective: 1000,
    display: 'block',
    textAlign: 'center',
  },
  playBtn: {
    position: 'absolute',
    color: theme.palette.common.white,
    width: 70,
    height: 70,
    left: 'calc(50% - 35px)',
    boxShadow: `0 0 15px -2px ${theme.palette.secondary.light}`,
    '& svg': {
      fill: theme.palette.common.white,
      width: 50,
      height: 50,
    }
  },
  video: {
    maxWidth: 600,
    margin: '0 auto',
    marginBottom: theme.spacing(5),
    borderRadius: theme.rounded.big,
    transform: 'rotateY( 0 ) rotateX(35deg) rotateZ(0deg)',
    height: 300,
    background: theme.palette.background.paper,
    [theme.breakpoints.down('sm')]: {
      height: 200,
      '&:before, &:after': {
        display: 'none'
      }
    },
    '&:before': {
      content: '""',
      position: 'absolute',
      borderRadius: theme.rounded.medium,
      top: 0,
      left: -5,
      width: 600,
      height: 320,
      border: `1px solid ${theme.palette.primary.main}`
    },
    '&:after': {
      content: '""',
      position: 'absolute',
      borderRadius: theme.rounded.medium,
      top: 5,
      right: -5,
      width: 600,
      height: 320,
      border: `1px solid ${theme.palette.primary.main}`
    },
    '& span': {
      zIndex: 2,
      position: 'absolute',
      borderRadius: theme.rounded.medium,
      overflow: 'hidden',
      boxShadow: '0 10px 20px 5px rgba(0, 0, 0, 0.25)',
      '& img': {
        width: '100%',
      }
    }
  },
  cover: {
    position: 'relative',
    zIndex: 2,
    overflow: 'hidden',
    borderRadius: theme.rounded.big,
    height: '99%',
    '& img': {
      margin: '0 auto',
      width: '100%'
    }
  },
  topLeft: {
    top: 20,
    left: -50,
    width: 135,
    height: 95,
    [theme.breakpoints.down('sm')]: {
      left: 10,
      top: 180,
    }
  },
  topRight: {
    top: 90,
    right: -40,
    width: 120,
    height: 70,
    [theme.breakpoints.down('sm')]: {
      right: 10,
      top: 230,
    }
  },
  bottomLeft: {
    bottom: -60,
    left: -60,
    width: 128,
    height: 120,
    [theme.breakpoints.down('sm')]: {
      left: 100,
      bottom: -70,
    }
  },
  bottomRight: {
    bottom: -30,
    right: -20,
    width: 350,
    height: 70,
    [theme.breakpoints.down('sm')]: {
      right: 20,
      bottom: -150,
      width: 280,
      height: 60,
    }
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default videoStyles;
