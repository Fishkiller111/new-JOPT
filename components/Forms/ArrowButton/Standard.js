import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LocaleLink from '../../Link';
import useStyles from './arrow-button-style';

function Standard(props) {
  const { cx, classes } = useStyles();
  const { text, color, href } = props;

  return (
    <Button size="large" component={LocaleLink} to={href} className={cx(classes.btnStandard, classes[color])}>
      {text}
      <ArrowForwardIcon />
    </Button>
  );
}

Standard.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  href: PropTypes.string,
};

Standard.defaultProps = {
  color: 'primary',
  href: '#',
};

export default Standard;
