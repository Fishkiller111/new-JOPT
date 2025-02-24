import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles({ uniqId: 'post_card' })((theme, _params, classes) => ({
  postCard: {
    borderRadius: theme.rounded.medium,
    marginBottom: theme.spacing(2),
    overflow: 'hidden',
    position: 'relative',
    background: '#424242',
    boxShadow: theme.shadows[8],
    display: 'flex',
    justifyContent: 'center',
    minHeight: 250,
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
    padding: theme.spacing(2),
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
      padding: theme.spacing(1),
      bottom: 0,
    },
  },
  title: {
    textTransform: 'capitalize',
    fontWeight: theme.typography.fontWeightBold,
    lineHeight: '36px',
    position: 'relative',
    display: 'block',
    marginBottom: theme.spacing(1),
    [`&.${classes.small}`]: {
      fontSize: 18,
    },
    [`&.${classes.big}`]: {
      fontSize: 24,
    }
  },
  desc: {
    position: 'relative',
    display: 'block',
    marginTop: theme.spacing(2),
    '& span': {
      display: 'block'
    }
  },
  source: {
    marginBottom: theme.spacing(1),
    opacity: 0.75,
    fontSize: 12,
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
