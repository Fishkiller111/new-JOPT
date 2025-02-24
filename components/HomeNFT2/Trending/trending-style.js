import { makeStyles } from 'tss-react/mui';

const trendingStyle = makeStyles({ uniqId: 'trending' })(theme => ({
  tab: {
    position: 'relative',
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(15),
    },
  },
  tabContent: {
    position: 'relative',
    paddingTop: theme.spacing(4),
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(8)
    },
    [theme.breakpoints.up('lg')]: {
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6),
    },
    '& section': {
      position: 'relative',
      '& div': {
        overflow: 'visible'
      }
    }
  },
  btn: {
    height: 48
  },
  tabLabel: {
    fontSize: 18,
    fontWeight: theme.typography.fontWeightMedium,
    letterSpacing: 0,
    padding: theme.spacing(0, 5),
    borderBottom: '1px solid',
    borderColor: theme.palette.text.disabled,
    [theme.breakpoints.down('sm')]: {
      fontSize: 14
    }
  },
  indicator: {
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.light,
    height: 5,
    borderRadius: '4px 4px 0 0'
  },
  imgLogo: {
    padding: theme.spacing(2),
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(2, 8)
    },
    '& img': {
      width: '100%'
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default trendingStyle;
