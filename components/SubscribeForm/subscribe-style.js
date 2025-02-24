import { makeStyles } from 'tss-react/mui';

const subscribeStyles = makeStyles({ uniqId: 'subscribe' })(theme => ({
  root: {
    position: 'relative',
    textAlign: 'center',
    zIndex: 10,
    '& > div': {
      position: 'relative'
    },
  },
  form: {
    position: 'relative',
    marginTop: theme.spacing(2)
  },
  field: {
    '& input': {
      paddingRight: 150,
      paddingLeft: theme.spacing(3),
      width: '100%',
      borderRadius: 56,
      height: 40,
      background: theme.palette.background.paper,
      border: `1px solid ${theme.palette.secondary.main}`,
    },
    '& > div': {
      marginTop: 0,
      '&:after, &:before': {
        display: 'none'
      }
    }
  },
  btn: {
    position: 'absolute',
    right: theme.spacing(),
    top: 5,
    [theme.breakpoints.up('sm')]: {
      width: 140,
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default subscribeStyles;
