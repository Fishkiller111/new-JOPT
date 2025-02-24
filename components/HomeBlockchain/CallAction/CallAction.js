import React from 'react';
import { useTranslation } from 'next-i18next';
import Button from '@mui/material/Button';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import useMediaQuery from '@mui/material/useMediaQuery';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import imgAPI from 'public/images/imgAPI';
import link from 'public/text/link';
import { useText } from 'theme/common';
import LocaleLink from '../../Link';
import useStyles from './action-style';

function CallAction() {
  // Translation Function
  const { t } = useTranslation('common');
  const { classes: text } = useText();
  const isDesktop = useMediaQuery(theme => theme.breakpoints.up('lg'));
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('md'));

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
            <Grid container alignItems="flex-end">
              <Grid item lg={6} md={7} sm={12}>
                <h4 className={text.title2}>
                  {t('blockchain.cta_title')}
                </h4>
                <p className={text.subtitle2}>
                  {t('blockchain.cta_desc')}
                </p>
                <div className={classes.btnArea}>
                  <Button component={LocaleLink} size="large" to={link.register} color="black" variant="contained" className={classes.button}>
                    {t('btn_get')}
                  </Button>
                  <Button size="large" color="black" variant="outlined" href="#" className={classes.button}>
                    {t('btn_detail')}
                  </Button>
                </div>
              </Grid>
              {!isMobile && (
                <Grid item lg={6} md={5} sm={12}>
                  <img src={imgAPI.blockchain[15]} alt="action" />
                </Grid>
              )}
            </Grid>
          </div>
        </div>
      </ScrollAnimation>
    </Container>
  );
}

CallAction.propTypes = {

};

export default CallAction;
