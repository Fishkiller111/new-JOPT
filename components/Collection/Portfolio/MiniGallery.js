import React, { useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Lightbox from 'react-18-image-lightbox';
import Dialog from '@mui/material/Dialog';
import YouTube from 'react-youtube';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Zoom from '@mui/material/Zoom';
import Masonry from '@mui/lab/Masonry';
import yt from 'lib/youtube';
import imgAPI from 'public/images/imgAPI';
import MediaCard from '../../Cards/Media/MediaCard';
import useStyles from './mini-gallery-style';

const Transition = React.forwardRef(function Transition(props, ref) { // eslint-disable-line
  return <Zoom ref={ref} {...props} />;
});

const gallery = [
  {
    thumb: imgAPI.photosL[25],
    type: 'video',
    videoId: 'MgnXhbuxVF0',
    orientation: 'landscape',
    title: 'Sed lacinia velit, ut malesuada eros interdum a'
  },
  {
    thumb: imgAPI.photosP[2],
    type: 'photo',
    orientation: 'portrait'
  },
  {
    thumb: imgAPI.photosL[23],
    type: 'photo',
    orientation: 'landscape'
  },
  {
    thumb: imgAPI.photosL[27],
    type: 'photo',
    orientation: 'landscape'
  },
  {
    thumb: imgAPI.photosL[35],
    type: 'video',
    videoId: '5QFvlhX_DmM',
    orientation: 'landscape'
  },
  {
    thumb: imgAPI.photosP[5],
    type: 'photo',
    orientation: 'portrait'
  },
  {
    thumb: imgAPI.photosL[53],
    type: 'photo',
    orientation: 'landscape',
    title: 'Sed lacinia velit, ut malesuada eros interdum a'
  },
  {
    thumb: imgAPI.photosL[11],
    type: 'photo',
    orientation: 'landscape'
  },
];

function MiniGallery() {
  const { classes, cx } = useStyles();

  // Image Gallery
  const [open, setOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [videoId, setVideoId] = useState('');
  const [player, setPlayer] = useState([]);
  const [openPopup, setOpenPopup] = useState(false);
  const ytPlayer = [];

  const isMobile = useMediaQuery(theme => theme.breakpoints.down('sm'));

  const handleClickOpen = id => {
    if (yt.use) {
      setVideoId(id);
      setOpenPopup(true);
      player[0].playVideo();
    }
  };

  const handleClose = () => {
    setOpenPopup(false);
    player[0].pauseVideo();
  };

  const _onReady = event => {
    ytPlayer.push(event.target);
    setPlayer(ytPlayer);
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
    }
  };

  function onMovePrevRequest() {
    setPhotoIndex((photoIndex + gallery.length - 1) % gallery.length);
  }

  function onMoveNextRequest() {
    setPhotoIndex((photoIndex + gallery.length + 1) % gallery.length);
  }

  function showPopup(index) {
    setOpen(true);
    setPhotoIndex(index);
  }

  const toggleExpand = () => {
    setExpanded(!expanded);
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
          Lorem ipsum dolor sit amet
          <IconButton onClick={handleClose} className={classes.closeBtn} size="large">
            <CloseIcon className={classes.icon} />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          {yt.use && (
            <YouTube
              videoId={videoId}
              onReady={_onReady}
              opts={opts}
            />
          )}
        </DialogContent>
      </Dialog>
      {open && (
        <Lightbox
          mainSrc={gallery[photoIndex].thumb}
          nextSrc={gallery[(photoIndex + 1) % gallery.length].thumb}
          prevSrc={gallery[(photoIndex + 1) % gallery.length].thumb || null}
          onCloseRequest={() => setOpen(false)}
          onMovePrevRequest={onMovePrevRequest}
          onMoveNextRequest={onMoveNextRequest}
        />
      )}
      <div className={cx(classes.massonry, expanded && classes.expand)}>
        <Masonry columns={isMobile ? 1 : 2} spacing={2}>
          {gallery.map((item, index) => (
            <Box className={item.orientation === 'landscape' ? classes.landscape : classes.portrait} key={index.toString()}>
              <MediaCard
                thumb={item.thumb}
                type={item.type}
                orientation={item.orientation}
                href="#!"
                plain={item.type === 'photo'}
                action={() => handleClickOpen(item.videoId)}
              />
              {item.type === 'photo' && <ButtonBase onClick={() => showPopup(index)} className={classes.imgButton} />}
            </Box>
          ))}
        </Masonry>
        <Button
          variant="contained"
          className={classes.btn}
          size="large"
          color="black"
          onClick={toggleExpand}
        >
          {expanded ? 'Hide Some Media' : 'Show All Media'}
        </Button>
      </div>
    </div>
  );
}

export default MiniGallery;
