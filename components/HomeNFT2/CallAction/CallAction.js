import React from 'react';
import { useTranslation } from 'next-i18next';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import imgAPI from 'public/images/imgAPI';
import link from 'public/text/link';
import { useText } from 'theme/common';
import LocaleLink from '../../Link';
import useStyles from './action-style';

function CallAction() {
  // Translation Function
  const { t } = useTranslation('common');
  const { classes: text } = useText();
  const isDesktop = useMediaQuery(theme => theme.breakpoints.up('lg'));
  const isTablet = useMediaQuery(theme => theme.breakpoints.up('sm'));
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('md'));

  const { classes } = useStyles();
  return (
    <Container fixed={isDesktop} maxWidth="lg">
      <div className={classes.action}>
        <div className={classes.wrap}>
          <Grid container alignItems={isMobile ? 'flex-end' : 'center'}>
            {isTablet && (
              <Grid item md={6} sm={4} xs={12} display="flex" justifyContent="center">
                <div className={classes.illustration}>
                  <img src={imgAPI.nft[0]} alt="illustration" />
                </div>
              </Grid>
            )}
            <Grid item md={6} sm={8} xs={12} sx={{ pr: { sm: 2 } }}>
              <h4 className={text.title}>
                {t('nft2.cta_title')}
              </h4>
              <p className={text.subtitle2}>
                {t('nft2.cta_desc')}
              </p>
              <div className={classes.btnArea}>
                <Button variant="contained" component={LocaleLink} to={link.register} color="black" size="large">
                  {t('nft2.cta_btn')}
                </Button>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </Container>
  );
}

export default CallAction;
