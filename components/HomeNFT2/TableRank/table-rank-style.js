import { makeStyles } from 'tss-react/mui';

const tableRankStyles = makeStyles({ uniqId: 'table_rank' })((theme) => ({
  root: {
    color: theme.palette.common.white,
    position: 'relative',
    zIndex: 4,
    borderRadius: '60px 60px 0 0',
    background: `linear-gradient(-2deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
    padding: theme.spacing(10, 0),
    [theme.breakpoints.down('sm')]: {
      borderRadius: '40px 40px 0 0',
    },
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(15, 3),
    },
    '&:before': {
      content: '""',
      height: 60,
      width: '100%',
      position: 'absolute',
      bottom: 0,
      left: 0,
      background: theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.background.paper,
      borderRadius: '60px 60px 0 0',
      [theme.breakpoints.down('sm')]: {
        borderRadius: '40px 40px 0 0',
      },
    },
    '&:after': {
      content: '""',
      height: 60,
      width: '100%',
      position: 'absolute',
      bottom: 0,
      left: 0,
      opacity: 0.5,
      background: theme.palette.mode === 'dark' ? theme.palette.common.black : theme.palette.common.white,
      borderRadius: '60px 60px 0 0',
      [theme.breakpoints.down('sm')]: {
        borderRadius: '40px 40px 0 0',
      },
    },
    '& .MuiGrid-root': {
      position: 'relative'
    }
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: theme.rounded.medium,
    marginRight: theme.spacing(),
    background: theme.palette.primary.light,
  },
  verified: {
    fill: theme.palette.secondary.main,
    width: 16,
    height: 16,
    marginLeft: theme.spacing()
  },
  table: {
    [theme.breakpoints.down('md')]: {
      marginBottom: theme.spacing(5),
    },
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(5),
    },
    '& th.MuiTableCell-root': {
      border: 'none',
      color: theme.palette.common.white,
      textTransform: 'uppercase',
      fontSize: 12
    },
    '& td.MuiTableCell-root': {
      border: 'none',
      color: theme.palette.common.white,
    },
    '& strong': {
      fontWeight: theme.typography.fontWeightMedium,
    }
  },
  one: {
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.secondary.main,
    fontSize: 36,
    [theme.breakpoints.down('sm')]: {
      fontSize: 18
    }
  },
  divider: {
    position: 'absolute',
    borderWidth: 0.5,
    left: '52%',
    bottom: 0,
    height: '90%',
    borderImageSource: `linear-gradient(0deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
    borderImageSlice: 1,
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default tableRankStyles;
