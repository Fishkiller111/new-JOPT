import { makeStyles } from 'tss-react/mui';
import gradient from 'theme/gradient';

const illustration = '/images/inner/fog.png';
const abstract = '/images/inner/abstract.png';

const useStyles = makeStyles({ uniqId: 'action' })(theme => ({
  root: {
    position: 'relative',
    marginBottom: theme.spacing(5),
    [theme.breakpoints.up('md')]: {
      margin: theme.spacing(10, 'auto'),
    },
    '&:before': {
      content: '""',
      top: -400,
      left: 400,
      position: 'absolute',
      background: `url(${abstract}) no-repeat`,
      backgroundSize: '100% 100%',
      width: 700,
      height: 900,
      transform: 'rotate(100deg)',
      filter: 'blur(15px)',
      opacity: 0.2,
      [theme.breakpoints.down('lg')]: {
        display: 'none'
      },
    }
  },
  action: {
    textAlign: 'center',
    position: 'relative',
    zIndex: 1,
    overflow: 'hidden',
    borderRadius: 60,
    color: theme.palette.common.black,
    background: gradient(theme).triple.light,
    [theme.breakpoints.up('lg')]: {
      margin: theme.spacing(0, 10)
    },
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2)
    },
    '& h4': {
      position: 'relaitve',
      zIndex: 1,
    }
  },
  wrap: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 60,
    padding: theme.spacing(5, 2, 2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(10),
    },
    [theme.breakpoints.up('md')]: {
      background: `url(${illustration}) no-repeat transparent -210px -30px`,
      backgroundSize: '100% auto',
      padding: theme.spacing(5),
    },
  },
  btnArea: {
    position: 'relaitve',
    zIndex: 1,
    justifyContent: 'center',
    display: 'flex',
    marginTop: theme.spacing(5),
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(2),
      justifyContent: 'space-around'
    },
    '& a': {
      minWidth: 200,
      fontSize: 18,
      padding: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        marginRight: theme.spacing(2)
      },
      [theme.breakpoints.down('sm')]: {
        margin: 4
      },
      '& img': {
        width: 160,
        [theme.breakpoints.down('sm')]: {
          width: '100%'
        }
      }
    }
  },
  doubleMain: { background: gradient(theme).double.main },
  tripleLight: { background: gradient(theme).triple.light },
  tripleMain: { background: gradient(theme).triple.main },
  fog: {
    filter: 'blur(60px)',
    width: 700,
    height: 600,
    opacity: 0.75,
    position: 'absolute',
    top: 100,
    left: '30%',
    '& > div': {
      borderRadius: 500,
      position: 'absolute',
      transition: 'all 1.5s cubic-bezier(.11,.99,.81,1.13)'
    }
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
