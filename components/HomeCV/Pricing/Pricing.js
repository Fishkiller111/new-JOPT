import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useTranslation } from 'next-i18next';
import { useTextAlign } from 'theme/common';
import link from 'public/text/link';
import Icons3d from '../../Icons3d';
import PricingCard from '../../Cards/Pricing/PricingCard';
import ParallaxTitle from '../../Title/ParallaxTitle';
import TitleSecondary from '../../Title/TitleSecondary';
import useStyle from './pricing-style';

function Pricing() {
  // Theme breakpoints
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { classes } = useStyle();
  const { classes: align } = useTextAlign();

  // Translation function
  const { t } = useTranslation('common');

  return (
    <div className={classes.root}>
      <ParallaxTitle
        bgTitle={t('profile.pricing_bgtitle')}
        mainTitle={t('profile.pricing_title')}
        color={theme.palette.mode === 'dark' ? 'tripleDark' : 'tripleLight'}
      />
      <Container>
        <Grid container justifyContent={isMobile ? 'center' : 'flex-start'} spacing={isMobile ? 8 : 4}>
          <Grid item className={classes.item} md={4} sm={6} xs={12}>
            <ScrollAnimation
              animateOnce
              animateIn="fadeInUpShort"
              offset={100}
              delay={300}
              duration={0.5}
            >
              <div>
                <TitleSecondary text={t('profile.pricing_title1')} align={isMobile ? 'center' : 'left'} color="secondary" />
                <Typography className={isMobile ? align.textCenter : align.textLeft}>{t('profile.pricing_desc1')}</Typography>
                <PricingCard
                  color="secondary"
                  title="Fixed Project"
                  price="50"
                  description="Minimum fixed price budget"
                  features={[' Lorem ipsum dolor', 'Suspendisse sed urna', ' Cras convallis lacus orci', 'Quisque ut metus sit']}
                  buttonText={t('profile.banner_contact')}
                  href={link.contact}
                />
              </div>
            </ScrollAnimation>
          </Grid>
          <Grid
            item
            md={4}
            sm={6}
            xs={12}
          >
            <ScrollAnimation
              animateOnce
              animateIn="fadeInUpShort"
              offset={100}
              delay={500}
              duration={0.5}
            >
              <Box className={classes.item} sx={{ ml: { lg: -6 }, mt: { sm: 0, xs: -5 } }}>
                <PricingCard
                  color="primary"
                  title="Hourly Project"
                  price="20"
                  per="hr"
                  description="Minimum 8 hours"
                  features={[' Lorem ipsum dolor', 'Suspendisse sed urna', ' Cras convallis lacus orci', 'Quisque ut metus sit', 'Cras convallis lacus orci', 'Interdum et malesuada']}
                  buttonText={t('profile.banner_contact')}
                  href={link.contact}
                />
              </Box>
            </ScrollAnimation>
          </Grid>
          <Grid item md={4} sm={9} xs={12} sx={{ p: 0 }}>
            <ScrollAnimation
              animateOnce
              animateIn="fadeInLeftShort"
              offset={150}
              delay={700}
              duration={0.5}
            >
              <div>
                <TitleSecondary text={t('profile.pricing_title2')} align={isMobile ? 'center' : 'left'} color="primary" />
                <Typography className={isMobile ? align.textCenter : align.textLeft}>{t('profile.pricing_desc2')}</Typography>
                <ul className={classes.featureList}>
                  <li>
                    <div className={classes.primary}>
                      <Icons3d color="primary" icon="mdi-check-circle" />
                    </div>
                    <strong>{t('profile.pricing_icon_title1')}</strong>
                    <p>{t('profile.pricing_icon_desc1')}</p>
                  </li>
                  <li>
                    <div className={classes.secondary}>
                      <Icons3d color="secondary" icon="mdi-creation" />
                    </div>
                    <strong>{t('profile.pricing_icon_title2')}</strong>
                    <p>{t('profile.pricing_icon_desc2')}</p>
                  </li>
                  <li>
                    <div className={classes.accent}>
                      <Icons3d color="accent" icon="mdi-eye" />
                    </div>
                    <strong>{t('profile.pricing_icon_title3')}</strong>
                    <p>{t('profile.pricing_icon_desc3')}</p>
                  </li>
                  <li>
                    <div className={classes.primary}>
                      <Icons3d color="primary" icon="mdi-clock-time-eight-outline" />
                    </div>
                    <strong>{t('profile.pricing_icon_title4')}</strong>
                    <p>{t('profile.pricing_icon_desc4')}</p>
                  </li>
                </ul>
              </div>
            </ScrollAnimation>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Pricing;
