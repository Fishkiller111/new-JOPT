import React from 'react';
import PropTypes from 'prop-types';
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
import Header from 'components/HomeCV/Header';
import BannerNav from 'components/HomeCV/BannerNav';
import Profile from 'components/HomeCV/Profile';
import About from 'components/HomeCV/About';
import Statistics from 'components/HomeCV/Statistics';
import Portfolios from 'components/HomeCV/Portfolios';
import Testimonials from 'components/HomeCV/Testimonials';
import Pricing from 'components/HomeCV/Pricing';
import Footer from 'components/HomeCV/Footer';
import singleMenu from 'components/Header/data/single';
import Corner from 'components/Utils/Corner';
import Notification from 'components/Utils/Notification';
import brand from 'public/text/brand';

function Blockchain(props) {
  // Theme breakpoints
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.up('md'));

  const { classes, cx } = useSpacing();
  const { onToggleDark, onToggleDir } = props;

  return (
    <React.Fragment>
      <Head>
        <title>
          { brand.name + ' - Online CV' }
        </title>
      </Head>
      <CssBaseline />
      <div className={classes.mainWrap}>
        <Header
          onToggleDark={onToggleDark}
          onToggleDir={onToggleDir}
          menu={singleMenu.profile}
        />
        <main className={cx(classes.containerFront, classes.containerWrap)}>
          <section id="home">
            <BannerNav
              onToggleDark={onToggleDark}
              onToggleDir={onToggleDir}
              menu={singleMenu.profile}
            />
            <Profile />
          </section>
          <section id="about" className={classes.spaceTop}>
            <About />
          </section>
          <section id="stats" className={classes.spaceTop}>
            <Statistics />
          </section>
          <section id="portfolios">
            <Portfolios />
          </section>
          <section id="testimonial" className={classes.spaceTopShort}>
            <Testimonials />
          </section>
          <section id="pricing" className={isTablet ? classes.spaceTop : classes.spaceTopShort}>
            <Pricing />
          </section>
        </main>
        <section id="contact">
          <Footer />
        </section>
        <Hidden mdDown>
          <Corner prefix="profile" menuList={singleMenu.profile} />
        </Hidden>
        <Hidden lgDown>
          <Notification />
        </Hidden>
      </div>
      <script src="/scripts/three.r119.min.js" />
      <script src="/scripts/vanta.halo.min.js" />
    </React.Fragment>
  );
}

Blockchain.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
};

// Use this below for Server Side Render/Translation (SSR)
// export const getStaticProps = async ({ locale }) => ({ props: { ...await serverSideTranslations(locale, ['common']) } });

// Use this below for Static Site Generation (SSG)
const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };

export default Blockchain;
