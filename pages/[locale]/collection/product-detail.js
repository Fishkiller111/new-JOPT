import React, { Fragment } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Head from 'next/head';
// Use this below for Server Side Render/Translation (SSR)
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// Use this below for Static Site Generation (SSG)
import { getStaticPaths, makeStaticProps } from 'lib/getStatic';
import { useSpacing } from 'theme/common';
import HomeLayout from 'components/Layouts/Home';
import BlueGradient from 'components/Artworks/BlurGradient';
import Detail from 'components/Collection/Product/Detail';
import Description from 'components/Collection/Product/Description';
import RelatedItems from 'components/Collection/Product/RelatedItems';
import FooterDeco from 'components/Footer/Decoration/General';
import brand from 'public/text/brand';

function ProductDetail() {
  const { classes } = useSpacing();

  return (
    <Fragment>
      <Head>
        <title>
          { brand.name + ' - Product Detail'}
        </title>
      </Head>
      <CssBaseline />
      <BlueGradient />
      <div className={classes.innerPage}>
        <Container>
          <Detail />
          <Description />
        </Container>
        <RelatedItems />
      </div>
    </Fragment>
  );
}

// Use this below for Server Side Render/Translation (SSR)
// export const getStaticProps = async ({ locale }) => ({ props: { ...await serverSideTranslations(locale, ['common']) } });

// Use this below for Static Site Generation (SSG)
const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };

ProductDetail.getLayout = (page, pageProps) => (
  <HomeLayout footerDeco={FooterDeco} {...pageProps}>
    {page}
  </HomeLayout>
);

export default ProductDetail;
