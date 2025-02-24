import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles({ uniqId: 'pricing_card' })((theme, _params, classes) => ({
  pricingCard: {
    marginTop: theme.spacing(5),
    position: 'relative',
    maxWidth: 390,
    '& > .MuiCard-root': {
      borderRadius: 40,
      zIndex: 1,
      position: 'relative',
      padding: theme.spacing(4, 2, 2),
      [theme.breakpoints.up('lg')]: {
        padding: theme.spacing(4, 4, 2),
      }
    },
    '&:before': {
      content: '""',
      left: 0,
      bottom: 0,
      position: 'absolute',
      borderRadius: 40,
      border: '1px solid',
      width: '100%',
      height: '90%',
    },
    [`&.${classes.primary}`]: {
      '& > .MuiCard-root': {
        color: theme.palette.common.white,
        backgroundImage: `linear-gradient(145deg, ${theme.palette.primary.main} 0%, ${theme.palette.accent.light} 100%, ${theme.palette.accent.light} 100%, ${theme.palette.accent.light} 100%)`,
      },
      '&:before': {
        borderColor: theme.palette.primary.main,
        transform: 'rotate(5deg)'
      }
    },
    [`&.${classes.secondary}`]: {
      '& > .MuiCard-root': {
        color: theme.palette.common.black,
        backgroundImage: `linear-gradient(143deg, ${theme.palette.secondary.main} 0%, #FFFFFF 100%)`,
      },
      '&:before': {
        borderColor: theme.palette.secondary.main,
        transform: 'rotate(-5deg)'
      }
    }
  },
  cardHeader: {
    padding: 0,
    textTransform: 'uppercase',
    '& span': {
      fontWeight: theme.typography.fontWeightBold,
    },
  },
  priceHeader: {
    padding: theme.spacing(5, 2),
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
  },
  cardContent: {
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(3, 8),
    },
    '& ul': {
      margin: 0,
      padding: 0,
      listStyle: 'disc',
    },
    '& li': {
      textAlign: 'left',
      listStyle: 'disc',
      padding: theme.spacing(0.5, 0),
    }
  },
  btnArea: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
    position: 'relative',
    padding: theme.spacing(1.5, 5),
    display: 'block',
    '& button, a': {
      padding: theme.spacing(1.5, 4)
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
