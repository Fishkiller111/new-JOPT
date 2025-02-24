import React from 'react';
import { useTranslation } from 'next-i18next';
import Counter from '../../Counter';
import useStyles from './counter-style';

function Benefit() {
  // Translation Function
  const { t } = useTranslation('common');
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <Counter
        textFirst={{
 title: t('fintech.counter_users'), count: 123, prefix: '+', suffix: 'M'
}}
        textMiddle={{
 title: t('fintech.counter_downloads'), count: 456, prefix: '+', suffix: 'K'
}}
        textLast={{ title: t('fintech.counter_platforms'), count: 789, prefix: '+' }}
      />
    </div>
  );
}

export default Benefit;
