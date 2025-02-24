import React from 'react';
import PropTypes from 'prop-types';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import LocaleLink from '../../Link';
import useStyles from './post-card-style';

function PostCard(props) {
  const { classes, cx } = useStyles();
  const {
    img, title, source,
    href, small, desc,
  } = props;

  return (
    <ButtonBase
      draggable="false"
      className={classes.postCard}
      component={LocaleLink}
      to={href}
    >
      <span className={classes.figure}>
        <img src={img} alt="img" />
      </span>
      <span className={classes.property}>
        <Typography component="span" className={cx(classes.title, small ? classes.small : classes.big)}>
          {title}
        </Typography>
        <span className={classes.desc}>
          <span className={classes.source}>
            {source}
          </span>
          <Typography component="span">
            {desc}
          </Typography>
        </span>
      </span>
    </ButtonBase>
  );
}

PostCard.propTypes = {
  img: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  href: PropTypes.string,
  small: PropTypes.bool,
};

PostCard.defaultProps = {
  href: '#',
  small: false,
};

export default PostCard;
