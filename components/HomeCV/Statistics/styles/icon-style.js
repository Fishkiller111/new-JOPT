import { makeStyles } from 'tss-react/mui';

const iconStyles = makeStyles({ uniqId: 'icon' })((theme) => ({
  img: {
    position: 'relative',
    textAlign: 'center',
    width: 180,
    height: 180,
    borderRadius: 40,
    overflow: 'hidden',
    background: theme.palette.background.paper,
    [theme.breakpoints.down('md')]: {
      width: 90,
      height: 90,
      borderRadius: 20,
    }
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default iconStyles;
