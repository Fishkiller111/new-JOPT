import React from 'react';
import { useTranslation } from 'next-i18next';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import useMediaQuery from '@mui/material/useMediaQuery';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { useText } from 'theme/common';
import Logo from '../../Branding/Logo';
import useStyles from './action-style';

function CallAction() {
  // Translation Function
  const { t } = useTranslation('common');
  const { classes: text } = useText();
  const isDesktop = useMediaQuery(theme => theme.breakpoints.up('lg'));
  const isTablet = useMediaQuery(theme => theme.breakpoints.up('md'));

  const { classes } = useStyles();
  return (
    <Container fixed={isDesktop} maxWidth="lg">
      <ScrollAnimation
        animateOnce
        animateIn="fadeInUpShort"
        offset={100}
        delay={500}
        duration={0.5}
      >
        <div className={classes.action}>
          <div className={classes.wrap}>
            <Grid container>
              {isTablet && (
                <Grid item md={4} xs={12} display="flex" justifyContent="center">
                  <div className={classes.phone}>
                    <div>
                      <Logo type="portrait" />
                    </div>
                  </div>
                </Grid>
              )}
              <Grid item md={8} xs={12}>
                <h4 className={text.title2}>
                  {t('fintech.cta_title')}
                </h4>
                <p className={text.subtitle2}>
                  {t('fintech.cta_desc')}
                </p>
                <div className={classes.btnArea}>
                  <a href="#">
                    <img src="/images/wallet/app-store.png" alt="app store" />
                  </a>
                  <a href="#">
                    <img src="/images/wallet/play-store.png" alt="play store" />
                  </a>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </ScrollAnimation>
    </Container>
  );
}

export default CallAction;
