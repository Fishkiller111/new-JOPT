import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles({ uniqId: 'team' })(theme => ({
  root: {
    position: 'relative',
    zIndex: 10,
    minHeight: 600
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

export default useStyles;
