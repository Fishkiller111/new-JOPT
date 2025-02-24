import React, {
  useState,
  useEffect,
  Fragment
} from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Hidden from '@mui/material/Hidden';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import link from 'public/text/link';
import Logo from '../Branding/Logo';
import SearchField from './TopNav/SearchField';
import Settings from './TopNav/Settings';
import useStyles from './header-style';
import blogMenu from './data/blog';
import MultiLevel from './TopNav/MultiLevelClick';
import MobileMenu from './SideNav/MultiMobile';
import LocaleLink from '../Link';

function BlogHeader(props) {
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
  const theme = useTheme();
  const { onToggleDark, onToggleDir } = props;
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  const [openDrawer, setOpenDrawer] = useState(false);
  const handleOpenDrawer = () => {
    setOpenDrawer(!openDrawer);
  };
  return (
    <Fragment>
      { isMobile && (<MobileMenu open={openDrawer} toggleDrawer={handleOpenDrawer} />) }
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
                  <MultiLevel dataMenu={blogMenu} />
                </div>
              )}
            </nav>
            <nav>
              <Hidden smDown>
                <SearchField short />
              </Hidden>
              { isDesktop && <span className={classes.vDivider} /> }
              <Settings toggleDark={onToggleDark} toggleDir={onToggleDir} />
            </nav>
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
          <Hidden smUp>
            <SearchField />
          </Hidden>
        </Container>
      </AppBar>
    </Fragment>
  );
}

BlogHeader.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired
};

export default BlogHeader;
