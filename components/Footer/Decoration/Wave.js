import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './decoration-style';

function Wave(props) {
  const { children } = props;
  const { classes } = useStyles();

  return (
    <div className={classes.wave}>
      <div className={classes.decoMask}>
        <svg className={classes.main}>
          <use xlinkHref="/images/decoration/deco-wave-bottom.svg#main" />
        </svg>
        <svg className={classes.darken}>
          <use xlinkHref="/images/decoration/deco-wave-bottom.svg#main" />
        </svg>
      </div>
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

Wave.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Wave;
