import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import ButtonBase from '@mui/material/ButtonBase';
import useStyles from './icons-card-style';

function IconCard(props) {
  const { classes, cx } = useStyles();
  const { icon, text, href } = props;

  return (
    <Paper className={classes.root}>
      {href && <ButtonBase href={href}>&nbsp;</ButtonBase>}
      <i className={cx('mdi', icon)} />
      { text }
    </Paper>
  );
}

IconCard.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  href: PropTypes.string,
};

IconCard.defaultProps = {
  href: null
};

export default IconCard;
