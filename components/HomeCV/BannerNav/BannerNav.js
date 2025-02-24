import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'next-i18next';
import imgAPI from 'public/images/imgAPI';
import brand from 'public/text/brand';
import { useText } from 'theme/common';
import SideNavigation from '../SideNavigation';
import Settings from '../../Header/TopNav/Settings';
import Animation from '../../HeroBanner/Animation';
import AnimationSlideshow from '../../HeroBanner/AnimationSlideshow';
import Slideshow from '../../HeroBanner/Slideshow';
import VideoHero from '../../HeroBanner/Video';
import useStyles from './banner-style';

function BannerNav(props) {
  const { classes: text } = useText();
  const { classes } = useStyles();
  const [bannerHero] = useState('image');
  const isTablet = useMediaQuery(theme => theme.breakpoints.down('lg'));
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('md'));

  const { t } = useTranslation('common');
  const {
    onToggleDark,
    onToggleDir,
    menu
  } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        {!isTablet && (
          <Grid item lg={1} xs={12}>
            <SideNavigation navMenu={menu} />
          </Grid>
        )}
        <Grid item lg={11} xs={12}>
          <div className={classes.banner}>
            <div className={classes.cover}>
              <div className={classes.figure}>
                { bannerHero === 'image' && <div className={classes.img} style={{ backgroundImage: `url(${imgAPI.photosL[10]})` }} /> }
                { bannerHero === 'video' && <VideoHero /> }
                { bannerHero === 'animation' && <Animation /> }
                { bannerHero === 'animation-slide' && <AnimationSlideshow /> }
                { bannerHero === 'slideshow' && <Slideshow /> }
              </div>
            </div>
            {!isTablet && (
              <div className={classes.settingIcon}>
                <Settings toggleDark={onToggleDark} toggleDir={onToggleDir} />
              </div>
            )}
            <div className={classes.text}>
              <Typography variant="h4" className={text.title2}>
                {t('profile.banner_greeting')}
                ,
              </Typography>
              <Typography variant="h2" className={text.title}>
                {t('profile.banner_iam')}
                &nbsp;
                {brand.profileName}
                ,&nbsp;
                {brand.profileTitle}
              </Typography>
              {!isMobile && (
                <Fragment>
                  <Typography variant="h5" className={text.subtitle2}>
                    {t('profile.about_desc1')}
                  </Typography>
                  <div className={classes.socmed}>
                    <IconButton aria-label="Delete" className={classes.margin} size="small">
                      <i className="ion-logo-facebook" />
                    </IconButton>
                    <IconButton aria-label="Delete" className={classes.margin} size="small">
                      <i className="ion-logo-twitter" />
                    </IconButton>
                    <IconButton aria-label="Delete" className={classes.margin} size="small">
                      <i className="ion-logo-instagram" />
                    </IconButton>
                    <IconButton aria-label="Delete" className={classes.margin} size="small">
                      <i className="ion-logo-linkedin" />
                    </IconButton>
                    <Button variant="outlined" className={classes.download} component="a">Download CV</Button>
                  </div>
                </Fragment>
              )}
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

BannerNav.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
  menu: PropTypes.array.isRequired,
};

export default BannerNav;
