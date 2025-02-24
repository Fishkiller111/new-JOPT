import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles({ uniqId: 'product_card' })((theme, _params, classes) => ({
  /* General */
  cardProduct: {
    position: 'relative',
    borderRadius: theme.rounded.medium,
    '& figure': {
      margin: 0
    }
  },
  mediaProduct: {
    height: 0,
  },
  title: {
    fontSize: 20,
    height: 30,
    fontWeight: theme.typography.fontWeightBold
  },
  hiddenLink: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    borderRadius: theme.rounded.medium
  },
  desc: {
    padding: theme.spacing(2, 3),
    overflow: 'hidden'
  },
  property: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: 0,
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing()
    },
    '& strong': {
      fontWeight: theme.typography.fontWeightBold,
      fontSize: 18
    }
  },
  text: {
    padding: 0,
    [theme.breakpoints.up('sm')]: {
      marginRight: theme.spacing(2),
    }
  },
  like: {
    margin: '10px 0',
    fontWeight: theme.typography.fontWeightMedium,
    '& i': {
      marginRight: theme.spacing(),
      fontSize: 18
    },
    '& button': {
      width: 24,
      height: 24
    }
  },
  button: {
    width: '100%',
    padding: `${theme.spacing(0.5, 3)} !important`,
    marginTop: theme.spacing(2)
  },
  /* Orientation */
  portrait: {
    maxWidth: 350,
    '& figure': {
      display: 'block',
      height: 250
    },
    [`& .${classes.property}`]: {
      marginTop: theme.spacing(2),
      '& strong': {
        fontWeight: theme.typography.fontWeightMedium,
        color: theme.palette.mode === 'dark' ? theme.palette.secondary.light : theme.palette.secondary.dark,
      }
    },
    [`& .${classes.desc}`]: {
      padding: theme.spacing(2),
    }
  },
  /* Type */
  over: {
    overflow: 'visible',
    '& figure': {
      overflow: 'hidden',
      boxShadow: theme.shade.light,
      position: 'relative',
      borderRadius: theme.rounded.medium,
      display: 'flex',
      justifyContent: 'center',
    },
    [`&.${classes.portrait}`]: {
      marginTop: theme.spacing(2),
      '& figure': {
        margin: theme.spacing(0, 2),
        padding: theme.spacing(0, 1),
        top: theme.spacing(-2),
        marginBottom: theme.spacing(-2),
      }
    },
  },
  head: {
    position: 'absolute',
    top: theme.spacing(-1),
    display: 'flex',
    justifyContent: 'center',
    zIndex: 1,
    width: '100%'
  },
  price: {
    margin: theme.spacing(0, 1),
    fontWeight: theme.typography.fontWeightMedium
  },
  avatar: {
    width: 24,
    height: 24
  },
  countdown: {
    borderRadius: theme.rounded.medium,
    padding: theme.spacing(1.5),
    fontSize: 18,
    display: 'block',
    background: 'rgba(0, 0, 0, 0.5)',
    backdropFilter: 'saturate(180%) blur(20px)',
    color: theme.palette.common.white,
    position: 'absolute',
    bottom: theme.spacing(1),
  },
  time: {
    display: 'block',
    textAlign: 'center',
    fontSize: 12,
    '& > span': {
      display: 'flex',
      justifyContent: 'center',
      margin: 0
    },
    '& strong': {
      fontWeight: theme.typography.fontWeightBold,
      fontSize: 18,
      display: 'block'
    },
    '& i': {
      margin: theme.spacing(2, 1, 0),
      fontStyle: 'normal'
    },
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
