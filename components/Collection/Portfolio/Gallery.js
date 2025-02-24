import React, { useState, useEffect } from 'react';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Grid from '@mui/material/Grid';
import useStyles from './gallery-style';
import PlaylistCard from '../../Cards/Media/PlaylistCard';
import PhotoCard from '../../Cards/Media/PhotoCard';
import { collectionData, mediaData, longestArray } from './gallery-data';

function Gallery() {
  const { classes } = useStyles();

  const [divider, setDivider] = useState(1);
  const [value, setValue] = useState('all');
  const [combinedData, setData] = useState([]);
  const [rawData, setRawData] = useState([]);

  const isTablet = useMediaQuery(theme => theme.breakpoints.down('md'));
  const betweenTablet = useMediaQuery(theme => theme.breakpoints.between('sm', 'md'));
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('sm'));

  const handleChange = (event, category) => {
    setValue(category);
    setData([]);
    setTimeout(() => {
      if (category !== 'all') {
        const filteredData = rawData.filter(item => item.type === category);
        setData(filteredData);
      } else {
        setData(rawData);
      }
    }, 10);
  };

  useEffect(() => {
    const result = [];
    for (let i = 0; i < longestArray.length; i += 1) {
      if (collectionData[i]) result.push(collectionData[i]);
      if (mediaData[i]) result.push(mediaData[i]);
    }
    setRawData(result);
    setData(result);
    setDivider(Math.round(result.length / 3));
  }, []);

  return (
    <Container className={classes.root}>
      <Box mt={{ sm: 5 }}>
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
          <Tab value="all" classes={{ root: classes.tabLabel }} label="All" />
          <Tab value="collection" classes={{ root: classes.tabLabel }} label="Collection" />
          <Tab value="apps" classes={{ root: classes.tabLabel }} label="Apps" />
          <Tab value="website" classes={{ root: classes.tabLabel }} label="Website" />
          <Tab value="nft" classes={{ root: classes.tabLabel }} label="NFT" />
          <Tab value="designs" classes={{ root: classes.tabLabel }} label="Designs" />
          <Tab value="art" classes={{ root: classes.tabLabel }} label="Art" />
        </Tabs>
        <Box mt={5}>
          <Grid container spacing={isMobile ? 0 : 4}>
            <Grid
              item
              md={4}
              sm={6}
              xs={12}
            >
              {combinedData.map((item, index) => index < divider && (
              <Box mb={5} key={index.toString()}>
                {item.type === 'collection' && (
                <ScrollAnimation
                  animateOnce
                  animateIn="fadeInUpShort"
                  delay={400}
                  duration={0.3}
                >
                  <PlaylistCard
                    textCenter
                    bgcolor={item.bgColor}
                    title={item.title}
                    desc={item.desc}
                    href={item.href}
                    count={item.count}
                    items={item.items}
                  />
                </ScrollAnimation>
                    )}
                {item.type === 'media' && (
                <div className={classes.photoCard}>
                  <ScrollAnimation
                    animateOnce
                    animateIn="fadeInUpShort"
                    delay={400}
                    duration={0.3}
                  >
                    <PhotoCard
                      img={item.img}
                      title={item.title}
                      link={item.link}
                      href={item.href}
                      size={item.size}
                    />
                  </ScrollAnimation>
                </div>
                    )}
              </Box>
                )
              )}
            </Grid>
            <Grid
              item
              md={4}
              sm={6}
              xs={12}
            >
              {combinedData.map((item, index) => index >= divider && index < divider * 2 && (
              <Box mb={5} key={index.toString()}>
                {item.type === 'collection' && (
                <ScrollAnimation
                  animateOnce
                  animateIn="fadeInUpShort"
                  delay={400}
                  duration={0.3}
                >
                  <PlaylistCard
                    textCenter
                    bgcolor={item.bgColor}
                    title={item.title}
                    desc={item.desc}
                    href={item.href}
                    count={item.count}
                    items={item.items}
                  />
                </ScrollAnimation>
                    )}
                {item.type === 'media' && (
                <ScrollAnimation
                  animateOnce
                  animateIn="fadeInUpShort"
                  delay={400}
                  duration={0.3}
                >
                  <div className={classes.photoCard}>
                    <PhotoCard
                      img={item.img}
                      title={item.title}
                      link={item.link}
                      href={item.href}
                      size={item.size}
                    />
                  </div>
                </ScrollAnimation>
                    )}
              </Box>
                )
              )}
            </Grid>
            <Grid
              item
              md={4}
              sm={12}
              xs={12}
            >
              <Grid container spacing={betweenTablet ? 4 : 0}>
                {combinedData.map((item, index) => index >= divider * 2 && (
                <Grid item md={12} sm={6} xs={12} mb={5} key={index.toString()}>
                  {item.type === 'collection' && (
                  <ScrollAnimation
                    animateOnce
                    animateIn="fadeInUpShort"
                    delay={400}
                    duration={0.3}
                  >
                    <PlaylistCard
                      textCenter
                      bgcolor={item.bgColor}
                      title={item.title}
                      desc={item.desc}
                      href={item.href}
                      count={item.count}
                      items={item.items}
                    />
                  </ScrollAnimation>
                      )}
                  {item.type === 'media' && (
                  <ScrollAnimation
                    animateOnce
                    animateIn="fadeInUpShort"
                    delay={400}
                    duration={0.3}
                  >
                    <div className={classes.photoCard}>
                      <PhotoCard
                        img={item.img}
                        title={item.title}
                        link={item.link}
                        href={item.href}
                        size={item.size}
                      />
                    </div>
                  </ScrollAnimation>
                      )}
                </Grid>
                  )
                )}
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

export default Gallery;
