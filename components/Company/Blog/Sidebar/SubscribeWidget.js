import React, { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import FilledInput from '@mui/material/FilledInput';
import Button from '@mui/material/Button';
import { useTranslation } from 'next-i18next';
import Paper from '../../../Cards/Paper';
import useStyles from '../blog-style';

function SidebarBlog() {
  const { classes } = useStyles();
  const [email, setEmail] = useState('');
  const { t } = useTranslation('common');

  const handleChange = event => {
    setEmail(event.target.value);
  };

  return (
    <Paper title={t('blog_subscribe')} icon="ion-ios-wifi" color="gradient" whiteBg noMargin desc="Get lates update from us">
      <div className={classes.subscribeForm}>
        <FormControl variant="filled" fullWidth>
          <InputLabel htmlFor="email_subscribe">Email</InputLabel>
          <FilledInput
            fullWidth
            id="email_subscribe"
            value={email}
            onChange={handleChange}
            className={classes.inputSubscribe}
            endAdornment={<Button variant="contained" size="small" color="black" type="submit">{t('btn_submit')}</Button>}
          />
        </FormControl>
      </div>
    </Paper>
  );
}

export default SidebarBlog;
