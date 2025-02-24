import { makeStyles } from 'tss-react/mui';

const tableRankStyles = makeStyles({ uniqId: 'table_rank' })((theme) => ({
  root: {
    color: theme.palette.common.white,
    padding: theme.spacing(15, 3),
    position: 'relative',
    zIndex: 4,
    borderRadius: '60px 60px 0 0',
    background: `linear-gradient(-2deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(10)
    },
    '& .MuiContainer-root': {
      [theme.breakpoints.down('lg')]: {
        padding: 0
      }
    },
    '&:before': {
      content: '""',
      borderRadius: '60px 60px 0 0',
      height: 60,
      width: '100%',
      position: 'absolute',
      bottom: 0,
      left: 0,
      background: theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.background.paper,
    },
    '&:after': {
      content: '""',
      borderRadius: '60px 60px 0 0',
      height: 60,
      width: '100%',
      position: 'absolute',
      bottom: 0,
      left: 0,
      opacity: 0.6,
      background: theme.palette.mode === 'dark' ? theme.palette.common.black : theme.palette.common.white,
    },
    '& .MuiGrid-root': {
      position: 'relative'
    }
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default tableRankStyles;
