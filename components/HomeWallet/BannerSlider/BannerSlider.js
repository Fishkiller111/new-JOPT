import React, {
  useState,
  useRef,
  Fragment
} from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Hidden from '@mui/material/Hidden';
import YouTube from 'react-youtube';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import ButtonBase from '@mui/material/ButtonBase';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Divider from '@mui/material/Divider';
import Zoom from '@mui/material/Zoom';
import Carousel from 'react-slick';
import { useTranslation } from 'next-i18next';
import imgAPI from 'public/images/imgAPI';
import link from 'public/text/link';
import yt from 'lib/youtube';
import { useText, useTextAlign, useTextGradient } from 'theme/common';
import LocaleLink from '../../Link';
import PersonArt from '../../Artworks/Person';
import VideoBanner from '../../Artworks/VideoBanner';
import DesktopApp from '../../Artworks/DesktopApp';
import useStyles from './slider-style';

const Transition = React.forwardRef(function Transition(props, ref) { // eslint-disable-line
  return <Zoom ref={ref} {...props} />;
});

function BannerSlider() {
  // Theme breakpoints
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Video Background
  const [player, setPlayer] = useState([]);
  const [play, setPlayed] = useState(false);

  const opts = {
    height: '720',
    width: '1080',
    playerVars: { // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      controls: 0,
      rel: 0,
      showinfo: 0,
      mute: 1,
      origin: 'http://localhost:3001'
    }
  };

  const _onEnd = event => {
    event.target.playVideo();
  };

  const _onPlay = () => {
    const curTime = player[0].getCurrentTime();
    if (curTime > 0) {
      setPlayed(true);
    }
  };

  const _onReady = event => {
    player.push(event.target);
    setPlayer(player);
  };

  // Video Popup
  const [playerPopup, setPlayerPopup] = useState([]);
  const [openPopup, setOpenPopup] = useState(false);

  const handleClickOpen = () => {
    if (yt.use) {
      setOpenPopup(true);
      playerPopup[0].playVideo();
    }
  };

  const handleClose = () => {
    setOpenPopup(false);
    playerPopup[0].pauseVideo();
  };

  const _onReadyPopup = event => {
    playerPopup.push(event.target);
    setPlayerPopup(playerPopup);
  };

  const optsPopup = {
    height: '360',
    width: '640',
    playerVars: { // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
      controls: 1,
      rel: 0,
      showinfo: 1,
      mute: 0,
      origin: 'https://localhost:3008'
    }
  };

  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  const { classes: align } = useTextAlign();
  const { classes: gradient } = useTextGradient();

  const { t } = useTranslation('common');
  const slider = useRef(null);

  const [curSlide, setCurSlide] = useState(0);

  const slickOptions = {
    dots: false,
    arrows: false,
    speed: 800,
    slidesToShow: 1,
    infinite: true,
    autoplay: false,
    cssEase: 'ease-out',
    responsive: [
      {
        breakpoint: 960,
        settings: {
          dots: true,
        }
      }
    ]
  };

  const handleAfterChange = currentSlide => {
    setCurSlide(currentSlide);
  };

  const gotoSlide = slide => {
    slider.current.slickGoTo(slide);
  };

  return (
    <Fragment>
      <Dialog
        open={openPopup}
        TransitionComponent={Transition}
        keepMounted
        classes={{ paper: classes.videoPopup }}
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          {t('wallet.feature_title3')}
          <IconButton onClick={handleClose} className={classes.closeBtn} size="large">
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          {yt.use && (
            <YouTube
              videoId="9vPfeczePww"
              onReady={_onReadyPopup}
              opts={optsPopup}
            />
          )}
        </DialogContent>
      </Dialog>
      <div className={classes.bannerWrap}>
        <div className={classes.carousel}>
          <Carousel
            className={classes.slider}
            {...slickOptions}
            ref={slider}
            afterChange={handleAfterChange}
          >
            <div className={classes.slide} data-slide-id="slide1">
              <div className={classes.inner}>
                <div className={cx(classes.img, classes.backgroundBanner)}>
                  <div className={classes.decoMask}>
                    <svg className={classes.main}>
                      <use xlinkHref="/images/decoration/banner-mask.svg#main" />
                    </svg>
                    <svg className={classes.darken}>
                      <use xlinkHref="/images/decoration/banner-mask.svg#main" />
                    </svg>
                  </div>
                  <div className={classes.decoLine}>
                    <svg className={classes.primary}>
                      <use xlinkHref="/images/decoration/banner-line.svg#main" />
                    </svg>
                    <svg className={classes.secondary}>
                      <use xlinkHref="/images/decoration/banner-line.svg#main" />
                    </svg>
                  </div>
                  {!play || !isDesktop ? <img className={classes.cover} src={imgAPI.photosL[49]} alt="cover" /> : null}
                  {(yt.use && isDesktop) ? (
                    <div className={classes.video}>
                      <YouTube
                        videoId="0cdLuY6R_kI"
                        opts={opts}
                        onReady={_onReady}
                        onEnd={_onEnd}
                        onPlay={_onPlay}
                      />
                    </div>
                  ) : (
                    <img className={classes.cover} src={imgAPI.photosL[49]} alt="cover" />
                  )}
                </div>
                <Container>
                  <Grid spacing={6} container>
                    <Grid item md={7} xs={12}>
                      <Box px={{ sm: 3 }}>
                        <div className={classes.text}>
                          <h4 className={text.title}>
                            <span className={cx(theme.palette.mode === 'dark' ? gradient.tripleMain : gradient.tripleMain, text.uppercase)}>
                              {t('wallet.banner_highlight')}
                              &nbsp;
                            </span>
                            {t('wallet.banner_title')}
                          </h4>
                          <h5 className={text.subtitle}>
                            {t('wallet.banner_desc')}
                          </h5>
                          <div className={cx(classes.btnArea, classes.download)}>
                            <a href="#">
                              <img src="/images/wallet/app-store.png" alt="app store" />
                            </a>
                            <a href="#">
                              <img src="/images/wallet/play-store.png" alt="play store" />
                            </a>
                          </div>
                        </div>
                      </Box>
                    </Grid>
                    <Grid item md={5} xs={12}>
                      <div className={classes.decoBanner}>
                        <div className={classes.artScene}>
                          <PersonArt person={imgAPI.avatar[19]} />
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                </Container>
              </div>
            </div>
            <div className={classes.slide} data-slide-id="slide2">
              <div className={classes.inner}>
                <Container>
                  <Grid container spacing={4} justifyContent="flex-end" alignItems="center" direction={isMobile ? 'column-reverse' : 'row'}>
                    <Grid item md={6} xs={12}>
                      <div className={classes.decoBanner}>
                        <DesktopApp
                          screen={imgAPI.apps[15]}
                          top={imgAPI.apps[11]}
                          left={imgAPI.apps[12]}
                          right={imgAPI.apps[13]}
                        />
                      </div>
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <div className={classes.text}>
                        <h4 className={text.title}>
                          <span className={cx(theme.palette.mode === 'dark' ? gradient.tripleMain : gradient.tripleMain, text.uppercase)}>
                            {t('wallet.banner_highlight')}
                            &nbsp;
                          </span>
                          {t('wallet.banner_title')}
                        </h4>
                        <h5 className={text.subtitle}>
                          {t('wallet.banner_desc')}
                        </h5>
                        <div className={classes.btnArea}>
                          <Button component={LocaleLink} size="large" color="primary" variant="contained" to={link.register} className={classes.button}>
                            {t('btn_get')}
                          </Button>
                          <Button size="large" color="secondary" variant="outlined" href="#" className={classes.button}>
                            {t('btn_detail')}
                          </Button>
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                </Container>
              </div>
            </div>
            <div className={cx(classes.slide, classes.centerContent)} data-slide-id="slide3">
              <div className={classes.inner}>
                <Container>
                  <Grid container justifyContent="center">
                    <Grid item md={12} sm={12}>
                      <div className={cx(classes.text, align.textCenter)}>
                        <h4 className={text.title}>
                          <span className={cx(theme.palette.mode === 'dark' ? gradient.tripleMain : gradient.tripleMain, text.uppercase)}>
                            {t('wallet.banner_highlight')}
                            &nbsp;
                          </span>
                          {t('wallet.banner_title')}
                        </h4>
                        <h5 className={text.subtitle}>
                          {t('wallet.feature_title1')}
                        </h5>
                      </div>
                    </Grid>
                    <Grid item md={12} xs={12}>
                      <div className={cx(classes.img, classes.hBanner)}>
                        <div className={cx(classes.img, classes.backgroundBanner)}>
                          <div className={classes.decoMask}>
                            <svg className={classes.main}>
                              <use xlinkHref="/images/decoration/banner-mask.svg#main" />
                            </svg>
                            <svg className={classes.darken}>
                              <use xlinkHref="/images/decoration/banner-mask.svg#main" />
                            </svg>
                          </div>
                          <img className={classes.cover} src={imgAPI.photosL[49]} alt="cover" />
                        </div>
                        <div className={classes.decoBanner}>
                          <VideoBanner
                            action={handleClickOpen}
                            cover={imgAPI.apps[16]}
                            topLeft={imgAPI.apps[4]}
                            topRight={imgAPI.apps[5]}
                            bottomLeft={imgAPI.apps[7]}
                            bottomRight={imgAPI.apps[6]}
                          />
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                </Container>
              </div>
            </div>
          </Carousel>
        </div>
        <Hidden mdDown>
          <div className={classes.slideNav}>
            <nav>
              <ButtonBase
                className={cx(classes.btnNav, curSlide === 0 ? classes.active : '')}
                onClick={() => gotoSlide(0)}
              >
                <strong>First Slide</strong>
                Interdum et malesuada fames ac ante
              </ButtonBase>
              <Divider className={classes.divider} orientation="vertical" flexItem />
              <ButtonBase
                className={cx(classes.btnNav, curSlide === 1 ? classes.active : '')}
                onClick={() => gotoSlide(1)}
              >
                <strong>Second Slide</strong>
                Interdum et malesuada fames ac ante
              </ButtonBase>
              <Divider className={classes.divider} orientation="vertical" flexItem />
              <ButtonBase
                className={cx(classes.btnNav, curSlide === 2 ? classes.active : '')}
                onClick={() => gotoSlide(2)}
              >
                <strong>Third Slide</strong>
                Interdum et malesuada fames ac ante
              </ButtonBase>
            </nav>
          </div>
        </Hidden>
      </div>
    </Fragment>
  );
}

export default BannerSlider;
