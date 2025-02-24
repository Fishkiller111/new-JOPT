import React from 'react';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import Grid from '@mui/material/Grid';
import { useTranslation } from 'next-i18next';
import imgAPI from 'public/images/imgAPI';
import ParallaxLeft from '../Parallax/ParallaxLeft';
import ProfileCard from '../../Cards/Profile/ProfileCard';
import Title from '../../Title';
import useStyles from './list-rank-style';

const rankData = [
  {
    avatar: imgAPI.avatar[20],
    name: 'John Doe',
    verified: true,
    sales: 100,
    items: 10,
    volume: 1040,
    change: 40
  },
  {
    avatar: imgAPI.avatar[21],
    name: 'John Doe',
    verified: true,
    sales: 100,
    items: 10,
    volume: 1040,
    change: 40
  },
  {
    avatar: imgAPI.avatar[7],
    name: 'John Doe',
    verified: true,
    sales: 100,
    items: 10,
    volume: 1040,
    change: 40
  },
  {
    avatar: imgAPI.photosP[21],
    name: 'John Doe',
    verified: true,
    sales: 100,
    items: 10,
    volume: 1040,
    change: 40
  },
  {
    avatar: imgAPI.photosP[18],
    name: 'John Doe',
    verified: true,
    sales: 100,
    items: 10,
    volume: 1040,
    change: 40
  },
  {
    avatar: imgAPI.photosL[31],
    name: 'John Doe',
    verified: true,
    sales: 100,
    items: 10,
    volume: 1040,
    change: 40
  },
  {
    avatar: imgAPI.photosL[42],
    name: 'John Doe',
    verified: true,
    sales: 100,
    items: 10,
    volume: 1040,
    change: 40
  },
  {
    avatar: imgAPI.avatar[6],
    name: 'John Doe',
    verified: true,
    sales: 100,
    items: 10,
    volume: 1040,
    change: 40
  },
  {
    avatar: imgAPI.avatar[11],
    name: 'John Doe',
    verified: true,
    sales: 100,
    items: 10,
    volume: 1040,
    change: 40
  },
  {
    avatar: imgAPI.avatar[29],
    name: 'John Doe',
    verified: true,
    sales: 100,
    items: 10,
    volume: 1040,
    change: 40
  },
];

function ListRank() {
  // Translation Function
  const { t } = useTranslation('common');
  const { classes } = useStyles();
  const isDesktop = useMediaQuery(theme => theme.breakpoints.up('md'));

  return (
    <div className={classes.root}>
      <ParallaxLeft />
      <Container>
        <Grid container spacing={isDesktop ? 4 : 2}>
          <Grid item md={5} xs={12}>
            <Title dark text={t('nft.creators_title')} />
          </Grid>
          <Grid item md={7} xs={12}>
            <ProfileCard
              number={1}
              name={rankData[0].name}
              verified={rankData[0].verified}
              avatar={rankData[0].avatar}
              items={rankData[0].items}
              sales={rankData[0].sales}
              change={rankData[0].change}
              volume={rankData[0].volume}
              href={rankData[0].href}
              first
            />
          </Grid>
          {rankData.slice(1, 10).map((item, index) => (
            <Grid item sm={4} xs={12} key={index.toString()}>
              <ProfileCard
                number={index + 2}
                name={item.name}
                verified={item.verified}
                avatar={item.avatar}
                items={item.items}
                sales={item.sales}
                change={item.change}
                volume={item.volume}
                href={item.href}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default ListRank;
