import React, { useState } from 'react';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'next-i18next';
import { useText } from 'theme/common';
import useStyles from './styles/progress-style';

function Progress() {
  const { classes, cx } = useStyles();
  const { classes: text } = useText();

  const { t } = useTranslation('common');

  const [play, setPlay] = useState(false);

  const handlePlay = visible => {
    if (visible.inViewport) {
      setTimeout(() => { setPlay(true); }, 500);
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.wrap}>
        <Typography variant="h5" className={cx(classes.title, text.subtitle)}>
          {t('avatar.stats_subtitle1')}
        </Typography>
        <ScrollAnimation
          animateOnce
          animateIn="fadeIn"
          delay={400}
          duration={0.3}
          afterAnimatedIn={handlePlay}
        >
          &nbsp;
        </ScrollAnimation>
        <ul>
          <li>
            <div className={classes.icon}>
              <i className="ion-md-play" />
            </div>
            <div className={classes.progress}>
              <div className={classes.text}>
                <Typography component="p">Play game 10 days in a row</Typography>
                <Typography component="p">7/10</Typography>
              </div>
              <LinearProgress
                variant="determinate"
                value={play ? 80 : 0}
                classes={{
                  root: classes.progressBg,
                  bar: classes.bar
                }}
              />
            </div>
          </li>
          <li>
            <div className={classes.icon}>
              <i className="ion-ios-apps" />
            </div>
            <div className={classes.progress}>
              <div className={classes.text}>
                <Typography component="p">Play game 10 days in a row</Typography>
                <Typography component="p">7/10</Typography>
              </div>
              <LinearProgress
                variant="determinate"
                value={play ? 70 : 0}
                classes={{
                  root: classes.progressBg,
                  bar: classes.bar
                }}
              />
            </div>
          </li>
          <li>
            <div className={classes.icon}>
              <i className="ion-md-person" />
            </div>
            <div className={classes.progress}>
              <div className={classes.text}>
                <Typography component="p">Play game 10 days in a row</Typography>
                <Typography component="p">7/10</Typography>
              </div>
              <LinearProgress
                variant="determinate"
                value={play ? 60 : 0}
                classes={{
                  root: classes.progressBg,
                  bar: classes.bar
                }}
              />
            </div>
          </li>
          <li>
            <div className={classes.icon}>
              <i className="ion-md-heart" />
            </div>
            <div className={classes.progress}>
              <div className={classes.text}>
                <Typography component="p">Play game 10 days in a row</Typography>
                <Typography component="p">7/10</Typography>
              </div>
              <LinearProgress
                variant="determinate"
                value={play ? 90 : 0}
                classes={{
                  root: classes.progressBg,
                  bar: classes.bar
                }}
              />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Progress;
