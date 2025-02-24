import { makeStyles } from 'tss-react/mui';
import gradient from 'theme/gradient';

const porfolioStyles = makeStyles({ uniqId: 'portfolio' })((theme, _params, classes) => ({
  root: {
    position: 'relative'
  },
  tab: {
    display: 'flex',
    padding: 0,
    marginBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      justifyContent: 'center',
      margin: theme.spacing(5, 'auto'),
    }
  },
  filter: {
    display: 'flex',
    width: 'auto',
    overflow: 'auto',
    background: gradient(theme).triple.light,
    borderRadius: 40,
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(1, 2),
      justifyContent: 'center',
    },
    '& > button': {
      borderRadius: 40,
      marginRight: theme.spacing(),
      color: theme.palette.common.black,
      whiteSpace: 'nowrap',
      minWidth: 100,
      [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(1, 2),
      },
      [`&.${classes.selected}`]: {
        background: theme.palette.common.black,
        color: theme.palette.common.white
      }
    }
  },
  massonry: {
    columns: `${3} 300px`,
    columnGap: theme.spacing(4),
  },
  item: {
    marginBottom: theme.spacing(4),
    breakInside: 'avoid',
    opacity: 1,
    position: 'relative',
    paddingTop: 0,
  },
  itemCarousel: {
    position: 'relative',
    padding: theme.spacing(0, 1)
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default porfolioStyles;
