import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTranslation } from 'next-i18next';
import { useText, useTextAlign } from 'theme/common';
import useStyles from './services-style';
import Title from '../../Title';
import IconCard from '../../Cards/Info/IconCard';

const items = [
  {
    icon: 'mdi-monitor-shimmer',
    text: 'Website Design',
  },
  {
    icon: 'mdi-cloud-outline',
    text: 'Hosting',
  },
  {
    icon: 'mdi-chart-bar',
    text: 'Big Data Analysis',
  },
  {
    icon: 'mdi-file-document-outline',
    text: 'Reporting',
  },
  {
    icon: 'mdi-bullseye-arrow',
    text: 'Digital Strategy',
  },
  {
    icon: 'mdi-briefcase-outline',
    text: 'Business Consulting',
  },
];

function Categories() {
  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  const { classes: align } = useTextAlign();
  const { t } = useTranslation('common');

  const isDesktop = useMediaQuery(theme => theme.breakpoints.up('lg'));

  return (
    <div className={classes.root}>
      <Container fixed={isDesktop}>
        <Title text={t('service_bundle_title')} align="center" />
        <p className={cx(align.textCenter, text.subtitle2)}>{t('service_banner_title')}</p>
        <Grid container spacing={2} sx={{ mt: 5 }}>
          {items.map((item, index) => (
            <Grid key={index.toString()} item md={2} sm={4} xs={6}>
              <IconCard href="#" icon={item.icon} text={item.text} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default Categories;
