import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import Icons3d from '../../Icons3d';
import useStyles from './styles/icon-style';

export default function Icon(props) {
  const { classes } = useStyles();
  const {
    icon,
    color,
  } = props;
  return (
    <Paper className={classes.iconCard}>
      <div className={classes.icon}>
        <Icons3d icon={icon} color={color} />
      </div>
    </Paper>
  );
}

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
