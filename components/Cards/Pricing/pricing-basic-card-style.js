import { makeStyles } from 'tss-react/mui';
import gradient from 'theme/gradient';

const cardsStyles = makeStyles({ uniqId: 'pricing_card' })((theme, _params, classes) => ({
  pricing: {
    position: 'relative',
    borderRadius: 0,
    overflow: 'hidden',
    textAlign: 'center',
    zIndex: 2,
    background: 'none',
    boxShadow: 'none',
    padding: theme.spacing(0, 2),
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(0, 1),
    },
    '& ul': {
      padding: theme.spacing(0, 2),
      marginBottom: theme.spacing(3),
      listStyle: 'none',
      '& li': {
        listStyle: 'none',
        fontSize: 16,
        textAlign: 'center',
        padding: theme.spacing(),
        '&:last-child': {
          borderBottom: 'none'
        }
      }
    },
  },
  title: {
    padding: theme.spacing(1, 0),
    textTransform: 'uppercase',
    fontSize: 24,
    position: 'relative',
    '& p': {
      fontWeight: theme.typography.fontWeightMedium,
    },
    '& h6': {
      color: theme.palette.common.black,
      background: gradient(theme).triple.light,
      fontWeight: theme.typography.fontWeightBold,
      textTransform: 'uppercace',
      borderRadius: 36,
      padding: theme.spacing(0, 4),
      fontSize: 22,
      display: 'inline-block',
      margin: theme.spacing(2, 0)
    },
    [`&.${classes.basic}`]: {
      '& h6': {
        background: theme.palette.common.white,
      }
    },
    '& h4': {
      fontWeight: theme.typography.fontWeightBold,
      fontSize: 52,
      '& span': {
        verticalAlign: 'super',
        padding: theme.spacing(0, 1),
        fontSize: 22,
      },
      '& em': {
        fontSize: 16,
        textTransform: 'lowercase',
        fontStyle: 'normal',
        fontWeight: theme.typography.fontWeightRegular,
      }
    }
  },
  btnArea: {
    color: theme.palette.text.secondary,
    padding: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(4, 2),
      borderTop: `1px solid ${theme.palette.action.disabled}`,
    },
    [`& .${classes.button}`]: {
      marginTop: theme.spacing(2)
    },
    [`& .${classes.desc}`]: {
      fontSize: 14,
    }
  },
  value: {
    zIndex: 20,
    background: theme.palette.background.paper,
    borderRadius: theme.rounded.big,
    overflow: 'hidden',
    marginTop: -30,
    marginBottom: -25,
    boxShadow: theme.shade.light,
    padding: theme.spacing(2),
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(1),
      marginBottom: -5,
    },
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(0, 1),
    },
    [`& .${classes.title}`]: {
      borderRadius: theme.rounded.big,
      color: theme.palette.common.black,
      background: gradient(theme).triple.light,
      '& h6': {
        background: 'none'
      },
    },
    '& ul': {
      paddingTop: theme.spacing(2)
    },
    '&:hover': {
      boxShadow: `0 0 20px 5px ${theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light}`,
    },
    [`& .${classes.btnArea}`]: {
      borderImageSource: gradient(theme).triple.main,
      borderImageSlice: 1,
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default cardsStyles;
