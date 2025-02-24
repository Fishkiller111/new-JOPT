import React from 'react';
import Container from '@mui/material/Container';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'next-i18next';
import { useText, useTextGradient } from 'theme/common';
import Title from '../../Title';
import useStyles from './about-style';

function KeyValues() {
  const { cx, classes } = useStyles();
  const { classes: text } = useText();
  const { classes: gradient } = useTextGradient();

  const { t } = useTranslation('common');

  return (
    <Container className={classes.values}>
      <div className={classes.title}>
        <div>
          <h1>3 Key Values</h1>
        </div>
      </div>
      <Grid container sx={{ px: { md: 5 } }} justifyContent="space-between">
        <Grid item md={3} xs={12}>
          <Title
            text={t('values_title')}
          />
          <ScrollAnimation
            animateOnce
            animateIn="fadeInLeftShort"
            offset={100}
            delay={0}
            duration={0.5}
          >
            <div className={classes.text}>
              <Typography sx={{ mb: 3 }} className={text.bold}>{t('about_key_subtitle')}</Typography>
              <Typography>
                {t('about_key_desc')}
              </Typography>
            </div>
          </ScrollAnimation>
        </Grid>
        <Grid item className={classes.keyGroup} md={6} xs={12}>
          <ScrollAnimation
            animateOnce
            animateIn="zoomInShort"
            offset={100}
            delay={100}
            duration={0.5}
          >
            <Paper className={classes.value}>
              <i className={cx(gradient.tripleLight, 'ion-ios-ionic')} />
              <strong className={cx(text.subtitle2, text.bold)}>{t('values_info_title1')}</strong>
              <p>{t('values_info_desc1')}</p>
            </Paper>
          </ScrollAnimation>
          <ScrollAnimation
            animateOnce
            animateIn="zoomInShort"
            offset={100}
            delay={500}
            duration={0.5}
          >
            <Box sx={{ display: { md: 'flex' }, justifyContent: 'flex-end' }}>
              <Paper className={classes.value}>
                <i className={cx(gradient.tripleLight, 'ion-ios-medical-outline')} />
                <strong className={cx(text.subtitle2, text.bold)}>{t('values_info_title2')}</strong>
                <p>{t('values_info_desc2')}</p>
              </Paper>
            </Box>
          </ScrollAnimation>
          <ScrollAnimation
            animateOnce
            animateIn="zoomInShort"
            offset={100}
            delay={700}
            duration={0.5}
          >
            <Paper className={classes.value}>
              <i className={cx(gradient.tripleLight, 'ion-ios-color-filter-outline')} />
              <strong className={cx(text.subtitle2, text.bold)}>{t('values_info_title3')}</strong>
              <p>{t('values_info_desc4')}</p>
            </Paper>
          </ScrollAnimation>
        </Grid>
      </Grid>
    </Container>
  );
}

export default KeyValues;
