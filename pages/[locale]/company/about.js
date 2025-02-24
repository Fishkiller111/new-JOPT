import React, { Fragment } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import useMediaQuery from '@mui/material/useMediaQuery';
// Use this below for Server Side Render/Translation (SSR)
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// Use this below for Static Site Generation (SSG)
import { getStaticPaths, makeStaticProps } from 'lib/getStatic';
import { useSpacing } from 'theme/common';
import HomeLayout from 'components/Layouts/Home';
import BannerVideo from 'components/HeroBanner/MediaBanner';
import ParallaxDeco from 'components/Parallax3d/Geometric';
import Description from 'components/Company/About/Description';
import KeyValues from 'components/Company/About/KeyValues';
import Culture from 'components/Company/About/Culture';
import CounterCarousel from 'components/Counter/CounterCarousel';
import Team from 'components/Company/Team';
import NewsEvent from 'components/Company/NewsEvent';
import StaticGallery from 'components/Company/Collage/Static';
import FooterDeco from 'components/Footer/Decoration/General';
import brand from 'public/text/brand';
import imgAPI from 'public/images/imgAPI';

function About() {
  const { classes, cx } = useSpacing();
  const { t } = useTranslation('common');

  const isDesktop = useMediaQuery(theme => theme.breakpoints.up('sm'));
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('sm'));

  return (
    <Fragment>
      <Head>
        <title>
          { brand.name + ' - About' }
        </title>
      </Head>
      <CssBaseline />
      <div className={classes.innerPage}>
        <section id="banner">
          <BannerVideo
            title={t('about_banner_title')}
            cover={imgAPI.inner[1]}
            thumb={imgAPI.photosL[53]}
            videoBg="WRCB2QSrQQU"
            videoPopup="rX2T9jH0OxA"
            decoration={() => <ParallaxDeco type="scroll" />}
          />
        </section>
        <section id="desc" className={isMobile ? classes.spaceTopShort : classes.spaceTop}>
          <Description />
        </section>
        <section id="key" className={classes.spaceTop}>
          <KeyValues />
        </section>
        <section id="counter" className={classes.spaceTopShort}>
          <CounterCarousel title={t('service_counter_title')} desc={t('service_counter_desc')} cover={imgAPI.photosL[32]} />
        </section>
        <section id="culture" className={isMobile ? classes.spaceTopShort : classes.spaceTop}>
          <Culture />
        </section>
        <section id="team" className={classes.spaceTop}>
          <Team />
        </section>
        <Box sx={{ mt: -25 }}>
          <StaticGallery btnText={t('btn_join')} />
        </Box>
        <section id="news" className={cx(isDesktop ? classes.spaceTop : '', isMobile ? classes.spaceBottomShort : '')}>
          <NewsEvent />
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

About.getLayout = (page, pageProps) => (
  <HomeLayout footerDeco={FooterDeco} {...pageProps}>
    {page}
  </HomeLayout>
);

export default About;
