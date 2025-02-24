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

  const isDesktop = useMediaQuery(theme => theme.breakpoints.up('md'));

  const { t } = useTranslation('common');

  return (
    <Container>
      <ParallaxTitle
        bgTitle={t('nft2.sell_bgtitle')}
        mainTitle={t('nft2.sell_title')}
        color="doubleMain"
      />
      <Grid container className={classes.step} spacing={isDesktop ? 6 : 0}>
        <Grid item sm={4}>
          <div className={classes.item}>
            <div className={classes.icon}>
              <div className={classes.center}>
                <Icons3d icon="mdi-image-multiple" color="secondaryDouble" />
              </div>
              <div className={classes.left}>
                <Icons3d icon="mdi-cog" color="primary" />
              </div>
              <div className={classes.right}>
                <Icons3d icon="mdi-plus-thick" color="accent" />
              </div>
            </div>
            <div className={cx(classes.glow, classes.primary)}>
              <Typography variant="h6" className={text.subtitle2}>
                {t('nft2.step_title1')}
              </Typography>
              <Typography component="p" className={text.paragraph}>
                {t('nft2.step_desc1')}
              </Typography>
            </div>
            <hr className={cx(classes.divider, classes.primary)} />
          </div>
        </Grid>
        <Grid item sm={4}>
          <div className={classes.item}>
            <div className={classes.icon}>
              <div className={classes.center}>
                <Icons3d icon="mdi-arrow-up-circle" color="primaryDouble" />
              </div>
              <div className={classes.left}>
                <Icons3d icon="mdi-hexagon" color="accent" />
              </div>
              <div className={classes.right}>
                <Icons3d icon="mdi-source-branch" color="secondary" />
              </div>
            </div>
            <div className={cx(classes.glow, classes.secondary)}>
              <Typography variant="h6" className={text.subtitle2}>
                {t('nft2.step_title2')}
              </Typography>
              <Typography component="p" className={text.paragraph}>
                {t('nft2.step_desc2')}
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
                <Icons3d icon="mdi-chart-timeline-variant" color="primary" />
              </div>
              <div className={classes.right}>
                <Icons3d icon="mdi-tag" color="secondary" />
              </div>
            </div>
            <div className={cx(classes.glow, classes.accent)}>
              <Typography variant="h6" className={text.subtitle2}>
                {t('nft2.step_title3')}
              </Typography>
              <Typography component="p" className={text.paragraph}>
                {t('nft2.step_desc3')}
              </Typography>
            </div>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Step;
