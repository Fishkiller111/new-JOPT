import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import imgAPI from 'public/images/imgAPI';
import Icons3d from '../Icons3d';
import useStyles from './sharing-style';

function Sharing(props) {
  const {
    personBig, personMedium,
    personSmall1, personSmall2
  } = props;
  const { classes, cx } = useStyles();

  return (
    <div className={classes.sharing}>
      <div className={classes.big}>
        <div className={classes.liquid}>
          <span className={cx(classes.bg, classes.bgPrimary)} />
          <span className={classes.shadow} />
        </div>
        <div className={classes.person}>
          <img src={personBig} alt="person big" />
        </div>
        <div className={cx(classes.counter, classes.large)}>
          <Avatar className={classes.avatar}>
            <img src={imgAPI.avatar[11]} alt="avatar" />
          </Avatar>
          <div className={classes.ammount}>
            <div>
              <Avatar className={classes.logo}>
                <img src={imgAPI.logos[48]} alt="logo" />
              </Avatar>
              0.000679
            </div>
            <Box component="p" color="success.main">
              <i className="mdi mdi-check" />
              <strong>Sent</strong>
            </Box>
          </div>
        </div>
      </div>
      <div className={cx(classes.arrow, classes.primary)}>
        <svg>
          <use xlinkHref="/images/decoration/arrow.svg#main" />
        </svg>
        <div className={classes.icon}>
          <Icons3d icon="mdi-shield-lock" color="primary" />
        </div>
      </div>
      <div className={classes.medium}>
        <div className={classes.liquid}>
          <span className={cx(classes.bg, classes.bgSecondary)} />
          <span className={classes.shadow} />
        </div>
        <div className={classes.person}>
          <img src={personMedium} alt="person medium" />
        </div>
        <div className={cx(classes.counter, classes.small)}>
          <Avatar className={classes.avatar}>
            <img src={imgAPI.avatar[6]} alt="avatar" />
          </Avatar>
          <div className={classes.ammount}>
            <div>
              <Avatar className={classes.logo}>
                <img src={imgAPI.logos[55]} alt="logo" />
              </Avatar>
              0.079
            </div>
            <Box component="p" color="success.main">
              <i className="mdi mdi-check" />
              <strong>Sent</strong>
            </Box>
          </div>
        </div>
      </div>
      <div className={cx(classes.arrow, classes.secondary)}>
        <svg>
          <use xlinkHref="/images/decoration/arrow.svg#main" />
        </svg>
        <div className={classes.icon}>
          <Icons3d icon="mdi-check-decagram" color="secondary" />
        </div>
      </div>
      <div className={classes.small1}>
        <div className={classes.ovalDeco}>
          <Avatar className={classes.avatar}>
            <img src={personSmall1} alt="person small" />
          </Avatar>
        </div>
        <div className={cx(classes.counter, classes.mini)}>
          <Avatar className={classes.icon}>
            <DownloadForOfflineIcon />
          </Avatar>
          <div className={classes.ammount}>
            <div>
              <Avatar className={classes.logo}>
                <img src={imgAPI.logos[48]} alt="logo" />
              </Avatar>
              0.079
            </div>
            <p>
              Received from
              {' '}
              <strong>Jihan Doe</strong>
            </p>
          </div>
        </div>
      </div>
      <div className={classes.small2}>
        <div className={classes.ovalDeco}>
          <Avatar className={classes.avatar}>
            <img src={personSmall2} alt="person small" />
          </Avatar>
        </div>
        <div className={cx(classes.counter, classes.mini)}>
          <Avatar className={classes.icon}>
            <DownloadForOfflineIcon />
          </Avatar>
          <div className={classes.ammount}>
            <div>
              <Avatar className={classes.logo}>
                <img src={imgAPI.logos[55]} alt="logo" />
              </Avatar>
              0.079
            </div>
            <p>
              Received from
              {' '}
              <strong>Johan Doe</strong>
            </p>
          </div>
        </div>
      </div>
      <div className={cx(classes.arrow, classes.accent)}>
        <svg>
          <use xlinkHref="/images/decoration/arrow.svg#main" />
        </svg>
        <div className={classes.icon}>
          <Icons3d icon="mdi-shield-check" color="accent" />
        </div>
      </div>
    </div>
  );
}

Sharing.propTypes = {
  personBig: PropTypes.string.isRequired,
  personMedium: PropTypes.string.isRequired,
  personSmall1: PropTypes.string.isRequired,
  personSmall2: PropTypes.string.isRequired,
};

export default Sharing;
