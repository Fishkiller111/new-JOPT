import React from 'react';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import useStyles from './parallax-style';

export default function ParallaxRight() {
  const { classes, cx } = useStyles();
  return (
    <div className={classes.parallaxWrap}>
      <ParallaxProvider>
        <div className={cx(classes.innerParallax, classes.right)}>
          <Parallax translateY={[-40, 40]}>
            <span className={cx(classes.oval, classes.big)}>
              <span className={classes.gradient} />
            </span>
          </Parallax>
          <Parallax translateY={[-30, 30]}>
            <span className={classes.triangle}>
              <span className={classes.gradient} />
            </span>
          </Parallax>
        </div>
      </ParallaxProvider>
    </div>
  );
}
