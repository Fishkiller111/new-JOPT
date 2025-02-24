import React, { Fragment, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
// Use this below for Server Side Render/Translation (SSR)
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// Use this below for Static Site Generation (SSG)
import { getStaticPaths, makeStaticProps } from 'lib/getStatic';
import { useSpacing } from 'theme/common';
import brand from 'public/text/brand';
import BlurGradient from 'components/Artworks/BlurGradient';
import HomeLayout from 'components/Layouts/Home';
import ParallaxDeco from 'components/Parallax3d/Food';
import BasicBanner from 'components/HeroBanner/BasicBanner';
import Search from 'components/Filter/Search';
import FaqList from 'components/Utils/Faq/FaqList';
import Shortcut from 'components/Utils/Faq/Shortcut';
import TopicList from 'components/Utils/Faq/TopicList';
import HelperWidget from 'components/Utils/Faq/HelperWidget';
import FooterDeco from 'components/Footer/Decoration/General';

function Faq() {
  const { classes } = useSpacing();
  const [keyword, setKeyword] = useState('');
  const { t } = useTranslation('common');

  const isMobile = useMediaQuery(theme => theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme => theme.breakpoints.between('md', 'lg'));

  return (
    <Fragment>
      <Head>
        <title>
          { brand.name + ' - Faq' }
        </title>
      </Head>
      <CssBaseline />
      <BlurGradient />
      <div className={classes.innerPage}>
        <div className={classes.containerWrap}>
          <div className={classes.containerGeneral}>
            <section id="banner" className={classes.spaceBottomShort}>
              <BasicBanner
                title={t('faq_title')}
                desc={t('contact_subtitle')}
                bgTitle={t('header_faq')}
                decoration={() => <ParallaxDeco type="scroll" />}
              />
              <Box mt={{ md: -20, xs: -15 }}>
                <Container maxWidth="md" className={classes.containerFront}>
                  <Search value={keyword} updateValue={setKeyword} />
                </Container>
              </Box>
            </section>
            <div className={classes.spaceBottomShort}>
              <Shortcut />
            </div>
            <Grid
              container
              className={classes.spaceBottomhort}
              spacing={3}
              justifyContent="center"
              direction={isMobile ? 'column-reverse' : 'row'}
            >
              <Grid item lg={4} md={4} xs={12}>
                <Box px={!isTablet ? 3 : 0}>
                  <TopicList />
                  <HelperWidget />
                </Box>
              </Grid>
              <Grid item lg={6} md={7} xs={12}>
                <Box px={3}>
                  <FaqList />
                </Box>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

// Use this below for Server Side Render/Translation (SSR)
// export const getStaticProps = async ({ locale }) => ({ props: { ...await serverSideTranslations(locale, ['common']) } });

// Use this below for Static Site Generation (SSG)
const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };

Faq.getLayout = (page, pageProps) => (
  <HomeLayout footerDeco={FooterDeco} {...pageProps}>
    {page}
  </HomeLayout>
);

export default Faq;
