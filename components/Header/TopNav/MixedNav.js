import React, {
  useState,
  useRef,
  useEffect
} from 'react';
import { usePathname } from 'next/navigation';
import PropTypes from 'prop-types';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import ButtonBase from '@mui/material/ButtonBase';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import Scrollspy from 'react-scrollspy';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Icon from '@mui/material/Icon';
import { useTranslation } from 'next-i18next';
import link from 'public/text/link';
import imgAPI from 'public/images/imgAPI';
import LocaleLink from '../../Link';
import useStyles from '../header-style';

const LinkBtn = React.forwardRef(function LinkBtn(props, ref) { // eslint-disable-line
  return <AnchorLink to={props.to} {...props} />; // eslint-disable-line
});

function MixedNav(props) {
  const {
    menuPrimary, menuSecondary, open,
    toggle, close, singleNav,
    prefix,
  } = props;
  const pathname = usePathname();
  const { classes } = useStyles();
  const { t, i18n } = useTranslation('common');

  const [navArr, setNavArr] = useState([]);

  const anchorRef = useRef(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [curURL, setCurURL] = useState('');
  const [curOrigin, setCurOrigin] = useState('');
  const [langPath, setLangPath] = useState('');

  const handleToggle = (event) => {
    setAnchorEl(event.currentTarget);
    toggle();
  };

  useEffect(() => {
    setCurURL(window.location.href);
    setCurOrigin(window.location.origin);
    setLangPath('/' + i18n.language);

    menuPrimary.map(item => setNavArr(navArray => [...navArray, item.id]));

    // Close menu when route changes
    close();
  }, [pathname]);

  return (
    <Scrollspy
      className={classes.scrollactiveNav}
      items={navArr}
      currentClassName="active"
      offset={-30}
    >
      {menuPrimary.map(item => (
        <li key={item.id}>
          {singleNav ? (
            <Button component={LinkBtn} offset={() => 100} href={`#${item.id}`}>
              {t(`${prefix}.header_` + item.id)}
            </Button>
          ) : (
            <Button component={LocaleLink} to={`/#${item.id}`}>
              {t(`${prefix}.header_` + item.id)}
            </Button>
          )}
        </li>
      ))}
      {/* <li>
        <div>
          <Button
            onClick={(e) => handleToggle(e)}
            ref={anchorRef}
            endIcon={<Icon>expand_more</Icon>}
          >
            {t('header_sample_page')}
          </Button>
          <Popper
            open={open}
            anchorEl={anchorEl}
            disablePortal={false}
            role={undefined}
            transition
            className={classes.megaMenuRoot}
          >
            {({ TransitionProps, placement }) => (
              <Fade
                {...TransitionProps}
                style={{ width: '100%', transformOrigin: placement === 'bottom' ? 'left top' : 'left bottom' }}
              >
                <Paper className={classes.megaMenu}>
                  <ClickAwayListener onClickAway={close}>
                    <Container>
                      <Grid container spacing={4}>
                        <Grid item sm={5}>
                          <Box my={2} mx={1} className={classes.titleMega}>
                            Landing Page
                          </Box>
                          <Grid container spacing={1}>
                            <Grid item sm={4}>
                              <ButtonBase component={LocaleLink} to={link.home} className={classes.thumbLink}>
                                <figure className={classes.thumbMenu}>
                                  <img src={imgAPI.ui[6]} alt="thumbnail" />
                                </figure>
                                Machine Learning
                              </ButtonBase>
                              <ButtonBase component={LocaleLink} to={link.fintech} className={classes.thumbLink}>
                                <figure className={classes.thumbMenu}>
                                  <img src={imgAPI.ui[8]} alt="thumbnail" />
                                </figure>
                                AI Trading Bot
                              </ButtonBase>
                              <ButtonBase component={LocaleLink} to={link.nft} className={classes.thumbLink}>
                                <figure className={classes.thumbMenu}>
                                  <img src={imgAPI.ui[5]} alt="thumbnail" />
                                </figure>
                                NFT
                              </ButtonBase>
                            </Grid>
                            <Grid item sm={4}>
                              <ButtonBase component={LocaleLink} to={link.blockchain} className={classes.thumbLink}>
                                <figure className={classes.thumbMenu}>
                                  <img src={imgAPI.ui[7]} alt="thumbnail" />
                                </figure>
                                Blockchain
                              </ButtonBase>
                              <ButtonBase component={LocaleLink} to={link.avatar} className={classes.thumbLink}>
                                <figure className={classes.thumbMenu}>
                                  <img src={imgAPI.ui[10]} alt="thumbnail" />
                                </figure>
                                Avatar
                              </ButtonBase>
                              <ButtonBase component={LocaleLink} to={link.nft2} className={classes.thumbLink}>
                                <figure className={classes.thumbMenu}>
                                  <img src={imgAPI.ui[4]} alt="thumbnail" />
                                </figure>
                                NFT 2
                              </ButtonBase>
                            </Grid>
                            <Grid item sm={4}>
                              <ButtonBase component={LocaleLink} to={link.wallet} className={classes.thumbLink}>
                                <figure className={classes.thumbMenu}>
                                  <img src={imgAPI.ui[9]} alt="thumbnail" />
                                </figure>
                                Crypto Wallet
                              </ButtonBase>
                              <ButtonBase component={LocaleLink} to={link.cv} className={classes.thumbLink}>
                                <figure className={classes.thumbMenu}>
                                  <img src={imgAPI.ui[11]} alt="thumbnail" />
                                </figure>
                                Online CV
                              </ButtonBase>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item sm={7}>
                          <Grid container spacing={4}>
                            {menuSecondary.map((subitem, index) => (
                              <Grid item sm={3} key={index.toString()}>
                                <ListSubheader disableSticky component="div" className={classes.titleMega}>
                                  {t('header_' + subitem.name)}
                                </ListSubheader>
                                <figure className={classes.thumbMenu}>
                                  <img src={subitem.thumb} alt="thumbnail" />
                                </figure>
                                <List component="div" className={classes.multiMenu}>
                                  {subitem.child.map((item, subIndex) => (
                                    <ListItem
                                      key={subIndex.toString()}
                                      button
                                      component={LocaleLink}
                                      to={item.link}
                                      selected={curURL === (curOrigin + langPath + item.link + '/')}
                                    >
                                      <ListItemText
                                        primary={t('header_' + item.name)}
                                        classes={{
                                          primary: classes.menuList
                                        }}
                                      />
                                    </ListItem>
                                  ))}
                                </List>
                              </Grid>
                            ))}
                          </Grid>
                        </Grid>
                      </Grid>
                    </Container>
                  </ClickAwayListener>
                </Paper>
              </Fade>
            )}
          </Popper>
        </div>
      </li> */}
    </Scrollspy>
  );
}

MixedNav.propTypes = {
  menuPrimary: PropTypes.array.isRequired,
  menuSecondary: PropTypes.array.isRequired,
  close: PropTypes.func.isRequired,
  toggle: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  singleNav: PropTypes.bool,
  prefix: PropTypes.string.isRequired,
};

MixedNav.defaultProps = {
  singleNav: false
};

export default MixedNav;
