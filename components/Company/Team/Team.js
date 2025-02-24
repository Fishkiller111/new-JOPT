import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'next-i18next';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import Scrollspy from 'react-scrollspy';
import imgAPI from 'public/images/imgAPI';
import link from 'public/text/link';
import Title from '../../Title';
import ProfileCard from '../../Cards/Profile/ProfileDecoCard';
import useStyles from './team-style';

function Team(props) {
  // Translation Function
  const { t } = useTranslation('common');
  const { classes, cx } = useStyles();
  const { bg } = props;
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('sm'));

  return (
    <div className={classes.root}>
      <div className={cx(classes.background, classes[bg])}>
        { bg === 'images' && (
          <Fragment>
            <Scrollspy
              className={classes.scrollBg}
              items={['big', 'medium', 'small']}
              currentClassName="active"
              offset={-30}
            >
              <li className={classes.bgBig}>
                <a href="#big">&nbsp;</a>
              </li>
              <li className={classes.bgMedium}>
                <a href="#medium">&nbsp;</a>
              </li>
              <li className={classes.bgSmall}>
                <a href="#small">&nbsp;</a>
              </li>
            </Scrollspy>
            <div className={classes.bgGradient} />
          </Fragment>
        )}
        { bg === 'parallax' && (
          <div className={classes.parallaxWrap}>
            <ParallaxProvider>
              <div className={cx(classes.innerParallax, classes.full)}>
                <Parallax translateY={[-50, 80]}>
                  <span className={cx(classes.oval, classes.big)}>
                    <span className={classes.gradient} />
                  </span>
                </Parallax>
                <Parallax translateY={[-40, 40]}>
                  <div className={classes.dots}>
                    <svg
                      fill="#cccccc"
                      width={845}
                      height={1099}
                      className={cx(classes.parallaxVertical, classes.parallaxDot)}
                    >
                      <use xlinkHref="/images/decoration/dot-deco.svg#dot" />
                    </svg>
                  </div>
                </Parallax>
              </div>
            </ParallaxProvider>
          </div>
        )}
        <Container>
          <Title text={t('team_title')} align="center" />
          <Grid className={classes.section} id="big" container spacing={isMobile ? 2 : 6} justifyContent="center">
            <Grid item md={10} xs={12}>
              <ProfileCard
                href={link.profile}
                size="big"
                avatar={imgAPI.avatar[26]}
                name="John Doe"
                title="Founder & CEO"
                desc="Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero. Quisque ut metus sit amet augue rutrum feugiat."
                socmed={['facebook', 'linkedin', 'twitter', 'instagram']}
              />
            </Grid>
          </Grid>
          <Grid className={classes.section} id="medium" container spacing={isMobile ? 2 : 6} justifyContent="center">
            <Grid item md={6} xs={12}>
              <ProfileCard
                href={link.profile}
                size="medium"
                avatar={imgAPI.avatar[18]}
                name="John Doe"
                title="Founder & CEO"
                desc="In vel pulvinar est, at euismod libero. Quisque ut metus sit amet augue rutrum feugiat."
                socmed={['facebook', 'linkedin', 'twitter', 'instagram']}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <ProfileCard
                href={link.profile}
                size="medium"
                avatar={imgAPI.avatar[24]}
                name="John Doe"
                title="Founder & CEO"
                desc="In vel pulvinar est, at euismod libero. Quisque ut metus sit amet augue rutrum feugiat."
                socmed={['facebook', 'linkedin', 'twitter', 'instagram']}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <ProfileCard
                href={link.profile}
                size="medium"
                avatar={imgAPI.avatar[23]}
                name="John Doe"
                title="Founder & CEO"
                desc="Cras convallis lacus orci, tristique tincidunt magna consequat in."
                socmed={['facebook', 'linkedin', 'twitter', 'instagram']}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <ProfileCard
                href={link.profile}
                size="medium"
                avatar={imgAPI.avatar[25]}
                name="John Doe"
                title="Founder & CEO"
                desc="Cras convallis lacus orci, tristique tincidunt magna consequat in."
                socmed={['facebook', 'linkedin', 'twitter', 'instagram']}
              />
            </Grid>
          </Grid>
          <Grid id="small" className={classes.section} container spacing={isMobile ? 2 : 6} justifyContent="center">
            <Grid item md={3} sm={4} xs={6}>
              <ProfileCard
                href={link.profile}
                size="small"
                avatar={imgAPI.avatar[0]}
                name="John Doe"
                title="Founder & CEO"
                socmed={['facebook', 'linkedin', 'twitter', 'instagram']}
              />
            </Grid>
            <Grid item md={3} sm={4} xs={6}>
              <ProfileCard
                href={link.profile}
                size="small"
                avatar={imgAPI.avatar[10]}
                name="John Doe"
                title="Founder & CEO"
                socmed={['facebook', 'linkedin', 'twitter', 'instagram']}
              />
            </Grid>
            <Grid item md={3} sm={4} xs={6}>
              <ProfileCard
                href={link.profile}
                size="small"
                avatar={imgAPI.avatar[2]}
                name="John Doe"
                title="Founder & CEO"
                socmed={['facebook', 'linkedin', 'twitter', 'instagram']}
              />
            </Grid>
            <Grid item md={3} sm={4} xs={6}>
              <ProfileCard
                href={link.profile}
                size="small"
                avatar={imgAPI.avatar[5]}
                name="John Doe"
                title="Founder & CEO"
                socmed={['facebook', 'linkedin', 'twitter', 'instagram']}
              />
            </Grid>
            <Grid item md={3} sm={4} xs={6}>
              <ProfileCard
                href={link.profile}
                size="small"
                avatar={imgAPI.avatar[7]}
                name="John Doe"
                title="Founder & CEO"
                socmed={['facebook', 'linkedin', 'twitter', 'instagram']}
              />
            </Grid>
            <Grid item md={3} sm={4} xs={6}>
              <ProfileCard
                href={link.profile}
                size="small"
                avatar={imgAPI.avatar[9]}
                name="John Doe"
                title="Founder & CEO"
                socmed={['facebook', 'linkedin', 'twitter', 'instagram']}
              />
            </Grid>
            <Grid item md={3} sm={4} xs={6}>
              <ProfileCard
                href={link.profile}
                size="small"
                avatar={imgAPI.avatar[4]}
                name="John Doe"
                title="Founder & CEO"
                socmed={['facebook', 'linkedin', 'twitter', 'instagram']}
              />
            </Grid>
            <Grid item md={3} sm={4} xs={6}>
              <ProfileCard
                href={link.profile}
                size="small"
                avatar={imgAPI.avatar[6]}
                name="John Doe"
                title="Founder & CEO"
                socmed={['facebook', 'linkedin', 'twitter', 'instagram']}
              />
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}

Team.propTypes = {
  bg: PropTypes.string,
};

Team.defaultProps = {
  bg: 'images'
};

export default Team;
