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
import BannerSlider from 'components/HomeFintech/BannerSlider';
import Step from 'components/HomeFintech/Step';
import ChartPrice from 'components/HomeFintech/ChartPrice';
import Feature from 'components/HomeFintech/Feature';
import Benefit from 'components/HomeFintech/Benefit';
import Counter from 'components/HomeFintech/Counter';
import Faq from 'components/HomeFintech/Faq';
import Merchants from 'components/HomeFintech/Merchants';
import CallAction from 'components/HomeFintech/CallAction';
import Corner from 'components/Utils/Corner';
import FooterDeco from 'components/Footer/Decoration/Wave';
import Notification from 'components/Utils/Notification';
import brand from 'public/text/brand';

function Fintech() {
  // Theme breakpoints
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.up('sm'));

  const { classes, cx } = useSpacing();

  return (
    <Fragment>
      <Head>
        <title>
          { brand.name + ' - Crypto Wallet Page' }
        </title>
      </Head>
      <CssBaseline />
      <section id="home">
        <BannerSlider />
      </section>
      <section id="howto" className={classes.spaceTop}>
        <Step />
      </section>
      <section id="chart" className={classes.spaceTop}>
        <ChartPrice />
      </section>
      <section id="feature" className={isTablet ? classes.spaceTopShort : ''}>
        <Feature />
      </section>
      <section id="benefit" className={classes.spaceTop}>
        <Benefit />
      </section>
      <section id="counter" className={classes.spaceTopShort}>
        <Counter />
      </section>
      <section id="merchants" className={classes.spaceTopShort}>
        <Merchants />
      </section>
      <section id="call-action" className={cx(classes.spaceTop, classes.spaceBottom)}>
        <CallAction />
      </section>
      <section id="faq" className={classes.spaceTopShort}>
        <Faq />
      </section>
      <Hidden mdDown>
        <Corner prefix="fintech" menuList={singleMenu.fintech} />
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

Fintech.getLayout = (page, pageProps) => (
  <HomeLayout
    home
    prefix="fintech"
    menu={singleMenu.fintech}
    footerDeco={FooterDeco}
    subscribe
    {...pageProps}
  >
    {page}
  </HomeLayout>
);

export default Fintech;
