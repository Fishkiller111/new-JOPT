import React from 'react';
import PropTypes from 'prop-types';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import LocaleLink from '../../Link';
import useStyles from './case-cards-style';

function Case(props) {
  const { classes, cx } = useStyles();
  const {
    bg,
    logo,
    title,
    desc,
    href,
    orientation
  } = props;

  return (
    <ButtonBase
      component={LocaleLink}
      draggable="false"
      className={cx(classes.caseCard, classes[orientation])}
      to={href}
    >
      <span className={classes.figure}>
        <img src={bg} alt="img" />
      </span>
      <span className={classes.property}>
        <span className={classes.title}>
          <span className={classes.logo}>
            <img src={logo} alt="logo" />
          </span>
          <span className={classes.text}>
            <Typography component="span" className={classes.title}>
              {title}
            </Typography>
            <Typography component="span" className={classes.desc}>
              {desc}
            </Typography>
          </span>
        </span>
      </span>
    </ButtonBase>
  );
}

Case.propTypes = {
  bg: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  href: PropTypes.string,
  desc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  orientation: PropTypes.string,
};

Case.defaultProps = {
  href: '#',
  orientation: 'portrait'
};

export default Case;
