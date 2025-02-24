import React from 'react';
import PropTypes from 'prop-types';
import Fab from '@mui/material/Fab';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import useStyles from './video-style';

function VideoBanner(props) {
  const {
    cover, topLeft, topRight,
    bottomLeft, bottomRight, action,
  } = props;
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      {action && (
        <Fab onClick={action} className={classes.playBtn} color="secondary" aria-label="play">
          <PlayArrowIcon />
        </Fab>
      )}
      <div className={classes.video}>
        <div className={classes.cover}>
          <img src={cover} alt="cover" />
        </div>
        <span className={classes.topLeft}>
          <img src={topLeft} alt="app" />
        </span>
        <span className={classes.topRight}>
          <img src={topRight} alt="app" />
        </span>
        <span className={classes.bottomLeft}>
          <img src={bottomLeft} alt="app" />
        </span>
        <span className={classes.bottomRight}>
          <img src={bottomRight} alt="app" />
        </span>
      </div>
    </div>
  );
}

VideoBanner.propTypes = {
  cover: PropTypes.string.isRequired,
  topLeft: PropTypes.string.isRequired,
  topRight: PropTypes.string.isRequired,
  bottomLeft: PropTypes.string.isRequired,
  bottomRight: PropTypes.string.isRequired,
  action: PropTypes.func,
};

VideoBanner.defaultProps = {
  action: null
};

export default VideoBanner;
