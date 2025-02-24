import React from 'react';
import PropTypes from 'prop-types';
import FilterListIcon from '@mui/icons-material/FilterList';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import ViewListIcon from '@mui/icons-material/ViewList';
import WindowIcon from '@mui/icons-material/Window';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { useText } from 'theme/common';
import useStyles from './filter-style';

function Sorter(props) {
  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  // Media Query
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const {
    view, sortBySelected, total,
    switchView, sortBy, openFilter
  } = props;

  const sortList = [
    {
      title: 'Title A to Z',
      value: 'title-asc'
    },
    {
      title: 'Title Z to A',
      value: 'title-desc'
    },
    {
      title: 'Highest Price',
      value: 'price-asc'
    },
    {
      title: 'Lowest Price',
      value: 'price-desc'
    }
  ];

  const handleSortBy = event => {
    sortBy(event.target.value);
  };

  const handleView = (event, val) => {
    switchView(val);
  };

  return (
    <div className={classes.sorter}>
      <FormControl variant="standard" className={classes.select}>
        <Select
          value={sortBySelected}
          displayEmpty
          fullWidth
          variant="filled"
          inputProps={{ 'aria-label': 'Sort By:' }}
          onChange={(e) => handleSortBy(e)}
        >
          <MenuItem value=""><em>Sort By:</em></MenuItem>
          {sortList.map((item, index) => (
            <MenuItem key={index.toString()} value={item.value}>{item.title}</MenuItem>
          ))}
        </Select>
      </FormControl>
      {isTablet && (
        <Button
          variant="contained"
          className={classes.btnFilter}
          onClick={openFilter}
        >
          <FilterListIcon />
          Filter
        </Button>
      )}
      {!isMobile && (
        <ToggleButtonGroup
          size="small"
          value={view}
          exclusive
          onChange={handleView}
          aria-label="text alignment"
          className={classes.switchView}
        >
          <ToggleButton value="grid">
            <WindowIcon />
          </ToggleButton>
          <ToggleButton value="list">
            <ViewListIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      )}
      {isTablet && (
        <Typography component="h6" className={cx(classes.total, text.subtitle2)}>
          Show
          {' '}
          {total}
          {' '}
          Results
        </Typography>
      )}
    </div>
  );
}

Sorter.propTypes = {
  view: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  sortBySelected: PropTypes.string.isRequired,
  sortBy: PropTypes.func.isRequired,
  switchView: PropTypes.func.isRequired,
  openFilter: PropTypes.func.isRequired
};

export default Sorter;
