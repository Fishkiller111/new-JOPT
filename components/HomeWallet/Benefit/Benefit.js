import React from 'react';
import { useTranslation } from 'next-i18next';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import imgAPI from 'public/images/imgAPI';
import { useText, useTextAlign } from 'theme/common';
import ParallaxTitle from '../../Title/ParallaxTitle';
import Icons3d from '../../Icons3d';
import useStyles from './benefit-style';

function Benefit() {
  // Translation Function
  const { t } = useTranslation('common');
  const { classes: text } = useText();
  const { classes: align } = useTextAlign();
  const isDesktop = useMediaQuery((theme) => theme.breakpoints.up('lg'));

  const { classes, cx } = useStyles();
  return (
    <Container className={classes.container} fixed={isDesktop} maxWidth="lg">
      <ParallaxTitle
        bgTitle={t('wallet.discover_bgtitle')}
        mainTitle={t('wallet.discover_title')}
        color="doubleMain"
      />
      <div className={classes.root}>
        <Container className={classes.decoWrap} fixed maxWidth="md">
          <div className={classes.deco}>
            <div className={cx(classes.orbit, classes.borderSecondary)}>
              <div className={cx(classes.inner, classes.borderSecondary)}>
                <svg className={classes.lineRound}>
                  <use xlinkHref="/images/decoration/line-round.svg#main" />
                </svg>
                <svg className={classes.lineRoundBig}>
                  <use xlinkHref="/images/decoration/line-round-big.svg#main" />
                </svg>
              </div>
            </div>
            <div className={cx(classes.orbit, classes.borderPrimary)}>
              <div className={cx(classes.inner, classes.borderPrimary)}>
                <svg className={classes.lineRound}>
                  <use xlinkHref="/images/decoration/line-round.svg#main" />
                </svg>
                <svg className={classes.lineRoundBig}>
                  <use xlinkHref="/images/decoration/line-round-big.svg#main" />
                </svg>
              </div>
            </div>
          </div>
        </Container>
        <Grid container alignItems="center">
          <Grid item md={3} sm={7} xs={12}>
            <ScrollAnimation
              animateOnce
              animateIn="fadeInRightShort"
              offset={100}
              delay={500}
              duration={0.5}
            >
              <ul className={cx(classes.list, classes.primary, align.textRight)}>
                <li className={text.textPrimary}>
                  <Icons3d icon="mdi-clock-time-eight-outline" color="primary" />
                  <Typography variant="h6" className={text.textPrimary}>{t('wallet.benefit_title1')}</Typography>
                  {t('wallet.benefit_desc1')}
                </li>
                <li>
                  <Icons3d icon="mdi-shield-lock" color="primary" />
                  <Typography variant="h6" className={text.textPrimary}>{t('wallet.benefit_title2')}</Typography>
                  {t('wallet.benefit_desc2')}
                </li>
                <li>
                  <Icons3d icon="mdi-check-circle" color="primary" />
                  <Typography variant="h6" className={text.textPrimary}>{t('wallet.benefit_title3')}</Typography>
                  {t('wallet.benefit_desc3')}
                </li>
              </ul>
            </ScrollAnimation>
          </Grid>
          <Grid item md={3} sm={5} xs={6}>
            <div className={classes.person}>
              <div className={cx(classes.background, classes.bgPrimary)}><span /></div>
              <span className={classes.img}>
                <img src={imgAPI.avatar[22]} alt="male" />
              </span>
            </div>
          </Grid>
          <Grid item md={3} sm={5} xs={6}>
            <div className={classes.person}>
              <div className={cx(classes.background, classes.bgSecondary)}>
                <span />
              </div>
              <span className={classes.img}>
                <img src={imgAPI.avatar[13]} alt="female" />
              </span>
            </div>
          </Grid>
          <Grid item md={3} sm={7} xs={12}>
            <ScrollAnimation
              animateOnce
              animateIn="fadeInLeftShort"
              offset={100}
              delay={500}
              duration={0.5}
            >
              <ul className={cx(classes.list, classes.secondary)}>
                <li>
                  <Icons3d icon="mdi-cog" color="secondary" />
                  <Typography variant="h6" className={text.textSecondary}>{t('wallet.benefit_title4')}</Typography>
                  {t('wallet.benefit_desc4')}
                </li>
                <li>
                  <Icons3d icon="mdi-emoticon" color="secondary" />
                  <Typography variant="h6" className={text.textSecondary}>{t('wallet.benefit_title5')}</Typography>
                  {t('wallet.benefit_desc5')}
                </li>
                <li>
                  <Icons3d icon="mdi-plus-circle" color="secondary" />
                  <Typography variant="h6" className={text.textSecondary}>{t('wallet.benefit_title6')}</Typography>
                  {t('wallet.benefit_desc6')}
                </li>
              </ul>
            </ScrollAnimation>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}

export default Benefit;
