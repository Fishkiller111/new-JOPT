import { makeStyles } from 'tss-react/mui';

const blogStyles = makeStyles({ uniqId: 'blog' })((theme, _params, classes) => ({
  link: {
    margin: theme.spacing(1, 1.5),
  },
  footer: {
    position: 'relative',
    [theme.breakpoints.down('md')]: {
      paddingBottom: theme.spacing(5),
    },
    [`&.${classes.hasBg}`]: {
      paddingTop: 600,
      marginTop: -600,
    },
  },
  root: {
    position: 'relative',
    zIndex: 11,
    '& p': {
      [theme.breakpoints.down('sm')]: {
        textAlign: 'center'
      }
    },
    '& ul': {
      margin: 0,
      padding: 0,
    },
    '& li': {
      listStyle: 'none',
      marginBottom: theme.spacing(),
      display: 'inline-block',
      width: '30%',
      marginRight: '3%',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      [theme.breakpoints.down('sm')]: {
        width: '47%'
      },
      '& a': {
        fontSize: 14,
        textTransform: 'capitalize',
        textDecoration: 'none !important',
        color: theme.palette.text.primary,
        '&:hover': {
          color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark
        }
      }
    },
  },
  title: {
    color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
    fontSize: 14,
    textTransform: 'uppercase',
    marginBottom: theme.spacing(),
    fontWeight: theme.typography.fontWeightBold,
  },
  quickLinks: {
    marginTop: theme.spacing(4)
  },
  logo: {
    display: 'flex',
    marginBottom: theme.spacing(3),
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
      '& + p': {
        textAlign: 'center'
      },
    },
    '& img': {
      width: 54,
      marginRight: theme.spacing(),
    },
    '& h6': {
      fontWeight: theme.typography.fontWeightBold,
      fontSize: 22,
      textTransform: 'capitalize  ',
    }
  },
  footerDesc: {
    display: 'block',
    fontSize: 14,
    marginBottom: theme.spacing(2)
  },
  socmed: {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center'
    },
    '& button': {
      margin: theme.spacing(),
      color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
      background: theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
      width: 36,
      height: 36,
    },
    '& i': {
      fontSize: 24
    }
  },
  icon: {},
  selectMenu: {
    width: 160,
    paddingLeft: theme.spacing(4),
    background: 'none !important'
  },
  footerCounter: {
    position: 'relative',
    background: theme.palette.primary.dark,
    '&:before': {
      content: '""',
      background: theme.palette.primary.dark,
      position: 'absolute',
      left: '-10%',
      borderRadius: '50%',
      top: -80,
      width: '120%',
      height: 350,
      [theme.breakpoints.down('sm')]: {
        height: 120,
      }
    },
  },
  category: {},
  listText: {},
  blogItem: {
    display: 'flex',
    alignItems: 'center',
    margin: theme.spacing(2, 0),
    padding: theme.spacing(1),
    textAlign: 'left',
    justifyContent: 'flex-start',
    [`& .${classes.category}`]: {
      marginBottom: theme.spacing(),
      display: 'block',
      fontWeight: theme.typography.fontWeightBold,
      color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
    },
    [`& .${classes.listText}`]: {
      flex: 1,
    },
    '& figure': {
      borderRadius: 4,
      overflow: 'hidden',
      margin: theme.spacing(0, 2, 0, 0),
      width: 80,
      height: 56,
      '& img': {
        display: 'block',
        minHeight: '100%',
        width: '100%',
      }
    },
    '& p': {
      fontSize: 13,
      textAlign: 'left'
    }
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default blogStyles;
