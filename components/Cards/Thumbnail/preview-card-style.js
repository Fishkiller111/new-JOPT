import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles({ uniqId: 'app_card' })((theme) => ({
  root: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    maxHeight: 400,
    alignItems: 'center',
    '&:before': {
      content: '""',
      width: '100%',
      height: '100%',
      top: 10,
      left: -5,
      position: 'absolute',
      transform: 'rotate(5deg)',
      borderRadius: theme.rounded.big,
      border: `1px solid ${theme.palette.primary.main}`,
    },
    '&:after': {
      content: '""',
      width: '100%',
      height: '100%',
      top: 5,
      left: -10,
      position: 'absolute',
      transform: 'rotate(-3deg)',
      borderRadius: theme.rounded.big,
      border: `1px solid ${theme.palette.secondary.main}`,
    }
  },
  card: {
    borderRadius: theme.rounded.big,
    overflow: 'hidden',
    zIndex: 1,
    position: 'relative',
    '& figure': {
      margin: 0,
    },
    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  },
  icon: {
    boxShadow: theme.shadows[5],
    width: 62,
    height: 62,
    position: 'absolute',
    top: -30,
    zIndex: 10,
    borderRadius: theme.rounded.big,
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
