import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import { useTranslation } from 'next-i18next';
import { useText } from 'theme/common';
import link from 'public/text/link';
import NumberCard from '../../Cards/Info/NumberCard';
import ArrowButton from '../../Forms/ArrowButton/Large';
import Title from '../../Title';
import useStyles from './services-style';

function Single() {
  const { cx, classes } = useStyles();
  const { classes: text } = useText();
  const { t } = useTranslation('common');

  const isMobile = useMediaQuery(theme => theme.breakpoints.down('sm'));

  return (
    <Container className={classes.root}>
      <Grid container spacing={isMobile ? 0 : 4}>
        <Grid item md={4} xs={12}>
          <Title text={t('values_title')} />
        </Grid>
        <Grid item md={7} xs={12}>
          <p className={cx(text.subtitle2)}>
            {t('values_subtitle')}
          </p>
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <ScrollAnimation
            animateOnce
            animateIn="fadeInLeftShort"
            offset={100}
            delay={100}
            duration={0.5}
          >
            <div>
              <NumberCard
                icon="ion-ios-radio-button-on"
                title={t('values_info_title1')}
                desc={t('values_info_desc2')}
                number="01"
                color="tripleDark"
              />
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animateOnce
            animateIn="fadeInLeftShort"
            offset={100}
            delay={300}
            duration={0.5}
          >
            <div>
              <NumberCard
                icon="ion-ios-medical-outline"
                title={t('values_info_title2')}
                desc={t('values_info_desc2')}
                number="02"
                color="tripleMain"
              />
            </div>
          </ScrollAnimation>
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <ScrollAnimation
            animateOnce
            animateIn="fadeInLeftShort"
            offset={100}
            delay={500}
            duration={0.5}
          >
            <div>
              <NumberCard
                icon="ion-ios-color-filter-outline"
                title={t('values_info_title3')}
                desc={t('values_info_desc3')}
                number="03"
                color="tripleLight"
              />
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animateOnce
            animateIn="fadeInLeftShort"
            offset={100}
            delay={700}
            duration={0.5}
          >
            <div>
              <NumberCard
                icon="ion-ios-sunny-outline"
                title={t('values_info_title4')}
                desc={t('values_info_desc4')}
                number="04"
                color="doubleMain"
              />
            </div>
          </ScrollAnimation>
        </Grid>
        <Grid item md={4} xs={12}>
          <div className={classes.action}>
            <ArrowButton href={link.contact} text={t('register_subtitle')} fullHeight />
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Single;
