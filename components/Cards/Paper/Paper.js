import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import useStyles from './paper-style';

function PapperBlock(props) {
  const {
    title,
    desc,
    children,
    noMargin,
    color,
    overflowX,
    icon
  } = props;

  const { classes, cx } = useStyles();

  return (
    <div>
      <Paper className={cx(classes.root, noMargin && classes.noMargin, color && classes[color])} elevation={0}>
        <div className={classes.descBlock}>
          <span className={cx(classes.iconTitle, (!color || color === 'transparent') && classes.gradientIcon)}>
            <i className={icon} />
          </span>
          <div className={classes.titleText}>
            <Typography variant="h6" component="h2" className={classes.title}>
              {title}
            </Typography>
            <Typography component="p" className={classes.description}>
              {desc}
            </Typography>
          </div>
        </div>
        <div className={cx(classes.content, color === 'transparent' && classes.transparent, overflowX && classes.overflowX)}>
          {children}
        </div>
      </Paper>
    </div>
  );
}

PapperBlock.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  icon: PropTypes.string,
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  noMargin: PropTypes.bool,
  overflowX: PropTypes.bool,
};

PapperBlock.defaultProps = {
  noMargin: false,
  color: null,
  overflowX: false,
  icon: 'ion-ios-bookmark-outline'
};

export default PapperBlock;
