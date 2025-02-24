import React from 'react';
import useStyles from './line-deco-style';

function LineDeco() {
  const { cx, classes } = useStyles();

  return (
    <div className={classes.line}>
      <div className={cx(classes.stringDeco, classes.string1)}>
        <span />
      </div>
      <div className={cx(classes.stringDeco, classes.string3)}>
        <span />
      </div>
    </div>
  );
}

export default LineDeco;
