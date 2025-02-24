import { makeStyles } from 'tss-react/mui';
import { darken, alpha } from '@mui/material/styles';

const roomDark = '/images/profile/room_dark.jpg';
const roomLight = '/images/profile/room_light.jpg';

const statisticStyles = makeStyles({ uniqId: 'statistic' })((theme) => ({
  root: {
    position: 'relative',
  },
  wrapper: {
    position: 'relative',
    zIndex: 2,
    [theme.breakpoints.down('lg')]: {
      padding: theme.spacing(0, 3),
    }
  },
  background: {
    borderRadius: '60px 60px 0 0',
    position: 'relative',
    backgroundImage: theme.palette.mode === 'dark' ? `url(${roomDark})` : `url(${roomLight})`,
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100%',
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
    backgroundPosition: 'center -180px',
    [theme.breakpoints.down('md')]: {
      backgroundPosition: 'center bottom',
      backgroundSize: 'cover'
    },
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(15, 0, 20),
    },
    '&:after': {
      content: '""',
      borderRadius: '60px 60px 0 0',
      height: 160,
      width: '100%',
      position: 'absolute',
      bottom: -80,
      left: 0,
      background: theme.palette.mode === 'dark' ? darken(theme.palette.primary.dark, 0.5) : theme.palette.background.paper,
    }
  },
  container: {
    position: 'relative',
    zIndex: 1,
  },
  bgGradient: {
    filter: 'blur(50px)',
    position: 'absolute',
    overflow: 'hidden',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    opacity: 0.5,
    '& span': {
      position: 'absolute',
    }
  },
  ovalRight: {
    width: 1025,
    height: 2136,
    top: 100,
    right: 400,
    zIndex: 1,
    opacity: 0.3,
    background: `linear-gradient(172deg, ${theme.palette.accent.main} 20%, ${alpha(theme.palette.common.white, 0.1)} 90%)`
  },
  ovalTop: {
    width: 1612,
    height: 1612,
    top: 100,
    left: -400,
    opacity: 0.5,
    background: theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light
  },
  ovalBottom: {
    width: 1312,
    height: 1312,
    top: 600,
    left: 0,
    opacity: 0.3,
    background: theme.palette.primary.dark
  },
  wrap: {
    position: 'relative',
    zIndex: 2
  },
  section: {
    marginTop: theme.spacing(5)
  },
  avatar: {
    padding: 50,
    position: 'sticky',
    marginTop: -240,
    top: 40,
    zIndex: 1,
    display: 'block',
    marginLeft: theme.spacing(5),
    [theme.breakpoints.down('lg')]: {
      marginLeft: -75
    },
    [theme.breakpoints.down('md')]: {
      marginLeft: -160
    },
    '& img': {
      width: 400
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default statisticStyles;
