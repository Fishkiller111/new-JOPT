import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import useStyles from './testi-card-style';

export default function Testimonial(props) {
  const { classes } = useStyles();
  const {
    text,
    name,
    title,
    img
  } = props;
  return (
    <div className={classes.testimonial}>
      <div className={classes.deco} />
      <div className={classes.text}>
        <p className={classes.content}>
          <span>
            {text}
          </span>
        </p>
        <Typography variant="h6">
          {name}
        </Typography>
        <p className={classes.captionTitle}>
          {title}
        </p>
      </div>
      <figure>
        <img src={img} alt="testimonial" />
      </figure>
    </div>
  );
}

Testimonial.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};
