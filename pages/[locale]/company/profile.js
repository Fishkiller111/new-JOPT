import React, { Fragment } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Head from 'next/head';
// Use this below for Server Side Render/Translation (SSR)
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// Use this below for Static Site Generation (SSG)
import { getStaticPaths, makeStaticProps } from 'lib/getStatic';
import { useSpacing } from 'theme/common';
import HomeLayout from 'components/Layouts/Home';
import BlueGradient from 'components/Artworks/BlurGradient';
import ProfileBanner from 'components/HeroBanner/ProfileBanner';
import ParallaxDeco from 'components/Parallax3d/Snail';
import Gallery from 'components/Company/Team/Gallery';
import Sidebar from 'components/Company/Team/Sidebar';
import FooterDeco from 'components/Footer/Decoration/General';
import brand from 'public/text/brand';
import imgAPI from 'public/images/imgAPI';

function Profile() {
  const { classes } = useSpacing();

  return (
    <Fragment>
      <Head>
        <title>
          { brand.name + ' - Profile' }
        </title>
      </Head>
      <CssBaseline />
      <BlueGradient />
      <div className={classes.innerPage}>
        <Box mt={5}>
          <section id="banner">
            <ProfileBanner
              avatar={imgAPI.avatar[31]}
              cover={imgAPI.photosL[34]}
              name={brand.profileName}
              desc={brand.profileTitle2}
              following={123}
              followers={456}
              posts={78}
              socmed={['facebook', 'twitter', 'linkedin', 'instagram']}
              friends={[imgAPI.avatar[10], imgAPI.avatar[11], imgAPI.avatar[3], imgAPI.avatar[4], imgAPI.logos[12], imgAPI.avatar[20], imgAPI.logos[8], imgAPI.avatar[1], imgAPI.avatar[3], imgAPI.avatar[6], imgAPI.avatar[6], imgAPI.avatar[6]]}
              decoration={() => <ParallaxDeco type="scroll" />}
            />
          </section>
        </Box>
      </div>
      <Container>
        <Grid container spacing={2}>
          <Grid item md={8} xs={12}>
            <Gallery />
          </Grid>
          <Grid item md={4} xs={12}>
            <Sidebar />
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
}

// Use this below for Server Side Render/Translation (SSR)
// export const getStaticProps = async ({ locale }) => ({ props: { ...await serverSideTranslations(locale, ['common']) } });

// Use this below for Static Site Generation (SSG)
const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };

Profile.getLayout = (page, pageProps) => (
  <HomeLayout footerDeco={FooterDeco} {...pageProps}>
    {page}
  </HomeLayout>
);

export default Profile;
