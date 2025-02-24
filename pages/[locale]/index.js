import React, { Fragment } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Head from 'next/head';
// Use this below for Server Side Render/Translation (SSR)
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// Use this below for Static Site Generation (SSG)
import Hidden from '@mui/material/Hidden';
import { getStaticPaths, makeStaticProps } from 'lib/getStatic';
import { useSpacing } from 'theme/common';
import singleMenu from 'components/Header/data/single';
import HomeLayout from 'components/Layouts/Home';
import BannerSlider from 'components/HomeAi/BannerSlider';
import About from 'components/HomeAi/About';
import Feature from 'components/HomeAi/Feature';
import Step from 'components/HomeAi/Step';
import Research from 'components/HomeAi/Research';
import Community from 'components/HomeAi/Community';
import NewsEvent from 'components/HomeAi/NewsEvent';
import Faq from 'components/HomeAi/Faq';
import CallAction from 'components/HomeAi/CallAction';
import FooterDeco from 'components/Footer/Decoration/Liquid';
import Corner from 'components/Utils/Corner';
import Notification from 'components/Utils/Notification';
import brand from 'public/text/brand';

function Landing() {
  // Theme breakpoints
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const { classes, cx } = useSpacing();

  return (
    <Fragment>
      <Head>
        <title>
          { brand.name + ' - Ai Home Page' }
        </title>
      </Head>
      <CssBaseline />
      <section id="home">
        <BannerSlider />
      </section>
      <section id="about" className={isTablet ? classes.spaceTopShort : classes.spaceTop}>
        <About />
      </section>
      <section id="feature">
        <Feature />
      </section>
      <section id="discover" className={classes.spaceTopShort}>
        <Step />
      </section>
      <section id="research" className={isMobile ? classes.spaceTopShort : classes.spaceTop}>
        <Research />
      </section>
      <section id="community" className={!isMobile ? classes.spaceTop : ''}>
        <Community />
      </section>
      <section id="faq" className={classes.spaceTopShort}>
        <Faq />
      </section>
      <section id="blog" className={classes.spaceTopShort}>
        <NewsEvent />
      </section>
      <section id="call-action" className={cx(classes.spaceTop, classes.spaceBottom)}>
        <CallAction />
      </section>
      <Hidden mdDown>
        <Corner menuList={singleMenu.ai} />
      </Hidden>
      <Hidden lgDown>
        <Notification />
      </Hidden>
    </Fragment>
  );
}
// Use this below for Server Side Render/Translation (SSR)
// export const getStaticProps = async ({ locale }) => ({ props: { ...await serverSideTranslations(locale, ['common']) } });

// Use this below for Static Site Generation (SSG)
const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };

Landing.getLayout = (page, pageProps) => (
  <HomeLayout
    home
    menu={singleMenu.ai}
    footerDeco={FooterDeco}
    {...pageProps}
  >
    {page}
  </HomeLayout>
);

export default Landing;
