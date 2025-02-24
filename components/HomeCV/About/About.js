import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useTranslation } from 'next-i18next';
import imgAPI from 'public/images/imgAPI';
import brand from 'public/text/brand';
import { useText, useTextAlign, useTextGradient } from 'theme/common';
import ParallaxRight from '../Parallax/ParallaxRight';
import AppCard from '../../Cards/Thumbnail/PreviewCard';
import ParallaxTitle from '../../Title/ParallaxTitle';
import useStyles from './about-style';

function MainFeature() {
  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  const { classes: align } = useTextAlign();
  const { classes: gradient } = useTextGradient();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  const { t } = useTranslation('common');

  const profileList = [
    {
      icon: 'ion-md-contact',
      text: 'Senior UI UX Designer',
      color: 'primaryLight',
    },
    {
      icon: 'ion-ios-briefcase',
      text: 'Work at Lorem Company ',
      color: 'secondaryLight',
    },
    {
      icon: 'ion-ios-school',
      text: 'Alumni from Lipsum University',
      color: 'primaryLight',
    },
    {
      icon: 'ion-md-globe',
      text: 'From England',
      color: 'secondaryLight',
    },
    {
      icon: 'ion-md-checkmark-circle-outline',
      text: 'Verified Account',
      color: 'primaryLight',
    },
    {
      icon: 'ion-ios-radio-button-on',
      text: 'Available for Hire',
      color: 'success',
    }
  ];
  const gameHighlight = [
    {
      img: imgAPI.photosP[26],
      icon: imgAPI.logos[34]
    },
    {
      img: imgAPI.photosP[27],
      icon: imgAPI.logos[36]
    },
    {
      img: imgAPI.photosS[7],
      icon: imgAPI.logos[31]
    },
  ];
  return (
    <div className={classes.about}>
      <ParallaxRight />
      <ParallaxTitle
        bgTitle={t('profile.about_bgtitle')}
        mainTitle={t('profile.about_title')}
        color={theme.palette.mode === 'dark' ? 'doubleMain' : 'doubleLight'}
      />
      <Container fixed sx={{ mt: { md: 15 } }}>
        <Grid container spacing={6}>
          {!isTablet && (
            <Grid item lg={1} xs={12}>
              <Typography variant="h2" className={classes.nameDeco}>
                {brand.profileName}
              </Typography>
            </Grid>
          )}
          <Grid item lg={7} md={8} xs={12}>
            <div className={cx(isMobile ? align.textCenter : align.textLeft, text.subtitle2)}>
              <Box component="p" sx={{ mb: { md: 5 } }}>
                {t('profile.about_desc1')}
&nbsp;
                {t('profile.about_desc2')}
              </Box>
              <Box component="p" sx={{ mb: { md: 5 } }}>
                {t('profile.pricing_desc1')}
&nbsp;
                {t('profile.pricing_desc2')}
              </Box>
            </div>
            <Grid
              container
              alignItems={isTablet ? 'flex-end' : 'flex-start'}
              sx={{ mt: 0 }}
              spacing={isMobile ? 2 : 6}
            >
              <Grid item lg={7} xs={12}>
                <Grid sx={{ px: 3 }} container className={classes.iconProfile} spacing={2}>
                  {profileList.map((item, index) => (
                    <Grid sx={{ mb: 3 }} className={classes.icon} key={index.toString()} item xs={4}>
                      <i className={cx(item.icon, gradient[item.color])} />
                      <Typography component="p">{item.text}</Typography>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
              {isDesktop && (
                <Grid item sm={5} xs={12}>
                  <AppCard
                    thumb={gameHighlight[0].img}
                    icon={gameHighlight[0].icon}
                  />
                </Grid>
              )}
            </Grid>
          </Grid>
          <Grid item lg={3} md={4} xs={12}>
            <Box sx={{ display: isMobile ? 'flex' : 'block' }}>
              <AppCard
                thumb={gameHighlight[1].img}
                icon={gameHighlight[1].icon}
              />
              <div className={classes.lower}>
                <AppCard
                  thumb={gameHighlight[2].img}
                  icon={gameHighlight[2].icon}
                />
              </div>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default MainFeature;
