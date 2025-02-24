import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles({ uniqId: 'sidebar' })((theme) => ({
  sidebar: {
    marginTop: theme.spacing(5),
    padding: theme.spacing(0, 3),
    position: 'relative',
    zIndex: 2,
    [theme.breakpoints.up('md')]: {
      margin: theme.spacing(5, 0),
      position: 'sticky',
      top: -550,
    },
    [theme.breakpoints.between('sm', 'md')]: {
      display: 'flex',
      '& > div': {
        padding: theme.spacing(3),
        width: '50%'
      }
    }
  },
  property: {
    margin: theme.spacing(5, 0, 10),
    listStyle: 'none',
    padding: 0,
    '& li': {
      listStyle: 'none',
      marginBottom: theme.spacing(),
      display: 'flex',
      '& span': {
        flex: 1
      }
    }
  },
  tags: {
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(10),
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(10),
    },
    '& > div': {
      fontWeight: theme.typography.fontWeightMedium,
      margin: theme.spacing(0.5)
    }
  },
  profileList: {
    padding: 0,
    '& .MuiTypography-body2': {
      fontWeight: theme.typography.fontWeightMedium,
    },
    '& li': {
      paddingLeft: 0,
      '& .MuiButton-root': {
        fontSize: 8
      }
    }
  },
  avatar: {
    margin: 10,
  },
  btnArea: {
    textAlign: 'right',
    marginTop: theme.spacing(5),
    '& button, a': {
      margin: theme.spacing(0, 0.5),
      background: theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
      color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
