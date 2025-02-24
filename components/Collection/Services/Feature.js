import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import Grid from '@mui/material/Grid';
import { useTranslation } from 'next-i18next';
import { useTextAlign, useText } from 'theme/common';
import Title from '../../Title';
import Icons3d from '../../Icons3d';
import TitleSecondary from '../../Title/TitleSecondary';
import useStyles from './services-style';

function Feature() {
  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  const { classes: align } = useTextAlign();
  const theme = useTheme();

  const { t } = useTranslation('common');
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const isTablet = useMediaQuery(theme.breakpoints.up('sm'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div className={classes.root}>
      <Container fixed={isDesktop}>
        <Title text={t('service_feature')} align="center" />
        <Box mt={{ sm: 15 }} px={{ md: 5 }}>
          <div className={classes.itemText}>
            <Grid container spacing={isTablet ? 4 : 2} alignItems="center" direction={isMobile ? 'column-reverse' : 'row'}>
              <Grid item md={6} sm={4} xs={12}>
                <Box px={{ md: 4 }}>
                  <ScrollAnimation
                    animateOnce
                    animateIn="fadeInLeftShort"
                    offset={100}
                    delay={500}
                    duration={0.5}
                  >
                    <div className={isMobile ? align.textCenter : align.textRight}>
                      <div className={cx(classes.illustration, classes.primary)}>
                        <Icons3d icon="mdi-clock-time-eight-outline" color="primary" />
                      </div>
                    </div>
                  </ScrollAnimation>
                </Box>
              </Grid>
              <Grid item md={6} sm={8} xs={12}>
                <Box px={{ lg: 4 }}>
                  <div className={classes.desc}>
                    <TitleSecondary
                      text={t('service_estimation')}
                      color="primary"
                      align={isMobile ? 'center' : 'left'}
                    />
                    <p className={cx(text.subtitle2, isMobile ? align.textCenter : align.textLeft)}>
                      {t('auth_desc')}
                    </p>
                    <p className={cx(text.subtitle2, isMobile ? align.textCenter : align.textLeft)}>
                      {t('service_banner_title')}
                    </p>
                  </div>
                </Box>
              </Grid>
            </Grid>
          </div>
          <div className={classes.itemText}>
            <Grid container spacing={isTablet ? 4 : 2} alignItems="center">
              <Grid item md={6} sm={8} xs={12}>
                <Box px={{ lg: 4 }}>
                  <div className={classes.desc}>
                    <TitleSecondary
                      text={t('service_timeline')}
                      color="secondary"
                      align={isMobile ? 'center' : 'right'}
                    />
                    <p className={cx(text.subtitle2, isMobile ? align.textCenter : align.textRight)}>
                      {t('auth_desc')}
                    </p>
                    <p className={cx(text.subtitle2, isMobile ? align.textCenter : align.textRight)}>
                      {t('service_banner_title')}
                    </p>
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
                    <div className={isMobile ? align.textCenter : align.textLeft}>
                      <div className={cx(classes.illustration, classes.secondary)}>
                        <Icons3d icon="mdi-cloud" color="secondary" />
                      </div>
                    </div>
                  </ScrollAnimation>
                </Box>
              </Grid>
            </Grid>
          </div>
          <div className={cx(classes.itemText, classes.last)}>
            <Grid container spacing={isTablet ? 4 : 2} alignItems="center" direction={isMobile ? 'column-reverse' : 'row'}>
              <Grid item md={6} sm={4} xs={12}>
                <Box px={{ md: 4 }}>
                  <ScrollAnimation
                    animateOnce
                    animateIn="fadeInLeftShort"
                    offset={100}
                    delay={500}
                    duration={0.5}
                  >
                    <div className={isMobile ? align.textCenter : align.textRight}>
                      <div className={cx(classes.illustration, classes.accent)}>
                        <Icons3d icon="mdi-source-branch" color="accent" />
                      </div>
                    </div>
                  </ScrollAnimation>
                </Box>
              </Grid>
              <Grid item md={6} sm={8} xs={12}>
                <Box px={{ lg: 4 }}>
                  <div className={classes.desc}>
                    <TitleSecondary
                      text={t('values_title')}
                      color="accent"
                      align={isMobile ? 'center' : 'left'}
                    />
                    <p className={cx(text.subtitle2, isMobile ? align.textCenter : align.textLeft)}>
                      {t('values_info_desc1')}
                    </p>
                    <p className={cx(text.subtitle2, isMobile ? align.textCenter : align.textLeft)}>
                      {t('values_info_desc2')}
                    </p>
                  </div>
                </Box>
              </Grid>
            </Grid>
          </div>
        </Box>
      </Container>
    </div>
  );
}

export default Feature;
