import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './decoration-style';

function Line(props) {
  const { children } = props;
  const { classes } = useStyles();

  return (
    <div className={classes.line}>
      <div className={classes.deco}>
        <svg className={classes.primary}>
          <use xlinkHref="/images/decoration/wave.svg#main" />
        </svg>
        <svg className={classes.secondary}>
          <use xlinkHref="/images/decoration/wave.svg#main" />
        </svg>
      </div>
      {children}
    </div>
  );
}

Line.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Line;
