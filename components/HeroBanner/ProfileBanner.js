import React from 'react';
import PropTypes from 'prop-types';
import useMediaQuery from '@mui/material/useMediaQuery';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { useTranslation } from 'next-i18next';
import { useText } from 'theme/common';
import Counter from '../Counter';
import useStyles from './hero-style';

function ProfileBanner(props) {
  const {
    avatar, cover, name,
    desc, following, followers,
    posts, socmed, friends,
    decoration: Decoration,
  } = props;

  const { classes } = useStyles();
  const { classes: text } = useText();

  const isMobile = useMediaQuery(theme => theme.breakpoints.down('md'));
  const { t } = useTranslation('common');

  return (
    <Container className={classes.profile}>
      <Decoration />
      <div className={classes.avatar}>
        <span className={classes.decoCircleLine} />
        <Avatar alt="avatar" src={avatar} />
      </div>
      <Paper className={classes.profileCover}>
        <figure>
          <img src={cover} alt="cover" />
        </figure>
        <h3 className={text.title2}>{name}</h3>
        <p>{desc}</p>
        {socmed.length > 0 && (
          <div className={classes.socmed}>
            {socmed.map((item, index) => (
              <IconButton key={index.toString()} href="#">
                <i className={`ion-logo-${item}`} />
              </IconButton>
            ))}
          </div>
        )}
        <Counter
          mini
          textFirst={{ title: t('followers'), count: followers }}
          textMiddle={{ title: t('posts'), count: posts }}
          textLast={{ title: t('following'), count: following }}
        />
      </Paper>
      <div className={classes.folowers}>
        <AvatarGroup max={isMobile ? 6 : 10}>
          {friends.map((item, index) => (
            <Avatar className={classes.avatarSmall} key={index.toString()} alt="avatar" src={item} />
          ))}
        </AvatarGroup>
        <Button className={classes.btn} variant="contained" color="primaryLight" size={isMobile ? 'small' : 'large'}>{t('follow')}</Button>
      </div>
    </Container>
  );
}

ProfileBanner.propTypes = {
  avatar: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  following: PropTypes.number.isRequired,
  followers: PropTypes.number.isRequired,
  posts: PropTypes.number.isRequired,
  friends: PropTypes.array.isRequired,
  socmed: PropTypes.array,
  decoration: PropTypes.elementType,
};

ProfileBanner.defaultProps = {
  socmed: [],
  decoration: null,
};

export default ProfileBanner;
