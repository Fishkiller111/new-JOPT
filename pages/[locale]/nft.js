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
import ParallaxBanner from 'components/HomeNFT/Parallax/ParallaxDouble';
import BannerSlider from 'components/HomeNFT/BannerSlider';
import NewRelease from 'components/HomeNFT/NewRelease';
import Trending from 'components/HomeNFT/Trending';
import ListRank from 'components/HomeNFT/ListRank';
import Explore from 'components/HomeNFT/Explore';
import Step from 'components/HomeNFT/Step';
import Auction from 'components/HomeNFT/Auction';
import CallAction from 'components/HomeNFT/CallAction';
import NewsEvent from 'components/HomeNFT/NewsEvent';
import Corner from 'components/Utils/Corner';
import FooterDeco from 'components/Footer/Decoration/Fog';
import Notification from 'components/Utils/Notification';
import brand from 'public/text/brand';

function Nft() {
  // Theme breakpoints
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const { classes, cx } = useSpacing();
  return (
    <Fragment>
      <Head>
        <title>
          { brand.name + ' - NFT Marketplace' }
        </title>
      </Head>
      <CssBaseline />
      {isDesktop && (
        <ParallaxBanner />
      )}
      <section id="home">
        <BannerSlider />
      </section>
      <section id="collection" className={classes.spaceTopShort}>
        <Explore />
      </section>
      <section id="trending" className={classes.spaceTop}>
        <Trending />
      </section>
      <section id="rank" className={classes.spaceTop}>
        <ListRank />
      </section>
      <section id="explore" className={!isMobile ? classes.spaceTopShort : ''}>
        <Auction />
      </section>
      <section id="new-release" className={isTablet ? classes.spaceTop : classes.spaceTopShort}>
        <NewRelease />
      </section>
      <section id="sell" className={classes.spaceTop}>
        <Step />
      </section>
      <section id="call-action" className={cx(classes.spaceTop, classes.spaceBottom)}>
        <CallAction />
      </section>
      <section id="news" className={cx(classes.spaceTop, isMobile ? classes.spaceBottomShort : '')}>
        <NewsEvent />
      </section>
      <Hidden mdDown>
        <Corner prefix="nft" menuList={singleMenu.nft} />
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

Nft.getLayout = (page, pageProps) => (
  <HomeLayout
    home
    prefix="nft"
    menu={singleMenu.nft}
    footerDeco={FooterDeco}
    {...pageProps}
  >
    {page}
  </HomeLayout>
);

export default Nft;
