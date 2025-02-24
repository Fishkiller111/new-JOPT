import React, { Fragment, useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Chip from '@mui/material/Chip';
import CloseIcon from '@mui/icons-material/Close';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Zoom from '@mui/material/Zoom';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Carousel from 'react-slick';
import { useTranslation } from 'next-i18next';
import imgAPI from 'public/images/imgAPI';
import { useText, useTextGradient } from 'theme/common';
import ProductNftCard from '../../Cards/Product/NftCard';
import useStyles from './slider-style';

const nftList = [
  {
    img: imgAPI.photosL[46],
    avatar: imgAPI.logos[13],
    name: 'John Doe',
    title: 'Lorem Ipsum Dolor',
    price: '0.5',
    href: '#',
    verified: true,
  },
  {
    img: imgAPI.photosS[8],
    avatar: imgAPI.logos[1],
    name: 'John Doe',
    title: 'Lorem Ipsum Dolor',
    price: '0.5',
    href: '#',
    verified: true,
  },
  {
    img: imgAPI.photosS[7],
    avatar: imgAPI.logos[2],
    name: 'John Doe',
    title: 'Lorem Ipsum Dolor',
    price: '0.5',
    href: '#',
    verified: true,
  },
  {
    img: imgAPI.photosL[50],
    avatar: imgAPI.avatar[13],
    name: 'John Doe',
    title: 'Lorem Ipsum Dolor',
    price: '0.5',
    href: '#',
    verified: true,
  },
  {
    img: imgAPI.photosP[27],
    avatar: imgAPI.avatar[1],
    name: 'John Doe',
    title: 'Lorem Ipsum Dolor',
    price: '0.5',
    href: '#',
    verified: true,
  },
  {
    img: imgAPI.photosP[26],
    avatar: imgAPI.avatar[8],
    name: 'John Doe',
    title: 'Lorem Ipsum Dolor',
    price: '0.5',
    href: '#',
    verified: true,
  },
  {
    img: imgAPI.photosL[26],
    avatar: imgAPI.avatar[8],
    name: 'John Doe',
    title: 'Lorem Ipsum Dolor',
    price: '0.5',
    href: '#',
    verified: true,
  },
  {
    img: imgAPI.photosS[1],
    avatar: imgAPI.avatar[8],
    name: 'John Doe',
    title: 'Lorem Ipsum Dolor',
    price: '0.5',
    href: '#',
    verified: true,
  }
];

const Transition = React.forwardRef(function Transition(props, ref) { // eslint-disable-line
  return <Zoom ref={ref} {...props} />;
});

function BannerSlider() {
  const [loaded, setLoaded] = useState(false);
  const isTablet = useMediaQuery(theme => theme.breakpoints.between('sm', 'md'));
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('sm'));

  // Theme breakpoints
  const theme = useTheme();

  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  const { classes: gradient } = useTextGradient();

  const [openPopup, setOpenPopup] = useState(false);
  const [values, setValue] = useState({
    query: '',
  });

  const handleClickOpen = () => {
    setOpenPopup(true);
  };

  const handleClose = () => {
    setOpenPopup(false);
  };

  const { t } = useTranslation('common');

  const slickOptionsFade = {
    dots: false,
    arrows: false,
    speed: 500,
    infinite: true,
    autoplay: true,
    fade: true,
    cssEase: 'ease-out',
  };

  const handleChange = (event, type) => {
    setValue({ ...values, [type]: event.target.value });
  };

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <Fragment>
      <Dialog
        open={openPopup}
        TransitionComponent={Transition}
        keepMounted
        classes={{ paper: classes.connectPopup }}
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>
          Connect your wallet
          <IconButton onClick={handleClose} className={classes.closeBtn} size="large">
            <CloseIcon className={classes.icon} />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ p: 2 }}>
          <p>If you don&apos;t have a wallet, you can select a provider and create one now.</p>
          <List component="nav" aria-label="main mailbox folders">
            <ListItemButton className={classes.walletList}>
              <ListItemIcon>
                <img src={imgAPI.logos[1]} alt="wallet logo" />
              </ListItemIcon>
              <ListItemText primary="Wallet Lorem" />
              <Chip label="Most Popular" variant="outlined" />
            </ListItemButton>
            <Divider />
            <ListItemButton className={classes.walletList}>
              <ListItemIcon>
                <img src={imgAPI.logos[2]} alt="wallet logo" />
              </ListItemIcon>
              <ListItemText primary="Wallet Ipsum" />
            </ListItemButton>
            <Divider />
            <ListItemButton className={classes.walletList}>
              <ListItemIcon>
                <img src={imgAPI.logos[3]} alt="wallet logo" />
              </ListItemIcon>
              <ListItemText primary="Wallet Dolot" />
            </ListItemButton>
            <Divider />
            <ListItemButton className={classes.walletList}>
              <ListItemIcon>
                <img src={imgAPI.logos[11]} alt="wallet logo" />
              </ListItemIcon>
              <ListItemText primary="Wallet Sit Amet" />
            </ListItemButton>
            <Divider />
            <ListItemButton className={classes.walletList}>
              <ListItemIcon>
                <img src={imgAPI.logos[12]} alt="wallet logo" />
              </ListItemIcon>
              <ListItemText primary="Wallet Lorem" />
            </ListItemButton>
            <Divider />
            <ListItemButton className={classes.walletList}>
              <ListItemIcon>
                <img src={imgAPI.logos[21]} alt="wallet logo" />
              </ListItemIcon>
              <ListItemText primary="Wallet Ipsum" />
            </ListItemButton>
            <Divider />
            <ListItemButton className={classes.walletList}>
              <ListItemIcon>
                <img src={imgAPI.logos[23]} alt="wallet logo" />
              </ListItemIcon>
              <ListItemText primary="Wallet Dolot" />
            </ListItemButton>
            <Divider />
            <ListItemButton className={classes.walletList}>
              <ListItemIcon>
                <img src={imgAPI.logos[9]} alt="wallet logo" />
              </ListItemIcon>
              <ListItemText primary="Wallet Sit Amet" />
            </ListItemButton>
          </List>
        </DialogContent>
      </Dialog>
      <div className={classes.bannerWrap}>
        <div className={classes.inner}>
          <Container>
            <Grid container spacing={6}>
              <Grid item lg={6} xs={12}>
                <Box px={{ sm: 3 }}>
                  <div className={classes.text}>
                    <h4 className={text.title}>
                      {t('nft.banner_title')}
                      <span className={cx(theme.palette.mode === 'dark' ? gradient.tripleMain : gradient.tripleMain, text.uppercase)}>
                        &nbsp;
                        {t('nft.banner_highlight')}
                      </span>
                    </h4>
                    <h5 className={text.subtitle}>
                      {t('nft.banner_desc')}
                    </h5>
                    <Paper className={classes.searchBanner}>
                      <TextField
                        variant="standard"
                        className={classes.search}
                        label={isMobile ? 'Search...' : 'Search items, art or creator...'}
                        onChange={(e) => handleChange(e, 'query')}
                      />
                      <div className={classes.action}>
                        <Button className={classes.button} variant="contained" color="secondary" size="small">
                          {isMobile && <SearchIcon className={classes.icon} />}
                          {!isMobile && t('header_search')}
                        </Button>
                      </div>
                    </Paper>
                    <div className={classes.connect}>
                      <h5>
                        <hr />
                        Connect to your wallet
                        <hr />
                      </h5>
                      <ul>
                        <li>
                          <Button size="small" className={classes.btn}>
                            <img src={imgAPI.logos[1]} alt="wallet logo" />
                            &nbsp;Wallet Lorem
                          </Button>
                        </li>
                        <li>
                          <Button size="small" className={classes.btn}>
                            <img src={imgAPI.logos[2]} alt="wallet logo" />
                            &nbsp;Wallet Ipsum
                          </Button>
                        </li>
                        <li>
                          <Button size="small" className={classes.btn}>
                            <img src={imgAPI.logos[3]} alt="wallet logo" />
                            &nbsp;Wallet Dolor
                          </Button>
                        </li>
                        <li>
                          <Button size="small" className={classes.btn}>
                            <img src={imgAPI.logos[11]} alt="wallet logo" />
                            &nbsp;Wallet Sit Amet
                          </Button>
                        </li>
                        <li>
                          <Button
                            size="small"
                            sx={{ mt: 2 }}
                            variant="outlined"
                            color="primary"
                            onClick={handleClickOpen}
                          >
                            Show All Wallet
                          </Button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Box>
              </Grid>
              <Grid item lg={6} xs={12}>
                {loaded && (
                  <div className={classes.artWrap}>
                    <div className={classes.artScene}>
                      <Box mt={{ lg: 5 }} className={classes.fadeSlider}>
                        <span className={classes.decoLine} />
                        <div className={classes.carousel}>
                          <Carousel autoplaySpeed={5000} {...slickOptionsFade}>
                            {nftList.sort(() => Math.random() - 0.5).map((item, index) => (
                              <div key={index.toString()} className={classes.cardMain}>
                                <ProductNftCard
                                  img={item.img}
                                  avatar={item.avatar}
                                  name={item.name}
                                  title={item.title}
                                  price={item.price}
                                  href={item.href}
                                  verified={item.verified}
                                  small
                                />
                              </div>
                            ))}
                          </Carousel>
                        </div>
                      </Box>
                      {!isTablet && (
                        <div className={classes.fadeSlider}>
                          <span className={classes.decoLine} />
                          <div className={classes.carousel}>
                            <Carousel autoplaySpeed={6000} {...slickOptionsFade}>
                              {nftList.sort(() => Math.random() - 0.5).map((item, index) => (
                                <div key={index.toString()} className={classes.cardMain}>
                                  <ProductNftCard
                                    img={item.img}
                                    avatar={item.avatar}
                                    name={item.name}
                                    title={item.title}
                                    price={item.price}
                                    href={item.href}
                                    verified={item.verified}
                                    small
                                  />
                                </div>
                              ))}
                            </Carousel>
                          </div>
                        </div>
                      )}
                      <Box mt={{ lg: 5 }} className={classes.fadeSlider}>
                        <span className={classes.decoLine} />
                        <div className={classes.carousel}>
                          <Carousel autoplaySpeed={7000} {...slickOptionsFade}>
                            {nftList.sort(() => Math.random() - 0.5).map((item, index) => (
                              <div key={index.toString()} className={classes.cardMain}>
                                <ProductNftCard
                                  img={item.img}
                                  avatar={item.avatar}
                                  name={item.name}
                                  title={item.title}
                                  price={item.price}
                                  href={item.href}
                                  verified={item.verified}
                                  small
                                />
                              </div>
                            ))}
                          </Carousel>
                        </div>
                      </Box>
                      <div className={classes.fadeSlider}>
                        <span className={classes.decoLine} />
                        <div className={classes.carousel}>
                          <Carousel autoplaySpeed={8000} {...slickOptionsFade}>
                            {nftList.sort(() => Math.random() - 0.5).map((item, index) => (
                              <div key={index.toString()} className={classes.cardMain}>
                                <ProductNftCard
                                  img={item.img}
                                  avatar={item.avatar}
                                  name={item.name}
                                  title={item.title}
                                  price={item.price}
                                  href={item.href}
                                  verified={item.verified}
                                  small
                                />
                              </div>
                            ))}
                          </Carousel>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </Grid>
            </Grid>
          </Container>
        </div>
      </div>
    </Fragment>
  );
}

export default BannerSlider;
