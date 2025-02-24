import React from 'react';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import ClayDeco from '../../Artworks/ClayDeco';
import useStyles from './parallax-style';

export default function ParallaxBall() {
  const { classes, cx } = useStyles();
  return (
    <div className={classes.parallaxWrap}>
      <ParallaxProvider>
        <div className={cx(classes.innerParallax, classes.top)}>
          <Parallax translateY={[-10, 10]}>
            <div className={cx(classes.obj, classes.big)}>
              <ClayDeco img="/images/decoration/clay-ball.png" color="tripleMain" />
            </div>
          </Parallax>
          <Parallax translateY={[-50, 50]}>
            <div className={cx(classes.obj, classes.small)}>
              <ClayDeco img="/images/decoration/clay-ring.png" color="primaryLight" />
            </div>
          </Parallax>
        </div>
        <div className={cx(classes.innerParallax, classes.bottom)}>
          <Parallax translateY={[-10, 10]}>
            <div className={cx(classes.obj, classes.big)}>
              <ClayDeco img="/images/decoration/clay-ball.png" color="doubleMain" />
            </div>
          </Parallax>
          <Parallax translateY={[-50, 50]}>
            <div className={cx(classes.obj, classes.small)}>
              <ClayDeco img="/images/decoration/clay-plate.png" color="secondaryLight" />
            </div>
          </Parallax>
        </div>
      </ParallaxProvider>
    </div>
  );
}
