import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import useStyles from './styles/icon-style';

export default function Icon(props) {
  const { classes } = useStyles();
  const { img } = props;
  return (
    <Avatar src={img} className={classes.img} alt="expertise" variant="rounded" />
  );
}

Icon.propTypes = {
  img: PropTypes.string.isRequired,
};
