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
import HomeLayout from 'components/Layouts/Home';
import singleMenu from 'components/Header/data/single';
import BannerSlider from 'components/HomeBlockchain/BannerSlider';
import About from 'components/HomeBlockchain/About';
import Feature from 'components/HomeBlockchain/Feature';
import Step from 'components/HomeBlockchain/Step';
import Projects from 'components/HomeBlockchain/Projects';
import EventSlider from 'components/HomeBlockchain/EventSlider';
import EventList from 'components/HomeBlockchain/EventList';
import NewsEvent from 'components/HomeBlockchain/NewsEvent';
import CallAction from 'components/HomeBlockchain/CallAction';
import Corner from 'components/Utils/Corner';
import FooterDeco from 'components/Footer/Decoration/Stone';
import Notification from 'components/Utils/Notification';
import brand from 'public/text/brand';

function Blockchain() {
  // Theme breakpoints
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const { classes, cx } = useSpacing();
  return (
    <Fragment>
      <Head>
        <title>
          { brand.name + ' - Blockchain Home Page' }
        </title>
      </Head>
      <CssBaseline />
      <section id="home">
        <BannerSlider />
      </section>
      <section id="about" className={isMobile ? classes.spaceTopShort : classes.spaceTop}>
        <About />
      </section>
      <section id="feature" className={classes.spaceTopShort}>
        <Feature />
      </section>
      <section id="discover" className={classes.spaceTopShort}>
        <Step />
      </section>
      <section id="projects" className={classes.spaceTop}>
        <Projects />
      </section>
      <section id="events" className={isMobile ? classes.spaceTopShort : classes.spaceTop}>
        <EventSlider />
      </section>
      <section id="event_list" className={classes.spaceTop}>
        <EventList />
      </section>
      <section id="blog" className={classes.spaceTopShort}>
        <NewsEvent />
      </section>
      <section id="call-action" className={cx(classes.spaceTop, classes.spaceBottom)}>
        <CallAction />
      </section>
      <Hidden mdDown>
        <Corner prefix="blockchain" menuList={singleMenu.blockchain} />
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

Blockchain.getLayout = (page, pageProps) => (
  <HomeLayout
    home
    prefix="blockchain"
    menu={singleMenu.blockchain}
    footerDeco={FooterDeco}
    {...pageProps}
  >
    {page}
  </HomeLayout>
);

export default Blockchain;
