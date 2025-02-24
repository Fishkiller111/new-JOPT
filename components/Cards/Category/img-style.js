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

const useStyles = makeStyles({ uniqId: 'category_img' })((theme, _params, classes) => ({
  categoryCard: {
    borderRadius: theme.rounded.big,
    marginBottom: theme.spacing(2),
    overflow: 'hidden',
    position: 'relative',
    background: theme.palette.background.paper,
    boxShadow: theme.shade.light,
    display: 'block',
    textAlign: 'center',
    '&:hover': {
      [`& .${classes.images}`]: {
        backgroundPosition: '70%',
        [`& .${classes.figure}`]: {
          '&:first-of-type': {
            transform: 'rotate(-3deg)'
          },
          '&:last-child': {
            transform: 'rotate(3deg)'
          },
          [`&.${classes.center}`]: {
            marginBottom: theme.spacing(-1)
          }
        }
      }
    }
  },
  images: {
    display: 'flex',
    alignItems: 'flex-end',
    height: 200,
    overflow: 'hidden',
    justifyContent: 'space-between',
    borderRadius: theme.rounded.big,
    padding: theme.spacing(0, 3),
    transition: 'all 0.3s ease-out',
    backgroundSize: '150%',
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
  },
  figure: {
    marginTop: 0,
    marginRight: 0,
    height: 179,
    width: '50%',
    transition: 'all 0.3s ease-out',
    marginLeft: '-50%',
    display: 'block',
    overflow: 'hidden',
    position: 'relative',
    marginBottom: theme.spacing(-5),
    borderRadius: theme.rounded.medium,
    '& img': {
      objectFit: 'cover',
      width: '100%',
      height: '100%'
    },
    '&:first-of-type': {
      marginLeft: 0,
      transformOrigin: 'bottom left',
    },
    '&:last-child': {
      transformOrigin: 'bottom right',
    },
    [`&.${classes.center}`]: {
      marginBottom: theme.spacing(-3),
      zIndex: 2
    },
  },
  title: {
    display: 'block',
    padding: theme.spacing(2, 1),
    fontWeight: theme.typography.fontWeightBold
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
