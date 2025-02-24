import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import link from 'public/text/link';
import Logo from '../Branding/Logo';
import MobileMenu from './SideNav/SingleNavMobile';
import HeaderMenu from './TopNav/SingleNav';
import UserMenu from './TopNav/UserMenu';
import useStyles from './header-style';
import LocaleLink from '../Link';

function NavScroll(props) {
  const [fixed, setFixed] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
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

  return (
    <Fragment>
      {isMobile && (
        <MobileMenu
          menu={menu}
          open={openDrawer}
          toggleDrawer={handleOpenDrawer}
          singleNav={home}
        />
      )}
      <AppBar
        position="relative"
        id="header"
        className={cx(
          classes.header,
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
                    menu={menu}
                    singleNav={home}
                    prefix={prefix}
                  />
                </div>
              )}
            </nav>
            <UserMenu onToggleDark={onToggleDark} onToggleDir={onToggleDir} />
            { isMobile && (
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

NavScroll.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
  prefix: PropTypes.string.isRequired,
  menu: PropTypes.array.isRequired,
  home: PropTypes.bool
};

NavScroll.defaultProps = {
  home: false
};

export default NavScroll;
