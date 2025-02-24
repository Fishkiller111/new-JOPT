import { makeStyles } from 'tss-react/mui';
import gradient from 'theme/gradient';

const string1 = '/images/decoration/string1.svg';
const string2 = '/images/decoration/string2.svg';

const useStyles = makeStyles({ uniqId: 'gallery' })((theme) => ({
  static: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    overflow: 'hidden',
    position: 'relative',
    zIndex: 10
  },
  slider: {
    position: 'relative',
    zIndex: 3,
    overflow: 'hidden'
  },
  gallery: {
    display: 'flex',
    flexShrink: 0,
    [theme.breakpoints.down('xl')]: {
      width: 1400,
    },
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(10),
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: -140,
      width: 700,
    },
    '& > div': {
      flex: 1,
    },
    '& figure': {
      margin: theme.spacing(2, 1),
      overflow: 'hidden',
      borderRadius: theme.rounded.medium,
      '& img': {
        width: '100%',
        display: 'block'
      }
    }
  },
  person: {
    position: 'relative',
    '& figure': {
      overflow: 'visible',
      borderRadius: theme.rounded.medium,
      background: theme.palette.accent.light,
      height: 350,
      width: 240,
      margin: theme.spacing(0, 2),
      position: 'static',
      display: 'flex',
      alignItems: 'flex-end',
      '& img': {
        display: 'block',
        height: 450,
        width: 260,
        position: 'relative',
      }
    }
  },
  btn: {
    borderRadius: theme.rounded.medium,
    background: gradient(theme).triple.light,
    color: theme.palette.common.black,
    height: 60,
    fontWeight: theme.typography.fontWeightBold,
    fontSize: 20,
    textTransform: 'capitalize',
    '& svg': {
      width: 32,
      height: 32,
      transform: theme.direction === 'rtl' ? 'scale(-1)' : 'none'
    }
  },
  stringDeco: {
    width: '100%',
    position: 'absolute',
    '& span': {
      position: 'absolute',
      width: '100%',
      height: '100%',
    }
  },
  string1: {
    height: 635,
    maskImage: `url(${string1})`,
    WebkitMaskImage: `url(${string1})`,
    maskRepeat: 'no-repeat',
    WebkitMaskRepeat: 'no-repeat',
    maskSize: '100%',
    WebkitMaskSize: '100%',
    top: 30,
    left: 0,
    '& span': {
      background: gradient(theme).triple.light,
    }
  },
  string2: {
    zIndex: 1,
    height: 700,
    maskImage: `url(${string2})`,
    WebkitMaskImage: `url(${string2})`,
    maskRepeat: 'no-repeat',
    WebkitMaskRepeat: 'no-repeat',
    maskSize: '100%',
    WebkitMaskSize: '100%',
    top: 40,
    left: 20,
    '& span': {
      background: gradient(theme).triple.main,
    }
  },
  string3: {
    zIndex: 1,
    height: 700,
    maskImage: `url(${string2})`,
    WebkitMaskImage: `url(${string2})`,
    maskRepeat: 'no-repeat',
    WebkitMaskRepeat: 'no-repeat',
    maskSize: '100%',
    WebkitMaskSize: '100%',
    top: 240,
    left: 20,
    '& span': {
      background: gradient(theme).triple.main,
    }
  },
  carousel: {
    overflow: 'hidden',
    margin: theme.spacing(8, 0),
    [theme.breakpoints.down('lg')]: {
      marginTop: theme.spacing(3),
      marginBottom: 0
    }
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
