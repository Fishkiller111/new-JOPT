import React, { useEffect, useState } from 'react';
import useStyles from './blur-gradient-style';

function BlurGradient() {
  const [loaded, setLoaded] = useState([]);
  const [style, setStyle] = useState({});

  const { classes, cx } = useStyles();

  useEffect(() => {
    const randomShape = (top, left, width, height, rotate) => ({
      top: Math.floor(Math.random() * top),
      left: Math.floor(Math.random() * left),
      width: Math.floor(Math.random() * (width - 100) + 100),
      height: Math.floor(Math.random() * (height - 100) + 100),
      transform: `rotate(${Math.floor(Math.random() * rotate)}deg)`,
    });
    setLoaded(true);
    setStyle([
      randomShape(40, 300, 600, 500, 120),
      randomShape(50, 400, 400, 300, 60),
      randomShape(20, 200, 100, 400, 90),
      randomShape(40, 500, 400, 500, 160),
      randomShape(10, 300, 600, 500, 120),
      randomShape(60, 400, 100, 300, 60),
      randomShape(20, 200, 100, 400, 90),
      randomShape(70, 100, 400, 500, 160)
    ]);
  }, []);

  return (
    <div className={classes.fogs}>
      {loaded && (
        <div className={cx(classes.fog, classes.start)}>
          <div className={classes.ctx}>
            <div className={classes.doubleMain} style={style[0]} />
            <div className={classes.accent} style={style[1]} />
            <div className={classes.tripleLight} style={style[2]} />
            <div className={classes.tripleMain} style={style[3]} />
          </div>
        </div>
      )}
      {loaded && (
        <div className={cx(classes.fog, classes.end)}>
          <div className={classes.ctx}>
            <div className={classes.doubleMain} style={style[4]} />
            <div className={classes.accent} style={style[5]} />
            <div className={classes.tripleLight} style={style[6]} />
            <div className={classes.tripleMain} style={style[7]} />
          </div>
        </div>
      )}
    </div>
  );
}

export default BlurGradient;
