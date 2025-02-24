import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles({ uniqId: 'case_card' })((theme, _params, classes) => ({
  nftCard: {
    borderRadius: theme.rounded.medium,
    marginBottom: theme.spacing(2),
    overflow: 'hidden',
    position: 'relative',
    background: '#424242',
    boxShadow: theme.shadows[8],
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.up('sm')]: {
      minHeight: 250,
    },
    [`& .${classes.figure}`]: {
      margin: 0,
      display: 'inline-block',
      width: '100%',
      height: '100%',
      '& img': {
        objectFit: 'cover',
        width: '100%',
        height: '100%',
        display: 'block',
        position: 'relative',
      }
    },
  },
  property: {
    transition: 'all 0.3s ease-out',
    position: 'absolute',
    width: '100%',
    height: '150%',
    minHeight: 170,
    padding: theme.spacing(1, 2),
    bottom: 0,
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    left: 0,
    color: theme.palette.common.white,
    '&:before': {
      content: '""',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      position: 'absolute',
      opacity: 0.9,
      background: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, ${theme.palette.secondary.dark} 85%, ${theme.palette.primary.main} 100%)`,
    },
    [theme.breakpoints.down('lg')]: {
      bottom: 0,
      [`& .${classes.desc}`]: {
        display: 'none'
      }
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1),
    }
  },
  user: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    marginBottom: theme.spacing(1)
  },
  title: {
    textTransform: 'capitalize',
    fontWeight: theme.typography.fontWeightBold,
    lineHeight: '36px',
    position: 'relative',
    marginBottom: theme.spacing(1),
    display: 'block',
    [`&.${classes.small}`]: {
      fontSize: 18,
    },
    [`&.${classes.big}`]: {
      fontSize: 24,
      [theme.breakpoints.down('sm')]: {
        fontSize: 18,
        lineHeight: '24px'
      }
    },
  },
  name: {
    display: 'block',
    fontWeight: theme.typography.fontWeightRegular,
  },
  avatar: {
    width: 24,
    height: 24,
    borderRadius: '50%',
    overflow: 'hidden',
    display: 'block',
    background: theme.palette.background.paper,
    textAlign: 'center',
    marginRight: theme.spacing(1),
    [theme.breakpoints.down('lg')]: {
      display: 'none'
    },
    '& img': {
      display: 'block',
      width: '100%'
    }
  },
  price: {
    position: 'absolute',
    top: theme.spacing(),
    zIndex: 1,
    fontWeight: theme.typography.fontWeightMedium
  },
  verified: {
    fill: theme.palette.secondary.main,
    width: 16,
    height: 16,
    marginLeft: theme.spacing()
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
