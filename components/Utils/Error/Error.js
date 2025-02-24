import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'next-i18next';
import BlurGradient from 'components/Artworks/BlurGradient';
import imgAPI from 'public/images/imgAPI';
import { useText, useTextGradient } from 'theme/common';
import link from 'public/text/link';
import useStyles from './error-style';
import LocaleLink from '../../Link';

function Error(props) {
  const { classes, cx } = useStyles();
  const { classes: gradient } = useTextGradient();
  const txt = useText();
  const { errCode, text } = props;
  const { t } = useTranslation('common');

  const isTablet = useMediaQuery(theme => theme.breakpoints.up('sm'));

  return (
    <div className={classes.errorWrap}>
      <BlurGradient />
      <Container>
        <Grid container>
          {isTablet && (
            <Grid item sm={5} xs={12}>
              <div className={classes.flex}>
                <div className={classes.illustration}>
                  <img
                    src={imgAPI.inner[0]}
                    alt="error"
                  />
                </div>
              </div>
            </Grid>
          )}
          <Grid item sm={7} xs={12}>
            <div className={classes.text}>
              <Typography variant="h1" className={cx(gradient.tripleLight, txt.textPrimary)}>
                <strong>
                  {errCode}
                </strong>
              </Typography>
              <Typography variant="h4">{text}</Typography>
              <Typography>
                {t('404_subtitle')}
              </Typography>
              <Button component={LocaleLink} color="primary" variant="outlined" to={link.home} size="large" className={classes.button}>
                {t('back')}
              </Button>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

Error.propTypes = {
  errCode: PropTypes.string,
  text: PropTypes.string,
};

Error.defaultProps = {
  errCode: '404',
  text: '',
};

export default Error;
