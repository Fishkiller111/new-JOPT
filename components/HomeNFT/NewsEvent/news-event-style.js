import { makeStyles } from 'tss-react/mui';
import gradient from 'theme/gradient';

const newsEventStyle = makeStyles({ uniqId: 'news_event' })(theme => ({
  root: {
    position: 'relative',
    margin: '0 auto',
    paddingBottom: theme.spacing(1),
  },
  carousel: {
    marginTop: theme.spacing(10),
    [theme.breakpoints.up('sm')]: {
      marginBottom: theme.spacing(10),
    },
    '& *:focus': {
      outline: 'none'
    },
    '& ul[class="slick-dots"]': {
      bottom: theme.spacing(-7),
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
    padding: theme.spacing(3, 1),
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default newsEventStyle;
