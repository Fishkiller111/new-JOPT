import React, { Fragment } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Head from 'next/head';
// Use this below for Server Side Render/Translation (SSR)
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// Use this below for Static Site Generation (SSG)
import { getStaticPaths, makeStaticProps } from 'lib/getStatic';
import { useSpacing } from 'theme/common';
import HomeLayout from 'components/Layouts/Home';
import MediaBanner from 'components/HeroBanner/MediaBanner';
import Sidebar from 'components/Collection/Portfolio/Sidebar';
import Detail from 'components/Collection/Portfolio/Detail';
import ParallaxDeco from 'components/Parallax3d/Basket';
import FooterDeco from 'components/Footer/Decoration/General';
import brand from 'public/text/brand';
import imgAPI from 'public/images/imgAPI';

function PortfolioDetail() {
  const { classes } = useSpacing();

  return (
    <Fragment>
      <Head>
        <title>
          { brand.name + ' - Portfolio Detail' }
        </title>
      </Head>
      <CssBaseline />
      <div className={classes.innerPage}>
        <section id="banner">
          <MediaBanner
            title="Interdum et Malesuada Fames"
            cover={imgAPI.photosL[43]}
            thumb={imgAPI.photosP[5]}
            decoration={() => <ParallaxDeco type="scroll" />}
            tags={['branding', 'creative']}
          />
        </section>
        <section id="content">
          <Container sx={{ px: 0 }}>
            <Grid container justifyContent="center">
              <Grid item lg={7} md={8} xs={12}>
                <Detail />
              </Grid>
              <Grid item lg={5} md={4} sm={8} xs={12}>
                <Sidebar />
              </Grid>
            </Grid>
          </Container>
        </section>
      </div>
    </Fragment>
  );
}

// Use this below for Server Side Render/Translation (SSR)
// export const getStaticProps = async ({ locale }) => ({ props: { ...await serverSideTranslations(locale, ['common']) } });

// Use this below for Static Site Generation (SSG)
const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };

PortfolioDetail.getLayout = (page, pageProps) => (
  <HomeLayout footerDeco={FooterDeco} {...pageProps}>
    {page}
  </HomeLayout>
);

export default PortfolioDetail;
