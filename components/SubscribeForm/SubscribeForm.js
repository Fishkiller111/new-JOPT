import React, { useState } from 'react';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import SendIcon from '@mui/icons-material/Send';
import { useTranslation } from 'next-i18next';
import { useText } from 'theme/common';
import useStyles from './subscribe-style';

function SubscribeForm() {
  const { classes: text } = useText();
  const { classes } = useStyles();
  const { t } = useTranslation('common');

  const isTablet = useMediaQuery(theme => theme.breakpoints.up('sm'));

  const [value, setValue] = useState('');
  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <div className={classes.root}>
      <Container maxWidth="sm">
        <p className={text.subtitle2}>
          {t('blog_subscribe_desc')}
        </p>
        <div className={classes.form}>
          <form>
            <TextField
              variant="standard"
              className={classes.field}
              fullWidth
              placeholder={t('form_email')}
              onChange={(e) => handleChange(e)}
              value={value}
            />
            <Button variant="contained" color="secondary" className={classes.btn}>
              {isTablet ? (
                <span>
                  {t('blog_subscribe')}
                </span>
              ) : (
                <SendIcon />
              )}
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
}

export default SubscribeForm;
