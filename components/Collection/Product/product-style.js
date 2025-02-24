import { makeStyles } from 'tss-react/mui';
import gradient from 'theme/gradient';

const useStyles = makeStyles({ uniqId: 'product' })((theme, _params, classes) => ({
  productDetail: {
    marginBottom: theme.spacing(5)
  },
  options: {
    position: 'absolute',
    right: 0,
    top: 0,
    '& button, a': {
      margin: theme.spacing(0, 0.5),
      background: theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
      color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
      [theme.breakpoints.down('sm')]: {
        width: 24,
        height: 24,
        '& svg': {
          width: 18
        }
      }
    }
  },
  img: {
    maxWidth: 'none'
  },
  divider: {
    margin: `${theme.spacing(2)} 0`,
    [theme.breakpoints.up('sm')]: {
      margin: `${theme.spacing(1.5)} 0`,
    },
    background: 'none'
  },
  desc: {
    maxHeight: 130,
    padding: theme.spacing(1, 0),
    marginBottom: theme.spacing(5),
    '& h6': {
      fontWeight: theme.typography.fontWeightMedium,
    }
  },
  text: {
    textAlign: 'left',
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(5)
    },
    '& h4': {
      fontWeight: theme.typography.fontWeightBold,
      marginBottom: theme.spacing(2),
      width: '100%',
      '& span': {
        display: 'block',
        fontWeight: theme.typography.fontWeightMedium,
      }
    },
    '& svg': {
      height: 20,
      width: 20,
    }
  },
  counterWrap: {
    margin: theme.spacing(5, 0)
  },
  title: {
    position: 'relative',
    fontSize: 48,
    fontWeight: theme.typography.fontWeightMedium,
  },
  property: {
    width: '100%',
    display: 'flex',
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down('md')]: {
      flexWrap: 'wrap'
    },
    '& i': {
      marginRight: 4,
      marginLeft: 8,
      color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark
    },
    [`& .${classes.divider}`]: {
      background: 'none',
      borderLeft: '1px solid',
      borderColor: theme.palette.text.primary,
      height: 12,
      margin: `6px ${theme.spacing(2)}`,
      display: 'inlineBlock',
    }
  },
  btnArea: {
    zIndex: 10,
    position: 'relative',
    display: 'flex',
    width: '100%',
    alignItems: 'flex-end',
    [theme.breakpoints.down('lg')]: {
      flexWrap: 'wrap'
    },
    '& > button, a': {
      marginLeft: theme.spacing(2),
      [theme.breakpoints.down('lg')]: {
        width: 'calc(50% - 16px)'
      },
      [theme.breakpoints.down('md')]: {
        width: '100%',
        marginBottom: theme.spacing(3)
      }
    }
  },
  price: {
    marginRight: theme.spacing(2),
    lineHeight: '22px',
    [theme.breakpoints.down('lg')]: {
      width: '100%',
      flexBasis: '100%',
      marginBottom: theme.spacing(5),
      marginLeft: theme.spacing(2),
    },
    '& p': {
      color: theme.palette.text.secondary,
      marginBottom: theme.spacing(2),
    },
    '& h3': {
      fontSize: 36,
      fontWeight: theme.typography.fontWeightMedium,
      '& span': {
        fontSize: 18,
        display: 'inline-block',
        marginLeft: theme.spacing(1)
      }
    }
  },
  zoomIcon: {
    position: 'absolute',
    fontSize: '56px !important',
    top: 'calc(50% - 28px)',
    left: 'calc(50% - 28px)',
    opacity: 0,
    color: theme.palette.common.white,
    textShadow: `1px 1px 10px ${theme.palette.common.black}`,
    transition: theme.transitions.create('opacity', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.shortest,
    }),
  },
  properties: {
    marginTop: theme.spacing(5),
    '& h6': {
      fontSize: 14,
      textTransform: 'uppercase',
      color: theme.palette.mode === 'dark' ? theme.palette.secondary.main : theme.palette.primary.main,
      fontWeight: theme.typography.fontWeightBold
    },
    '& p': {
      marginBottom: theme.spacing(4),
      width: '100%',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    },
    '& a': {
      color: theme.palette.text.primary,
    }
  },
  details: {
    marginTop: theme.spacing(5),
    '& ul': {
      listStyle: 'none',
      padding: 0,
      [theme.breakpoints.up('sm')]: {
        margin: theme.spacing(5, 0, 10),
      },
      '& li': {
        listStyle: 'none',
        marginBottom: theme.spacing(2),
        display: 'flex',
        '& span': {
          flex: 1
        },
        '& a': {
          textDecoration: 'none',
          color: theme.palette.mode === 'dark' ? theme.palette.secondary.main : theme.palette.primary.main,
        }
      }
    }
  },
  headline: {
    color: theme.palette.primary.dark,
  },
  carousel: {
    '& ul[class="slick-dots"]': {
      bottom: theme.spacing(-5),
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
    [`& .${classes.figure}`]: {
      overflow: 'hidden',
      cursor: 'pointer',
    },
    '& a': {
      display: 'block'
    },
    '&:hover': {
      [`& .${classes.zoomIcon}`]: {
        opacity: 1
      }
    }
  },
  imgDetail: {
    height: 350,
    width: '100%',
    borderRadius: theme.rounded.big,
    backgroundSize: 'cover',
    backgroundPosition: 'center center'
  },
  scrollTablet: {
    flexFlow: 'row wrap',
    flexWrap: 'nowrap',
    width: '100%',
    overflow: 'auto',
    paddingBottom: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      padding: 0,
      margin: 0
    }
  },
  accordion: {
    borderRadius: theme.rounded.big + ' !important',
    boxShadow: theme.shade,
    marginBottom: theme.spacing(5),
    '& a': {
      textDecoration: 'none',
      color: theme.palette.mode === 'dark' ? theme.palette.secondary.main : theme.palette.primary.main,
    },
    [`& .${classes.icon}`]: {
      width: 32,
      height: 32,
      top: theme.spacing(),
      marginRight: theme.spacing(1.5),
      position: 'relative',
      fill: theme.palette.secondary.main,
    },
    [`& .${classes.iconTb}`]: {
      fontSize: 18,
      position: 'relative',
      top: 4,
      marginRight: 4,
    }
  },
  chart: {
    width: '100%',
    height: 200,
    marginBottom: theme.spacing(3),
    paddingLeft: theme.spacing(3),
  },
  yLabel: {
    position: 'absolute',
    fontWeight: theme.typography.fontWeightMedium,
    transform: 'rotate(-90deg)',
    transformOrigin: 'center',
    left: -10,
    top: 130
  },
  cardRelated: {
    minWidth: 220,
    height: 300,
    '& > a': {
      height: '100%'
    }
  },
  carouselHeader: {
    position: 'relative',
    zIndex: 3,
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      '& > div': {
        flex: 1
      },
    },
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      marginBottom: theme.spacing(5)
    },
  },
  viewAll: {
    padding: '6px 24px',
    color: theme.palette.mode === 'dark' ? theme.palette.secondary.light : theme.palette.primary.main,
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
