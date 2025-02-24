import { makeStyles } from 'tss-react/mui';
import { alpha } from '@mui/material/styles';
import gradient from 'theme/gradient';

const testiStyles = makeStyles({ uniqId: 'testi_card' })((theme, _params, classes) => ({
  title: {},
  testiCard: {
    direction: 'ltr',
    position: 'relative',
    '&:before': {
      content: '""',
      position: 'absolute',
      top: 10,
      left: 0,
      borderRadius: 50,
      border: `1px solid ${theme.palette.primary.main}`,
      width: 240,
      height: 240,
      transform: 'rotate(-5deg)',
      transformOrigin: 'bottom left',
    },
  },
  paper: {
    background: alpha(theme.palette.background.paper, 0.5),
    backdropFilter: 'saturate(180%) blur(20px)',
    border: `1px solid ${theme.palette.secondary.main}`,
    padding: theme.spacing(3),
    width: 240,
    height: 240,
    borderRadius: 50,
    position: 'relative',
    '& p': {
      height: 130,
      overflow: 'hidden'
    }
  },
  rating: {
    marginTop: theme.spacing(4)
  },
  starIcon: {
    color: '#FFC107'
  },
  starIconDisable: {
    color: theme.palette.divider
  },
  avatar: {
    padding: 4,
    background: gradient(theme).triple.light,
    '& img': {
      borderRadius: '50%'
    }
  },
  person: {
    display: 'flex',
    marginTop: theme.spacing(3),
    [`& .${classes.avatar}`]: {
      width: 55,
      height: 55,
    },
    [`& .${classes.title}`]: {
      fontStyle: 'italic',
      fontWeight: 300
    },
  },
  name: {
    marginLeft: theme.spacing(2),
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default testiStyles;
