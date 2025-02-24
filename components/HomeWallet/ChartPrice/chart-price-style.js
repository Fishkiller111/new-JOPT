import { makeStyles } from 'tss-react/mui';

const chartPriceStyles = makeStyles({ uniqId: 'chart_price' })((theme, _params, classes) => ({
  root: {
    padding: theme.spacing(0, 3),
    position: 'relative',
    zIndex: 4,
    [theme.breakpoints.down('md')]: {
      textAlign: 'center'
    }
  },
  down: {
    color: '#FF7272'
  },
  up: {
    color: '#00c708'
  },
  stay: {
    color: '#b2b2b2'
  },
  btn: {
    width: 200,
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(2)
    }
  },
  chartWrap: {
    padding: 0,
    overflow: 'hidden',
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(0, 6),
      marginTop: theme.spacing(-2)
    },
    '& li': {
      marginBottom: theme.spacing(3),
      listStyle: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'flex',
        alignItems: 'center'
      },
      '& h5': {
        fontWeight: theme.typography.fontWeightBold,
        [theme.breakpoints.down('sm')]: {
          fontSize: '16px !important'
        }
      }
    }
  },
  coin: {
    display: 'flex',
    alignItems: 'center',
    minWidth: 120,
    paddingTop: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      float: 'left'
    },
    '& h5': {
      fontWeight: theme.typography.fontWeightBold,
      fontSize: 24
    },
    [`& .${classes.logo}`]: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.down('sm')]: {
        marginRight: theme.spacing(1),
        width: 20,
        height: 20,
      }
    }
  },
  price: {
    marginTop: theme.spacing(),
    fontWeight: theme.typography.fontMedium,
    textAlign: 'left',
    whiteSpace: 'nowrap',
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(0, 5),
    },
    [theme.breakpoints.down('sm')]: {
      textAlign: 'right'
    },
    '& h6': {
      fontWeight: theme.typography.fontWeightMedium,
      fontSize: 18,
    },
    '& i': {
      fontStyle: 'normal'
    }
  },
  progress: {
    width: '100%',
    height: 50,
    maxWidth: 320,
    [theme.breakpoints.down('md')]: {
      maxWidth: 400
    },
    [theme.breakpoints.down('sm')]: {
      width: 250,
      marginTop: theme.spacing(0.5),
      marginBottom: theme.spacing(5),
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default chartPriceStyles;
