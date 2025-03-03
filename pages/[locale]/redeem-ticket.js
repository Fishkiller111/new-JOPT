import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import { useTranslation } from 'next-i18next';
import { useText } from 'theme/common';
import AuthFrame from 'components/Forms/AuthFrame';
import { getStaticPaths, makeStaticProps } from '../../lib/getStatic';
import { jwtDecode } from "jwt-decode";
import { useRouter } from 'next/router';

function RedeemTicket() {
  const { classes: text } = useText();
  const { t } = useTranslation('common');
  const router = useRouter();
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      // 从localStorage获取token
      const token = localStorage.getItem('token');
      
      if (!token) {
        throw new Error('请先登录');
      }

      // 解析token获取userId
      try {
        const payload = jwtDecode(token);
        const userId = payload.user_id;

        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/verifier/verify`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({
            secret_key: code,
            userid: userId
          })
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || t('error_redeem_failed'));
        }

        const ticketData = await response.json();
        setSuccess(`${t('redeem_success')} - ${ticketData.event_name} ${ticketData.name}`);
        setCode('');
        
        // 3秒后跳转到个人中心
        setTimeout(() => {
          router.push('/profile');
        }, 3000);

      } catch (decodeError) {
        console.error('Token decode error:', decodeError);
        throw new Error('Token 解析失败');
      }

    } catch (err) {
      setError(err.message || t('error_redeem_process'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthFrame title={t('redeem_title')} subtitle={t('redeem_subtitle')}>
      <Container maxWidth="sm">
        <Box py={8}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h4" align="center" gutterBottom>
                {t('redeem_title')}
              </Typography>
              <Typography variant="body1" align="center" paragraph>
                {t('redeem_desc')}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label={t('redeem_code_label')}
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  error={!!error}
                  helperText={error}
                  disabled={loading}
                  sx={{ mb: 3 }}
                />
                {success && (
                  <Typography color="primary" align="center" sx={{ mb: 2 }}>
                    {success}
                  </Typography>
                )}
                <Button
                  fullWidth
                  size="large"
                  variant="contained"
                  color="primary"
                  type="submit"
                  disabled={!code || loading}
                  sx={{ mb: 2 }}
                >
                  {loading ? <CircularProgress size={24} /> : t('redeem_submit')}
                </Button>
                <Button
                  fullWidth
                  size="large"
                  variant="outlined"
                  onClick={() => router.back()}
                >
                  {t('btn_back')}
                </Button>
              </form>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </AuthFrame>
  );
}

const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };

export default RedeemTicket; 