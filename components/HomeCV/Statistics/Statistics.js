import React from 'react';
import { useTranslation } from 'next-i18next';
import useMediaQuery from '@mui/material/useMediaQuery';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import imgAPI from 'public/images/imgAPI';
import { useFloat } from 'theme/common';
import Title from '../../Title';
import Expertise from './Expertise';
import Categories from './Categories';
import Progress from './Progress';
import History from './History';
import Counter from './Counter';
import useStyles from './styles/statistics-style';

function Statistics() {
  // Translation Function
  const { t } = useTranslation('common');
  const { classes } = useStyles();
  const { classes: float } = useFloat();

  const isTablet = useMediaQuery(theme => theme.breakpoints.down('md'));

  return (
    <div className={classes.root}>
      <div className={classes.background}>
        <div className={classes.bgGradient}>
          <span className={classes.ovalRight} />
          <span className={classes.ovalTop} />
          <span className={classes.ovalBottom} />
        </div>
        <Box px={isTablet ? 3 : 0}>
          <Title text={t('profile.stats_title')} align="center" />
        </Box>
        <Expertise />
        <Grid className={classes.wrapper} justifyContent="center" container spacing={6}>
          {!isTablet && (
            <Grid item lg={4} md={4} xs={12}>
              <Box className={classes.avatar}>
                <img src={imgAPI.profile[4]} alt="avatar full" />
              </Box>
            </Grid>
          )}
          <Grid item lg={7} md={8} sm={10} xs={12}>
            <div className={classes.section}>
              <Progress />
            </div>
            <div className={classes.section}>
              <Categories />
            </div>
            <div className={classes.section}>
              <History />
            </div>
            <div className={classes.section}>
              <Box className={float.floatRight}>
                <Counter />
              </Box>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Statistics;
