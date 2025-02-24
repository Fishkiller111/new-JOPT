import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import useStyles from './preview-card-style';

function PreviewCard(props) {
  const { classes } = useStyles();
  const {
    thumb,
    icon,
  } = props;

  return (
    <div className={classes.root}>
      <Avatar src={icon} variant="rounded" alt="icon" className={classes.icon} />
      <Paper className={classes.card}>
        <figure>
          <img src={thumb} alt="thumb" />
        </figure>
      </Paper>
    </div>
  );
}

PreviewCard.propTypes = {
  thumb: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default PreviewCard;
