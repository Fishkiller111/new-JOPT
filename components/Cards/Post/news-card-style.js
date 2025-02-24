import { makeStyles } from 'tss-react/mui';

const cardsStyles = makeStyles({ uniqId: 'news_card' })((theme, _params, classes) => ({
  figure: {},
  newsCard: {
    display: 'flex',
    [`& .${classes.figure}`]: {
      margin: 0,
      overflow: 'hidden',
      borderRadius: 15,
      zIndex: 1,
      '& img': {
        marginLeft: '50%',
        transform: 'translateX(-50%)'
      }
    },
    '& p': {
      fontSize: 18,
      marginTop: theme.spacing(2),
      fontWeight: theme.typography.fontWeightMedium
    }
  },
  media: {
    height: '100%'
  },
  desc: {
    [theme.breakpoints.up('sm')]: {
      flex: 1,
    }
  },
  text: {
    padding: theme.spacing(0, 2),
    '& h6': {
      overflow: 'hidden',
      WebkitLineClamp: 3,
      display: '-webkit-box',
      WebkitBoxOrient: 'vertical',
    }
  },
  title: {
    fontWeight: theme.typography.fontWeightMedium,
    textTransform: 'uppercase',
  },
  date: {
    fontSize: 11,
    marginBottom: theme.spacing(1),
    display: 'block',
    color: theme.palette.text.secondary
  },
  btn: {
    margin: theme.spacing(),
    padding: theme.spacing(0, 1),
    color: theme.palette.mode === 'dark' ? theme.palette.secondary.main : theme.palette.primary.main,
  },
  /* Orientation */
  landscape: {
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginBottom: theme.spacing(5),
    },
    [`& .${classes.figure}`]: {
      minWidth: 150,
      maxWidth: 200,
      [theme.breakpoints.down('sm')]: {
        minWidth: 100,
        maxWidth: 150,
      },
    },
    [`& .${classes.desc}`]: {
      [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(2),
        marginLeft: theme.spacing(-12),
        paddingLeft: theme.spacing(13),
      },
      [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(1),
        [`& .${classes.title}`]: {
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
          overflow: 'hidden',
          position: 'relative',
          width: '100%',
          display: 'block',
        }
      }
    },
    [`& .${classes.text}`]: {
      [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(0, 1),
        '& h6': {
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
          overflow: 'hidden',
          position: 'relative',
          width: '100%',
          display: 'block',
        }
      },
    },
    [`& .${classes.properties}`]: {
      overflow: 'hidden',
      flex: 1,
      [theme.breakpoints.down('sm')]: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        '& .MuiCardActions-root': {
          padding: 0
        }
      },
    },
  },
  portrait: {
    flexDirection: 'column',
    maxWidth: 300,
    [`&.${classes.fullWidth}`]: {
      width: '100%',
      maxWidth: '100%'
    },
    [`& .${classes.desc}`]: {
      marginTop: -200,
      padding: theme.spacing(1),
      paddingTop: 230,
      [theme.breakpoints.down('sm')]: {
        paddingLeft: theme.spacing(),
        paddingRight: theme.spacing(),
      }
    },
     [`& .${classes.text}`]: {
      '& h6': {
        height: 96,
      }
    },
    [`& .${classes.figure}`]: {
      height: 200,
    }
  },
  /* Type */
  full: {
    overflow: 'hidden',
    position: 'relative',
    [`& .${classes.figure}`]: {
      borderRadius: 0
    }
  },
  round: {
    [`& .${classes.figure}`]: {
      margin: theme.spacing(1),
      overflow: 'hidden',
      borderRadius: theme.rounded.medium
    },
    [`&.${classes.landscape}`]: {
      '& figure': {
        [theme.breakpoints.down('sm')]: {
          margin: theme.spacing(1)
        }
      }
    }
  },
  oval: {
    overflow: 'hidden',
    [`&.${classes.portrait}`]: {
      [`& .${classes.figure}`]: {
        width: '120%',
        marginLeft: '-10%',
        overflow: 'hidden',
        borderRadius: '0 0 50% 50%',
      }
    },
    [`&.${classes.landscape}`]: {
      [`& .${classes.figure}`]: {
        overflow: 'hidden',
      },
      [`& .${classes.media}`]: {
        borderRadius: '0 50% 50% 0 !important',
        height: '120% !important',
        marginTop: '-10%',
      },
    }
  },
  over: {
    overflow: 'visible',
    [`& .${classes.figure}`]: {
      boxShadow: theme.shadows[8],
    },
    [`&.${classes.portrait}`]: {
      [`& .${classes.figure}`]: {
        margin: theme.spacing(-2, 2, 0),
        [theme.breakpoints.down('lg')]: {
          height: 140
        },
        '& img': {
          width: '100%'
        }
      }
    },
    [`&.${classes.landscape}`]: {
      [`& .${classes.figure}`]: {
        width: 180,
        height: 'auto',
        margin: theme.spacing(2, 0, 2, -2),
        [theme.breakpoints.down('sm')]: {
          width: '93%',
          marginLeft: theme.spacing(-1),
          height: 160
        },
        '& img': {
          height: '100%',
          minWidth: '100%',
          [theme.breakpoints.down('sm')]: {
            height: 'auto',
            width: '100%'
          }
        }
      }
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default cardsStyles;
