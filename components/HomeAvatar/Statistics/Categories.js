import React from 'react';
import Grid from '@mui/material/Grid';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'next-i18next';
import { useText } from 'theme/common';
import Icons3d from '../../Icons3d';
import useStyles from './styles/categories-style';

const statsData = [
  {
    icon: 'mdi-basketball',
    color: 'orange',
    title: 'Sport',
    play: 7
  },
  {
    icon: 'mdi-bike',
    color: 'green',
    title: 'Racing',
    play: 10
  },
  {
    icon: 'mdi-sword',
    color: 'pink',
    title: 'Fight',
    play: 2
  },
  {
    icon: 'mdi-cards-club',
    color: 'purple',
    title: 'Cards',
    play: 13
  }
];

export default function Categories() {
  const { classes, cx } = useStyles();
  const { classes: text } = useText();

  const { t } = useTranslation('common');

  return (
    <div className={classes.root}>
      <Grid container spacing={6} sx={{ mt: 1 }}>
        <Grid item xs={10}>
          <Typography variant="h5" className={cx(classes.title, text.subtitle)}>
            {t('avatar.stats_subtitle2')}
          </Typography>
        </Grid>
        {statsData.map((item, index) => (
          <Grid key={index.toString()} item sm={5} xs={12}>
            <ScrollAnimation
              animateOnce
              animateIn="fadeInLeftShort"
              delay={100 * index + 100}
              duration={0.3}
            >
              <div className={classes.category}>
                <div className={cx(classes.bg, classes[item.color])}>
                  <Icons3d icon={item.icon} color={item.color} />
                </div>
                <div className={classes.text}>
                  <Typography className={classes.name}>{item.title}</Typography>
                  <Typography>
                    {item.play}
                    {' '}
                    Games played
                  </Typography>
                </div>
              </div>
            </ScrollAnimation>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
