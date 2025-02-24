import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles({ uniqId: 'group_card' })((theme, _params, classes) => ({
  card: {
    borderRadius: 40,
    position: 'relative',
    overflow: 'hidden',
    [theme.breakpoints.up('md')]: {
      height: 550,
    },
    [`&.${classes.withImg}`]: {
      minHeight: 500
    },
    '& > a': {
      position: 'absolute',
      zIndex: 1,
      left: 0,
      top: 0,
      width: '100%',
      height: '100%',
    },
  },
  primary: {
    color: theme.palette.common.white,
    backgroundImage: `linear-gradient(180deg, ${theme.palette.primary.main} 35%, ${theme.palette.accent.light} 100%)`,
  },
  secondary: {
    color: theme.palette.common.white,
    backgroundImage: `linear-gradient(180deg, ${theme.palette.primary.main} 35%, ${theme.palette.secondary.main} 100%)`,
  },
  accent: {
    color: theme.palette.common.black,
    backgroundImage: `linear-gradient(180deg, ${theme.palette.secondary.light} 35%, ${theme.palette.accent.light} 100%)`,
  },
  accent2: {
    color: theme.palette.common.white,
    backgroundImage: `linear-gradient(180deg, ${theme.palette.accent.main} 35%, ${theme.palette.primary.main} 100%)`,
  },
  bright: {
    color: theme.palette.common.black,
    backgroundImage: `linear-gradient(180deg, ${theme.palette.secondary.light} 35%, ${theme.palette.common.white} 100%)`,
  },
  content: {
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
      [`&.${classes.left}`]: {
        right: 0,
      },
      [`&.${classes.right}`]: {
        left: 0,
      }
    }
  },
  text: {
    position: 'relative',
    zIndex: 2,
  },
  full: {
    padding: theme.spacing(5),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(5, 3),
    },
    [`& .${classes.text}`]: {
      [theme.breakpoints.up('md')]: {
        width: '75%'
      }
    },
    '& img': {
      maxHeight: 300,
      maxWidth: '80%'
    }
  },
  compact: {
    padding: theme.spacing(3),
    '& img': {
      display: 'none'
    },
    [`& .${classes.items}`]: {
      width: '100%'
    }
  },
  group: {
    display: 'flex',
    [`&.${classes.right}`]: {
      justifyContent: 'flex-end',
      [`& .${classes.items}`]: {
        flexDirection: 'row-reverse'
      }
    }
  },
  items: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      width: '70%',
    },
    [`&.${classes.fullWidth}`]: {
      width: '100%',
      [`& .${classes.item}`]: {
        width: '100%',
        margin: '16px 0',
      }
    },
    [`&.${classes.medium}`]: {
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '80%'
      },
      [`& .${classes.item}`]: {
        width: '29%',
        [theme.breakpoints.down('sm')]: {
          width: '46%'
        },
      }
    },
  },
  item: {
    borderRadius: theme.rounded.medium,
    textAlign: 'center',
    color: theme.palette.common.black,
    margin: '8px 2%',
    background: 'rgba(255, 255, 255, 0.75)',
    backdropFilter: 'saturate(180%) blur(10px)',
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: 12,
    padding: theme.spacing(1),
    width: '46%',
    [theme.breakpoints.between('sm', 'md')]: {
      width: '28%'
    },
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(2),
    },
    '& i': {
      fontSize: 60,
      display: 'block',
    },
    [`&.${classes.darken}`]: {
      background: 'rgba(0, 0, 0, 0.5)',
      color: theme.palette.common.white,
      '& i': {
        color: theme.palette.common.white,
      }
    },
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
