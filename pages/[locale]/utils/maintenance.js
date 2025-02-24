import React, { Fragment } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Head from 'next/head';
// Use this below for Server Side Render/Translation (SSR)
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// Use this below for Static Site Generation (SSG)
import { useTranslation } from 'next-i18next';
import { getStaticPaths, makeStaticProps } from 'lib/getStatic';
import BlurGradient from 'components/Artworks/BlurGradient';
import Icons3d from 'components/Icons3d';
import {
  useSpacing, useTextAlign,
  useText, useTextGradient
} from 'theme/common';
import brand from 'public/text/brand';

function Maintenance() {
  const { classes, cx } = useSpacing();
  const { classes: align } = useTextAlign();
  const { classes: text } = useText();
  const { classes: gradient } = useTextGradient();

  const { t } = useTranslation('common');

  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <Fragment>
      <Head>
        <title>
          { brand.name + ' - Maintenance' }
        </title>
      </Head>
      <CssBaseline />
      <div className={classes.mainWrap}>
        <BlurGradient />
        <Container maxWidth="md">
          <div className={classes.fullScreenContainer}>
            <Grid container alignItems="center" justifyContent="center">
              <Grid item md={12} className={align.textCenter}>
                <Box mb={5} display="flex" justifyContent="center">
                  {isTablet && (
                    <div className={cx(classes.primaryIcon, classes.maintenanceIcon)}>
                      <Icons3d icon="mdi-cog" color="primaryDouble" />
                    </div>
                  )}
                  <div>
                    {isTablet && (
                      <div className={cx(classes.secondaryIcon, classes.maintenanceIcon)}>
                        <Icons3d icon="mdi-code-greater-than-or-equal" color="secondaryDouble" />
                      </div>
                    )}
                    <div className={cx(classes.accentIcon, classes.maintenanceIcon)}>
                      <Icons3d icon="mdi-wrench" color="accentDouble" />
                    </div>
                  </div>
                </Box>
                <div className={align.textCenter}>
                  <h3 className={cx(text.title, theme.palette.mode === 'dark' ? gradient.tripleLight : gradient.primaryLight)}>
                    {t('util_maintenance')}
                  </h3>
                  <h5 className={text.subtitle2}>
                    {t('util_maintenance_dec')}
                  </h5>
                </div>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
    </Fragment>
  );
}

// Use this below for Server Side Render/Translation (SSR)
// export const getStaticProps = async ({ locale }) => ({ props: { ...await serverSideTranslations(locale, ['common']) } });

// Use this below for Static Site Generation (SSG)
const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };

export default Maintenance;
