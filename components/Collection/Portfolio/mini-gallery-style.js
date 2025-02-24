import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles({ uniqId: 'mini_gallery' })((theme, _params, classes) => ({
  root: {
    position: 'relative',
    padding: theme.spacing(0, 3),
  },
  massonry: {
    height: 500,
    background: theme.palette.divider,
    borderRadius: theme.rounded.big,
    overflow: 'hidden',
    position: 'relative',
    '& .MuiMasonry-root': {
      margin: 0
    },
    [`&.${classes.expand}`]: {
      height: 'auto',
      paddingBottom: theme.spacing(10)
    }
  },
  landscape: {
    height: 180,
    position: 'relative',
    '& > div': {
      height: '100%'
    }
  },
  portrait: {
    height: 400,
    position: 'relative',
    '& > div': {
      height: '100%'
    }
  },
  btn: {
    position: 'absolute',
    zIndex: 10,
    bottom: theme.spacing(2),
    margin: theme.spacing(0, 2),
    width: 'calc(100% - 32px)'
  },
  imgButton: {
    zIndex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
  },
  videoPopup: {
    width: 690,
    maxWidth: 'none',
    '& iframe': {
      [theme.breakpoints.down('sm')]: {
        width: '100%',
        height: 300
      }
    }
  },
  closeBtn: {
    position: 'absolute',
    top: 4,
    right: 4,
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
