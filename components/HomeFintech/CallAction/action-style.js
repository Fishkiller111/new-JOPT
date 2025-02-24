import { makeStyles } from 'tss-react/mui';
import { darken } from '@mui/material/styles';
import gradient from 'theme/gradient';

const useStyles = makeStyles({ uniqId: 'action' })(theme => ({
  action: {
    position: 'relative',
    zIndex: 1,
    borderRadius: 60,
    color: theme.palette.common.black,
    background: `linear-gradient(to bottom, ${theme.palette.secondary.light} 10%, ${theme.palette.accent.light} 100%)`,
    [theme.breakpoints.up('md')]: {
      margin: theme.spacing(0, 10)
    },
    [theme.breakpoints.between('sm', 'md')]: {
      textAlign: 'center',
      marginTop: theme.spacing(20)
    },
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2)
    },
    '&:before': {
      content: '""',
      height: 160,
      position: 'absolute',
      zIndex: -1,
      width: 'calc(100% - 10px)',
      left: 5,
      top: -125,
      clipPath: 'polygon(13% 0%, 0% 100%, 100% 100%, 87% 0)',
      background: `linear-gradient(transparent 35%, ${theme.palette.secondary.light} 80%)`,
      [theme.breakpoints.down('sm')]: {
        display: 'none'
      }
    }
  },
  wrap: {
    borderRadius: 60,
    padding: theme.spacing(5, 2, 0),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(5),
    }
  },
  btnArea: {
    marginTop: theme.spacing(5),
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      margin: theme.spacing(2, 0),
      justifyContent: 'center',
    },
    '& a': {
      minWidth: 150,
      [theme.breakpoints.up('sm')]: {
        marginRight: theme.spacing(2),
        '& img': {
          width: 160,
        }
      },
      [theme.breakpoints.down('sm')]: {
        margin: 4,
        minWidth: 0,
        maxWidth: 150,
        '& img': {
          width: '100%'
        }
      },
    }
  },
  phone: {
    borderRadius: theme.rounded.big,
    background: gradient(theme).triple.light,
    padding: 3,
    position: 'absolute',
    transformOrigin: 'center',
    overflow: 'hidden',
    width: 200,
    height: 376,
    top: -40,
    '& > div': {
      borderRadius: theme.rounded.big,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      background: darken(theme.palette.primary.dark, 0.5),
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
