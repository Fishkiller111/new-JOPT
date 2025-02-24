import React, { useEffect, useState } from 'react';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import useStyles from './parallax-style';

export default function ParallaxDouble() {
  const [loaded, setLoaded] = useState(false);

  const { classes, cx } = useStyles();
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
    <div className={classes.parallaxWrap}>
      {loaded && (
        <ParallaxProvider>
          <div className={cx(classes.innerParallax, classes.top)}>
            <Parallax translateY={[-20, 20]}>
              <div className={classes.fog}>
                <div className={classes.fogInner}>
                  <div className={classes.doubleMain} style={randomShape(100, 300, 600, 500, 120)} />
                  <div className={classes.accent} style={randomShape(200, 400, 100, 300, 60)} />
                  <div className={classes.tripleLight} style={randomShape(200, 200, 100, 400, 90)} />
                  <div className={classes.tripleMain} style={randomShape(400, 100, 400, 500, 160)} />
                </div>
              </div>
            </Parallax>
          </div>
          <div className={cx(classes.innerParallax, classes.bottom)}>
            <Parallax translateY={[-20, 20]}>
              <div className={classes.fog}>
                <div className={classes.fogInner}>
                  <div className={classes.tripleMain} style={randomShape(100, 300, 600, 500, 120)} />
                  <div className={classes.tripleLight} style={randomShape(200, 400, 100, 300, 60)} />
                  <div className={classes.doubleMain} style={randomShape(200, 200, 100, 400, 90)} />
                </div>
              </div>
            </Parallax>
          </div>
        </ParallaxProvider>
      )}
    </div>
  );
}
