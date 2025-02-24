import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTranslation } from 'next-i18next';
import { useText } from 'theme/common';
import Icons3d from '../../Icons3d';
import ParallaxTitle from '../../Title/ParallaxTitle';
import useStyles from './step-style';

function Step() {
  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  const { t } = useTranslation('common');
  const isDesktop = useMediaQuery(theme => theme.breakpoints.up('md'));

  return (
    <Container>
      <ParallaxTitle
        bgTitle={t('ai-landing.discover_bgtitle')}
        mainTitle={t('ai-landing.discover_title')}
        color="doubleMain"
      />
      <Grid container className={classes.step} spacing={isDesktop ? 6 : 0}>
        <Grid item sm={4} xs={12}>
          <div className={classes.item}>
            <div className={classes.icon}>
              <div className={classes.center}>
                <Icons3d icon="mdi-ansible" color="primaryDouble" />
              </div>
              <div className={classes.left}>
                <Icons3d icon="mdi-comment-text" color="accent" />
              </div>
              <div className={classes.right}>
                <Icons3d icon="mdi-shield-check-outline" color="secondary" />
              </div>
            </div>
            <div className={cx(classes.glow, classes.primary)}>
              <Typography variant="h6" className={text.subtitle2}>
                {t('ai-landing.step_title1')}
              </Typography>
              <Typography component="p" className={text.paragraph}>
                {t('ai-landing.step_desc1')}
              </Typography>
            </div>
            <hr className={cx(classes.divider, classes.primary)} />
          </div>
        </Grid>
        <Grid item sm={4} xs={12}>
          <div className={classes.item}>
            <div className={classes.icon}>
              <div className={classes.center}>
                <Icons3d icon="mdi-collage" color="secondaryDouble" />
              </div>
              <div className={classes.left}>
                <Icons3d icon="mdi-nut" color="primary" />
              </div>
              <div className={classes.right}>
                <Icons3d icon="mdi-tooltip-image" color="accent" />
              </div>
            </div>
            <div className={cx(classes.glow, classes.secondary)}>
              <Typography variant="h6" className={text.subtitle2}>
                {t('ai-landing.step_title2')}
              </Typography>
              <Typography component="p" className={text.paragraph}>
                {t('ai-landing.step_desc2')}
              </Typography>
            </div>
            <hr className={cx(classes.divider, classes.secondary)} />
          </div>
        </Grid>
        <Grid item sm={4} xs={12}>
          <div className={classes.item}>
            <div className={classes.icon}>
              <div className={classes.center}>
                <Icons3d icon="mdi-cog" color="accentDouble" />
              </div>
              <div className={classes.left}>
                <Icons3d icon="mdi-hammer-screwdriver" color="primary" />
              </div>
              <div className={classes.right}>
                <Icons3d icon="mdi-code-braces-box" color="secondary" />
              </div>
            </div>
            <div className={cx(classes.glow, classes.accent)}>
              <Typography variant="h6" className={text.subtitle2}>
                {t('ai-landing.step_title3')}
              </Typography>
              <Typography component="p" className={text.paragraph}>
                {t('ai-landing.step_desc3')}
              </Typography>
            </div>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Step;
