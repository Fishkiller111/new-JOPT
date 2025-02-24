import React, { Fragment } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import useMediaQuery from '@mui/material/useMediaQuery';
// Use this below for Server Side Render/Translation (SSR)
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// Use this below for Static Site Generation (SSG)
import { getStaticPaths, makeStaticProps } from 'lib/getStatic';
import { useSpacing } from 'theme/common';
import HomeLayout from 'components/Layouts/Home';
import BannerImage from 'components/HeroBanner/MediaBanner';
import Group from 'components/Collection/Services/Group';
import Single from 'components/Collection/Services/Single';
import CounterCarousel from 'components/Counter/CounterCarousel';
import Values from 'components/Collection/Services/Values';
import Related from 'components/Collection/Services/Related';
import ParallaxDeco from 'components/Parallax3d/Snail';
import FooterDeco from 'components/Footer/Decoration/General';
import brand from 'public/text/brand';
import imgAPI from 'public/images/imgAPI';

function Services() {
  const { classes, cx } = useSpacing();
  const { t } = useTranslation('common');

  const isDesktop = useMediaQuery(theme => theme.breakpoints.up('lg'));
  const isTablet = useMediaQuery(theme => theme.breakpoints.up('sm'));

  return (
    <Fragment>
      <Head>
        <title>
          { brand.name + ' - Services' }
        </title>
      </Head>
      <CssBaseline />
      <div className={classes.innerPage}>
        <section id="banner">
          <BannerImage
            title={t('service_banner_title')}
            cover={imgAPI.inner[2]}
            decoration={() => <ParallaxDeco type="scroll" />}
          />
        </section>
        <section id="group" className={isTablet ? classes.spaceTop : classes.spaceTopShort}>
          <Group />
        </section>
        <section id="single" className={classes.spaceTop}>
          <Single />
        </section>
        <section id="counter" className={classes.spaceTopShort}>
          <CounterCarousel title={t('service_counter_title')} desc={t('service_counter_desc')} cover={imgAPI.photosL[32]} />
        </section>
        <section id="values" className={isTablet ? classes.spaceTopShort : classes.spaceTop}>
          <Values />
        </section>
        <section id="related" className={cx(isDesktop ? classes.spaceTopShort : classes.spaceTop, !isDesktop ? classes.spaceBottomShort : '')}>
          <Related />
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

Services.getLayout = (page, pageProps) => (
  <HomeLayout footerDeco={FooterDeco} {...pageProps}>
    {page}
  </HomeLayout>
);

export default Services;
