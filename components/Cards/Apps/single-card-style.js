import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles({ uniqId: 'group_card' })((theme, _params, classes) => ({
  card: {
    borderRadius: theme.rounded.big,
    position: 'relative',
    overflow: 'hidden',
    marginBottom: theme.spacing(4),
    '& > a': {
      position: 'absolute',
      zIndex: 2,
      left: 0,
      top: 0,
      width: '100%',
      height: '100%',
    },
  },
  primary: {
    backgroundImage: `linear-gradient(160deg, ${theme.palette.accent.light} -10%, ${theme.palette.primary.main} 100%)`,
  },
  secondary: {
    backgroundImage: `linear-gradient(160deg, ${theme.palette.secondary.main} -10%, ${theme.palette.primary.main} 100%)`,
  },
  accent: {
    backgroundImage: `linear-gradient(160deg, ${theme.palette.secondary.main} -10%, ${theme.palette.accent.dark} 100%)`,
  },
  content: {
    color: theme.palette.common.white,
    padding: theme.spacing(4),
    height: 400,
    '& h3': {
      fontSize: 36,
      fontWeight: theme.typography.fontWeightBold,
      marginBottom: theme.spacing(2),
    },
    '& p': {
      fontSize: 18,
    },
    '& img': {
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
    },
    [`&.${classes.bordered}`]: {
      overflow: 'hidden',
      position: 'relative',
      borderRadius: theme.rounded.big,
      margin: 2,
      color: theme.palette.text.primary,
      background: theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.background.paper,
      '&:before': {
        content: '""',
        display: theme.palette.mode === 'dark' ? 'block' : 'none',
        background: theme.palette.common.black,
        opacity: 0.5,
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%'
      }
    }
  },
  text: {
    position: 'relative',
    zIndex: 1,
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
