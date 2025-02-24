import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/LocalPhone';
import LocationIcon from '@mui/icons-material/LocationOn';
import Snackbar from '@mui/material/Snackbar';
import { useTranslation } from 'next-i18next';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import {
  Map,
  Marker,
  GoogleApiWrapper,
  InfoWindow
} from 'google-maps-react18';
import { useText, useTextAlign } from 'theme/common';
import ClayDeco from '../Artworks/ClayDeco';
import Title from '../Title';
import useStyles from './form-style';
import bubleStyles from './buble-style';
import Checkbox from './Checkbox';

function BubleMark() {
  const { cx, classes } = bubleStyles();
  return (
    <div className={classes.bubelWrap}>
      <div className={classes.buble}>
        <h4>
          Head Quarter
        </h4>
        <div className={classes.content}>
          <div className={classes.item}>
            <p>
              <PhoneIcon />
              +98 765 432 10
            </p>
          </div>
          <div className={classes.item}>
            <p>
              <EmailIcon />
              hello@luxi.com
            </p>
          </div>
          <div className={cx(classes.item, classes.full)}>
            <p>
              <LocationIcon />
              Lorem ipsum street Block C - Vestibullum Building
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MapContainer(props) {
  const [activeMarker, setActive] = useState({});
  const [showingInfoWindow, setShow] = useState(false);
  const { google } = props;
  // eslint-disable-next-line
  const onMarkerClick = (props, marker) => {
    setActive(marker);
    setShow(true);
  };

  const onMapClicked = () => {
    if (showingInfoWindow) {
      setShow(false);
      setActive(null);
    }
  };

  return (
    <Map
      google={google}
      onClick={onMapClicked}
      style={{ width: '100%', height: '915px', position: 'relative' }}
      initialCenter={{
        lat: 37.759703,
        lng: -122.428093
      }}
      zoom={14}
    >
      <Marker
        onClick={onMarkerClick}
        position={{ lat: 37.759703, lng: -122.428093 }}
      />
      <InfoWindow
        marker={activeMarker}
        visible={showingInfoWindow}
      >
        <div>
          <BubleMark />
        </div>
      </InfoWindow>
    </Map>
  );
}

MapContainer.propTypes = {
  google: PropTypes.object.isRequired
};

const MapWithAMarker = GoogleApiWrapper({ apiKey: null })(MapContainer);

function ContactMap(props) {
  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  const { classes: align } = useTextAlign();
  const { full } = props;
  const { t } = useTranslation('common');
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  useEffect(() => {
    ValidatorForm.addValidationRule('isTruthy', value => value);
  });

  const [openNotif, setNotif] = useState(false);

  const [check, setCheck] = useState(false);

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleCheck = event => {
    setCheck(event.target.checked);
  };

  const handleSubmit = () => {
    setNotif(true);
  };

  const handleClose = () => {
    setNotif(false);
  };

  return (
    <Fragment>
      <div className={cx(classes.decoration, classes.left)}>
        <div className={classes.ball}>
          <ClayDeco img="/images/decoration/clay-ball.png" color="tripleMain" />
        </div>
        <div className={classes.bom}>
          <ClayDeco img="/images/decoration/clay-bom.png" color="doubleMain" />
        </div>
      </div>
      <div className={cx(classes.decoration, classes.right)}>
        <div className={classes.flower}>
          <ClayDeco img="/images/decoration/clay-snail.png" color="primaryLight" />
        </div>
        <div className={classes.bowl}>
          <ClayDeco img="/images/decoration/clay-bowl.png" color="accent" />
        </div>
      </div>
      <Container>
        <div className={classes.pageWrap}>
          <Snackbar
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            key="top right"
            open={openNotif}
            autoHideDuration={4000}
            onClose={handleClose}
            ContentProps={{
              'aria-describedby': 'message-id',
            }}
            className={classes.notif}
            message={<span id="message-id">Message Sent</span>}
          />
          <Grid container alignItems="center">
            <Grid item md={6} xs={12} sx={{ mr: -3 }}>
              <Paper className={cx(classes.formBox, full ? classes.mapForm : '')}>
                <div className={classes.form}>
                  <Title text={t('contact_title2')} align="center" />
                  <p className={cx(align.textCenter, text.paragraph)}>
                    {t('contact_subtitle')}
                  </p>
                  <ValidatorForm
                    onSubmit={handleSubmit}
                    onError={errors => console.log(errors)}
                  >
                    <Box py={3}>
                      <Grid container spacing={3}>
                        <Grid item xs={12}>
                          <TextValidator
                            className={classes.input}
                            fullWidth
                            label={t('form_name')}
                            onChange={handleChange('name')}
                            name="Name"
                            variant="filled"
                            value={values.name}
                            validators={['required']}
                            errorMessages={['This field is required']}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextValidator
                            className={classes.input}
                            fullWidth
                            label={t('form_email')}
                            onChange={handleChange('email')}
                            name="Email"
                            variant="filled"
                            value={values.email}
                            validators={['required', 'isEmail']}
                            errorMessages={['This field is required', 'email is not valid']}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextValidator
                            className={classes.input}
                            fullWidth
                            label={t('form_phone')}
                            onChange={handleChange('phone')}
                            name="Phone"
                            variant="filled"
                            value={values.phone}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextValidator
                            multiline
                            rows="6"
                            fullWidth
                            className={classes.input}
                            label={t('form_message')}
                            onChange={handleChange('message')}
                            name="Message"
                            variant="filled"
                            value={values.message}
                          />
                        </Grid>
                      </Grid>
                    </Box>
                    <FormControlLabel
                      className={classes.checkArea}
                      control={(
                        <Checkbox
                          validators={['isTruthy']}
                          errorMessages="This field is required"
                          checked={check}
                          value={check}
                          onChange={(e) => handleCheck(e)}
                          color="secondary"
                        />
                      )}
                      label={(
                        <span className={text.paragraph}>
                          {t('form_terms')}
                          <br />
                          <a href="#">
                            {t('form_privacy')}
                          </a>
                        </span>
                      )}
                    />
                    <div className={classes.btnArea}>
                      <Button
                        variant="contained"
                        fullWidth
                        type="submit"
                        color="primary"
                        size="large"
                        className={classes.buttonLarge}
                      >
                        {t('form_send')}
                        &nbsp;
                      </Button>
                    </div>
                  </ValidatorForm>
                </div>
              </Paper>
            </Grid>
            <Grid item md={6} xs={12}>
              <Paper className={cx(classes.map, full ? classes.full : '')} elevation={0}>
                <MapWithAMarker />
              </Paper>
            </Grid>
          </Grid>
        </div>
      </Container>
    </Fragment>
  );
}

ContactMap.propTypes = {
  full: PropTypes.bool
};

ContactMap.defaultProps = {
  full: false
};

export default ContactMap;
