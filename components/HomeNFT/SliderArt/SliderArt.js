import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import useStyles from './slider-art-style';

function SliderArt(props) {
  const { classes, cx } = useStyles();
  const { children, fade } = props;
  const [loaded, setLoaded] = useState(false);

  const randomShape = (top, left, width, height, rotate) => ({
    top: Math.floor(Math.random() * top),
    left: Math.floor(Math.random() * left),
    width: Math.floor(Math.random() * (width - 100) + 100),
    height: Math.floor(Math.random() * (height - 100) + 100),
    transform: `rotate(${Math.floor(Math.random() * rotate)}deg)`,
  });

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className={classes.deco}>
      <div className={cx(classes.figure, fade ? classes.fade : '')}>
        <div className={classes.inner}>
          {loaded && (
            <div className={classes.fog}>
              <div className={classes.tripleMain} style={randomShape(100, 300, 600, 500, 120)} />
              <div className={classes.tripleDark} style={randomShape(200, 400, 100, 300, 60)} />
              <div className={classes.secondaryDark} style={randomShape(200, 200, 100, 400, 90)} />
              <div className={classes.tripleLight} style={randomShape(400, 100, 400, 500, 160)} />
            </div>
          )}
        </div>
        <div className={classes.content}>
          {children}
        </div>
      </div>
    </div>
  );
}

SliderArt.propTypes = {
  children: PropTypes.node.isRequired,
  fade: PropTypes.bool,
};

SliderArt.defaultProps = {
  fade: false
};

export default SliderArt;
