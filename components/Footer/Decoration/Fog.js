import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import useStyles from './decoration-style';

function Fog(props) {
  const [loaded, setLoaded] = useState(false);

  const { children } = props;

  const { classes } = useStyles();
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
    <div className={classes.fogs}>
      {children}
      {loaded && (
        <div className={classes.fog}>
          <div className={classes.start}>
            <div className={classes.doubleMain} style={randomShape(100, 300, 600, 500, 120)} />
            <div className={classes.accent} style={randomShape(200, 400, 400, 300, 60)} />
            <div className={classes.tripleLight} style={randomShape(200, 200, 100, 400, 90)} />
            <div className={classes.tripleMain} style={randomShape(400, 500, 400, 500, 160)} />
          </div>
          <div className={classes.end}>
            <div className={classes.doubleMain} style={randomShape(100, 300, 600, 500, 120)} />
            <div className={classes.accent} style={randomShape(200, 400, 100, 300, 60)} />
            <div className={classes.tripleLight} style={randomShape(200, 200, 100, 400, 90)} />
            <div className={classes.tripleMain} style={randomShape(400, 100, 400, 500, 160)} />
          </div>
        </div>
      )}
    </div>
  );
}

Fog.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Fog;
