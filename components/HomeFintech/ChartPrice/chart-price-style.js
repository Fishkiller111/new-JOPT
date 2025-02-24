import { makeStyles } from 'tss-react/mui';

const chartPriceStyles = makeStyles({ uniqId: 'chart_price' })((theme, _params, classes) => ({
  root: {
    color: theme.palette.common.white,
    position: 'relative',
    padding: theme.spacing(10, 3),
    zIndex: 4,
    borderRadius: '60px 60px 0 0',
    background: `linear-gradient(-2deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(15, 3),
    },
    [theme.breakpoints.down('md')]: {
      textAlign: 'center'
    },
    [theme.breakpoints.down('sm')]: {
      borderRadius: '30px 30px 0 0',
    },
    '&:before': {
      content: '""',
      height: 60,
      width: '100%',
      position: 'absolute',
      bottom: 0,
      left: 0,
      background: theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.background.paper,
      borderRadius: '60px 60px 0 0',
      [theme.breakpoints.down('sm')]: {
        borderRadius: '30px 30px 0 0',
      }
    },
    '&:after': {
      content: '""',
      height: 60,
      width: '100%',
      position: 'absolute',
      bottom: 0,
      left: 0,
      opacity: 0.5,
      background: theme.palette.mode === 'dark' ? theme.palette.common.black : theme.palette.common.white,
      borderRadius: '60px 60px 0 0',
      [theme.breakpoints.down('sm')]: {
        borderRadius: '30px 30px 0 0',
      }
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
