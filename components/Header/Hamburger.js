import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Fade from '@mui/material/Fade';
import { useTranslation } from 'next-i18next';
import routeLink from 'public/text/link';
import LocaleLink from '../Link';
import Logo from '../Branding/Logo';
import useStyles from './header-style';
import UserMenu from './TopNav/UserMenu';

const LinkBtn = React.forwardRef(function LinkBtn(props, ref) { // eslint-disable-line
  return <AnchorLink to={props.to} {...props} />; // eslint-disable-line
});

function Hamburger(props) {
  const { t } = useTranslation('common');

  const [fixed, setFixed] = useState(false);
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

  const { classes, cx } = useStyles();
  const {
    onToggleDark,
    onToggleDir,
    home,
    menu,
    prefix
  } = props;
  const [openDrawer, setOpenDrawer] = useState(false);
  const handleOpenDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  const handleCloseDrawer = () => {
    setOpenDrawer(false);
  };

  return (
    <Fragment>
      <AppBar
        component="div"
        position="relative"
        id="header"
        className={cx(
          classes.header,
          fixed ? classes.fixed : '',
          openDrawer && classes.openDrawer
        )}
      >
        <Container>
          <div className={classes.headerContent}>
            <nav className={cx(classes.navLogo, home && classes.invert)}>
              <div className={cx(classes.logo, classes.flex)}>
                {home ? (
                  <LinkBtn href="#home">
                    <Logo type="landscape" />
                  </LinkBtn>
                ) : (
                  <LocaleLink to={routeLink.home}>
                    <Logo type="only" />
                  </LocaleLink>
                )}
              </div>
              <UserMenu onToggleDark={onToggleDark} onToggleDir={onToggleDir} />
              <IconButton
                onClick={handleOpenDrawer}
                className={cx('hamburger hamburger--squeeze', classes.mobileMenu, openDrawer && 'is-active')}
                size="large"
              >
                <span className="hamburger-box">
                  <span className={cx(classes.bar, 'hamburger-inner')} />
                </span>
              </IconButton>
            </nav>
          </div>
        </Container>
      </AppBar>
      <Fade in={openDrawer}>
        <div className={cx(classes.paperNav, openDrawer && classes.show)}>
          <div className={classes.mobileNav}>
            {openDrawer && (
              <ul className={classes.menu}>
                {menu.map((item, index) => (
                  <li key={item.id.toString()} style={{ animationDuration: index * 0.15 + 's' }}>
                    {home ? (
                      // eslint-disable-next-line
                      <Button component={LinkBtn} onClick={handleCloseDrawer} offset={item.offset || 0} href={`#${item.id}`}>
                        {t(`${prefix}.header_` + item.name)}
                      </Button>
                    ) : (
                      // eslint-disable-next-line
                      <Button component={LocaleLink} to={`/#${item.id}`}>
                        {t(`${prefix}.header_` + item.name)}
                      </Button>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </Fade>
    </Fragment>
  );
}

Hamburger.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
  home: PropTypes.bool,
  menu: PropTypes.array.isRequired,
  prefix: PropTypes.string.isRequired,
};

Hamburger.defaultProps = {
  home: false
};

export default Hamburger;
