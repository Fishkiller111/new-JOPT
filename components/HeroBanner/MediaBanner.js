import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import YouTube from 'react-youtube';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Zoom from '@mui/material/Zoom';
import { useTranslation } from 'next-i18next';
import { useText } from 'theme/common';
import yt from 'lib/youtube';
import MediaCard from '../Cards/Media/MediaCard';
import Title from '../Title';
import useStyles from './hero-style';

const Transition = React.forwardRef(function Transition(props, ref) { // eslint-disable-line
  return <Zoom ref={ref} {...props} />;
});

function MediaBanner(props) {
  const {
    title, cover, thumb,
    videoBg, videoPopup, featured,
    tags, decoration: Decoration
  } = props;

  // Theme breakpoints
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.up('sm'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

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

  const { t } = useTranslation('common');

  return (
    <Fragment>
      {videoPopup && (
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
                videoId={videoPopup}
                onReady={_onReadyPopup}
                opts={optsPopup}
              />
            )}
          </DialogContent>
        </Dialog>
      )}
      <div className={classes.decoWrap}>
        <Decoration />
      </div>
      <Container className={classes.root}>
        <Grid container spacing={isTablet ? 6 : 2}>
          <Grid item md={isDesktop ? 11 : 12} xs={12}>
            <Paper className={classes.banner}>
              {!play || isMobile ? <img className={classes.cover} src={cover} alt="cover" /> : null}
              {(yt.use && videoBg && !isMobile) ? (
                <div className={classes.videoBackground}>
                  <YouTube
                    videoId={videoBg}
                    opts={opts}
                    onReady={_onReady}
                    onEnd={_onEnd}
                    onPlay={_onPlay}
                  />
                </div>
              ) : (
                <img className={classes.cover} src={cover} alt="cover" />
              )}
            </Paper>
          </Grid>
        </Grid>
        <Grid
          container
          className={thumb ? classes.contentThumb : classes.content}
          alignItems="flex-end"
          spacing={isTablet ? 2 : 0}
        >
          <Grid item sm={thumb || featured ? 7 : (isDesktop ? 10 : 12)} xs={12}>
            <Box sx={{ pl: { sm: 4, xs: 2 } }}>
              {tags && (
                <div className={classes.tags}>
                  {tags.map((tag, index) => (
                    <h6 key={index.toString()} className={cx(text.subtitle, text.textPrimary)}>{tag}</h6>
                  ))}
                </div>
              )}
              <Title strictAlign text={title} />
            </Box>
          </Grid>
          {thumb && (
            <Grid item sm={5} xs={12} className={classes.front}>
              <MediaCard
                plain={!videoPopup}
                thumb={thumb}
                type={videoPopup ? 'video' : 'photo'}
                orientation={videoPopup ? 'landscape' : 'square'}
                action={handleClickOpen}
              />
            </Grid>
          )}
          {featured && (
            <Grid item sm={5} xs={12}>
              <div className={classes.featured}>
                <div className={classes.portrait}>
                  <MediaCard
                    plain
                    thumb={featured[0]}
                    type="photo"
                    orientation="portrait"
                  />
                </div>
                <div className={classes.square}>
                  <MediaCard
                    plain
                    thumb={featured[1]}
                    type="photo"
                    orientation="square"
                  />
                </div>
                <div className={classes.landscape}>
                  <MediaCard
                    plain
                    thumb={featured[2]}
                    type="photo"
                    orientation="landscape"
                  />
                </div>
              </div>
            </Grid>
          )}
        </Grid>
      </Container>
    </Fragment>
  );
}

MediaBanner.propTypes = {
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  thumb: PropTypes.string,
  videoBg: PropTypes.string,
  videoPopup: PropTypes.string,
  featured: PropTypes.array,
  tags: PropTypes.array,
  decoration: PropTypes.elementType,
};

MediaBanner.defaultProps = {
  thumb: null,
  videoBg: null,
  videoPopup: null,
  featured: null,
  decoration: null,
  tags: null,
};

export default MediaBanner;
