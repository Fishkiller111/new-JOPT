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
import BasicBanner from 'components/HeroBanner/BasicBanner';
import ParallaxDeco from 'components/Parallax3d/Planet';
import StaticGallery from 'components/Company/Collage/Static';
import Benefit from 'components/Company/Career/Benefit';
import JobList from 'components/Company/Career/JobList';
import NewsEvent from 'components/Company/NewsEvent';
import FooterDeco from 'components/Footer/Decoration/General';
import link from 'public/text/link';
import brand from 'public/text/brand';

function Career() {
  const { classes } = useSpacing();
  const { t } = useTranslation('common');

  const isTablet = useMediaQuery(theme => theme.breakpoints.up('sm'));

  return (
    <Fragment>
      <Head>
        <title>
          { brand.name + ' - Career' }
        </title>
      </Head>
      <CssBaseline />
      <div className={classes.innerPage}>
        <section id="banner">
          <BasicBanner
            bgTitle={t('career_bgtitle')}
            title={t('career_title')}
            desc={t('career_subtitle')}
            btnPrimary={t('career_joblist')}
            btnSecondary={t('about_bgtitle')}
            link1="#joblist"
            link2={link.about}
            decoration={() => <ParallaxDeco type="scroll" />}
          />
        </section>
        <Box mt={-15}>
          <StaticGallery />
        </Box>
        <section id="benefit" className={isTablet ? classes.spaceTop : ''}>
          <Benefit />
        </section>
        <section id="joblist" className={classes.spaceTop}>
          <JobList />
        </section>
        <section id="news" className={classes.spaceTopShort}>
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

Career.getLayout = (page, pageProps) => (
  <HomeLayout footerDeco={FooterDeco} {...pageProps}>
    {page}
  </HomeLayout>
);

export default Career;
