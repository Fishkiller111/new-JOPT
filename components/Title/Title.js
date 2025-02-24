import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import useStyles from './title-style';

export default function Title(props) {
  const { classes, cx } = useStyles();
  const {
 text, align, dark, strictAlign
} = props;
  const setAlign = alignment => {
    switch (alignment) {
      case 'left':
        return classes.left;
      case 'right':
        return classes.right;
      case 'center':
        return classes.center;
      default:
        return classes.left;
    }
  };
  return (
    <div className={cx(
      classes.title,
      setAlign(align),
      dark && classes.dark,
      !strictAlign && classes.centerMobile
    )}
    >
      <Typography variant="h3">
        {text}
      </Typography>
    </div>
  );
}

Title.propTypes = {
  text: PropTypes.string.isRequired,
  align: PropTypes.string,
  dark: PropTypes.bool,
  strictAlign: PropTypes.bool,
};

Title.defaultProps = {
  align: 'left',
  dark: false,
  strictAlign: false
};
