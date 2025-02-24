import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import LocaleLink from '../../Link';
import useStyles from './single-card-style';

function SingleCard(props) {
  const { classes, cx } = useStyles();
  const {
    title, desc, color,
    img, bordered, href
  } = props;

  return (
    <Paper className={cx(classes.card, classes[color])}>
      <ButtonBase component={LocaleLink} to={href}>&nbsp;</ButtonBase>
      <div className={cx(classes.content, bordered && classes.bordered)}>
        <div className={classes.text}>
          <Typography variant="h3">{title}</Typography>
          <Typography>{desc}</Typography>
        </div>
        <img src={img} alt="illustration" />
      </div>
    </Paper>
  );
}

SingleCard.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  bordered: PropTypes.bool,
  color: PropTypes.string,
  href: PropTypes.string,
};

SingleCard.defaultProps = {
  color: 'primary',
  bordered: false,
  href: '#',
};

export default SingleCard;
