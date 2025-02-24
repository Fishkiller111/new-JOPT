import { makeStyles } from 'tss-react/mui';
import { alpha } from '@mui/material/styles';
import {
  deepOrange, deepPurple, blue,
  red, pink, indigo,
  cyan, green
} from '@mui/material/colors';
import gradient from 'theme/gradient';

const useStyles = makeStyles({ uniqId: 'blog' })((theme, _params, classes) => ({
  root: {
    position: 'relative'
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
  inputSubscribe: {
    background: 'rgba(255, 255, 255, 0.5) !important',
    border: '1px solid rgba(0, 0, 0, 0.25)',
    borderRadius: theme.rounded.medium,
    '& input': {
      color: theme.palette.common.black,
    },
  },
  profileList: {
    padding: 0,
    '& li': {
      paddingLeft: 0
    }
  },
  avatar: {
    margin: 10,
    [`&.${classes.orange}`]: {
    backgroundColor: deepOrange[500],
    },
    [`&.${classes.purple}`]: {
      backgroundColor: deepPurple[500],
    },
    [`&.${classes.pink}`]: {
      backgroundColor: pink[300],
    },
    [`&.${classes.green}`]: {
      backgroundColor: cyan[500],
    },
    [`&.${classes.cyan}`]: {
      backgroundColor: green[500],
    },
    [`&.${classes.indigo}`]: {
      backgroundColor: indigo[500],
    },
  },
  avatarIcon: {
    backgroundColor: theme.palette.background.default,
    '& svg': {
      fill: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.main
    }
  },
  invertBtn: {
    borderColor: theme.palette.common.white,
    color: theme.palette.common.white,
  },
  albumRoot: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    '& > *': {
      width: '100%'
    }
  },
  gridList: {
    height: 'auto',
    [theme.breakpoints.up('md')]: {
      width: 500,
    }
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  img: {
    maxWidth: 'none',
    borderRadius: theme.rounded.big,
    overflow: 'hidden'
  },
  listText: {
    whiteSpace: 'normal'
  },
  sidebar: {
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(5)
    }
  },
  subscribeForm: {
    display: 'flex',
    alignItems: 'flex-end',
    '& .MuiFormLabel-root': {
      color: 'rgba(0, 0, 0, 0.9) !important',
    },
    '& button': {
      margin: theme.spacing(0.5)
    }
  },
  whiteInputRoot: {
    '& label, input': {
      color: `${theme.palette.common.white} !important`,
    },
    '& .MuiFilledInput-root': {
      borderColor: alpha(theme.palette.common.white, 0.6),
    },
  },
  blogHeadline: {
    cursor: 'pointer',
    position: 'relative',
    [theme.breakpoints.down('md')]: {
      alignItems: 'flex-end',
      display: 'flex'
    },
    [theme.breakpoints.down('sm')]: {
      [`& .${classes.subtitle}`]: {
        display: 'none'
      }
    }
  },
  anchorContent: {
    display: 'block',
    color: '#fff',
    textDecoration: 'none',
    position: 'relative',
    zIndex: 1,
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(5)
    },
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(10)
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
  divider: {
    margin: theme.spacing(1, 0),
    [theme.breakpoints.up('sm')]: {
      margin: `${theme.spacing(1.5)} 0`,
    },
    background: 'none'
  },
  dividerBordered: {
    margin: `${theme.spacing(3)} 0`
  },
  content: {
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(0, 2)
    }
  },
  postList: {
    [theme.breakpoints.down('lg')]: {
      marginTop: theme.spacing(3)
    }
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
  leftIcon: {
    marginRight: theme.spacing(1),
  },
  iconSmall: {
    fontSize: 20,
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
  pagination: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: theme.spacing(3)
  },
  flipRtl: {
    transform: theme.direction === 'rtl' ? 'scale(-1)' : 'inherit'
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
