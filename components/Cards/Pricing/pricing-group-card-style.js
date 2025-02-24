import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles({ uniqId: 'pricing' })(theme => ({
  root: {
    '& > p': {
      marginBottom: 0
    }
  },
  pricingGroup: {
    background: `linear-gradient(-49deg, ${theme.palette.accent.main} 10%, ${theme.palette.primary.dark} 40%, ${theme.palette.primary.main} 70%, ${theme.palette.secondary.light} 100%)`,
    backgroundSize: '120%',
    borderRadius: 40,
    position: 'relative',
    margin: theme.spacing(5, 0, 10),
    [theme.breakpoints.up('sm')]: {
      margin: theme.spacing(10, 0),
    },
    '&:before': {
      content: '""',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: 40,
      position: 'absolute',
      background: theme.palette.mode === 'dark' ? 'transparent' : 'rgba(255, 255, 255, 0.85)',
    }
  },
  tabs: {
    marginTop: theme.spacing(5),
    display: 'flex',
    justifyContent: 'center'
  },
  tabLabel: {
    fontSize: 18,
    fontWeight: theme.typography.fontWeightMedium,
    letterSpacing: 0,
    padding: theme.spacing(0, 4),
    [theme.breakpoints.down('sm')]: {
      fontSize: 14
    }
  },
  indicator: {
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.light,
    height: 5,
    borderRadius: '4px 4px 0 0'
  },
  tabContent: {
    marginTop: theme.spacing(5)
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
