import React, { useState } from 'react';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Grid from '@mui/material/Grid';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import { useTranslation } from 'next-i18next';
import link from 'public/text/link';
import PlaylistCard from '../../Cards/Media/PlaylistCard';
import Title from '../../Title';
import useStyles from './portfolios-style';
import {
  trendingData, topData, collectibleData,
  artData, animationData
} from './data';

function Trending() {
  const { classes } = useStyles();

  // Theme breakpoints
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'));

  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { t } = useTranslation('common');

  return (
    <div className={classes.root}>
      <Container>
        <Title
          text={t('avatar.gallery_title')}
          align="center"
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
          </Grid>
        </div>
        <div className={classes.tabContent}>
          {value === 0 && (
            <Grid container spacing={4} justifyContent="center">
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
                      href={link.productDetail}
                    />
                  </ScrollAnimation>
                </Grid>
              ))}
            </Grid>
          )}
          {value === 1 && (
            <Grid container spacing={4} justifyContent="center">
              {topData.map((item, index) => (
                <Grid key={index.toString()} item md={6} xs={12}>
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
                      href={link.productDetail}
                    />
                  </ScrollAnimation>
                </Grid>
              ))}
            </Grid>
          )}
          {value === 2 && (
            <Grid container spacing={4} justifyContent="center">
              {collectibleData.map((item, index) => (
                <Grid key={index.toString()} item md={6} xs={12}>
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
                      href={link.productDetail}
                    />
                  </ScrollAnimation>
                </Grid>
              ))}
            </Grid>
          )}
          {value === 3 && (
            <Grid container spacing={4} justifyContent="center">
              {artData.map((item, index) => (
                <Grid key={index.toString()} item md={6} xs={12}>
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
                      href={link.productDetail}
                    />
                  </ScrollAnimation>
                </Grid>
              ))}
            </Grid>
          )}
          {value === 4 && (
            <Grid container spacing={4} justifyContent="center">
              {animationData.map((item, index) => (
                <Grid key={index.toString()} item md={6}>
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
                      href={link.productDetail}
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
