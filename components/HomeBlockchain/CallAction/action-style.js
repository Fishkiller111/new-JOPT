import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles({ uniqId: 'action' })(theme => ({
  action: {
    position: 'relative',
    zIndex: 1,
    borderRadius: 60,
    color: theme.palette.common.black,
    background: `linear-gradient(to bottom, ${theme.palette.secondary.light} 10%, ${theme.palette.accent.light} 100%)`,
    [theme.breakpoints.up('md')]: {
      margin: theme.spacing(0, 10),
    },
    [theme.breakpoints.down('md')]: {
      textAlign: 'center'
    },
    [theme.breakpoints.down('sm')]: {
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
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(5, 0, 0, 5),
    },
    '& img': {
      width: '100%'
    }
  },
  btnArea: {
    margin: theme.spacing(5, 0),
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'space-around'
    },
    '& a, button': {
      minWidth: 150,
      [theme.breakpoints.up('sm')]: {
        marginRight: theme.spacing(2)
      },
      [theme.breakpoints.down('sm')]: {
        margin: 4,
        width: '100%'
      },
      '& img': {
        width: 160,
        [theme.breakpoints.down('sm')]: {
          width: '100%'
        }
      }
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
