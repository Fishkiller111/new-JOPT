import React from 'react';
import PropTypes from 'prop-types';
import Countdown from 'react-countdown';
import { useTranslation } from 'next-i18next';
import useStyles from './countdown-style';

function CounterDown(props) {
  const { classes, cx } = useStyles();

  const { miliseconds, info, mini } = props;
  const { t } = useTranslation('common');

  // Random component
  const Completionist = () => <strong>Expired</strong>;

  // Renderer callback with condition
  const renderer = ({
    days, hours, minutes,
    seconds, completed
  }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    }
    // Render a countdown
    return (
      <p>
        <span>
          <strong>{days}</strong>
          {t('list_days')}
        </span>
        <i><strong>:</strong></i>
        <span>
          <strong>{hours}</strong>
          {t('list_hours')}
        </span>
        <i><strong>:</strong></i>
        <span>
          <strong>{minutes}</strong>
          {t('list_minutes')}
        </span>
        <i><strong>:</strong></i>
        <span>
          <strong>{seconds}</strong>
          {t('list_seconds')}
        </span>
      </p>
    );
  };

  return (
    <div className={classes.counterWrap}>
      <div className={classes.inner}>
        <div className={classes.countdown}>
          {info && info}
          <div className={cx(classes.time, mini && classes.mini)}>
            <Countdown date={Date.now() + miliseconds} renderer={renderer} />
          </div>
        </div>
      </div>
    </div>
  );
}

CounterDown.propTypes = {
  miliseconds: PropTypes.number.isRequired,
  info: PropTypes.string,
  mini: PropTypes.bool,
};

CounterDown.defaultProps = {
  info: null,
  mini: false,
};

export default CounterDown;
