import React, { Fragment } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Head from 'next/head';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
// Use this below for Server Side Render/Translation (SSR)
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// Use this below for Static Site Generation (SSG)
import { getStaticPaths, makeStaticProps } from 'lib/getStatic';
import BlogLayout from 'components/Layouts/Blog';
import BlueGradient from 'components/Artworks/BlurGradient';
import Article from 'components/Company/Blog/Article';
import Sidebar from 'components/Company/Blog/Sidebar';
import brand from 'public/text/brand';

function BlogDetail() {
  return (
    <Fragment>
      <Head>
        <title>
          { brand.name + ' - Blog'}
        </title>
      </Head>
      <CssBaseline />
      <section id="home" />
      <BlueGradient />
      <Container>
        <Grid container spacing={4}>
          <Grid item md={8} xs={12}>
            <Article />
          </Grid>
          <Grid item md={4} xs={12}>
            <Sidebar />
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
}

// Use this below for Server Side Render/Translation (SSR)
// export const getStaticProps = async ({ locale }) => ({ props: { ...await serverSideTranslations(locale, ['common']) } });

// Use this below for Static Site Generation (SSG)
const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };

BlogDetail.getLayout = (page, pageProps) => (
  <BlogLayout {...pageProps}>
    {page}
  </BlogLayout>
);

export default BlogDetail;
