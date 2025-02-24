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

const useStyles = makeStyles({ uniqId: 'category_icon_text' })((theme, _params, classes) => ({
  root: {
    position: 'relative',
    zIndex: 2,
  },
  category: {
    display: 'flex',
    alignItems: 'center'
  },
  bg: {
    borderRadius: theme.rounded.medium,
    position: 'relative',
    overflow: 'visible',
    height: 100,
    width: 100,
    background: theme.palette.background.paper,
    backgroundSize: '150%',
    marginRight: theme.spacing(2),
    '& > div': {
      fontSize: 100,
      position: 'relative',
      bottom: 50,
      left: -10,
    },
    [`&.${classes.red}`]: {
      backgroundImage: `linear-gradient(110deg, rgba(255, 255, 255, 1) 0%, ${red[500]} 100%)`
    },
    [`&.${classes.pink}`]: {
      backgroundImage: `linear-gradient(110deg, rgba(255, 255, 255, 1) 0%, ${pink[500]} 100%)`
    },
    [`&.${classes.purple}`]: {
      backgroundImage: `linear-gradient(110deg, rgba(255, 255, 255, 1) 0%, ${purple[500]} 100%)`
    },
    [`&.${classes.deepPurple}`]: {
      backgroundImage: `linear-gradient(110deg, rgba(255, 255, 255, 1) 0%, ${deepPurple[500]} 100%)`
    },
    [`&.${classes.indigo}`]: {
      backgroundImage: `linear-gradient(110deg, rgba(255, 255, 255, 1) 0%, ${indigo[500]} 100%)`
    },
    [`&.${classes.blue}`]: {
      backgroundImage: `linear-gradient(110deg, rgba(255, 255, 255, 1) 0%, ${blue[500]} 100%)`
    },
    [`&.${classes.lightBlue}`]: {
      backgroundImage: `linear-gradient(110deg, rgba(255, 255, 255, 1) 0%, ${lightBlue[500]} 100%)`
    },
    [`&.${classes.cyan}`]: {
      backgroundImage: `linear-gradient(110deg, rgba(255, 255, 255, 1) 0%, ${cyan[500]} 100%)`
    },
    [`&.${classes.teal}`]: {
      backgroundImage: `linear-gradient(110deg, rgba(255, 255, 255, 1) 0%, ${teal[500]} 100%)`
    },
    [`&.${classes.green}`]: {
      backgroundImage: `linear-gradient(110deg, rgba(255, 255, 255, 1) 0%, ${green[500]} 100%)`
    },
    [`&.${classes.lightGreen}`]: {
      backgroundImage: `linear-gradient(110deg, rgba(255, 255, 255, 1) 0%, ${lightGreen[500]} 100%)`
    },
    [`&.${classes.lime}`]: {
      backgroundImage: `linear-gradient(110deg, rgba(255, 255, 255, 1) 0%, ${lime[500]} 100%)`
    },
    [`&.${classes.yellow}`]: {
      backgroundImage: `linear-gradient(110deg, rgba(255, 255, 255, 1) 0%, ${yellow[500]} 100%)`
    },
    [`&.${classes.amber}`]: {
      backgroundImage: `linear-gradient(110deg, rgba(255, 255, 255, 1) 0%, ${amber[500]} 100%)`
    },
    [`&.${classes.orange}`]: {
      backgroundImage: `linear-gradient(110deg, rgba(255, 255, 255, 1) 0%, ${orange[500]} 100%)`
    },
    [`&.${classes.deepOrange}`]: {
      backgroundImage: `linear-gradient(110deg, rgba(255, 255, 255, 1) 0%, ${deepOrange[500]} 100%)`
    },
    [`&.${classes.brown}`]: {
      backgroundImage: `linear-gradient(110deg, rgba(255, 255, 255, 1) 0%, ${brown[500]} 100%)`
    },
    [`&.${classes.grey}`]: {
      backgroundImage: `linear-gradient(110deg, rgba(255, 255, 255, 1) 0%, ${grey[500]} 100%)`
    },
    [`&.${classes.blueGrey}`]: {
      backgroundImage: `linear-gradient(110deg, rgba(255, 255, 255, 1) 0%, ${blueGrey[500]} 100%)`
    },
  },
  text: {
    '& p': {
      fontWeight: theme.typography.fontWeightMedium
    }
  },
  name: {
    textTransform: 'uppercase',
    fontSize: 36,
    display: 'block',
  },
  title: {
    textAlign: 'center',
    textTransform: 'uppercase'
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
