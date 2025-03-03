import React, { useState, useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { useTranslation } from 'next-i18next';
import useStyles from './form-style';
import Alert from '@mui/material/Alert';
import { useText } from 'theme/common';

function ForgotPassword({ open, onClose }) {
  const { classes } = useStyles();
  const { classes: text } = useText();
  const { t } = useTranslation('common');
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1); // 1: 发送验证码, 2: 重置密码
  const [message, setMessage] = useState({ open: false, text: '', severity: 'success' });

  const [values, setValues] = useState({
    email: '',
    code: '',
    new_password: '',
    confirm_password: ''
  });

  useEffect(() => {
    ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
      if (value !== values.new_password) {
        return false;
      }
      return true;
    });
  }, [values.new_password]);

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleCloseMessage = () => {
    setMessage({ ...message, open: false });
  };

  const handleSendCode = async () => {
    try {
      setLoading(true);
      
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/password/forgot`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: values.email
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || t('error_send_code_failed'));
      }

      // 显示成功提示
      setMessage({
        open: true,
        text: t('code_sent_success'),
        severity: 'success'
      });

      // 进入第二步
      setStep(2);
    } catch (err) {
      setMessage({
        open: true,
        text: err.message || t('error_send_code_process'),
        severity: 'error'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async () => {
    try {
      setLoading(true);
      
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/password/reset`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: values.email,
          code: values.code,
          new_password: values.new_password
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || t('error_reset_password_failed'));
      }

      // 显示成功提示
      setMessage({
        open: true,
        text: t('reset_password_success'),
        severity: 'success'
      });

      // 延迟关闭对话框
      setTimeout(() => {
        onClose();
        setStep(1);
        setValues({
          email: '',
          code: '',
          new_password: '',
          confirm_password: ''
        });
      }, 2000);
    } catch (err) {
      setMessage({
        open: true,
        text: err.message || t('error_reset_password_process'),
        severity: 'error'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    onClose();
    setStep(1);
    setValues({
      email: '',
      code: '',
      new_password: '',
      confirm_password: ''
    });
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="forgot-password-dialog"
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle id="forgot-password-dialog">
          <Typography variant="h6" className={text.title}>
            {step === 1 ? t('forgot_password') : t('reset_password')}
          </Typography>
        </DialogTitle>
        <DialogContent>
          {message.open && (
            <Alert 
              severity={message.severity} 
              sx={{ width: '100%', marginBottom: 2 }}
              onClose={handleCloseMessage}
            >
              {message.text}
            </Alert>
          )}
          
          {step === 1 ? (
            <ValidatorForm
              onError={errors => console.log(errors)}
              onSubmit={handleSendCode}
            >
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Typography variant="body2" gutterBottom>
                    {t('forgot_password_instruction')}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <TextValidator
                    variant="filled"
                    className={classes.input}
                    label={t('login_email')}
                    onChange={handleChange('email')}
                    name="email"
                    value={values.email}
                    validators={['required', 'isEmail']}
                    errorMessages={[t('field_required'), t('email_invalid')]}
                    fullWidth
                  />
                </Grid>
              </Grid>
              <DialogActions>
                <Button onClick={handleClose} color="primary">
                  {t('cancel')}
                </Button>
                <Button 
                  type="submit" 
                  color="primary" 
                  variant="contained"
                  disabled={loading}
                >
                  {loading ? <CircularProgress size={24} /> : t('send_code')}
                </Button>
              </DialogActions>
            </ValidatorForm>
          ) : (
            <ValidatorForm
              onError={errors => console.log(errors)}
              onSubmit={handleResetPassword}
            >
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Typography variant="body2" gutterBottom>
                    {t('reset_password_instruction')}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <TextValidator
                    variant="filled"
                    className={classes.input}
                    label={t('verification_code')}
                    onChange={handleChange('code')}
                    name="code"
                    value={values.code}
                    validators={['required']}
                    errorMessages={[t('field_required')]}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextValidator
                    variant="filled"
                    type="password"
                    className={classes.input}
                    label={t('new_password')}
                    onChange={handleChange('new_password')}
                    name="new_password"
                    value={values.new_password}
                    validators={['required']}
                    errorMessages={[t('field_required')]}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextValidator
                    variant="filled"
                    type="password"
                    className={classes.input}
                    label={t('confirm_password')}
                    onChange={handleChange('confirm_password')}
                    name="confirm_password"
                    value={values.confirm_password}
                    validators={['required', 'isPasswordMatch']}
                    errorMessages={[t('field_required'), t('password_mismatch')]}
                    fullWidth
                  />
                </Grid>
              </Grid>
              <DialogActions>
                <Button onClick={handleClose} color="primary">
                  {t('cancel')}
                </Button>
                <Button 
                  type="submit" 
                  color="primary" 
                  variant="contained"
                  disabled={loading}
                >
                  {loading ? <CircularProgress size={24} /> : t('reset_password')}
                </Button>
              </DialogActions>
            </ValidatorForm>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}

export default ForgotPassword; 