import React from 'react';
import PropTypes from 'prop-types';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import SearchIcon from '@mui/icons-material/Search';
import { useTranslation } from 'next-i18next';
import useStyles from './filter-style';

function Search(props) {
  const { value, updateValue } = props;
  const { classes } = useStyles();
  const { t } = useTranslation('common');

  const handleUpdateValue = event => {
    updateValue(event.target.value);
  };

  return (
    <div className={classes.searchBanner}>
      <div className={classes.search}>
        <FormControl variant="standard" component="form">
          <OutlinedInput
            value={value}
            onChange={(e) => handleUpdateValue(e)}
            className={classes.input}
            placeholder={t('list_search')}
            startAdornment={<SearchIcon />}
          />
        </FormControl>
      </div>
    </div>
  );
}

Search.propTypes = {
  value: PropTypes.string,
  updateValue: PropTypes.func.isRequired,
};

Search.defaultProps = {
  value: ''
};

export default Search;
