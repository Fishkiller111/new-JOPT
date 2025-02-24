import React, { useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { useTranslation } from 'next-i18next';
import link from 'public/text/link';
import { useText, useTextAlign } from 'theme/common';
import Title from '../../Title';
import PricingCard from './PricingBasicCard';
import useStyles from './pricing-group-card-style';

const monthlyList = [
  {
    title: 'Free',
    price: 0,
    description: ['10 users included', '2 GB of storage'],
    info: 'Interdum et malesuada fames ac ante ipsum primis in faucibus.',
    buttonText: 'pricing_free',
    buttonVariant: 'outlined',
    link: link.register,
  },
  {
    title: 'Best Value',
    price: 5,
    description: [
      '15 users included',
      '10 GB of storage',
      'Help center access',
    ],
    info: 'Interdum et malesuada fames ac ante ipsum primis in faucibus.',
    buttonText: 'pricing_buy',
    buttonVariant: 'outlined',
    link: link.register
  },
  {
    title: 'Pro',
    price: 15,
    info: 'Interdum et malesuada fames ac ante ipsum primis in faucibus.',
    description: [
      '20 users included',
      '10 GB of storage',
      'Help center access',
    ],
    buttonText: 'pricing_buy',
    buttonVariant: 'contained',
    link: link.register,
  },
  {
    title: 'VIP',
    price: 30,
    info: 'Interdum et malesuada fames ac ante ipsum primis in faucibus.',
    description: [
      '50 users included',
      '30 GB of storage',
      'Phone & email support',
    ],
    buttonText: 'btn_contact',
    buttonVariant: 'outlined',
    link: link.contact
  }
];

const yearlyList = [
  {
    title: 'Pro',
    price: 50,
    info: 'Interdum et malesuada fames ac ante ipsum primis in faucibus.',
    description: [
      '20 users included',
      '10 GB of storage',
      'Help center access',
      'Priority email support',
    ],
    buttonText: 'pricing_buy',
    buttonVariant: 'contained',
    link: link.register,
  },
  {
    title: 'Best Value',
    price: 155,
    description: [
      '15 users included',
      '10 GB of storage',
      'Help center access',
      'Priority email support'
    ],
    info: 'Interdum et malesuada fames ac ante ipsum primis in faucibus.',
    buttonText: 'pricing_buy',
    buttonVariant: 'outlined',
    link: link.register,
  },
  {
    title: 'VIP',
    price: 300,
    info: 'Interdum et malesuada fames ac ante ipsum primis in faucibus.',
    description: [
      '50 users included',
      '30 GB of storage',
      'Help center access',
      'Phone & email support',
    ],
    buttonText: 'btn_contact',
    buttonVariant: 'outlined',
    link: link.contact,
  }
];

function PricingGroup() {
  const [value, setValue] = useState('monthly');

  const { classes, cx } = useStyles();
  const { classes: align } = useTextAlign();
  const { classes: text } = useText();
  const { t } = useTranslation('common');

  // Theme breakpoints
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  const handleChange = (event, category) => {
    setValue(category);
  };

  return (
    <Container className={classes.root}>
      <Title text={t('pricing_title')} align="center" />
      <p className={cx(text.subtitle2, align.textCenter)}>
        {t('pricing_desc')}
      </p>
      <div className={classes.tabs}>
        <Tabs
          centered
          value={value}
          onChange={handleChange}
          classes={{
            indicator: classes.indicator
          }}
        >
          <Tab value="monthly" classes={{ root: classes.tabLabel }} label="Monthly" />
          <Tab value="yearly" classes={{ root: classes.tabLabel }} label="Yearly" />
        </Tabs>
      </div>
      <div className={classes.pricingGroup}>
        {value === 'monthly' && (
          <Grid container alignItems="flex-end">
            {monthlyList.map((tier, index) => (
              // Enterprise card is full width at sm breakpoint
              <Grid item key={tier.title} xs={12} sm={6} md={3} sx={{ mb: isTablet ? 5 : 0 }}>
                <div className="animated fadeInLeft" style={{ animationDelay: index * 0.1 + 's' }}>
                  <PricingCard
                    title={tier.title}
                    subheader={tier.subheader}
                    price={tier.price}
                    description={tier.description}
                    info={tier.info}
                    buttonText={t('' + tier.buttonText)}
                    per="month"
                    href={tier.link}
                  />
                </div>
              </Grid>
            ))}
          </Grid>
        )}
        {value === 'yearly' && (
          <Grid container spacing={!isTablet ? 3 : 0} alignItems="flex-end">
            {yearlyList.map((tier, index) => (
              // Enterprise card is full width at sm breakpoint
              <Grid item key={tier.title} xs={12} sm={4} sx={{ mb: isTablet ? 5 : 0 }}>
                <div className="animated fadeInUp" style={{ animationDelay: index * 0.1 + 's' }}>
                  <PricingCard
                    title={tier.title}
                    subheader={tier.subheader}
                    price={tier.price}
                    description={tier.description}
                    info={tier.info}
                    buttonText={t('' + tier.buttonText)}
                    per="year"
                    href={tier.link}
                  />
                </div>
              </Grid>
            ))}
          </Grid>
        )}
      </div>
    </Container>
  );
}

export default PricingGroup;
