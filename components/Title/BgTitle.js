import React from 'react';
import PropTypes from 'prop-types';
import { useTextGradient } from 'theme/common';
import Title from './Title';
import useStyles from './parallax-title-style';

function ParallaxTitle(props) {
  const { mainTitle, bgTitle, color } = props;
  const { classes, cx } = useStyles();
  const { classes: textGradient } = useTextGradient();

  return (
    <div className={classes.root}>
      <h2
        className={cx(
          classes.decoTitle,
          classes.static,
          textGradient[color]
        )}
      >
        {bgTitle}
      </h2>
      <Title align="center" text={mainTitle} />
    </div>
  );
}

ParallaxTitle.propTypes = {
  mainTitle: PropTypes.string.isRequired,
  bgTitle: PropTypes.string.isRequired,
  color: PropTypes.string,
};

ParallaxTitle.defaultProps = {
  color: 'doubleMain',
};

export default ParallaxTitle;
