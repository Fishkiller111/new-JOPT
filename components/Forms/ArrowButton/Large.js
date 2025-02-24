import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LocaleLink from '../../Link';
import useStyles from './arrow-button-style';

function Large(props) {
  const { cx, classes } = useStyles();
  const { text, fullHeight, href } = props;

  return (
    <Button component={LocaleLink} size="large" to={href} className={cx(classes.btnLarge, fullHeight && classes.fullHeight)}>
      <img src="/images/inner/fog.png" alt="background" />
      <span className={classes.deco}>
        <span />
        <span />
        <span />
      </span>
      <h2>{text}</h2>
      <ArrowForwardIcon />
    </Button>
  );
}

Large.propTypes = {
  text: PropTypes.string.isRequired,
  fullHeight: PropTypes.bool,
  href: PropTypes.string
};

Large.defaultProps = {
  fullHeight: false,
  href: '#',
};

export default Large;
