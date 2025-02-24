import React from 'react';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { useTranslation } from 'next-i18next';
import imgAPI from 'public/images/imgAPI';
import link from 'public/text/link';
import CategoryImgCard from '../../Cards/Category/ImgCard';
import ParallaxRight from '../Parallax/ParallaxRight';
import ParallaxTitle from '../../Title/ParallaxTitle';
import useStyles from './explore-style';

const categories = [
  {
    color: 'red',
    href: link.product,
    title: 'Animation',
    images: [imgAPI.photosP[25], imgAPI.photosP[13], imgAPI.photosL[4]],
  },
  {
    color: 'purple',
    href: link.product,
    title: 'Collectibles',
    images: [imgAPI.photosL[5], imgAPI.photosP[8], imgAPI.photosS[3]],
  },
  {
    color: 'indigo',
    href: link.product,
    title: 'Art',
    images: [imgAPI.photosP[29], imgAPI.photosS[7], imgAPI.photosS[8]],
  },
  {
    color: 'blue',
    href: link.product,
    title: 'Domain Name',
    images: [imgAPI.photosP[4], imgAPI.photosP[3], imgAPI.photosP[6]],
  },
  {
    color: 'green',
    href: link.product,
    title: 'Trading Cards',
    images: [imgAPI.photosP[26], imgAPI.photosP[27], imgAPI.photosP[23]],
  },
  {
    color: 'yellow',
    href: link.product,
    title: 'Abstract',
    images: [imgAPI.photosL[35], imgAPI.photosL[36], imgAPI.photosL[40]],
  },
  {
    color: 'deepOrange',
    href: link.product,
    title: 'Sports',
    images: [imgAPI.photosS[4], imgAPI.photosL[33], imgAPI.photosL[32]],
  },
  {
    color: 'cyan',
    href: link.product,
    title: 'Virtual Worlds',
    images: [imgAPI.photosP[16], imgAPI.photosS[5], imgAPI.photosS[6]],
  },
  {
    color: 'grey',
    href: link.product,
    title: 'Photography',
    images: [imgAPI.photosL[52], imgAPI.photosP[30], imgAPI.photosL[51]],
  },
];
function Explore() {
  const { classes } = useStyles();

  // Theme breakpoints
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  const { t } = useTranslation('common');

  return (
    <div className={classes.root}>
      <Container>
        <ParallaxTitle
          bgTitle={t('nft2.header_explore')}
          mainTitle={t('nft2.category_title')}
          color="doubleMain"
        />
        <Grid
          container
          className={classes.categories}
          justifyContent={isTablet ? 'center' : 'flex-start'}
          spacing={isDesktop ? 6 : 2}
        >
          <ParallaxRight />
          {categories.map((item, index) => (
            <Grid key={index.toString()} item md={4} sm={6} xs={12}>
              <CategoryImgCard
                color={item.color}
                href={item.href}
                title={item.title}
                images={item.images}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default Explore;
