import { makeStyles } from 'tss-react/mui';
import { alpha } from '@mui/material/styles';

const pagenav = makeStyles({ uniqId: 'pagenav' })((theme, _params, classes) => ({
  show: {},
  fab: {
    transform: 'scale(0.5)',
    transition: 'all 0.5s ease',
    zIndex: 10,
    opacity: 0,
    position: 'absolute',
    bottom: 0,
    right: 0,
    background: theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
    color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
    fontWeight: theme.typography.fontWeightBold,
    '& svg': {
      width: 40,
      height: 40
    },
  },
  pageNav: {
    zIndex: 200,
    position: 'fixed',
    bottom: 40,
    right: 40,
    '& nav': {
      transition: 'height 0.5s ease',
      transitionDelay: '0.5s',
      height: 0,
      padding: theme.spacing(1, 1, 7),
      overflow: 'hidden'
    },
    [`&.${classes.show}`]: {
      [`& .${classes.fab}`]: {
        opacity: 1,
        transform: 'scale(1)',
      }
    },
    '& ul': {
      margin: '0 14px 16px 0',
      padding: 0,
      position: 'relative'
    },
    '& li': {
      marginBottom: theme.spacing(3),
      listStyle: 'none',
      opacity: 0,
      position: 'relative',
      transition: 'all 0.4s ease',
      '& a': {
        width: 12,
        height: 12,
        boxShadow: theme.shadows[1],
        background: alpha(theme.palette.common.white, 0.3),
        border: `1px solid ${theme.palette.primary.main}`,
        display: 'block',
        transition: 'all 0.4s ease',
        borderRadius: '50%',
      },
      '&[class="active"] a': {
        background: theme.palette.primary.main,
        border: `1px solid ${theme.palette.primary.main}`,
      },
    },
    '&:hover': {
      '& li': {
        opacity: 1,
        top: '0 !important',
      },
      '& nav': {
        transitionDelay: '0s',
        height: '100%'
      }
    }
  },
  tooltip: {
    textTransform: 'capitalize',
    background: theme.palette.dark,
    fontSize: 14
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default pagenav;
