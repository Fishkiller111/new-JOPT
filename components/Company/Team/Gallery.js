import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Grid from '@mui/material/Grid';
import link from 'public/text/link';
import useStyles from './gallery-style';
import PlaylistCard from '../../Cards/Media/PlaylistCard';
import PhotoCard from '../../Cards/Media/PhotoCard';
import PostCard from '../../Cards/Post/PostCard';
import NewsCard from '../../Cards/Post/NewsCard';
import {
  collectionData, blogData, postData,
  mediaData, longestArray
} from './gallery-data';

function Gallery() {
  const { classes } = useStyles();

  const [value, setValue] = useState('all');
  const [combinedData, setData] = useState([]);
  const [rawData, setRawData] = useState([]);

  const isMobile = useMediaQuery(theme => theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme => theme.breakpoints.down('lg'));

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
      if (blogData[i]) result.push(blogData[i]);
      if (postData[i]) result.push(postData[i]);
      if (mediaData[i] && (i % 2) === 0) {
        result.push(mediaData[i]);
        result.push(mediaData[i + 1]);
      }
    }
    setRawData(result);
    setData(result);
  }, []);

  return (
    <Container className={classes.root}>
      <Box mt={5}>
        <Tabs
          centered={!isTablet}
          variant={isTablet ? 'scrollable' : 'fullWidth'}
          value={value}
          onChange={handleChange}
          classes={{
            indicator: classes.indicator
          }}
        >
          <Tab value="all" classes={{ root: classes.tabLabel }} label="All" />
          <Tab value="post" classes={{ root: classes.tabLabel }} label="Post" />
          <Tab value="media" classes={{ root: classes.tabLabel }} label="Media" />
          <Tab value="collection" classes={{ root: classes.tabLabel }} label="Collection" />
          <Tab value="blog" classes={{ root: classes.tabLabel }} label="Blog" />
        </Tabs>
        <Box mt={5}>
          <Grid container spacing={isMobile ? 2 : 4}>
            {combinedData.map((item, index) => (
              <Grid
                item
                key={index.toString()}
                sm={item.type === 'collection' ? 12 : 6}
                xs={12}
              >
                {item.type === 'collection' && (
                  <PlaylistCard
                    textCenter
                    bgcolor={item.bgColor}
                    title={item.title}
                    desc={item.desc}
                    href={item.href}
                    count={item.count}
                    items={item.items}
                  />
                )}
                {item.type === 'media' && (
                  <div className={classes.photoCard}>
                    <PhotoCard
                      img={item.img}
                      title={item.title}
                      link={item.link}
                      size="medium"
                    />
                  </div>
                )}
                {item.type === 'post' && (
                  <div className={classes.postCard}>
                    <PostCard
                      img={item.img}
                      title={item.title}
                      desc={item.text}
                      href={link.portfolioDetail}
                      source="Facebook"
                    />
                  </div>
                )}
                {item.type === 'blog' && (
                  <div className={classes.newsCard}>
                    <NewsCard
                      img={item.img}
                      title={item.desc}
                      headline={item.title}
                      href={item.href}
                      type="over"
                    />
                  </div>
                )}
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

export default Gallery;
