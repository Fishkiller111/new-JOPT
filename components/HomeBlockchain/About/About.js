import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import YouTube from 'react-youtube';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid';
import Zoom from '@mui/material/Zoom';
import { useTranslation } from 'next-i18next';
import imgAPI from 'public/images/imgAPI';
import yt from 'lib/youtube';
import { useText, useTextAlign } from 'theme/common';
import VideoCard from '../../Cards/Media/MediaCard';
import ParallaxLeft from '../Parallax/ParallaxLeft';
import Icons3d from '../../Icons3d';
import Title from '../../Title';
import useStyles from './about-style';

const Transition = React.forwardRef(function Transition(props, ref) { // eslint-disable-line
  return <Zoom ref={ref} {...props} />;
});

function MainFeature() {
  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  const { classes: align } = useTextAlign();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const { t } = useTranslation('common');
  const [player, setPlayer] = useState([]);
  const [openPopup, setOpenPopup] = useState(false);

  const handleClickOpen = () => {
    if (yt.use) {
      setOpenPopup(true);
      player[0].playVideo();
    }
  };

  const handleClose = () => {
    setOpenPopup(false);
    player[0].pauseVideo();
  };

  const _onReady = event => {
    player.push(event.target);
    setPlayer(player);
  };

  const opts = {
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
    <div className={classes.mainFeature}>
      <ParallaxLeft />
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
          {t('blockchain.feature_title')}
          <IconButton onClick={handleClose} className={classes.closeBtn} size="large">
            <CloseIcon className={classes.icon} />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          {yt.use && (
            <YouTube
              videoId="f82BZoIR7TA"
              onReady={_onReady}
              opts={opts}
            />
          )}
        </DialogContent>
      </Dialog>
      <Container fixed={isDesktop}>
        <Grid container>
          <Grid item md={6} xs={12}>
            <Title text={t('blockchain.feature_title2')} />
            <Box component="p" sx={{ mb: 5 }} className={cx(isMobile ? align.textCenter : align.textLeft, text.subtitle2)}>
              {t('blockchain.feature_desc1')}
            </Box>
            <div className={classes.video}>
              <VideoCard
                thumb={imgAPI.photosL[9]}
                orientation="landscape"
                title={t('blockchain.feature_title2')}
                action={handleClickOpen}
              />
            </div>
          </Grid>
          <Grid item md={6} xs={12} className={classes.featureWrap}>
            <div className={classes.counter}>
              <div className={classes.lower}>
                <Paper className={classes.paper}>
                  <div className={classes.icon}>
                    <Icons3d icon="mdi-code-not-equal-variant" color="primary" />
                  </div>
                  <div className={cx(classes.glow, classes.primary)}>
                    <Typography variant="h4">
                      +600
                    </Typography>
                    <Typography display="block">
                      {t('blockchain.about_counter1')}
                    </Typography>
                  </div>
                </Paper>
                <Paper className={classes.paper}>
                  <div className={classes.icon}>
                    <Icons3d icon="mdi mdi-hexagon-slice-4" color="purple" />
                  </div>
                  <div className={cx(classes.glow, classes.purple)}>
                    <Typography variant="h4">
                      +200K
                    </Typography>
                    <Typography display="block">
                      {t('blockchain.about_counter2')}
                    </Typography>
                  </div>
                </Paper>
              </div>
              <div className={classes.higher}>
                <Paper className={classes.paper}>
                  <div className={classes.icon}>
                    <Icons3d icon="mdi-lightning-bolt-circle" color="secondary" />
                  </div>
                  <div className={cx(classes.glow, classes.secondary)}>
                    <Typography variant="h4">
                      50x
                    </Typography>
                    <Typography display="block">
                      {t('blockchain.about_counter3')}
                    </Typography>
                  </div>
                </Paper>
                <Paper className={classes.paper}>
                  <div className={classes.icon}>
                    <Icons3d icon="mdi-source-branch" color="accent" />
                  </div>
                  <div className={cx(classes.glow, classes.accent)}>
                    <Typography variant="h4">
                      +20M
                    </Typography>
                    <Typography display="block">
                      {t('blockchain.about_counter4')}
                    </Typography>
                  </div>
                </Paper>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default MainFeature;
