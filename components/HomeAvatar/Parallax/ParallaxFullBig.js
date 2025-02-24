import React from 'react';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import useStyles from './parallax-style';

export default function ParallaxFull() {
  const { classes, cx } = useStyles();
  return (
    <div className={classes.parallaxWrap}>
      <ParallaxProvider>
        <div className={cx(classes.innerParallax, classes.big)}>
          <Parallax translateY={[-40, 40]}>
            <span className={cx(classes.oval, classes.giga)}>
              <span className={classes.gradient} />
            </span>
          </Parallax>
          <Parallax translateY={[-30, 30]}>
            <span className={classes.triangle}>
              <span className={classes.gradient} />
            </span>
          </Parallax>
          <Parallax translateY={[-40, 40]}>
            <div className={cx(classes.dots, classes.start)}>
              <svg
                fill="#cccccc"
                width={845}
                height={1099}
                className={cx(classes.parallaxVertical, classes.parallaxDot)}
              >
                <use xlinkHref="/images/decoration/dot-deco.svg#dot" />
              </svg>
            </div>
          </Parallax>
        </div>
      </ParallaxProvider>
    </div>
  );
}
