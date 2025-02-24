import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { useTranslation } from 'next-i18next';
import YouTube from 'react-youtube';
import Zoom from '@mui/material/Zoom';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useTextAlign, useText } from 'theme/common';
import yt from 'lib/youtube';
import imgAPI from 'public/images/imgAPI';
import DesktopApp from '../../Artworks/DesktopApp';
import VideoBanner from '../../Artworks/VideoBanner';
import PersonArt from '../../Artworks/Person';
import ParallaxBall from '../Parallax/ParallaxBall';
import ParallaxTitle from '../../Title/ParallaxTitle';
import TitleSecondary from '../../Title/TitleSecondary';
import useStyles from './feature-style';

const Transition = React.forwardRef(function Transition(props, ref) { // eslint-disable-line
  return <Zoom ref={ref} {...props} />;
});

function Feature() {
  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  const { classes: align } = useTextAlign();
  const theme = useTheme();

  const { t } = useTranslation('common');
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

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

  return (
    <div className={classes.root}>
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
          {t('fintech.feature_title3')}
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
      <div className={classes.parallaxWrap}>
        <ParallaxBall />
      </div>
      <Container fixed={isDesktop}>
        <div className={classes.desc}>
          <ParallaxTitle
            bgTitle={t('fintech.feature_bgtitle')}
            mainTitle={t('fintech.feature_title')}
            color={theme.palette.mode === 'dark' ? 'tripleMain' : 'tripleLight'}
          />
          <Box component="p" sx={{ mb: 5 }} className={cx(align.textCenter, text.subtitle2)}>
            {t('fintech.feature_desc')}
          </Box>
        </div>
        <div className={classes.item}>
          <Box pb={{ md: 20 }}>
            <Grid container alignItems="center" direction={isMobile ? 'column-reverse' : 'row'}>
              <Grid item md={6} xs={12}>
                <Box px={{ sm: 4 }}>
                  <ScrollAnimation
                    animateOnce
                    animateIn="fadeInLeftShort"
                    offset={100}
                    delay={500}
                    duration={0.5}
                  >
                    <div className={classes.illustration}>
                      <div className={classes.personArt}>
                        <PersonArt person={imgAPI.avatar[19]} />
                      </div>
                    </div>
                  </ScrollAnimation>
                </Box>
              </Grid>
              <Grid item md={6} xs={12}>
                <Box px={{ sm: 4 }}>
                  <div className={classes.desc}>
                    <TitleSecondary
                      color="secondary"
                      text={t('fintech.feature_title1')}
                      align={isMobile ? 'center' : 'left'}
                    />
                    <h6 className={cx(text.subtitle2, isMobile ? align.textCenter : align.textLeft)}>
                      {t('fintech.feature_desc1')}
                    </h6>
                    <h6 className={cx(text.subtitle2, isMobile ? align.textCenter : align.textLeft)}>
                      {t('fintech.feature_desc2')}
                    </h6>
                    <Button size="small" href="#" variant="outlined" color="secondary">
                      {t('btn_detail')}
                    </Button>
                  </div>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </div>
        <div className={classes.item}>
          <Grid container alignItems="center">
            <Grid item md={6} xs={12}>
              <Box px={{ sm: 4 }}>
                <div className={cx(classes.desc, isMobile ? align.textCenter : align.textRight)}>
                  <TitleSecondary
                    text={t('fintech.feature_title2')}
                    color="primary"
                    align={isMobile ? 'center' : 'right'}
                  />
                  <h6 className={cx(text.subtitle2, isMobile ? align.textCenter : align.textRight)}>
                    {t('fintech.feature_desc2')}
                  </h6>
                  <h6 className={cx(text.subtitle2, isMobile ? align.textCenter : align.textRight)}>
                    {t('fintech.feature_desc1')}
                  </h6>
                  <Button size="small" href="#" variant="outlined" color="primary">
                    {t('btn_detail')}
                  </Button>
                </div>
              </Box>
            </Grid>
            <Grid item md={6} xs={12}>
              <Box px={{ sm: 5 }}>
                <ScrollAnimation
                  animateOnce
                  animateIn="fadeInRightShort"
                  offset={200}
                  delay={500}
                  duration={0.5}
                >
                  <div className={classes.illustration}>
                    <div className={classes.appArt}>
                      <DesktopApp
                        screen={imgAPI.apps[15]}
                        top={imgAPI.apps[11]}
                        left={imgAPI.apps[12]}
                        right={imgAPI.apps[13]}
                      />
                    </div>
                  </div>
                </ScrollAnimation>
              </Box>
            </Grid>
          </Grid>
        </div>
        <div className={classes.item}>
          <Container maxWidth="md">
            <Grid container alignItems="center">
              <Grid item md={12} xs={12}>
                <Box px={{ sm: 4 }}>
                  <div className={classes.desc}>
                    <TitleSecondary
                      color="secondary"
                      text={t('fintech.feature_title3')}
                      align="center"
                    />
                    <h6 className={cx(text.subtitle2, align.textCenter)}>
                      {t('fintech.feature_desc3')}
                    </h6>
                  </div>
                </Box>
              </Grid>
              <Grid item md={12} xs={12}>
                <Box px={{ sm: 4 }}>
                  <ScrollAnimation
                    animateOnce
                    animateIn="fadeInUpShort"
                    offset={100}
                    delay={500}
                    duration={0.5}
                  >
                    <div className={classes.illustration}>
                      <div className={classes.videoArt}>
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
                  </ScrollAnimation>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </div>
      </Container>
      <div style={{ backgroundImage: `url(${imgAPI.fintech[2]}) ` }} className={classes.parallaxLogo} />
    </div>
  );
}

export default Feature;
