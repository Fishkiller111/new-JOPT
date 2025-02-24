import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'next-i18next';
import imgAPI from 'public/images/imgAPI';
import ParallaxTitle from '../../Title/ParallaxTitle';
import useStyles from './about-style';

function Description() {
  const { cx, classes } = useStyles();
  const theme = useTheme();

  const { t } = useTranslation('common');
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container className={classes.desc}>
      <ParallaxTitle
        bgTitle={t('about_bgtitle')}
        mainTitle={t('about_title')}
        color={theme.palette.mode === 'dark' ? 'tripleMain' : 'tripleLight'}
      />
      <Paper className={classes.paper}>
        <Grid container spacing={isMobile ? 2 : 6}>
          <Grid item md={7} xs={12}>
            <Typography>
              {t('about_desc1')}
            </Typography>
            <Typography>
              {t('about_desc2')}
            </Typography>
            <Typography variant="h5" className={classes.quote}>
              <i className="ion-ios-quote" />
              <em>{t('about_quote')}</em>
            </Typography>
          </Grid>
          <Grid item md={5} xs={12}>
            <div className={classes.counter}>
              <Card className={cx(classes.card, classes.primary)}>
                <CardMedia
                  sx={{ height: 140 }}
                  image={imgAPI.photosP[15]}
                  title="work"
                />
                <div className={classes.count}>
                  <Typography variant="h2">+300</Typography>
                  <Typography variant="h5">Developers</Typography>
                </div>
              </Card>
              <Card className={cx(classes.card, classes.secondary)}>
                <CardMedia
                  sx={{ height: 140 }}
                  image={imgAPI.photosS[9]}
                  title="founded"
                />
                <div className={classes.count}>
                  <Typography variant="h5">Founded In</Typography>
                  <Typography variant="h2">2011</Typography>
                </div>
              </Card>
              <Card className={cx(classes.card, classes.accent)}>
                <CardMedia
                  sx={{ height: 140 }}
                  image={imgAPI.photosL[54]}
                  title="project"
                />
                <div className={classes.count}>
                  <Typography variant="h2">+1000</Typography>
                  <Typography variant="h5">Projects</Typography>
                </div>
              </Card>
            </div>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default Description;
