import React from 'react';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTranslation } from 'next-i18next';
import { useText } from 'theme/common';
import imgAPI from 'public/images/imgAPI';
import link from 'public/text/link';
import ArrowButton from '../../Forms/ArrowButton/Standard';
import SingleCard from '../../Cards/Apps/SingleCard';
import Title from '../../Title';
import useStyles from './services-style';

function Single() {
  const { cx, classes } = useStyles();
  const { classes: text } = useText();
  const { t } = useTranslation('common');

  const isTablet = useMediaQuery(theme => theme.breakpoints.between('sm', 'md'));
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('sm'));

  return (
    <Container className={classes.root}>
      <Grid container spacing={isMobile ? 0 : 4} sx={{ mt: { md: 10 } }}>
        <Grid item md={8} xs={12}>
          <Title text={t('service_alacarte_title')} />
          <p className={cx(text.subtitle2)}>
            {t('service_alacarte_desc')}
          </p>
          <Grid container sx={{ mt: { sm: 5, xs: 3 } }} spacing={isMobile ? 0 : 4}>
            <Grid item sm={6} xs={12}>
              {!isTablet && (
                <ScrollAnimation
                  animateOnce
                  animateIn="fadeInLeftShort"
                  offset={100}
                  delay={0}
                  duration={0.5}
                >
                  <ArrowButton href={link.contact} color="accent" text={t('service_btn_arrow1')} />
                </ScrollAnimation>
              )}
              <ScrollAnimation
                animateOnce
                animateIn="fadeInUpShort"
                offset={100}
                delay={100}
                duration={0.5}
              >
                <SingleCard
                  title="Mobile App Development"
                  desc="Vestibulum consequat hendrerit a massa vestibulum. Nam vitae scelerisque lorem, quis tempus libero."
                  img={imgAPI.inner[18]}
                  color="accent"
                  href={link.serviceDetail}
                />
              </ScrollAnimation>
              <ScrollAnimation
                animateOnce
                animateIn="fadeInUpShort"
                offset={100}
                delay={300}
                duration={0.5}
              >
                <SingleCard
                  title="Blockchain Project"
                  desc="Vestibulum consequat hendrerit a massa vestibulum. Nam vitae scelerisque lorem, quis tempus libero."
                  img={imgAPI.inner[14]}
                  bordered
                  color="secondary"
                  href={link.serviceDetail}
                />
              </ScrollAnimation>
            </Grid>
            <Grid item sm={6} xs={12}>
              <ScrollAnimation
                animateOnce
                animateIn="fadeInUpShort"
                offset={100}
                delay={500}
                duration={0.5}
              >
                <SingleCard
                  title="UI & UX Design Development"
                  desc="Vestibulum consequat hendrerit a massa vestibulum. Nam vitae scelerisque lorem, quis tempus libero."
                  img={imgAPI.inner[15]}
                  color="primary"
                  href={link.serviceDetail}
                />
              </ScrollAnimation>
              <ScrollAnimation
                animateOnce
                animateIn="fadeInUpShort"
                offset={100}
                delay={700}
                duration={0.5}
              >
                <SingleCard
                  title="SEO and Marketing"
                  desc="Vestibulum consequat hendrerit a massa vestibulum. Nam vitae scelerisque lorem, quis tempus libero."
                  img={imgAPI.inner[13]}
                  bordered
                  color="secondary"
                  href={link.serviceDetail}
                />
              </ScrollAnimation>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={4} xs={12}>
          <Grid container spacing={isTablet ? 4 : 0}>
            <Grid item md={12} sm={6} xs={12}>
              <ScrollAnimation
                animateOnce
                animateIn="fadeInUpShort"
                offset={100}
                delay={900}
                duration={0.5}
              >
                <SingleCard
                  title="Website Development"
                  desc="Vestibulum consequat hendrerit a massa vestibulum. Nam vitae scelerisque lorem, quis tempus libero."
                  img={imgAPI.inner[16]}
                  color="secondary"
                  href={link.serviceDetail}
                />
              </ScrollAnimation>
            </Grid>
            <Grid item md={12} sm={6} xs={12}>
              <ScrollAnimation
                animateOnce
                animateIn="fadeInUpShort"
                offset={100}
                delay={1100}
                duration={0.5}
              >
                <SingleCard
                  title="QA and Tester Engineering"
                  desc="Vestibulum consequat hendrerit a massa vestibulum. Nam vitae scelerisque lorem, quis tempus libero."
                  img={imgAPI.inner[17]}
                  bordered
                  color="accent"
                  href={link.serviceDetail}
                />
              </ScrollAnimation>
            </Grid>
            <Grid item md={12} sm={6} xs={12}>
              <ScrollAnimation
                animateOnce
                animateIn="fadeInLeftShort"
                offset={100}
                delay={1100}
                duration={0.5}
              >
                <ArrowButton color="secondary" href={link.product} text={t('service_btn_arrow2')} />
              </ScrollAnimation>
            </Grid>
            <Grid item md={12} sm={6} xs={12}>
              <ScrollAnimation
                animateOnce
                animateIn="fadeInLeftShort"
                offset={100}
                delay={1100}
                duration={0.5}
              >
                <ArrowButton color="primary" href={link.portfolio} text={t('service_btn_arrow3')} />
              </ScrollAnimation>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Single;
