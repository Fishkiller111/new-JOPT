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
    balance: "0",
    email: "",
    tickets: [],
    soldTickets: [],
    created_at: "",
    updated_at: ""
  });
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [notification, setNotification] = useState({ open: false, message: '', severity: 'success' });
  const [isSubmitting, setIsSubmitting] = useState(false);
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

        // 使用 Promise.all 并行发起所有请求
        const [userResponse, soldTicketsResponse] = await Promise.all([
          fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/${userId}`, {
            headers: { 'Authorization': `Bearer ${token}` }
          }),
          fetch(`${process.env.NEXT_PUBLIC_API_URL}/ticket/sold/${userId}`, {
            headers: { 'Authorization': `Bearer ${token}` }
          })
        ]);

        if (!userResponse.ok) throw new Error('获取用户信息失败');
        if (!soldTicketsResponse.ok) throw new Error('获取售票记录失败');

        // 并行处理响应数据
        const [userData, soldTicketsData] = await Promise.all([
          userResponse.json(),
          soldTicketsResponse.json()
        ]);

        // 缓存用户基本信息
        const userBasicInfo = {
          name: userData.username || "",
          email: userData.email || "",
          balance: userData.balance?.toString() || "0",
          cardInfo: userData.verified ? "已认证用户" : "未认证用户",
          created_at: userData.created_at || "",
          updated_at: userData.updated_at || ""
        };
        localStorage.setItem('userBasicInfo', JSON.stringify(userBasicInfo));

        // 一次性更新所有状态
        setUserInfo({
          ...userBasicInfo,
          tickets: userData.tickets || [],
          soldTickets: soldTicketsData || []
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

  const handleSellTicket = async (ticket) => {
    setSelectedTicket(ticket);
    setOpenDialog(true);
  };

  const handleConfirmSell = async () => {
    if (isSubmitting) return;
    setIsSubmitting(true);

    const token = localStorage.getItem('token');
    const payload = jwtDecode(token);
    
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/ticket/sell`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        ticket_id: selectedTicket.id,
        user_id: payload.user_id
      })
    });
    if (response.status === 200) {
        setNotification({
            open: true,
            message: t('sell_ticket_success'),
            severity: 'success'
        });
    } else {
        setNotification({
            open: true,
            message: t('sell_ticket_failed'),
            severity: 'error'
        });
    }
    await window.location.reload();
  };
    
  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedTicket(null);
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
              <Tab label={t('card_info')} classes={{ root: classes.tabLabel }} />
              <Tab label={t('withdraw')} classes={{ root: classes.tabLabel }} />
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
                  {t('register_time')}：{new Date(userInfo.created_at).toLocaleString()}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {t('last_update')}：{new Date(userInfo.updated_at).toLocaleString()}
                </Typography>
              </Grid>
            </Grid>
          </TabPanel>

          {/* 卡信息面板 */}
          <TabPanel value={value} index={1}>
            <Box p={2}>
              <Typography variant="h6" className={text.subtitle}>
                coming soon
              </Typography>
              <Typography variant="body1" color="textSecondary">
                {t('card_valid_until')}: 2025-12-31
              </Typography>
            </Box>
          </TabPanel>

          {/* 提取余额面板 */}
          <TabPanel value={value} index={2}>
            <Box p={2}>
              <Typography variant="h6" className={text.subtitle} gutterBottom>
                {t('current_balance')}
              </Typography>
              <Typography variant="h4" className={text.title} color="primary" gutterBottom>
                $ {userInfo.balance}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                size="large"
                sx={{ mt: 2 }}
              >
                {t('withdraw_now')}
              </Button>
            </Box>
          </TabPanel>

          {/* 卖票记录面板 */}
          <TabPanel value={value} index={3}>
            <Box sx={{ mb: 2 }}>
              <Typography variant="h6" gutterBottom>
                {t('my_tickets')}
              </Typography>
              <List>
                {userInfo.tickets.filter(ticket => ticket.status !== 'sold').length > 0 ? (
                  userInfo.tickets
                    .filter(ticket => ticket.status !== 'sold')
                    .map((ticket) => (
                      <ListItem 
                        key={ticket.id} 
                        divider
                        sx={{
                          display: 'flex',
                          flexDirection: { xs: 'column', sm: 'row' },
                          alignItems: { xs: 'stretch', sm: 'center' },
                          gap: 2,
                          py: 2
                        }}
                      >
                        <Box sx={{ flex: 1 }}>
                          <Typography 
                            variant="h6" 
                            color="primary.main"
                            sx={{ mb: 1 }}
                          >
                            {ticket.event_name}
                          </Typography>
                          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 1 }}>
                            <Box>
                              <Typography variant="caption" color="textSecondary">
                                {t('ticket_type')}
                              </Typography>
                              <Typography variant="body1">
                                {ticket.name}
                              </Typography>
                            </Box>
                            <Box>
                              <Typography variant="caption" color="textSecondary">
                                {t('ticket_price')}
                              </Typography>
                              <Typography 
                                variant="body1" 
                                color="primary"
                                sx={{ fontWeight: 500 }}
                              >
                                ${ticket.price.toLocaleString()}
                              </Typography>
                            </Box>
                            <Box>
                              <Typography variant="caption" color="textSecondary">
                                {t('venue')}
                              </Typography>
                              <Typography variant="body1">
                                {ticket.event_place}
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={() => handleSellTicket(ticket)}
                          sx={{ 
                            alignSelf: { xs: 'stretch', sm: 'center' },
                            minWidth: 100
                          }}
                        >
                          {t('sell_ticket')}
                        </Button>
                      </ListItem>
                    ))
                ) : (
                  <Typography variant="body1" color="textSecondary" align="center">
                    {t('no_tickets_available')}
                  </Typography>
                )}
              </List>
            </Box>

            <Divider sx={{ my: 3 }} />

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
                            {t('sold_time')}：{new Date(ticket.sold_time).toLocaleString()}
                          </Typography>
                          <Typography component="div" variant="body2" color="textSecondary">
                            {t('verify_time')}：{new Date(ticket.verify_time).toLocaleString()}
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
                          color: ticket.status === 'sold' ? 'success.main' : 'warning.main',
                          mb: 1
                        }}
                      >
                        {ticket.status === 'sold' ? t('sold') : t(ticket.status)}
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

        {/* 卖票确认对话框 */}
        <Dialog
          open={openDialog}
          onClose={handleCloseDialog}
          aria-labelledby="sell-ticket-dialog"
        >
          <DialogTitle id="sell-ticket-dialog">{t('confirm_sell')}</DialogTitle>
          <DialogContent>
            {selectedTicket && (
              <Typography>
                {t('confirm_sell_message', { event: selectedTicket.event_name })}
              </Typography>
            )}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog} color="primary" disabled={isSubmitting}>
              {t('cancel')}
            </Button>
            <Button 
              onClick={handleConfirmSell} 
              color="primary" 
              variant="contained"
              disabled={isSubmitting}
            >
              {isSubmitting ? t('confirming') : t('confirm')}
            </Button>
          </DialogActions>
        </Dialog>

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