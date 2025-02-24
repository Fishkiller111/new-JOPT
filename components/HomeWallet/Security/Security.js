import React from 'react';
import Container from '@mui/material/Container';
import Icon from '@mui/material/Icon';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useTranslation } from 'next-i18next';
import imgAPI from 'public/images/imgAPI';
import { useText, useTextAlign } from 'theme/common';
import Icons3d from '../../Icons3d';
import ParallaxFlower from '../Parallax/ParallaxFlower';
import useStyle from './security-style';
import Title from '../../Title';

const integration1 = [
  {
    icon: 'search',
    title: 'Vestibulum a massa'
  },
  {
    icon: 'shuffle',
    title: 'Interdum et malesuada'
  },
  {
    icon: 'layers',
    title: 'Cras convallis lacus orci'
  },
  {
    icon: 'rss_feed',
    title: 'Nulla vehicula'
  },
  {
    icon: 'speed',
    title: 'Interdum et malesuada'
  },
  {
    icon: 'thumb_up',
    title: 'Cras convallis lacus orci'
  },
  {
    icon: 'cloud_upload',
    title: 'Donec sit amet nulla'
  },
  {
    icon: 'build',
    title: 'Donec sit amet nulla'
  }
];

const integration2 = [
  {
    icon: 'router',
    title: 'Vestibulum a massa'
  },
  {
    icon: 'shuffle',
    title: 'Interdum et malesuada'
  },
  {
    icon: 'equalizer',
    title: 'Cras convallis lacus orci'
  },
  {
    icon: 'add_circle',
    title: 'Nulla vehicula'
  },
  {
    icon: 'pie_chart',
    title: 'Interdum et malesuada'
  },
  {
    icon: 'supervisor_account',
    title: 'Cras convallis lacus orci'
  },
  {
    icon: 'merge_type',
    title: 'Donec sit amet nulla'
  },
  {
    icon: 'sync',
    title: 'Donec sit amet nulla'
  }
];

function EventList() {
  const { classes, cx } = useStyle();
  const { classes: text } = useText();
  const { classes: align } = useTextAlign();

  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const isDesktop = useMediaQuery((theme) => theme.breakpoints.up('sm'));

  const { t } = useTranslation('common');

  return (
    <div className={classes.root}>
      <div className={classes.background}>
        <div className={classes.bgGradient}>
          <span className={classes.ovalRight} />
          <span className={classes.ovalTop} />
          <span className={classes.ovalBottom} />
        </div>
        <Container className={classes.container}>
          <Title text={t('wallet.security_title')} align="center" />
          <div className={classes.list}>
            <Box mb={{ xs: 0, sm: 15 }}>
              <Grid container spacing={3} className={classes.row}>
                <Grid item sm={6} xs={12}>
                  <Box px={{ md: 4 }}>
                    <ScrollAnimation
                      animateOnce
                      animateIn="fadeInUpShort"
                      offset={-100}
                      delay={500}
                      duration={0.5}
                    >
                      <div className={isDesktop ? align.textRight : align.textCenter}>
                        <div className={cx(classes.illustration, classes.left)}>
                          <div className={classes.obj}>
                            <div className={cx(classes.deco, classes.liquid)}>
                              <span className={cx(classes.bg, classes.bgPrimary)} />
                              <span className={classes.shadow} />
                            </div>
                            <div className={classes.photo}>
                              <img src={imgAPI.wallet[0]} alt="person big" />
                            </div>
                            <div className={classes.icon3D}>
                              <Box className={classes.medium} sx={{ bottom: 0, left: 0 }}>
                                <Icons3d icon="mdi-fingerprint" color="secondary" />
                              </Box>
                              <Box className={classes.small} sx={{ top: 0, right: 60 }}>
                                <Icons3d icon="mdi-eye-off" color="primary" />
                              </Box>
                              <Box className={classes.big} sx={{ top: 10, right: -10 }}>
                                <Icons3d icon="mdi-shield-lock" color="primary" />
                              </Box>
                            </div>
                          </div>
                        </div>
                        <h3 className={cx(text.textPrimary, text.subtitle)}>
                          {t('wallet.security_subtitle2')}
                        </h3>
                        <p className={text.subtitle2}>
                          {t('wallet.security_desc2')}
                        </p>
                      </div>
                    </ScrollAnimation>
                  </Box>
                </Grid>
                <Grid item sm={6} xs={12}>
                  <Box px={{ md: 4 }}>
                    <ScrollAnimation
                      animateOnce
                      animateIn="fadeInUpShort"
                      offset={-100}
                      delay={800}
                      duration={0.5}
                    >
                      <div className={classes.listWrap}>
                        <ul className={classes.listPrimary}>
                          {integration1.map((item, index) => (
                            <li key={index.toString()}>
                              <Icon className={classes.icon}>{item.icon}</Icon>
                              {item.title}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </ScrollAnimation>
                  </Box>
                </Grid>
              </Grid>
            </Box>
            <Grid container className={classes.row} direction={isMobile ? 'column-reverse' : 'row'}>
              <Grid item sm={6} xs={12}>
                <Box px={{ sm: 4 }}>
                  <ScrollAnimation
                    animateOnce
                    animateIn="fadeInUpShort"
                    offset={-100}
                    delay={800}
                    duration={0.5}
                  >
                    <div className={classes.listWrap}>
                      <ul className={classes.listSecondary}>
                        {integration2.map((item, index) => (
                          <li key={index.toString()}>
                            {item.title}
                            <Icon className={classes.icon}>{item.icon}</Icon>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </ScrollAnimation>
                </Box>
              </Grid>
              <Grid item sm={6} xs={12}>
                <Box px={{ sm: 4 }}>
                  <ScrollAnimation
                    animateOnce
                    animateIn="fadeInUpShort"
                    offset={-100}
                    delay={500}
                    duration={0.5}
                  >
                    <div className={isDesktop ? align.textLeft : align.textCenter}>
                      <div className={classes.illustration}>
                        <div className={classes.obj}>
                          <div className={cx(classes.deco, classes.leaf)}>
                            <span className={cx(classes.bg, classes.bgSecondary)} />
                            <span className={classes.shadow} />
                          </div>
                          <div className={classes.photo}>
                            <img src={imgAPI.wallet[1]} alt="person big" />
                          </div>
                          <div className={classes.icon3D}>
                            <Box className={classes.medium} sx={{ bottom: 40, left: -30 }}>
                              <Icons3d icon="mdi-key" color="secondary" />
                            </Box>
                            <Box className={classes.big} sx={{ top: -20, right: -40 }}>
                              <Icons3d icon="mdi-wall" color="secondary" />
                            </Box>
                            <Box className={classes.medium} sx={{ top: -30, right: -60 }}>
                              <Icons3d icon="mdi-fire" color="accent" />
                            </Box>
                          </div>
                        </div>
                      </div>
                      <h3 className={cx(text.textSecondary, text.subtitle)}>
                        {t('wallet.security_subtitle1')}
                      </h3>
                      <p className={text.subtitle2}>
                        {t('wallet.security_desc1')}
                      </p>
                    </div>
                  </ScrollAnimation>
                </Box>
              </Grid>
            </Grid>
          </div>
        </Container>
        <ParallaxFlower />
      </div>
    </div>
  );
}

export default EventList;
