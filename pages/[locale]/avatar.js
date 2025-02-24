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
import Header from 'components/HomeAvatar/Header';
import BannerNav from 'components/HomeAvatar/BannerNav';
import Profile from 'components/HomeAvatar/Profile';
import About from 'components/HomeAvatar/About';
import Statistics from 'components/HomeAvatar/Statistics';
import Portfolios from 'components/HomeAvatar/Portfolios';
import Testimonials from 'components/HomeAvatar/Testimonials';
import Blog from 'components/HomeAvatar/Blog';
import Footer from 'components/HomeAvatar/Footer';
import singleMenu from 'components/Header/data/single';
import Corner from 'components/Utils/Corner';
import Notification from 'components/Utils/Notification';
import brand from 'public/text/brand';

function Blockchain(props) {
  // Theme breakpoints
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const { classes, cx } = useSpacing();
  const { onToggleDark, onToggleDir } = props;

  return (
    <React.Fragment>
      <Head>
        <title>
          { brand.name + ' - Avatar' }
        </title>
      </Head>
      <CssBaseline />
      <div className={classes.mainWrap}>
        <Header
          onToggleDark={onToggleDark}
          onToggleDir={onToggleDir}
          menu={singleMenu.avatar}
        />
        <main className={cx(classes.containerFront, classes.containerWrap)}>
          <section id="home">
            <BannerNav
              onToggleDark={onToggleDark}
              onToggleDir={onToggleDir}
              menu={singleMenu.avatar}
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
          <section id="blog" className={isMobile ? classes.spaceTopShort : classes.spaceTop}>
            <Blog />
          </section>
        </main>
        <section id="contact" className={isTablet ? classes.spaceTopShort : classes.spaceTop}>
          <Footer />
        </section>
        <Hidden mdDown>
          <Corner prefix="avatar" menuList={singleMenu.avatar} />
        </Hidden>
        <Hidden lgDown>
          <Notification />
        </Hidden>
      </div>
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
