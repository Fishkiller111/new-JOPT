import React from 'react';
import PropTypes from 'prop-types';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useText } from 'theme/common';
import useStyles from './filter-style';

function TabCategory(props) {
  const { value, switchTab, total } = props;
  const { classes } = useStyles();
  const { classes: text } = useText();

  const isDesktop = useMediaQuery(theme => theme.breakpoints.up('md'));
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('sm'));

  return (
    <div className={classes.rootTab}>
      <Tabs
        centered={!isMobile}
        variant={isMobile ? 'scrollable' : 'fullWidth'}
        scrollButtons={isMobile}
        value={value}
        onChange={switchTab}
        classes={{
          indicator: classes.indicator
        }}
      >
        <Tab value="all" classes={{ root: classes.tabLabel }} label="All" />
        <Tab value="items" classes={{ root: classes.tabLabel }} label="Items" />
        <Tab value="collection" classes={{ root: classes.tabLabel }} label="Collection" />
        <Tab value="creators" classes={{ root: classes.tabLabel }} label="Creators" />
      </Tabs>
      {isDesktop && (
        <Typography component="h6" className={text.subtitle2}>
          Show
          {total}
          {' '}
          Results
        </Typography>
      )}
    </div>
  );
}

TabCategory.propTypes = {
  value: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  switchTab: PropTypes.func.isRequired,
};

export default TabCategory;
