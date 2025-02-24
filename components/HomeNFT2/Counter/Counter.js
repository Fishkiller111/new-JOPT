import React from 'react';
import { useTranslation } from 'next-i18next';
import Counter from '../../Counter';
import useStyles from './counter-style';

function CounterBlock() {
  // Translation Function
  const { t } = useTranslation('common');
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <Counter
        textFirst={{
 title: t('nft2.counter_users'), count: 123, prefix: '+', suffix: 'M'
}}
        textMiddle={{
 title: t('nft2.counter_platforms'), count: 456, prefix: '+', suffix: 'K'
}}
        textLast={{ title: t('nft2.counter_member'), count: 789, prefix: '+' }}
      />
    </div>
  );
}

export default CounterBlock;
