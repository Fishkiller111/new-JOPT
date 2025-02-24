import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import LocaleLink from '../../Link';
import useStyles from './profile-deco-card-style';

function ProfileDecoCard(props) {
  const { classes, cx } = useStyles();
  const {
    size, name, title,
    avatar, socmed, desc,
    href,
  } = props;

  return (
    <div className={cx(classes[size], classes.profileCard)}>
      <div className={classes.avatar}>
        {size === 'big' && (
          <Fragment>
            <svg className={classes.primary}>
              <use xlinkHref="/images/decoration/deco-liquid-line.svg#main" />
            </svg>
            <svg className={classes.secondary}>
              <use xlinkHref="/images/decoration/deco-liquid-line.svg#main" />
            </svg>
          </Fragment>
        )}
        {size === 'medium' && (
          <Fragment>
            <svg className={classes.primary}>
              <use xlinkHref="/images/decoration/deco-leaf-line.svg#main" />
            </svg>
            <svg className={classes.secondary}>
              <use xlinkHref="/images/decoration/deco-leaf-line.svg#main" />
            </svg>
          </Fragment>
        )}
        {size === 'small' ? (
          <span className={classes.decoCircle} />
        ) : (
          <div className={classes.bg}>
            <span />
          </div>
        )}
        <figure>
          <img src={avatar} alt="avatar" />
        </figure>
      </div>
      <div className={classes.property}>
        <Typography variant="h1">{name}</Typography>
        <Typography variant="h3">{title}</Typography>
        {size !== 'small' && (
          <Typography component="p">{desc}</Typography>
        )}
        <div className={classes.socmed}>
          {socmed.map((item, index) => (
            <IconButton key={index.toString()}>
              <i className={`ion-logo-${item}`} />
            </IconButton>
          ))}
        </div>
      </div>
      {href && (
        <ButtonBase component={LocaleLink} className={classes.link} to={href} />
      )}
    </div>
  );
}

ProfileDecoCard.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  size: PropTypes.string,
  href: PropTypes.string,
  desc: PropTypes.string,
  socmed: PropTypes.array,
};

ProfileDecoCard.defaultProps = {
  socmed: null,
  size: 'medium',
  desc: null,
  href: null,
};

export default ProfileDecoCard;
