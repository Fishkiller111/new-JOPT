import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Rating from '@mui/material/Rating';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTranslation } from 'next-i18next';
import useStyles from './filter-style';

function Filter(props) {
  const { classes } = useStyles();
  const { t } = useTranslation('common');

  const [range, setRange] = useState({ from: '', to: '' });
  const [expand, setExpand] = useState(['category', 'rating', 'check', 'radio']);
  const toggleExpand = cat => {
    const index = expand.indexOf(cat);
    if (index > -1) {
      setExpand(expanded => expanded.filter((_, id) => id !== index));
    } else {
      setExpand(oldArray => [...oldArray, cat]);
    }
  };

  const {
    filterCategory, changeCategory,
    filterRating, changeRating,
    filterTag, changeTag,
    changeRange,
    filterCheck, changeCheck, checkAll,
    filterRadio, changeRadio
  } = props;

  const handleChangeCategory = (event, cat) => {
    changeCategory(cat);
  };

  const handleChangeRating = (event, rating) => {
    changeRating(rating);
  };

  const handleChangeTag = event => {
    const val = event.target.value;
    const index = filterTag.indexOf(val);
    if (event.target.checked) {
      changeTag([...filterTag, val]);
    } else {
      changeTag(currentTag => currentTag.filter((tag, i) => i !== index));
    }
  };

  const handleChangeRange = (event) => {
    setRange({ ...range, [event.target.name]: Number(event.target.value) });
  };

  const handleChangeCheck = (event) => {
    const val = event.target.value;
    const index = filterCheck.indexOf(val);
    if (event.target.checked) {
      changeCheck([...filterCheck, val]);
    } else {
      changeCheck(currentCheck => currentCheck.filter((check, i) => i !== index));
    }
  };

  const handleCheckAll = () => {
    checkAll();
  };

  const handleChangeRadio = (event) => {
    changeRadio(event.target.value);
  };

  return (
    <div className={classes.filter}>
      {/* ======== Filter Categories ======== */}
      <div className={classes.filterBlock}>
        <Accordion
          expanded={expand.indexOf('category') > -1}
          onChange={() => toggleExpand('category')}
          className={classes.accordion}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            className={classes.titleLabel}
            aria-controls="filter-category"
            id="filter-category"
          >
            Filter Category
          </AccordionSummary>
          <AccordionDetails>
            <List>
              <ListItem
                button
                selected={filterCategory === 'all'}
                onClick={(event) => handleChangeCategory(event, 'all')}
                secondaryAction="123"
                className={classes.allFilter}
              >
                <ListItemText primary={t('list_filter')} />
              </ListItem>
              <ListItem
                button
                selected={filterCategory === 'cat-a'}
                onClick={(event) => handleChangeCategory(event, 'cat-a')}
                secondaryAction="456"
              >
                <ListItemText primary="Category a" />
              </ListItem>
              <ListItem
                button
                selected={filterCategory === 'cat-b'}
                onClick={(event) => handleChangeCategory(event, 'cat-b')}
                secondaryAction="789"
              >
                <ListItemText primary="Category b" />
              </ListItem>
              <ListItem
                button
                selected={filterCategory === 'cat-c'}
                onClick={(event) => handleChangeCategory(event, 'cat-c')}
                secondaryAction="10"
              >
                <ListItemText primary="Category c" />
              </ListItem>
              <ListItem
                button
                selected={filterCategory === 'cat-d'}
                onClick={(event) => handleChangeCategory(event, 'cat-d')}
                secondaryAction="1112"
              >
                <ListItemText primary="Category d" />
              </ListItem>
              <ListItem
                button
                selected={filterCategory === 'cat-e'}
                onClick={(event) => handleChangeCategory(event, 'cat-e')}
                secondaryAction="1213"
              >
                <ListItemText primary="Category e" />
              </ListItem>
              <ListItem
                button
                selected={filterCategory === 'cat-f'}
                onClick={(event) => handleChangeCategory(event, 'cat-f')}
                secondaryAction="1415"
              >
                <ListItemText primary="Category f " />
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>
      </div>
      {/* ======== Filter Rating ======== */}
      <div className={classes.filterBlock}>
        <Accordion
          expanded={expand.indexOf('rating') > -1}
          onChange={() => toggleExpand('rating')}
          className={classes.accordion}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            className={classes.titleLabel}
          >
            Filter Rating
          </AccordionSummary>
          <AccordionDetails>
            <List>
              <ListItem
                button
                selected={filterRating === 0}
                onClick={(event) => handleChangeRating(event, 0)}
                className={classes.allFilter}
              >
                <ListItemText primary="All Rating" />
              </ListItem>
              <ListItem
                button
                selected={filterRating === 1}
                onClick={(event) => handleChangeRating(event, 1)}
              >
                <ListItemText
                  secondary="Minimum 1 star rating"
                  primary={(
                    <Rating className={classes.starIcon} value={1} readOnly />
                  )}
                />
              </ListItem>
              <ListItem
                button
                selected={filterRating === 2}
                onClick={(event) => handleChangeRating(event, 2)}
              >
                <ListItemText
                  secondary="Minimum 2 star rating"
                  primary={(
                    <Rating value={2} className={classes.starIcon} readOnly />
                  )}
                />
              </ListItem>
              <ListItem
                button
                selected={filterRating === 3}
                onClick={(event) => handleChangeRating(event, 3)}
              >
                <ListItemText
                  secondary="Minimum 3 star rating"
                  primary={(
                    <Rating value={3} className={classes.starIcon} readOnly />
                  )}
                />
              </ListItem>
              <ListItem
                button
                selected={filterRating === 4}
                onClick={(event) => handleChangeRating(event, 4)}
              >
                <ListItemText
                  secondary="Minimum 4 star rating"
                  primary={(
                    <Rating value={4} className={classes.starIcon} readOnly />
                  )}
                />
              </ListItem>
              <ListItem
                button
                selected={filterRating === 5}
                onClick={(event) => handleChangeRating(event, 5)}
              >
                <ListItemText
                  secondary="Minimum 5 star rating"
                  primary={(
                    <Rating value={5} className={classes.starIcon} readOnly />
                  )}
                />
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>
      </div>
      {/* ======== Filter Tag ======== */}
      <Box mb={6} px={2}>
        <div className={classes.filterBlock}>
          <FormLabel className={classes.titleLabel} component="legend">Filter Tag</FormLabel>
          <form>
            <span className={classes.btnTag}>
              <input
                id="tag_one"
                type="checkbox"
                name="tag_one"
                onChange={(event) => handleChangeTag(event)}
                checked={filterTag.indexOf('tag-one') > -1}
                value="tag-one"
              />
              {/* eslint-disable-next-line */}
              <label htmlFor="tag_one">
                Tag One
              </label>
            </span>
            <span className={classes.btnTag}>
              <input
                id="tag_two"
                type="checkbox"
                name="tag_two"
                onChange={(event) => handleChangeTag(event)}
                checked={filterTag.indexOf('tag-two') > -1}
                value="tag-two"
              />
              {/* eslint-disable-next-line */}
              <label htmlFor="tag_two">
                Tag Two
              </label>
            </span>
            <span className={classes.btnTag}>
              <input
                id="tag_three"
                type="checkbox"
                name="tag_three"
                onChange={(event) => handleChangeTag(event)}
                checked={filterTag.indexOf('tag-three') > -1}
                value="tag-three"
              />
              {/* eslint-disable-next-line */}
              <label htmlFor="tag_three">
                Tag Three
              </label>
            </span>
            <span className={classes.btnTag}>
              <input
                id="tag_four"
                type="checkbox"
                name="tag_four"
                onChange={(event) => handleChangeTag(event)}
                checked={filterTag.indexOf('tag-four') > -1}
                value="tag-four"
              />
              {/* eslint-disable-next-line */}
              <label htmlFor="tag_four">
                Tag Four
              </label>
            </span>
          </form>
        </div>
      </Box>
      {/* ======== Filter Range ======== */}
      <Box mb={6} px={2}>
        <div className={classes.filterBlock}>
          <FormLabel className={classes.titleLabel} component="legend">Filter Range</FormLabel>
          <Grid container>
            <Grid item xs={4}>
              <FormControl variant="standard" component="div" className={classes.formControl}>
                <TextField
                  variant="filled"
                  hiddenLabel
                  size="small"
                  placeholder="From"
                  name="from"
                  type="number"
                  value={range.from}
                  onChange={(e) => handleChangeRange(e)}
                />
              </FormControl>
            </Grid>
            <Grid item xs={1}>
              <Box display="flex" alignItems="center" justifyContent="center" height="100%">
                &nbsp; - &nbsp;
              </Box>
            </Grid>
            <Grid item xs={4}>
              <FormControl variant="standard" component="div" className={classes.formControl}>
                <TextField
                  variant="filled"
                  hiddenLabel
                  size="small"
                  placeholder="To"
                  name="to"
                  type="number"
                  value={range.to}
                  onChange={(e) => handleChangeRange(e)}
                />
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <Button
                sx={{ ml: 1 }}
                color="primary"
                fullWidth
                size="small"
                variant="contained"
                onClick={() => changeRange(range)}
              >
                <Icon>navigate_next</Icon>
              </Button>
            </Grid>
          </Grid>
          <Box mt={2} />
        </div>
      </Box>
      {/* ======== Filter Check ======== */}
      <Box mb={6}>
        <div className={classes.filterBlock}>
          <Accordion
            expanded={expand.indexOf('check') > -1}
            onChange={() => toggleExpand('check')}
            className={classes.accordion}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              className={classes.titleLabel}
            >
              Filter Check
            </AccordionSummary>
            <AccordionDetails>
              <List sx={{ px: 2 }}>
                <FormControl variant="standard" component="div" className={classes.formControl}>
                  <FormGroup>
                    <ListItem className={classes.checklist} button onClick={() => handleCheckAll()}>
                      <ListItemText className={classes.allFilter} primary="Select All" />
                    </ListItem>
                    <ListItem className={classes.checklist} button>
                      <FormControlLabel
                        label="Check A"
                        control={(
                          <Checkbox
                            checked={filterCheck.indexOf('check-a') > -1}
                            value="check-a"
                            onChange={(event) => handleChangeCheck(event)}
                            name="a"
                            color="secondary"
                          />
                        )}
                      />
                    </ListItem>
                    <ListItem className={classes.checklist} button>
                      <FormControlLabel
                        label="Check B"
                        control={(
                          <Checkbox
                            checked={filterCheck.indexOf('check-b') > -1}
                            value="check-b"
                            onChange={(event) => handleChangeCheck(event)}
                            name="b"
                            color="secondary"
                          />
                        )}
                      />
                    </ListItem>
                    <ListItem className={classes.checklist} button>
                      <FormControlLabel
                        label="Check C"
                        control={(
                          <Checkbox
                            checked={filterCheck.indexOf('check-c') > -1}
                            value="check-c"
                            onChange={(event) => handleChangeCheck(event)}
                            name="c"
                            color="secondary"
                          />
                        )}
                      />
                    </ListItem>
                    <ListItem className={classes.checklist} button>
                      <FormControlLabel
                        label="Check D"
                        control={(
                          <Checkbox
                            checked={filterCheck.indexOf('check-d') > -1}
                            value="check-d"
                            onChange={(event) => handleChangeCheck(event)}
                            name="d"
                            color="secondary"
                          />
                        )}
                      />
                    </ListItem>
                    <ListItem className={classes.checklist} button>
                      <FormControlLabel
                        label="Check E"
                        control={(
                          <Checkbox
                            checked={filterCheck.indexOf('check-e') > -1}
                            value="check-e"
                            onChange={(event) => handleChangeCheck(event)}
                            name="e"
                            color="secondary"
                          />
                        )}
                      />
                    </ListItem>
                    <ListItem className={classes.checklist} button>
                      <FormControlLabel
                        label="Check F"
                        control={(
                          <Checkbox
                            checked={filterCheck.indexOf('check-f') > -1}
                            value="check-f"
                            onChange={(event) => handleChangeCheck(event)}
                            name="f"
                            color="secondary"
                          />
                        )}
                      />
                    </ListItem>
                  </FormGroup>
                </FormControl>
              </List>
            </AccordionDetails>
          </Accordion>
        </div>
      </Box>
      {/* ======== Filter Radio ======== */}
      <Box mb={6}>
        <div className={classes.filterBlock}>
          <Accordion
            expanded={expand.indexOf('radio') > -1}
            onChange={() => toggleExpand('radio')}
            className={classes.accordion}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              className={classes.titleLabel}
            >
              Filter Radio
            </AccordionSummary>
            <AccordionDetails>
              <FormControl sx={{ px: 2 }} variant="standard" component="fieldset">
                <RadioGroup aria-label="radio" name="radio" value={filterRadio} onChange={(event) => handleChangeRadio(event)}>
                  <FormControlLabel className={classes.allFilter} value="all" control={<Radio color="secondary" />} label={t('list_filter')} />
                  <FormControlLabel value="radio-a" control={<Radio color="secondary" />} label="Radio A" />
                  <FormControlLabel value="radio-b" control={<Radio color="secondary" />} label="Radio B" />
                  <FormControlLabel value="radio-c" control={<Radio color="secondary" />} label="Radio C" />
                  <FormControlLabel value="radio-d" control={<Radio color="secondary" />} label="Radio D" />
                  <FormControlLabel value="radio-e" control={<Radio color="secondary" />} label="Radio E" />
                  <FormControlLabel value="radio-f" control={<Radio color="secondary" />} label="Radio F" />
                </RadioGroup>
              </FormControl>
            </AccordionDetails>
          </Accordion>
        </div>
      </Box>
    </div>
  );
}

Filter.propTypes = {
  filterCategory: PropTypes.string.isRequired,
  changeCategory: PropTypes.func.isRequired,
  filterRating: PropTypes.number.isRequired,
  changeRating: PropTypes.func.isRequired,
  filterTag: PropTypes.array.isRequired,
  changeTag: PropTypes.func.isRequired,
  changeRange: PropTypes.func.isRequired,
  filterCheck: PropTypes.array.isRequired,
  changeCheck: PropTypes.func.isRequired,
  checkAll: PropTypes.func.isRequired,
  filterRadio: PropTypes.string.isRequired,
  changeRadio: PropTypes.func.isRequired
};

export default Filter;
