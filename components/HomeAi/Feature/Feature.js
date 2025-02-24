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
import ParallaxDouble from '../Parallax/ParallaxDouble';
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
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <div className={classes.root}>
      <ParallaxDouble />
      <Container fixed={isDesktop}>
        <ParallaxTitle
          bgTitle={t('ai-landing.feature_bgtitle')}
          mainTitle={t('ai-landing.feature_title')}
          color={theme.palette.mode === 'dark' ? 'tripleMain' : 'tripleLight'}
        />
        <Box component="p" sx={{ mb: 5 }} className={cx(align.textCenter, text.subtitle2)}>
          {t('ai-landing.feature_desc')}
        </Box>
        <div className={classes.item}>
          <Grid container alignItems="center" direction={isMobile ? 'column-reverse' : 'row'}>
            <Grid item md={6} xs={12}>
              <Box px={{ sm: 4 }}>
                <ScrollAnimation
                  animateOnce
                  animateIn="fadeInLeftShort"
                  offset={100}
                  delay={500}
                  duration={0.5}
                >
                  <div className={classes.illustration}>
                    <figure>
                      <img
                        src={imgAPI.ai[15]}
                        alt="illustration"
                      />
                    </figure>
                  </div>
                </ScrollAnimation>
              </Box>
            </Grid>
            <Grid item md={6} xs={12}>
              <Box px={{ sm: 4 }}>
                <div className={classes.desc}>
                  <TitleSecondary
                    text={t('ai-landing.feature_title1')}
                    align={isMobile ? 'center' : 'left'}
                  />
                  <h6 className={cx(text.subtitle2, isMobile ? align.textCenter : align.textLeft)}>
                    {t('ai-landing.feature_desc1')}
                  </h6>
                </div>
              </Box>
            </Grid>
          </Grid>
        </div>
        <div className={classes.item}>
          <Grid container alignItems="center">
            <Grid item md={6} xs={12}>
              <Box px={{ sm: 4 }}>
                <div className={classes.desc}>
                  <TitleSecondary
                    text={t('ai-landing.feature_title2')}
                    color="secondary"
                    align={isMobile ? 'center' : 'right'}
                  />
                  <h6 className={cx(text.subtitle2, isMobile ? align.textCenter : align.textRight)}>
                    {t('ai-landing.feature_desc2')}
                  </h6>
                </div>
              </Box>
            </Grid>
            <Grid item md={6} xs={12}>
              <Box px={{ sm: 5 }}>
                <ScrollAnimation
                  animateOnce
                  animateIn="fadeInRightShort"
                  offset={200}
                  delay={500}
                  duration={0.5}
                >
                  <div className={classes.illustration}>
                    <figure>
                      <img
                        src={imgAPI.ai[16]}
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
            <Grid item md={6} xs={12}>
              <Box px={{ sm: 4 }}>
                <ScrollAnimation
                  animateOnce
                  animateIn="fadeInLeftShort"
                  offset={100}
                  delay={500}
                  duration={0.5}
                >
                  <div className={classes.illustration}>
                    <figure>
                      <img
                        src={imgAPI.ai[17]}
                        alt="illustration"
                      />
                    </figure>
                  </div>
                </ScrollAnimation>
              </Box>
            </Grid>
            <Grid item md={6} xs={12}>
              <Box px={{ sm: 4 }}>
                <div className={classes.desc}>
                  <TitleSecondary
                    text={t('ai-landing.feature_title3')}
                    align={isMobile ? 'center' : 'left'}
                  />
                  <h6 className={cx(text.subtitle2, isMobile ? align.textCenter : align.textLeft)}>
                    {t('ai-landing.feature_desc3')}
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
