import React from 'react';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import { useTranslation } from 'next-i18next';
import { useText, useTextAlign } from 'theme/common';
import imgAPI from 'public/images/imgAPI';
import link from 'public/text/link';
import GroupCard from '../../Cards/Apps/GroupCard';
import ParallaxTitle from '../../Title/ParallaxTitle';
import useStyles from './services-style';

function Group() {
  const { cx, classes } = useStyles();
  const theme = useTheme();
  const { classes: text } = useText();
  const { classes: align } = useTextAlign();
  const { t } = useTranslation('common');

  return (
    <Container className={classes.root}>
      <ParallaxTitle
        bgTitle={t('service_bgtitle')}
        mainTitle={t('service_bundle_title')}
        color={theme.palette.mode === 'dark' ? 'tripleDark' : 'tripleLight'}
      />
      <p className={cx(align.textCenter, text.subtitle2)}>
        {t('service_subtitle')}
      </p>
      <Grid container spacing={4} sx={{ mt: { md: 10, sm: 5 } }}>
        <Grid item md={8} xs={12}>
          <ScrollAnimation
            animateOnce
            animateIn="fadeInUpShort"
            offset={100}
            delay={500}
            duration={0.5}
          >
            <GroupCard
              title="Designs"
              desc="Vestibulum consequat hendrerit nam sollicitudin dignissim nunc. Nam sollicitudin dignissim nunc, cursus ullamcorper eros vulputate sed."
              color="primary"
              type="full"
              align="right"
              img={imgAPI.inner[10]}
              href={link.serviceDetail}
              darken
              items={[
                {
                  name: 'Logo & Branding',
                  icon: 'mdi-star-outline'
                },
                {
                  name: 'Apps Design',
                  icon: 'mdi-cellphone-cog'
                },
                {
                  name: 'Graphic Design',
                  icon: 'mdi-palette-outline'
                },
                {
                  name: 'Logo & Branding',
                  icon: 'mdi-monitor-shimmer'
                }
              ]}
            />
          </ScrollAnimation>
        </Grid>
        <Grid item md={4} xs={12}>
          <ScrollAnimation
            animateOnce
            animateIn="fadeInUpShort"
            offset={100}
            delay={700}
            duration={0.5}
          >
            <GroupCard
              title="Business"
              desc="Vestibulum consequat hendrerit nam sollicitudin dignissim nunc. Nam sollicitudin dignissim nunc."
              color="accent"
              href={link.serviceDetail}
              itemColor="primaryColor"
              items={[
                {
                  name: 'Digital Strategy',
                  icon: 'mdi-dice-5-outline'
                },
                {
                  name: 'Content Writing',
                  icon: 'mdi-pencil-box-multiple-outline'
                },
                {
                  name: 'Business Consulting',
                  icon: 'mdi-briefcase-outline'
                },
                {
                  name: 'Reporting',
                  icon: 'mdi-file-document-outline'
                }
              ]}
            />
          </ScrollAnimation>
        </Grid>
        <Grid item md={4} xs={12}>
          <ScrollAnimation
            animateOnce
            animateIn="fadeInUpShort"
            offset={100}
            delay={500}
            duration={0.5}
          >
            <GroupCard
              title="Technology"
              desc="Vestibulum consequat hendrerit nam sollicitudin dignissim nunc. Nam sollicitudin dignissim nunc."
              color="bright"
              href={link.serviceDetail}
              itemColor="secondaryColor"
              items={[
                {
                  name: 'Hosting',
                  icon: 'mdi-cloud-outline'
                },
                {
                  name: 'Big Data Analysis',
                  icon: 'mdi-chart-bar'
                }
              ]}
            />
          </ScrollAnimation>
        </Grid>
        <Grid item md={8} xs={12}>
          <ScrollAnimation
            animateOnce
            animateIn="fadeInUpShort"
            offset={100}
            delay={700}
            duration={0.5}
          >
            <GroupCard
              title="IT Development"
              desc="Vestibulum consequat hendrerit nam sollicitudin dignissim nunc. Nam sollicitudin dignissim nunc, cursus ullamcorper eros vulputate sed."
              color="secondary"
              type="full"
              img={imgAPI.inner[11]}
              href={link.serviceDetail}
              darken
              items={[
                {
                  name: 'Content Management',
                  icon: 'mdi-file-document-outline'
                },
                {
                  name: 'Mobile App Development',
                  icon: 'mdi-cellphone-cog'
                },
                {
                  name: 'Ecommerce',
                  icon: 'mdi-shopping-outline'
                },
              ]}
            />
          </ScrollAnimation>
        </Grid>
        <Grid item md={8} xs={12}>
          <ScrollAnimation
            animateOnce
            animateIn="fadeInUpShort"
            offset={100}
            delay={500}
            duration={0.5}
          >
            <GroupCard
              title="Online Marketing"
              desc="Vestibulum consequat hendrerit nam sollicitudin dignissim nunc. Nam sollicitudin dignissim nunc, cursus ullamcorper eros vulputate sed."
              color="accent"
              align="right"
              itemColor="accentColor"
              type="full"
              img={imgAPI.inner[8]}
              href={link.serviceDetail}
              items={[
                {
                  name: 'Pay Per Click',
                  icon: 'mdi-button-cursor'
                },
                {
                  name: 'SEO',
                  icon: 'mdi-card-search-outline'
                },
                {
                  name: 'Social Media Marketing',
                  icon: 'mdi-account-group-outline'
                },
                {
                  name: 'Display Marketing',
                  icon: 'mdi-monitor-dashboard'
                },
                {
                  name: 'Email Marketing',
                  icon: 'mdi-email-multiple-outline'
                },
              ]}
            />
          </ScrollAnimation>
        </Grid>
        <Grid item md={4} xs={12}>
          <ScrollAnimation
            animateOnce
            animateIn="fadeInUpShort"
            offset={100}
            delay={700}
            duration={0.5}
          >
            <GroupCard
              title="Content Strategy"
              desc="Vestibulum consequat hendrerit nam sollicitudin dignissim nunc."
              color="accent2"
              darken
              href={link.serviceDetail}
              items={[
                {
                  name: 'Marketing Flexibility',
                  icon: 'mdi-arrow-expand-all'
                },
                {
                  name: 'Web Audit Practices',
                  icon: 'mdi-web'
                },
                {
                  name: 'Advertising Strategy',
                  icon: 'mdi-monitor-shimmer'
                },
              ]}
            />
          </ScrollAnimation>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Group;
