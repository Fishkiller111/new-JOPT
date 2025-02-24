import { makeStyles } from 'tss-react/mui';

const sliderArtStyles = makeStyles({ uniqId: 'slider_art' })(theme => ({
  deco: {
    [theme.breakpoints.up('lg')]: {
      width: 450
    },
  },
  figure: {
    height: 460,
    display: 'flex',
    alignItems: 'flex-end',
    transition: 'all 0.3s ease'
  },
  fade: {
    opacity: '0.5',
    filter: 'blur(10px)'
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default sliderArtStyles;
