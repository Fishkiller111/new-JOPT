import { makeStyles } from 'tss-react/mui';
import { alpha } from '@mui/material/styles';

const useStyles = makeStyles({ uniqId: 'icon_card' })((theme) => ({
  root: {
    maxWidth: 180,
    height: 130,
    margin: '0 auto 8px',
    fontSize: 14,
    padding: theme.spacing(1),
    textAlign: 'center',
    position: 'relative',
    borderRadius: theme.rounded.medium,
    boxShadow: theme.shade.light,
    background: theme.palette.mode === 'dark' ? alpha(theme.palette.primary.dark, 0.5) : theme.palette.background.paper,
    '& a': {
      position: 'absolute',
      left: 0,
      top: 0,
      borderRadius: theme.rounded.medium,
      width: '100%',
      height: '100%',
    },
    '& i': {
      display: 'block',
      fontSize: 55,
      color: theme.palette.mode === 'dark' ? theme.palette.common.white : theme.palette.primary.main,
    }
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
