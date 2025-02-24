import React from 'react';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import Container from '@mui/material/Container';
import ButtonBase from '@mui/material/ButtonBase';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import { useTranslation } from 'next-i18next';
import { useText, useTextAlign } from 'theme/common';
import ParallaxTitle from '../../Title/ParallaxTitle';
import useStyles from './community-style';

const businessData = [
  {
    icon: 'ion-logo-github',
    name: 'Github',
    type: 'large',
    color: 'Primary',
    rotate: -90,
    x: 0,
    y: 0
  },
  {
    icon: 'ion-md-send',
    name: 'telegram',
    type: 'medium',
    color: 'Secondary',
    rotate: 0,
    x: 320,
    y: 10
  },
  {
    icon: 'ion-logo-twitter',
    name: 'twitter',
    type: 'medium',
    color: 'Secondary',
    rotate: 180,
    x: 40,
    y: 315
  },
  {
    icon: 'ion-md-mail',
    name: 'Mailinglist',
    type: 'small',
    color: 'Accent',
    rotate: 180,
    x: 275,
    y: 295
  },
  {
    icon: 'ion-logo-reddit',
    name: 'reddit',
    type: 'large',
    color: 'Primary',
    rotate: 120,
    x: 425,
    y: 303
  },
  {
    icon: 'ion-logo-facebook',
    name: 'facebook',
    type: 'medium',
    color: 'Secondary',
    rotate: 80,
    x: 748,
    y: 277
  },
  {
    icon: 'ion-logo-youtube',
    name: 'YouTube',
    type: 'small',
    color: 'Accent',
    rotate: 120,
    x: 580,
    y: 100
  },
  {
    icon: 'ion-md-wifi',
    name: 'podcast',
    type: 'small',
    color: 'Accent',
    rotate: -60,
    x: 720,
    y: 10
  },
  {
    icon: 'ion-md-chatboxes',
    name: 'discord',
    type: 'large',
    color: 'Primary',
    rotate: 0,
    x: 873,
    y: 0
  }
];

function Business() {
  const { classes, cx } = useStyles();
  const theme = useTheme();

  const { t } = useTranslation('common');
  const { classes: text } = useText();
  const { classes: align } = useTextAlign();

  return (
    <Container className={classes.root}>
      <ParallaxTitle
        bgTitle={t('ai-landing.community_bgtitle')}
        mainTitle={t('ai-landing.cta_title')}
        color={theme.palette.mode === 'dark' ? 'tripleDark' : 'tripleLight'}
      />
      <Box px={5}>
        <p className={cx(text.subtitle2, align.textCenter)}>
          {t('ai-landing.community_desc')}
        </p>
      </Box>
      <div className={classes.circleGroup}>
        {businessData.map((item, index) => (
          <div key={index.toString()}>
            <ScrollAnimation
              animateOnce
              offset={150}
              delay={200 * index}
              animateIn="zoomInShort"
              duration={0.5}
            >
              <div
                className={cx(classes.circle, classes['fill' + item.color], classes[item.type])}
                style={{ top: item.y + 'px', left: item.x + 'px' }}
              >
                <svg style={{ transform: `rotate(${item.rotate}deg)` }}>
                  <use xlinkHref={'/images/decoration/circle-' + item.type + '.svg#main'} />
                </svg>
                <ButtonBase href="javascipt:void(0)" className={classes.paper}>
                  <i className={item.icon} />
                  <h6>
                    {item.name}
                  </h6>
                </ButtonBase>
              </div>
            </ScrollAnimation>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default Business;
