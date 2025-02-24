import React from 'react';
import PropTypes from 'prop-types';
import Divider from '@mui/material/Divider';
import imgAPI from 'public/images/imgAPI';
import Icons3d from '../Icons3d';
import useStyles from './person-style';

function Person(props) {
  const { person } = props;
  const { classes } = useStyles();

  return (
    <div className={classes.person}>
      <div className={classes.background}>
        <div className={classes.secondary}>
          <svg className={classes.filled}>
            <use xlinkHref="/images/decoration/deco-liquid-fill.svg#main" />
          </svg>
          <svg className={classes.outlined}>
            <use xlinkHref="/images/decoration/deco-liquid-fill.svg#main" />
          </svg>
        </div>
        <div className={classes.primary}>
          <svg className={classes.filled}>
            <use xlinkHref="/images/decoration/deco-liquid-fill.svg#main" />
          </svg>
          <svg className={classes.outlined}>
            <use xlinkHref="/images/decoration/deco-liquid-fill.svg#main" />
          </svg>
        </div>
      </div>
      <div className={classes.photo}>
        <img src={person} alt="person" />
      </div>
      <div className={classes.icons}>
        <div className={classes.secondary}>
          <Icons3d icon="mdi-cloud" color="secondary" />
        </div>
        <div className={classes.accent}>
          <Icons3d icon="mdi-gamepad-square" color="accent" />
        </div>
      </div>
      <div className={classes.screen}>
        <span className={classes.top}>
          <img src={imgAPI.apps[1]} alt="apps" />
        </span>
        <span className={classes.center}>
          <img src={imgAPI.apps[3]} alt="apps" />
        </span>
        <span className={classes.bottom}>
          <img src={imgAPI.apps[2]} alt="apps" />
        </span>
      </div>
      <div className={classes.appUi}>
        <div className={classes.resume}>
          <span>Total Assets</span>
          <h3>
            $
            {' '}
            <strong>1200.31</strong>
            {' '}
            (21%)
            <i className="mdi mdi-arrow-up">&nbsp;</i>
          </h3>
        </div>
        <div className={classes.counter}>
          <div className={classes.item}>
            <span>
              <img src={imgAPI.logos[52]} alt="logo" />
              {' '}
              ION
            </span>
            <strong>1120.65</strong>
          </div>
          <Divider orientation="vertical" flexItem />
          <div className={classes.item}>
            <span>
              <img src={imgAPI.logos[48]} alt="logo" />
              {' '}
              BTC
            </span>
            <strong>0.000123</strong>
          </div>
          <Divider orientation="vertical" flexItem />
          <div className={classes.item}>
            <span>
              <img src={imgAPI.logos[53]} alt="logo" />
              {' '}
              IOT
            </span>
            <strong>0.000555</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

Person.propTypes = {
  person: PropTypes.string.isRequired,
};

export default Person;
