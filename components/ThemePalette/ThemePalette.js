import React, { useState, Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import Tooltip from '@mui/material/Tooltip';
import Hidden from '@mui/material/Hidden';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import AppBar from '@mui/material/AppBar';
import PaletteIcon from '@mui/icons-material/PaletteOutlined';
import PageIcon from '@mui/icons-material/LibraryBooksOutlined';
import WebIcon from '@mui/icons-material/Web';
import BackIcon from '@mui/icons-material/ArrowBack';
import Switch from '@mui/material/Switch';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useTextAlign } from 'theme/common';
import imgAPI from 'public/images/imgAPI';
import link from 'public/text/link';
import themeList from 'theme/palette';
import { Context } from './Store';
import useStyles from './palette-style';

const colorList = [
  'cyber', // Purple
  'cartoon',
  'future',
  'violeta',
  'coinz',
  'rose', // Red
  'vampire',
  'emperor',
  'sunrise', // Blue
  'cloud',
  'smart',
  'fresh',
  'mint',
  'queen',
  'oceanBlue',
  'deepBlue',
  'leaf', // Green
  'money',
  'botani',
  'sport',
  'kingdom', // Other
  'vintage',
  'brown',
  'cake',
];
function TabPanel(props) {
  const {
    children,
    value,
    index,
    ...other
  } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node.isRequired,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function ThemePalette(props) {
  const { classes: align } = useTextAlign();

  const [state, dispatch] = useContext(Context);

  const {
    changeColor,
    changeMode,
    changeDir,
    selectedColor,
    isDark,
    isRtl
  } = props;
  const { classes, cx } = useStyles();

  const [openDrawer, setOpenDrawer] = useState(false);
  const [tab, setTab] = useState(0);

  const defaultDir = isRtl === 'rtl';
  const defaultMode = isDark === 'dark';

  const [checkedDark, setCheckedDark] = useState(defaultMode);
  const [checkedRtl, setCheckedRtl] = useState(defaultDir);

  const handleToggleOpen = () => {
    setOpenDrawer(!openDrawer);
  };

  const handleToggleOpenTheme = () => {
    setOpenDrawer(!openDrawer);
    setTab(0);
  };

  const handleToggleOpenLayout = () => {
    setOpenDrawer(!openDrawer);
    setTab(1);
  };

  const handleToggleOpenExplore = () => {
    setOpenDrawer(!openDrawer);
    setTab(2);
  };

  const handleChangeTab = (event, selectedTab) => {
    setTab(selectedTab);
  };

  const handleClose = () => {
    setOpenDrawer(false);
  };

  const handleCheckMode = () => {
    setCheckedDark(!checkedDark);
    changeMode();
  };

  const handleCheckRtl = () => {
    setCheckedRtl(!checkedRtl);
    changeDir(checkedRtl ? 'ltr' : 'rtl');
  };

  return (
    <Fragment>
      <SwipeableDrawer
        anchor="right"
        open={openDrawer}
        onClose={handleClose}
        onOpen={handleToggleOpen}
        classes={{
          paper: classes.draweBg
        }}
      >
        <div className={classes.optWrap}>
          <AppBar position="absolute" color="default" classes={{ root: classes.appbar }}>
            <Hidden smUp>
              <IconButton onClick={handleClose}>
                <BackIcon />
              </IconButton>
            </Hidden>
            <Tabs value={tab} centered className={classes.tabs} onChange={handleChangeTab}>
              <Tab label="Color" icon={<PaletteIcon />} classes={{ wrapper: classes.wrapper, root: classes.tabBtn }} />
              <Tab label="Layout" icon={<WebIcon />} classes={{ wrapper: classes.wrapper, root: classes.tabBtn }} />
              <Tab label="Pages" icon={<PageIcon />} classes={{ wrapper: classes.wrapper, root: classes.tabBtn }} />
            </Tabs>
          </AppBar>
          <TabPanel value={tab} index={0}>
            <div className={classes.themeSwitched}>
              <Paper className={classes.paper}>
                <Grid container>
                  <Grid item sm={6} xs={12} className={classes.marginBottom}>
                    <Typography variant="h6">Theme Mode</Typography>
                    <Grid container>
                      <Grid item>
                        <Typography variant="button" component="label">Light</Typography>
                      </Grid>
                      <Grid item>
                        <Switch
                          checked={checkedDark}
                          onChange={handleCheckMode}
                          value={checkedDark}
                          inputProps={{ 'aria-label': 'checkbox' }}
                          classes={{
                            thumb: classes.thumbSwitch,
                            track: classes.trackSwitch
                          }}
                        />
                      </Grid>
                      <Grid item>
                        <Typography variant="button" component="label">Dark</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item sm={6} xs={12}>
                    <Typography variant="h6">Layout Direction</Typography>
                    <Grid container>
                      <Grid item>
                        <Typography variant="button" component="label">LTR</Typography>
                      </Grid>
                      <Grid item>
                        <Switch
                          checked={checkedRtl}
                          onChange={handleCheckRtl}
                          value={checkedRtl}
                          inputProps={{ 'aria-label': 'checkbox' }}
                          classes={{
                            thumb: classes.thumbSwitch,
                            track: classes.trackSwitch
                          }}
                        />
                      </Grid>
                      <Grid item>
                        <Typography variant="button" component="label">RTL</Typography>
                        <Typography variant="caption" component="p"><i>Best view in arabic</i></Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </div>
            <div className={classes.themeColor}>
              <Paper className={classes.paper}>
                <Typography variant="h6">Color Combinations</Typography>
                <Grid container spacing={3}>
                  {colorList.map((clr, index) => (
                    <Grid key={index.toString()} className={align.textCenter} item sm={3} xs={6}>
                      <Tooltip classes={{ popper: classes.tooltip }} title={clr} placement="top">
                        <Button fullWidth className={cx(classes.swatch, selectedColor === clr && classes.active)} onClick={() => changeColor(clr)}>
                          <span
                            className={classes.primary}
                            style={{
                              background: themeList(clr, 'dark').palette.primary.main,
                            }}
                          >
                            &nbsp;
                          </span>
                          <span
                            className={classes.secondary}
                            style={{
                              backgroundImage: `linear-gradient(228deg, ${themeList(clr, 'dark').palette.secondary.main} 20%, transparent 100%)`
                            }}
                          >
                            &nbsp;
                          </span>
                          <span
                            className={classes.accent}
                            style={{
                              backgroundImage: `linear-gradient(140deg, ${themeList(clr, 'dark').palette.accent.main} 20%, transparent 90%)`
                            }}
                          >
                            &nbsp;
                          </span>
                        </Button>
                      </Tooltip>
                    </Grid>
                  ))}
                </Grid>
              </Paper>
            </div>
          </TabPanel>
          <TabPanel value={tab} index={1}>
            <div className={classes.themeSwitched}>
              <Paper className={classes.paper}>
                <Typography variant="h6">Header Layout</Typography>
                <Grid container spacing={3}>
                  <Grid item xs={6}>
                    <Box mb={8}>
                      <ButtonBase
                        onClick={() => dispatch({ type: 'set_header', payload: 'mixed' })}
                        className={cx(state.header === 'mixed' ? classes.active : '', classes.lyBtn)}
                      >
                        <img src={imgAPI.ui[35]} alt="default" />
                        Mixed
                      </ButtonBase>
                    </Box>
                    <Box mb={8}>
                      <ButtonBase
                        onClick={() => dispatch({ type: 'set_header', payload: 'basic' })}
                        className={cx(state.header === 'basic' ? classes.active : '', classes.lyBtn)}
                      >
                        <img src={imgAPI.ui[33]} alt="basic" />
                        Basic
                      </ButtonBase>
                    </Box>
                    <Box mb={8}>
                      <ButtonBase
                        onClick={() => dispatch({ type: 'set_header', payload: 'search' })}
                        className={cx(state.header === 'search' ? classes.active : '', classes.lyBtn)}
                      >
                        <img src={imgAPI.ui[38]} alt="search" />
                        Search
                      </ButtonBase>
                    </Box>
                    <Box mb={8}>
                      <ButtonBase
                        onClick={() => dispatch({ type: 'set_header', payload: 'navscroll' })}
                        className={cx(state.header === 'navscroll' ? classes.active : '', classes.lyBtn)}
                      >
                        <img src={imgAPI.ui[34]} alt="navscroll" />
                        Scroll Nav
                      </ButtonBase>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box mb={8}>
                      <ButtonBase
                        onClick={() => dispatch({ type: 'set_header', payload: 'droplist' })}
                        className={cx(state.header === 'droplist' ? classes.active : '', classes.lyBtn)}
                      >
                        <img src={imgAPI.ui[37]} alt="droplist" />
                        Dropdown List
                      </ButtonBase>
                    </Box>
                    <Box mb={8}>
                      <ButtonBase
                        onClick={() => dispatch({ type: 'set_header', payload: 'mega' })}
                        className={cx(state.header === 'mega' ? classes.active : '', classes.lyBtn)}
                      >
                        <img src={imgAPI.ui[36]} alt="mega menu" />
                        Mega Menu
                      </ButtonBase>
                    </Box>
                    <Box mb={8}>
                      <ButtonBase
                        onClick={() => dispatch({ type: 'set_header', payload: 'hamburger' })}
                        className={cx(state.header === 'hamburger' ? classes.active : '', classes.lyBtn)}
                      >
                        <img src={imgAPI.ui[39]} alt="hamburger" />
                        Hamburger
                      </ButtonBase>
                    </Box>
                  </Grid>
                </Grid>
              </Paper>
            </div>
            <div className={classes.themeSwitched}>
              <Paper className={classes.paper}>
                <Typography variant="h6">Footer Layout</Typography>
                <Grid container spacing={3}>
                  <Grid item xs={6}>
                    <Box mb={8}>
                      <ButtonBase
                        onClick={() => dispatch({ type: 'set_footer', payload: 'sitemap' })}
                        className={cx(state.footer === 'sitemap' ? classes.active : '', classes.lyBtn)}
                      >
                        <img src={imgAPI.ui[41]} alt="sitemap" />
                        Sitemap
                      </ButtonBase>
                    </Box>
                    <Box mb={8}>
                      <ButtonBase
                        onClick={() => dispatch({ type: 'set_footer', payload: 'basic' })}
                        className={cx(state.footer === 'basic' ? classes.active : '', classes.lyBtn)}
                      >
                        <img src={imgAPI.ui[40]} alt="basic" />
                        Basic
                      </ButtonBase>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box mb={8}>
                      <ButtonBase
                        onClick={() => dispatch({ type: 'set_footer', payload: 'blog' })}
                        className={cx(state.footer === 'blog' ? classes.active : '', classes.lyBtn)}
                      >
                        <img src={imgAPI.ui[42]} alt="blog" />
                        Blog
                      </ButtonBase>
                    </Box>
                  </Grid>
                </Grid>
              </Paper>
            </div>
            <div className={classes.themeSwitched}>
              <Paper className={classes.paper}>
                <Typography variant="h6">Bottom Corner</Typography>
                <Grid container spacing={3}>
                  <Grid item sm={4} xs={6}>
                    <ButtonBase
                      onClick={() => dispatch({ type: 'set_corner', payload: 'chat' })}
                      className={cx(state.corner === 'chat' ? classes.active : '', classes.lyBtn)}
                    >
                      <img src={imgAPI.ui[43]} alt="chat" />
                      Chat Panel
                    </ButtonBase>
                  </Grid>
                  <Grid item sm={4} xs={6}>
                    <ButtonBase
                      onClick={() => dispatch({ type: 'set_corner', payload: 'nav' })}
                      className={cx(state.corner === 'nav' ? classes.active : '', classes.lyBtn)}
                    >
                      <img src={imgAPI.ui[44]} alt="nav" />
                      Page Navigation
                    </ButtonBase>
                  </Grid>
                </Grid>
              </Paper>
            </div>
          </TabPanel>
          <TabPanel value={tab} index={2}>
            <div className={classes.explore}>
              <Typography variant="h6" className={align.textCenter} sx={{ mb: 3 }}>LANDING PAGE</Typography>
              <ul>
                <li>
                  <a href={link.home}>
                    <figure>
                      <img src={imgAPI.ui[6]} alt="ai" />
                    </figure>
                    Machine Learning
                  </a>
                </li>
                <li>
                  <a href={link.blockchain}>
                    <figure>
                      <img src={imgAPI.ui[7]} alt="blockchain" />
                    </figure>
                    Blockchain
                  </a>
                </li>
                <li>
                  <a href={link.wallet}>
                    <figure>
                      <img src={imgAPI.ui[9]} alt="wallet" />
                    </figure>
                    Crypto Wallet
                  </a>
                </li>
                <li>
                  <a href={link.fintech}>
                    <figure>
                      <img src={imgAPI.ui[8]} alt="fintech" />
                    </figure>
                    AI Trading Bot
                  </a>
                </li>
                <li>
                  <a href={link.avatar}>
                    <figure>
                      <img src={imgAPI.ui[10]} alt="avatar" />
                    </figure>
                    Avatar
                  </a>
                </li>
                <li>
                  <a href={link.cv}>
                    <figure>
                      <img src={imgAPI.ui[11]} alt="online cv" />
                    </figure>
                    Online CV
                  </a>
                </li>
                <li>
                  <a href={link.nft}>
                    <figure>
                      <img src={imgAPI.ui[5]} alt="nft" />
                    </figure>
                    NFT
                  </a>
                </li>
                <li>
                  <a href={link.nft2}>
                    <figure>
                      <img src={imgAPI.ui[4]} alt="nft2" />
                    </figure>
                    NFT 2
                  </a>
                </li>
              </ul>
              <Typography variant="h6" className={align.textCenter} sx={{ mb: 3 }}>COMPANY</Typography>
              <ul>
                <li>
                  <a href={link.about}>
                    <figure>
                      <img src={imgAPI.ui[12]} alt="company" />
                    </figure>
                    About
                  </a>
                </li>
                <li>
                  <a href={link.career}>
                    <figure>
                      <img src={imgAPI.ui[13]} alt="company" />
                    </figure>
                    Career
                  </a>
                </li>
                <li>
                  <a href={link.team}>
                    <figure>
                      <img src={imgAPI.ui[14]} alt="company" />
                    </figure>
                    Team
                  </a>
                </li>
                <li>
                  <a href={link.profile}>
                    <figure>
                      <img src={imgAPI.ui[15]} alt="company" />
                    </figure>
                    Profile
                  </a>
                </li>
                <li>
                  <a href={link.blog}>
                    <figure>
                      <img src={imgAPI.ui[16]} alt="company" />
                    </figure>
                    Blog List
                  </a>
                </li>
                <li>
                  <a href={link.blogGrid}>
                    <figure>
                      <img src={imgAPI.ui[17]} alt="company" />
                    </figure>
                    Blog Grid
                  </a>
                </li>
                <li>
                  <a href={link.blogDetail}>
                    <figure>
                      <img src={imgAPI.ui[18]} alt="company" />
                    </figure>
                    Blog Detail
                  </a>
                </li>
              </ul>
              <Typography variant="h6" className={align.textCenter} sx={{ mb: 3 }}>FORMS</Typography>
              <ul>
                <li>
                  <a href={link.login}>
                    <figure>
                      <img src={imgAPI.ui[19]} alt="forms" />
                    </figure>
                    Login
                  </a>
                </li>
                <li>
                  <a href={link.register}>
                    <figure>
                      <img src={imgAPI.ui[20]} alt="forms" />
                    </figure>
                    Register
                  </a>
                </li>
                <li>
                  <a href={link.contact}>
                    <figure>
                      <img src={imgAPI.ui[21]} alt="forms" />
                    </figure>
                    Contact
                  </a>
                </li>
              </ul>
              <Typography variant="h6" className={align.textCenter} sx={{ mb: 3 }}>COLLECTION</Typography>
              <ul>
                <li>
                  <a href={link.product}>
                    <figure>
                      <img src={imgAPI.ui[22]} alt="collection" />
                    </figure>
                    Product NFTs
                  </a>
                </li>
                <li>
                  <a href={link.productDetail}>
                    <figure>
                      <img src={imgAPI.ui[23]} alt="collection" />
                    </figure>
                    Product Detail NFT
                  </a>
                </li>
                <li>
                  <a href={link.services}>
                    <figure>
                      <img src={imgAPI.ui[24]} alt="collection" />
                    </figure>
                    Services
                  </a>
                </li>
                <li>
                  <a href={link.serviceDetail}>
                    <figure>
                      <img src={imgAPI.ui[25]} alt="collection" />
                    </figure>
                    Services Detail
                  </a>
                </li>
                <li>
                  <a href={link.portfolio}>
                    <figure>
                      <img src={imgAPI.ui[26]} alt="collection" />
                    </figure>
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href={link.portfolioDetail}>
                    <figure>
                      <img src={imgAPI.ui[27]} alt="collection" />
                    </figure>
                    Portfolio Detail
                  </a>
                </li>
              </ul>
              <Typography variant="h6" className={align.textCenter} sx={{ mb: 3 }}>UTILITIES</Typography>
              <ul>
                <li>
                  <a href={link.pricing}>
                    <figure>
                      <img src={imgAPI.ui[28]} alt="utilities" />
                    </figure>
                    Pricing
                  </a>
                </li>
                <li>
                  <a href={link.faq}>
                    <figure>
                      <img src={imgAPI.ui[29]} alt="utilities" />
                    </figure>
                    FAQ
                  </a>
                </li>
                <li>
                  <a href={link.maintenance}>
                    <figure>
                      <img src={imgAPI.ui[30]} alt="utilities" />
                    </figure>
                    Maintenance
                  </a>
                </li>
                <li>
                  <a href={link.comingSoon}>
                    <figure>
                      <img src={imgAPI.ui[31]} alt="utilities" />
                    </figure>
                    Coming Soon
                  </a>
                </li>
                <li>
                  <a href="/error">
                    <figure>
                      <img src={imgAPI.ui[32]} alt="utilities" />
                    </figure>
                    Error
                  </a>
                </li>
              </ul>
            </div>
          </TabPanel>
        </div>
      </SwipeableDrawer>
      <div className={cx(classes.btn, openDrawer && classes.active)}>
        <IconButton onClick={handleToggleOpenTheme}>
          <PaletteIcon />
        </IconButton>
        <IconButton onClick={handleToggleOpenLayout}>
          <WebIcon />
        </IconButton>
        <IconButton onClick={handleToggleOpenExplore}>
          <PageIcon />
        </IconButton>
      </div>
    </Fragment>
  );
}

ThemePalette.propTypes = {
  changeColor: PropTypes.func.isRequired,
  changeMode: PropTypes.func.isRequired,
  changeDir: PropTypes.func.isRequired,
  selectedColor: PropTypes.string.isRequired,
  isDark: PropTypes.string.isRequired,
  isRtl: PropTypes.string.isRequired
};

export default ThemePalette;
