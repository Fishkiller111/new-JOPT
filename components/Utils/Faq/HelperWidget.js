import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { useTranslation } from 'next-i18next';
import { useTextAlign } from 'theme/common';
import link from 'public/text/link';
import imgAPI from 'public/images/imgAPI';
import LocaleLink from '../../Link';
import useStyles from './faq-style';

function HelperWidget() {
  const { t } = useTranslation('common');
  const { classes, cx } = useStyles();
  const { classes: align } = useTextAlign();

  return (
    <Card className={cx(classes.helpPaper, align.textCenter)}>
      <img src={imgAPI.inner[20]} alt="illustration" />
      <CardContent>
        <Typography sx={{ mb: { lg: 2 } }} variant="h6" align="center">
          {t('faq_luck')}
        </Typography>
        <Typography>
          {t('faq_luck_desc')}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          component={LocaleLink}
          fullWidth
          to={link.contact}
          color="primary"
          size="large"
          variant="contained"
        >
          {t('faq_luck_btn')}
        </Button>
      </CardActions>
    </Card>
  );
}

export default HelperWidget;
