import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'next-i18next';
import { useText } from 'theme/common';
import imgAPI from 'public/images/imgAPI';
import ParallaxTitle from '../../Title/ParallaxTitle';
import useStyles from './about-style';

function Culture() {
  const { cx, classes } = useStyles();
  const theme = useTheme();
  const { classes: text } = useText();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const { t } = useTranslation('common');

  return (
    <Container className={classes.culture}>
      <ParallaxTitle
        bgTitle={t('culture_bgtitle')}
        mainTitle={t('culture_title')}
        color={theme.palette.mode === 'dark' ? 'tripleMain' : 'tripleLight'}
      />
      <Grid container spacing={isMobile ? 2 : 6} direction={isMobile ? 'column-reverse' : 'row'}>
        <Grid className={classes.collagesWrap} item md={6} xs={12}>
          <div className={classes.collages}>
            <Box sx={{ mt: 15 }}>
              <ScrollAnimation
                animateOnce
                animateIn="flipInY"
                offset={100}
                delay={100}
                duration={0.5}
              >
                <figure>
                  <img src={imgAPI.photosL[15]} alt="collage" />
                </figure>
              </ScrollAnimation>
              <ScrollAnimation
                animateOnce
                animateIn="flipInY"
                offset={100}
                delay={300}
                duration={0.5}
              >
                <figure>
                  <img src={imgAPI.photosL[22]} alt="collage" />
                </figure>
              </ScrollAnimation>
            </Box>
            <Box sx={{ mt: 7 }}>
              <ScrollAnimation
                animateOnce
                animateIn="flipInY"
                offset={100}
                delay={500}
                duration={0.5}
              >
                <figure>
                  <img src={imgAPI.photosP[17]} alt="collage" />
                </figure>
              </ScrollAnimation>
              <ScrollAnimation
                animateOnce
                animateIn="flipInY"
                offset={100}
                delay={700}
                duration={0.5}
              >
                <figure>
                  <img src={imgAPI.photosS[10]} alt="collage" />
                </figure>
              </ScrollAnimation>
            </Box>
            <Box>
              <ScrollAnimation
                animateOnce
                animateIn="flipInY"
                offset={100}
                delay={900}
                duration={0.5}
              >
                <figure>
                  <img src={imgAPI.photosP[31]} alt="collage" />
                </figure>
              </ScrollAnimation>
              <ScrollAnimation
                animateOnce
                animateIn="flipInY"
                offset={100}
                delay={1100}
                duration={0.5}
              >
                <figure>
                  <img src={imgAPI.photosS[11]} alt="collage" />
                </figure>
              </ScrollAnimation>
            </Box>
          </div>
        </Grid>
        <Grid item sm={6} xs={12}>
          <Box sx={{ pt: { md: 10 } }}>
            <Typography className={cx(text.subtitle2, text.medium)}>
              {t('culture_subtitle')}
            </Typography>
            <Typography component="p">
              {t('culture_desc1')}
            </Typography>
            <Typography component="p">
              {t('culture_desc2')}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Culture;
