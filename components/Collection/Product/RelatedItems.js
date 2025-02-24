import React from 'react';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useTranslation } from 'next-i18next';
import Button from '@mui/material/Button';
import NextIcon from '@mui/icons-material/ArrowForward';
import imgAPI from 'public/images/imgAPI';
import useStyles from './product-style';
import Title from '../../Title';
import ProductNftCard from '../../Cards/Product/NftCard';

const nftList = [
  {
    img: imgAPI.photosL[41],
    avatar: imgAPI.logos[13],
    name: 'John Doe',
    title: 'Lorem Ipsum Dolor',
    price: '0.5',
    href: '#',
    verified: true,
  },
  {
    img: imgAPI.photosP[23],
    avatar: imgAPI.logos[1],
    name: 'John Doe',
    title: 'Lorem Ipsum Dolor',
    price: '0.5',
    href: '#',
    verified: true,
  },
  {
    img: imgAPI.photosS[7],
    avatar: imgAPI.logos[2],
    name: 'John Doe',
    title: 'Lorem Ipsum Dolor',
    price: '0.5',
    href: '#',
    verified: true,
  },
  {
    img: imgAPI.photosL[42],
    avatar: imgAPI.avatar[13],
    name: 'John Doe',
    title: 'Lorem Ipsum Dolor',
    price: '0.5',
    href: '#',
    verified: true,
  },
  {
    img: imgAPI.photosL[9],
    avatar: imgAPI.avatar[1],
    name: 'John Doe',
    title: 'Lorem Ipsum Dolor',
    price: '0.5',
    href: '#',
    verified: true,
  },
  {
    img: imgAPI.photosS[3],
    avatar: imgAPI.avatar[8],
    name: 'John Doe',
    title: 'Lorem Ipsum Dolor',
    price: '0.5',
    href: '#',
    verified: true,
  },
  {
    img: imgAPI.photosP[12],
    avatar: imgAPI.avatar[8],
    name: 'John Doe',
    title: 'Lorem Ipsum Dolor',
    price: '0.5',
    href: '#',
    verified: true,
  }
];

function RelatedItems() {
  const { classes } = useStyles();
  const { t } = useTranslation('common');
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid container justifyContent="center">
      <Grid item lg={11} md={12} xs={12}>
        <Box pt={5}>
          <Container className={classes.carouselHeader}>
            <Title
              strictAlign
              text={t('list_related')}
              align={isMobile ? 'center' : 'left'}
            />
            <Button
              href="#"
              size="large"
              className={classes.viewAll}
            >
              {t('btn_seeall')}
              <NextIcon className={classes.icon} />
            </Button>
          </Container>
          <Container>
            <Grid container spacing={2} className={classes.scrollTablet}>
              {nftList.map((item, index) => (
                <Grid item key={index.toString()} md={3} sm={4} xs={10}>
                  <div className={classes.cardRelated}>
                    <ProductNftCard
                      img={item.img}
                      avatar={item.avatar}
                      name={item.name}
                      title={item.title}
                      price={item.price}
                      href={item.href}
                      verified={item.verified}
                    />
                  </div>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      </Grid>
    </Grid>
  );
}

RelatedItems.propTypes = {

};

export default RelatedItems;
