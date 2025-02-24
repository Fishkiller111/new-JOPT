import { makeStyles } from 'tss-react/mui';
import gradient from 'theme/gradient';

const timelineStyles = makeStyles({ uniqId: 'timeline' })((theme, _params, classes) => ({
  root: {
    position: 'relative',
    zIndex: 1,
    marginLeft: theme.spacing(5),
    [theme.breakpoints.down('lg')]: {
      paddingTop: theme.spacing(5)
    }
  },
  title: {
    textTransform: 'uppercase',
    marginBottom: theme.spacing(3),
  },
  history: {
    position: 'relative',
    padding: theme.spacing(5, 4, 10),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0, 0, 5)
    },
    '& h3': {
      fontWeight: theme.typography.fontWeightBold,
      [theme.breakpoints.down('sm')]: {
        width: '100%'
      },
    },
    '& p': {
      [theme.breakpoints.down('sm')]: {
        display: 'inline-block',
        marginRight: theme.spacing(2)
      }
    },
    '& ul': {
      margin: 0,
      padding: 0,
      position: 'relative',
      '&:before': {
        content: '""',
        height: '100%',
        width: 5,
        background: theme.palette.divider,
        borderRadius: 5,
        position: 'absolute',
        left: -35,
        top: 0,
      },
      '& li': {
        listStyle: 'none',
        marginBottom: theme.spacing(5),
        position: 'relative',
        '& > div': {
          [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(5)
          }
        },
        '&:last-child': {
          marginBottom: 0
        },
        '&:before': {
          content: '""',
          borderRadius: '50%',
          width: 16,
          height: 16,
          background: theme.palette.secondary.main,
          position: 'absolute',
          left: -41,
          top: 46,
        },
        '&:after': {
          content: '""',
          borderRadius: 16,
          width: 40,
          height: 16,
          background: gradient(theme).triple.light,
          position: 'absolute',
          top: 46,
          [theme.breakpoints.down('sm')]: {
            display: 'none'
          }
        },
        [`& .${classes.time}`]: {
          color: theme.palette.text.secondary,
        },
      }
    },
  },
  list: {
    display: 'flex',
    '& figure': {
      width: 74,
      height: 74,
      margin: theme.spacing(2),
      borderRadius: theme.rounded.medium,
      overflow: 'hidden',
      '& img': {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
      }
    },
    '& > div': {
      flex: 1
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default timelineStyles;
