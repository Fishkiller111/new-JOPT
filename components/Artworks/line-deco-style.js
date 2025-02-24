import { makeStyles } from 'tss-react/mui';
import gradient from 'theme/gradient';

const string1 = '/images/decoration/string1.svg';
const string2 = '/images/decoration/string2.svg';

const useStyles = makeStyles({ uniqId: 'line_deco' })((theme) => ({
  line: {
    position: 'absolute',
    zIndex: 0,
    width: '100%',
    height: 500,
    bottom: 0,
    overflow: 'hidden'
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
    top: 300,
    left: 0,
    '& span': {
      background: theme.palette.mode === 'dark' ? gradient(theme).triple.dark : gradient(theme).triple.light,
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
    top: 400,
    left: 0,
    '& span': {
      background: theme.palette.mode === 'dark' ? gradient(theme).double.dark : gradient(theme).double.light,
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
    left: 0,
    '& span': {
      background: theme.palette.mode === 'dark' ? gradient(theme).double.dark : gradient(theme).double.light,
    }
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
