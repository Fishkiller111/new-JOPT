import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles({ uniqId: 'about' })((theme, _params, classes) => ({
  parallaxScene: {
    zIndex: 10,
    right: 0,
    top: 0,
    position: 'absolute',
    width: 1200,
    height: 300,
    '& > div': {
      position: 'absolute',
    },
    [theme.breakpoints.down('lg')]: {
      display: 'none'
    }
  },
  parallaxWrap: {
    position: 'absolute',
    width: '100%',
    height: '30%',
    left: 0,
    top: 0,
    zIndex: 1,
    [theme.breakpoints.down('lg')]: {
      display: 'none'
    },
  },
  innerParallax: {
    height: 400,
    width: '100%',
    position: 'absolute',
    display: 'block',
    overflow: 'hidden',
    opacity: theme.palette.mode === 'dark' ? 1 : 0.5,
  },
  objHover: {
    position: 'absolute',
    '& img': {
      width: '100%',
      height: '100%',
      display: 'block'
    },
  },
  objScroll: {
    position: 'relative',
    '& img': {
      width: '100%',
      height: '100%',
      display: 'block'
    },
  },
  start: {
    width: '50%'
  },
  end: {
    width: '50%',
    [`& .${classes.objHover}`]: {
      marginLeft: 'auto'
    },
    [`& .${classes.objScroll}`]: {
      marginLeft: 'auto'
    },
  },
  endBottom: {
    width: '50%',
    [`& .${classes.objHover}`]: {
      marginLeft: 'auto'
    },
    [`& .${classes.objScroll}`]: {
      marginLeft: 'auto'
    },
  },
  geometric: {
    width: '100%',
    height: '100%',
    [`& .${classes.start}`]: {
      top: 0,
      left: 15,
    },
    [`& .${classes.end}`]: {
      top: 0,
      right: 0,
    },
    [`& .${classes.ringLeft}`]: {
      width: 106,
      height: 106,
      filter: 'blur(5px) drop-shadow(20px 25px 5px rgba(0, 0, 0, 0.3))'
    },
    [`& .${classes.box}`]: {
      width: 150,
      height: 150,
    },
    [`& .${classes.ringRight}`]: {
      width: 80,
      height: 80,
      filter: 'blur(5px) drop-shadow(20px 25px 5px rgba(0, 0, 0, 0.3))'
    },
    [`& .${classes.ball}`]: {
      width: 120,
      height: 120,
    },
  },
  flowers: {
    width: '100%',
    height: '100%',
    [`& .${classes.start}`]: {
      top: 100,
      left: -150,
    },
    [`& .${classes.end}`]: {
      top: -20,
      right: 0,
    },
    [`& .${classes.endBottom}`]: {
      top: 250,
      right: 0,
    },
    [`& .${classes.tornado}`]: {
      width: 80,
      height: 80,
      filter: 'blur(5px) drop-shadow(20px 25px 5px rgba(0, 0, 0, 0.3))'
    },
    [`& .${classes.snail}`]: {
      width: 232,
      height: 232,
    },
    [`& .${classes.bom}`]: {
      width: 80,
      height: 80,
      filter: 'blur(5px) drop-shadow(20px 25px 5px rgba(0, 0, 0, 0.3))'
    },
    [`& .${classes.flower}`]: {
      width: 150,
      height: 150,
    },
    [`& .${classes.ring}`]: {
      width: 80,
      height: 80,
      filter: 'blur(5px) drop-shadow(20px 25px 5px rgba(0, 0, 0, 0.3))'
    },
    [`& .${classes.ball}`]: {
      width: 160,
      height: 160,
    },
  },
  planet: {
    width: '100%',
    height: '100%',
    [`& .${classes.start}`]: {
      top: 100,
      left: -150,
    },
    [`& .${classes.end}`]: {
      top: -20,
      right: 0,
    },
    [`& .${classes.endBottom}`]: {
      top: 250,
      right: 0,
    },
    [`& .${classes.noodle}`]: {
      width: 156,
      height: 156,
      filter: 'blur(5px) drop-shadow(20px 25px 5px rgba(0, 0, 0, 0.3))'
    },
    [`& .${classes.ufo}`]: {
      width: 232,
      height: 232,
      left: 50,
      transform: 'rotate(-65deg)'
    },
    [`& .${classes.bom}`]: {
      width: 80,
      height: 80,
      top: -100,
      filter: 'blur(5px) drop-shadow(20px 25px 5px rgba(0, 0, 0, 0.3))'
    },
    [`& .${classes.flower}`]: {
      width: 150,
      height: 150,
    },
    [`& .${classes.ring}`]: {
      width: 80,
      height: 80,
      filter: 'blur(5px) drop-shadow(20px 25px 5px rgba(0, 0, 0, 0.3))'
    },
    [`& .${classes.ball}`]: {
      width: 160,
      height: 160,
    },
  },
  snail: {
    width: '100%',
    height: '100%',
    [`& .${classes.start}`]: {
      top: 50,
      left: -150,
    },
    [`& .${classes.end}`]: {
      top: 200,
      right: 0,
    },
    [`& .${classes.ball}`]: {
      width: 170,
      height: 170,
      transform: 'rotate(-70deg)'
    },
    [`& .${classes.plate}`]: {
      width: 100,
      height: 100,
      transform: 'rotate(-50deg)',
      filter: 'blur(5px) drop-shadow(20px 25px 5px rgba(0, 0, 0, 0.3))'
    },
    [`& .${classes.flower}`]: {
      width: 150,
      height: 150,
      transform: 'rotate(-50deg)'
    },
    [`& .${classes.wormhole}`]: {
      width: 80,
      height: 80,
      transform: 'rotate(60deg)',
      filter: 'blur(5px) drop-shadow(20px 25px 5px rgba(0, 0, 0, 0.3))'
    },
  },
  ufo: {
    width: '100%',
    height: '100%',
    [`& .${classes.start}`]: {
      top: 0,
      left: 15,
    },
    [`& .${classes.end}`]: {
      top: 0,
      right: 0,
    },
    [`& .${classes.ringLeft}`]: {
      width: 106,
      height: 106,
      filter: 'blur(5px) drop-shadow(20px 25px 5px rgba(0, 0, 0, 0.3))'
    },
    [`& .${classes.plate}`]: {
      width: 150,
      height: 150,
    },
    [`& .${classes.ringRight}`]: {
      width: 80,
      height: 80,
      filter: 'blur(5px) drop-shadow(20px 25px 5px rgba(0, 0, 0, 0.3))'
    },
    [`& .${classes.orbit}`]: {
      width: 130,
      height: 170,
      transform: 'rotate(65deg)',
    },
  },
  basket: {
    width: '100%',
    height: '100%',
    [`& .${classes.start}`]: {
      top: 0,
      left: 15,
    },
    [`& .${classes.end}`]: {
      top: 0,
      right: 0,
    },
    [`& .${classes.bom}`]: {
      width: 60,
      height: 60,
      filter: 'blur(5px) drop-shadow(20px 25px 5px rgba(0, 0, 0, 0.3))'
    },
    [`& .${classes.ring2}`]: {
      width: 120,
      height: 90,
      transform: 'rotate(135deg)',
    },
    [`& .${classes.ring}`]: {
      width: 60,
      height: 90,
      transform: 'rotate(-35deg)',
      filter: 'blur(5px) drop-shadow(20px 25px 5px rgba(0, 0, 0, 0.3))'
    },
    [`& .${classes.ball}`]: {
      width: 160,
      height: 160,
      transform: 'rotate(65deg)',
    },
  },
  food: {
    width: '100%',
    height: '100%',
    [`& .${classes.start}`]: {
      top: 0,
      left: -150,
    },
    [`& .${classes.end}`]: {
      top: 100,
      right: 0,
    },
    [`& .${classes.ufo}`]: {
      width: 222,
      height: 192,
      left: 50,
      transform: 'rotate(-45deg)'
    },
    [`& .${classes.plate}`]: {
      width: 100,
      height: 100,
      transform: 'rotate(-50deg)',
      filter: 'blur(5px) drop-shadow(20px 25px 5px rgba(0, 0, 0, 0.3))'
    },
    [`& .${classes.tube}`]: {
      width: 150,
      height: 150,
      transform: 'rotate(190deg)'
    },
    [`& .${classes.wormhole}`]: {
      width: 80,
      height: 80,
      transform: 'rotate(60deg)',
      filter: 'blur(5px) drop-shadow(20px 25px 5px rgba(0, 0, 0, 0.3))'
    },
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
