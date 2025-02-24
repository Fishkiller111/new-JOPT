import { makeStyles } from 'tss-react/mui';
import gradient from 'theme/gradient';

const useStyles = makeStyles({ uniqId: 'arrow_button' })((theme) => ({
  btnStandard: {
    color: theme.palette.common.black,
    borderRadius: theme.rounded.medium,
    fontWeight: theme.typography.fontWeightBold,
    position: 'relative',
    justifyContent: 'space-between',
    textTransform: 'capitalize',
    width: '100%',
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(2.5, 3),
      fontSize: 20,
      marginBottom: theme.spacing(6),
    },
    '& svg': {
      width: 40,
      height: 40,
      transform: theme.direction === 'rtl' ? 'scale(-1)' : 'none',
    }
  },
  primary: {
    background: `linear-gradient(120deg, ${theme.palette.secondary.light} 0%, ${theme.palette.primary.light} 70%)`,
  },
  secondary: {
    background: `linear-gradient(120deg, ${theme.palette.secondary.main} 0%, ${theme.palette.common.white} 100%)`,
  },
  accent: {
    background: `linear-gradient(120deg, ${theme.palette.secondary.main} 0%, ${theme.palette.primary.light} 50%, ${theme.palette.accent.light} 100%)`,
  },
  btnLarge: {
    overflow: 'hidden',
    borderRadius: theme.rounded.large,
    padding: theme.spacing(4),
    background: gradient(theme).triple.light,
    '& h2': {
      color: theme.palette.common.white,
      fontWeight: theme.typography.fontWeightBold,
      fontSize: 40,
      lineHeight: '60px',
      textTransform: 'capitalize',
      position: 'relative',
      zIndex: 2,
      textAlign: 'left',
      paddingRight: theme.spacing(5),
      [theme.breakpoints.down('lg')]: {
        fontSize: 32,
        lineHeight: '48px',
      }
    },
    '& img': {
      position: 'absolute',
      bottom: 0,
      right: -200
    },
    '& svg': {
      position: 'absolute',
      width: 160,
      height: 160,
      opacity: 0.2,
      right: -20,
      fill: theme.palette.common.black,
      transform: theme.direction === 'rtl' ? 'scale(-1)' : 'none'
    }
  },
  deco: {
    position: 'absolute',
    filter: 'blur(20px)',
    opacity: 0.9,
    width: '100%',
    height: '100%',
    bottom: '30%',
    left: '50%',
    transform: 'scale(2)',
    '& span': {
      position: 'absolute',
      borderRadius: '50%',
      left: 100,
      top: -300,
    },
    '& span:nth-of-type(1)': {
      left: -50,
      top: 80,
      width: 230,
      height: 115,
      background: gradient(theme).triple.main,
      transform: 'rotate(-20deg)'
    },
    '& span:nth-of-type(2)': {
      left: 60,
      top: -40,
      width: 178,
      height: 176,
      background: gradient(theme).triple.light,
      transform: 'rotate(-120deg)'
    },
    '& span:nth-of-type(3)': {
      left: 40,
      top: -10,
      width: 240,
      height: 137,
      background: gradient(theme).double.main,
      transform: 'rotate(-35deg)'
    },
  },
  fullHeight: {
    height: '100%',
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
