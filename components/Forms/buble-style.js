import { makeStyles } from 'tss-react/mui';

const bubleStyles = makeStyles({ uniqId: 'buble' })((theme, _params, classes) => ({
  buble: {
    borderRadius: 10,
    padding: theme.spacing(2),
    width: 'auto',
    left: -250,
    top: -300,
    color: theme.palette.common.black,
    textAlign: 'left',
    '& p': {
      fontSize: 13,
    },
    '& h4': {
      fontSize: 18,
    },
  },
  content: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  item: {
    flex: '0 0 50%',
    maxWidth: '50%',
    '& svg': {
      fill: '#651FFF',
      marginRight: theme.spacing(1),
      marginTop: theme.spacing(2),
      top: 4,
      position: 'relative',
      width: 16,
      height: 16,
    },
    [`&.${classes.full}`]: {
      flex: '0 0 100%',
      maxWidth: '100%',
    }
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default bubleStyles;
