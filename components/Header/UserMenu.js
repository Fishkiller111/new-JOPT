import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { jwtDecode } from 'jwt-decode';
import routeLink from 'public/text/link';
import LocaleLink from '../Link';

function UserMenu() {
  const { t } = useTranslation('common');
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    // 检查是否已登录
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);

    if (token) {
      try {
        // 从token中获取用户信息
        const decoded = jwtDecode(token);
        setUsername(decoded.username || '');

        // 调用API获取最新的用户信息
        const fetchUserInfo = async () => {
          try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/${decoded.user_id}`, {
              headers: {
                'Authorization': `Bearer ${token}`
              }
            });
            if (response.ok) {
              const data = await response.json();
              setUsername(data.username || '');
            }
          } catch (error) {
            console.error('获取用户信息失败:', error);
          }
        };
        fetchUserInfo();
      } catch (error) {
        console.error('解析token失败:', error);
      }
    }
  }, []);

  if (!isLoggedIn) {
    return (
      <>
        <Button
          component={LocaleLink}
          href={routeLink.login}
          color="inherit"
          variant="text"
        >
          {t('login')}
        </Button>
        <Button
          component={LocaleLink}
          href={routeLink.register}
          color="inherit"
          variant="contained"
        >
          {t('register')}
        </Button>
      </>
    );
  }

  return (
    <Button
      component={LocaleLink}
      href="/profile"
      color="inherit"
    >
      {username || t('user_center')}
    </Button>
  );
}

export default UserMenu; 