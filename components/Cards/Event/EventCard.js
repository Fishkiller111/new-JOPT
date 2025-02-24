import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import LocaleLink from '../../Link';
import useStyles from './event-card-style';

function EventCard(props) {
  const { classes, cx } = useStyles();
  const {
    color, date, location,
    desc, actionPrimary, actionSecondary,
  } = props;

  return (
    <Card className={cx(classes.eventCard, classes[color])}>
      <CardContent>
        <Typography component="h3" className={classes.date}>{date}</Typography>
        <Typography component="h5" className={classes.location}>{location}</Typography>
        <Typography component="p">{desc}</Typography>
        <div className={classes.btnArea}>
          {actionPrimary !== '' && (
            <Button color="black" component={LocaleLink} to={actionPrimary.href} variant="contained">
              {actionPrimary.text}
            </Button>
          )}
          {actionSecondary !== '' && (
            <Button color="black" component={LocaleLink} to={actionSecondary.href} variant="outlined">
              {actionSecondary.text}
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

EventCard.propTypes = {
  color: PropTypes.string,
  date: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  actionPrimary: PropTypes.object,
  actionSecondary: PropTypes.object,
};

EventCard.defaultProps = {
  color: 'primary',
  actionPrimary: null,
  actionSecondary: null,
};

export default EventCard;
