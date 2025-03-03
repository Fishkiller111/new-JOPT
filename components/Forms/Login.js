import React, { useState, useEffect } from 'react';
import Icon from '@mui/material/Icon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { useTranslation } from 'next-i18next';
import routeLink from 'public/text/link';
import { useText } from 'theme/common';
import LocaleLink from '../Link';
import SocialAuth from './SocialAuth';
import AuthFrame from './AuthFrame';
import useStyles from './form-style';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import ForgotPassword from './ForgotPassword';

function Login() {
  const { classes } = useStyles();
  const { classes: text } = useText();
  const { t } = useTranslation('common');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [openForgotPassword, setOpenForgotPassword] = useState(false);

  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
      if (value !== values.password) {
        return false;
      }
      return true;
    });
  });

  const [check, setCheck] = useState(false);

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleCheck = event => {
    setCheck(event.target.checked);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  const handleOpenForgotPassword = () => {
    setOpenForgotPassword(true);
  };

  const handleCloseForgotPassword = () => {
    setOpenForgotPassword(false);
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      setError('');

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: values.email,
          password: values.password
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || t('error_login_failed'));
      }

      const data = await response.json();
      
      if (data.token) {
        localStorage.setItem('token', data.token);
        window.dispatchEvent(new Event('user-login'));
      }

      // 显示成功提示
      setOpenSnackbar(true);

      // 延迟跳转，让用户看到成功提示
      setTimeout(() => {
        window.location.href = '/';
      }, 1000);

    } catch (err) {
      setError(err.message || t('error_login_process'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthFrame title={t('login_title')} subtitle={t('login_subtitle')}>
      <div>
        <div className={classes.head}>
          <Typography className={text.title2}>{t('login')}</Typography>
          <Button component={LocaleLink} size="small" className={classes.buttonLink} to={routeLink.register}>
            <Icon>arrow_forward</Icon>
            {t('login_create')}
          </Button>
        </div>
        {/* <SocialAuth /> */}
        {/* <div className={classes.separator}>
          <Typography>
            {t('login_or')}
          </Typography>
        </div> */}
        {error && (
          <Typography color="error" align="center" style={{ marginBottom: 16 }}>
            {error}
          </Typography>
        )}
        <ValidatorForm
          onError={errors => console.log(errors)}
          onSubmit={handleSubmit}
        >
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextValidator
                variant="filled"
                className={classes.input}
                label={t('login_email')}
                onChange={handleChange('email')}
                name="email"
                value={values.email}
                validators={['required', 'isEmail']}
                errorMessages={['This field is required', 'Email is not valid']}
              />
            </Grid>
            <Grid item xs={12}>
              <TextValidator
                variant="filled"
                type="password"
                className={classes.input}
                label={t('login_password')}
                validators={['required']}
                onChange={handleChange('password')}
                errorMessages={['This field is required']}
                name="password"
                value={values.password}
              />
            </Grid>
          </Grid>
          <div className={classes.formHelper}>
            <FormControlLabel
              control={(
                <Checkbox
                  component="span"
                  checked={check}
                  onChange={(e) => handleCheck(e)}
                  color="secondary"
                  value={check}
                  className={classes.check}
                />
              )}
              label={(
                <span className={text.caption}>
                  {t('login_remember')}
                </span>
              )}
            />
            <Button 
              size="small" 
              className={classes.buttonLink} 
              onClick={handleOpenForgotPassword}
            >
              {t('login_forgot')}
            </Button>
          </div>
          <div className={classes.btnArea}>
            <Button 
              variant="contained" 
              fullWidth 
              type="submit" 
              color="primary" 
              size="large"
              disabled={loading}
            >
              {loading ? <CircularProgress size={24} /> : t('continue')}
            </Button>
          </div>
        </ValidatorForm>
      </div>

      {/* 成功提示 */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          {t('login_success')}
        </Alert>
      </Snackbar>

      {/* 忘记密码对话框 */}
      <ForgotPassword 
        open={openForgotPassword} 
        onClose={handleCloseForgotPassword} 
      />
    </AuthFrame>
  );
}

export default Login;
