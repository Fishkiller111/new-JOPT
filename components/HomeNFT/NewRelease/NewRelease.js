import React from 'react';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useTranslation } from 'next-i18next';
import imgAPI from 'public/images/imgAPI';
import link from 'public/text/link';
import { useText, useTextAlign } from 'theme/common';
import ProductNftCard from '../../Cards/Product/NftCard';
import Title from '../../Title';
import useStyles from './new-release-style';

const nftList = [
  {
    img: imgAPI.photosL[41],
    avatar: imgAPI.logos[13],
    name: 'John Doe',
    title: 'Lorem Ipsum Dolor',
    price: '0.5',
    href: link.productDetail,
    verified: true,
  },
  {
    img: imgAPI.photosP[23],
    avatar: imgAPI.logos[1],
    name: 'John Doe',
    title: 'Lorem Ipsum Dolor',
    price: '0.5',
    href: link.productDetail,
    verified: true,
  },
  {
    img: imgAPI.photosS[7],
    avatar: imgAPI.logos[2],
    name: 'John Doe',
    title: 'Lorem Ipsum Dolor',
    price: '0.5',
    href: link.productDetail,
    verified: true,
  },
  {
    img: imgAPI.photosL[42],
    avatar: imgAPI.avatar[13],
    name: 'John Doe',
    title: 'Lorem Ipsum Dolor',
    price: '0.5',
    href: link.productDetail,
    verified: true,
  },
  {
    img: imgAPI.photosL[9],
    avatar: imgAPI.avatar[1],
    name: 'John Doe',
    title: 'Lorem Ipsum Dolor',
    price: '0.5',
    href: link.productDetail,
    verified: true,
  },
  {
    img: imgAPI.photosS[3],
    avatar: imgAPI.avatar[8],
    name: 'John Doe',
    title: 'Lorem Ipsum Dolor',
    price: '0.5',
    href: link.productDetail,
    verified: true,
  },
  {
    img: imgAPI.photosP[12],
    avatar: imgAPI.avatar[8],
    name: 'John Doe',
    title: 'Lorem Ipsum Dolor',
    price: '0.5',
    href: link.productDetail,
    verified: true,
  }
];

function NewRelease() {
  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  const { classes: align } = useTextAlign();
  const { t } = useTranslation('common');
  const isTablet = useMediaQuery((theme) => theme.breakpoints.down('md'));
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <div className={classes.mainFeature}>
      <Container fixed={!isTablet}>
        <Grid spacing={isMobile ? 2 : 4} justifyContent="center" container>
          <Grid item lg={3} md={4} xs={12}>
            <Box pt={{ lg: 3 }}>
              <Title text={t('nft.new_release_title')} strictAlign={!isMobile} />
              <Box component="p" sx={{ mb: 5 }} className={cx(isMobile ? align.textCenter : align.textLeft, text.subtitle2)}>
                {t('nft.new_release_desc')}
              </Box>
            </Box>
          </Grid>
          {nftList.map((item, index) => (
            <Grid item key={index.toString()} lg={3} md={4} xs={6}>
              <div className={classes.card}>
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
    </div>
  );
}

export default NewRelease;
