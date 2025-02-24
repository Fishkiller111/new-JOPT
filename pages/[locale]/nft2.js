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
import ParallaxBanner from 'components/HomeNFT2/Parallax/ParallaxDouble';
import BannerSlider from 'components/HomeNFT2/BannerSlider';
import NewRelease from 'components/HomeNFT2/NewRelease';
import Trending from 'components/HomeNFT2/Trending';
import TableRank from 'components/HomeNFT2/TableRank';
import Explore from 'components/HomeNFT2/Explore';
import Step from 'components/HomeNFT2/Step';
import Auction from 'components/HomeNFT2/Auction';
import Counter from 'components/HomeNFT2/Counter';
import Faq from 'components/HomeNFT2/Faq';
import CallAction from 'components/HomeNFT2/CallAction';
import Corner from 'components/Utils/Corner';
import FooterDeco from 'components/Footer/Decoration/Fog';
import Notification from 'components/Utils/Notification';
import brand from 'public/text/brand';

function Nft2() {
  // Theme breakpoints
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const isTablet = useMediaQuery(theme.breakpoints.up('sm'));
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
      <section id="new" className={isMobile ? classes.spaceTopShort : ''}>
        <NewRelease />
      </section>
      <section id="trending" className={classes.spaceTop}>
        <Trending />
      </section>
      <section id="rank" className={classes.spaceTop}>
        <TableRank />
      </section>
      <section id="explore" className={isTablet ? classes.spaceTop : ''}>
        <Explore />
      </section>
      <section id="counter" className={isTablet ? classes.spaceTopShort : ''}>
        <Counter />
      </section>
      <section id="auction" className={classes.spaceTopShort}>
        <Auction />
      </section>
      <section id="sell" className={classes.spaceTopShort}>
        <Step />
      </section>
      <section id="call-action" className={cx(classes.spaceTop, classes.spaceBottom)}>
        <CallAction />
      </section>
      <section id="faq" className={isDesktop ? classes.spaceTopShort : classes.spaceTop}>
        <Faq />
      </section>
      <Hidden mdDown>
        <Corner prefix="nft2" menuList={singleMenu.nft2} />
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

Nft2.getLayout = (page, pageProps) => (
  <HomeLayout
    home
    prefix="nft2"
    menu={singleMenu.nft2}
    footerDeco={FooterDeco}
    {...pageProps}
  >
    {page}
  </HomeLayout>
);

export default Nft2;
