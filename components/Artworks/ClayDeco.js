import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './clay-deco-style';

export default function Clay(props) {
  const { classes, cx } = useStyles();
  const { img, color } = props;

  return (
    <div className={classes.clay}>
      <span
        style={{
          maskImage: `url(${img})`,
          maskRepeat: 'no-repeat',
          maskSize: '100%',
          WebkitMaskImage: `url(${img})`,
          WebkitMaskRepeat: 'no-repeat',
          WebkitMaskSize: '100%',
        }}
        className={cx(classes.mask, classes[color])}
      >
        <img src={img} alt="clay" />
      </span>
    </div>
  );
}

Clay.propTypes = {
  img: PropTypes.string.isRequired,
  color: PropTypes.string,
};

Clay.defaultProps = {
  color: 'primary'
};
