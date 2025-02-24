import React from 'react';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useTranslation } from 'next-i18next';
import imgAPI from 'public/images/imgAPI';
import { useText } from 'theme/common';
import useStyles from './styles/history-style';

function History() {
  const { classes, cx } = useStyles();
  const { classes: text } = useText();

  const { t } = useTranslation('common');

  return (
    <div className={classes.root}>
      <div className={classes.history}>
        <Box sx={{ ml: -5, mb: 5 }}>
          <Typography variant="h5" className={cx(classes.title, text.subtitle)}>
            {t('avatar.stats_subtitle3')}
          </Typography>
        </Box>
        <ul>
          <li>
            <ScrollAnimation
              animateOnce
              animateIn="fadeInLeftShort"
              delay={200}
              duration={0.3}
            >
              <div className={classes.list}>
                <figure>
                  <img src={imgAPI.photosP[20]} alt="event" />
                </figure>
                <div>
                  <Typography variant="h3" gutterBottom className={text.subtitle2}>Creative Director</Typography>
                  <Typography gutterBottom>at Fourth Company</Typography>
                  <Typography className={classes.time}>2015 - Present</Typography>
                </div>
              </div>
            </ScrollAnimation>
          </li>
          <li>
            <ScrollAnimation
              animateOnce
              animateIn="fadeInLeftShort"
              offset={100}
              delay={300}
              duration={0.3}
            >
              <div className={classes.list}>
                <figure>
                  <img src={imgAPI.photosP[18]} alt="event" />
                </figure>
                <div>
                  <Typography variant="h3" gutterBottom className={text.subtitle2}>Senior UI/UX Designer</Typography>
                  <Typography gutterBottom>at Third Company</Typography>
                  <Typography className={classes.time}>2013 - 2015</Typography>
                </div>
              </div>
            </ScrollAnimation>
          </li>
          <li>
            <ScrollAnimation
              animateOnce
              animateIn="fadeInLeftShort"
              offset={200}
              delay={400}
              duration={0.3}
            >
              <div className={classes.list}>
                <figure>
                  <img src={imgAPI.photosL[30]} alt="event" />
                </figure>
                <div>
                  <Typography variant="h3" gutterBottom className={text.subtitle2}>UI/UX Designer</Typography>
                  <Typography gutterBottom>at Second Company</Typography>
                  <Typography className={classes.time}>2012 - 2013</Typography>
                </div>
              </div>
            </ScrollAnimation>
          </li>
          <li>
            <ScrollAnimation
              animateOnce
              animateIn="fadeInLeftShort"
              offset={300}
              delay={500}
              duration={0.3}
            >
              <div className={classes.list}>
                <figure>
                  <img src={imgAPI.photosL[1]} alt="event" />
                </figure>
                <div>
                  <Typography variant="h3" gutterBottom className={text.subtitle2}>UI/UX Designer</Typography>
                  <Typography gutterBottom>at First Company</Typography>
                  <Typography className={classes.time}>2009 - 2011</Typography>
                </div>
              </div>
            </ScrollAnimation>
          </li>
          <li>
            <ScrollAnimation
              animateOnce
              animateIn="fadeInLeftShort"
              offset={400}
              delay={600}
              duration={0.3}
            >
              <div className={classes.list}>
                <figure>
                  <img src={imgAPI.photosP[21]} alt="event" />
                </figure>
                <div>
                  <Typography variant="h3" gutterBottom className={text.subtitle2}>UI/UX Designer</Typography>
                  <Typography gutterBottom>at First Company</Typography>
                  <Typography className={classes.time}>2009 - 2011</Typography>
                </div>
              </div>
            </ScrollAnimation>
          </li>
          <li>
            <ScrollAnimation
              animateOnce
              animateIn="fadeInLeftShort"
              offset={400}
              delay={600}
              duration={0.3}
            >
              <div className={classes.list}>
                <figure>
                  <img src={imgAPI.photosL[27]} alt="event" />
                </figure>
                <div>
                  <Typography variant="h3" gutterBottom className={text.subtitle2}>UI/UX Designer</Typography>
                  <Typography gutterBottom>at First Company</Typography>
                  <Typography className={classes.time}>2009 - 2011</Typography>
                </div>
              </div>
            </ScrollAnimation>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default History;
