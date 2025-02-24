import React from 'react';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import imgAPI from 'public/images/imgAPI';
import useStyles from './parallax-style';

export default function ParallaxRight() {
  const { classes, cx } = useStyles();
  return (
    <div className={classes.parallaxWrap}>
      <ParallaxProvider>
        <div className={cx(classes.innerParallax, classes.right)}>
          <Parallax translateY={[-20, 20]}>
            <img src={imgAPI.ai[14]} alt="parallax" />
          </Parallax>
        </div>
      </ParallaxProvider>
    </div>
  );
}
