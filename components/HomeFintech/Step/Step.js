import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTranslation } from 'next-i18next';
import { useText, useTextAlign } from 'theme/common';
import Icons3d from '../../Icons3d';
import Title from '../../Title';
import useStyles from './step-style';

function Step() {
  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  const { classes: align } = useTextAlign();
  const { t } = useTranslation('common');

  const isDesktop = useMediaQuery(theme => theme.breakpoints.up('md'));

  return (
    <Container>
      <Title
        align="center"
        text={t('fintech.step_title')}
      />
      <p className={cx(align.textCenter, text.subtitle2)}>
        {t('fintech.step_desc')}
      </p>
      <Grid container className={classes.step} spacing={isDesktop ? 6 : 0}>
        <Grid item sm={4}>
          <div className={classes.item}>
            <div className={classes.icon}>
              <div className={classes.center}>
                <Icons3d icon="mdi-download-circle" color="primaryDouble" />
              </div>
              <div className={classes.left}>
                <Icons3d icon="mdi-hexagon" color="accent" />
              </div>
              <div className={classes.right}>
                <Icons3d icon="mdi-shield-check-outline" color="secondary" />
              </div>
            </div>
            <div className={cx(classes.glow, classes.primary)}>
              <Typography variant="h6" className={text.subtitle2}>
                {t('fintech.step_title1')}
              </Typography>
              <Typography component="p" className={text.paragraph}>
                {t('fintech.step_desc1')}
              </Typography>
            </div>
            <hr className={cx(classes.divider, classes.primary)} />
          </div>
        </Grid>
        <Grid item sm={4}>
          <div className={classes.item}>
            <div className={classes.icon}>
              <div className={classes.center}>
                <Icons3d icon="mdi-bitcoin" color="secondaryDouble" />
              </div>
              <div className={classes.left}>
                <Icons3d icon="mdi-chart-bubble" color="primary" />
              </div>
              <div className={classes.right}>
                <Icons3d icon="mdi-plus-thick" color="accent" />
              </div>
            </div>
            <div className={cx(classes.glow, classes.secondary)}>
              <Typography variant="h6" className={text.subtitle2}>
                {t('fintech.step_title2')}
              </Typography>
              <Typography component="p" className={text.paragraph}>
                {t('fintech.step_desc2')}
              </Typography>
            </div>
            <hr className={cx(classes.divider, classes.secondary)} />
          </div>
        </Grid>
        <Grid item sm={4}>
          <div className={classes.item}>
            <div className={classes.icon}>
              <div className={classes.center}>
                <Icons3d icon="mdi-shopping" color="accentDouble" />
              </div>
              <div className={classes.left}>
                <Icons3d icon="mdi-music" color="primary" />
              </div>
              <div className={classes.right}>
                <Icons3d icon="mdi-folder-multiple-image" color="secondary" />
              </div>
            </div>
            <div className={cx(classes.glow, classes.accent)}>
              <Typography variant="h6" className={text.subtitle2}>
                {t('fintech.step_title3')}
              </Typography>
              <Typography component="p" className={text.paragraph}>
                {t('fintech.step_desc3')}
              </Typography>
            </div>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Step;
