import { makeStyles } from 'tss-react/mui';

const counterStyles = makeStyles({ uniqId: 'counter_landing' })((theme, _params, classes) => ({
  counterWrap: {
    position: 'relative',
    paddingBottom: theme.spacing(5),
  },
  counterItem: {
    '& h6': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: theme.typography.fontWeightBold,
      textTransform: 'capitalize',
      fontSize: 36,
      [theme.breakpoints.down('md')]: {
        fontSize: 24,
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(5),
      },
    },
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    position: 'relative',
    '& h3': {
      fontWeight: theme.typography.fontWeightBold,
      fontSize: 76,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      marginBottom: -45,
      [theme.breakpoints.down('md')]: {
        fontSize: 56
      },
    },
    '&:after': {
      content: '""',
      bottom: -30,
      left: 'calc(50% - 40px)',
      width: 80,
      height: 15,
      borderRadius: 20,
      position: 'absolute',
    },
    [`&.${classes.primary}`]: {
      '&:after': {
        background: theme.palette.primary.main
      },
      '& h3': {
        background: `linear-gradient(to bottom, ${theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.main} ${theme.direction === 'rtl' ? '90%' : '-10%'}, transparent 85%)`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }
    },
    [`&.${classes.secondary}`]: {
      '&:after': {
        background: theme.palette.secondary.main
      },
      '& h3': {
        background: `linear-gradient(to bottom, ${theme.palette.secondary.main} ${theme.direction === 'rtl' ? '100%' : '0%'}, transparent ${theme.direction === 'rtl' ? '90%' : '90%'})`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }
    }
  },
  counterInner: {
    '& > div': {
      position: 'relative',
      '&:after': {
        content: '""',
        opacity: 0.2,
        height: 90,
        position: 'absolute',
        right: 0,
        top: 30,
        [theme.breakpoints.down('md')]: {
          display: 'none'
        },
      }
    },
    '& > div:last-child': {
      '&:after': {
        display: 'none'
      }
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default counterStyles;
