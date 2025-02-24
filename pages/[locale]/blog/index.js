import React, { Fragment } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import CssBaseline from '@mui/material/CssBaseline';
import Head from 'next/head';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useTranslation } from 'next-i18next';
// Use this below for Server Side Render/Translation (SSR)
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// Use this below for Static Site Generation (SSG)
import { getStaticPaths, makeStaticProps } from 'lib/getStatic';
import { useSpacing, useFlipRtl } from 'theme/common';
import imgAPI from 'public/images/imgAPI';
import BlogLayout from 'components/Layouts/Blog';
import Headline from 'components/Company/Blog/Headline';
import NewsCard from 'components/Cards/Post/NewsCard';
import Sidebar from 'components/Company/Blog/Sidebar';
import brand from 'public/text/brand';
import link from 'public/text/link';

function BlogHome() {
  const { classes } = useSpacing();
  const { classes: flipRtl } = useFlipRtl();
  const { t } = useTranslation('common');

  const isTablet = useMediaQuery(theme => theme.breakpoints.up('sm'));

  return (
    <Fragment>
      <Head>
        <title>
          { brand.name + ' - Blog'}
        </title>
      </Head>
      <CssBaseline />
      <section id="home" />
      <Container>
        <Grid container spacing={3}>
          <Grid item sm={12}>
            <Headline />
          </Grid>
        </Grid>
        <Box mt={{ sm: 8, xs: 5 }} px={{ sm: 3 }}>
          <Grid container spacing={isTablet ? 6 : 0}>
            <Grid item md={6} xs={12}>
              <NewsCard
                href={link.blogDetail}
                img={imgAPI.photosL[37]}
                headline="Maecenas rutrum dolor sed nisi"
                title="Proin pretium arcu eget metus porta consectetur Pellentesque habitant"
                date="12 Nov 2020"
                orientation="landscape"
                type="over"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <NewsCard
                href={link.blogDetail}
                img={imgAPI.photosL[36]}
                headline="Maecenas rutrum dolor sed nisi"
                title="Proin pretium arcu eget metus porta consectetur Pellentesque habitant"
                date="12 Nov 2020"
                orientation="landscape"
                type="over"
              />
            </Grid>
          </Grid>
        </Box>
        <Box mt={{ sm: 2 }} px={{ sm: 3 }}>
          <Grid spacing={isTablet ? 6 : 0} container>
            <Grid item md={8} xs={12}>
              {[...Array(12)].map((e, index) => (
                <Box
                  key={index.toString()}
                  mt={index > 0 ? { lg: 8, md: 4 } : 0}
                >
                  <NewsCard
                    href={link.blogDetail}
                    img={imgAPI.photosL[30 + index]}
                    headline="Maecenas rutrum dolor sed nisi"
                    title="Proin pretium arcu eget metus porta consectetur Pellentesque habitant"
                    date="12 Nov 2020"
                    orientation="landscape"
                    type="over"
                  />
                </Box>
              ))}
              <Box mt={3} className={classes.arrow}>
                <Grid container justifyContent="space-between">
                  <Button>
                    <ArrowBackIcon className={flipRtl.flip} />
                    {t('btn_prev')}
                  </Button>
                  <Button>
                    {t('btn_next')}
                    <ArrowForwardIcon className={flipRtl.flip} />
                  </Button>
                </Grid>
              </Box>
            </Grid>
            <Grid item md={4} xs={12}>
              <Sidebar />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Fragment>
  );
}

// Use this below for Server Side Render/Translation (SSR)
// export const getStaticProps = async ({ locale }) => ({ props: { ...await serverSideTranslations(locale, ['common']) } });

// Use this below for Static Site Generation (SSG)
const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };

BlogHome.getLayout = (page, pageProps) => (
  <BlogLayout {...pageProps}>
    {page}
  </BlogLayout>
);

export default BlogHome;
