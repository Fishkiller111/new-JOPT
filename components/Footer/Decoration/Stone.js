import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './decoration-style';

function Stone(props) {
  const { children } = props;
  const { classes } = useStyles();

  return (
    <div className={classes.stone}>
      {children}
    </div>
  );
}

Stone.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Stone;
