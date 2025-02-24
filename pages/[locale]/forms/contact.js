import React, { Fragment } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Head from 'next/head';
// Use this below for Server Side Render/Translation (SSR)
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// Use this below for Static Site Generation (SSG)
import { getStaticPaths, makeStaticProps } from 'lib/getStatic';
import { useSpacing } from 'theme/common';
import HomeLayout from 'components/Layouts/Home';
import BlurGradient from 'components/Artworks/BlurGradient';
import FooterDeco from 'components/Footer/Decoration/General';
import Contact from 'components/Forms/Contact';
import brand from 'public/text/brand';

function ContactPage() {
  const { classes } = useSpacing();

  return (
    <Fragment>
      <Head>
        <title>
          { brand.name + ' - Contact'}
        </title>
      </Head>
      <CssBaseline />
      <BlurGradient />
      <div className={classes.containerGeneral}>
        <Contact />
      </div>
    </Fragment>
  );
}

// Use this below for Server Side Render/Translation (SSR)
// export const getStaticProps = async ({ locale }) => ({ props: { ...await serverSideTranslations(locale, ['common']) } });

// Use this below for Static Site Generation (SSG)
const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };

ContactPage.getLayout = (page, pageProps) => (
  <HomeLayout footerDeco={FooterDeco} {...pageProps}>
    {page}
  </HomeLayout>
);

export default ContactPage;
