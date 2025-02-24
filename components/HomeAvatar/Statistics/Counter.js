import React from 'react';
import { useTranslation } from 'next-i18next';
import Container from '@mui/material/Container';
import Counter from '../../Counter';
import useStyles from './styles/counter-style';

function CounterBlock() {
  // Translation Function
  const { t } = useTranslation('common');
  const { classes } = useStyles();

  return (
    <Container className={classes.counterBg}>
      <Counter
        textFirst={{
 title: t('avatar.counter_hours'), count: 123, prefix: '+', suffix: 'M'
}}
        textMiddle={{
 title: t('avatar.counter_stream'), count: 456, prefix: '+', suffix: 'K'
}}
        textLast={{ title: t('avatar.counter_view'), count: 789, prefix: '+' }}
      />
    </Container>
  );
}

export default CounterBlock;
