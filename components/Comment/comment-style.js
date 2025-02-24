import { makeStyles } from 'tss-react/mui';

const styles = makeStyles({ uniqId: 'comment' })((theme, _params, classes) => ({
  divider: {
    margin: `${theme.spacing(1.5)} 0`,
  },
  listPeople: {
    padding: `${theme.spacing(0.5)} ${theme.spacing(1)}`,
  },
  form: {
    background: 'none',
    boxShadow: 'none',
    flex: 1,
    padding: theme.spacing(1, 0),
    borderRadius: theme.rounded.big,
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(2),
    }
  },
  comment: {
    '& h6': {
      color: theme.palette.mode === 'dark' ? theme.palette.secondary.light : theme.palette.secondary.dark,
      fontWeight: theme.typography.fontWeightMedium,
      fontSize: 16
    }
  },
  commentList: {
    marginTop: theme.spacing(2),
    alignItems: 'flex-start'
  },
  title: {
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    fontSize: 18
  },
  profileList: {},
  commentText: {
    marginTop: theme.spacing(1),
    fontSize: 14,
  },
  avatarComment: {
    marginRight: theme.spacing(3)
  },
  commentAction: {
    boxShadow: theme.shade.light,
    background: theme.palette.background.paper,
    margin: 0,
    borderRadius: theme.rounded.medium
  },
  input: {},
  commentForm: {
    position: 'relative',
    width: '100%',
    padding: '15px 20px',
    margin: 0,
    [theme.breakpoints.up('md')]: {
      minWidth: 600,
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1)
    },
    [`& .${classes.input}`]: {
      width: '100%',
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(20),
      '& textarea': {
        minHeight: 60
      }
    }
  },
  helpItem: {
    textTransform: 'uppercase',
    fontSize: 13
  },
  icon: {
    minWidth: 40,
    '& svg': {
      width: 28,
      height: 28
    }
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default styles;
