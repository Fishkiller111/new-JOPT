import React from 'react';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useTranslation } from 'next-i18next';
import imgAPI from 'public/images/imgAPI';
import link from 'public/text/link';
import { useText, useTextAlign } from 'theme/common';
import PlaylistCard from '../../Cards/Media/PlaylistCard';
import ProductNftCard from '../../Cards/Product/NftCard';
import Title from '../../Title';
import useStyles from './new-release-style';

function NewRelease() {
  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  const { classes: align } = useTextAlign();
  const { t } = useTranslation('common');
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('md'));
  const isDesktop = useMediaQuery((theme) => theme.breakpoints.up('lg'));

  return (
    <div className={classes.mainFeature}>
      <Container fixed={isDesktop}>
        <Grid spacing={isDesktop ? 6 : 2} container>
          <Grid item md={6} xs={12}>
            <Box pt={3}>
              <Title text={t('nft2.new_release_title')} />
              <Box component="p" sx={{ mb: 5 }} className={cx(isMobile ? align.textCenter : align.textLeft, text.subtitle2)}>
                {t('nft2.new_release_desc')}
              </Box>
            </Box>
            <div className={classes.group}>
              <PlaylistCard
                img={imgAPI.photosL[8]}
                avatar={imgAPI.avatar[7]}
                logo={imgAPI.logos[12]}
                title="Lorem ipsum"
                name="John Doe"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed urna in justo euismod condimentum. "
                count="20"
                items={[imgAPI.photosP[7], imgAPI.photosL[49], imgAPI.photosL[2], imgAPI.photosL[8]]}
                verifiedUser
                verifiedItem
                withDeco
                href={link.productDetail}
              />
            </div>
          </Grid>
          <Grid item md={6} xs={12} className={classes.featureWrap}>
            <div className={classes.cards}>
              <div className={classes.lower}>
                <div className={classes.card}>
                  <ProductNftCard
                    img={imgAPI.photosL[42]}
                    avatar={imgAPI.avatar[4]}
                    name="John Doe"
                    title="Lorem Ipsum dolor"
                    price="0.5"
                    href={link.productDetail}
                    verified
                  />
                </div>
                <div className={classes.card}>
                  <ProductNftCard
                    img={imgAPI.photosS[3]}
                    avatar={imgAPI.avatar[10]}
                    name="John Doe"
                    title="Lorem Ipsum dolor"
                    price="0.5"
                    href={link.productDetail}
                    verified
                  />
                </div>
              </div>
              <div className={classes.higher}>
                <div className={classes.card}>
                  <ProductNftCard
                    img={imgAPI.photosP[12]}
                    avatar={imgAPI.logos[20]}
                    name="John Doe"
                    title="Lorem Ipsum dolor"
                    price="0.5"
                    href={link.productDetail}
                    verified
                  />
                </div>
                <div className={classes.card}>
                  <ProductNftCard
                    img={imgAPI.photosP[7]}
                    avatar={imgAPI.logos[10]}
                    name="John Doe"
                    title="Lorem Ipsum dolor"
                    price="0.5"
                    href={link.productDetail}
                    verified
                  />
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default NewRelease;
