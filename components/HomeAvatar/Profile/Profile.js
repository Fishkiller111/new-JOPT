import React, { Fragment } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'next-i18next';
import imgAPI from 'public/images/imgAPI';
import { useText } from 'theme/common';
import useStyles from './profile-style';

function Profile() {
  const theme = useTheme();
  const { classes } = useStyles();
  const { classes: text } = useText();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const { t } = useTranslation('common');

  return (
    <div className={classes.root}>
      <Container maxWidth={isMobile ? 'sm' : 'lg'}>
        <Grid container spacing={0}>
          <Grid item lg={1} xs={12} />
          <Grid item lg={11} xs={12}>
            <div className={classes.about}>
              <div className={classes.reward}>
                <div className={classes.item}>
                  <figure>
                    <img src="/images/profile/reward1.svg" alt="badge" />
                  </figure>
                  <Typography component="p" className={text.paragraph}>Special Mention</Typography>
                  <Typography variant="h5" className={text.subtitle}>Awards</Typography>
                </div>
                <div className={classes.item}>
                  <figure>
                    <img src="/images/profile/reward2.svg" alt="badge" />
                  </figure>
                  <Typography component="p" className={text.paragraph}>100k videos</Typography>
                  <Typography variant="h5" className={text.subtitle}>Subscriber</Typography>
                </div>
                <div className={classes.item}>
                  <figure>
                    <img src="/images/profile/reward3.svg" alt="badge" />
                  </figure>
                  <Typography component="p" className={text.paragraph}>Best Filmography</Typography>
                  <Typography variant="h5" className={text.subtitle}>Footage</Typography>
                </div>
              </div>
              {!isDesktop && (
                <Fragment>
                  <div className={classes.socmed}>
                    <IconButton aria-label="Delete" className={classes.margin} size="small">
                      <i className="ion-logo-facebook" />
                    </IconButton>
                    <IconButton aria-label="Delete" className={classes.margin} size="small">
                      <i className="ion-logo-twitter" />
                    </IconButton>
                    <IconButton aria-label="Delete" className={classes.margin} size="small">
                      <i className="ion-logo-google" />
                    </IconButton>
                    <IconButton aria-label="Delete" className={classes.margin} size="small">
                      <i className="ion-logo-linkedin" />
                    </IconButton>
                  </div>
                  <Typography variant="h5">
                    {t('avatar.banner_desc')}
                  </Typography>
                </Fragment>
              )}
              <Box className={classes.photo}>
                <figure className={classes.avatar}>
                  <img src={imgAPI.profile[1]} alt="avatar" />
                </figure>
                <Paper sx={{ mx: { sm: 4, xs: 1 } }} className={classes.livePaper}>
                  <Grid spacing={2} alignItems="center" container sx={{ mb: 2 }}>
                    <Grid item xs={4}>
                      <figure>
                        <img src={imgAPI.photosL[4]} alt="content" />
                      </figure>
                    </Grid>
                    <Grid item xs={8}>
                      <Typography variant="h6">Lorem ipsum dolor sit amet consectetur</Typography>
                      <div className={classes.live}>
                        <strong>
                          <span />
                          {' '}
                          Live
                        </strong>
                        450 watching
                      </div>
                    </Grid>
                  </Grid>
                  <Button className={classes.btn} fullWidth variant="contained" size="large" color="secondary">{t('avatar.btn_watch')}</Button>
                </Paper>
              </Box>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Profile;
