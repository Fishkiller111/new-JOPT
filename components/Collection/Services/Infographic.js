import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import useMediaQuery from '@mui/material/useMediaQuery';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import Grid from '@mui/material/Grid';
import { useTranslation } from 'next-i18next';
import { useText, useTextAlign } from 'theme/common';
import IconCard from '../../Cards/Info/IconCard';
import Title from '../../Title';
import useStyles from './services-style';

const items = [
  {
    icon: 'mdi-pencil-box-multiple-outline',
    text: 'Source Code',
  },
  {
    icon: 'mdi-animation-outline',
    text: 'Technical Consulting',
  },
  {
    icon: 'mdi-file-document-outline',
    text: 'Documentation',
  },
  {
    icon: 'mdi-hand-extended-outline',
    text: '6 Month Support',
  },
  {
    icon: 'mdi-bullseye-arrow',
    text: 'Marketing',
  },
];

const RangeProgress = ({
 from, to, max, prefix, suffix
}) => {
  const { classes } = useStyles();
  const divider = max / 100;

  return (
    <div className={classes.rangeProgress}>
      <div className={classes.progressBg}>
        <div
          className={classes.range}
          style={{
            left: `${from / divider}%`,
            width: `${(to / divider) - (from / divider)}%`,
          }}
        >
          <span>
            {prefix}
            {from}
            {suffix}
          </span>
          <span>
            {prefix}
            {to}
            {suffix}
          </span>
        </div>
      </div>
    </div>
  );
};

RangeProgress.propTypes = {
  from: PropTypes.number.isRequired,
  to: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  prefix: PropTypes.string,
  suffix: PropTypes.string,
};

RangeProgress.defaultProps = {
  prefix: '',
  suffix: ''
};

function Infographic() {
  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  const { classes: align } = useTextAlign();

  const [play, setPlay] = useState(false);
  const [play2, setPlay2] = useState(false);

  const handlePlay = visible => {
    if (visible.inViewport) {
      setTimeout(() => { setPlay(true); }, 500);
    }
  };

  const handlePlay2 = visible => {
    if (visible.inViewport) {
      setTimeout(() => { setPlay2(true); }, 500);
    }
  };

  const isDesktop = useMediaQuery(theme => theme.breakpoints.up('lg'));
  const isTablet = useMediaQuery(theme => theme.breakpoints.up('sm'));
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('md'));

  const { t } = useTranslation('common');

  return (
    <Container fixed={isDesktop}>
      <Grid container justifyContent="center" sx={{ mb: { sm: 15, xs: 10 } }} spacing={!isTablet ? 2 : 6}>
        <Grid item md={5} sm={6} xs={12}>
          <Title strictAlign={isTablet} text={t('service_get')} />
          <p className={cx(text.subtitle2, !isTablet ? align.textCenter : '')}>
            {t('service_alacarte_desc')}
          </p>
        </Grid>
        <Grid item md={6} sm={6} xs={12}>
          <Grid container justifyContent={isTablet ? 'flex-start' : 'center'} spacing={2}>
            {items.map((item, index) => (
              <Grid item key={index.toString()} md={4} xs={6}>
                <ScrollAnimation
                  animateOnce
                  animateIn="fadeIn"
                  offset={100}
                  delay={500 + index * 100}
                  duration={0.5}
                >
                  <IconCard icon={item.icon} text={item.text} />
                </ScrollAnimation>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" spacing={!isTablet ? 2 : 6}>
        <Grid item md={5} xs={12} className={isMobile ? align.textCenter : align.textLeft}>
          <Title text={t('service_estimation')} />
          <p className={text.subtitle2}>
            {t('service_related_desc2')}
          </p>
          <p className={text.subtitle2}>
            {t('service_related_desc')}
          </p>
        </Grid>
        <Grid item md={6} sm={8} xs={12}>
          <Typography className={cx(text.subtitle, text.capitalize, isMobile ? align.textCenter : align.textLeft)}>
            {t('service_timeline')}
          </Typography>
          <ScrollAnimation
            animateOnce
            animateIn="fadeIn"
            delay={400}
            duration={0.3}
            afterAnimatedIn={handlePlay}
          >
            <Box my={5}>
              <div className={classes.progress}>
                <LinearProgress
                  variant="determinate"
                  value={play ? 25 : 0}
                  classes={{
                    root: classes.progressBg,
                    bar: classes.bar
                  }}
                />
                <div className={classes.text}>
                  <Typography component="p">Meeting</Typography>
                  <div className={align.textRight}>
                    <Typography component="h3">
                      1
                      <span>day</span>
                    </Typography>
                    10 business days/sprint
                  </div>
                </div>
              </div>
              <div className={classes.progress}>
                <LinearProgress
                  variant="determinate"
                  value={play ? 80 : 0}
                  classes={{
                    root: classes.progressBg,
                    bar: classes.bar
                  }}
                />
                <div className={classes.text}>
                  <Typography component="p">Development</Typography>
                  <div className={align.textRight}>
                    <Typography component="h3">
                      9
                      <span>day</span>
                    </Typography>
                    10 business days/sprint
                  </div>
                </div>
              </div>
              <div className={classes.progress}>
                <LinearProgress
                  variant="determinate"
                  value={play ? 50 : 0}
                  classes={{
                    root: classes.progressBg,
                    bar: classes.bar
                  }}
                />
                <div className={classes.text}>
                  <Typography component="p">Changes/Fixing</Typography>
                  <div className={align.textRight}>
                    <Typography component="h3">
                      5
                      <span>day</span>
                    </Typography>
                    10 business days/sprint
                  </div>
                </div>
              </div>
            </Box>
          </ScrollAnimation>
          <Typography className={cx(text.subtitle, text.capitalize, isMobile ? align.textCenter : align.textLeft)}>
            {t('service_budget')}
          </Typography>
          <ScrollAnimation
            animateOnce
            animateIn="fadeIn"
            delay={400}
            duration={0.3}
            afterAnimatedIn={handlePlay2}
          >
            <Box mt={10}>
              <Box mt={10} className={classes.progress}>
                <RangeProgress
                  from={250}
                  to={play2 ? 900 : 250}
                  max={1000}
                  prefix="$"
                />
                <div className={classes.text}>
                  <Typography component="p">Per sprint</Typography>
                  <Typography component="p">$1K</Typography>
                </div>
              </Box>
              <Box mt={10} className={classes.progress}>
                <RangeProgress
                  from={10}
                  to={play2 ? 75 : 10}
                  max={100}
                  prefix="$"
                />
                <div className={classes.text}>
                  <Typography component="p">Hourly</Typography>
                  <Typography component="p">$100</Typography>
                </div>
              </Box>
              <Box mt={10} className={cx(classes.progress, classes.last)}>
                <RangeProgress
                  from={100}
                  to={play2 ? 800 : 100}
                  max={1000}
                  prefix="$"
                />
                <div className={classes.text}>
                  <Typography component="p">Per Feature</Typography>
                  <Typography component="p">$1K</Typography>
                </div>
              </Box>
            </Box>
          </ScrollAnimation>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Infographic;
