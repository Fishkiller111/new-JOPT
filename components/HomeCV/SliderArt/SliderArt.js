import React from 'react';
import PropTypes from 'prop-types';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import useStyles from './slider-art-style';

function SliderArt(props) {
  const { classes, cx } = useStyles();
  const { children, fade } = props;
  // Media query
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  return (
    <div className={classes.deco}>
      {isDesktop && (
        <div className={cx(classes.figure, fade ? classes.fade : '')}>
          {children}
        </div>
      )}
    </div>
  );
}

SliderArt.propTypes = {
  children: PropTypes.node.isRequired,
  fade: PropTypes.bool,
};

SliderArt.defaultProps = {
  fade: false
};

export default SliderArt;
