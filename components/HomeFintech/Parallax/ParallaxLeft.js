import React from 'react';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import ClayDeco from '../../Artworks/ClayDeco';
import useStyles from './parallax-style';

export default function ParallaxLeft() {
  const { classes, cx } = useStyles();
  return (
    <div className={classes.parallaxWrap}>
      <ParallaxProvider>
        <div className={cx(classes.innerParallax, classes.left)}>
          <Parallax translateY={[-20, 20]}>
            <div className={cx(classes.obj, classes.big)}>
              <ClayDeco img="/images/decoration/clay-ufo.png" color="tripleMain" />
            </div>
          </Parallax>
          <Parallax translateY={[-50, 50]}>
            <div className={cx(classes.obj, classes.small)}>
              <ClayDeco img="/images/decoration/clay-ring.png" color="primaryLight" />
            </div>
          </Parallax>
        </div>
      </ParallaxProvider>
    </div>
  );
}
