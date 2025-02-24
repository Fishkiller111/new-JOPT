import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import VerifiedIcon from '@mui/icons-material/Verified';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import { useTextAlign } from 'theme/common';
import LocaleLink from '../../Link';
import useStyles from './playlist-card-style';

function PlaylistCard(props) {
  const { classes, cx } = useStyles();
  const { classes: align } = useTextAlign();
  const {
    bgcolor,
    img,
    avatar,
    logo,
    title,
    verifiedUser,
    verifiedItem,
    name,
    desc,
    color,
    href,
    count,
    items,
    withDeco,
    textCenter
  } = props;

  return (
    <ButtonBase
      component={LocaleLink}
      draggable="false"
      className={cx(classes.playlistCard, withDeco && classes.deco, classes[bgcolor])}
      to={href}
    >
      {img && (
        <span className={classes.figure}>
          <img src={img} alt="img" />
        </span>
      )}
      <span className={cx(classes.property, classes[color], textCenter && align.textCenter)}>
        <Box component="span" sx={{ justifyContent: textCenter ? 'center' : 'flex-start' }} className={classes.head}>
          {logo && (
            <span className={classes.logo}>
              <img src={logo} alt="logo" />
            </span>
          )}
          <span className={classes.text}>
            <Typography component="span" className={classes.title}>
              {title}
              {verifiedItem && <VerifiedIcon className={classes.verified} />}
            </Typography>
            {name && (
              <span className={classes.user}>
                By&nbsp;
                <span className={classes.avatar}>
                  <img src={avatar} alt="logo" />
                </span>
                <span className={classes.name}>
                  {name}
                </span>
                {verifiedUser && <VerifiedIcon className={classes.verified} />}
              </span>
            )}
          </span>
        </Box>
        <span className={classes.desc}>
          {desc}
        </span>
        <ul className={classes.gallery}>
          {items.map((item, index) => (
            <li key={index.toString()}>
              <img src={item} alt="media" />
              {index === items.length - 1 && (
                <span>
                  <ViewQuiltIcon />
                  {count}
                </span>
              )}
            </li>
          ))}
        </ul>
      </span>
    </ButtonBase>
  );
}

PlaylistCard.propTypes = {
  img: PropTypes.string,
  avatar: PropTypes.string,
  logo: PropTypes.string,
  title: PropTypes.string.isRequired,
  name: PropTypes.string,
  desc: PropTypes.string.isRequired,
  count: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  color: PropTypes.string,
  verifiedUser: PropTypes.bool,
  verifiedItem: PropTypes.bool,
  withDeco: PropTypes.bool,
  textCenter: PropTypes.bool,
  href: PropTypes.string,
  bgcolor: PropTypes.string
};

PlaylistCard.defaultProps = {
  avatar: '/',
  img: null,
  href: '#',
  color: 'primary',
  verifiedUser: false,
  verifiedItem: false,
  withDeco: false,
  name: null,
  logo: null,
  textCenter: false,
  bgcolor: 'primaryLight'
};

export default PlaylistCard;
