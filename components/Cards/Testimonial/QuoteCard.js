import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import useStyles from './quote-card-style';

export default function Testimonial(props) {
  const { classes, cx } = useStyles();
  const {
    text,
    name,
    title,
    avatar
  } = props;
  return (
    <div className={classes.root}>
      <div className={classes.deco} />
      <Paper className={classes.paper}>
        <i className={cx('ion-ios-quote', classes.primary)} />
        <i className={cx('ion-ios-quote', classes.secondary)} />
        <Avatar src={avatar} className={classes.avatar} alt="avatar profile" />
        <div className={classes.content}>
          <Typography>
            &ldquo;
            {text}
            &rdquo;
          </Typography>
          <Typography variant="h6">
            {name}
          </Typography>
          <Typography variant="caption" className={classes.captionTitle}>
            {title}
          </Typography>
        </div>
      </Paper>
    </div>
  );
}

Testimonial.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};
