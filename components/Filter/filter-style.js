import { makeStyles } from 'tss-react/mui';

const filterStyles = makeStyles({ uniqId: 'filter' })((theme, _params, classes) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  sorter: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      justifyContent: 'flex-end',
    },
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',

    }
  },
  searchBanner: {
    display: 'flex',
    alignItems: 'center',
  },
  btnFilter: {
    margin: theme.spacing(0, 1),
    background: theme.palette.mode === 'dark' ? theme.palette.background.default : theme.palette.background.paper,
    border: `1px solid ${theme.palette.divider}`,
    color: theme.palette.text.primary,
    [theme.breakpoints.down('sm')]: {
      width: 'calc(50% - 16px)'
    }
  },
  search: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    zIndex: 1,
    fontSize: 18,
    width: '100%',
    '& fieldset': {
      opacity: 0.5
    },
    '& form': {
      width: '100%',
      '& > div': {
        background: theme.palette.background.default,
        borderRadius: 36,
        overflow: 'hidden',
        '& svg': {
          opacity: 0.5
        },
        '& input': {
          [theme.breakpoints.up('md')]: {
            paddingLeft: theme.spacing(1)
          }
        }
      },
    },
    [`& .${classes.input}`]: {
      borderRadius: 10,
      marginLeft: 0,
      background: theme.palette.background.default,
      [theme.breakpoints.up('md')]: {
        paddingLeft: theme.spacing(2)
      }
    },
    '& label': {
      left: theme.spacing(3),
      top: theme.spacing(),
      fontWeight: theme.typography.fontWeightBold
    },
    '& label + div': {
      marginTop: 0,
      '&:after, &:before': {
        display: 'none'
      }
    },
    [`& .${classes.searchIcon}`]: {
      position: 'absolute',
      top: 7,
      left: theme.spacing(1)
    },
  },
  filterBlock: {
    marginBottom: theme.spacing(3),
    '& .Mui-selected': {
      background: theme.palette.primary.main + ' !important',
      color: theme.palette.common.white + ' !important',
    }
  },
  titleLabel: {
    fontWeight: theme.typography.fontWeightMedium,
    marginBottom: theme.spacing(2),
    color: theme.palette.text.primary,
    fontSize: 24
  },
  formControl: {
    display: 'block',
    textAlign: 'left',
    '& input': {
      paddingTop: 6
    }
  },
  select: {
    display: 'block',
    textAlign: 'left',
    width: 160,
    [theme.breakpoints.up('md')]: {
      flex: 1,
      marginRight: theme.spacing(2),
    },
    [theme.breakpoints.down('sm')]: {
      width: '50%',
    },
    '& .MuiInputBase-root': {
      background: theme.palette.background.default,
      height: 40,
      [theme.breakpoints.up('md')]: {
        height: 56,
      }
    }
  },
  switchView: {
    '& button': {
      padding: theme.spacing(0.5, 2),
      borderRadius: theme.rounded.medium,
    },
    '& button.Mui-selected': {
      background: theme.palette.background.default
    }
  },
  checklist: {
    paddingRight: 0,
    paddingLeft: 0,
    '& label': {
      display: 'block',
      width: '100%',
      marginRight: 0
    }
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  btnTag: {
    position: 'relative',
    cursor: 'pointer',
    '& label': {
      display: 'inline-block',
      padding: '1px 6px',
      margin: '4px 2px',
      borderRadius: theme.rounded.big,
      border: `1px solid ${theme.palette.primary.main}`,
      cursor: 'pointer',
      position: 'relative',
      transition: 'all 0.3s ease',
      background: theme.palette.background.default,
    },
    '& input': {
      opacity: 0,
      position: 'absolute',
      '&:checked + label': {
        color: theme.palette.common.white,
        background: theme.palette.primary.main
      }
    }
  },
  accordion: {
    background: 'none',
    boxShadow: 'none',
    '& .MuiAccordionSummary-root': {
      marginBottom: 0,
    },
    '& .MuiAccordionDetails-root': {
      padding: theme.spacing(1, 0, 2)
    }
  },
  allFilter: {
    '& span, div': {
      fontWeight: theme.typography.fontWeightMedium
    }
  },
  tabLabel: {
    fontSize: 18,
    fontWeight: theme.typography.fontWeightMedium,
    letterSpacing: 0,
    padding: theme.spacing(0, 4),
    [theme.breakpoints.down('sm')]: {
      fontSize: 14
    }
  },
  indicator: {
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.light,
    height: 5,
    borderRadius: '4px 4px 0 0'
  },
  tabContent: {
    marginTop: theme.spacing(5)
  },
  rootTab: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down('lg')]: {
      '& h6': {
        flex: 1,
        whiteSpace: 'nowrap',
        margin: theme.spacing(0, 2)
      },
      '& > div': {
        width: '100%'
      }
    },
    [theme.breakpoints.down('sm')]: {
      '& > div': {
        // display: 'none'
      }
    },
  },
  starIcon: {
    '& .MuiRating-icon': {
      color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark
    }
  },
  total: {
    flex: 1,
    textAlign: 'right',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      flexBasis: '100%',
      padding: theme.spacing(1)
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default filterStyles;
