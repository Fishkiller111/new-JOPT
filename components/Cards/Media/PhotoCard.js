import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import ButtonBase from '@mui/material/ButtonBase';
import { useText } from 'theme/common';
import LocaleLink from '../../Link';
import useStyles from './photo-card-style';

export default function PhotoCard(props) {
  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  const {
    img,
    title,
    link,
    href,
    size,
    openPopup
  } = props;

  const setSize = sizePaper => {
    switch (sizePaper) {
      case 'short':
        return classes.short;
      case 'long':
        return classes.long;
      default:
        return classes.medium;
    }
  };
  return (
    <Paper className={cx(classes.imgThumb, setSize(size))}>
      <ButtonBase onClick={openPopup}>
        <div className={classes.figure}>
          <div className={classes.img} style={{ backgroundImage: `url(${img})` }} />
        </div>
        <div className={classes.detail}>
          <Typography variant="h6" className={text.subtitle}>{title}</Typography>
          <LocaleLink to={href}>{link}</LocaleLink>
        </div>
      </ButtonBase>
    </Paper>
  );
}

PhotoCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  href: PropTypes.string,
  size: PropTypes.string,
  openPopup: PropTypes.func,
};

PhotoCard.defaultProps = {
  openPopup: () => {},
  href: '#',
  size: 'medium',
};
