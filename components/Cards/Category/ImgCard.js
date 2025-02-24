import React from 'react';
import PropTypes from 'prop-types';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import LocaleLink from '../../Link';
import useStyles from './img-style';

function CategoryCard(props) {
  const { classes, cx } = useStyles();
  const {
    color,
    title,
    href,
    images,
  } = props;

  return (
    <ButtonBase
      component={LocaleLink}
      draggable="false"
      className={classes.categoryCard}
      to={href}
    >
      <span className={cx(classes.images, classes[color])}>
        {images.map((item, index) => (
          <span key={index.toString()} className={cx(classes.figure, index === 1 ? classes.center : '')}>
            <img src={item} alt="img" />
          </span>
        ))}
      </span>
      <Typography component="span" className={classes.title}>
        {title}
      </Typography>
    </ButtonBase>
  );
}

CategoryCard.propTypes = {
  color: PropTypes.string,
  href: PropTypes.string,
  title: PropTypes.string.isRequired,
  images: PropTypes.array.isRequired,
};

CategoryCard.defaultProps = {
  href: '#',
  color: 'purple'
};

export default CategoryCard;
