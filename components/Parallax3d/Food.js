import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import { useSpring, animated } from 'react-spring';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import ClayDeco from '../Artworks/ClayDeco';
import useStyles from './parallax3d-style';

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 230}px,0)`;
const trans3 = (x, y) => `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`;
const trans4 = (x, y) => `translate3d(${x / 4 + 35}px,${y / 4 - 230}px,0)`;

function Parallax3d(props) {
  // Theme breakpoints
  const { type } = props;
  const [position, setPosition] = useSpring(() => ({ xy: [0, 0], config: { mass: 300, tension: 200, friction: 240 } }));

  const { classes, cx } = useStyles();

  return (
    <Fragment>
      {type === 'hover' && (
        <div className={classes.parallaxScene} onMouseMove={({ clientX: x, clientY: y }) => setPosition.start({ xy: calc(x, y) })}>
          <div className={classes.food}>
            <animated.div style={{ transform: position.xy.to(trans2) }}>
              <Box sx={{ top: 470, left: -240 }} className={cx(classes.objHover, classes.ufo)}>
                <ClayDeco img="/images/decoration/clay-ufo.png" color="doublePrimary" />
              </Box>
            </animated.div>
            <animated.div style={{ transform: position.xy.to(trans1) }}>
              <Box sx={{ top: 260, left: -60 }} className={cx(classes.objHover, classes.plate)}>
                <ClayDeco img="/images/decoration/clay-plate.png" color="primaryLight" />
              </Box>
            </animated.div>
            <animated.div style={{ transform: position.xy.to(trans4) }}>
              <Box sx={{ top: 320, right: 0 }} className={cx(classes.objHover, classes.tube)}>
                <ClayDeco img="/images/decoration/clay-tube.png" color="doubleMain" />
              </Box>
            </animated.div>
            <animated.div style={{ transform: position.xy.to(trans3) }}>
              <Box sx={{ top: 250, right: -200 }} className={cx(classes.objHover, classes.wormhole)}>
                <ClayDeco img="/images/decoration/clay-wormhole.png" color="primaryLight" />
              </Box>
            </animated.div>
          </div>
        </div>
      )}
      {type === 'scroll' && (
      <div className={classes.parallaxWrap}>
        <div className={classes.food}>
          <ParallaxProvider>
            <div className={cx(classes.innerParallax, classes.start)}>
              <Parallax translateY={[-10, 10]}>
                <Box sx={{ top: 150, left: 100 }} className={cx(classes.objScroll, classes.ufo)}>
                  <ClayDeco img="/images/decoration/clay-ufo.png" color="doublePrimary" />
                </Box>
              </Parallax>
              <Parallax translateY={[-50, 50]}>
                <Box sx={{ top: 0, left: 180 }} className={cx(classes.objScroll, classes.plate)}>
                  <ClayDeco img="/images/decoration/clay-plate.png" color="accent" />
                </Box>
              </Parallax>
            </div>
            <div className={cx(classes.innerParallax, classes.end)}>
              <Parallax translateY={[-10, 10]}>
                <Box sx={{ top: 0, right: -40 }} className={cx(classes.objScroll, classes.tube)}>
                  <ClayDeco img="/images/decoration/clay-tube.png" color="doubleMain" />
                </Box>
              </Parallax>
              <Parallax translateY={[-50, 50]}>
                <Box sx={{ top: -100, right: 30 }} className={cx(classes.objScroll, classes.wormhole)}>
                  <ClayDeco img="/images/decoration/clay-wormhole.png" color="primaryLight" />
                </Box>
              </Parallax>
            </div>
          </ParallaxProvider>
        </div>
      </div>
      )}
    </Fragment>
  );
}

Parallax3d.propTypes = {
  type: PropTypes.string,
};

Parallax3d.defaultProps = {
  type: 'scroll',
};

export default Parallax3d;
