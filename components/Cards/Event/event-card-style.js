import { makeStyles } from 'tss-react/mui';

const eventCardStyle = makeStyles({ uniqId: 'event-card' })((theme, _params, classes) => ({
  eventCard: {
    padding: theme.spacing(5, 0),
    textAlign: 'center',
    fontSize: 18,
    borderRadius: 60,
    boxShadow: 'none',
    position: 'relative',
    overflow: 'visible',
    [`&.${classes.primary}`]: {
      color: theme.palette.common.white,
      background: `linear-gradient(to bottom, ${theme.palette.primary.main} 10%, ${theme.palette.accent.light} 100%)`,
      '&:before': {
        content: '""',
        height: 110,
        position: 'absolute',
        zIndex: -1,
        width: 'calc(100% - 10px)',
        left: 5,
        top: -75,
        clipPath: 'polygon(13% 0%, 0% 100%, 100% 100%, 87% 0)',
        background: `linear-gradient(transparent 35%, ${theme.palette.primary.main} 80%)`
      },
      [`& .${classes.date}`]: {
        background: `linear-gradient(to bottom, ${theme.palette.common.white} -10%, transparent 80%)`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }
    },
    [`&.${classes.secondary}`]: {
      color: theme.palette.common.black,
      background: `linear-gradient(to bottom, ${theme.palette.secondary.main} 10%, ${theme.palette.mode === 'dark' ? theme.palette.common.white : theme.palette.accent.light} 100%)`,
      '&:before': {
        content: '""',
        height: 110,
        position: 'absolute',
        zIndex: -1,
        width: 'calc(100% - 10px)',
        left: 5,
        top: -75,
        clipPath: 'polygon(13% 0%, 0% 100%, 100% 100%, 87% 0)',
        background: `linear-gradient(transparent 35%, ${theme.palette.secondary.main} 80%)`
      },
      [`& .${classes.date}`]: {
        background: `linear-gradient(to bottom, ${theme.palette.secondary.dark} -20%, transparent 80%)`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      },
      [`& .${classes.location}`]: {
        color: theme.palette.secondary.dark,
      }
    },
    '& p': {
      margin: theme.spacing(4, 0),
      fontSize: 18,
    }
  },
  date: {
    fontWeight: theme.typography.fontWeightBold,
    fontSize: 80,
    textTransform: 'uppercase',
    marginBottom: -60,
    [theme.breakpoints.down('sm')]: {
      fontSize: 48
    }
  },
  location: {
    fontWeight: theme.typography.fontWeightBold,
    fontSize: 64,
    [theme.breakpoints.down('sm')]: {
      fontSize: 32,
      marginTop: theme.spacing(3)
    }
  },
  btnArea: {
    justifyContent: 'center',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      '& .MuiButton-root': {
        margin: theme.spacing(0, 0.5)
      }
    },
    [theme.breakpoints.down('sm')]: {
      '& .MuiButton-root': {
        display: 'block',
        width: '100%',
        marginTop: theme.spacing(2)
      }
    },
  },
}));

export default eventCardStyle;
