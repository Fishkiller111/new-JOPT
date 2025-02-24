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
          <div className={classes.basket}>
            <animated.div style={{ transform: position.xy.to(trans2) }}>
              <Box sx={{ left: -50, top: 300 }} className={cx(classes.objHover, classes.ring2)}>
                <ClayDeco img="/images/decoration/clay-ring2.png" color="accentLight" />
              </Box>
            </animated.div>
            <animated.div style={{ transform: position.xy.to(trans1) }}>
              <Box sx={{ left: 20, top: 30 }} className={cx(classes.objHover, classes.bom)}>
                <ClayDeco img="/images/decoration/clay-bom.png" color="primaryMain" />
              </Box>
            </animated.div>
            <animated.div style={{ transform: position.xy.to(trans4) }}>
              <Box sx={{ right: 50, top: 280 }} className={cx(classes.objHover, classes.ball)}>
                <ClayDeco img="/images/decoration/clay-ball.png" color="tripleMain" />
              </Box>
            </animated.div>
            <animated.div style={{ transform: position.xy.to(trans3) }}>
              <Box sx={{ right: 100, top: 250 }} className={cx(classes.objHover, classes.ring)}>
                <ClayDeco img="/images/decoration/clay-ring.png" color="tripleDark" />
              </Box>
            </animated.div>
          </div>
        </div>
      )}
      {type === 'scroll' && (
      <div className={classes.parallaxWrap}>
        <div className={classes.basket}>
          <ParallaxProvider>
            <div className={cx(classes.innerParallax, classes.start)}>
              <Parallax translateY={[-10, 10]}>
                <Box sx={{ left: -3, top: 90 }} className={cx(classes.objScroll, classes.ring2)}>
                  <ClayDeco img="/images/decoration/clay-ring2.png" color="accent" />
                </Box>
              </Parallax>
              <Parallax translateY={[-50, 50]}>
                <Box sx={{ left: 30, top: -40 }} className={cx(classes.objScroll, classes.bom)}>
                  <ClayDeco img="/images/decoration/clay-bom.png" color="primaryLight" />
                </Box>
              </Parallax>
            </div>
            <div className={cx(classes.innerParallax, classes.end)}>
              <Parallax translateY={[-10, 10]}>
                <Box sx={{ right: 50, top: 50 }} className={cx(classes.objScroll, classes.ball)}>
                  <ClayDeco img="/images/decoration/clay-ball.png" color="tripleMain" />
                </Box>
              </Parallax>
              <Parallax translateY={[-50, 50]}>
                <Box sx={{ right: 180, top: -100 }} className={cx(classes.objScroll, classes.ring)}>
                  <ClayDeco img="/images/decoration/clay-ring.png" color="doubleMain" />
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
