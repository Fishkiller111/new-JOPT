import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Fade from '@mui/material/Fade';
import { useTranslation } from 'next-i18next';
import brand from 'public/text/brand';
import { useText } from 'theme/common';
import Logo from '../../Branding/Logo';
import useStyles from './header-style';
import Settings from '../../Header/TopNav/Settings';

const LinkBtn = React.forwardRef(function LinkBtn(props, ref) { // eslint-disable-line
  return <AnchorLink to={props.to} {...props} />; // eslint-disable-line
});

function Header(props) {
  // Theme breakpoints
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { classes: text } = useText();

  const [fixed, setFixed] = useState(false);
  let flagFixed = false;
  const handleScroll = () => {
    const doc = document.documentElement;
    const scroll = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    const newFlagFixed = (scroll > 50);
    if (flagFixed !== newFlagFixed) {
      setFixed(newFlagFixed);
      flagFixed = newFlagFixed;
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  const { classes, cx } = useStyles();
  const {
    onToggleDark,
    onToggleDir,
    invert,
    menu,
  } = props;

  const { t } = useTranslation('common');

  const [openDrawer, setOpenDrawer] = useState(false);
  const handleOpenDrawer = () => {
    setOpenDrawer(!openDrawer);
    const body = document.getElementsByTagName('body');
    if (openDrawer) {
      body[0].style.overflow = 'auto';
    } else {
      body[0].style.overflow = 'hidden';
    }
  };

  const handleCloseDrawer = () => {
    setOpenDrawer(false);
    const body = document.getElementsByTagName('body');
    body[0].style.overflow = 'auto';
  };

  return (
    <Fragment>
      <AppBar
        component="div"
        position="relative"
        id="header"
        className={cx(
          classes.header,
          invert || fixed ? classes.fixed : '',
          openDrawer && classes.openDrawer
        )}
      >
        <Container fixed={!isTablet}>
          <div className={classes.headerContent}>
            <nav className={cx(classes.navLogo, invert && classes.invert)}>
              <div className={classes.logo}>
                {!isTablet && (
                  <IconButton
                    onClick={handleOpenDrawer}
                    className={cx('hamburger hamburger--squeeze', classes.mobileMenu, openDrawer && 'is-active')}
                    size="large"
                  >
                    <span className="hamburger-box">
                      <span className={cx(classes.bar, 'hamburger-inner')} />
                    </span>
                  </IconButton>
                )}
                <AnchorLink href="#home">
                  <Logo type="landscape" size={isMobile ? 'small' : 'medium'} />
                </AnchorLink>
              </div>
              <Settings toggleDark={onToggleDark} toggleDir={onToggleDir} invert={invert} />
              {isTablet && (
                <IconButton
                  onClick={handleOpenDrawer}
                  className={cx('hamburger hamburger--squeeze', classes.mobileMenu, openDrawer && 'is-active')}
                  size="large"
                >
                  <span className="hamburger-box">
                    <span className={cx(classes.bar, 'hamburger-inner')} />
                  </span>
                </IconButton>
              )}
            </nav>
          </div>
        </Container>
      </AppBar>
      <Fade in={openDrawer}>
        <div className={cx(classes.paperNav, openDrawer && classes.show)}>
          <div className={classes.mobileNav}>
            <Container maxWidth="md">
              <Grid container spacing={6}>
                <Grid item sm={6}>
                  <div className={classes.rootMenu}>
                    {!isTablet && (
                      <Typography variant="h5" className={classes.nameDeco}>
                        EXPLORE
                      </Typography>
                    )}
                    {openDrawer && (
                      <ul className={classes.menu}>
                        {menu.map((item, index) => (
                          <li key={item.id.toString()} style={{ animationDuration: index * 0.15 + 's' }}>
                            {invert ? (
                              // eslint-disable-next-line
                              <Button href={'/' + item.id}>
                                {t('avatar.header_' + item.name)}
                              </Button>
                            ) : (
                              // eslint-disable-next-line
                              <Button component={LinkBtn} onClick={handleCloseDrawer} offset={item.offset || 0} href={'#'+item.id}>
                                {t('avatar.header_' + item.name)}
                              </Button>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </Grid>
                <Grid item sm={6}>
                  <div className={classes.detail}>
                    {!isTablet && (
                      <Typography variant="h5" className={classes.nameDeco}>
                        CONTACT
                      </Typography>
                    )}
                    <div className={classes.logoName}>
                      <Typography variant="h3" className={text.title}>
                        {brand.name}
                      </Typography>
                      <Typography variant="h4" className={text.subtitle}>
                        {brand.title}
                      </Typography>
                    </div>
                    <Button variant="outlined" color="primary" className={classes.download} component="a">Download CV</Button>
                    <div className={classes.socmed}>
                      <IconButton aria-label="Delete" className={classes.margin} size="small">
                        <i className={cx('ion-logo-facebook', classes.fb)} />
                      </IconButton>
                      <IconButton aria-label="Delete" className={classes.margin} size="small">
                        <i className={cx('ion-logo-instagram', classes.ig)} />
                      </IconButton>
                      <IconButton aria-label="Delete" className={classes.margin} size="small">
                        <i className={cx('ion-logo-twitter', classes.tw)} />
                      </IconButton>
                      <IconButton aria-label="Delete" className={classes.margin} size="small">
                        <i className={cx('ion-logo-linkedin', classes.in)} />
                      </IconButton>
                    </div>
                    <div className={classes.contact}>
                      <Typography className={text.paragraph}>
                        {t('blog_phone')}
                        <br />
                        +12 345 678 90
                      </Typography>
                      <Divider className={classes.divider} />
                      <Typography className={text.paragraph}>
                        {t('blog_subscribe')}
                        <br />
                        @jenadoe
                      </Typography>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Container>
          </div>
        </div>
      </Fade>
    </Fragment>
  );
}

Header.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
  invert: PropTypes.bool,
  menu: PropTypes.array.isRequired,
};

Header.defaultProps = {
  invert: false
};

export default Header;
