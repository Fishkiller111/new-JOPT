import React from 'react';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Slider from 'dandelion-animated-slider';
import { useTranslation } from 'next-i18next';
import { useText } from 'theme/common';
import imgAPI from 'public/images/imgAPI';
import link from 'public/text/link';
import ParallaxTitle from '../../Title/ParallaxTitle';
import LocaleLink from '../../Link';
import useStyles from './event-slider-style';

const sliderData = [
  {
    image: imgAPI.photosL[3],
    subtitle: 'Vivamus sit amet',
    title: 'The Lorem Ipsum Dolor Sit',
    rating: 5,
    duration: '2h 15m',
    desc: 'Vestibulum faucibus eget erat eget pretium. Donec commodo convallis eget suscipit orci.'
  },
  {
    image: imgAPI.photosP[16],
    subtitle: 'Vivamus sit amet',
    title: 'The Lorem Ipsum Dolor Sit',
    rating: 5,
    duration: '2h 15m',
    desc: 'Vestibulum faucibus eget erat eget pretium. Donec commodo convallis eget suscipit orci.'
  },
  {
    image: imgAPI.photosP[20],
    subtitle: 'Vivamus sit amet',
    title: 'The Lorem Ipsum Dolor Sit',
    rating: 5,
    duration: '2h 15m',
    desc: 'Vestibulum faucibus eget erat eget pretium. Donec commodo convallis eget suscipit orci.'
  },
  {
    image: imgAPI.photosL[4],
    subtitle: 'Vivamus sit amet',
    title: 'The Lorem Ipsum Dolor Sit',
    rating: 5,
    duration: '2h 15m',
    desc: 'Vestibulum faucibus eget erat eget pretium. Donec commodo convallis eget suscipit orci.'
  }
];

function Feature() {
  const { classes, cx } = useStyles();
  const { classes: text } = useText();

  const { t } = useTranslation('common');

  return (
    <Container>
      <ParallaxTitle
        bgTitle={t('blockchain.event_bgtitle')}
        mainTitle={t('blockchain.event_title')}
        color="tripleLight"
      />
      <Grid container>
        <Grid item md={11} sm={12} xs={12}>
          <div className={classes.root}>
            <Typography className={classes.title} variant="h2">
              <span>Past</span>
              Events
            </Typography>
            <div className={classes.sliderWrap}>
              <Slider
                touchDisabled
                autoplay={7500}
                className="slider-wrapper"
                previousButton={(
                  <i className={cx(classes.arrowIcon, 'ion-md-arrow-forward')} />
                )}
                nextButton={(
                  <i className={cx(classes.arrowIcon, 'ion-md-arrow-forward')} />
                )}
              >
                {sliderData.map((item, index) => (
                  <div className={classes.item} key={index.toString()}>
                    <div className={classes.innerBg}>
                      <Grid container spacing={2} className={classes.row}>
                        <Grid item sm={6} xs={12}>
                          <div className={classes.text}>
                            <Typography variant="h4">
                              {item.title}
                              <span className={text.subtitle2}>{item.subtitle}</span>
                            </Typography>
                            <article className={classes.desc}>
                              <Typography className={text.paragraph}>
                                {item.desc}
                              </Typography>
                            </article>
                          </div>
                        </Grid>
                        <Grid item sm={6} xs={12}>
                          <div className={classes.image}>
                            <figure>
                              <img src={item.image} alt={item.title} />
                            </figure>
                            <article className={classes.btnArea}>
                              <Button variant="contained" component={LocaleLink} to={link.blogDetail} size="large" color="black">
                                {t('blockchain.event_stories')}
                              </Button>
                            </article>
                          </div>
                        </Grid>
                      </Grid>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Feature;
