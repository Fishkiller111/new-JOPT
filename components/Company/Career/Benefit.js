import React from 'react';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { useTranslation } from 'next-i18next';
import { useText } from 'theme/common';
import imgAPI from 'public/images/imgAPI';
import link from 'public/text/link';
import LocaleLink from '../../Link';
import Icons3d from '../../Icons3d';
import Title from '../../Title';
import useStyles from './career-style';

const benefitList = [
  {
    icon: 'mdi-map-marker',
    color: 'pink',
    title: 'Working Remotely',
    desc: 'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat hendrerit lacus. ',
  },
  {
    icon: 'mdi-check-decagram-outline',
    color: 'cyan',
    title: 'Performance Bonus',
    desc: 'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat hendrerit lacus. ',
  },
  {
    icon: 'mdi-heart-outline',
    color: 'pink',
    title: 'Health & Insurance',
    desc: 'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat hendrerit lacus. ',
  },
  {
    icon: 'mdi-bookmark-box',
    color: 'orange',
    title: 'Continues Learning',
    desc: 'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat hendrerit lacus. ',
  },
  {
    icon: 'mdi-account-child-outline',
    color: 'purple',
    title: 'Parental Leave',
    desc: 'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat hendrerit lacus. ',
  },
  {
    icon: 'mdi-silverware-fork-knife',
    color: 'deepOrange',
    title: 'Free Lunch',
    desc: 'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat hendrerit lacus. ',
  }
];

function ChartPrice() {
  // Theme breakpoints
  const { classes: text } = useText();

  // Translation Function
  const { t } = useTranslation('common');
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('md'));

  const { classes, cx } = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Grid container spacing={6}>
          <Grid item md={5}>
            <Title dark text={t('career_benefit_title')} />
            <p className={text.subtitle2}>
              {t('career_benefit_desc')}
            </p>
            <p className={text.subtitle2}>
              {t('career_subtitle')}
            </p>
          </Grid>
          <Grid item md={7}>
            {benefitList.map((item, index) => (
              <div key={index.toString()}>
                <ScrollAnimation
                  animateOnce
                  animateIn="fadeInRightShort"
                  offset={50}
                  delay={500 + 100 * index}
                  duration={0.5}
                >
                  <div className={classes.benefit}>
                    <div className={cx(classes.bg, classes[item.color])}>
                      <Icons3d icon={item.icon} color={item.color} />
                    </div>
                    <div className={classes.text}>
                      <h3 className={text.subtitle2}>{item.title}</h3>
                      <p className={text.paragraph}>{item.desc}</p>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
            ))}
          </Grid>
        </Grid>
      </Container>
      <Container className={classes.bannerWrap}>
        <Grid container justifyContent="center">
          <Grid item lg={10} md={12} xs={12}>
            <ScrollAnimation
              animateOnce
              animateIn="fadeInUpShort"
              offset={100}
              delay={500}
              duration={0.5}
            >
              <div className={classes.banner}>
                <figure>
                  <img src={imgAPI.photosL[20]} alt="banner" />
                </figure>
                <h3>{t('about_quote')}</h3>
                <Button component={LocaleLink} className={classes.btn} to={link.about} variant="contained" size={isMobile ? 'small' : 'large'} color="secondaryLight">
                  {t('about_bgtitle')}
                </Button>
              </div>
            </ScrollAnimation>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default ChartPrice;
