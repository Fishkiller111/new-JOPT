import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './decoration-style';

function Liquid(props) {
  const { children } = props;
  const { classes } = useStyles();

  return (
    <div className={classes.liquid}>
      {children}
    </div>
  );
}

Liquid.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Liquid;
