import { makeStyles } from 'tss-react/mui';
import gradient from 'theme/gradient';

const heroStyles = makeStyles({ uniqId: 'hero' })((theme, _params, classes) => ({
  // Video
  video: {
    position: 'relative',
    zIndex: 10,
    overflow: 'hidden',
    height: 500,
    width: '120%',
    '& iframe': {
      width: '100%',
      marginTop: -60,
      marginLeft: '-10%'
    },
    [theme.breakpoints.up('md')]: {
      height: 650,
    },
    background: theme.palette.common.black,
  },
  // Animation
  illustration: {
    width: '100%',
    height: 516,
  },
  particleBackground: {
    position: 'absolute',
    width: '100%',
    height: 500,
    top: 0,
    left: 0
  },
  // Slideshow
  slideshow: {
    height: '100%',
    width: '100%',
    '& > div': {
      height: '100%',
      width: '100%',
    }
  },
  slideItem: {
    height: 500,
    width: '100%'
  },
  img: {
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0
  },
  // Media Banner
  root: {
    position: 'relative',
  },
  decoWrap: {
    position: 'relative',
    zIndex: 4
  },
  banner: {
    borderRadius: 40,
    overflow: 'hidden',
    width: '100%',
    position: 'relative',
    height: 300,
    [theme.breakpoints.down('md')]: {
      height: 200
    },
    '&:after': {
      position: 'absolute',
      content: '""',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      opacity: theme.palette.mode === 'dark' ? 0.7 : 0.9,
      background: theme.palette.mode === 'dark' ? gradient(theme).triple.dark : gradient(theme).triple.light,
    }
  },
  cover: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  videoBackground: {
    '& iframe': {
      marginTop: -160,
      width: '100%'
    }
  },
  contentThumb: {
    position: 'relative',
    marginTop: -240,
    [theme.breakpoints.down('lg')]: {
      marginTop: -160,
    }
  },
  content: {
    position: 'relative',
    marginTop: -60
  },
  videoPopup: {
    width: 690,
    maxWidth: 'none',
    '& iframe': {
      [theme.breakpoints.down('sm')]: {
        width: '100%',
        height: 300
      }
    }
  },
  closeBtn: {
    position: 'absolute',
    top: 4,
    right: 4,
  },
  featured: {
    position: 'relative',
    [theme.breakpoints.between('md', 'lg')]: {
      transform: 'scale(0.8)'
    },
    '& > div': {
      [theme.breakpoints.up('md')]: {
        position: 'absolute',
      },
      '& > div': {
        width: '100%',
        height: '100%'
      }
    }
  },
  portrait: {
    width: 286,
    height: 425,
    left: -20,
    top: -470,
    [theme.breakpoints.down('lg')]: {
      width: 246,
      height: 385,
      top: -450
    },
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  landscape: {
    width: 392,
    height: 208,
    right: 0,
    bottom: 20,
    [theme.breakpoints.down('lg')]: {
      width: 352,
      height: 168,
      right: 10,
      bottom: 50,
    },
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  square: {
    width: 180,
    height: 180,
    right: 40,
    top: -430,
    [theme.breakpoints.down('lg')]: {
      width: 140,
      height: 140,
      right: 10,
      top: -400
    },
    [theme.breakpoints.down('md')]: {
      width: 250,
      height: 250,
      right: 0,
      top: -24,
      position: 'relative'
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  // Basic Hero
  basicHero: {
    overflow: 'hidden',
    position: 'relative',
    zIndex: 5,
    textAlign: 'center',
    padding: theme.spacing(10, 0),
    minHeight: 500,
    '& p': {
      fontSize: 24,
      marginTop: theme.spacing(5),
      [theme.breakpoints.down('sm')]: {
        fontSize: 18,
        padding: theme.spacing(0, 2)
      }
    }
  },
  btnAreaSimple: {
    position: 'relative',
    zIndex: 10,
    margin: theme.spacing(5, 0),
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      justifyContent: 'center',
    },
    '& a, button': {
      padding: theme.spacing(1.5, 2),
      margin: theme.spacing(0, 1),
      width: 230,
      [theme.breakpoints.down('sm')]: {
        width: 'auto',
        display: 'block',
        marginBottom: theme.spacing(3)
      }
    }
  },
  // Profile Banner
  avatar: {
    display: 'flex',
    justifyContent: 'center',
    zIndex: 1,
    position: 'relative',
    marginBottom: -100,
    '& .MuiAvatar-root': {
      width: 200,
      height: 200
    }
  },
  decoCircleLine: {
    position: 'absolute',
    width: 200,
    height: 200,
    borderRadius: '50%',
    top: 0,
    marginLeft: 20,
    border: `1px solid ${theme.palette.secondary.main}`,
    '&:after': {
      content: '""',
      position: 'absolute',
      width: 200,
      height: 200,
      borderRadius: '50%',
      left: -20,
      top: -10,
      border: `1px solid ${theme.palette.primary.main}`,
    },
    '&:before': {
      content: '""',
      position: 'absolute',
      width: 200,
      height: 200,
      borderRadius: '50%',
      left: 0,
      top: 10,
      border: `1px solid ${theme.palette.accent.main}`,
    }
  },
  profileCover: {
    borderRadius: 40,
    overflow: 'hidden',
    textAlign: 'center',
    padding: theme.spacing(15, 5, 5),
    position: 'relative',
    color: theme.palette.common.white,
    '& figure': {
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      background: theme.palette.common.black,
      margin: 0,
      '& img': {
        opacity: 0.4,
        objectFit: 'cover',
        width: '100%',
        height: '100%',
      }
    },
    '& h3, p': {
      position: 'relative',
      zIndex: 1,
    },
    p: {
      fontSize: 22,
      [theme.breakpoints.down('sm')]: {
        fontSize: 16
      }
    },
  },
  socmed: {
    position: 'relative',
    zIndex: 10,
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(5)
    },
    '& a': {
      width: 40,
      height: 40,
      margin: '0 4px',
      opacity: 0.75,
      color: theme.palette.common.white
    }
  },
  folowers: {
    margin: '40px auto 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
    zIndex: 3,
    '& .MuiAvatar-colorDefault': {
      background: theme.palette.primary.main,
      color: theme.palette.common.white,
      border: 'none !important',
      zIndex: 1,
      fontSize: 20,
      alignItems: 'flex-start',
      fontWeight: theme.typography.fontWeightBold,
      width: 64,
      height: 64,
      lineHeight: '40px',
      [theme.breakpoints.up('sm')]: {
        lineHeight: '58px',
      },
      [theme.breakpoints.down('sm')]: {
        width: 38,
        height: 38,
      },
      '&:after': {
        content: '"Followers"',
        position: 'absolute',
        fontSize: 11,
        fontWeight: theme.typography.fontWeightRegular,
        bottom: -6,
        [theme.breakpoints.down('sm')]: {
          display: 'none'
        }
      }
    },
    [`& .${classes.btn}`]: {
      [theme.breakpoints.up('sm')]: {
        width: 200,
        fontSize: 20,
        marginLeft: theme.spacing(3)
      }
    }
  },
  avatarSmall: {
    background: gradient(theme).triple.light,
    padding: 2,
    border: 'none !important',
    width: 60,
    height: 60,
    [theme.breakpoints.down('sm')]: {
      width: 34,
      height: 34,
    },
    '& img': {
      borderRadius: '50%'
    }
  },
  // Icon Banner
  iconBanner: {
    '& figure': {
      position: 'absolute',
      borderRadius: theme.rounded.big,
      overflow: 'hidden',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      margin: 0,
      background: theme.palette.background.paper,
      '& img': {
        width: '100%',
        height: '100%',
        position: 'absolute',
        objectFit: 'cover',
        filter: 'blur(5px)',
        opacity: theme.palette.mode === 'dark' ? 0.2 : 0.1,
      }
    },
    '& h3': {
      position: 'relative',
      zIndex: 1,
      fontWeight: theme.typography.fontWeightBold,
      fontSize: 48,
      [theme.breakpoints.down('sm')]: {
        fontSize: 32,
        textAlign: 'center',
        lineHeight: '48px'
      }
    },
  },
  bannerContent: {
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(10)
    },
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(3),
    }
  },
  decoLine: {
    position: 'absolute',
    width: '100%',
    overflow: 'hidden',
    height: 800,
    zIndex: 1,
    left: 0,
    top: 40,
    '& svg': {
      width: 1600,
      height: 700,
      transform: 'scale(1.1, 0.9)',
      position: 'absolute',
    },
  },
  contentBanner: {
    position: 'relative'
  },
  linePrimary: {
    stroke: theme.palette.primary.main,
    left: -250,
    top: 30
  },
  lineSecondary: {
    stroke: theme.palette.secondary.main,
    left: -280,
    top: 10
  },
  icon: {
    position: 'relative',
    display: 'inline-block',
    zIndex: 1,
    top: 120,
    left: 100,
    [theme.breakpoints.up('md')]: {
      transform: 'scale(2.5)',
    },
    '& > div': {
      position: 'absolute',
      textAlign: 'center',
      zIndex: 2,
    },
    [`& .${classes.left}`]: {
      fontSize: 64,
      top: -80,
      left: -60
    },
    [`& .${classes.right}`]: {
      fontSize: 48,
      top: 10,
      right: -80
    },
    [`& .${classes.center}`]: {
      fontSize: 128,
      top: -80,
      left: -60
    },
  },
  properties: {
    marginTop: theme.spacing(2),
    position: 'relative',
    zIndex: 2,
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
  },
  desc: {
    '& p': {
      fontSize: 18,
      [theme.breakpoints.down('sm')]: {
        fontSize: 16,
        textAlign: 'center'
      }
    },
    '& ul': {
      marginTop: theme.spacing(3),
      padding: 0,
      textAlign: 'left',
      [theme.breakpoints.up('sm')]: {
        marginRight: theme.spacing(3),
      },
      '& li': {
        marginBottom: theme.spacing(2),
        position: 'relative',
        paddingLeft: theme.spacing(3),
        textTransform: 'uppercase',
        listStyle: 'none',
        width: '50%',
        display: 'inline-block',
        [theme.breakpoints.down('sm')]: {
          fontSize: 12
        },
        '&:before': {
          content: '""',
          width: 13,
          height: 13,
          borderRadius: '50%',
          position: 'absolute',
          left: 4,
          top: 4,
          background: gradient(theme).triple.light,
        }
      }
    }
  },
  btnArea: {
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(5),
    },
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
    '& button, a': {
      [theme.breakpoints.up('sm')]: {
        marginRight: theme.spacing(2),
      },
      [theme.breakpoints.down('sm')]: {
        width: '100%',
        marginTop: theme.spacing(3)
      },
    }
  },
  counter: {
    position: 'relative',
    [theme.breakpoints.between('md', 'lg')]: {
      paddingRight: theme.spacing(2)
    },
    [theme.breakpoints.up('lg')]: {
      right: -40
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(5),
      display: 'flex'
    },
  },
  paper: {
    textAlign: 'center',
    padding: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: 180,
    fontSize: 20,
    [theme.breakpoints.up('sm')]: {
      marginBottom: theme.spacing(4),
    },
    [theme.breakpoints.up('md')]: {
      height: 140,
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: 'auto',
      marginRight: 'auto',
      fontSize: 14,
    },
    '& h2': {
      fontSize: 60,
      lineHeight: '55px',
      fontWeight: theme.typography.fontWeightBold,
      [theme.breakpoints.down('sm')]: {
        fontSize: 36
      }
    }
  },
  bgPrimary: {
    background: theme.palette.primary.main,
    color: theme.palette.common.white,
    [theme.breakpoints.down('sm')]: {
      marginRight: theme.spacing()
    },
  },
  bgSecondary: {
    background: theme.palette.secondary.main,
    color: theme.palette.secondary.dark,
  },
  tags: {
    display: 'flex',
    textTransform: 'capitalize',
    '& h6': {
      marginRight: theme.spacing(1),
      '&:after': {
        content: '", "'
      },
    },
    '& > h6:last-child': {
      '&:after': {
        content: 'none'
      },
    }
  },
  front: {
    position: 'relative',
    '& button': {
      zIndex: 5,
    },
    [theme.breakpoints.between('sm', 'lg')]: {
      paddingRight: theme.spacing(2)
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(2),
      '& > div': {
        maxWidth: '100% !important'
      }
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default heroStyles;
