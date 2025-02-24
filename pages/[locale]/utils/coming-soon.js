import React, { useState, Fragment } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import FilledInput from '@mui/material/FilledInput';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Head from 'next/head';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { useTranslation } from 'next-i18next';
// Use this below for Server Side Render/Translation (SSR)
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// Use this below for Static Site Generation (SSG)
import { getStaticPaths, makeStaticProps } from 'lib/getStatic';
import Logo from 'components/Branding/Logo';
import BlurGradient from 'components/Artworks/BlurGradient';
import LineDeco from 'components/Artworks/LineDeco';
import CountDown from 'components/Counter/CountDown';
import {
  useSpacing, useTextAlign,
  useText, useTextGradient
} from 'theme/common';
import brand from 'public/text/brand';

function ComingSoon() {
  const { classes, cx } = useSpacing();
  const { classes: align } = useTextAlign();
  const { classes: text } = useText();
  const { classes: gradient } = useTextGradient();
  const { t } = useTranslation('common');

  // Breakpoints
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

  const [email, setEmail] = useState('');

  const handleChange = event => {
    setEmail(event.target.value);
  };

  return (
    <Fragment>
      <Head>
        <title>
          { brand.name + ' - Coming Soon' }
        </title>
      </Head>
      <CssBaseline />
      <div className={classes.mainWrap}>
        <BlurGradient />
        {isDesktop && <LineDeco />}
        <Container maxWidth="sm">
          <Box sx={{ py: 10 }}>
            <Grid container alignItems="center">
              <Grid item md={12} xs={12} className={align.textCenter}>
                <Box
                  className={classes.logo}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  mb={5}
                >
                  <Logo type="landscape" size="large" />
                </Box>
                <div className={align.textCenter}>
                  <h3 className={cx(
                    text.title,
                    text.textPrimary,
                    text.uppercase,
                    theme.palette.mode === 'dark' ? gradient.tripleLight : gradient.primaryLight
                  )}
                  >
                    {t('util_soon')}
                  </h3>
                  <CountDown miliseconds={300000000} />
                  <Box mb={5}>
                    <h5 className={text.subtitle2}>
                      {t('util_soon_desc')}
                    </h5>
                  </Box>
                  <div className={classes.form}>
                    <Box mb={{ sm: 10 }}>
                      <Grid container justifyContent="center">
                        <Grid item sm={10} xs={12}>
                          <FormControl variant="filled" fullWidth>
                            <InputLabel htmlFor="standard-adornment-password">{t('form_email')}</InputLabel>
                            <FilledInput
                              fullWidth
                              id="standard-adornment-password"
                              value={email}
                              onChange={handleChange}
                              endAdornment={isDesktop && (
                                <Button
                                  variant="contained"
                                  color="primary"
                                  type="submit"
                                  size="small"
                                  className={classes.btnNotify}
                                >
                                  {t('util_notif')}
                                </Button>
                              )}
                            />
                          </FormControl>
                          {!isDesktop && (
                            <Box mt={3}>
                              <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                                size="large"
                                fullWidth
                              >
                                {t('util_notif')}
                              </Button>
                            </Box>
                          )}
                        </Grid>
                      </Grid>
                    </Box>
                  </div>
                  <Box mt={5}>
                    <IconButton color="primary" href="#" size="large" className={classes.btn}><FacebookIcon className={classes.fb} /></IconButton>
                    <IconButton color="primary" href="#" size="large" className={classes.btn}><TwitterIcon className={classes.tw} /></IconButton>
                    <IconButton color="primary" href="#" size="large" className={classes.btn}><InstagramIcon className={classes.ig} /></IconButton>
                    <IconButton color="primary" href="#" size="large" className={classes.btn}><LinkedInIcon className={classes.li} /></IconButton>
                  </Box>
                </div>
              </Grid>
            </Grid>
          </Box>
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

export default ComingSoon;
