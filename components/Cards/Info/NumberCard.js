import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import { useTextGradient, useText } from 'theme/common';
import useStyles from './number-card-style';

function NumberCard(props) {
  const { classes } = useStyles();
  const { classes: gradient } = useTextGradient();
  const { classes: text } = useText();

  const {
    icon, title, desc,
    number, color
  } = props;

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <i className={icon} />
        <Typography variant="h5" sx={{ mb: 2 }} className={text.bold}>{title}</Typography>
        <Typography className={text.paragraph}>{desc}</Typography>
      </div>
      <h1 className={gradient[color]}>{number}</h1>
    </div>
  );
}

NumberCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  color: PropTypes.string,
};

NumberCard.defaultProps = {
  color: 'doubleMain',
};

export default NumberCard;
