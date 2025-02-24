import { makeStyles } from 'tss-react/mui';

const pricingStyles = makeStyles({ uniqId: 'pricing' })((theme, _params, classes) => ({
  featureList: {
    listStyle: 'none',
    padding: 0,
    marginLeft: 0,
    marginTop: theme.spacing(5),
    [theme.breakpoints.down('md')]: {
      textAlign: 'center'
    },
    '& li': {
      width: '50%',
      display: 'inline-block',
      marginBottom: theme.spacing(5),
      [theme.breakpoints.down('md')]: {
        padding: theme.spacing(0, 1)
      },
      '& > div': {
        display: 'block',
        width: 65,
        height: 65,
        borderRadius: theme.rounded.medium,
        marginBottom: theme.spacing(2),
        [theme.breakpoints.down('md')]: {
          marginLeft: 'auto',
          marginRight: 'auto',
        },
        '& > div': {
          fontSize: 72,
          top: -32,
          position: 'relative'
        },
        [`&.${classes.primary}`]: {
          background: theme.palette.primary.light,
        },
        [`&.${classes.secondary}`]: {
          background: theme.palette.secondary.light,
        },
        [`&.${classes.accent}`]: {
          background: theme.palette.accent.light,
        },
      }
    }
  },
  item: {
    '& > div': {
      [theme.breakpoints.down('sm')]: {
        marginLeft: 'auto',
        marginRight: 'auto',
      }
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default pricingStyles;
