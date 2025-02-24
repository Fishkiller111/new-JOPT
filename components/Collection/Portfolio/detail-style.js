import { makeStyles } from 'tss-react/mui';
import {
  blue, red,
  indigo, cyan,
} from '@mui/material/colors';
import gradient from 'theme/gradient';

const useStyles = makeStyles({ uniqId: 'portfolio_detail' })((theme) => ({
  root: {
    position: 'relative',
    marginTop: theme.spacing(5),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(0, 3),
    }
  },
  tabs: {
    [theme.breakpoints.down('lg')]: {
      width: '100%'
    }
  },
  tabLabel: {
    fontSize: 18,
    fontWeight: theme.typography.fontWeightMedium,
    letterSpacing: 0,
    padding: theme.spacing(0, 4),
    [theme.breakpoints.down('sm')]: {
      fontSize: 14
    }
  },
  indicator: {
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.light,
    height: 5,
    borderRadius: '4px 4px 0 0'
  },
  tabContent: {
    marginTop: theme.spacing(5)
  },
  socmedShare: {
    position: 'sticky',
    top: theme.spacing(15),
    left: 0,
    paddingBottom: 140,
    marginBottom: theme.spacing(10),
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
    '& h6': {
      transform: 'rotate(-90deg)',
      transformOrigin: 'bottom left',
      fontWeight: theme.typography.fontWeightMedium,
      paddingRight: theme.spacing(8),
      left: 34,
      bottom: 0,
      position: 'absolute',
      '&:after': {
        content: '""',
        width: 48,
        height: 3,
        position: 'absolute',
        background: gradient(theme).triple.light,
        borderRadius: 3,
        top: 16,
        left: 80
      }
    }
  },
  shareMobile: {
    marginBottom: theme.spacing(5),
    '& button': {
      borderWidth: 2,
      marginRight: theme.spacing(2),
      [theme.breakpoints.down('sm')]: {
        borderRadius: '50%',
        width: 35,
        height: 35,
        padding: 0,
        minWidth: 0
      },
      '& i': {
        fontSize: 22,
        lineHeight: '22px',
        [theme.breakpoints.up('sm')]: {
          marginRight: theme.spacing(1),
        }
      }
    }
  },
  media: {
    height: '100%',
    position: 'absolute',
    width: '100%',
    '&:after': {
      content: '""',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      position: 'absolute',
      opacity: 0.9,
      background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 30%, ${theme.palette.secondary.dark} 60%, ${theme.palette.primary.main} 110%)`,
    }
  },
  headlineTitle: {
    display: 'block',
    fontWeight: theme.typography.fontWeightMedium,
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(1)
    }
  },
  categoryBlog: {
    marginBottom: theme.spacing(2),
    textTransform: 'uppercase',
    fontWeight: theme.typography.fontWeightMedium,
    color: theme.palette.mode === 'dark' ? theme.palette.secondary.main : theme.palette.primary.main
  },
  imageBlog: {
    margin: theme.spacing(5, 0),
    '& img': {
      borderRadius: theme.rounded.big,
      width: '100%',
    }
  },
  list: {
    listStyle: 'disc'
  },
  dividerBordered: {
    margin: `${theme.spacing(3)} 0`
  },
  content: {
    padding: theme.spacing(0, 2)
  },
  article: {
    color: theme.palette.text.primary,
    fontSize: 16,
    lineHeight: '24px',
    display: 'flex',
    alignItems: 'flex-start',
    '& ul, ol': {
      marginLeft: theme.spacing(5),
      paddingBottom: theme.spacing(2),
      paddingLeft: 0
    },
    '& ul': {
      listStyleType: 'disc'
    },
    '& ol': {
      listStyleType: 'decimal'
    },
    '& code': {
      whiteSpace: 'normal',
    }
  },
  redBtn: {
    color: red[500],
    borderColor: red[500],
    '&:hover': {
      borderColor: red[700],
    },
  },
  blueBtn: {
    color: blue[300],
    borderColor: blue[300],
    '&:hover': {
      borderColor: blue[500],
    },
  },
  indigoBtn: {
    color: indigo[300],
    borderColor: indigo[300],
    '&:hover': {
      borderColor: indigo[500],
    },
  },
  cyanBtn: {
    color: cyan[500],
    borderColor: cyan[500],
    '&:hover': {
      borderColor: cyan[700],
    },
  },
  btnArea: {
    [theme.breakpoints.up('sm')]: {
      width: 48,
    },
    '& a, button': {
      display: 'block',
      background: theme.palette.divider,
      marginBottom: theme.spacing(1),
      width: 38,
      height: 38,
      lineHeight: '24px',
      '& i': {
        fontSize: 22,
      }
    }
  },
  divider: {
    border: 'none',
    position: 'relative',
    overflow: 'visible',
    height: 1,
    margin: theme.spacing(10, 0),
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(8, 0),
    },
    '&:before': {
      content: '""',
      width: 12,
      height: 12,
      borderRadius: '50%',
      background: theme.palette.divider,
      position: 'absolute',
      top: 0,
      left: '50%',
      marginLeft: -43,
    },
    '&:after': {
      content: '""',
      width: 70,
      height: 12,
      top: 0,
      borderRadius: 12,
      position: 'absolute',
      background: theme.palette.divider,
      left: '50%',
      marginLeft: -23,
    },
  },
  counter: {
    textAlign: 'right',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      padding: theme.spacing(0, 3),
      justifyContent: 'center'
    },
    '& h2': {
      fontSize: 100,
      lineHeight: '80px',
      fontWeight: theme.typography.fontWeightBold,
      [theme.breakpoints.up('sm')]: {
        marginRight: theme.spacing(2),
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: 56
      }
    }
  },
  comment: {
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0, 1)
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
