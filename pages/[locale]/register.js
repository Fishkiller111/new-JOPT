import React, { Fragment } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Head from 'next/head';
// Use this below for Server Side Render/Translation (SSR)
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// Use this below for Static Site Generation (SSG)
import { getStaticPaths, makeStaticProps } from 'lib/getStatic';
import { useSpacing } from 'theme/common';
import AuthLayout from 'components/Layouts/Auth';
import Register from 'components/Forms/Register';
import brand from 'public/text/brand';
import link from 'public/text/link';

function RegisterPage() {
  const { classes, cx } = useSpacing();

  return (
    <Fragment>
      <Head>
        <title>
          { brand.name + ' - Register' }
        </title>
      </Head>
      <CssBaseline />
      <div className={cx(classes.containerGeneral, classes.containerFront)}>
        <Register />
      </div>
    </Fragment>
  );
}

// Use this below for Server Side Render/Translation (SSR)
// export const getStaticProps = async ({ locale }) => ({ props: { ...await serverSideTranslations(locale, ['common']) } });

// Use this below for Static Site Generation (SSG)
const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };

RegisterPage.getLayout = (page, pageProps) => (
  <AuthLayout btnText="header_login" link={link.login} {...pageProps}>
    {page}
  </AuthLayout>
);

export default RegisterPage;
