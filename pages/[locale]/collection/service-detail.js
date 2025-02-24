import React, { Fragment } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import useMediaQuery from '@mui/material/useMediaQuery';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
// Use this below for Server Side Render/Translation (SSR)
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// Use this below for Static Site Generation (SSG)
import { getStaticPaths, makeStaticProps } from 'lib/getStatic';
import { useSpacing } from 'theme/common';
import HomeLayout from 'components/Layouts/Home';
import IconBanner from 'components/HeroBanner/IconBanner';
import LogoGroup from 'components/Branding/Logo/LogoGroup';
import Infographic from 'components/Collection/Services/Infographic';
import Feature from 'components/Collection/Services/Feature';
import Related from 'components/Collection/Services/Related';
import Categories from 'components/Collection/Services/Categories';
import FooterDeco from 'components/Footer/Decoration/General';
import link from 'public/text/link';
import brand from 'public/text/brand';
import imgAPI from 'public/images/imgAPI';

function Services() {
  const { classes } = useSpacing();
  const { t } = useTranslation('common');

  const isTablet = useMediaQuery(theme => theme.breakpoints.up('sm'));

  return (
    <Fragment>
      <Head>
        <title>
          { brand.name + ' - Services Detail' }
        </title>
      </Head>
      <CssBaseline />
      <div className={classes.innerPage}>
        <section id="banner">
          <IconBanner
            cover={imgAPI.photosL[6]}
            title={t('login_create')}
            desc={t('contact_subtitle')}
            features={['200+ DEVELOPERS', 'FLEXIBLE SCOPE', 'SPRINT BASED', 'FULL TEAM']}
            icon={['mdi-shopping', 'mdi-music', 'mdi-folder-multiple-image']}
            btnPrimary={{ href: link.contact, text: t('btn_get') }}
            btnSecondary={{ href: link.portfolioDetail, text: t('btn_read_more') }}
            counterPrimary={{ title: 'Project Success', count: 345 }}
            counterSecondary={{ title: 'Experts', count: 56 }}
          />
        </section>
        <div id="logo_group" className={classes.spaceTopShort}>
          <LogoGroup />
        </div>
        <section id="feature" className={classes.spaceTopShort}>
          <Feature />
        </section>
        <section id="infographic" className={classes.spaceTop}>
          <Infographic />
        </section>
        <section id="related" className={isTablet ? classes.spaceTopShort : classes.spaceTop}>
          <Related />
        </section>
        <section id="categories" className={classes.spaceTopShort}>
          <Categories />
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
