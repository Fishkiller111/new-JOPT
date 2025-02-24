import React from 'react';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import ClayDeco from '../../Artworks/ClayDeco';
import useStyles from './parallax-style';

export default function ParallaxFlower() {
  const { classes, cx } = useStyles();
  return (
    <div className={classes.parallaxWrap}>
      <ParallaxProvider>
        <div className={cx(classes.innerParallax, classes.end)}>
          <Parallax translateY={[-10, 10]}>
            <div className={cx(classes.obj, classes.big)}>
              <ClayDeco img="/images/decoration/clay-flower.png" color="primaryLight" />
            </div>
          </Parallax>
          <Parallax translateY={[-50, 50]}>
            <div className={cx(classes.obj, classes.small)}>
              <ClayDeco img="/images/decoration/clay-web.png" color="accent" />
            </div>
          </Parallax>
        </div>
        <div className={cx(classes.innerParallax, classes.start)}>
          <Parallax translateY={[-10, 10]}>
            <div className={cx(classes.obj, classes.big)}>
              <ClayDeco img="/images/decoration/clay-flower.png" color="primaryLight" />
            </div>
          </Parallax>
          <Parallax translateY={[-50, 50]}>
            <div className={cx(classes.obj, classes.small)}>
              <ClayDeco img="/images/decoration/clay-bowl.png" color="secondaryLight" />
            </div>
          </Parallax>
        </div>
      </ParallaxProvider>
    </div>
  );
}
