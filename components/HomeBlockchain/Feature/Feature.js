import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import Grid from '@mui/material/Grid';
import { useTranslation } from 'next-i18next';
import { useTextAlign, useText } from 'theme/common';
import imgAPI from 'public/images/imgAPI';
import ParallaxRight from '../Parallax/ParallaxRight';
import ParallaxTitle from '../../Title/ParallaxTitle';
import TitleSecondary from '../../Title/TitleSecondary';
import useStyles from './feature-style';

function Feature() {
  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  const { classes: align } = useTextAlign();
  const theme = useTheme();

  const { t } = useTranslation('common');
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div className={classes.root}>
      <ParallaxRight />
      <Container fixed={isDesktop}>
        <ParallaxTitle
          bgTitle={t('blockchain.feature_bgtitle')}
          mainTitle={t('blockchain.feature_title')}
          color={theme.palette.mode === 'dark' ? 'tripleMain' : 'tripleLight'}
        />
        <Box component="p" sx={{ mb: 5 }} className={cx(align.textCenter, text.subtitle2)}>
          {t('blockchain.feature_desc')}
        </Box>
        <div className={classes.item}>
          <Grid container alignItems="center" direction={isMobile ? 'column-reverse' : 'row'}>
            <Grid item md={6} sm={3} xs={12}>
              <Box px={{ md: 4 }}>
                <ScrollAnimation
                  animateOnce
                  animateIn="fadeInLeftShort"
                  offset={100}
                  delay={500}
                  duration={0.5}
                >
                  <div className={cx(classes.illustration, classes.start)}>
                    <figure className={align.textCenter}>
                      <img
                        src={imgAPI.blockchain[10]}
                        alt="illustration"
                      />
                    </figure>
                  </div>
                </ScrollAnimation>
              </Box>
            </Grid>
            <Grid item md={6} sm={9} xs={12}>
              <Box px={{ md: 4 }}>
                <div className={classes.desc}>
                  <TitleSecondary
                    text={t('blockchain.feature_title1')}
                    align={isMobile ? 'center' : 'left'}
                    color="primary"
                  />
                  <h6 className={cx(text.subtitle2, isMobile ? align.textCenter : align.textLeft)}>
                    {t('blockchain.feature_desc1')}
                  </h6>
                </div>
              </Box>
            </Grid>
          </Grid>
        </div>
        <div className={classes.item}>
          <Grid container alignItems="center">
            <Grid item md={6} sm={8} xs={12}>
              <Box px={{ md: 4 }}>
                <div className={classes.desc}>
                  <TitleSecondary
                    text={t('blockchain.feature_title2')}
                    color="secondary"
                    align={isMobile ? 'center' : 'right'}
                  />
                  <h6 className={cx(text.subtitle2, isMobile ? align.textCenter : align.textRight)}>
                    {t('blockchain.feature_desc2')}
                  </h6>
                </div>
              </Box>
            </Grid>
            <Grid item md={6} sm={4} xs={12}>
              <Box px={{ md: 5 }}>
                <ScrollAnimation
                  animateOnce
                  animateIn="fadeInRightShort"
                  offset={200}
                  delay={500}
                  duration={0.5}
                >
                  <div className={classes.illustration}>
                    <figure className={isMobile ? align.textCenter : align.textLeft}>
                      <img
                        src={imgAPI.blockchain[11]}
                        alt="illustration"
                      />
                    </figure>
                  </div>
                </ScrollAnimation>
              </Box>
            </Grid>
          </Grid>
        </div>
        <div className={cx(classes.item, classes.last)}>
          <Grid container alignItems="center" direction={isMobile ? 'column-reverse' : 'row'}>
            <Grid item md={6} sm={3} xs={12}>
              <Box px={{ md: 4 }}>
                <ScrollAnimation
                  animateOnce
                  animateIn="fadeInLeftShort"
                  offset={100}
                  delay={500}
                  duration={0.5}
                >
                  <div className={cx(classes.illustration, classes.start)}>
                    <figure className={align.textCenter}>
                      <img
                        src={imgAPI.blockchain[12]}
                        alt="illustration"
                      />
                    </figure>
                  </div>
                </ScrollAnimation>
              </Box>
            </Grid>
            <Grid item md={6} sm={9} xs={12}>
              <Box px={{ md: 4 }}>
                <div className={classes.desc}>
                  <TitleSecondary
                    text={t('blockchain.feature_title3')}
                    align={isMobile ? 'center' : 'left'}
                    color="primary"
                  />
                  <h6 className={cx(text.subtitle2, isMobile ? align.textCenter : align.textLeft)}>
                    {t('blockchain.feature_desc3')}
                  </h6>
                </div>
              </Box>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}

export default Feature;
