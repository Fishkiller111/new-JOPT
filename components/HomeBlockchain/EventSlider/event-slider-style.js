import { makeStyles } from 'tss-react/mui';

const arrowNav = {
  width: 40,
  height: 40,
  lineHeight: '40px',
  bottom: 8,
  top: 'auto',
  position: 'absolute',
  display: 'block',
  borderRadius: '50%',
  textAlign: 'center',
  textIndent: '1px',
  background: '#000',
  color: '#fff',
  zIndex: 10,
  transition: 'opacity 0.3s ease',
  '&:hover': {
    opacity: 0.6
  }
};

const height = 560;
const heightMobile = 460;

const promotionStyles = makeStyles({ uniqId: 'promo' })((theme, _params, classes) => ({
  root: {
    position: 'relative',
    zIndex: 12,
    width: '100%',
    color: theme.palette.common.black,
    borderRadius: 60,
    background: `linear-gradient(to bottom, ${theme.palette.secondary.light} 10%, ${theme.palette.accent.light} 100%)`,
    [theme.breakpoints.up('md')]: {
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10),
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2),
      textAlign: 'center'
    },
    '& > div': {
      [theme.breakpoints.down('lg')]: {
        padding: 0
      },
    },
    '&:before': {
      content: '""',
      height: 160,
      position: 'absolute',
      zIndex: -1,
      width: 'calc(100% - 10px)',
      left: 5,
      top: -125,
      clipPath: 'polygon(13% 0%, 0% 100%, 100% 100%, 87% 0)',
      background: `linear-gradient(transparent 35%, ${theme.palette.secondary.light} 80%)`,
      [theme.breakpoints.down('sm')]: {
        display: 'none'
      }
    }
  },
  title: {
    color: theme.palette.secondary.dark,
    textTransform: 'capitalize',
    fontWeight: theme.typography.fontWeightBold,
    fontSize: 122,
    lineHeight: '80px',
    position: 'relative',
    [theme.breakpoints.up('md')]: {
      position: 'absolute',
      top: 40,
      left: 40,
    },
    [theme.breakpoints.down('lg')]: {
      fontSize: 100,
      display: 'inline-block'
    },
    [theme.breakpoints.down('md')]: {
      fontSize: 40,
      lineHeight: '56px',
      paddingLeft: theme.spacing(5)
    },
    [theme.breakpoints.down('sm')]: {
      display: 'block',
      textAlign: 'center',
      padding: theme.spacing(2)
    },
    '& span': {
      display: 'inline-block',
      [theme.breakpoints.down('md')]: {
        marginRight: theme.spacing(2)
      },
      [theme.breakpoints.up('md')]: {
        fontSize: 62,
        display: 'block',
      }
    }
  },
  desc: {
    maxHeight: 130,
    minHeight: 100,
    overflow: 'hidden',
    padding: theme.spacing(1, 0),
    marginTop: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  innerBg: {
    padding: theme.spacing(6, 3),
    [`& .${classes.row}`]: {
      zIndex: 2,
      position: 'relative'
    },
    [theme.breakpoints.down('sm')]: {
      padding: 0
    },
  },
  sliderWrap: {
    display: 'block',
    '& a[class*="previousButton"]': {
      left: 'calc(50% + 40px)',
      [theme.breakpoints.down('sm')]: {
        bottom: -10
      },
      ...arrowNav,
    },
    '& a[class*="nextButton"]': {
      left: 'calc(50% + 90px)',
      [theme.breakpoints.down('sm')]: {
        bottom: -10
      },
      ...arrowNav,
    },
    '& > div': {
      zIndex: 1,
      overflow: 'visible',
      height,
      [theme.breakpoints.down('md')]: {
        height: heightMobile
      },
      '& div[class*="slide"]': {
        height: '100%'
      },
      '& div[class="track"]': {
        [theme.breakpoints.up('md')]: {
          borderRadius: 32
        },
        position: 'relative',
        display: 'block',
        width: '100%',
        height: '100%'
      }
    }
  },
  arrowIcon: {
    display: 'block',
    fontSize: 36,
    transform: theme.direction === 'rtl' ? 'rotate(180deg)' : 'none',
    marginRight: theme.direction === 'rtl' ? -4 : 0
  },
  item: {
    display: 'flex',
    padding: 0,
    height,
    [theme.breakpoints.up('md')]: {
      overflow: 'visible !important',
    },
    [theme.breakpoints.down('sm')]: {
      height: heightMobile
    },
    '&:before': {
      display: 'none'
    },
  },
  text: {
    flex: 1,
    padding: theme.spacing(2, 0),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
      paddingTop: 220,
    },
    '& h4': {
      fontSize: 52,
      fontWeight: theme.typography.fontWeightBold,
      marginBottom: theme.spacing(),
      width: '100%',
      [theme.breakpoints.down('lg')]: {
        fontSize: 36
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: 26
      },
      '& span': {
        display: 'block',
        fontSize: 18,
        fontWeight: theme.typography.fontWeightMedium,
      }
    }
  },
  property: {
    width: '100%',
    display: 'flex',
    marginBottom: theme.spacing(2)
  },
  star: {
    marginTop: -3,
    marginRight: theme.spacing(2),
    '& span': {
      color: '#FF9500'
    }
  },
  divider: {
    background: 'none',
    border: 'none',
    borderLeft: `1px solid ${theme.palette.text.secondary}`,
    height: 12,
    margin: theme.spacing(0.5, 2),
    display: 'inline-block',
  },
  btnArea: {
    overflow: 'hidden',
    zIndex: 10,
    position: 'relative',
    width: '100%',
    textAlign: 'center',
    marginTop: 45,
    [theme.breakpoints.down('md')]: {
      marginLeft: theme.spacing(3)
    },
    [theme.breakpoints.up('sm')]: {
      paddingLeft: theme.spacing(5),
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: 6,
      marginLeft: theme.spacing(2),
      textAlign: 'left',
    },
  },
  btnText: {
    color: theme.palette.mode === 'dark' ? theme.palette.secondary.light : theme.palette.secondary.main
  },
  image: {
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    },
    '& figure': {
      overflow: 'hidden',
      height: 260,
      margin: '0 auto',
      borderRadius: 20,
      [theme.breakpoints.up('sm')]: {
        height: 300,
        borderRadius: 60,
      },
      [theme.breakpoints.up('md')]: {
        height: 400,
      },
      [theme.breakpoints.up('lg')]: {
        width: 640,
      },
      '& img': {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
      }
    }
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default promotionStyles;
