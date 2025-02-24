import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles({ uniqId: 'case_card' })((theme, _params, classes) => ({
  caseCard: {
    borderRadius: theme.rounded.medium,
    overflow: 'hidden',
    position: 'relative',
    background: '#424242',
    boxShadow: theme.shadows[8],
    display: 'block',
    marginBottom: theme.spacing(5),
    [`&.${classes.landscape}`]: {
      width: 500,
      height: 180,
      [theme.breakpoints.down('sm')]: {
        width: 280,
      },
      '& img': {
        width: '100%',
        minHeight: '100%',
      }
    },
    [`&.${classes.portrait}`]: {
      width: 320,
      height: 400,
      [theme.breakpoints.down('sm')]: {
        width: 280,
        height: 300,
      },
      '& img': {
        minWidth: '100%',
        height: '100%',
      }
    },
    [`&.${classes.square}`]: {
      width: 500,
      height: 400,
      [theme.breakpoints.down('sm')]: {
        width: 280,
      },
      '& img': {
        width: '100%',
        minHeight: '100%',
        objectFit: 'cover'
      }
    },
    [`& .${classes.figure}`]: {
      margin: 0,
      display: 'inline-block',
      width: '100%',
      height: '100%',
      '& img': {
        position: 'relative',
        objectFit: 'cover',
      }
    },
    [`& .${classes.title}`]: {
      textTransform: 'capitalize',
      fontWeight: theme.typography.fontWeightBold,
      lineHeight: '36px',
      fontSize: 24,
      [theme.breakpoints.down('sm')]: {
        fontSize: 18
      }
    },
    [`& .${classes.logo}`]: {
      display: 'block',
      position: 'relative',
      '& img': {
        width: '100%'
      }
    },
  },
  text: {
    flex: 1,
  },
  desc: {
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: 16,
    whiteSpace: 'normal',
    display: 'block'
  },
  property: {
    transition: 'all 0.3s ease-out',
    position: 'absolute',
    width: '100%',
    height: '150%',
    minHeight: 170,
    padding: theme.spacing(1),
    bottom: 0,
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    left: 0,
    color: theme.palette.common.white,
    background: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, ${theme.palette.secondary.dark} 85%, ${theme.palette.primary.dark} 120%)`,
    [`& .${classes.title}`]: {
      whiteSpace: 'normal',
      display: 'flex',
      alignItems: 'center',
    },
    [`& .${classes.logo}`]: {
      width: 46,
      height: 46,
      borderRadius: '50%',
      overflow: 'hidden',
      background: theme.palette.background.paper,
      textAlign: 'center',
      marginRight: theme.spacing(2),
      '& img': {
        display: 'block'
      }
    },
    '& h6': {
      color: theme.palette.common.white,
      marginBottom: theme.spacing(2),
      lineHeight: '22px'
    },
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
