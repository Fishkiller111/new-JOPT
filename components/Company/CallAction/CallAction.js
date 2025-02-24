import React from 'react';
import { useTranslation } from 'next-i18next';
import Button from '@mui/material/Button';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import useMediaQuery from '@mui/material/useMediaQuery';
import Container from '@mui/material/Container';
import { useText } from 'theme/common';
import link from 'public/text/link';
import LocaleLink from '../../Link';
import useStyles from './action-style';

function CallAction() {
  // Translation Function
  const { t } = useTranslation('common');
  const { classes: text } = useText();
  const { classes } = useStyles();

  const isDesktop = useMediaQuery(theme => theme.breakpoints.up('lg'));

  const randomShape = (top, left, width, height, rotate) => ({
    top: Math.floor(Math.random() * top),
    left: Math.floor(Math.random() * left),
    width: Math.floor(Math.random() * (width - 100) + 100),
    height: Math.floor(Math.random() * (height - 100) + 100),
    transform: `rotate(${Math.floor(Math.random() * rotate)}deg)`,
  });

  return (
    <Container fixed={isDesktop} maxWidth="lg" className={classes.root}>
      <ScrollAnimation
        animateOnce
        animateIn="fadeInUpShort"
        offset={100}
        delay={500}
        duration={0.5}
      >
        <div className={classes.action}>
          <div className={classes.wrap}>
            <div className={classes.fog}>
              <div className={classes.tripleMain} style={randomShape(100, 300, 600, 500, 120)} />
              <div className={classes.tripleLight} style={randomShape(200, 400, 100, 300, 60)} />
              <div className={classes.doubleMain} style={randomShape(200, 200, 100, 400, 90)} />
            </div>
            <h4 className={text.title2}>
              {t('career_cta')}
            </h4>
            <div className={classes.btnArea}>
              <Button component={LocaleLink} size="large" color="black" variant="contained" to={link.career} className={classes.button}>
                {t('btn_join')}
              </Button>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </Container>
  );
}

export default CallAction;
