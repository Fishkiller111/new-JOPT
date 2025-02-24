import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles({ uniqId: 'action' })(theme => ({
  action: {
    position: 'relative',
    zIndex: 1,
    borderRadius: 60,
    overflow: 'hidden',
    color: theme.palette.common.black,
    background: `linear-gradient(to bottom, ${theme.palette.secondary.light} 10%, ${theme.palette.accent.light} 100%)`,
    [theme.breakpoints.up('md')]: {
      margin: theme.spacing(0, 10)
    },
    [theme.breakpoints.down('md')]: {
      paddingTop: theme.spacing(3)
    },
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      textAlign: 'center'
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
      background: `linear-gradient(transparent 35%, ${theme.palette.secondary.light} 80%)`
    }
  },
  wrap: {
    borderRadius: 60,
  },
  btnArea: {
    position: 'relative',
    marginBottom: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(5),
    },
    '& a': {
      minWidth: 150,
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
  illustration: {
    display: 'flex',
    width: '100%',
    left: 0,
    bottom: 0,
    transform: theme.direction === 'rtl' ? 'scaleX(-1)' : 'none',
    '& img': {
      width: '100%'
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
