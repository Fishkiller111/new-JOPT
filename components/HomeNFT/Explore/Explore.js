import React from 'react';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { useTranslation } from 'next-i18next';
import link from 'public/text/link';
import CategoryIconCard from '../../Cards/Category/Icon3dCard';
import Title from '../../Title';
import useStyles from './explore-style';

const categories = [
  {
    color: 'pink',
    href: link.product,
    title: 'Animation',
    icon: 'mdi-animation-play'
  },
  {
    color: 'purple',
    href: link.product,
    title: 'Collectibles',
    icon: 'mdi-collage'
  },
  {
    color: 'deepPurple',
    href: link.product,
    title: 'Art',
    icon: 'mdi-palette'
  },
  {
    color: 'cyan',
    href: link.product,
    title: 'Music',
    icon: 'mdi-music-note-eighth'
  },
  {
    color: 'deepOrange',
    href: link.product,
    title: 'Sports',
    icon: 'mdi-basketball'
  },
  {
    color: 'blue',
    href: link.product,
    title: 'Virtual Worlds',
    icon: 'mdi-earth'
  },
  {
    color: 'grey',
    href: link.product,
    title: 'Photography',
    icon: 'mdi-camera-image'
  },
  {
    color: 'lightGreen',
    href: link.product,
    title: '3D',
    icon: 'mdi-cube-outline'
  },
];

function Explore() {
  const { classes } = useStyles();

  // Theme breakpoints
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  const { t } = useTranslation('common');

  return (
    <div className={classes.root}>
      <Container>
        <Title align="center" text={t('nft.category_title')} />
        <Grid container className={classes.categories} spacing={isDesktop ? 6 : 2}>
          {categories.map((item, index) => (
            <Grid key={index.toString()} item sm={3} xs={6}>
              <CategoryIconCard
                color={item.color}
                href={item.href}
                title={item.title}
                icon={item.icon}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default Explore;
