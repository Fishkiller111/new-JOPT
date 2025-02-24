import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Zoom from '@mui/material/Zoom';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { useTranslation } from 'next-i18next';
import routeLink from 'public/text/link';
import { useText } from 'theme/common';
import LocaleLink from '../Link';
import Checkbox from './Checkbox';
// import SocialAuth from './SocialAuth';
import AuthFrame from './AuthFrame';
import useStyles from './form-style';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Zoom ref={ref} {...props} />;
});

function Register() {
  const { classes, cx } = useStyles();
  const { classes: text } = useText();

  const { t } = useTranslation('common');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [openDialog, setOpenDialog] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [verifyCode, setVerifyCode] = useState('');
  const [verifying, setVerifying] = useState(false);
  const [verifyError, setVerifyError] = useState('');

  useEffect(() => {
    ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
      if (value !== values.password) {
        return false;
      }
      return true;
    });
    ValidatorForm.addValidationRule('isTruthy', value => value);
  });

  const [check, setCheck] = useState(false);

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleCheck = event => {
    setCheck(event.target.checked);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      setError('');
      
      const registerResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: values.email,
          password: values.password,
          username: values.name
        })
      });

      if (!registerResponse.ok) {
        const errorData = await registerResponse.json();
        throw new Error(errorData.message || t('error_register_failed'));
      }

      setSnackbarMessage(t('register_success'));
      setOpenSnackbar(true);

      const verificationResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/email/send-verification`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: values.email
        })
      });

      if (!verificationResponse.ok) {
        console.error(t('error_send_verify_failed'));
      }

      setOpenDialog(true);
      
    } catch (err) {
      setError(err.message || t('error_register_process'));
    } finally {
      setLoading(false);
    }
  };

  const handleVerifySubmit = async () => {
    try {
      setVerifying(true);
      setVerifyError('');

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/email/verify`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: values.email,
          code: verifyCode
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || t('error_verify_failed'));
      }

      // 显示验证成功提示
      setSnackbarMessage(t('verify_success'));
      setOpenSnackbar(true);
      handleCloseDialog();

      // 延迟跳转，让用户看到成功提示
      setTimeout(() => {
        window.location.href = routeLink.login;
      }, 1000);

    } catch (err) {
      setVerifyError(err.message || t('error_verify_process'));
    } finally {
      setVerifying(false);
    }
  };

  return (
    <AuthFrame title={t('register_title')} subtitle={t('register_subtitle')} type="register">
      <div>
        <div className={classes.head}>
          <Typography className={text.title2}>{t('register')}</Typography>
          <Button component={LocaleLink} size="small" className={classes.buttonLink} to={routeLink.login}>
            <Icon>arrow_forward</Icon>
            {t('register_already')}
          </Button>
        {/* </div>
        {/* <SocialAuth /> */}
        {/* <div className={classes.separator}>
          {/* <Typography>{t('register_or')}</Typography> */}
        </div> 
        <ValidatorForm
          onError={errors => console.log(errors)}
          onSubmit={handleSubmit}
        >
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextValidator
                variant="filled"
                className={classes.input}
                label={t('register_name')}
                onChange={handleChange('name')}
                name="name"
                value={values.name}
                validators={['required']}
                errorMessages={['This field is required']}
              />
            </Grid>
            <Grid item xs={12}>
              <TextValidator
                variant="filled"
                className={classes.input}
                label={t('register_email')}
                onChange={handleChange('email')}
                name="email"
                value={values.email}
                validators={['required', 'isEmail']}
                errorMessages={['This field is required', 'Email is not valid']}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextValidator
                variant="filled"
                type="password"
                className={classes.input}
                label={t('register_password')}
                validators={['required']}
                onChange={handleChange('password')}
                errorMessages={['This field is required']}
                name="password"
                value={values.password}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextValidator
                variant="filled"
                type="password"
                className={classes.input}
                label={t('register_confirm')}
                validators={['isPasswordMatch', 'required']}
                errorMessages={['Password mismatch', 'This field is required']}
                onChange={handleChange('confirmPassword')}
                name="confirm"
                value={values.confirmPassword}
              />
            </Grid>
          </Grid>
          <div className={cx(classes.btnArea, classes.double)}>
            <FormControlLabel
              control={(
                <Checkbox
                  validators={['isTruthy']}
                  errorMessages="This field is required"
                  checked={check}
                  value={check}
                  onChange={(e) => handleCheck(e)}
                  color="primary"
                />
              )}
              label={(
                <span className={text.caption}>
                  {t('form_terms')}
                  &nbsp;
                  <a href="#">
                    {t('form_privacy')}
                  </a>
                </span>
              )}
            />
            <Button variant="contained" type="submit" color="primary" size="large">
              {t('continue')}
            </Button>
          </div>
        </ValidatorForm>
      </div>

      {/* 邮箱验证弹窗 */}
      <Dialog
        open={openDialog}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseDialog}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        classes={{
          paper: classes.paper
        }}
      >
        <DialogTitle>
          {t('email_verify_title')}
          <IconButton 
            onClick={handleCloseDialog}
            className={classes.closeBtn}
            size="large"
            sx={{
              position: 'absolute',
              right: 8,
              top: 8
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Typography variant="body1" gutterBottom>
            {t('email_verify_sent', { email: values.email })}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {t('email_verify_input')}
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            value={verifyCode}
            onChange={(e) => setVerifyCode(e.target.value)}
            placeholder={t('email_verify_placeholder')}
            sx={{ mt: 2 }}
            error={!!verifyError}
            helperText={verifyError}
          />
          <Box sx={{ mt: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Button
              color="primary"
              onClick={() => {
                handleSubmit();
              }}
              disabled={verifying}
            >
              {t('email_verify_resend')}
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={handleVerifySubmit}
              disabled={!verifyCode || verifying}
              sx={{ minWidth: 120 }}
            >
              {verifying ? <CircularProgress size={24} /> : t('email_verify_confirm')}
            </Button>
          </Box>
        </DialogContent>
      </Dialog>

      {/* 成功提示 */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </AuthFrame>
  );
}

export default Register;
