import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles({ uniqId: 'sidebar' })((theme) => ({
  sidebar: {
    margin: theme.spacing(5, 0),
    zIndex: 2,
    paddingRight: theme.spacing(3),
    [theme.breakpoints.up('lg')]: {
      position: 'sticky',
      top: -64,
    },
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(0, 3),
      marginTop: theme.spacing(10)
    },
  },
  actionBtn: {
    padding: theme.spacing(1.5, 0)
  },
  property: {
    margin: theme.spacing(5, 0),
    listStyle: 'none',
    padding: 0,
    '& li': {
      listStyle: 'none',
      marginBottom: theme.spacing(3),
      display: 'inline-block',
      marginRight: theme.spacing(3),
      '& i': {
        marginRight: theme.spacing()
      }
    }
  },
  tags: {
    marginBottom: theme.spacing(5),
    '& > div': {
      fontWeight: theme.typography.fontWeightMedium,
      margin: theme.spacing(0.5)
    }
  },
  apps: {
    display: 'flex',
    marginBottom: theme.spacing(5),
    flexWrap: 'wrap',
    '& figure': {
      margin: 0,
      borderRadius: theme.rounded.big,
      marginRight: theme.spacing(2),
      overflow: 'hidden',
      width: 65,
      height: 65,
      marginBottom: theme.spacing(),
      '& img': {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
      }
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
