import React from 'react';
import { useTranslation } from 'next-i18next';
import Container from '@mui/material/Container';
import Counter from '../../Counter';
import ParallaxTitle from '../../Title/ParallaxTitle';
import useStyles from './counter-style';

function Benefit() {
  // Translation Function
  const { t } = useTranslation('common');
  const { classes } = useStyles();

  return (
    <Container className={classes.root}>
      <ParallaxTitle
        bgTitle={t('wallet.best_bgtitle')}
        mainTitle={t('wallet.best_title')}
        color="tripleMain"
      />
      <Counter
        textFirst={{
          title: t('wallet.counter_downloads'), count: 123, prefix: '+', suffix: 'M'
        }}
        textMiddle={{
          title: t('wallet.counter_users'), count: 456, prefix: '+', suffix: 'M'
        }}
        textLast={{
          title: t('wallet.counter_platforms'), count: 789, prefix: '+', suffix: 'K'
        }}
      />
    </Container>
  );
}

export default Benefit;
