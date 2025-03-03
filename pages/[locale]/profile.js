import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'next-i18next';
import { getStaticPaths, makeStaticProps } from '../../lib/getStatic';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import IconButton from '@mui/material/IconButton';
import ArrowBack from '@mui/icons-material/ArrowBack';
import { useRouter } from 'next/router';
import { jwtDecode } from 'jwt-decode';
import { useText } from '../../theme/common';
import useStyles from '../../components/Forms/form-style';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { alpha } from '@mui/material/styles';

// 格式化日期函数
const formatDate = (dateString) => {
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return '-';
    }
    return date.toLocaleString();
  } catch (error) {
    console.error('日期格式化错误:', error);
    return '-';
  }
};

const Input = styled('input')({
  display: 'none',
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`profile-tabpanel-${index}`}
      aria-labelledby={`profile-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          {children}
        </Box>
      )}
    </div>
  );
}

export default function Profile() {
  const { t } = useTranslation('common');
  const { classes: text } = useText();
  const { classes, cx } = useStyles();
  const isTablet = useMediaQuery(theme => theme.breakpoints.down('lg'));
  const [value, setValue] = useState(0);
  const router = useRouter();
  const [userInfo, setUserInfo] = useState({
    name: "",
    cardInfo: "",
    email: "",
    soldTickets: [],
    created_at: "",
    updated_at: ""
  });
  const [notification, setNotification] = useState({ open: false, message: '', severity: 'success' });
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          router.push('/login');
          return;
        }

        const payload = jwtDecode(token);
        const userId = payload.user_id;

        // 获取用户信息
        const userResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/${userId}`, {
          headers: { 'Authorization': `Bearer ${token}` }
        });

        if (!userResponse.ok) throw new Error('获取用户信息失败');

        // 处理响应数据
        const userData = await userResponse.json();
        
        console.log('用户数据:', userData); // 调试日志
        
        // 缓存用户基本信息
        const userBasicInfo = {
          name: userData.username || "",
          email: userData.email || "",
          cardInfo: userData.verified ? "已认证用户" : "未认证用户",
          created_at: userData.created_at || "",
          updated_at: userData.updated_at || ""
        };
        localStorage.setItem('userBasicInfo', JSON.stringify(userBasicInfo));

        // 获取所有票据作为售出记录
        const soldTickets = userData.tickets || [];

        // 一次性更新所有状态
        setUserInfo({
          ...userBasicInfo,
          soldTickets: soldTickets
        });

      } catch (error) {
        console.error('获取数据失败:', error);
        // 如果API请求失败，尝试使用缓存数据
        const cachedBasicInfo = localStorage.getItem('userBasicInfo');
        if (cachedBasicInfo) {
          const parsedInfo = JSON.parse(cachedBasicInfo);
          setUserInfo(prev => ({
            ...prev,
            ...parsedInfo
          }));
        }
      }
    };

    fetchUserInfo();
  }, [router]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleBack = () => {
    router.push('/');
  };

  const handleCloseNotification = () => {
    setNotification(prev => ({ ...prev, open: false }));
  };

  const handleLogout = () => {
    if (isLoggingOut) return;
    setIsLoggingOut(true);
    
    // 清除所有用户相关的缓存
    localStorage.removeItem('token');
    localStorage.removeItem('userBasicInfo');
    
    // 显示登出成功提示
    setNotification({
      open: true,
      message: t('logout_success'),
      severity: 'success'
    });

    // 延迟跳转，让用户看到提示
    setTimeout(() => {
      router.push('/login');
    }, 1000);
  };

  return (
    <div className={classes.mainWrap}>
      <Container maxWidth="md">
        <Paper elevation={3} className={classes.formBox}>
          {/* 返回按钮和个人信息区域 */}
          <Box p={3}>
            <Box mb={2} display="flex" alignItems="center" justifyContent="space-between">
              <Box display="flex" alignItems="center">
                <IconButton 
                  onClick={handleBack}
                  sx={{ mr: 2 }}
                  aria-label={t('back_to_home')}
                >
                  <ArrowBack />
                </IconButton>
                <Typography variant="h6">
                  {t('profile_title')}
                </Typography>
              </Box>
              <Button
                variant="outlined"
                color="primary"
                startIcon={<ExitToAppIcon />}
                onClick={handleLogout}
                disabled={isLoggingOut}
              >
                {isLoggingOut ? t('logging_out') : t('user_logout')}
              </Button>
            </Box>
            <Grid container spacing={3}>
              <Grid item>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <Typography 
                    variant="h4" 
                    className={text.title}
                    sx={{ 
                      fontWeight: 600,
                      color: 'primary.main',
                      mb: 1
                    }}
                  >
                    {userInfo.name}
                  </Typography>
                  <Box
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      px: 1.5,
                      py: 0.5,
                      borderRadius: 20,
                      bgcolor: theme => userInfo.cardInfo.includes('已认证') 
                        ? alpha(theme.palette.success.main, 0.1)
                        : alpha(theme.palette.warning.main, 0.1),
                      color: theme => userInfo.cardInfo.includes('已认证')
                        ? theme.palette.success.main
                        : theme.palette.warning.main,
                    }}
                  >
                    <Typography 
                      variant="body2"
                      sx={{ 
                        fontWeight: 500,
                      }}
                    >
                      {userInfo.cardInfo}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>

          <Divider />

          {/* 导航标签 */}
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs
              value={value}
              onChange={handleChange}
              centered={!isTablet}
              variant={isTablet ? 'scrollable' : 'fullWidth'}
              scrollButtons={isTablet}
              classes={{
                indicator: classes.indicator
              }}
            >
              <Tab label={t('personal_info')} classes={{ root: classes.tabLabel }} />
              <Tab label={t('sales_record')} classes={{ root: classes.tabLabel }} />
            </Tabs>
          </Box>

          {/* 个人信息面板 */}
          <TabPanel value={value} index={0}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <Box sx={{
                  p: 2,
                  backgroundColor: 'rgba(0, 0, 0, 0.01)',
                  borderRadius: 1,
                  transition: 'all 0.3s',
                  '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.03)',
                  }
                }}>
                  <Typography variant="caption" color="textSecondary" gutterBottom>
                    {t('name')}
                  </Typography>
                  <Typography variant="h6" color="primary">
                    {userInfo.name || '-'}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box sx={{
                  p: 2,
                  backgroundColor: 'rgba(0, 0, 0, 0.01)',
                  borderRadius: 1,
                  transition: 'all 0.3s',
                  '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.03)',
                  }
                }}>
                  <Typography variant="caption" color="textSecondary" gutterBottom>
                    Email
                  </Typography>
                  <Typography variant="h6" color="primary">
                    {userInfo.email || '-'}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body2" color="textSecondary">
                  {t('register_time')}：{userInfo.created_at ? formatDate(userInfo.created_at) : '-'}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {t('last_update')}：{userInfo.updated_at ? formatDate(userInfo.updated_at) : '-'}
                </Typography>
              </Grid>
            </Grid>
          </TabPanel>

          {/* 卖票记录面板 */}
          <TabPanel value={value} index={1}>
            <Typography variant="h6" gutterBottom>
              {t('sales_record')}
            </Typography>
            <List>
              {userInfo.soldTickets.length > 0 ? (
                userInfo.soldTickets.map((ticket, index) => (
                  <ListItem key={ticket.id} divider>
                    <ListItemText
                      primary={
                        <Typography variant="subtitle1">
                          {ticket.event_name} - {ticket.name}
                        </Typography>
                      }
                      secondary={
                        <React.Fragment>
                          <Typography component="div" variant="body2" color="textSecondary">
                            {t('venue')}：{ticket.event_place}
                          </Typography>
                          <Typography component="div" variant="body2" color="textSecondary">
                            {t('sold_time')}：{ticket.sold_time ? formatDate(ticket.sold_time) : '-'}
                          </Typography>
                          <Typography component="div" variant="body2" color="textSecondary">
                            {t('verify_time')}：{ticket.verify_time ? formatDate(ticket.verify_time) : '-'}
                          </Typography>
                          <Typography component="div" variant="body2" color="primary" sx={{ mt: 1 }}>
                            {t('sold_price')}：${ticket.price}
                          </Typography>
                        </React.Fragment>
                      }
                    />
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          color: ticket.status === 'used' 
                            ? 'success.main' 
                            : ticket.status === 'invalid' 
                              ? 'error.main' 
                              : 'warning.main',
                          mb: 1
                        }}
                      >
                        {t(ticket.status)}
                      </Typography>
                      <Typography variant="caption" color="textSecondary">
                        {t('secret_key')}：{ticket.secret_key}
                      </Typography>
                    </Box>
                  </ListItem>
                ))
              ) : (
                <Typography variant="body1" color="textSecondary" align="center">
                  {t('no_sales_record')}
                </Typography>
              )}
            </List>
          </TabPanel>
        </Paper>

        {/* 通知消息 */}
        <Snackbar
          open={notification.open}
          autoHideDuration={4000}
          onClose={handleCloseNotification}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          <Alert onClose={handleCloseNotification} severity={notification.severity}>
            {notification.message}
          </Alert>
        </Snackbar>
      </Container>
    </div>
  );
}

const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps }; 