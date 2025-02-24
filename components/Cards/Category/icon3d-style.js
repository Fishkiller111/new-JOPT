import { makeStyles } from 'tss-react/mui';
import {
  red, pink, purple,
  deepPurple, indigo, blue,
  lightBlue, cyan, teal,
  green, lightGreen, lime,
  yellow, amber, orange,
  deepOrange, brown, grey,
  blueGrey
} from '@mui/material/colors';

const useStyles = makeStyles({ uniqId: 'category_icon' })((theme, _params, classes) => ({
  categoryCard: {
    borderRadius: theme.rounded.big,
    marginBottom: theme.spacing(5),
    position: 'relative',
    overflow: 'visible',
    background: theme.palette.background.paper,
    boxShadow: theme.shade.light,
    display: 'block',
    textAlign: 'center',
    transition: 'all 0.3s ease-out',
    backgroundSize: '150%',
    height: 140,
    [theme.breakpoints.down('md')]: {
      height: 100
    },
    [`&.${classes.red}`]: {
      backgroundImage: `linear-gradient(110deg, rgba(0, 0, 0, 0) 0%, ${red[500]} 100%)`
    },
    [`&.${classes.pink}`]: {
      backgroundImage: `linear-gradient(110deg, rgba(0, 0, 0, 0) 0%, ${pink[500]} 100%)`
    },
    [`&.${classes.purple}`]: {
      backgroundImage: `linear-gradient(110deg, rgba(0, 0, 0, 0) 0%, ${purple[500]} 100%)`
    },
    [`&.${classes.deepPurple}`]: {
      backgroundImage: `linear-gradient(110deg, rgba(0, 0, 0, 0) 0%, ${deepPurple[500]} 100%)`
    },
    [`&.${classes.indigo}`]: {
      backgroundImage: `linear-gradient(110deg, rgba(0, 0, 0, 0) 0%, ${indigo[500]} 100%)`
    },
    [`&.${classes.blue}`]: {
      backgroundImage: `linear-gradient(110deg, rgba(0, 0, 0, 0) 0%, ${blue[500]} 100%)`
    },
    [`&.${classes.lightBlue}`]: {
      backgroundImage: `linear-gradient(110deg, rgba(0, 0, 0, 0) 0%, ${lightBlue[500]} 100%)`
    },
    [`&.${classes.cyan}`]: {
      backgroundImage: `linear-gradient(110deg, rgba(0, 0, 0, 0) 0%, ${cyan[500]} 100%)`
    },
    [`&.${classes.teal}`]: {
      backgroundImage: `linear-gradient(110deg, rgba(0, 0, 0, 0) 0%, ${teal[500]} 100%)`
    },
    [`&.${classes.green}`]: {
      backgroundImage: `linear-gradient(110deg, rgba(0, 0, 0, 0) 0%, ${green[500]} 100%)`
    },
    [`&.${classes.lightGreen}`]: {
      backgroundImage: `linear-gradient(110deg, rgba(0, 0, 0, 0) 0%, ${lightGreen[500]} 100%)`
    },
    [`&.${classes.lime}`]: {
      backgroundImage: `linear-gradient(110deg, rgba(0, 0, 0, 0) 0%, ${lime[500]} 100%)`
    },
    [`&.${classes.yellow}`]: {
      backgroundImage: `linear-gradient(110deg, rgba(0, 0, 0, 0) 0%, ${yellow[500]} 100%)`
    },
    [`&.${classes.amber}`]: {
      backgroundImage: `linear-gradient(110deg, rgba(0, 0, 0, 0) 0%, ${amber[500]} 100%)`
    },
    [`&.${classes.orange}`]: {
      backgroundImage: `linear-gradient(110deg, rgba(0, 0, 0, 0) 0%, ${orange[500]} 100%)`
    },
    [`&.${classes.deepOrange}`]: {
      backgroundImage: `linear-gradient(110deg, rgba(0, 0, 0, 0) 0%, ${deepOrange[500]} 100%)`
    },
    [`&.${classes.brown}`]: {
      backgroundImage: `linear-gradient(110deg, rgba(0, 0, 0, 0) 0%, ${brown[500]} 100%)`
    },
    [`&.${classes.grey}`]: {
      backgroundImage: `linear-gradient(110deg, rgba(0, 0, 0, 0) 0%, ${grey[500]} 100%)`
    },
    [`&.${classes.blueGrey}`]: {
      backgroundImage: `linear-gradient(110deg, rgba(0, 0, 0, 0) 0%, ${blueGrey[500]} 100%)`
    },
    '&:hover': {
      backgroundPosition: '70%',
    }
  },
  icons: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    padding: theme.spacing(0, 3),
    textAlign: 'center',
    '& > div': {
      marginTop: theme.spacing(-10),
      marginBottom: theme.spacing(-2),
      fontSize: 120,
      [theme.breakpoints.down('md')]: {
        fontSize: 80,
        marginTop: theme.spacing(-6),
      }
    },
  },
  title: {
    textTransform: 'uppercase',
    display: 'block',
    padding: theme.spacing(2),
    fontWeight: theme.typography.fontWeightBold,
    fontSize: 18,
    [theme.breakpoints.down('md')]: {
      fontWeight: theme.typography.fontWeightMedium,
      fontSize: 12
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
