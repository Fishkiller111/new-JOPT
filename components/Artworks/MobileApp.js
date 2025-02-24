import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './mobile-style';

function MobileApp(props) {
  const {
    screen, top,
    left, right,
  } = props;
  const { cx, classes } = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.phone}>
        <div className={classes.screen}>
          <img src={screen} alt="screen" />
        </div>
      </div>
      <div className={cx(classes.phone, classes.reflect)}>
        <div className={classes.screen}>
          <img src={screen} alt="screen" />
        </div>
      </div>
      <div className={classes.widget}>
        <span className={classes.top}>
          <img src={top} alt="app" />
        </span>
        <span className={classes.left}>
          <img src={left} alt="app" />
        </span>
        <span className={classes.right}>
          <img src={right} alt="app" />
        </span>
      </div>
    </div>
  );
}

MobileApp.propTypes = {
  screen: PropTypes.string.isRequired,
  top: PropTypes.string.isRequired,
  left: PropTypes.string.isRequired,
  right: PropTypes.string.isRequired,
};

export default MobileApp;
