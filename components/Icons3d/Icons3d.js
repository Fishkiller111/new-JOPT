import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './icons-3d-style';

export default function Icons3d(props) {
  const { classes, cx } = useStyles();
  const { icon, color } = props;

  return (
    <div className={classes.icon3d}>
      <span className={cx(classes.icon, classes[color])}>
        <i className={cx(classes.shadow, 'mdi', icon)} />
        <i className={cx(classes.emboss1, 'mdi', icon)} />
        <i className={cx(classes.emboss2, 'mdi', icon)} />
        <i className={cx(classes.front, classes[color], 'mdi', icon)} />
        <i className={cx(classes.emboss3, 'mdi', icon)} />
        <i className={cx(classes.overlay, 'mdi', icon)} />
      </span>
    </div>
  );
}

Icons3d.propTypes = {
  icon: PropTypes.string.isRequired,
  color: PropTypes.string,
};

Icons3d.defaultProps = {
  color: 'primary'
};
