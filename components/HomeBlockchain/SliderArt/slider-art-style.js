import { makeStyles } from 'tss-react/mui';

const sliderArtStyles = makeStyles({ uniqId: 'slider_art' })(theme => ({
  deco: {
    [theme.breakpoints.down('md')]: {
      display: 'none'
    },
    '& img': {
      zIndex: 5,
      position: 'relative',
      width: '100%',
      [theme.breakpoints.down('lg')]: {
        width: '70%'
      }
    },
  },
  figure: {
    width: 400,
    display: 'flex',
    alignItems: 'center',
    transition: 'all 0.3s ease',
    direction: 'ltr'
  },
  fade: {
    opacity: '0.25',
    filter: 'blur(10px)'
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default sliderArtStyles;
