import { makeStyles } from 'tss-react/mui';
import gradient from 'theme/gradient';

const testiStyles = makeStyles({ uniqId: 'testi' })(theme => ({
  root: {
    position: 'relative',
    overflow: 'hidden',
    paddingBottom: theme.spacing(5)
  },
  carousel: {
    position: 'relative',
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(0, 8),
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(5)
    },
    '& ul[class="slick-dots"]': {
      bottom: theme.spacing(-8),
      '& li': {
        width: 15,
        height: 15,
        boxShadow: `inset 0 0 0 1px ${theme.palette.text.disabled}`,
        border: 'none',
        borderRadius: 15,
        opacity: 1,
        margin: '0 4px !important',
        transition: 'width 0.5s ease-in',
        overflow: 'hidden',
        '& button': {
          background: gradient(theme).triple.light,
          opacity: 0,
          width: '100%',
          height: '100%',
          transition: 'opacity 1s ease-in',
        },
        '&[class="slick-active"]': {
          boxShadow: 'none',
          width: 40,
          '& button': {
            opacity: 1,
          },
        }
      },
      '& li button:before': {
        display: 'none'
      }
    }
  },
  item: {
    padding: theme.spacing(0, 1),
    direction: 'ltr',
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(7, 1, 0),
    },
    '&:focus': {
      outline: 'none'
    }
  },
  nav: {
    position: 'absolute',
    top: '48%',
    width: 60,
    height: 100,
    padding: 0,
    minWidth: 0,
    background: theme.palette.primary.dark,
    transform: theme.direction === 'rtl' ? 'scale(-1)' : 'scale(1)',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
    '& i': {
      fontSize: 48,
      color: theme.palette.common.white,
    }
  },
  prev: {
    left: -8,
    borderRadius: '0 10px 10px 0',
  },
  next: {
    right: -8,
    borderRadius: '10px 0 0 10px',
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default testiStyles;
