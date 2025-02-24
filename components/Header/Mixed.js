import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import link from 'public/text/link';
import Logo from '../Branding/Logo';
import MobileMenu from './SideNav/MixedMobile';
import HeaderMenu from './TopNav/MixedNav';
import Settings from './TopNav/Settings';
import useStyles from './header-style';
import samplePages from './data/sample-pages';
import LocaleLink from '../Link';
import UserMenu from './UserMenu';

function Mixed(props) {
  const [fixed, setFixed] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const { classes, cx } = useStyles();
  const theme = useTheme();
  const {
    onToggleDark, onToggleDir,
    menu, home, prefix
  } = props;
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  let flagFixed = false;

  const handleScroll = () => {
    const doc = document.documentElement;
    const scroll = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    const newFlagFixed = (scroll > 80);
    if (flagFixed !== newFlagFixed) {
      setFixed(newFlagFixed);
      flagFixed = newFlagFixed;
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  const handleOpenDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  const handleToggle = () => {
    setOpenMenu((prevOpen) => !prevOpen);
  };

  const handleClose = () => {
    setOpenMenu(false);
  };

  return (
    <Fragment>
      {isMobile && (
        <MobileMenu
          open={openDrawer}
          menuPrimary={menu}
          toggleDrawer={handleOpenDrawer}
          prefix={prefix}
          singleNav={home}
        />
      )}
      <AppBar
        position="relative"
        id="header"
        className={cx(
          classes.header,
          openMenu && classes.noShadow,
          fixed && classes.fixed,
          openDrawer && classes.openDrawer
        )}
      >
        <Container fixed={isDesktop}>
          <div className={classes.headerContent}>
            <nav className={classes.navMenu}>
              <div className={classes.logo}>
                <LocaleLink to={link.home}>
                  <Logo type="landscape" />
                </LocaleLink>
              </div>
              {isDesktop && (
                <div className={classes.mainMenu}>
                  <HeaderMenu
                    open={openMenu}
                    menuPrimary={menu}
                    menuSecondary={samplePages}
                    toggle={handleToggle}
                    close={handleClose}
                    singleNav={home}
                    prefix={prefix}
                  />
                </div>
              )}
            </nav>
            <div className={classes.userMenu}>
              <UserMenu />
              {isDesktop && <span className={classes.vDivider} />}
              <Settings toggleDark={onToggleDark} toggleDir={onToggleDir} />
            </div>
            {isMobile && (
              <IconButton
                onClick={handleOpenDrawer}
                className={cx('hamburger hamburger--spin', classes.mobileMenu, openDrawer && 'is-active')}
                size="large"
              >
                <span className="hamburger-box">
                  <span className={cx(classes.bar, 'hamburger-inner')} />
                </span>
              </IconButton>
            )}
          </div>
        </Container>
      </AppBar>
    </Fragment>
  );
}

Mixed.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
  prefix: PropTypes.string.isRequired,
  menu: PropTypes.array.isRequired,
  home: PropTypes.bool
};

Mixed.defaultProps = {
  home: false
};

export default Mixed;
