import React, { useState, useRef } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Hidden from '@mui/material/Hidden';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import ButtonBase from '@mui/material/ButtonBase';
import Divider from '@mui/material/Divider';
import Carousel from 'react-slick';
import { useTranslation } from 'next-i18next';
import { useSpring, animated } from 'react-spring';
import link from 'public/text/link';
import imgAPI from 'public/images/imgAPI';
import { useText, useTextAlign, useTextGradient } from 'theme/common';
import LocaleLink from '../../Link';
import useStyles from './slider-style';

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 230}px,0)`;
const trans3 = (x, y) => `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`;
const trans4 = (x, y) => `translate3d(${x / 4 + 35}px,${y / 4 - 230}px,0)`;

function BannerSlider() {
  // Theme breakpoints
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [position, setPosition] = useSpring(() => ({ xy: [0, 0], config: { mass: 300, tension: 200, friction: 240 } }));

  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  const { classes: align } = useTextAlign();
  const { classes: gradient } = useTextGradient();

  const { t } = useTranslation('common');
  const slider = useRef(null);

  const [curSlide, setCurSlide] = useState(0);

  const slickOptions = {
    dots: false,
    arrows: false,
    speed: 800,
    slidesToShow: 1,
    infinite: true,
    autoplay: false,
    cssEase: 'ease-out',
    responsive: [
      {
        breakpoint: 960,
        settings: {
          dots: true,
        }
      }
    ]
  };

  const handleAfterChange = currentSlide => {
    setCurSlide(currentSlide);
  };

  const gotoSlide = slide => {
    slider.current.slickGoTo(slide);
  };

  return (
    <div className={classes.bannerWrap}>
      <div className={classes.carousel} onMouseMove={({ clientX: x, clientY: y }) => setPosition.start({ xy: calc(x, y) })}>
        <Carousel
          className={classes.slider}
          {...slickOptions}
          ref={slider}
          afterChange={handleAfterChange}
        >
          <div className={classes.slide} data-slide-id="slide1">
            <div className={classes.inner}>
              <div className={cx(classes.img, classes.backgroundBanner)}>
                <img src={imgAPI.blockchain[0]} alt="background" />
              </div>
              <Container>
                <Grid spacing={6} container alignItems="center">
                  <Grid item md={7} xs={12}>
                    <Box px={{ sm: 3 }}>
                      <div className={classes.text}>
                        <h4 className={text.title}>
                          {t('blockchain.banner_title')}
                          <span className={cx(theme.palette.mode === 'dark' ? gradient.tripleLight : gradient.tripleMain, text.uppercase)}>
                            &nbsp;
                            {t('blockchain.banner_highlight')}
                          </span>
                        </h4>
                        <h5 className={text.subtitle}>
                          {t('blockchain.banner_desc')}
                        </h5>
                        <div className={classes.btnArea}>
                          <Button component={LocaleLink} size="large" color="secondary" variant="contained" to={link.register} className={classes.button}>
                            {t('btn_get')}
                          </Button>
                          <Button size="large" color="primary" variant="outlined" href="#" className={classes.button}>
                            {t('btn_detail')}
                          </Button>
                        </div>
                      </div>
                    </Box>
                  </Grid>
                  <Grid item md={5} xs={12}>
                    {isDesktop && (
                      <div className={classes.decoBanner}>
                        <div className={classes.parallaxScene}>
                          <animated.div style={{ transform: position.xy.to(trans1) }}>
                            <span className={classes.hexa}>
                              <img src={imgAPI.blockchain[1]} alt="parallax" />
                            </span>
                          </animated.div>
                          <animated.div style={{ transform: position.xy.to(trans2) }}>
                            <span className={classes.cube}>
                              <img src={imgAPI.blockchain[2]} alt="parallax" />
                            </span>
                          </animated.div>
                          <animated.div style={{ transform: position.xy.to(trans3) }}>
                            <span className={classes.cubeBlur}>
                              <img src={imgAPI.blockchain[3]} alt="parallax" />
                            </span>
                          </animated.div>
                          <animated.div style={{ transform: position.xy.to(trans4) }}>
                            <span className={classes.accentBlur} />
                          </animated.div>
                        </div>
                      </div>
                    )}
                  </Grid>
                </Grid>
              </Container>
            </div>
          </div>
          <div className={classes.slide} data-slide-id="slide2">
            <div className={classes.inner}>
              <Container>
                <Grid container spacing={4} justifyContent="flex-end" alignItems="center" direction={isMobile ? 'column-reverse' : 'row'}>
                  <Grid item md={5} xs={12}>
                    {isDesktop && (
                      <div className={classes.decoBanner}>
                        <div className={classes.parallaxScene}>
                          <animated.div style={{ transform: position.xy.to(trans1) }}>
                            <span className={classes.pyramid}>
                              <img src={imgAPI.blockchain[4]} alt="parallax" />
                            </span>
                          </animated.div>
                          <animated.div style={{ transform: position.xy.to(trans2) }}>
                            <span className={classes.box}>
                              <img src={imgAPI.blockchain[5]} alt="parallax" />
                            </span>
                          </animated.div>
                          <animated.div style={{ transform: position.xy.to(trans3) }}>
                            <span className={classes.round}>
                              <img src={imgAPI.blockchain[6]} alt="parallax" />
                            </span>
                          </animated.div>
                          <animated.div style={{ transform: position.xy.to(trans4) }}>
                            <span className={classes.primaryBlur} />
                          </animated.div>
                        </div>
                      </div>
                    )}
                  </Grid>
                  <Grid item md={7} xs={12}>
                    <Box px={{ sm: 2 }}>
                      <div className={classes.text}>
                        <h4 className={text.title}>
                          {t('blockchain.banner_title')}
                          <span className={cx(theme.palette.mode === 'dark' ? gradient.tripleLight : gradient.tripleMain, text.uppercase)}>
                            &nbsp;
                            {t('blockchain.banner_highlight')}
                          </span>
                        </h4>
                        <h5 className={text.subtitle}>
                          {t('blockchain.banner_desc')}
                        </h5>
                        <div className={classes.btnArea}>
                          <Button component={LocaleLink} size="large" color="secondary" variant="contained" to={link.register} className={classes.button}>
                            {t('btn_get')}
                          </Button>
                          <Button size="large" color="primary" variant="outlined" href="#" className={classes.button}>
                            {t('btn_detail')}
                          </Button>
                        </div>
                      </div>
                    </Box>
                  </Grid>
                </Grid>
              </Container>
            </div>
          </div>
          <div className={cx(classes.slide, classes.centerContent)} data-slide-id="slide3">
            <div className={classes.inner}>
              <Container>
                <Grid container justifyContent="center">
                  <Grid item md={8} sm={12}>
                    <div className={cx(classes.text, align.textCenter)}>
                      <h4 className={text.title}>
                        {t('blockchain.banner_title')}
                        <span className={cx(theme.palette.mode === 'dark' ? gradient.tripleLight : gradient.tripleMain, text.uppercase)}>
                          &nbsp;
                          {t('blockchain.banner_highlight')}
                        </span>
                      </h4>
                      <h5 className={text.subtitle}>
                        {t('blockchain.banner_desc')}
                      </h5>
                      <div className={classes.btnArea}>
                        <Box justifyContent="center">
                          <Button size="large" component={LocaleLink} color="secondary" variant="contained" to={link.register} className={classes.button}>
                            {t('btn_get')}
                          </Button>
                          <Button size="large" color="black" variant="contained" href="#" className={classes.button}>
                            {t('btn_detail')}
                          </Button>
                        </Box>
                      </div>
                    </div>
                  </Grid>
                  <Grid item md={12} xs={12}>
                    <div className={cx(classes.img, classes.hBanner)}>
                      {isDesktop && (
                        <div className={classes.decoBanner}>
                          <div className={classes.parallaxScene}>
                            <animated.div style={{ transform: position.xy.to(trans1) }}>
                              <span className={classes.hexa2}>
                                <img src={imgAPI.blockchain[9]} alt="parallax" />
                              </span>
                            </animated.div>
                            <animated.div style={{ transform: position.xy.to(trans2) }}>
                              <span className={classes.pyramidBlur}>
                                <img src={imgAPI.blockchain[4]} alt="parallax" />
                              </span>
                            </animated.div>
                            <animated.div style={{ transform: position.xy.to(trans4) }}>
                              <span className={classes.tube}>
                                <img src={imgAPI.blockchain[8]} alt="parallax" />
                              </span>
                            </animated.div>
                            <animated.div style={{ transform: position.xy.to(trans3) }}>
                              <span className={classes.round2}>
                                <img src={imgAPI.blockchain[6]} alt="parallax" />
                              </span>
                            </animated.div>
                          </div>
                        </div>
                      )}
                      <img
                        src={imgAPI.blockchain[7]}
                        alt="background"
                      />
                    </div>
                  </Grid>
                </Grid>
              </Container>
            </div>
          </div>
        </Carousel>
      </div>
      <Hidden mdDown>
        <div className={classes.slideNav}>
          <nav>
            <ButtonBase
              className={cx(classes.btnNav, curSlide === 0 ? classes.active : '')}
              onClick={() => gotoSlide(0)}
            >
              <strong>First Slide</strong>
              Interdum et malesuada fames ac ante
            </ButtonBase>
            <Divider className={classes.divider} orientation="vertical" flexItem />
            <ButtonBase
              className={cx(classes.btnNav, curSlide === 1 ? classes.active : '')}
              onClick={() => gotoSlide(1)}
            >
              <strong>Second Slide</strong>
              Interdum et malesuada fames ac ante
            </ButtonBase>
            <Divider className={classes.divider} orientation="vertical" flexItem />
            <ButtonBase
              className={cx(classes.btnNav, curSlide === 2 ? classes.active : '')}
              onClick={() => gotoSlide(2)}
            >
              <strong>Third Slide</strong>
              Interdum et malesuada fames ac ante
            </ButtonBase>
          </nav>
        </div>
      </Hidden>
    </div>
  );
}

export default BannerSlider;
