import React, { useState } from 'react';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Grid from '@mui/material/Grid';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import { useTranslation } from 'next-i18next';
import PlaylistCard from '../../Cards/Media/PlaylistCard';
import ParallaxTitle from '../../Title/ParallaxTitle';
import useStyles from './trending-style';
import {
  trendingData, topData, collectibleData,
  artData, animationData
} from './data';

function Trending() {
  const { classes } = useStyles();

  // Theme breakpoints
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { t } = useTranslation('common');

  return (
    <div className={classes.root}>
      <Container>
        <ParallaxTitle
          bgTitle={t('nft.trending_bgtitle')}
          mainTitle={t('nft.trending_subtitle')}
          color={theme.palette.mode === 'dark' ? 'tripleMain' : 'tripleLight'}
        />
        <div className={classes.tab}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item lg={9} md={10} xs={12}>
              <Tabs
                centered={!isTablet}
                variant={isTablet ? 'scrollable' : 'fullWidth'}
                scrollButtons={isTablet}
                value={value}
                onChange={handleChange}
                classes={{
                  indicator: classes.indicator
                }}
              >
                <Tab classes={{ root: classes.tabLabel }} label="Trending" />
                <Tab classes={{ root: classes.tabLabel }} label="Top" />
                <Tab classes={{ root: classes.tabLabel }} label="Collectible" />
                <Tab classes={{ root: classes.tabLabel }} label="Art" />
                <Tab classes={{ root: classes.tabLabel }} label="Animation" />
              </Tabs>
            </Grid>
            {isDesktop && (
              <Grid item md={2}>
                <Button color="secondary" className={classes.btn} variant="contained" size="large">
                  {t('nft.trending_all')}
                </Button>
              </Grid>
            )}
          </Grid>
        </div>
        <div className={classes.tabContent}>
          {value === 0 && (
            <Grid container spacing={isMobile ? 0 : 4} justifyContent="center">
              {trendingData.map((item, index) => (
                <Grid key={index.toString()} item sm={6} xs={12}>
                  <ScrollAnimation
                    animateOnce
                    animateIn="fadeInUpShort"
                    offset={100}
                    delay={500 + 100 * index}
                    duration={0.5}
                  >
                    <PlaylistCard
                      img={item.img}
                      avatar={item.avatar}
                      logo={item.logo}
                      title={item.title}
                      name={item.name}
                      desc={item.desc}
                      count={item.count}
                      items={item.items}
                      color={item.color}
                      verifiedUser={item.verifiedUser}
                      verifiedItem={item.verifiedItem}
                      withDeco={item.withDeco}
                      href={item.href}
                    />
                  </ScrollAnimation>
                </Grid>
              ))}
            </Grid>
          )}
          {value === 1 && (
            <Grid container spacing={4} justifyContent="center">
              {topData.map((item, index) => (
                <Grid key={index.toString()} item sm={6} xs={12}>
                  <ScrollAnimation
                    animateOnce
                    animateIn="fadeInUpShort"
                    offset={100}
                    delay={500 + 100 * index}
                    duration={0.5}
                  >
                    <PlaylistCard
                      img={item.img}
                      avatar={item.avatar}
                      logo={item.logo}
                      title={item.title}
                      name={item.name}
                      desc={item.desc}
                      count={item.count}
                      items={item.items}
                      color={item.color}
                      verifiedUser={item.verifiedUser}
                      verifiedItem={item.verifiedItem}
                      withDeco={item.withDeco}
                      href={item.href}
                    />
                  </ScrollAnimation>
                </Grid>
              ))}
            </Grid>
          )}
          {value === 2 && (
            <Grid container spacing={4} justifyContent="center">
              {collectibleData.map((item, index) => (
                <Grid key={index.toString()} item sm={6} xs={12}>
                  <ScrollAnimation
                    animateOnce
                    animateIn="fadeInUpShort"
                    offset={100}
                    delay={500 + 100 * index}
                    duration={0.5}
                  >
                    <PlaylistCard
                      img={item.img}
                      avatar={item.avatar}
                      logo={item.logo}
                      title={item.title}
                      name={item.name}
                      desc={item.desc}
                      count={item.count}
                      items={item.items}
                      color={item.color}
                      verifiedUser={item.verifiedUser}
                      verifiedItem={item.verifiedItem}
                      withDeco={item.withDeco}
                      href={item.href}
                    />
                  </ScrollAnimation>
                </Grid>
              ))}
            </Grid>
          )}
          {value === 3 && (
            <Grid container spacing={4} justifyContent="center">
              {artData.map((item, index) => (
                <Grid key={index.toString()} item sm={6} xs={12}>
                  <ScrollAnimation
                    animateOnce
                    animateIn="fadeInUpShort"
                    offset={100}
                    delay={500 + 100 * index}
                    duration={0.5}
                  >
                    <PlaylistCard
                      img={item.img}
                      avatar={item.avatar}
                      logo={item.logo}
                      title={item.title}
                      name={item.name}
                      desc={item.desc}
                      count={item.count}
                      items={item.items}
                      color={item.color}
                      verifiedUser={item.verifiedUser}
                      verifiedItem={item.verifiedItem}
                      withDeco={item.withDeco}
                      href={item.href}
                    />
                  </ScrollAnimation>
                </Grid>
              ))}
            </Grid>
          )}
          {value === 4 && (
            <Grid container spacing={4} justifyContent="center">
              {animationData.map((item, index) => (
                <Grid key={index.toString()} item sm={6} xs={12}>
                  <ScrollAnimation
                    animateOnce
                    animateIn="fadeInUpShort"
                    offset={100}
                    delay={500 + 100 * index}
                    duration={0.5}
                  >
                    <PlaylistCard
                      img={item.img}
                      avatar={item.avatar}
                      logo={item.logo}
                      title={item.title}
                      name={item.name}
                      desc={item.desc}
                      count={item.count}
                      items={item.items}
                      color={item.color}
                      verifiedUser={item.verifiedUser}
                      verifiedItem={item.verifiedItem}
                      withDeco={item.withDeco}
                      href={item.href}
                    />
                  </ScrollAnimation>
                </Grid>
              ))}
            </Grid>
          )}
        </div>
      </Container>
    </div>
  );
}

export default Trending;
